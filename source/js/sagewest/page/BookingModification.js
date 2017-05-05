goog.provide('sagewest.page.BookingModification');
goog.require('sagewest.page.Default');

goog.require('sagewest.component.BookingModificationRoom');
goog.require('sagewest.component.BookingModificationExtra');

/**
 * The MICE constructor
 * @inheritDoc
 * @constructor
 * @extends {sagewest.page.Default}
 */
sagewest.page.BookingModification = function(options, element) {
  sagewest.page.Default.call(this, options, element);
  this.options = $.extend(this.options, sagewest.page.BookingModification.DEFAULT, options);

  // console.log("init booking modification");

  this.form_check_array = [];
  this.create_form_check();  

};
goog.inherits(sagewest.page.BookingModification, sagewest.page.Default);



// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for MICE
 * @const {object}
 */
sagewest.page.BookingModification.DEFAULT = {

};



/**
 * @override
 * @inheritDoc
 */
sagewest.page.BookingModification.prototype.init = function() {

  sagewest.page.BookingModification.superClass_.init.call(this);

  this.booking_guest_detail_optional_container = $("#booking-guest-detail-optional");

  this.is_optional_info_open = false;
  this.is_popup_open = false;

  this.update_page_layout();    // this is called after the initial create to update the layout

  this.create_booking_modification_rooms();
  this.create_booking_modification_extras();

  this.create_telephone_inputs(); 

  this.optional_info_cta = $('.optional-info-cta');
  this.optional_info_cta.click(this.on_show_optional_info_click.bind(this));

  this.cancel_entire_reservation_cta = $('.cancel-entire-reservation-cta');
  this.cancel_entire_reservation_cta.click(this.on_cancel_entire_reservation_cta_click.bind(this));

  this.save_changes_cta = $('.save-changes-cta');
  this.save_changes_cta.click(this.on_save_changes_cta_click.bind(this));

  this.undo_all_changes_cta = $('.undo-all-changes-cta');
  this.undo_all_changes_cta.click(this.on_undo_all_changes_cta_click.bind(this));

  $('.modification-popup-container').on('click', '.save-reservation-cta', function(e){  
    e.preventDefault();
    e.stopPropagation();

    $('#booking_engine_modification_form').submit();
  });

  $('.modification-popup-container').on('click', '.undo-all-cta', function(e){  
    e.preventDefault();
    e.stopPropagation();

    location.reload();
  });

  $('.modification-popup-container').on('click', '.cancel-reservation-cta', function(e){  
    e.preventDefault();
    e.stopPropagation();

    $('#booking_engine_modification_form').append("<input name='cancellation' value='1' />");
    $('#booking_engine_modification_form').submit();
  });  

  this.popup_container = $(".modification-popup-container");

  $(document).click(function(e){    
    e.preventDefault();  
    e.stopPropagation();    

    var target = $(e.target);

    console.log(target);

    if ($.contains($(".modification-popup-container")[0], target[0]) == false) {
      this.pop_up_close();      
    }

    
  }.bind(this));

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

sagewest.page.BookingModification.prototype.create_booking_modification_rooms = function(){
  var arr = $('.booking-room');
  var item = null;
  var room_item = null;

  for (var i = 0; i < arr.length; i++) {
    var item = $(arr[i]);
    var room_item = new sagewest.component.BookingModificationRoom({}, item);  
  }
}

sagewest.page.BookingModification.prototype.create_booking_modification_extras = function(){
  var arr = $('.booking-extra');
  var item = null;
  var room_item = null;

  for (var i = 0; i < arr.length; i++) {
    var item = $(arr[i]);
    var room_item = new sagewest.component.BookingModificationExtra({}, item);      
  }
}

sagewest.page.BookingModification.prototype.create_telephone_inputs = function() {  
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
sagewest.page.BookingModification.prototype.update_page_layout = function() {

  sagewest.page.BookingModification.superClass_.update_page_layout.call(this);


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
sagewest.page.BookingModification.prototype.scroll_to_target = function(str_param, str_param_2, str_param_3) {
  sagewest.page.BookingModification.superClass_.scroll_to_target.call(this, str_param, str_param_2, str_param_3);

  // console.log('scroll to target');
  // console.log(this.active_step);

  var str_param = parseInt(str_param);

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
sagewest.page.BookingModification.prototype.on_scroll_to_no_target = function(){

  // Mice venue landing
  /*
  if(manic.IS_MOBILE == true && this.is_mice_venue_landing == true){
    // console.log('go home!!');
    this.mice_landing_mobile_both_close();
  }
  */

};

sagewest.page.BookingModification.prototype.others = function(){  

    $('body').addClass('preload-start');

};

// sagewest.page.BookingModification.prototype.collapse = function(){
//   if (this.is_expanded == true) {
//     this.is_expanded = false;

//     this.collapsable_parent.removeClass('expand-version');
//     this.collapsable_content.slideUp(500);
//   }
// };

// sagewest.page.BookingModification.prototype.expand = function() {
//   if (this.is_expanded == false) {
//     this.is_expanded = true;

//     this.collapsable_parent.addClass('expand-version');
//     this.collapsable_content.slideDown(500);
//   }
// };

// sagewest.page.BookingModification.prototype.rate_collapse = function(){
//   if (this.is_rate_expanded == true) {
//     this.is_rate_expanded = false;

//     this.rate_collapsable_parent.removeClass('expand-version');
//     this.rate_collapsable_content.slideUp(500);
//   }
// };

// sagewest.page.BookingModification.prototype.rate_expand = function() {
//   if (this.is_rate_expanded == false) {
//     this.is_rate_expanded = true;

//     this.rate_collapsable_parent.addClass('expand-version');
//     this.rate_collapsable_content.slideDown(500);
//   }
// };

sagewest.page.BookingModification.prototype.pop_up_close = function(){
  if (this.is_popup_open == true) {
    this.is_popup_open = false;

    // $("html,body").removeClass("fixed");
    this.popup_container.removeClass('show');
  }
};

sagewest.page.BookingModification.prototype.pop_up_open = function() {
  if (this.is_popup_open == false) {
    this.is_popup_open = true;

    // $("html,body").addClass("fixed");
    this.popup_container.addClass('show');
  }
};

sagewest.page.BookingModification.prototype.optional_info_close = function(){
  if (this.is_optional_info_open == true) {
    this.is_optional_info_open = false;

    this.optional_info_cta.removeClass('expanded-version');
    this.booking_guest_detail_optional_container.slideUp(300);
  }
};

sagewest.page.BookingModification.prototype.optional_info_open = function() {
  if (this.is_optional_info_open == false) {
    this.is_optional_info_open = true;

    this.optional_info_cta.addClass('expanded-version')
    this.booking_guest_detail_optional_container.slideDown(300); 
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
// sagewest.page.BookingModification.prototype.on_collapsable_arrow_click = function(event) {  
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
// sagewest.page.BookingModification.prototype.on_show_rate_click = function(event) {  
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
sagewest.page.BookingModification.prototype.on_cancel_entire_reservation_cta_click = function(event) {  
  event.preventDefault();
  event.stopPropagation();

    // ajax may be?
  var data = {
    'pop_up_title' : "Are you sure you want to cancel this entire reservation?",
    'pop_up_copy' : "Curabitur sed arcu suscipit, cursus odio non, volupat velit. Etiam quam dui, finibus sed mi a, aliquam venenatis ante aliquan venenatis ante.",
    'pop_up_yes_cta' : "cancel-reservation-cta"
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
 * @param {object} event
 */
sagewest.page.BookingModification.prototype.on_save_changes_cta_click = function(event) {  
  event.preventDefault();
  event.stopPropagation();

  // ajax may be?
  var data = {
    "pop_up_title" : "Are you sure you want to save this changes?",
    "pop_up_copy" : "Curabitur sed arcu suscipit, cursus odio non, volupat velit. Etiam quam dui, finibus sed mi a, aliquam venenatis ante aliquan venenatis ante.",
    'pop_up_yes_cta' : "save-reservation-cta"
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
 * @param {object} event
 */
sagewest.page.BookingModification.prototype.on_undo_all_changes_cta_click = function(event) {  
  event.preventDefault();
  event.stopPropagation();

  // ajax may be?
  var data = {
    "pop_up_title" : "Are you sure you want to undo all the changes?",
    "pop_up_copy" : "Curabitur sed arcu suscipit, cursus odio non, volupat velit. Etiam quam dui, finibus sed mi a, aliquam venenatis ante aliquan venenatis ante.",
    'pop_up_yes_cta' : "undo-all-cta"
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

sagewest.page.BookingModification.prototype.on_show_optional_info_click = function() {
  event.preventDefault();  

  if(this.is_optional_info_open == true) {    
    this.optional_info_close();
  } else {    
    this.optional_info_open();
  }  
}

//    _   _ _____ ___ _
//   | | | |_   _|_ _| |
//   | | | | | |  | || |
//   | |_| | | |  | || |___
//    \___/  |_| |___|_____|
//


goog.exportSymbol('sagewest.page.BookingModification', sagewest.page.BookingModification);
