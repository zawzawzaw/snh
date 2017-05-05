goog.provide('sagewest.component.BookingModificationRoom');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The CLASSNAME constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
sagewest.component.BookingModificationRoom = function(options, element) {
  // if has parent
  //goog.events.EventTarget.call(this, options, element);
  //this.options = $.extend(this.options, sagewest.component.BookingModificationRoom.DEFAULT, options);

  // else
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, sagewest.component.BookingModificationRoom.DEFAULT, options);
  this.element = element;  

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  console.log('init booking modification room js');

  this.popup_container = $(".modification-popup-container");

  this.is_popup_open = false;
  this.is_detail_expanded = false;

  this.see_details_cta = this.element.find('.see-details-cta');
  this.see_details_cta.click(this.on_see_details_click.bind(this));  
  this.booking_room_detail = this.element.find('.booking-room-detail');

  this.cancel_room_cta = this.element.find('.cancel-room-cta');
  this.cancel_room_cta.click(this.on_cancel_room_click.bind(this));  

  this.element.find(".view-rate-breakdown-cta").click(this.on_view_rate_breakdown_cta_click.bind(this));

  $('.modification-popup-container').on('click', '.back-to-booking-cta', function(e){  
    e.preventDefault();  
    e.stopPropagation();

    this.pop_up_close();    

  }.bind(this));

  $(document).click(function(e){    
    // e.preventDefault();  
    // e.stopPropagation();    

    var target = $(e.target);

    console.log(target);

    if ($.contains($(".modification-popup-container")[0], target[0]) == false) {
      this.pop_up_close();
    }

    
  }.bind(this));

};
goog.inherits(sagewest.component.BookingModificationRoom, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for CLASSNAME
 * @const {object}
 */
sagewest.component.BookingModificationRoom.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
sagewest.component.BookingModificationRoom.EVENT_01 = '';
sagewest.component.BookingModificationRoom.ON_ROOM_ADDED = 'on room added';

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
sagewest.component.BookingModificationRoom.EVENT_02 = '';


//     ____ ____  _____    _  _____ _____
//    / ___|  _ \| ____|  / \|_   _| ____|
//   | |   | |_) |  _|   / _ \ | | |  _|
//   | |___|  _ <| |___ / ___ \| | | |___
//    \____|_| \_\_____/_/   \_\_| |_____|
//


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//

sagewest.component.BookingModificationRoom.prototype.detail_collapse = function(){
  if (this.is_detail_expanded == true) {
    this.is_detail_expanded = false;

    this.see_details_cta.text('See details');    

    this.booking_room_detail.slideUp(500);
        
  }
};
sagewest.component.BookingModificationRoom.prototype.detail_expand = function() {
  if (this.is_detail_expanded == false) {
    this.is_detail_expanded = true;

    this.see_details_cta.text('Hide details');     

    this.booking_room_detail.slideDown(500);

  }
};

sagewest.component.BookingModificationRoom.prototype.private_method_02 = function() {};
sagewest.component.BookingModificationRoom.prototype.private_method_03 = function() {};
sagewest.component.BookingModificationRoom.prototype.private_method_04 = function() {};
sagewest.component.BookingModificationRoom.prototype.private_method_05 = function() {};
sagewest.component.BookingModificationRoom.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
sagewest.component.BookingModificationRoom.prototype.sample_method_calls = function() {
  sagewest.component.BookingModificationRoom.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(sagewest.component.BookingModificationRoom.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


sagewest.component.BookingModificationRoom.prototype.public_method_01 = function() {};
sagewest.component.BookingModificationRoom.prototype.public_method_02 = function() {};
sagewest.component.BookingModificationRoom.prototype.public_method_03 = function() {};
sagewest.component.BookingModificationRoom.prototype.public_method_04 = function() {};
sagewest.component.BookingModificationRoom.prototype.public_method_05 = function() {};
sagewest.component.BookingModificationRoom.prototype.public_method_06 = function() {};

sagewest.component.BookingModificationRoom.prototype.pop_up_close = function(){
  // if (this.is_popup_open == true) {
    this.is_popup_open = false;

    // $("html,body").removeClass("fixed");
    this.popup_container.removeClass('show');
  }
// };

sagewest.component.BookingModificationRoom.prototype.pop_up_open = function() {
  if (this.is_popup_open == false) {
    this.is_popup_open = true;

    // $("html,body").addClass("fixed");
    this.popup_container.addClass('show');
  }
};


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
sagewest.component.BookingModificationRoom.prototype.on_see_details_click = function(event) {  
  event.preventDefault();    

  if(this.is_detail_expanded == true){
    this.detail_collapse();
  } else {
    this.detail_expand();
  }

  // $('body').trigger("ON_details_EXPAND");

};

/**
 * event handler
 * @param  {object} event
 */


/**
 * event handler
 * @param  {object} event
 */
sagewest.component.BookingModificationRoom.prototype.on_cancel_room_click = function(event) {

  var no_of_room = $('.booking-room:visible').length;

  // if(no_of_room > 1) {
    this.element.hide();
  // }else {
    // alert("At least one room should be in the booking")
  // }  

};

/**
 * @param {object} event
 */
sagewest.component.BookingModificationRoom.prototype.on_view_rate_breakdown_cta_click = function(event) {  
  event.preventDefault();
  event.stopPropagation();

    // ajax may be?
  var data = {
    'pop_up_version' : "rate-breakdown-version",
    'pop_up_title' : "7 days Advanced Purchase",
    'pop_up_subtitle' : "Rate Breakdown",
    'pop_up_price_title' : "4 nights from",
    'pop_up_price_currency' : "aud",
    'pop_up_price' : "$626",
    'pop_up_rates' : [
      {
        'date': "Wed, 25 Mar",
        'price_per_day': "$133.00"
      },
      {
        'date': "Thur, 26 Mar",
        'price_per_day': "$133.00"
      },
      {
        'date': "Fri, 27 Mar",
        'price_per_day': "$150.00"
      },
      {
        'date': "Sat, 28 Mar",
        'price_per_day': "$170.00"
      }
    ],
    'pop_up_close_cta': true
  };

  var popup_template = Handlebars.compile($("#popup-template").html());
  var popup_html = popup_template(data);

  $(".modification-popup").html(popup_html);

  if(this.is_popup_open == true) {
    this.pop_up_close();
  } else {
    this.pop_up_open();
  }

};

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.BookingModificationRoom.prototype.on_event_handler_04 = function(event) {
};

