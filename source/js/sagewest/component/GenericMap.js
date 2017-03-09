goog.provide('sagewest.component.GenericMap');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The CLASSNAME constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
sagewest.component.GenericMap = function(options, element) {
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, sagewest.component.GenericMap.DEFAULT, options);
  this.element = element;


  this.map = null;
  this.infobox = null;

  this.map_element = this.element.find('.generic-map-map');

  this.center_lat = 0;
  this.center_lng = 0;
  this.center_point = null;


  this.google_style_array = this.options['google_style_array'];


  var target_zoom = this.element.attr('data-zoom');
  this.zoom = 15;

  if (goog.isDefAndNotNull(target_zoom) && target_zoom != '') {
    this.zoom = parseInt(target_zoom);
  }


  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //


  var target_lat = this.element.attr('data-lat');
  var target_lng = this.element.attr('data-lng');

  if (goog.isDefAndNotNull(target_lat) && 
      target_lat != '' && 
      goog.isDefAndNotNull(target_lng) && 
      target_lng != ''){


    this.create_map();
    this.create_markers();

  } else {
    console.log('Missing data-lng or data-lat attributes')
  }


  console.log('init');
};
goog.inherits(sagewest.component.GenericMap, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for CLASSNAME
 * @const {object}
 */
sagewest.component.GenericMap.DEFAULT = {


  // https://snazzymaps.com/style/8381/even-lighter
  'google_style_array': [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#6195a0"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#e6f3d6"},{"visibility":"on"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45},{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#f4d2c5"},{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"labels.text","stylers":[{"color":"#4e4e4e"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#f4f4f4"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#787878"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#eaf6f8"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#eaf6f8"}]}]
};

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
sagewest.component.GenericMap.EVENT_01 = '';

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
sagewest.component.GenericMap.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


sagewest.component.GenericMap.prototype.create_map = function() {

  var target_lat = this.element.attr('data-lat');
  var target_lng = this.element.attr('data-lng');

  this.center_lat = parseFloat(target_lat);
  this.center_lng = parseFloat(target_lng);
  this.center_point = new google.maps.LatLng(this.center_lat, this.center_lng);



  this.map = new google.maps.Map(this.map_element[0], {
    mapTypeControlOptions: {  
      mapTypeIds: ['Styled']
    },  
    zoom: this.zoom,
    center: this.center_point,
    disableDefaultUI: true,   
    mapTypeId: 'Styled',
    scrollwheel: false,
    // zoomControl: true
    zoomControl: false
  });

  var styledMapType = new google.maps.StyledMapType(this.google_style_array, { name: 'Styled' });  
  this.map.mapTypes.set('Styled', styledMapType);

  


  //Resize Function
  google.maps.event.addDomListener(window, "resize", function() {
    var center = this.map.getCenter();
    google.maps.event.trigger(this.map, "resize");
    this.map.setCenter(center);
  }.bind(this));

  google.maps.event.addListener(this.map, "click", function(event) {
    if (goog.isDefAndNotNull(this.infobox) == true) {
      this.infobox.close();
    }
  }.bind(this));


  this.infobox = new InfoBox({           
    disableAutoPan: false,
    maxWidth: 225,
    zIndex: null,
    boxStyle: {
      opacity: 1,
      width: "225px"
    },              
    infoBoxClearance: new google.maps.Size(1, 1)
  });





};
sagewest.component.GenericMap.prototype.create_markers = function() {

  var arr = this.element.find('.generic-map-markers');
  var item = null;

  var location = '';
  var placeId = '';
  var pinIcon = '';
  var marker_html = '';

  var lat = 0;
  var lng = 0;
  var lat_lng = null;

  var marker = null;

  for (var i = 0, l=arr.length; i < l; i++) {
    item = $(arr[i]);
    item.data('generic-map', this);

    location = item.data('location');
    placeId = item.data('place_id');
    pinIcon = item.data('pin-icon');
    marker_html = item.data('html');

    console.log(item);
    console.log(pinIcon);

    lat = item.data('lat')
    lat = parseFloat(lat);

    lng = item.data('lng')
    lng = parseFloat(lng);

    lat_lng = new google.maps.LatLng(lat, lng);
    item.data('lat_lng', lat_lng);
    

    marker = new google.maps.Marker({
      position: lat_lng,
      map: this.map,
      title: location,
      icon: pinIcon
    });
    item.data('marker', marker);

    google.maps.event.addListener(marker, 'click', function(event) {

      console.log('marker click');
      console.log(event);

      var marker_html = this.data('html');
      var lat_lng = item.data('lat_lng');

      var generic_map = item.data('generic-map');
      var marker = item.data('marker');

      generic_map.infobox.open(generic_map.map, marker);
      generic_map.infobox.setContent(marker_html);
      generic_map.infobox.setOptions({ 'pixelOffset' : new google.maps.Size(48, -85) });
      generic_map.map.panTo(lat_lng);

    }.bind(item));



    if (item.hasClass('open-version')) {
      google.maps.event.trigger(marker, 'click');
      // marker
    }
    


  }
  

};
sagewest.component.GenericMap.prototype.private_method_03 = function() {};
sagewest.component.GenericMap.prototype.private_method_04 = function() {};
sagewest.component.GenericMap.prototype.private_method_05 = function() {};
sagewest.component.GenericMap.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
sagewest.component.GenericMap.prototype.sample_method_calls = function() {
  sagewest.component.GenericMap.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(sagewest.component.GenericMap.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


sagewest.component.GenericMap.prototype.public_method_01 = function() {};
sagewest.component.GenericMap.prototype.public_method_02 = function() {};
sagewest.component.GenericMap.prototype.public_method_03 = function() {};
sagewest.component.GenericMap.prototype.public_method_04 = function() {};
sagewest.component.GenericMap.prototype.public_method_05 = function() {};
sagewest.component.GenericMap.prototype.public_method_06 = function() {};


//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.GenericMap.prototype.on_event_handler_01 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.GenericMap.prototype.on_event_handler_02 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.GenericMap.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.GenericMap.prototype.on_event_handler_04 = function(event) {
};

