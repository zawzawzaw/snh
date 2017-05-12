goog.provide('sagewest.component.HomeMapOverlayItem');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The CLASSNAME constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
sagewest.component.HomeMapOverlayItem = function(options, element) {
  // if has parent
  //goog.events.EventTarget.call(this, options, element);
  //this.options = $.extend(this.options, sagewest.component.HomeMapOverlayItem.DEFAULT, options);

  // else
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, sagewest.component.HomeMapOverlayItem.DEFAULT, options);
  this.element = element;

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  console.log('init home map overlay item');

  this.element.click(this.on_overlay_item_click.bind(this));

};
goog.inherits(sagewest.component.HomeMapOverlayItem, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for CLASSNAME
 * @const {object}
 */
sagewest.component.HomeMapOverlayItem.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
sagewest.component.HomeMapOverlayItem.OVERLAY_ITEM_CLICK = 'OVERLAY_ITEM_CLICK';

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
sagewest.component.HomeMapOverlayItem.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


sagewest.component.HomeMapOverlayItem.prototype.private_method_01 = function() {};
sagewest.component.HomeMapOverlayItem.prototype.private_method_02 = function() {};
sagewest.component.HomeMapOverlayItem.prototype.private_method_03 = function() {};
sagewest.component.HomeMapOverlayItem.prototype.private_method_04 = function() {};
sagewest.component.HomeMapOverlayItem.prototype.private_method_05 = function() {};
sagewest.component.HomeMapOverlayItem.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
sagewest.component.HomeMapOverlayItem.prototype.sample_method_calls = function() {
  sagewest.component.HomeMapOverlayItem.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(sagewest.component.HomeMapOverlayItem.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


sagewest.component.HomeMapOverlayItem.prototype.public_method_01 = function() {};
sagewest.component.HomeMapOverlayItem.prototype.public_method_02 = function() {};
sagewest.component.HomeMapOverlayItem.prototype.public_method_03 = function() {};
sagewest.component.HomeMapOverlayItem.prototype.public_method_04 = function() {};
sagewest.component.HomeMapOverlayItem.prototype.public_method_05 = function() {};
sagewest.component.HomeMapOverlayItem.prototype.public_method_06 = function() {};


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
sagewest.component.HomeMapOverlayItem.prototype.on_overlay_item_click = function(event) {
  this.dispatchEvent(new goog.events.Event(sagewest.component.HomeMapOverlayItem.OVERLAY_ITEM_CLICK));
};

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.HomeMapOverlayItem.prototype.on_event_handler_02 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.HomeMapOverlayItem.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.HomeMapOverlayItem.prototype.on_event_handler_04 = function(event) {
};

