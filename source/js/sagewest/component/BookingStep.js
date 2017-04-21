goog.provide('sagewest.component.BookingStep');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The CLASSNAME constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
sagewest.component.BookingStep = function(options, element) {
  // if has parent
  //goog.events.EventTarget.call(this, options, element);
  //this.options = $.extend(this.options, sagewest.component.BookingStep.DEFAULT, options);

  // else
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, sagewest.component.BookingStep.DEFAULT, options);
  this.element = element;

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  // console.log('init booking step');

  this.element.find(".check-availability").click(this.on_check_availability_click.bind(this));



};
goog.inherits(sagewest.component.BookingStep, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for CLASSNAME
 * @const {object}
 */
sagewest.component.BookingStep.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
sagewest.component.BookingStep.EVENT_01 = '';
sagewest.component.BookingStep.ON_STEP_CHANGE = 'on step change';

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
sagewest.component.BookingStep.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


sagewest.component.BookingStep.prototype.private_method_01 = function() {};
sagewest.component.BookingStep.prototype.private_method_02 = function() {};
sagewest.component.BookingStep.prototype.private_method_03 = function() {};
sagewest.component.BookingStep.prototype.private_method_04 = function() {};
sagewest.component.BookingStep.prototype.private_method_05 = function() {};
sagewest.component.BookingStep.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
sagewest.component.BookingStep.prototype.sample_method_calls = function() {
  sagewest.component.BookingStep.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(sagewest.component.BookingStep.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//

sagewest.component.BookingStep.prototype.go_to_step = function() {

  $(".booking-steps").removeClass("active-step");  
  var currentStep = parseInt(this.element.attr("data-step"));
  
  $("#booking-engine-step-"+currentStep).addClass("active-step");

  if(currentStep>3) {
    $("#booking-engine-sidebar").find(".col-md-3.col-md-offset-9").removeClass("col-md-3 col-md-offset-9").addClass("col-md-7 col-md-offset-5");
    $("#booking-engine-sidebar").find(".reservation-summary-sidebar").addClass("confirmation");
    $("#booking-engine-sidebar").addClass("confirmation");
  }

  if(currentStep>1) {
    $("#booking-engine-sidebar").css("top", "0");
  }else {
    $("#booking-engine-sidebar").css("top", "153px");
  }

  this.dispatchEvent(new goog.events.Event(sagewest.component.BookingStep.ON_STEP_CHANGE));

};

sagewest.component.BookingStep.prototype.go_next_step = function() {

  this.element.removeClass("active-step");  
  var currentStep = parseInt(this.element.attr("data-step")) + 1;
  
  $("#booking-engine-step-"+currentStep).addClass("active-step");
  $("#booking-engine-steps-indicator").show();
  $("#booking-engine-sidebar").show();

  if(currentStep>3) {
    $("#booking-engine-sidebar").find(".col-md-3.col-md-offset-9").removeClass("col-md-3 col-md-offset-9").addClass("col-md-7 col-md-offset-5");
    $("#booking-engine-sidebar").find(".reservation-summary-sidebar").addClass("confirmation");
    $("#booking-engine-sidebar").addClass("confirmation");
  }

  if(currentStep>1) {
    $("#booking-engine-sidebar").css("top", "0");
  }

  this.dispatchEvent(new goog.events.Event(sagewest.component.BookingStep.ON_STEP_CHANGE));

};

sagewest.component.BookingStep.prototype.go_prev_step = function() {

  this.element.removeClass("active-step");  
  var currentStep = parseInt(this.element.attr("data-step")) - 1;
  
  $("#booking-engine-step-"+currentStep).addClass("active-step");
  $("#booking-engine-steps-indicator").show();
  $("#booking-engine-sidebar").show();

  console.log(currentStep);

  if(currentStep>1) {
    $("#booking-engine-sidebar").css("top", "0");
  }else {
    $("#booking-engine-sidebar").css("top", "153px");
  }

  this.dispatchEvent(new goog.events.Event(sagewest.component.BookingStep.ON_STEP_CHANGE));

};

sagewest.component.BookingStep.prototype.public_method_02 = function() {};
sagewest.component.BookingStep.prototype.public_method_03 = function() {};
sagewest.component.BookingStep.prototype.public_method_04 = function() {};
sagewest.component.BookingStep.prototype.public_method_05 = function() {};
sagewest.component.BookingStep.prototype.public_method_06 = function() {};


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
sagewest.component.BookingStep.prototype.on_check_availability_click = function(event) {
  this.go_next_step();  
};

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.BookingStep.prototype.on_event_handler_02 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.BookingStep.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.BookingStep.prototype.on_event_handler_04 = function(event) {
};

