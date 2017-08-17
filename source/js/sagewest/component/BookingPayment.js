goog.provide('sagewest.component.BookingPayment');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The CLASSNAME constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
sagewest.component.BookingPayment = function(options, element) {
  // if has parent
  //goog.events.EventTarget.call(this, options, element);
  //this.options = $.extend(this.options, sagewest.component.BookingPayment.DEFAULT, options);

  // else
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, sagewest.component.BookingPayment.DEFAULT, options);
  this.element = element;

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  // console.log("init booking payment");

  this.guest_detail_html = '<div class="guest-for-each-room"> <div class="row"> <div class="col-md-4"> <h5 class="room-detail-no">Room Detail</h5></div> <div class="col-md-8"> <div id="personal_info" class="default-form"> <div class="row guest-name-inputs"> <div class="col-md-6"> <div class="form-group"> <label for="first_name">First Name</label> <input type="text" name="first_name" class="required"> </div> </div> <div class="col-md-6"> <div class="form-group"> <label for="last_name">Last Name</label> <input type="text" name="last_name" class="required"> </div> </div> </div> <div class="row"> <div class="col-md-12"> <div class="form-group"> <label for="special_requests">Special Requests</label> <textarea name="special_requests"></textarea> </div> </div> </div> <div class="row"> <div class="col-md-6"> <div class="form-group"> <label for="estimated_check_in_time">Estimated Check In Time</label> <div class="manic-dropdown"> <select name="estimated_check_in_time" id="estimated_check_in_time"> <option value="">Please select</option> <option value="10:00" selected>10:00</option> <option value="10:15">10:15</option> </select> </div> </div> </div> <div class="col-md-6"> <div class="form-group"> <label for="estimated_check_out_time">Estimated Check Out Time</label> <div class="manic-dropdown"> <select name="estimated_check_out_time" id="estimated_check_out_time"> <option value="">Please select</option> <option value="10:00" selected>10:00</option> <option value="10:15">10:15</option> </select> </div> </div> </div> </div> </div> </div> </div></div>';

  // this.element.find(".payment-tabs li a").click(this.on_payment_tab_click.bind(this));
  this.element.find(".back-to-personalise-your-stay").click(this.on_back_to_personalise_your_stay_click.bind(this));

  this.element.on("click", ".optional-info-cta", this.on_optional_info_click.bind(this));

  // temporary popup
  this.element.on("click", ".cvv-cta", this.on_cvv_popup_cta_click.bind(this));

  this.element.on("click", ".show-hide-guest-detail-form", function(e){

    e.preventDefault();

    // console.log($(this).parent().parent());

    var guest_detail_form = $(this).parent().parent().find(".default-form");

    // console.log(guest_detail_form);

    if(!guest_detail_form.is(':visible')) {
      guest_detail_form.slideDown();
      $(this).find("i").removeClass("fa-angle-down").addClass("fa-angle-up");
    }else {
      guest_detail_form.slideUp();
      $(this).find("i").removeClass("fa-angle-up").addClass("fa-angle-down");
    }
          
  });

};
goog.inherits(sagewest.component.BookingPayment, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for CLASSNAME
 * @const {object}
 */
sagewest.component.BookingPayment.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
sagewest.component.BookingPayment.ON_BACK_TO_PERSONALISE = 'ON_BACK_TO_PERSONALISE';
sagewest.component.BookingPayment.ON_BACK_TO_PERSONALISE = 'ON_BACK_TO_PERSONALISE';
sagewest.component.BookingPayment.ON_PAYMENT_TAB_CHANGE = 'ON_PAYMENT_TAB_CHANGE';

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
sagewest.component.BookingPayment.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


sagewest.component.BookingPayment.prototype.private_method_01 = function() {};
sagewest.component.BookingPayment.prototype.private_method_02 = function() {};
sagewest.component.BookingPayment.prototype.private_method_03 = function() {};
sagewest.component.BookingPayment.prototype.private_method_04 = function() {};
sagewest.component.BookingPayment.prototype.private_method_05 = function() {};
sagewest.component.BookingPayment.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
sagewest.component.BookingPayment.prototype.sample_method_calls = function() {
  sagewest.component.BookingPayment.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(sagewest.component.BookingPayment.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


sagewest.component.BookingPayment.prototype.add_guest_details_form_per_room_booking = function(no_of_room_booked) {
  
  var data = {
    'no_of_room_booked' : no_of_room_booked
  };

  var guest_detail_template = Handlebars.compile($("#guest-detail-for-each-room-form").html());
  var guest_detail_html = guest_detail_template(data);

  // this.element.find(".guest-details").append(this.guest_detail_html);
  this.element.find(".guest-details").append(guest_detail_html);

  if(no_of_room_booked > 1) {
    this.element.find('.guest-name-inputs').show();
  }else {
    this.element.find('.guest-name-inputs').hide();
  }

  // this.dispatchEvent(new goog.events.Event(sagewest.component.BookingPayment.ON_GUEST_DETAIL_FORM_ADDED));
};

sagewest.component.BookingPayment.prototype.delete_guest_details_form_per_room_booking = function() {
  this.element.find(".guest-details .guest-for-each-room")[0].remove();

  // re-index room no on guest form
  var arr = this.element.find(".guest-details .guest-for-each-room");
  for (var i = 0; i < arr.length; i++) {
    var index = i + 1;
    // console.log($(arr[i]).find(".reservation-summary-content-selected-room-title h5"));
    $(arr[i]).find(".room-title").html("Room "+index);
  }
};

sagewest.component.BookingPayment.prototype.pop_up_open = function() {
    
    $(".popup-container").addClass('show');
};

sagewest.component.BookingPayment.prototype.public_method_02 = function() {};
sagewest.component.BookingPayment.prototype.public_method_03 = function() {};
sagewest.component.BookingPayment.prototype.public_method_04 = function() {};
sagewest.component.BookingPayment.prototype.public_method_05 = function() {};
sagewest.component.BookingPayment.prototype.public_method_06 = function() {};


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
sagewest.component.BookingPayment.prototype.on_payment_tab_click = function(event) {
  var currentTarget = $(event.currentTarget)
  var tab = currentTarget.attr("data-tab");

  this.element.find(".active").removeClass("active");
  this.element.find(".active-tab").removeClass("active-tab");

  currentTarget.addClass("active");
  this.element.find("#"+tab).addClass("active-tab");

  this.element.find(".personal-detail .default-form").removeClass("simple-form-check");
  this.element.find("#"+tab).find(".default-form").addClass("simple-form-check");

  this.dispatchEvent(new goog.events.Event(sagewest.component.BookingPayment.ON_PAYMENT_TAB_CHANGE));
};

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.BookingPayment.prototype.on_back_to_personalise_your_stay_click = function(event) {
  this.dispatchEvent(new goog.events.Event(sagewest.component.BookingPayment.ON_BACK_TO_PERSONALISE));
};

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.BookingPayment.prototype.on_optional_info_click = function(event) {
  event.preventDefault();

  var option_info_item = $(event.currentTarget).parent().parent().parent().parent().find("#optional_info");  
  
  if(option_info_item.is(':visible')){
    $(event.currentTarget).removeClass("expanded-version");
    option_info_item.slideUp(500);
  }else {
    $(event.currentTarget).addClass("expanded-version");
    option_info_item.slideDown(500);
  }
  
};

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.BookingPayment.prototype.on_cvv_popup_cta_click = function(event) {
  event.preventDefault();
  event.stopPropagation();

  var data = {
    'pop_up_version' : "cvv-version",
    'pop_up_title' : "Where is CVV?",  
    'pop_up_copy': 'For Visa, MasterCard, Diners Club, UnionPay, the 3 digits on the back of your card. (Left)',
    'pop_up_copy_2': 'For American Express, the 4 digits on the front of your card. (Right)',
    'pop_up_image': true,
    'pop_up_close_cta': true    
  };

  var popup_template = Handlebars.compile($("#popup-template").html());
  var popup_html = popup_template(data);

  $(".popup").html(popup_html);

  this.pop_up_open();
};

