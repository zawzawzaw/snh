goog.provide('sagewest.component.BookingModificationExtra');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The CLASSNAME constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
sagewest.component.BookingModificationExtra = function(options, element) {
  // if has parent
  //goog.events.EventTarget.call(this, options, element);
  //this.options = $.extend(this.options, sagewest.component.BookingModificationExtra.DEFAULT, options);

  // else
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, sagewest.component.BookingModificationExtra.DEFAULT, options);
  this.element = element;

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  // console.log('init booking extra');

  this.cancel_extra_cta = this.element.find(".cancel-extra-cta");
  this.cancel_extra_cta.click(this.on_cancel_extra_cta_click.bind(this));

};
goog.inherits(sagewest.component.BookingModificationExtra, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for CLASSNAME
 * @const {object}
 */
sagewest.component.BookingModificationExtra.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
sagewest.component.BookingModificationExtra.EVENT_01 = '';

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
sagewest.component.BookingModificationExtra.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


sagewest.component.BookingModificationExtra.prototype.private_method_01 = function() {};
sagewest.component.BookingModificationExtra.prototype.private_method_02 = function() {};
sagewest.component.BookingModificationExtra.prototype.private_method_03 = function() {};
sagewest.component.BookingModificationExtra.prototype.private_method_04 = function() {};
sagewest.component.BookingModificationExtra.prototype.private_method_05 = function() {};
sagewest.component.BookingModificationExtra.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
sagewest.component.BookingModificationExtra.prototype.sample_method_calls = function() {
  sagewest.component.BookingModificationExtra.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(sagewest.component.BookingModificationExtra.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


sagewest.component.BookingModificationExtra.prototype.public_method_01 = function() {};
sagewest.component.BookingModificationExtra.prototype.public_method_02 = function() {};
sagewest.component.BookingModificationExtra.prototype.public_method_03 = function() {};
sagewest.component.BookingModificationExtra.prototype.public_method_04 = function() {};
sagewest.component.BookingModificationExtra.prototype.public_method_05 = function() {};
sagewest.component.BookingModificationExtra.prototype.public_method_06 = function() {};


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
sagewest.component.BookingModificationExtra.prototype.on_cancel_extra_cta_click = function(event) {  

  this.element.hide(0);

  var no_of_extra = $('.booking-extra:visible').length;

  if(no_of_extra < 1) {
    $('.booking-extras').hide();
  }else {
    $('.booking-extras').show();
  }
};

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.BookingModificationExtra.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.BookingModificationExtra.prototype.on_event_handler_04 = function(event) {
};

