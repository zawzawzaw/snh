goog.provide('sagewest.component.BookingStepsIndicator');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The CLASSNAME constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
sagewest.component.BookingStepsIndicator = function(options, element) {
  // if has parent
  //goog.events.EventTarget.call(this, options, element);
  //this.options = $.extend(this.options, sagewest.component.BookingStepsIndicator.DEFAULT, options);

  // else
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, sagewest.component.BookingStepsIndicator.DEFAULT, options);
  this.element = element;

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  // console.log(this.element);

  this.element.find(".go-to-step").click(this.on_go_to_step_click.bind(this));
  
};
goog.inherits(sagewest.component.BookingStepsIndicator, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for CLASSNAME
 * @const {object}
 */
sagewest.component.BookingStepsIndicator.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
sagewest.component.BookingStepsIndicator.ON_INDICATOR_STEP_CLICK = 'ON_INDICATOR_STEP_CLICK';
sagewest.component.BookingStepsIndicator.ON_STEP_INDICATOR_CHANGE = 'ON_STEP_INDICATOR_CHANGE';
sagewest.component.BookingStepsIndicator.EVENT_01 = '';

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
sagewest.component.BookingStepsIndicator.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


sagewest.component.BookingStepsIndicator.prototype.private_method_01 = function() {};
sagewest.component.BookingStepsIndicator.prototype.private_method_02 = function() {};
sagewest.component.BookingStepsIndicator.prototype.private_method_03 = function() {};
sagewest.component.BookingStepsIndicator.prototype.private_method_04 = function() {};
sagewest.component.BookingStepsIndicator.prototype.private_method_05 = function() {};
sagewest.component.BookingStepsIndicator.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
sagewest.component.BookingStepsIndicator.prototype.sample_method_calls = function() {
  sagewest.component.BookingStepsIndicator.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(sagewest.component.BookingStepsIndicator.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


sagewest.component.BookingStepsIndicator.prototype.change_next_step = function() {
  this.element.removeClass("active-step");  
  var currentStep = parseInt(this.element.attr("data-step")) + 1;

  $("#step-indicator-"+currentStep).addClass("active-step");

  // this.enable_disable_cursor_pointer();
  this.dispatchEvent(new goog.events.Event(sagewest.component.BookingStepsIndicator.ON_STEP_INDICATOR_CHANGE));
};
sagewest.component.BookingStepsIndicator.prototype.change_prev_step = function() {
  this.element.removeClass("active-step");  
  var currentStep = parseInt(this.element.attr("data-step")) - 1;

  $("#step-indicator-"+currentStep).addClass("active-step");

  // this.enable_disable_cursor_pointer();
  this.dispatchEvent(new goog.events.Event(sagewest.component.BookingStepsIndicator.ON_STEP_INDICATOR_CHANGE));
};
// sagewest.component.BookingStepsIndicator.prototype.enable_disable_cursor_pointer = function() {
//   // $("#booking-engine-steps-indicator .clickable").removeClass("clickable");
//   if()
//   this.element.find('a').addClass("clickable");
// };
sagewest.component.BookingStepsIndicator.prototype.public_method_04 = function() {};
sagewest.component.BookingStepsIndicator.prototype.public_method_05 = function() {};
sagewest.component.BookingStepsIndicator.prototype.public_method_06 = function() {};


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
sagewest.component.BookingStepsIndicator.prototype.on_go_to_step_click = function(event) {
  var currentStep = parseInt(this.element.attr("data-step"));

  if(currentStep < 4) {
    this.dispatchEvent(new goog.events.Event(sagewest.component.BookingStepsIndicator.ON_INDICATOR_STEP_CLICK));
    this.dispatchEvent(new goog.events.Event(sagewest.component.BookingStepsIndicator.ON_STEP_INDICATOR_CHANGE));
  }  
  
};

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.BookingStepsIndicator.prototype.on_event_handler_02 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.BookingStepsIndicator.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.BookingStepsIndicator.prototype.on_event_handler_04 = function(event) {
};

