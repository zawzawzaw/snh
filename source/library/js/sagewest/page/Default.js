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

goog.require('manic.ui.ExpandContainer');


goog.require('sagewest.component.MobileHeader');
goog.require('sagewest.component.PackagesPopup');
goog.require('sagewest.component.GenericMap');
goog.require('sagewest.component.BoxList');


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


  this.lazy_scene_array = [];

  

  /**
   * @type {ayana.component.MobileHeader}
   */
  this.mobile_menu = null;



  /**
   * @type {Array.<sagewest.component.GenericMap>}
   */
  this.generic_map_array = [];

  /**
   * @type {Array.<sagewest.component.BoxList>}
   */
  this.box_list_array = [];

  /**
   * @type {Array.<manic.ui.ExpandContainer>}
   */
  this.expand_container_array = [];



  this.min_height_container = null;


  this.is_brand_alternative_version = false;

  if (this.body.hasClass('brand-alternative-page')) {
    this.is_brand_alternative_version = true;
  }



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

  this.desktop_footer_spacer = $('#desktop-footer-spacer');
  this.desktop_footer = $('#desktop-footer');


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
  this.create_expand_container();
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


  this.highlight_header_link();
  this.create_min_height();
  this.create_detail_page();
  this.create_generic_map();
  this.create_box_list();

  this.promo_filter();



  // mobile!
  this.update_page_layout();

  this.common_menu();

  this.expandable_text();
};



//     ____ ____  _____    _  _____ _____ 
//    / ___|  _ \| ____|  / \|_   _| ____|
//   | |   | |_) |  _|   / _ \ | | |  _|  
//   | |___|  _ <| |___ / ___ \| | | |___ 
//    \____|_| \_\_____/_/   \_\_| |_____|
//                                        

sagewest.page.Default.prototype.highlight_header_link = function(){

  if ($('#desktop-header-selector').length != 0 && 
      goog.isDefAndNotNull($('#desktop-header-selector').attr('data-value')) ) {

    var target_url = $('#desktop-header-selector').attr('data-value');

    $('#desktop-header-nav a[href="' + target_url + '"]').addClass('selected');
    $('#mobile-menu a[href="' + target_url + '"]').addClass('selected');

  }


  


};


sagewest.page.Default.prototype.create_min_height = function(){

  if ($('#page-wrapper-content-min-height').length != 0) {

    this.min_height_container = $('#page-wrapper-content-min-height');

  }


};









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



    
    // ADD LAZY LOAD
    if (item.hasClass('has-lazy-load') == true) {
      this.add_lazy_load(image_container);
    } // if

  }


};


sagewest.page.Default.prototype.create_expand_container = function() {
  var arr = $('.manic-expand-container');
  var item = null;

  /**
   * @type {manic.ui.ExpandContainer}
   */
  var expand_container = null;

  for (var i = 0, l=arr.length; i < l; i++) {
    item = $(arr[i]);
    expand_container = new manic.ui.ExpandContainer({}, item);
    goog.events.listen(expand_container, manic.ui.ExpandContainer.ON_EXPAND, this.on_expand_container_expand.bind(this));

    this.expand_container_array[this.expand_container_array.length] = expand_container;
  }

  
};



/**
 * event handler
 * @param  {goog.events.Event} event
 */
sagewest.page.Default.prototype.on_expand_container_expand = function(event) {
  //console.log('has expanded');
  //console.log(event);

  /**
   * @type {manic.ui.ExpandContainer}
   */
  var expand_container = event.currentTarget;



  /**
   * @type {manic.ui.ExpandContainer}
   */
  var expand_container_02 = null;

  if (manic.IS_MOBILE == true) {

    if (expand_container.scroll_value != 'none'){
      this.util_scroll_to(expand_container.scroll_value);
    }


  } else {
    
  }

  console.log('expand_container.group_value: ' + expand_container.group_value);

  if(expand_container.group_value != 'none') {

    // collapse all other from the same group

    for (var i = 0, l=this.expand_container_array.length; i < l; i++) {

      expand_container_02 = this.expand_container_array[i];

      console.log(expand_container_02.group_value);

      if(expand_container_02.group_value == expand_container.group_value && expand_container_02 !== expand_container){
        expand_container_02.collapse();
      }

    } // for

  }

};











/**
 * @param {manic.ui.ImageContainer} image_container_param
 */
sagewest.page.Default.prototype.add_lazy_load = function(image_container_param) {

  
  if (goog.isDefAndNotNull(image_container_param)) {
    
    var lazy_scene = new ScrollMagic.Scene({
      triggerHook: 1,
      triggerElement: image_container_param.element[0],
    })
    .addIndicators({name: ("" + Math.random()) })
    .on('start', image_container_param.on_image_visible.bind(image_container_param))
    .addTo(this.controller);

    this.lazy_scene_array[this.lazy_scene_array.length] = lazy_scene;

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
    goog.events.listen(this.mobile_menu, sagewest.component.MobileHeader.ON_HASH_CLICK, this.on_mobile_menu_hash_click.bind(this));

    
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
      'dots': true,
      'arrows': true,
      // 'infinite': false,
      'infinite': true,
      'slidesToShow': 1,
      'slidesToScroll': 1,
      'pauseOnHover': true,
      'autoplay': true,
      'autoplaySpeed': 4000,
      
      'prevArrow': '<a href="javascript:void(0);" class="slick-prev">Previous</a>',
      'nextArrow': '<a href="javascript:void(0);" class="slick-next">Next</a>'

    });

    this.detail_banner_carousel

  } // .detail-banner-slider
  


  // CREATE ALL flipper containers

  if ($('.flip-container.manic-version').length != 0) {

    var arr = $('.flip-container.manic-version');
    var item = null;
    var flip_btn = null;
    var back_btn = null;

    for (var i = 0, l=arr.length; i < l; i++) {
      item = $(arr[i]);

      flip_btn = item.find('.flipper-front-btn');
      flip_btn.data('flip-container', item);
      flip_btn.click(function(event){
        event.preventDefault();
        var target = $(event.currentTarget);
        var item = target.data('flip-container');
        item.addClass('hover');
      });

      back_btn = item.find('.flipper-back-btn');
      back_btn.data('flip-container', item);
      back_btn.click(function(event){
        event.preventDefault();
        var target = $(event.currentTarget);
        var item = target.data('flip-container');
        item.removeClass('hover');
      });
    }
    

  } // .flip-container

  $(".tnc").on("click", function(e){
      e.preventDefault();
      $(this).closest('.flip-container').addClass("hover");
    });

    $(".back-to-offer").on("click", function(e){
      e.preventDefault();
      $(this).closest('.flip-container').removeClass("hover");
    });

  
};

//    __  __    _    ____
//   |  \/  |  / \  |  _ \
//   | |\/| | / _ \ | |_) |
//   | |  | |/ ___ \|  __/
//   |_|  |_/_/   \_\_|
//


sagewest.page.Default.prototype.create_generic_map = function(){
  var arr = $('.generic-map');
  var item = null;
  var generic_map = null;


  for (var i = 0, l=arr.length; i < l; i++) {
    item = $(arr[i]);

    generic_map = new sagewest.component.GenericMap({}, item);

    this.generic_map_array[this.generic_map_array.length] = generic_map;
  }
  
};

//    ____   _____  ___     ___ ____ _____
//   | __ ) / _ \ \/ / |   |_ _/ ___|_   _|
//   |  _ \| | | \  /| |    | |\___ \ | |
//   | |_) | |_| /  \| |___ | | ___) || |
//   |____/ \___/_/\_\_____|___|____/ |_|
//



sagewest.page.Default.prototype.create_box_list = function(){

  var arr = $('.boxlist-item-container');
  var item = null;
  var box_list = null;


  for (var i = 0, l=arr.length; i < l; i++) {
    item = $(arr[i]);
    box_list = new sagewest.component.BoxList({}, item);

    this.box_list_array[this.box_list_array.length] = box_list;
  }
  
  
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



  // update min height
  if (this.min_height_container != null ) {
    var target_height = this.window_height - this.desktop_header_spacer.height() - this.desktop_footer_spacer.height() - this.desktop_footer.height();
    
    this.min_height_container.css({
      'min-height': target_height + 'px'
    });

  }
  



  /**
   * @type {sagewest.component.BoxList}
   */
  var box_list = null;

  for (var i = 0, l=this.box_list_array.length; i < l; i++) {
    box_list = this.box_list_array[i];
    box_list.update_layout();
    
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


/**
 * event handler
 * @param  {object} event
 */
sagewest.page.Default.prototype.on_mobile_menu_hash_click = function(event) {
  console.log('on_mobile_menu_hash_click');
  this.on_window_hash_change();
  // this.on_scroll_target_

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

  /*
  // zoom check
  if (this.original_window_width <= 1280 && manic.IS_ACTUAL_MOBILE == false ||
      manic.IS_ACTUAL_MOBILE == true && manic.IS_TABLET_LANDSCAPE) {

    this.body.addClass('zoomed-version');
    window['is_custom_zoomed'] = true;

  } else {

    this.body.removeClass('zoomed-version');
    window['is_custom_zoomed'] = false;

  }
  */



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

sagewest.page.Default.prototype.promo_filter = function() {

  //
  $("#default-promotion-filters a").on("click", function(event){

    event.preventDefault();

    var target = $(event.currentTarget);

    var href = target.attr('href').substring(1);

    $(".default-promo-box.all").addClass("hide");
    $(".default-promo-box."+href).removeClass("hide");

    $("#default-promotion-filters a").removeClass('selected');
    target.addClass('selected');

    this.update_page_layout();

  }.bind(this));

};

sagewest.page.Default.prototype.common_menu = function() {

  $("#desktop-menu-bar").on("click", function(e){
      e.preventDefault();
      $("#desktop-header-menu").slideToggle(300);
      $("#desktop-header").toggleClass("open");
    });

    // if (this.is_brand_alternative_version == false) {
      $("#book-now").on("click", function(e){
        e.preventDefault();
        // $("#desktop-header-booking-form").slideToggle(300);
        
        if($('#desktop-header-booking-form').is(":visible")) {

          $("#desktop-header-booking-form").slideUp(300);
          $("#book-now span").html('Book Now');

        } else {

          $("#desktop-header-booking-form").slideDown(300);
          $("#book-now span").html('Close');

        }
      });

    // } // endif
    

    var date = new Date();
        formatted_current_date = ("0" + (date.getMonth() + 1).toString()).substr(-2) + "/" + ("0" + date.getDate().toString()).substr(-2)  + "/" + (date.getFullYear().toString());        

        console.log(formatted_current_date);

    $('#sidebar-date-picker').daterangepicker({
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
    });

    /*
    $('#sidebar-date-picker').click(function(event){
      event.stopPropagation();
      var date_picker = $('#sidebar-date-picker').data('daterangepicker');
      if (date_picker.isShowing) {
        date_picker.hide();
      }
    });
    $('#sidebar-date-picker').focus(function(event){
      event.stopPropagation();
    });
    */


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
      // $("#mobile-header-expanded").css({"position":"absolute", "height": windowHeight});

      // $('#mobile-header-expanded').animate({
      //     scrollTop: $( '#mobile-header-booking-calendar' ).offset().top - 70
      // }, 500);

      
    });
    $('#mobile-date-picker').on('hide.daterangepicker', function(ev, picker) {
      // $("#mobile-header-expanded").css("position", "fixed");      
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
    
    /*  
    console.log('asdfasdfadf');
    console.log('asdfasdfadf');
    console.log('asdfasdfadf');
    console.log('asdfasdfadf');
    console.log('asdfasdfadf');
    console.log('asdfasdfadf');
    console.log($(".book-now"));
    */
    
    $(".book-now").on("click", function(e){
      console.log('this is the book now class')
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
        if(!$(event.target).closest('#book-now').length && !$(event.target).closest('#date-picker').length && !$(event.target).closest('.next').length && !$(event.target).closest('.prev').length && !$(event.target).closest('#hover-day').length && !$(event.target).closest('#hover-weekname').length && !$(event.target).closest('th, td, tr').length && !$(event.target).closest('select').length && !$(event.target).closest('input').length && !$(event.target).closest('.date-input').length && !$(event.target).closest('.daterangepicker').length ) {
            if($('#desktop-header-booking-form').is(":visible")) {
                $('#desktop-header-booking-form').slideUp(300);
                $("#book-now span").html('Book Now');
            }
        }        
    });    

};

sagewest.page.Default.prototype.expandable_text = function() {

  if(manic.IS_ACTUAL_MOBILE == true) {
    var minimized_read_more_elements = $('p.minimize-read-more');
    var minimized_elements = $('p.minimize');
    
    minimized_read_more_elements.each(function(){    
        var t = $(this).text();       
        var length = $(this).data('length');
         
        if(t.length < length) return;
        
        $(this).html(
            t.slice(0,length)+'<span>... </span><div class="read-more-cta-container"><a href="#" class="read-more">Read more</a></div>'+
            '<span style="display:none;">'+ t.slice(length,t.length)+'</span>'
        );
    }); 

    minimized_elements.each(function(){    
        var t = $(this).text();       
        var length = $(this).data('length');

        if(t.length < length) return;
        
        $(this).html(
            t.slice(0,length)+'<span>... </span>'
        );
    }); 
    
    $('a.read-more', minimized_read_more_elements).click(function(event){
        event.preventDefault();
        $(this).parent().hide().prev().hide();
        $(this).parent().next().show();        
    });
  }

};



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
      target_y = this.window_height - ($('#mobile-header').height() * 0.9) + 20;
      
      console.log('here lies something')
      console.log('target_y: ' + target_y);
    } else {      
      console.log(this.window_height);
      console.log($('.mobile-header-bg').height());
      // 108px different from mobile simulator and actual device
      target_y = (this.window_height - $('.mobile-header-bg').height()) + 108;
      return false;
    }
    
  }

  TweenMax.to(this.window, 0.5, {
    scrollTo:{y:target_y,autoKill: true},
    ease:Quad.easeInOut
  });
};

sagewest.page.Default.prototype.create_map_events = function(marker) {
  // Silence is golden..
};

sagewest.page.Default.prototype.map_initialize = function() {
    

    if($('#page-brand-map').length != 0) {

      var map;    

      /////
      // MAP STYLE
      /////

      var styles = [
          {
              "featureType": "administrative",
              "elementType": "labels.text.fill",
              "stylers": [
                  {
                      "color": "#6195a0"
                  }
              ]
          },
          {
              "featureType": "landscape",
              "elementType": "all",
              "stylers": [
                  {
                      "color": "#f2f2f2"
                  }
              ]
          },
          {
              "featureType": "landscape",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#ffffff"
                  }
              ]
          },
          {
              "featureType": "poi",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "poi.park",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#e6f3d6"
                  },
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "all",
              "stylers": [
                  {
                      "saturation": -100
                  },
                  {
                      "lightness": 45
                  },
                  {
                      "visibility": "simplified"
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "simplified"
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#f4d2c5"
                  },
                  {
                      "visibility": "simplified"
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "labels.text",
              "stylers": [
                  {
                      "color": "#4e4e4e"
                  }
              ]
          },
          {
              "featureType": "road.arterial",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#f4f4f4"
                  }
              ]
          },
          {
              "featureType": "road.arterial",
              "elementType": "labels.text.fill",
              "stylers": [
                  {
                      "color": "#787878"
                  }
              ]
          },
          {
              "featureType": "road.arterial",
              "elementType": "labels.icon",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "transit",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "all",
              "stylers": [
                  {
                      "color": "#eaf6f8"
                  },
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#eaf6f8"
                  }
              ]
          }
      ];

      ////
      // MAP INIT
      ////

      function setMarkerLatLng(lat, lng) {
        return new google.maps.LatLng(lat, lng);
      }

      var lat = $(".default_marker").data('lat');
      var lng = $(".default_marker").data('lng');
      var zoom = $(".default_marker").data('zoom');

      var AusLatLng = setMarkerLatLng(lat, lng);


      var map_element = $('#page-brand-map');
      var is_default_version = false;

      if (map_element.hasClass('default-version') == true) {
        is_default_version = true;
      }
      

      

        

      if (is_default_version) {
        var mapOptions = {
          mapTypeControlOptions: {  
              mapTypeIds: ['Styled']  
          },  
          zoom: zoom,
          center: AusLatLng,
          disableDefaultUI: true,   
          scrollwheel: false,
          zoomControl: true
        };
        map = new google.maps.Map(document.getElementById('page-brand-map'),
          mapOptions);
      } else {
        var mapOptions = {
          mapTypeControlOptions: {  
              mapTypeIds: ['Styled']  
          },  
          zoom: zoom,
          center: AusLatLng,
          disableDefaultUI: true,   
          mapTypeId: 'Styled',      // not in default version
          scrollwheel: false,
          zoomControl: true
        };
        map = new google.maps.Map(document.getElementById('page-brand-map'),
          mapOptions);
        var styledMapType = new google.maps.StyledMapType(styles, { name: 'Styled' });  
        map.mapTypes.set('Styled', styledMapType);

      }
      

      

      

      

      // var service = new google.maps.places.PlacesService(map);

      /////
      // INFOBOX
      /////

      infobox = new InfoBox({           
        disableAutoPan: false,
        maxWidth: 225,
        zIndex: null,
        boxStyle: {
            opacity: 1,
            width: "225px"
        },              
        infoBoxClearance: new google.maps.Size(1, 1)
      });

      ////
      // MARKERS
      ////

      var markersObj = {},
          requestObj = {};

      function createGoogleMarker(markerName ,Latlng, icon, title) {  

          markersObj[markerName] = new google.maps.Marker({
            position: Latlng,
            map: map,
            title: title,
            icon: icon
          });

      }   

      function upperCaseFirst(str){
        return str.replace(/\b\w/g, function(l){ return l.toUpperCase() });
      }   

      ///////
      //// Place Info
      ///////    

      function createRequestObj(requestObjName, PlaceId) {
        requestObj[requestObjName] = {
            placeId : PlaceId
          }
      }

      /////
      // EVENTS
      /////

      var events = function(Marker, MarkerLatLng, MarkerRequest, MarkerHtml, element) {



        if (element.hasClass('no-hover') == false) {
          google.maps.event.addListener(Marker, 'click', function() {
              infobox.open(map, this);              
              infobox.setContent(MarkerHtml);
              infobox.setOptions({ 'pixelOffset' : new google.maps.Size(45, -95) });
              map.panTo(MarkerLatLng);
          }); 
          this.create_map_events(Marker);
        } else {
          google.maps.event.addListener(Marker, 'click', function() {
              infobox.open(map, this);              
              map.panTo(MarkerLatLng);
          }); 
        }
        


        // google.maps.event.addListener(Marker, 'mouseover', function() {
        //     Marker.setIcon('images/icons/map-pin-hover.png');
        // });
        // google.maps.event.addListener(Marker, 'mouseout', function() {
        //     Marker.setIcon('images/icons/map-pin-grey.png');
        // });

        google.maps.event.addListener(map, "click", function(event) {
            infobox.close();
        });

        // service.getDetails(MarkerRequest, function(place, status) {
        //     if (status == google.maps.places.PlacesServiceStatus.OK) {
        //       google.maps.event.addListener(Marker, 'mouseover', function() {
        //           infobox.open(map, this);              
        //           infobox.setContent("<div class='infoBox-text'><h5>"+place.name+"</h5><p>"+place.formatted_address+"</p><a href='"+place.website+"' target='_blank'>VISIT WEBSITE <i class='fa fa-chevron-circle-right'></i></a><div class='arrow-down'></div></div>");
        //           infobox.setOptions({ 'pixelOffset' : new google.maps.Size(-25, -195) });
        //           map.panTo(MarkerLatLng);
        //       }); 
        //     }else if (status === google.maps.GeocoderStatus.OVER_QUERY_LIMIT) {
        //           setTimeout(function() {
        //               events(Marker, MarkerLatLng, MarkerRequest);
        //           }, 200);
        //       }
        //   });
        
      }.bind(this);

      $(".markers").each(function(i, v){
        var location = $(v).data('location');
        var placeId = $(v).data('place_id');
        var pinIcon = $(v).data('pin-icon');
        var marker_html = $(v).data('html');
        var marker_name = location.split(' ').join('_')+"Marker";   
        var request_name = location.split(' ').join('_')+"Request";   
        
        var LatLng = setMarkerLatLng($(v).data('lat'), $(v).data('lng'));
        createGoogleMarker(marker_name, LatLng, pinIcon, location);
        createRequestObj(request_name, placeId);
        events(markersObj[marker_name], LatLng, requestObj[request_name], marker_html, $(v));      
      });

        //Resize Function
      google.maps.event.addDomListener(window, "resize", function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
      });    



    } // end major if

};

goog.exportSymbol('sagewest.page.Default', sagewest.page.Default);