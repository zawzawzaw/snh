//////////
// AMDG //
//////////

goog.provide('sagewest.page.Default');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('manic.ui.ImageContainer');

goog.require('manic.ui.FormCheck');
goog.require('manic.ui.Dropdown');
goog.require('manic.ui.ImageContainer');
goog.require('manic.ui.ImageContainerPadding');
goog.require('manic.ui.TextPadding');

goog.require('manic.page.Page');


goog.require('sagewest.component.MobileHeader');
goog.require('sagewest.component.PackagesPopup');


/**
 * The Default Page constructor
 * @inheritDoc
 * @constructor
 * @extends {manic.page.Page}
 */
sagewest.page.Default = function(options) {
  manic.page.Page.call(this, options);
  this.options = $.extend(this.options, sagewest.page.Default.DEFAULT, options);

  /**
   * @type {Array.<manic.ui.Dropdown>}
   */
  this.dropdown_array = [];

  /**
   * @type {Array.<manic.ui.Dropdown>}
   */
  this.dropdown_dictionary = [];

  /**
   * @type {Array.<manic.ui.FormCheck>}
   */
  this.form_check_array = [];

  /**
   * @type {Array.<manic.ui.FormCheck>}
   */
  this.form_check_dictionary = [];

  /**
   * @type {Array.<manic.ui.ImageContainer>}
   */
  this.manic_image_array = [];

  /**
   * @type {Array.<manic.ui.TextPadding>}
   */
  this.plain_padding_array = [];

  /**
   * @type {Array.<manic.ui.ImageContainerPadding>}
   */
  this.padding_array = [];


  

  /**
   * @type {ayana.component.MobileHeader}
   */
  this.mobile_menu = null;





  this.is_home_page = this.body.hasClass('home-page');
  this.is_packages_page = this.body.hasClass('packages-page');
  this.is_contact_page = this.body.hasClass('contact-page');
  this.is_experience_page = this.body.hasClass('experience-page');

  this.packages_offer_item_image_array = [];
  this.packages_offer_item_text_array = [];

  /**
   * @type {sagewest.component.PackagesPopup}
   */
  this.packages_popup = null;

  this.contact_form = null;

  /**
   * @type {manic.ui.FormCheck}
   */
  this.contact_form_check = null;

  
  this.controller = null;

  this.html = $('html');

  this.original_window_width = this.window.width();
  this.original_window_height = this.window.height();

  this.page_wrapper = $('#page-wrapper');

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //


  this.mobile_header_spacer = $('#mobile-header-spacer');
  this.mobile_header = $('#mobile-header');
  this.desktop_header_spacer = $('#desktop-header-spacer');
  this.desktop_header = $('#desktop-header');


  console.log('init');
};
goog.inherits(sagewest.page.Default, manic.page.Page);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for Default Page
 * @const {object}
 */
sagewest.page.Default.DEFAULT = {
  
};



//    ___ _   _ ___ _____ 
//   |_ _| \ | |_ _|_   _|
//    | ||  \| || |  | |  
//    | || |\  || |  | |  
//   |___|_| \_|___| |_|  
//                        

/**
 * init_desktop
 * @override
 */
sagewest.page.Default.prototype.init = function() {
  sagewest.page.Default.superClass_.init.call(this);

  console.log('init desktop');

  this.controller = new ScrollMagic.Controller(); // needed by some components
  this.controller.scrollTo(this.controller_scroll_to.bind(this));

  this.create_image_container();
  this.create_dropdown();
  this.create_form_check();

  // this.create_desktop_menu();
  this.create_mobile_menu();
  this.create_scroll_down_cta();



  // for packages only
  if (this.is_packages_page) {
    this.create_packages_offer();
    this.create_packages_popup();
  }
  


  // for contact only
  if (this.is_contact_page) {
    this.create_contact_form();
  }


  this.create_detail_page();



  // mobile!
  this.update_page_layout();

  this.common_menu();
};



//     ____ ____  _____    _  _____ _____ 
//    / ___|  _ \| ____|  / \|_   _| ____|
//   | |   | |_) |  _|   / _ \ | | |  _|  
//   | |___|  _ <| |___ / ___ \| | | |___ 
//    \____|_| \_\_____/_/   \_\_| |_____|
//                                        


/*
sagewest.page.Default.prototype.create_hammer = function(){
  // this.hammertime = new Hammer(myElement, myOptions);
};
*/

sagewest.page.Default.prototype.create_image_container = function() {
  

  var arr = $('.manic-image-container').not('.not-default-version');
  var image_container = null;
  var item = null;

  for (var i = 0, l=arr.length; i < l; i++) {
    item = $(arr[i]);
    image_container = new manic.ui.ImageContainer({
      'has_window_resize': false                                // updated manually by 'update_page_layout'
    }, item);
    this.manic_image_array[i] = image_container;
  }


};

sagewest.page.Default.prototype.create_dropdown = function() {
  var arr = $('.manic-dropdown');
  var item = null;
  var item_id = "";

  /**
   * @type {manic.ui.Dropdown}
   */
  var dropdown = null;

  for (var i = 0, l = arr.length ; i < l; i++) {
    item = $(arr[i]);
    item_id = '' + item.find('select').attr('id');

    dropdown = new manic.ui.Dropdown({}, item);
    this.dropdown_array[this.dropdown_array.length] = dropdown;

    this.dropdown_dictionary[item_id] = dropdown;
  }
};



sagewest.page.Default.prototype.create_form_check = function() {
  var arr = $('.simple-form-check');
  var form_check = null;
  var item = null;
  var item_id = '';

  for (var i = 0, l = arr.length ; i < l; i++) {
    item = $(arr[i]);
    item_id = item.attr('id');

    form_check = new manic.ui.FormCheck({
      'alert_on_error': false,
      'error_class': 'has-error',
      'parent_classes': ['form-group']
    }, item);

    //goog.events.listen(form_check, manic.ui.FormCheck.ON_ERROR, this.on_form_check_error.bind(this));

    this.form_check_array[this.form_check_array.length] = form_check;
    this.form_check_dictionary[item_id] = form_check;

  }
};

sagewest.page.Default.prototype.create_scroll_down_cta = function(){
  $('.scroll-down-cta').click(function(event){
    event.preventDefault();
    this.scroll_to_after_the_fold();
  }.bind(this));
  
};







sagewest.page.Default.prototype.create_mobile_menu = function(){
  if($('#mobile-header').length != 0){

    this.mobile_menu = new sagewest.component.MobileHeader({}, $('#mobile-header'));

    goog.events.listen(this.mobile_menu, sagewest.component.MobileHeader.ON_CLOSE, this.on_mobile_menu_close.bind(this));
    
  }
}


//    ____  _____ _____  _    ___ _
//   |  _ \| ____|_   _|/ \  |_ _| |
//   | | | |  _|   | | / _ \  | || |
//   | |_| | |___  | |/ ___ \ | || |___
//   |____/|_____| |_/_/   \_\___|_____|
//


sagewest.page.Default.prototype.create_detail_page = function(){


  // CREATE DETAIL BANNER

  if ($('.detail-banner-slider').length != 0) {

    $('.detail-banner-slider').on('init', function(event, slick){
      this.create_image_container();
    }.bind(this));
    $('.detail-banner-slider').on('breakpoint init reInit setPosition', function(event, slick, breakpoint){
      this.update_page_layout();
    }.bind(this));

    this.detail_banner_carousel = $('.detail-banner-slider').slick({
      'speed': 350,
      'dots': false,
      'arrows': true,
      'infinite': false,
      'slidesToShow': 1,
      'slidesToScroll': 1,
      'pauseOnHover': true,
      'autoplay': true,
      'autoplaySpeed': 4000
    });

    this.detail_banner_carousel

  } // .detail-banner-slider
  

  
};


//    ____   _    ____ _  __    _    ____ _____ ____
//   |  _ \ / \  / ___| |/ /   / \  / ___| ____/ ___|
//   | |_) / _ \| |   | ' /   / _ \| |  _|  _| \___ \
//   |  __/ ___ \ |___| . \  / ___ \ |_| | |___ ___) |
//   |_| /_/   \_\____|_|\_\/_/   \_\____|_____|____/
//

sagewest.page.Default.prototype.create_packages_offer = function(){
  this.packages_offer_item_image_array = [];
  this.packages_offer_item_text_array = [];

  if($('#packages-offer-item-container').length != 0){
    var arr = $('#packages-offer-item-container .packages-offer-item');
    var image = null;
    var copy = null;
    var num = 0;

    for (var i = 0, l=arr.length; i < l; i++) {
      item = $(arr[i]);

      image = item.find('.packages-offer-item-image');
      copy = item.find('.packages-offer-item-copy');
      
      if (image.length != 0 && copy.length != 0) {
        num = this.packages_offer_item_image_array.length;
        this.packages_offer_item_image_array[num] = image;
        this.packages_offer_item_text_array[num] = copy;
      }

    }
  }
};

sagewest.page.Default.prototype.create_packages_popup = function(){
  if ($('#packages-popup-container').length != 0) {
    this.packages_popup = new sagewest.component.PackagesPopup({}, $('#packages-popup-container'));

    var arr = $('.package-popup-btn');
    var item = null;

    for (var i = 0, l=arr.length; i < l; i++) {
      item = $(arr[i]);
      item.click(this.on_package_popup_btn_click.bind(this));
    }
    

  }
};

sagewest.page.Default.prototype.on_package_popup_btn_click = function(event) {
  event.preventDefault();
  event.stopPropagation();
  
  var target = $(event.currentTarget);
  var value = target.attr('data-value');


  if (goog.isDefAndNotNull(value) == true) {
    this.packages_popup.open_fullscreen();
    this.packages_popup.display_content(value);
  }
};


///////////

sagewest.page.Default.prototype.update_packages_offer = function(){

  var num = this.packages_offer_item_image_array.length;

  for (var i = 0; i < num; i++) {
    image = this.packages_offer_item_image_array[i];
    copy = this.packages_offer_item_text_array[i];

    image.css({
      'height': copy.height() + 'px'
    });
  }
  
};



//     ____ ___  _   _ _____  _    ____ _____
//    / ___/ _ \| \ | |_   _|/ \  / ___|_   _|
//   | |  | | | |  \| | | | / _ \| |     | |
//   | |__| |_| | |\  | | |/ ___ \ |___  | |
//    \____\___/|_| \_| |_/_/   \_\____| |_|
//


sagewest.page.Default.prototype.create_contact_form = function(){
  if ($('#contact-form').length != 0) {
    this.contact_form = $('#contact-form');

    this.contact_form_check = this.form_check_dictionary['contact-form'];

    goog.events.listen(this.contact_form_check, manic.ui.FormCheck.ON_SUCCESS, this.on_contact_form_check_success.bind(this));
    
    console.log('this.contact_form_check: ');
    console.log(this.contact_form_check);

    $('#contact-form-submit-btn').click(this.on_contact_form_submit_click.bind(this));
  }

};

/**
 * @param  {object} event
 */
sagewest.page.Default.prototype.on_contact_form_submit_click = function(event) {
  event.preventDefault();
  this.contact_form.submit();
};

/**
 * @param  {object} event
 */
sagewest.page.Default.prototype.on_contact_form_check_success = function(event) {
  console.log('on success');


  var form_data = new FormData(this.contact_form_check.element[0]);

  $.ajax({
    type: 'POST',
    data: form_data,
    url: this.contact_form_check.action_url,

    async: false,
    cache: false,
    contentType: false,
    processData: false,

    error: this.on_contact_form_submit_form_error.bind(this),
    complete: this.on_contact_form_submit_form_complete.bind(this)
  });

};

/**
 * @param  {object} event
 */
sagewest.page.Default.prototype.on_contact_form_submit_form_error = function(event) {
  alert('error on submit');
};

/**
 * @param  {object} event
 */
sagewest.page.Default.prototype.on_contact_form_submit_form_complete = function(event) {

  $('#contact-form-thankyou').show(0);
  $('#contact-form').hide(0);

};


//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//



sagewest.page.Default.prototype.update_page_layout = function() {

  console.log('default update_page_layout');


  
  if (manic.IS_ACTUAL_MOBILE == true || this.original_window_width < 992) {
    this.show_mobile_header();
  } else {
    this.show_desktop_header();
  }

  if (manic.IS_TABLET == true) {
    if(this.window_width > this.window_height) {
      manic.IS_TABLET_PORTRAIT = false;
      manic.IS_TABLET_LANDSCAPE = true;
    } else {
      manic.IS_TABLET_PORTRAIT = true;
      manic.IS_TABLET_LANDSCAPE = false;
    }
  } else {
    manic.IS_TABLET_PORTRAIT = false;
    manic.IS_TABLET_LANDSCAPE = false;
  }

  if( manic.IS_MOBILE == true){
    this.body.addClass('is-mobile');
    this.html.addClass('is-html-mobile');
  } else {
    this.body.removeClass('is-mobile');
    this.html.removeClass('is-html-mobile');
  }

  

  if (manic.IS_TABLET == true) {
    this.body.addClass('is-tablet');

    if (manic.IS_TABLET_PORTRAIT == true) {
      this.body.removeClass('is-tablet-landscape');
      this.body.addClass('is-tablet-portrait');
    } else {
      this.body.addClass('is-tablet-landscape');
      this.body.removeClass('is-tablet-portrait');
    }


  } else {

    this.body.removeClass('is-tablet');
    this.body.removeClass('is-tablet-landscape');
    this.body.removeClass('is-tablet-portrait');

  }




  /**
   * @type {manic.ui.ImageContainer}
   */
  var item = null;

  for (var i = 0, l=this.manic_image_array.length; i < l; i++) {
    item = this.manic_image_array[i];
    item.update_layout();
  }

  /**
   * @type {manic.ui.TextPadding}
   */
  var plain_padding_item = null;

  for (var i = 0, l=this.plain_padding_array.length; i < l; i++) {
    plain_padding_item = this.plain_padding_array[i];
    plain_padding_item.update_layout();
  }



  if (this.is_packages_page) {
    this.update_packages_offer();
  }



  


};



sagewest.page.Default.prototype.show_mobile_header = function(){
  this.mobile_header_spacer.show(0);
  this.mobile_header.show(0);
  this.desktop_header_spacer.hide(0);
  this.desktop_header.hide(0);
};

sagewest.page.Default.prototype.show_desktop_header = function(){
  this.mobile_header_spacer.hide(0);
  this.mobile_header.hide(0);
  this.desktop_header_spacer.show(0);
  this.desktop_header.show(0);
};

//    ____   ____ ____   ___  _     _     
//   / ___| / ___|  _ \ / _ \| |   | |    
//   \___ \| |   | |_) | | | | |   | |    
//    ___) | |___|  _ <| |_| | |___| |___ 
//   |____/ \____|_| \_\\___/|_____|_____|
//                                        


/**
 * @param  {object} target
 */
sagewest.page.Default.prototype.controller_scroll_to = function(target) {
  TweenMax.to(window, 0.5, {
    scrollTo : {
      y : target, // scroll position of the target along y axis
      autoKill : true // allows user to kill scroll action smoothly
    },
    ease : Sine.easeInOut
    //ease : Cubic.easeInOut
  });
};

/**
 * @param  {String} str_param
 */
sagewest.page.Default.prototype.util_scroll_to = function(str_param){

  if(goog.isDefAndNotNull(str_param) == true){
    TweenMax.killDelayedCallsTo(this.scroll_to_target);
    TweenMax.delayedCall(0.6, this.scroll_to_target, [str_param], this);
    //this.scroll_to_target(value);
    
  } else {
    console.log('Element needs a [data-value] param');
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
sagewest.page.Default.prototype.on_mobile_menu_close = function(event) {
  this.update_page_layout();
};



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
sagewest.page.Default.prototype.on_window_resize = function(event) {
  // sagewest.page.Default.superClass_.on_window_resize.call(this, event);         // we needed to get previous device height
  

  // copied from manic.page.Page
  this.window_width = this.window.width();
  this.window_height = this.window.height();

  this.original_window_width = this.window.width();
  this.original_window_height = this.window.height();

  // zoom check
  if (this.original_window_width <= 1280 && manic.IS_ACTUAL_MOBILE == false ||
      manic.IS_ACTUAL_MOBILE == true && manic.IS_TABLET_LANDSCAPE) {

    this.body.addClass('zoomed-version');
    window['is_custom_zoomed'] = true;

  } else {

    this.body.removeClass('zoomed-version');
    window['is_custom_zoomed'] = false;

  }



  var previous_is_mobile = manic.IS_MOBILE;

  manic.IS_MOBILE       = this.original_window_width <= 992;

  // manic.IS_ACTUAL_MOBILE
  // manic.IS_ACTUAL_MOBILE = this.mobile_detect.mobile() != null;


  this.device_width = window.screen.width;
  this.device_height = window.screen.height;
  // copied from manic.page.Page
  
  if( manic.IS_MOBILE == true){
    
  } else {

  }


  if (manic.IS_ACTUAL_MOBILE == true) {

    

    // to prevent iOS resize when removing the address bar on scroll (default safari animation)
    //if (manic.IS_MOBILE) {
    if (manic.IS_ACTUAL_MOBILE) {

      // if the mobile device has not yet changed aspect ratio
      if(this.prev_device_width != this.device_width && this.prev_device_height != this.device_height) {
        this.update_page_layout();

      // if switching from desktop to mobile
      } else if (previous_is_mobile != manic.IS_MOBILE) {
        this.update_page_layout();

      } else {
        // do nothing
        
      }

    } else {

      // desktop, just update
      this.update_page_layout();
    }


  } else {
    // console.log('not mobile :D')

    // desktop, just update
    this.update_page_layout();
  }




  // error in logic, this this to be outside the on_window_resize
  // copied from manic.page.Page
  this.prev_device_width = this.device_width;
  this.prev_device_height = this.device_height;
  
};


/**
 * @override
 * @inheritDoc
 */
sagewest.page.Default.prototype.scroll_to_target = function(str_param, str_param_2, str_param_3) {

  /**
   * @type {jQuery}
   */
  var scroll_target = null;

  /**
   * @type {String}
   */
  var scroll_target_str = "";


  for (var i = 0, l = this.scrolltarget_name_array.length; i < l; i++) {
    scroll_target_str = this.scrolltarget_name_array[i];
    scroll_target = this.scrolltarget_array[i];

    if (str_param == scroll_target_str) {


      
      console.log('sagewest.page.Default: scroll_to_target: ');
      console.log(scroll_target);
      this.controller.scrollTo(scroll_target[0]);

    }
        
    
  }

};

sagewest.page.Default.prototype.common_menu = function() {

  $("#desktop-menu-bar").on("click", function(e){
      e.preventDefault();
      $("#desktop-header-menu").slideToggle(300);
      $("#desktop-header").toggleClass("open");
    });

    $("#book-now").on("click", function(e){
      e.preventDefault();
      $("#desktop-header-booking-form").slideToggle(300);
    });

    var date = new Date();
        formatted_current_date = ("0" + (date.getMonth() + 1).toString()).substr(-2) + "/" + ("0" + date.getDate().toString()).substr(-2)  + "/" + (date.getFullYear().toString());        

        console.log(formatted_current_date);

    $('#date-picker').daterangepicker({
        "autoApply": true,
        "opens": "right",
        "parentEl": "#desktop-header-booking-calendar",
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

    $('#mobile-date-picker').on('show.daterangepicker', function(ev, picker) {
      var windowHeight = $("html").height();
      $("#mobile-header-expanded").css({"position":"absolute", "height": windowHeight});

      $('html, body').animate({
          scrollTop: $( '#mobile-header-booking-calendar' ).offset().top - 70
      }, 500);
    });
    $('#mobile-date-picker').on('hide.daterangepicker', function(ev, picker) {
      $("#mobile-header-expanded").css("position", "fixed");
    });

    $('#mobile-date-picker').daterangepicker({
        "autoApply": true,
        "opens": "bottom",
        "parentEl": "#mobile-header-booking-calendar",
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

    $(".book-now").on("click", function(e){
      $("#mobile-header-calendar-open-btn").trigger("click");
    });

    $('#date-picker').on('apply.daterangepicker', function(ev, picker) {
        $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
    });

    $(document).click(function(event) { 
        if(!$(event.target).closest('#desktop-menu-bar').length && !$(event.target).closest('#hoverscroll').length) {
            if($('#desktop-header-menu').is(":visible")) {
                $('#desktop-header-menu').slideUp(300);
                $("#desktop-header").removeClass("open");
            }
        }        
        if(!$(event.target).closest('#book-now').length && !$(event.target).closest('#date-picker').length && !$(event.target).closest('.next').length && !$(event.target).closest('.prev').length && !$(event.target).closest('#hover-day').length && !$(event.target).closest('#hover-weekname').length && !$(event.target).closest('th, td, tr').length && !$(event.target).closest('select').length && !$(event.target).closest('input').length && !$(event.target).closest('.date-input').length) {
            if($('#desktop-header-booking-form').is(":visible")) {
                $('#desktop-header-booking-form').slideUp(300);
            }
        }        
    });    

}



//    _   _ _____ ___ _     
//   | | | |_   _|_ _| |    
//   | | | | | |  | || |    
//   | |_| | | |  | || |___ 
//    \___/  |_| |___|_____|
//                          


/**
 * @param  {String} text_str_param  [description]
 * @param  {String} image_str_param [description]
 */
sagewest.page.Default.prototype.create_text_padding = function(text_str_param, image_str_param){
  var manic_image_container_element = $(image_str_param);
  var text_element = $(text_str_param);

  /**
   * @type {manic.ui.ImageContainerPadding}
   */
  var padding_item = null;

  if(manic_image_container_element.length != 0 && text_element.length != 0){

    padding_item = new manic.ui.ImageContainerPadding({
      'target': manic_image_container_element,
      //'min-padding': 34
      'min-padding': 70
    },text_element);

    this.padding_array[this.padding_array.length] = padding_item;
    
  }

};


sagewest.page.Default.prototype.scroll_to_after_the_fold = function(){

  // var target_y = this.window_height - $('#desktop-header .bottom-header').height();
  
  var target_y = this.window_height;      // 108 = height of header

  if(manic.IS_ACTUAL_MOBILE == true) {

    if(manic.IS_TABLET_LANDSCAPE == true) {
      target_y = this.window_height - ($('#mobile-header').height() * 0.9);
      
      console.log('here lies something')
      console.log('target_y: ' + target_y);
    } else {
      target_y = this.window_height - $('#mobile-header').height();
    }
    
  }

  TweenMax.to(this.window, 0.5, {
    scrollTo:{y:target_y,autoKill: true},
    ease:Quad.easeInOut
  });
};


goog.exportSymbol('sagewest.page.Default', sagewest.page.Default);