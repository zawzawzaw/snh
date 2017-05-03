goog.provide('sagewest.component.HomeMap');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('sagewest.component.HomeMapItem');

/**
 * The CLASSNAME constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
sagewest.component.HomeMap = function(options, element) {
  // if has parent
  //goog.events.EventTarget.call(this, options, element);
  //this.options = $.extend(this.options, sagewest.component.HomeMap.DEFAULT, options);

  // else
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, sagewest.component.HomeMap.DEFAULT, options);
  this.element = element;

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  // console.log('init home map');

  this.styles = [
      {
          "featureType": "administrative",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "color": "#6195a0"
              }
          ]
      },
      {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [
              {
                  "color": "#f2f2f2"
              }
          ]
      },
      {
          "featureType": "landscape",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#ffffff"
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "poi.park",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#e6f3d6"
              },
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "all",
          "stylers": [
              {
                  "saturation": -100
              },
              {
                  "lightness": 45
              },
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#f4d2c5"
              },
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "labels.text",
          "stylers": [
              {
                  "color": "#4e4e4e"
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#f4f4f4"
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "color": "#787878"
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "transit",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "all",
          "stylers": [
              {
                  "color": "#eaf6f8"
              },
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#eaf6f8"
              }
          ]
      }
  ];

  this.map;
  this.infobox;   
  this.create_map();
  this.create_infobox();
  this.create_markers_and_events();


};
goog.inherits(sagewest.component.HomeMap, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for CLASSNAME
 * @const {object}
 */
sagewest.component.HomeMap.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
sagewest.component.HomeMap.EVENT_01 = '';

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
sagewest.component.HomeMap.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


sagewest.component.HomeMap.prototype.create_markers_and_events = function() {

  var arr = $('.markers');
  var item = null;
  var map_item = null;

  for (var i = 0; i < arr.length; i++) {
    var item = $(arr[i]);
    var map_item = new sagewest.component.HomeMapItem({}, item);
    map_item.map = this.map;
    map_item.infobox = this.infobox;

    map_item.create_marker();
    map_item.create_event();
  }

  // $(".markers").each(function(i, v){

  //   var location = $(v).data('location');
  //   var placeId = $(v).data('place_id');
  //   var pinIcon = $(v).data('pin-icon');
  //   var marker_html = $(v).data('html');
  //   var marker_name = location.split(' ').join('_')+"Marker";   
  //   var request_name = location.split(' ').join('_')+"Request";   
    
  //   var Latlng = this.set_lat_lng($(v).data('lat'), $(v).data('lng'));

  //   var marker = this.create_marker(marker_name, Latlng, pinIcon, location);

  //   this.create_event(marker, Latlng, "", marker_html, $(v));

  // }.bind(this));

};

sagewest.component.HomeMap.prototype.create_map = function() {

  var lat = $(".default_marker").data('lat');
  var lng = $(".default_marker").data('lng');
  var zoom = $(".default_marker").data('zoom');

  
  var AusLatLng = this.set_lat_lng(lat, lng);

  var is_default_version = false;

  if (this.element.hasClass('default-version') == true) {
    is_default_version = true;
  }

  if (is_default_version) {

    var mapOptions = {
      mapTypeControlOptions: {  
          mapTypeIds: ['Styled']  
      },  
      zoom: zoom,
      center: AusLatLng,
      disableDefaultUI: true,   
      scrollwheel: false,
      zoomControl: true
    };
    this.map = new google.maps.Map(this.element[0], mapOptions);

  } else {

    var mapOptions = {
      mapTypeControlOptions: {  
          mapTypeIds: ['Styled']  
      },  
      zoom: zoom,
      center: AusLatLng,
      disableDefaultUI: true,   
      mapTypeId: 'Styled',      // not in default version
      scrollwheel: false,
      zoomControl: true
    };
    this.map = new google.maps.Map(this.element[0], mapOptions);

    var styledMapType = new google.maps.StyledMapType(this.styles, { name: 'Styled' });  
    this.map.mapTypes.set('Styled', styledMapType);

  }






};

sagewest.component.HomeMap.prototype.create_infobox = function() {
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

  // http://stackoverflow.com/questions/10022873/closing-info-windows-in-google-maps-by-clicking-the-map
  google.maps.event.addListener(this.map, "click", function(event) {
    this.infobox.close();
    
    /*
    for (var i = 0; i < ibArray.length; i++ ) {  //I assume you have your infoboxes in some array
      ibArray[i].close();
    }
    */
   
  }.bind(this));

};

sagewest.component.HomeMap.prototype.set_lat_lng = function(lat, lng) {
  return new google.maps.LatLng(lat, lng);
};

/**
 * sample_method_calls
 */
sagewest.component.HomeMap.prototype.sample_method_calls = function() {
  sagewest.component.HomeMap.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(sagewest.component.HomeMap.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


sagewest.component.HomeMap.prototype.public_method_01 = function() {};
sagewest.component.HomeMap.prototype.public_method_02 = function() {};
sagewest.component.HomeMap.prototype.public_method_03 = function() {};
sagewest.component.HomeMap.prototype.public_method_04 = function() {};
sagewest.component.HomeMap.prototype.public_method_05 = function() {};
sagewest.component.HomeMap.prototype.public_method_06 = function() {};


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
sagewest.component.HomeMap.prototype.on_event_handler_01 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.HomeMap.prototype.on_event_handler_02 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.HomeMap.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.HomeMap.prototype.on_event_handler_04 = function(event) {
};

