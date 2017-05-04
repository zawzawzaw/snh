goog.provide('sagewest.page.Booking');
goog.require('sagewest.page.Default');

goog.require('sagewest.component.BookingStep');
goog.require('sagewest.component.BookingStepsIndicator');
goog.require('sagewest.component.BookingRoom');
goog.require('sagewest.component.BookingSummary');
goog.require('sagewest.component.BookingExtra');
goog.require('sagewest.component.BookingPayment');

/**
 * The MICE constructor
 * @inheritDoc
 * @constructor
 * @extends {sagewest.page.Default}
 */
sagewest.page.Booking = function(options, element) {
  sagewest.page.Default.call(this, options, element);
  this.options = $.extend(this.options, sagewest.page.Booking.DEFAULT, options);

  

};
goog.inherits(sagewest.page.Booking, sagewest.page.Default);



// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for MICE
 * @const {object}
 */
sagewest.page.Booking.DEFAULT = {

};



/**
 * @override
 * @inheritDoc
 */
sagewest.page.Booking.prototype.init = function() {

  sagewest.page.Booking.superClass_.init.call(this);

  this.active_step = 1;
  this.current_step_no = 1; // use for mobile enable/disable sticky

  this.no_of_room_booked = 0;  
  this.booked_room_counter = 0;  

  this.create_datepicker_inputs();

  this.booking_step_items_array = [];
  this.booking_steps_indicator_items_array = [];

  this.update_page_layout();    // this is called after the initial create to update the layout

  this.create_booking_rooms();
  this.create_booking_extras();

  this.sticky_sidebar_scence = null;
  this.sticky_sidebar_scence_mobile = null;
  this.booking_payment_item = null;
  this.create_booking_payment();

  this.create_telephone_inputs();

  // this.create_no_room_carousel();  

  $('.back-to-search-btn').click(function(e){  
    e.preventDefault();  
    $(".rates-breakdown-popup-container, .cancellation-popup-container").removeClass('show');
  });

  $('.back-to-payment-btn').click(function(e){  
    e.preventDefault();  
    $(".cvv-popup-container").removeClass('show');
  });

  $(document).click(function(e){    
    // e.preventDefault();  

    var target = $(e.target);

    if ($.contains($(".rates-breakdown-popup-container")[0], target[0]) == false && 
        $.contains($(".cancellation-popup-container")[0], target[0]) == false &&
        $.contains($(".cvv-popup-container")[0], target[0]) == false) {
      $(".rates-breakdown-popup-container").removeClass('show');
      $(".cancellation-popup-container").removeClass('show');
      $(".cvv-popup-container").removeClass('show');
    }

    
  });

  $(".back-to-select-your-room").click(this.on_back_to_select_your_room_click.bind(this));

  this.create_booking_steps();
  this.create_booking_steps_indicator();


  this.booking_summary_item = null;
  this.create_booking_summary();    

  $('body').on("ON_RATES_EXPAND", function(e){
    this.booking_summary_item.update_page_height();
  }.bind(this));

  $('body').on("ON_EXPAND_CONTAINER_EXPAND", function(e){    
    this.booking_summary_item.update_page_height();
    this.give_space_for_sidebar_mobile();
  }.bind(this));

  $('body').on("ON_EXPAND_CONTAINER_COLLAPSE", function(e){
    this.booking_summary_item.update_page_height();
    this.give_space_for_sidebar_mobile();
  }.bind(this));

  $(".proceed-to-payment-mobile").click(this.proceed_to_next_step.bind(this));

  $.fn.extend({
      animateCss: function (animationName) {
          var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
          this.addClass('animated ' + animationName).one(animationEnd, function() {
              $(this).removeClass('animated ' + animationName);
          });
      }
  });


};






//     ____ ____  _____    _  _____ _____
//    / ___|  _ \| ____|  / \|_   _| ____|
//   | |   | |_) |  _|   / _ \ | | |  _|
//   | |___|  _ <| |___ / ___ \| | | |___
//    \____|_| \_\_____/_/   \_\_| |_____|
//

sagewest.page.Booking.prototype.create_booking_rooms = function(){
  var arr = $('.booking-rooms');
  var item = null;
  var room_item = null;

  for (var i = 0; i < arr.length; i++) {
    var item = $(arr[i]);
    var room_item = new sagewest.component.BookingRoom({}, item);  

    goog.events.listen(room_item, sagewest.component.BookingRoom.ON_ROOM_ADDED, function(event){      
      
      this.no_of_room_booked += 1;      

      this.booking_summary_item.book_room(event.currentTarget, this.booked_room_counter + 1); // add booking room to sidebar      

      this.booking_payment_item.add_guest_details_form_per_room_booking(this.booked_room_counter);


      // closing other rooms expander when new room added
      var expand_container = null;
      var room_index = this.no_of_room_booked;

      for (var i = 0, l=this.expand_container_array.length; i < l; i++) {
        if(i!==room_index) {          
          expand_container = this.expand_container_array[i];

          if(!$(expand_container.element[0]).hasClass('extra-version')) {
            expand_container.instant_collapse();  
          }
          
        }        
      }          

    }.bind(this));
  }
}

sagewest.page.Booking.prototype.create_booking_extras = function(){
  var arr = $('.booking-extras');
  var item = null;
  var room_item = null;

  for (var i = 0; i < arr.length; i++) {
    var item = $(arr[i]);
    var room_item = new sagewest.component.BookingExtra({}, item);  

    goog.events.listen(room_item, sagewest.component.BookingExtra.ON_EXTRA_ADDED, function(event){
      
      // console.log(event.currentTarget);
      this.booking_summary_item.book_extra(event.currentTarget); // add booking room to sidebar

    }.bind(this));
  }
}

sagewest.page.Booking.prototype.create_booking_payment = function(){  

  this.booking_payment_item = new sagewest.component.BookingPayment({}, $('#booking-engine-step-3-content'));

  goog.events.listen(this.booking_payment_item, sagewest.component.BookingPayment.ON_BACK_TO_PERSONALISE, function(event){
         
      // console.log('on back to personalise') 
      this.booking_step_items_array[this.active_step].go_prev_step(); // this include step 0
      this.booking_steps_indicator_items_array[this.active_step-1].change_prev_step(); // this doesn't include step 0

      if(this.active_step > 1) {
        this.active_step = this.active_step - 1;
      }

  }.bind(this));

  // goog.events.listen(this.booking_payment_item, sagewest.component.BookingPayment.ON_GUEST_DETAIL_FORM_ADDED, function(event){
    
  //   // this event doesn't work somehow
  //   this.create_dropdown();

  // }.bind(this));

  goog.events.listen(this.booking_payment_item, sagewest.component.BookingPayment.ON_PAYMENT_TAB_CHANGE, function(event){
    
    // this.create_dropdown();
    // this.form_check_array = [];
    // this.create_form_check();

  }.bind(this));  

}


sagewest.page.Booking.prototype.create_booking_steps = function(){
  var arr = $('.booking-steps');
  var item = null;
  var step_item = null;

  for (var i = 0; i < arr.length; i++) {
    var item = $(arr[i]);
    var step_item = new sagewest.component.BookingStep({}, item);
    
    this.booking_step_items_array[i] = step_item;

    goog.events.listen(step_item, sagewest.component.BookingStep.ON_STEP_CHANGE, function(event){
      this.create_image_container();
      this.update_page_layout();
      this.booking_summary_item.update_page_height();      

      if(this.active_step==1) {        // step 1 & 2
        var expand_container = null;

        for (var i = 0, l=this.expand_container_array.length; i < l; i++) {
          expand_container = this.expand_container_array[i];

          if(!$(expand_container.element[0]).hasClass('extra-version')) {
            expand_container.instant_collapse();
          }
          
        }                          

        this.create_sticky_sidebar_desktop();
        this.create_sticky_sidebar_mobile();    

      }
      if(this.active_step==2) {        // step 3
        var expand_container = null;

        for (var i = 0, l=this.expand_container_array.length; i < l; i++) {
          expand_container = this.expand_container_array[i];
          expand_container.instant_collapse();          
        }

        this.create_dropdown();
        this.form_check_array = [];
        this.create_form_check();        
        
      }      
      if(this.active_step>=3) {        // step 4
        var expand_container = null;

        for (var i = 0, l=this.expand_container_array.length; i < l; i++) {
          expand_container = this.expand_container_array[i];
          expand_container.instant_expand();
        }          

        // console.log("SIDEBAR HEIGHT: "+$('.reservation-summary-sidebar').height());
        // this.booking_summary_item.update_page_height_on_confirmation();        
        
        setTimeout(function(){
          this.booking_summary_item.update_page_height_on_confirmation();
        }.bind(this), 1000);

        // this.booking_summary_item.update_page_height();

      }      

      this.create_no_room_carousel();    

      $('html,body').scrollTop(0);

    }.bind(this));

  }
}

sagewest.page.Booking.prototype.create_sticky_sidebar_desktop = function() {      

    $(window).on('resize', function(){
      // console.log('resizing');
      // console.log($(".reservation-summary-sidebar").css("width"));
      $("#sticky-sidebar").css("width", $(".reservation-summary-sidebar").css("width"));  
    });

    $("#sticky-sidebar").css("width", $(".reservation-summary-sidebar").css("width"));

    if(manic.IS_MOBILE == false){
      this.sticky_sidebar_scence = new ScrollMagic.Scene({triggerElement: "#sticky-anchor", triggerHook: 'onLeave', offset: -83 }) //offset: $('#sticky-sidebar').height()
              .setClassToggle("#sticky-sidebar", "stick") // add class toggle
              // .setPin("#sticky-sidebar")
              // .addIndicators({name: ("" + Math.random()) }) // add indicators (requires plugin)
              .addTo(this.controller);

      // this.sticky_sidebar_scence.on("enter", function (event) {         
      //   this.booking_summary_item.update_page_height_on_stick();
      // }.bind(this));
    }

}

sagewest.page.Booking.prototype.create_sticky_sidebar_mobile = function() {      

    if(manic.IS_MOBILE == true){

      if(this.controller==null){
        this.controller = new ScrollMagic.Controller(); // needed by some components
      }

      $(".reservation-summary-sidebar-title").find('h5').text("See Booking Summary");

      this.sticky_sidebar_scence_mobile = new ScrollMagic.Scene({triggerElement: "#sticky-anchor-mobile", triggerHook: 'onLeave', offset: -63 }) //$('.booking-steps.active-step').offset().top + 100
              .setClassToggle("#sticky-sidebar-mobile", "stick") // add class toggle
              // .setPin("#sticky-sidebar-mobile")
              // .addIndicators({name: ("" + Math.random()) }) // add indicators (requires plugin)
              .addTo(this.controller);
      
      this.sticky_sidebar_scence_mobile.on("enter", function (event) {         
        $("#booking-engine-sidebar").css("z-index", 99999);
        // $(".booking-steps.active-step").css("cssText", "padding-top: 90px!important");
      }.bind(this));

      this.sticky_sidebar_scence_mobile.on("leave", function (event) {
        $("#booking-engine-sidebar").css("z-index", 2);
        this.give_space_for_sidebar_mobile();
      }.bind(this));
    }
    
}

sagewest.page.Booking.prototype.destroy_sticky_sidebar_mobile = function() {      
  if(manic.IS_MOBILE == true){
    $("#booking-engine-sidebar").addClass("scence-destroyed");
    this.sticky_sidebar_scence_mobile.destroy(true);
    this.controller.destroy(true);
    this.controller = null;
  }
}

sagewest.page.Booking.prototype.destroy_sticky_sidebar_desktop = function() {      
  if(manic.IS_MOBILE == false){
    $("#booking-engine-sidebar").addClass("scence-destroyed");
    this.sticky_sidebar_scence.destroy(true);
    this.controller.destroy(true);
    this.controller = null;
  }
}

sagewest.page.Booking.prototype.show_summary_detail_mobile = function() {      
  if(manic.IS_MOBILE == true){
    $(".reservation-summary-sidebar-details").show();
  }
}

sagewest.page.Booking.prototype.give_space_for_sidebar_mobile = function() {    
  if(manic.IS_MOBILE == true){
    if(!$("#booking-engine-sidebar").hasClass("sidebar-open-mobile"))
      $(".booking-steps.active-step").css("padding-top", $("#booking-engine-sidebar").height());
  }
}

sagewest.page.Booking.prototype.create_booking_steps_indicator = function(){
  var arr = $('#booking-engine-steps-indicator .step');
  var item = null;
  var step_item = null;

  for (var i = 0; i < arr.length; i++) {
    var item = $(arr[i]);
    var step_item = new sagewest.component.BookingStepsIndicator({}, item);  

    this.booking_steps_indicator_items_array[i] = step_item;

    goog.events.listen(step_item, sagewest.component.BookingStepsIndicator.ON_INDICATOR_STEP_CLICK, function(event){

      var changed_step = event.currentTarget.element.attr("data-step");

      if(this.active_step > changed_step && this.active_step != 4) {

        $("#booking-engine-steps-indicator .step").removeClass("active-step");  
        $("#step-indicator-"+changed_step).addClass("active-step");

        this.booking_step_items_array[changed_step].go_to_step(); // include step 0 so no need -1
        this.active_step = changed_step;
      }            

    }.bind(this));

    goog.events.listen(step_item, sagewest.component.BookingStepsIndicator.ON_STEP_INDICATOR_CHANGE, function(event){

      this.enable_disable_cursor_pointer();

      this.current_step_no = $("#booking-engine-steps-indicator").find(".active-step").data("step");

      if(this.current_step_no==1) {

        this.create_sticky_sidebar_desktop();
        this.create_sticky_sidebar_mobile();   

        $(".reservation-summary-content .proceed-to-payment").show();   

      } else if(this.current_step_no==2) {

        this.create_sticky_sidebar_desktop();
        this.create_sticky_sidebar_mobile();    

        $(".reservation-summary-content .proceed-to-payment").show();          

      } else if(this.current_step_no==3) {        

        if(manic.IS_MOBILE == true){
          var expand_container = null;

          for (var i = 0, l=this.expand_container_array.length; i < l; i++) {
            expand_container = this.expand_container_array[i];
            expand_container.instant_expand();
          }

          $(".reservation-summary-content .proceed-to-payment").hide();
        }

        $("html,body").removeClass("fixed");
        $("#booking-engine-sidebar").removeClass("sidebar-open-mobile"); // for transparent bg
        $("#sticky-sidebar-mobile").removeClass("fixed");

        this.show_summary_detail_mobile();
        this.destroy_sticky_sidebar_mobile();
        this.give_space_for_sidebar_mobile();

        $(".reservation-summary-sidebar-title").find('h5').text("Booking Summary");

      } else {

        this.destroy_sticky_sidebar_desktop();
        $("#proceed-btn-container-mobile").hide();

      }

    }.bind(this));

  }

  sagewest.page.Booking.prototype.enable_disable_cursor_pointer = function() {  
    var arr = $('#booking-engine-steps-indicator .step');
    var item = null;
    
    for (var i = 0; i < arr.length; i++) {
      var item = $(arr[i]);

      if(item.attr('data-step') <= this.active_step && this.active_step != 4) {
        item.find('a').addClass("clickable");    
      }else {
        item.find('a').removeClass("clickable");
      }
    }
    
  };
}


// sagewest.page.Booking.prototype.create_collapsable_arrow_cta = function(){

//   this.collapsable_arrow_cta = $(".collapsable-arrow-cta");
//   this.collapsable_parent = $(".booking-room-rate");
//   this.collapsable_content = $(".booking-room-rate-more-content");

// }

sagewest.page.Booking.prototype.create_booking_summary = function(){
  this.booking_summary_item = new sagewest.component.BookingSummary({}, $('.reservation-summary-sidebar'));

  goog.events.listen(this.booking_summary_item, sagewest.component.BookingSummary.BOOKING_SUMMARY_ROOM_ADDED, function(event){

    this.create_image_container();
    this.create_expand_container();

    this.booked_room_counter += 1;

    if(this.booked_room_counter > 1)
      $(".reservation-summary-sidebar-total-room-mobile").html(this.booked_room_counter+" Rooms");
    else
      $(".reservation-summary-sidebar-total-room-mobile").html(this.booked_room_counter+" Room");

    $(".reservation-summary-sidebar-title-mobile").animateCss('animated fadeIn');

    // this.update_page_layout();

  }.bind(this));

  goog.events.listen(this.booking_summary_item, sagewest.component.BookingSummary.BOOKING_SUMMARY_EXTRA_ADDED, function(event){

    this.create_image_container();
    this.create_expand_container();    

  }.bind(this));

  goog.events.listen(this.booking_summary_item, sagewest.component.BookingSummary.BOOKING_SUMMARY_ROOM_DELETED, function(event){
    
    this.booked_room_counter -= 1;

    this.booking_payment_item.delete_guest_details_form_per_room_booking();    
    this.booking_summary_item.update_page_height();

    if(manic.IS_MOBILE == true) 
      this.give_space_for_sidebar_mobile();

    if(this.booked_room_counter > 1)
      $(".reservation-summary-sidebar-total-room-mobile").html(this.booked_room_counter+" Rooms");
    else
      $(".reservation-summary-sidebar-total-room-mobile").html(this.booked_room_counter+" Room");

  }.bind(this));

  goog.events.listen(this.booking_summary_item, sagewest.component.BookingSummary.ON_PROCEED_TO_PAYMENT, function(event){

    this.proceed_to_next_step();

  }.bind(this));

  goog.events.listen(this.booking_summary_item, sagewest.component.BookingSummary.ON_BOOKING_SUMMARY_DETAILS_MOBILE_SHOW, function(event){

    if(this.current_step_no>2)
      this.give_space_for_sidebar_mobile();

  }.bind(this));

  goog.events.listen(this.booking_summary_item, sagewest.component.BookingSummary.ON_BOOKING_SUMMARY_DETAILS_MOBILE_HIDE, function(event){
    
    this.give_space_for_sidebar_mobile();

  }.bind(this));
}

sagewest.page.Booking.prototype.proceed_to_next_step = function() {
  // form validation
  var valid = true;
  var pass_all_forms = true;

  if(this.active_step>=3) {

    var form_container = null;

    for (var i = 0, l=this.form_check_array.length; i < l; i++) {
      form_container = this.form_check_array[i];
      valid = form_container.check_form();
      $('.form-group.has-error').find("input").first().focus();

      if(manic.IS_MOBILE == true){
        $('.form-group.has-error').find("input").first().blur();
      }
      
      if(valid === false) {
        pass_all_forms = false;
      }
    }
  }  

  if(pass_all_forms) {
    this.booking_step_items_array[this.active_step].go_next_step(); // this include step 0
    this.booking_steps_indicator_items_array[this.active_step-1].change_next_step(); // this doesn't include step 0

    if(this.active_step < 4) {
      this.active_step = parseInt(this.active_step) + 1;
      // console.log(this.active_step);
    }
  }
}


// sagewest.page.Booking.prototype.create_show_rate_cta = function(){

//   this.show_rate_cta = $(".show-rates-cta");
//   this.rate_collapsable_parent = $(".booking-room-box-content");
//   this.rate_collapsable_content = $(".booking-room-rates");

// }

// sagewest.page.Booking.prototype.create_rate_breakdown_popup = function(){

//   this.view_rate_breakdown_cta = $(".view-rate-breakdown-cta");  
//   this.rates_breakdown_popup_container = $(".rates-breakdown-popup-container");  
//   this.back_to_search_btn = $(".back-to-search-btn");  

// }

sagewest.page.Booking.prototype.create_datepicker_inputs = function() {  

  var daterangepicker_option = {
      "autoApply": true,
      "opens": "right",
      "parentEl": "#booking-calendar",
      "minDate": formatted_current_date,      
      "locale": {
          "separator": " to ",
          "daysOfWeek": [
              "S",
              "M",
              "T",
              "W",
              "T",
              "F",
              "S"
          ],
          "monthNames": [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December"
          ]
      }
  };
  if(manic.IS_MOBILE == true){
    $('#booking-engine-date-picker').daterangepicker(daterangepicker_option);

    $('#booking-engine-date-picker').on('show.daterangepicker', function(ev, picker) {
      $('.booking-form').addClass('open-calendar');
    });

    $('#booking-engine-date-picker').on('hide.daterangepicker', function(ev, picker) {
      $('.booking-form').removeClass('open-calendar');
    });

  } else {
    
    $.extend(daterangepicker_option, {"alwaysShowCalendars": true});

    $('#booking-engine-date-picker').daterangepicker(daterangepicker_option);
    $('#booking-engine-date-picker').trigger("click");
  }  

  $('#arrival_departure').daterangepicker({
        "autoApply": true,
        "opens": "right",
        "parentEl": "#step-1-booking-calendar",
        "minDate": formatted_current_date,
        "locale": {
            "separator": " to ",
            "daysOfWeek": [
                "S",
                "M",
                "T",
                "W",
                "T",
                "F",
                "S"
            ],
            "monthNames": [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ]
        }
    });
}

sagewest.page.Booking.prototype.create_telephone_inputs = function() {  
  $(".telephone-inputs").intlTelInput({                
      initialCountry: "auto",
      geoIpLookup: function(callback) {
        $.get('http://ipinfo.io', function() {}, "jsonp").always(function(resp) {
          var countryCode = (resp && resp.country) ? resp.country : "";
          callback(countryCode);
        });
      },
      nationalMode: false,
      autoHideDialCode: false,
      autoPlaceholder: false,
      preferredCountries: []                
  });
}



sagewest.page.Booking.prototype.create_no_room_carousel = function() {
  $('#booking-no-room-suggestion-carousel').slick({
    dots: true,
    centerMode: true,
    centerPadding: '155px',
    slidesToShow: 1,    
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  // On before slide change
  $('#home-location-content-carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $(".home-location-content-carousel-text").removeClass("active");

    var nextSlide = nextSlide + 1;

    console.log(nextSlide);

    $("#home-location-content-carousel-text-"+nextSlide).addClass("active");
  });    
}


//    __  __  ___  ____ ___ _     _____
//   |  \/  |/ _ \| __ )_ _| |   | ____|
//   | |\/| | | | |  _ \| || |   |  _|
//   | |  | | |_| | |_) | || |___| |___
//   |_|  |_|\___/|____/___|_____|_____|
//



//     _____     _______ ____  ____  ___ ____  _____
//    / _ \ \   / / ____|  _ \|  _ \|_ _|  _ \| ____|
//   | | | \ \ / /|  _| | |_) | |_) || || | | |  _|
//   | |_| |\ V / | |___|  _ <|  _ < | || |_| | |___
//    \___/  \_/  |_____|_| \_\_| \_\___|____/|_____|
//




/**
 * @override
 * @inheritDoc
 */
sagewest.page.Booking.prototype.update_page_layout = function() {

  sagewest.page.Booking.superClass_.update_page_layout.call(this);


  this.window_width = this.window.width();
  this.window_height = this.window.height();

  /*
  // zoom check
  if (this.window_width <= 1280 && manic.IS_ACTUAL_MOBILE == false ||
      manic.IS_ACTUAL_MOBILE == true && manic.IS_TABLET_LANDSCAPE) {
    this.window_width *= 1.1111;
    this.window_height *= 1.1111;
  }
  */


};


/**
 * @override
 * @inheritDoc
 */
sagewest.page.Booking.prototype.on_scroll_to_no_target = function(str_param, str_param_2, str_param_3) {
  sagewest.page.Booking.superClass_.scroll_to_target.call(this, str_param, str_param_2, str_param_3);

  console.log('scroll to target');

  console.log(str_param);

  /*
  // Mice venue landing - on hash change
  if(manic.IS_MOBILE == true && this.is_mice_venue_landing == true){

    // console.log('str_param: ' + str_param);
    if (str_param == "indoor-venue") {
      this.mice_landing_mobile_indoor_open();

    } else if (str_param == "outdoor-venue") {
      this.mice_landing_mobile_outdoor_open();

    } else if (str_param == "ballrooms-venue") {
      this.mice_landing_mobile_ballrooms_open();
    }

  }
  */

};
/**
 * @override
 * @inheritDoc
 */
sagewest.page.Booking.prototype.on_scroll_to_no_target = function(){

  // Mice venue landing
  /*
  if(manic.IS_MOBILE == true && this.is_mice_venue_landing == true){
    // console.log('go home!!');
    this.mice_landing_mobile_both_close();
  }
  */

};

sagewest.page.Booking.prototype.others = function(){  

    $('body').addClass('preload-start');

};

// sagewest.page.Booking.prototype.collapse = function(){
//   if (this.is_expanded == true) {
//     this.is_expanded = false;

//     this.collapsable_parent.removeClass('expand-version');
//     this.collapsable_content.slideUp(500);
//   }
// };

// sagewest.page.Booking.prototype.expand = function() {
//   if (this.is_expanded == false) {
//     this.is_expanded = true;

//     this.collapsable_parent.addClass('expand-version');
//     this.collapsable_content.slideDown(500);
//   }
// };

// sagewest.page.Booking.prototype.rate_collapse = function(){
//   if (this.is_rate_expanded == true) {
//     this.is_rate_expanded = false;

//     this.rate_collapsable_parent.removeClass('expand-version');
//     this.rate_collapsable_content.slideUp(500);
//   }
// };

// sagewest.page.Booking.prototype.rate_expand = function() {
//   if (this.is_rate_expanded == false) {
//     this.is_rate_expanded = true;

//     this.rate_collapsable_parent.addClass('expand-version');
//     this.rate_collapsable_content.slideDown(500);
//   }
// };

sagewest.page.Booking.prototype.pop_up_close = function(){
  if (this.is_popup_open == true) {
    this.is_popup_open = false;

    $("html,body").removeClass("fixed");
    this.rates_breakdown_popup_container.removeClass('show');
  }
};

sagewest.page.Booking.prototype.pop_up_open = function() {
  if (this.is_popup_open == false) {
    this.is_popup_open = true;

    $("html,body").addClass("fixed");
    this.rates_breakdown_popup_container.addClass('show');
  }
};

//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//

// /**
//  * @param {object} event
//  */
// sagewest.page.Booking.prototype.on_collapsable_arrow_click = function(event) {  
//   event.preventDefault();
//   this.collapsable_content = $(event.currentTarget).parent().parent().parent().parent().parent().find(".collapsable-content");

//   if(this.is_expanded == true){
//     this.collapse();
//   } else {
//     this.expand();
//   }

// };

// /**
//  * @param {object} event
//  */
// sagewest.page.Booking.prototype.on_show_rate_click = function(event) {  
//   event.preventDefault();
//   this.collapsable_content = $(event.currentTarget).parent().parent().parent().parent().parent().find(".collapsable-content");

//   if(this.is_rate_expanded == true){
//     this.rate_collapse();
//   } else {
//     this.rate_expand();
//   }

// };

/**
 * @param {object} event
 */
sagewest.page.Booking.prototype.on_rate_breakdown_click = function(event) {  
  event.preventDefault();
  if(this.is_popup_open == true) {
    this.pop_up_close();
  } else {
    this.pop_up_open();
  }

};

sagewest.page.Booking.prototype.on_back_to_select_your_room_click = function(event) {
  // console.log('on back to personalise') 
  this.booking_step_items_array[this.active_step].go_prev_step(); // this include step 0
  this.booking_steps_indicator_items_array[this.active_step-1].change_prev_step(); // this doesn't include step 0

  if(this.active_step > 1) {
    this.active_step = this.active_step - 1;
  }
}

//    _   _ _____ ___ _
//   | | | |_   _|_ _| |
//   | | | | | |  | || |
//   | |_| | | |  | || |___
//    \___/  |_| |___|_____|
//


goog.exportSymbol('sagewest.page.Booking', sagewest.page.Booking);
