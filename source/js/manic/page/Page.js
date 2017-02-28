/**
 * todo: place things from default.js here...
 */

goog.provide('manic.page.Page');

goog.require('manic');


goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('goog.userAgent');
goog.require('goog.userAgent.product');

/**
 * The Page constructor
 * @param {object} options The object extendable like jquery plugins
 * @constructor
 * @extends {goog.events.EventTarget}
 */
manic.page.Page = function(options) {

  goog.events.EventTarget.call(this);
  this.options = $.extend({}, manic.page.Page.DEFAULT, options);

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  this.body = $('body');
  //this.body.addClass('preload-start');

  this.window = $(window);
  this.window_hash = "";
  this.window_width = 100;
  this.window_height = 100;

  this.prev_device_width = 50;
  this.prev_device_height = 50;

  this.device_width = 100;
  this.device_height = 100;

  /*
  this.is_mobile = this.options['is_mobile'];
  this.is_tablet = this.options['is_tablet'];
  console.log('this.is_tablet: ' + this.is_tablet);
  */

  this.window_width = this.window.width();
  this.window_height = this.window.height();

  manic.IS_MOBILE       = this.window.width() <= 992;


  this.mobile_detect = new MobileDetect(window.navigator.userAgent);
  manic.IS_ACTUAL_MOBILE = this.mobile_detect.mobile() != null;

  if(manic.IS_ACTUAL_MOBILE == true){
    $('html').addClass('actual-mobile');
  }

  manic.IS_TABLET = this.mobile_detect.tablet() != null;
  
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





  /**
   * @type {boolean}
   */
  manic.IS_TABLET_PORTRAIT = false;

  /**
   * @type {boolean}
   */
  manic.IS_TABLET_LANDSCAPE = false;

  
  /**
   * @type {Array.<jQuery>}
   */
  this.scrolltarget_array = [];
  this.scrolltarget_name_array = [];

  //manic.BASE_URL        = this.options['base_url'];
  //manic.THEME_URL       = this.options['theme_url'];
  //manic.SITE_LANGUAGE   = this.options['site_language'];

  /*
  manic.IS_MOBILE       = this.is_mobile;
  manic.IS_TABLET       = this.is_tablet;

  // fake !!
  if(this.body.hasClass('manic-tablet-portrait-fake')){
    manic.IS_TABLET_FAKE_PORTRAIT = true;
  }
  */


  if(goog.userAgent.WINDOWS) { this.body.addClass('is-windows') }
  if(goog.userAgent.MAC) { this.body.addClass('is-mac') }

  if (goog.userAgent.product.FIREFOX) { this.body.addClass('is-firefox') }
  if (goog.userAgent.product.CHROME) { this.body.addClass('is-chrome') }
  if (goog.userAgent.product.SAFARI) { this.body.addClass('is-safari') }
  if (goog.userAgent.product.IE) { this.body.addClass('is-ie') }

  if (goog.userAgent.product.IPHONE) { this.body.addClass('is-iphone') }
  if (goog.userAgent.product.IPAD) { this.body.addClass('is-ipad') }                                          // lol, this is redaundant to mobile checker outside :D

  
  /**
   * @type {jQuery}
   */
  this.preloader_element = $('#page-preloader');

  TweenMax.delayedCall(0.4,this.init,[],this);

  /*
  if (this.is_tablet == true) {
    TweenMax.delayedCall(0.4,this.init_tablet,[],this);
  } else if (this.is_mobile == true) {
    TweenMax.delayedCall(0.4,this.init_mobile,[],this);
  } else {
    TweenMax.delayedCall(0.4,this.init_desktop,[],this);
  }
  */

};
goog.inherits(manic.page.Page, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for Page
 * @const {object}
 */
manic.page.Page.DEFAULT = {
  'on_init_complete': function(){}
};

/**
 * Page Event Constant
 * @const
 */
manic.page.Page.BREAKPOINT = 768;

// manic.page.Page.BREAKPOINT = 992;




//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//

manic.page.Page.prototype.init = function(){
  this.create_scrolltarget();

  this.window.resize(this.on_window_resize.bind(this));
  this.window.focus(this.on_window_resize.bind(this));
  this.window.on('hashchange', this.on_window_hash_change.bind(this));
  this.on_window_resize(null);
  this.hide_preloader();

  this.options['on_init_complete']();
};

/*
manic.page.Page.prototype.init_desktop = function() {
  $('body').addClass('desktop-version');
  this.create_scrolltarget();

  this.window.resize(this.on_window_resize.bind(this));
  this.window.on('hashchange', this.on_window_hash_change.bind(this));
  this.on_window_resize(null);
  //this.initial_window_hash();


  this.hide_preloader();



  console.log('init_desktop');
  this.options['on_init_complete']();
};

manic.page.Page.prototype.init_tablet = function(){
  $('body').addClass('tablet-version');
  this.create_scrolltarget();

  this.window.resize(this.on_window_resize.bind(this));
  this.window.on('hashchange', this.on_window_hash_change.bind(this));
  this.on_window_resize(null);
  //this.initial_window_hash();


  this.hide_preloader();



  console.log('init_tablet');
  this.options['on_init_complete']();
};


manic.page.Page.prototype.init_mobile = function() {
  $('body').addClass('mobile-version');
  this.create_scrolltarget();

  this.window.resize(this.on_window_resize.bind(this));
  this.window.on('hashchange', this.on_window_hash_change.bind(this));
  this.on_window_resize(null);
  //this.initial_window_hash();


  this.hide_preloader();
  
  console.log('init_mobile');
  this.options['on_init_complete']();
};
*/

manic.page.Page.prototype.create_scrolltarget = function() {
  /**
   * @type {jQuery}
   */
  var scroll_target = null;

  /**
   * @type {String}
   */
  var scroll_target_str = "";
  var arr = $('.scroll-target');

  for (var i = 0, l = arr.length; i < l; i++) {
    scroll_target = $(arr[i]);
    scroll_target_str = scroll_target.attr('data-value');

    // console.log('scroll_target_str: ' + scroll_target_str);
    // console.log(scroll_target)
    
    this.scrolltarget_name_array[i] = scroll_target_str;
    this.scrolltarget_array[i] = scroll_target;
  }
};


//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//

manic.page.Page.prototype.hide_preloader = function() {
  
  this.body.addClass('preload-complete');
  this.body.addClass('preload-complete-2');

  //TweenMax.to(this.preloader_element, 0.2, {autoAlpha:0, delay: 2, onComplete: this.on_hide_preloader_complete, onCompleteScope: this});
  TweenMax.to(this.preloader_element, 0.6, {autoAlpha:0, delay: 1.6, ease:Linear.easeNone, 
    onStart: this.on_hide_preloader_start, onStartScope: this,
    onComplete: this.on_hide_preloader_complete, onCompleteScope: this});
  TweenMax.delayedCall(3, this.on_hide_preloader_complete_02, [], this);
};


manic.page.Page.prototype.on_hide_preloader_start = function(){
  this.body.removeClass('preload-fade-start');
};
manic.page.Page.prototype.on_hide_preloader_complete = function() {
  console.log('Page: on_hide_preloader_complete');
  this.body.removeClass('preload-complete');

  
  this.initial_scroll_to_target();
  

};
manic.page.Page.prototype.on_hide_preloader_complete_02 = function() {
  this.body.removeClass('preload-complete-2');
};


manic.page.Page.prototype.initial_scroll_to_target = function() {

  // console.log('initial_scroll_to_target: page')

  this.window_hash = window.location.hash.replace('#', '');
  console.log('initial_scroll_to_target: ' + this.window_hash);

  // last working code... Jun 02 2016
  // this.scroll_to_target(this.window_hash);
  var str_array = [];
  if (this.window_hash != '') {
    str_array = this.window_hash.split('/');

    console.log('str_array2: ');
    console.log(str_array);

    if(str_array.length == 1){
      this.scroll_to_target(str_array[0]);

    } else if(str_array.length == 2){
      this.scroll_to_target(str_array[0], str_array[1]);

    } else if(str_array.length == 3){
      this.scroll_to_target(str_array[0], str_array[1], str_array[2]);

    } else {
      console.log('there is too many slashes in the hash url...');
      console.log('there is too many slashes in the hash url...');
      console.log('there is too many slashes in the hash url...');
    }
  }

};


/**
 * scroll_to_target description
 * @param  {String} str_param
 * @param  {String=} str_param_2
 * @param  {String=} str_param_3
 */
manic.page.Page.prototype.scroll_to_target = function(str_param, str_param_2, str_param_3) {
  console.log('manic.page.Page: scroll_to_target');
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

      var header_height = 60; // be careful of this.
      var target_y = scroll_target.offset().top - header_height;

      var offset_y = 0;
      var offset_data = scroll_target.attr('data-offset');

      if (goog.isDefAndNotNull(offset_data)) {
        offset_y = parseFloat(offset_data);
        target_y += offset_y;
      }



      var current_scroll = this.window.scrollTop();

      var target_duration = Math.abs(  (target_y - current_scroll) / 800 );
      TweenMax.to(this.window, target_duration, {scrollTo:{y:target_y,autoKill: true}, ease:Quad.easeInOut});

    }
        
    
  }

};

/**
 * @param  {number} num_param
 */
manic.page.Page.prototype.scroll_to = function(num_param) {
  var target_y = num_param;
  var current_scroll = this.window.scrollTop();
  var target_duration = Math.abs( (target_y - current_scroll) / 800 );
  TweenMax.to(this.window, target_duration, {scrollTo:{y:target_y,autoKill: true}, ease:Quad.easeInOut});
};


/*
manic.page.Page.prototype.public_method_05 = function() {};
manic.page.Page.prototype.public_method_06 = function() {};
*/

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
manic.page.Page.prototype.on_window_resize = function(event) {

  this.window_width = this.window.width();
  this.window_height = this.window.height();

  manic.IS_MOBILE       = this.window.width() <= 992;


  this.prev_device_width = this.device_width;
  this.prev_device_height = this.device_height;

  this.device_width = window.screen.width;
  this.device_height = window.screen.height;

  /*
  // to prevent iOS resize when removing the address bar on scroll (default safari animation)
  if (manic.IS_MOBILE == true) { 
    this.window_height = window.screen.height;      
  }
  */

  
  /*
  if (this.is_mobile == true) {

    if (this.window_width >= manic.page.Page.BREAKPOINT) {
      location.reload();
    }

  } else {
    if (this.window_width < manic.page.Page.BREAKPOINT) {
      location.reload();
    }
  }
  */

};

/**
 * event handler
 * @param  {object} event
 */
manic.page.Page.prototype.on_window_hash_change = function(event) {

  console.log('manic.page.Page: on_window_hash_change');

  this.window_hash = window.location.hash.replace('#', '');
  var str_array = [];

  if (this.window_hash != '') {

    str_array = this.window_hash.split('/');

    console.log('str_array: ');
    console.log(str_array);

    if(str_array.length == 1){
      this.scroll_to_target(str_array[0]);

    } else if(str_array.length == 2){
      this.scroll_to_target(str_array[0], str_array[1]);

    } else if(str_array.length == 3){
      this.scroll_to_target(str_array[0], str_array[1], str_array[2]);

    } else {
      console.log('there is too many slashes in the hash url...');
      console.log('there is too many slashes in the hash url...');
      console.log('there is too many slashes in the hash url...');
    }

    /*
    if (this.window_hash.indexOf('/') == -1) {
      this.scroll_to_target(this.window_hash);
    } else if (this.window_hash.indexOf('/') == 1) {
      str_array = this.window_hash.split('/');
      this.scroll_to_target(str_array[0], str_array[1]);
    }
    */

    


  } else {
    this.on_scroll_to_no_target();
    this.scroll_to(0);
  }

};


manic.page.Page.prototype.on_scroll_to_no_target = function(){

};

/*
manic.page.Page.prototype.initial_window_hash = function(){
  this.window_hash = window.location.hash.replace('#', '');
  if(this.window_hash != ''){
    this.scroll_to_target(this.window_hash);
  }
};
*/


goog.exportSymbol('manic.page.Page', manic.page.Page);