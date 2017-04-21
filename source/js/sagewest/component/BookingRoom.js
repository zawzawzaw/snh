goog.provide('sagewest.component.BookingRoom');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');
goog.require('sagewest.component.BookingRoomRate');

/**
 * The CLASSNAME constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
sagewest.component.BookingRoom = function(options, element) {
  // if has parent
  //goog.events.EventTarget.call(this, options, element);
  //this.options = $.extend(this.options, sagewest.component.BookingRoom.DEFAULT, options);

  // else
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, sagewest.component.BookingRoom.DEFAULT, options);
  this.element = element;  

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  // console.log('init booking room js');

  this.room_rate_item_array = [];

  this.is_rate_expanded = false;

  this.show_rates_cta = this.element.find('.show-rates-cta');
  this.show_rates_cta.click(this.on_show_rates_click.bind(this));

  this.booking_room_rates = this.element.find('.booking-room-rates');
  this.booking_room_rate = this.element.find('.booking-room-rate');


  this.create_booking_room_rate();


};
goog.inherits(sagewest.component.BookingRoom, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for CLASSNAME
 * @const {object}
 */
sagewest.component.BookingRoom.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
sagewest.component.BookingRoom.EVENT_01 = '';
sagewest.component.BookingRoom.ON_ROOM_ADDED = 'on room added';

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
sagewest.component.BookingRoom.EVENT_02 = '';


//     ____ ____  _____    _  _____ _____
//    / ___|  _ \| ____|  / \|_   _| ____|
//   | |   | |_) |  _|   / _ \ | | |  _|
//   | |___|  _ <| |___ / ___ \| | | |___
//    \____|_| \_\_____/_/   \_\_| |_____|
//

sagewest.component.BookingRoom.prototype.create_booking_room_rate = function(){
  var arr = this.booking_room_rate;
  var item = null;
  var room_rate_item = null;

  for (var i = 0; i < arr.length; i++) {
    var item = $(arr[i]);
    var room_rate_item = new sagewest.component.BookingRoomRate({}, item);

    this.room_rate_item_array[i] = room_rate_item;

    goog.events.listen(room_rate_item, sagewest.component.BookingRoomRate.ON_ROOM_ADDED, function(event){
      
      this.dispatchEvent(new goog.events.Event(sagewest.component.BookingRoom.ON_ROOM_ADDED));

    }.bind(this));
    
  }
}

//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//

sagewest.component.BookingRoom.prototype.rate_collapse = function(){
  if (this.is_rate_expanded == true) {
    this.is_rate_expanded = false;

    this.show_rates_cta.text('Show rates');

    for (var i = 0; i < this.room_rate_item_array.length; i++) {
      this.room_rate_item_array[i].collapse();
    }

    this.booking_room_rates.slideUp(500);
  }
};
sagewest.component.BookingRoom.prototype.rate_expand = function() {
  if (this.is_rate_expanded == false) {
    this.is_rate_expanded = true;

    this.show_rates_cta.text('Hide rates'); 

    this.booking_room_rates.slideDown(500);
  }
};

sagewest.component.BookingRoom.prototype.private_method_02 = function() {};
sagewest.component.BookingRoom.prototype.private_method_03 = function() {};
sagewest.component.BookingRoom.prototype.private_method_04 = function() {};
sagewest.component.BookingRoom.prototype.private_method_05 = function() {};
sagewest.component.BookingRoom.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
sagewest.component.BookingRoom.prototype.sample_method_calls = function() {
  sagewest.component.BookingRoom.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(sagewest.component.BookingRoom.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


sagewest.component.BookingRoom.prototype.public_method_01 = function() {};
sagewest.component.BookingRoom.prototype.public_method_02 = function() {};
sagewest.component.BookingRoom.prototype.public_method_03 = function() {};
sagewest.component.BookingRoom.prototype.public_method_04 = function() {};
sagewest.component.BookingRoom.prototype.public_method_05 = function() {};
sagewest.component.BookingRoom.prototype.public_method_06 = function() {};


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
sagewest.component.BookingRoom.prototype.on_show_rates_click = function(event) {  
  event.preventDefault();    

  if(this.is_rate_expanded == true){
    this.rate_collapse();
  } else {
    this.rate_expand();
  }

};

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.BookingRoom.prototype.on_event_handler_02 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.BookingRoom.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.BookingRoom.prototype.on_event_handler_04 = function(event) {
};

