goog.provide('sagewest.component.BookingRoomRate');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

// goog.require('sagewest.component.BookingSummary');

/**
 * The CLASSNAME constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
sagewest.component.BookingRoomRate = function(options, element) {
  // if has parent
  //goog.events.EventTarget.call(this, options, element);
  //this.options = $.extend(this.options, sagewest.component.BookingRoomRate.DEFAULT, options);

  // else
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, sagewest.component.BookingRoomRate.DEFAULT, options);
  this.element = element;

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  // console.log('init booking room rate');

  this.is_popup_open = false;
  this.is_expanded = false;

  this.show_rate_detail_cta = this.element.find('.show-rate-detail-cta');
  this.show_rate_detail_cta.click(this.on_show_rate_detail_click.bind(this));

  this.select_room_cta = this.element.find(".select-room-cta");
  this.select_room_cta.click(this.on_select_room_cta_click.bind(this));

  this.rate_breakdown_cta = this.element.find(".view-rate-breakdown-cta");
  this.rate_breakdown_cta.click(this.on_rate_breakdown_cta_click.bind(this));

};
goog.inherits(sagewest.component.BookingRoomRate, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for CLASSNAME
 * @const {object}
 */
sagewest.component.BookingRoomRate.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
sagewest.component.BookingRoomRate.ON_ROOM_ADDED = 'on add room';
sagewest.component.BookingRoomRate.EVENT_01 = '';

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
sagewest.component.BookingRoomRate.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


sagewest.component.BookingRoomRate.prototype.private_method_01 = function() {};
sagewest.component.BookingRoomRate.prototype.private_method_02 = function() {};
sagewest.component.BookingRoomRate.prototype.private_method_03 = function() {};
sagewest.component.BookingRoomRate.prototype.private_method_04 = function() {};
sagewest.component.BookingRoomRate.prototype.private_method_05 = function() {};
sagewest.component.BookingRoomRate.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
sagewest.component.BookingRoomRate.prototype.sample_method_calls = function() {
  sagewest.component.BookingRoomRate.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(sagewest.component.BookingRoomRate.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//

sagewest.component.BookingRoomRate.prototype.collapse = function(){
  if (this.is_expanded == true) {
    this.is_expanded = false;

    
    this.show_rate_detail_cta.text("More details").removeClass("expanded-version");
    this.element.find(".booking-room-rate-more-content").slideUp(500);
  }
};

sagewest.component.BookingRoomRate.prototype.expand = function() {
  if (this.is_expanded == false) {
    this.is_expanded = true;

    
    this.show_rate_detail_cta.text("Hide details").addClass("expanded-version");
    this.element.find(".booking-room-rate-more-content").slideDown(500);
  }
};

sagewest.component.BookingRoomRate.prototype.pop_up_open = function() {
    // $("html,body").addClass("fixed");
    console.log($(".rates-breakdown-popup-container"));
    $(".rates-breakdown-popup-container").addClass('show');
};

sagewest.component.BookingRoomRate.prototype.public_method_01 = function() {};
sagewest.component.BookingRoomRate.prototype.public_method_02 = function() {};
sagewest.component.BookingRoomRate.prototype.public_method_03 = function() {};
sagewest.component.BookingRoomRate.prototype.public_method_04 = function() {};
sagewest.component.BookingRoomRate.prototype.public_method_05 = function() {};
sagewest.component.BookingRoomRate.prototype.public_method_06 = function() {};


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
sagewest.component.BookingRoomRate.prototype.on_show_rate_detail_click = function(event) {
  event.preventDefault();    

  if(this.is_expanded == true){
    this.collapse();
  } else {
    this.expand();
  }
};

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.BookingRoomRate.prototype.on_select_room_cta_click = function(event) {
  event.preventDefault();    

  // console.log(this.element.find(".booking-room-rates-title h5").text());

  this.dispatchEvent(new goog.events.Event(sagewest.component.BookingRoomRate.ON_ROOM_ADDED));

  // var room_item = new sagewest.component.BookingSummary({}, $('.reservation-summary-sidebar'));
  // room_item.book_room();


};

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.BookingRoomRate.prototype.on_rate_breakdown_cta_click = function(event) {
  event.preventDefault();
  event.stopPropagation();
  this.pop_up_open();
};

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.BookingRoomRate.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.BookingRoomRate.prototype.on_event_handler_04 = function(event) {
};

