goog.provide('sagewest.component.BookingSummary');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The CLASSNAME constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
sagewest.component.BookingSummary = function(options, element) {
  // if has parent
  //goog.events.EventTarget.call(this, options, element);
  //this.options = $.extend(this.options, sagewest.component.BookingSummary.DEFAULT, options);

  // else
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, sagewest.component.BookingSummary.DEFAULT, options);
  this.element = element;

  this.room_html = '<div class="reservation-summary-expandable-content selected-rooms"> <div class="manic-expand-container desktop-open-version"> <div class="scroll-target" data-value="title-01"></div> <div class="manic-expand-container-title"> <h6>Room 1</h6> </div> <div class="manic-expand-container-btn"></div> <div class="manic-expand-container-content"> <div class="row"> <div class="col-md-5"> <div class="manic-image-container"><img src="" data-image-desktop="images_cms/room/room-index-standard-room.jpg" alt=""></div> </div> <div class="col-md-7"> <div class="selected-room"> <div class="selected-room-title"> <h5>Standard Room</h5> <a href="#" class="delete-room-btn delete-btn"><i class="fa fa-times"></i></a> </div> <div class="selected-room-content"> <div class="selected-room-content-details"> <h5>7 days advance purchase</h5> <p>2 Adults, 0 Children</p> </div> <div class="selected-room-content-price"> <span class="price">$626.00</span> </div> </div> </div> <div class="selected-room-nightly-rates"> <div class="selected-room-nightly-rates-title"> <a href="#" class="nightly-rates-popup-cta"><h6>Nightly Rates</h6></a> </div> </div> <div class="selected-room-cancellation-policies"> <div class="selected-room-cancellation-policies-title"> <a href="#" class="cancellation-popup-cta"><h6>Cancellation Policies</h6></a> </div> </div> </div> </div> </div> </div></div>';
  this.room_html_2 = '<div class="reservation-summary-content-selected-room"> <div class="reservation-summary-content-selected-room-title"> <h5>Room 1</h5> <p>7 days Advance Purc...</p> </div> <div class="reservation-summary-content-selected-room-price"> <p class="price">$626.00</p> </div> </div>';

  this.extra_html = '<div class="selected-extra"> <div class="row"> <div class="col-md-5"><div class="manic-image-container"><img src="" data-image-desktop="images_cms/booking/extra-booking-item-01.jpg" alt=""></div></div> <div class="col-md-7"> <div class="selected-extra-title"> <h5>Tesla transfer</h5> <a href="#" class="delete-extra-btn delete-btn"><i class="fa fa-times"></i></a> </div> <div class="selected-extra-content"> <div class="selected-extra-content-details"> <p>2 Bookings</p> </div> <div class="selected-extra-content-price"> <span class="price">$150.00</span> </div> </div> </div> </div></div>';
  this.extra_html_2 = '<div class="reservation-summary-content-selected-extra"> <div class="reservation-summary-content-selected-extra-title"> <p>Tesla Transfer</p> </div> <div class="reservation-summary-content-selected-extra-price"> <p class="price">$150.00</p> </div></div>';

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  // console.log('init booking summary');


  // temporary delete
  this.element.on("click", ".delete-room-btn", this.on_delete_room_btn_click.bind(this));

  // temporary delete
  this.element.on("click", ".delete-extra-btn", this.on_delete_extra_btn_click.bind(this));

  // temporary popup
  this.element.on("click", ".nightly-rates-popup-cta", function(e){
    e.preventDefault();
    e.stopPropagation();
    // console.log("nightly-rates-popup-cta");    
    $(".rates-breakdown-popup-container").addClass('show');


  });

  // temporary popup
  this.element.on("click", ".cancellation-popup-cta", function(e){
    e.preventDefault();
    e.stopPropagation();
    // console.log("nightly-rates-popup-cta");    
    $(".cancellation-popup-container").addClass('show');


  });  

  this.element.find(".see-more-booking-summary-mobile").click(this.on_booking_summary_details_mobile_show_click.bind(this));

  this.element.find(".proceed-to-payment").click(this.on_proceed_to_payment_click.bind(this));


  this.controller = null;
  this.controller = new ScrollMagic.Controller(); // needed by some components  

  //     __  _____    _   ______  __    ______   ____  ___    ____     _____________  ______________
  //    / / / /   |  / | / / __ \/ /   / ____/  / __ )/   |  / __ \   / ___/_  __/ / / / ____/ ____/
  //   / /_/ / /| | /  |/ / / / / /   / __/    / __  / /| | / /_/ /   \__ \ / / / / / / /_  / /_
  //  / __  / ___ |/ /|  / /_/ / /___/ /___   / /_/ / ___ |/ _, _/   ___/ // / / /_/ / __/ / __/
  // /_/ /_/_/  |_/_/ |_/_____/_____/_____/  /_____/_/  |_/_/ |_|   /____//_/  \____/_/   /_/


  Handlebars.registerHelper("ifCond", function (v1, operator, v2, options) {

      switch (operator) {
          case "==":
              return (v1 == v2) ? options.fn(this) : options.inverse(this);
          case "===":
              return (v1 === v2) ? options.fn(this) : options.inverse(this);
          case "<":
              return (v1 < v2) ? options.fn(this) : options.inverse(this);
          case "<=":
              return (v1 <= v2) ? options.fn(this) : options.inverse(this);
          case ">":
              return (v1 > v2) ? options.fn(this) : options.inverse(this);
          case ">=":
              return (v1 >= v2) ? options.fn(this) : options.inverse(this);
          case "&&":
              return (v1 && v2) ? options.fn(this) : options.inverse(this);
          case "||":
              return (v1 || v2) ? options.fn(this) : options.inverse(this);
          default:
              return options.inverse(this);
      }
  });

  Handlebars.registerHelper("counter", function (index){
      return index + 1;
  });

  Handlebars.registerHelper("formatCurrency", function(value) {
      return parseFloat(value).toLocaleString();
  });

};
goog.inherits(sagewest.component.BookingSummary, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for CLASSNAME
 * @const {object}
 */
sagewest.component.BookingSummary.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
// sagewest.component.BookingSummary.ROOM_ADDED = 'ROOM ADDED';
sagewest.component.BookingSummary.BOOKING_SUMMARY_ROOM_ADDED = 'BOOKING_SUMMARY_ROOM_ADDED';
sagewest.component.BookingSummary.BOOKING_SUMMARY_ROOM_DELETED = 'BOOKING_SUMMARY_ROOM_DELETED';
sagewest.component.BookingSummary.BOOKING_SUMMARY_EXTRA_ADDED = 'BOOKING_SUMMARY_EXTRA_ADDED';
// sagewest.component.BookingSummary.BOOKING_SUMMARY_EXTRA_DELETED = 'BOOKING_SUMMARY_EXTRA_DELETED';
sagewest.component.BookingSummary.ON_PROCEED_TO_PAYMENT = 'ON_PROCEED_TO_PAYMENT';
sagewest.component.BookingSummary.ON_BOOKING_SUMMARY_DETAILS_MOBILE_SHOW = 'ON_BOOKING_SUMMARY_DETAILS_MOBILE_SHOW';
sagewest.component.BookingSummary.ON_BOOKING_SUMMARY_DETAILS_MOBILE_HIDE = 'ON_BOOKING_SUMMARY_DETAILS_MOBILE_HIDE';

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
sagewest.component.BookingSummary.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


sagewest.component.BookingSummary.prototype.private_method_01 = function() {};
sagewest.component.BookingSummary.prototype.private_method_02 = function() {};
sagewest.component.BookingSummary.prototype.private_method_03 = function() {};
sagewest.component.BookingSummary.prototype.private_method_04 = function() {};
sagewest.component.BookingSummary.prototype.private_method_05 = function() {};
sagewest.component.BookingSummary.prototype.private_method_06 = function() {};

sagewest.component.BookingSummary.prototype.getStepHeight = function() {
    console.log('getstepheight: '+$(".booking-steps.active-step").height());

    // if($(".booking-step.active-step").height()!==null) {
    return $(".booking-steps.active-step").height();  
    
    
};

/**
 * sample_method_calls
 */
sagewest.component.BookingSummary.prototype.sample_method_calls = function() {
  sagewest.component.BookingSummary.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(sagewest.component.BookingSummary.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//

sagewest.component.BookingSummary.prototype.update_summary_total = function() {
  var totalPrice = 0;

  if(this.element.find("p.price").length > 0) {
      this.element.find("p.price").each(function(i, v){
      totalPrice += parseFloat($(v).text().replace('$', ''));    
      this.element.find(".reservation-summary-content-total-price p").text("$"+totalPrice.toFixed(2));
      this.element.find(".reservation-summary-content-sub-total-price h6").text("$"+totalPrice.toFixed(2));
      this.element.find(".reservation-summary-sidebar-total-amount-mobile").text("$"+totalPrice.toFixed(2));
    }.bind(this));  
  }else {
    totalPrice = 0;
    this.element.find(".reservation-summary-content-total-price p").text("$"+totalPrice.toFixed(2));
    this.element.find(".reservation-summary-content-sub-total-price h6").text("$"+totalPrice.toFixed(2));
    this.element.find(".reservation-summary-sidebar-total-amount-mobile").text("$"+totalPrice.toFixed(2));
  }
  
}

sagewest.component.BookingSummary.prototype.update_page_height_on_stick = function() {
    
    console.log("step height: "+$(".booking-steps.active-step").height())
    console.log("sidebar height: "+$("#sticky-sidebar").height());
    // console.log("container height: "+$("#booking-engine-steps-container").height())
    // if($(".booking-steps.active-step").height() < this.element.height()) {   
    // console.log(this.element.find(".selected-rooms").length);
    if($(".booking-steps.active-step").height() < $("#sticky-sidebar")) {  
      console.log('sidebar higher');
      $("#booking-engine-steps-container").css('height', $("#sticky-sidebar") + 200);
    }else {
      $("#booking-engine-steps-container").css('height', 'auto');
    }

}

sagewest.component.BookingSummary.prototype.update_page_height = function() {
    
    console.log("step height: "+$(".booking-steps.active-step").height())
    console.log("sidebar height: "+this.element.height())
    // console.log("container height: "+$("#booking-engine-steps-container").height())
    // if($(".booking-steps.active-step").height() < this.element.height()) {   
    // console.log(this.element.find(".selected-rooms").length);
    if($(".booking-steps.active-step").height() < this.element.height()) {  
      console.log('sidebar higher');
      $("#booking-engine-steps-container").css('height', this.element.height() + 200);
    }else {
      $("#booking-engine-steps-container").css('height', 'auto');
    }

}

sagewest.component.BookingSummary.prototype.update_page_height_on_confirmation = function() {
    
    // console.log($(".booking-steps.active-step").height())
    // console.log("element height: "+this.element.height())
    // if($(".booking-steps.active-step").height() < this.element.height()) {   
    // console.log(this.element.find(".selected-rooms").length);
    if($(".booking-steps.active-step").height() < this.element.height()) {  
      $("#booking-engine-steps-container").css('height', this.element.height());
    }else {
      $("#booking-engine-steps-container").css('height', 'auto');
    }

}

// DUMMY ADD
sagewest.component.BookingSummary.prototype.book_room = function(booking_room, no_of_room_booked) {

  var raw_price = booking_room.selected_rate_package.price;
  var raw_price_arr = raw_price.split('$');

  var price = parseFloat(raw_price_arr[1]).toFixed(2);  

  var booking_room_data = {
    'no_of_room_booked' : no_of_room_booked,
    'room_title' : booking_room.room_title,
    'rate_title' : booking_room.selected_rate_package.rate_title,
    'rate_title_shorten' : booking_room.selected_rate_package.rate_title.substring(0, 15) + "...",
    'price' : "$"+price
  };

  this.selected_room_container = this.element.find(".reservation-summary-selected-rooms-container");
  this.selected_room_container_2 = this.element.find(".reservation-summary-content-selected-rooms");

  var room_template = Handlebars.compile($("#summary-room-template").html());
  var room_html = room_template(booking_room_data);

  var room_template_02 = Handlebars.compile($("#summary-room-template-02").html());
  var room_html_02 = room_template_02(booking_room_data);

  if(this.element.find(".selected-rooms").length <= 5) {
    // this.selected_room_container.append(this.room_html);        
    this.selected_room_container.append(room_html);        

    this.dispatchEvent(new goog.events.Event(sagewest.component.BookingSummary.BOOKING_SUMMARY_ROOM_ADDED));

    // this.selected_room_container_2.append(this.room_html_2);
    this.selected_room_container_2.append(room_html_02);

    this.update_summary_total();

    this.update_page_height();
  }
  else
    alert("Maximum no of room booking reached");
};
sagewest.component.BookingSummary.prototype.book_extra = function(booking_extra) {
  this.element.find(".reservation-summary-selected-extras-container").show();
  this.element.find(".reservation-summary-content-selected-extras").show();

  var raw_price = booking_extra.price;
  var raw_price_arr = raw_price.split('$');

  var extra_price = parseFloat(raw_price_arr[1]).toFixed(2);  
  var extra_title = "";
  if(booking_extra.extra_title.length > 15)
    extra_title = booking_extra.extra_title.substring(0, 15) + "...";
  else
    extra_title = booking_extra.extra_title;

  var booking_extra_data = {
    'extra_title' : extra_title,
    'quantity' : booking_extra.quantity,
    'adult' : booking_extra.adult,
    'child' : booking_extra.child,
    'extra_price' : "$"+extra_price
  };

  // console.log(booking_extra_data);

  var extra_template = Handlebars.compile($("#summary-extra-template").html());
  var extra_html = extra_template(booking_extra_data);

  // console.log(this.extra_html);
  // console.log(extra_html);

  var extra_template_02 = Handlebars.compile($("#summary-extra-template-02").html());
  var extra_html_02 = extra_template_02(booking_extra_data);

  this.selected_extra_container = this.element.find(".selected-extra-container");
  this.selected_extra_container_2 = this.element.find(".reservation-summary-content-selected-extras-content");
  

  if(this.element.find(".reservation-summary-content-selected-extra").length <= 5) {
    // this.selected_extra_container.append(this.extra_html);
    this.selected_extra_container.append(extra_html);

    this.dispatchEvent(new goog.events.Event(sagewest.component.BookingSummary.BOOKING_SUMMARY_EXTRA_ADDED));

    // this.selected_extra_container_2.append(this.extra_html_2);
    this.selected_extra_container_2.append(extra_html_02);

    this.update_summary_total();

    this.update_page_height();
  }
  else
    alert("Maximum no of add ons reached");
};
sagewest.component.BookingSummary.prototype.public_method_03 = function() {};
sagewest.component.BookingSummary.prototype.public_method_04 = function() {};
sagewest.component.BookingSummary.prototype.public_method_05 = function() {};
sagewest.component.BookingSummary.prototype.public_method_06 = function() {};


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
sagewest.component.BookingSummary.prototype.on_proceed_to_payment_click = function(event) {
  // $('body').trigger("ON_PROCEED_TO_PAYMENT");
  this.dispatchEvent(new goog.events.Event(sagewest.component.BookingSummary.ON_PROCEED_TO_PAYMENT));
};

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.BookingSummary.prototype.on_delete_room_btn_click = function(event) {
  event.preventDefault();

  var deleteBtn = $(event.currentTarget).parent().parent().parent().parent().parent().parent().parent();
  var current_index = deleteBtn.index();    

  var arr = $(".reservation-summary-content-selected-room");

  for (var i = 0; i < arr.length; i++) {
    if(current_index==i) {
      arr[i].remove();
    }
  }

  this.update_summary_total();
  this.update_page_height();

  deleteBtn.remove();

  // re-index room no after delete
  var arr = $(".selected-rooms");
  for (var i = 0; i < arr.length; i++) {
    var index = i + 1;
    // console.log($(arr[i]).find(".manic-expand-container-title h6"));
    $(arr[i]).find(".manic-expand-container-title h6").html("Room "+index);
  }

  var arr = $(".reservation-summary-content-selected-room");
  for (var i = 0; i < arr.length; i++) {
    var index = i + 1;
    // console.log($(arr[i]).find(".reservation-summary-content-selected-room-title h5"));
    $(arr[i]).find(".reservation-summary-content-selected-room-title h5").html("Room "+index);
  }

  this.dispatchEvent(new goog.events.Event(sagewest.component.BookingSummary.BOOKING_SUMMARY_ROOM_DELETED));

};

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.BookingSummary.prototype.on_delete_extra_btn_click = function(event) {
  event.preventDefault();

  var deleteBtn = $(event.currentTarget).parent().parent().parent().parent();
  var current_index = deleteBtn.index();

  var arr = $(".reservation-summary-content-selected-extra");
  var item = null;

  // console.log(arr.length);

  for (var i = 0; i < arr.length; i++) {
    if(current_index==i) {
      arr[i].remove();
    }
  }

  if(arr.length==1) {
    this.element.find(".reservation-summary-selected-extras-container").hide();
    this.element.find(".reservation-summary-content-selected-extras").hide();
  }

  this.update_summary_total(); 

  this.update_page_height();

  deleteBtn.remove();

};

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.BookingSummary.prototype.on_booking_summary_details_mobile_show_click = function(event) {
  if(!$('.reservation-summary-sidebar-details').is(":visible")) {

    $(event.currentTarget).find('h5').text("Booking Summary");

    $('.reservation-summary-sidebar-content').addClass("show");

    $('.reservation-summary-sidebar-details').show(0, function(){
      $("#sticky-sidebar-mobile").addClass("scrollable");
      
      // new change
      console.log($(".booking-steps.active-step").attr("data-step"));
      if($(".booking-steps.active-step").attr("data-step")<3) {
        $("#sticky-sidebar-mobile").addClass("fixed");
        $("#booking-engine-sidebar").addClass("sidebar-open-mobile");
        $("html,body").addClass("fixed");  
      }      

      this.dispatchEvent(new goog.events.Event(sagewest.component.BookingSummary.ON_BOOKING_SUMMARY_DETAILS_MOBILE_SHOW));
    }.bind(this));  
    
  }else {

    $(event.currentTarget).find('h5').text("See Booking Summary");

    $('.reservation-summary-sidebar-content').removeClass("show");

    $('.reservation-summary-sidebar-details').hide(0, function(){
      $("#sticky-sidebar-mobile").removeClass("scrollable");
      
      // new change
      console.log($(".booking-steps.active-step").attr("data-step"));
      if($(".booking-steps.active-step").attr("data-step")<3) {
        $("#sticky-sidebar-mobile").removeClass("fixed");
        $("#booking-engine-sidebar").removeClass("sidebar-open-mobile");
        $("html,body").removeClass("fixed");
      }

      this.dispatchEvent(new goog.events.Event(sagewest.component.BookingSummary.ON_BOOKING_SUMMARY_DETAILS_MOBILE_HIDE));
    }.bind(this));  
  }  
  
};

