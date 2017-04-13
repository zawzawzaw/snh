goog.provide('sagewest.page.Booking');
goog.require('sagewest.page.Default');

goog.require('sagewest.component.BookingStep');
goog.require('sagewest.component.BookingRoom');

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

  

  this.update_page_layout();    // this is called after the initial create to update the layout

  this.create_booking_rooms();
  this.create_no_room_carousel();

  $('.back-to-search-btn').click(function(e){  
    e.preventDefault();  
    $(".rates-breakdown-popup-container").removeClass('show');
  });

  $(document).click(function(e){    
    e.preventDefault();  
    $(".rates-breakdown-popup-container").removeClass('show');
    $(".cancellation-popup-container").removeClass('show');
  });

  this.create_booking_steps();

  $('body').on("booking-summary-room-added", function(e){
      this.create_expand_container();
  }.bind(this));

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
  }
}


sagewest.page.Booking.prototype.create_booking_steps = function(){
  var arr = $('.booking-steps');
  var item = null;
  var step_item = null;

  for (var i = 0; i < arr.length; i++) {
    var item = $(arr[i]);
    var step_item = new sagewest.component.BookingStep({}, item);
    

    goog.events.listen(step_item, sagewest.component.BookingStep.ON_STEP_2_START, function(event){
      this.update_page_layout();
    }.bind(this));

  }
}




sagewest.page.Booking.prototype.create_collapsable_arrow_cta = function(){

  this.collapsable_arrow_cta = $(".collapsable-arrow-cta");
  this.collapsable_parent = $(".booking-room-rate");
  this.collapsable_content = $(".booking-room-rate-more-content");

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

//    _   _ _____ ___ _
//   | | | |_   _|_ _| |
//   | | | | | |  | || |
//   | |_| | | |  | || |___
//    \___/  |_| |___|_____|
//


goog.exportSymbol('sagewest.page.Booking', sagewest.page.Booking);
