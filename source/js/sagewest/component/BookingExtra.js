goog.provide('sagewest.component.BookingExtra');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The CLASSNAME constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
sagewest.component.BookingExtra = function(options, element) {
  // if has parent
  //goog.events.EventTarget.call(this, options, element);
  //this.options = $.extend(this.options, sagewest.component.BookingExtra.DEFAULT, options);

  // else
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, sagewest.component.BookingExtra.DEFAULT, options);
  this.element = element;

  this.current_quantity = 0;

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  // console.log('init booking extra');

  this.add_to_booking_cta = this.element.find(".add-to-booking-cta");
  this.add_to_booking_cta.click(this.on_add_to_booking_cta_click.bind(this));
};
goog.inherits(sagewest.component.BookingExtra, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for CLASSNAME
 * @const {object}
 */
sagewest.component.BookingExtra.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
sagewest.component.BookingExtra.ON_EXTRA_ADDED = 'on extra added';
sagewest.component.BookingExtra.EVENT_01 = '';

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
sagewest.component.BookingExtra.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


sagewest.component.BookingExtra.prototype.private_method_01 = function() {};
sagewest.component.BookingExtra.prototype.private_method_02 = function() {};
sagewest.component.BookingExtra.prototype.private_method_03 = function() {};
sagewest.component.BookingExtra.prototype.private_method_04 = function() {};
sagewest.component.BookingExtra.prototype.private_method_05 = function() {};
sagewest.component.BookingExtra.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
sagewest.component.BookingExtra.prototype.sample_method_calls = function() {
  sagewest.component.BookingExtra.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(sagewest.component.BookingExtra.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


sagewest.component.BookingExtra.prototype.public_method_01 = function() {};
sagewest.component.BookingExtra.prototype.public_method_02 = function() {};
sagewest.component.BookingExtra.prototype.public_method_03 = function() {};
sagewest.component.BookingExtra.prototype.public_method_04 = function() {};
sagewest.component.BookingExtra.prototype.public_method_05 = function() {};
sagewest.component.BookingExtra.prototype.public_method_06 = function() {};


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
sagewest.component.BookingExtra.prototype.on_add_to_booking_cta_click = function(event) {  
  this.current_quantity = this.element.find("#quantity").val();
  this.dispatchEvent(new goog.events.Event(sagewest.component.BookingExtra.ON_EXTRA_ADDED));
};

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.BookingExtra.prototype.on_event_handler_02 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.BookingExtra.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.BookingExtra.prototype.on_event_handler_04 = function(event) {
};

