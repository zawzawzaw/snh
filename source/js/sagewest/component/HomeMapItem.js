goog.provide('sagewest.component.HomeMapItem');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The HomeMapItem constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
sagewest.component.HomeMapItem = function(options, element) {
  // if has parent
  //goog.events.EventTarget.call(this, options, element);
  //this.options = $.extend(this.options, sagewest.component.HomeMapItem.DEFAULT, options);

  // else
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, sagewest.component.HomeMapItem.DEFAULT, options);
  this.element = element;

  this.map = null;
  this.infobox = null;
  this.marker = null;

  this.location = this.element.data('location');
  this.placeId = this.element.data('place_id');
  this.pinIcon = this.element.data('pin-icon');
  this.marker_html = this.element.data('html');
  this.marker_name = this.location.split(' ').join('_')+"Marker";   
  this.request_name = this.location.split(' ').join('_')+"Request";   
  this.lat = this.element.data('lat');
  this.lng = this.element.data('lng');  

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  console.log('init map item');

  this.latLng = null;

  this.set_lat_lng();  


};
goog.inherits(sagewest.component.HomeMapItem, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for HomeMapItem
 * @const {object}
 */
sagewest.component.HomeMapItem.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * HomeMapItem Event Constant
 * @const
 * @type {string}
 */
sagewest.component.HomeMapItem.EVENT_01 = '';

/**
 * HomeMapItem Event Constant
 * @const
 * @type {string}
 */
sagewest.component.HomeMapItem.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//

sagewest.component.HomeMapItem.prototype.set_lat_lng = function() {
  this.latLng = new google.maps.LatLng(this.lat, this.lng);
};

sagewest.component.HomeMapItem.prototype.create_marker = function() {  

  console.log(this.latLng);
  console.log(this.map);
  console.log(this.location);
  console.log(this.pinIcon);

  this.marker = new google.maps.Marker({
    position: this.Latlng,
    map: this.map,
    title: this.location,
    icon: this.pinIcon
  });

};

sagewest.component.HomeMapItem.prototype.create_event = function() {

  if (this.element.hasClass('no-hover') == false) {

    google.maps.event.addListener(this.marker, 'click', function() {
        this.infobox.open(this.map, this);              
        this.infobox.setContent(this.marker_html);
        this.infobox.setOptions({ 'pixelOffset' : new google.maps.Size(45, -95) });
        this.map.panTo(this.Latlng);
    }.bind(this)); 
    // this.create_map_events(this.marker);

  } else {

    google.maps.event.addListener(this.marker, 'click', function() {
        this.infobox.open(this.map, this);              
        this.map.panTo(this.Latlng);
    }.bind(this));

  }

  // google.maps.event.addListener(this.map, "click", function(event) {
  //     this.infobox.close();
  // }.bind(this));

};

sagewest.component.HomeMapItem.prototype.private_method_01 = function() {};
sagewest.component.HomeMapItem.prototype.private_method_02 = function() {};
sagewest.component.HomeMapItem.prototype.private_method_03 = function() {};
sagewest.component.HomeMapItem.prototype.private_method_04 = function() {};
sagewest.component.HomeMapItem.prototype.private_method_05 = function() {};
sagewest.component.HomeMapItem.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
sagewest.component.HomeMapItem.prototype.sample_method_calls = function() {
  sagewest.component.HomeMapItem.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(sagewest.component.HomeMapItem.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


sagewest.component.HomeMapItem.prototype.public_method_01 = function() {};
sagewest.component.HomeMapItem.prototype.public_method_02 = function() {};
sagewest.component.HomeMapItem.prototype.public_method_03 = function() {};
sagewest.component.HomeMapItem.prototype.public_method_04 = function() {};
sagewest.component.HomeMapItem.prototype.public_method_05 = function() {};
sagewest.component.HomeMapItem.prototype.public_method_06 = function() {};


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
sagewest.component.HomeMapItem.prototype.on_event_handler_01 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.HomeMapItem.prototype.on_event_handler_02 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.HomeMapItem.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.HomeMapItem.prototype.on_event_handler_04 = function(event) {
};

