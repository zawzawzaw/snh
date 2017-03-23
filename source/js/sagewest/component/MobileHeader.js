goog.provide('sagewest.component.MobileHeader');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');


/**
 * The MobileHeader constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
sagewest.component.MobileHeader = function(options, element) {
  // if has parent
  //goog.events.EventTarget.call(this, options, element);
  //this.options = $.extend(this.options, sagewest.component.MobileHeader.DEFAULT, options);

  // else
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, sagewest.component.MobileHeader.DEFAULT, options);
  this.element = element;

  this.body = $('body');
  this.body_element = $('body');

  this.window_scroll = 0;

  this.window = $(window);
  this.window.scroll(this.on_window_scroll.bind(this));
  this.on_window_scroll(null);

  this.is_open = false;
  this.is_calendar_open = false;
  
  this.mobile_header_bg = $('.mobile-header-bg');
  this.expand_container = $('#mobile-header-expanded');
  this.page_wrapper = $('#page-wrapper');

  this.open_btn = this.element.find('#mobile-header-open-btn');
  this.close_btn = this.element.find('#mobile-header-close-btn');
  this.calendar_open_btn = this.element.find('#mobile-header-calendar-open-btn');
  this.calendar_close_btn = this.element.find('#mobile-header-calendar-close-btn');

  this.menu_container_element = this.expand_container.find('#mobile-header-menu-container');
  this.menu_element = this.expand_container.find('#mobile-menu');

  this.menu_li_elements = null;
  this.menu_a_elements = null;
  this.menu_a_array = [];

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  this.create_main_buttons();
  this.create_menu();

  /*
  if(manic.IS_ACTUAL_MOBILE == true) {
    this.calendar_open_menu();
  }
  */

  console.log('init');
};
goog.inherits(sagewest.component.MobileHeader, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for MobileHeader
 * @const {object}
 */
sagewest.component.MobileHeader.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * MobileHeader Event Constant
 * @const
 * @type {string}
 */
sagewest.component.MobileHeader.ON_OPEN = 'on_open';

/**
 * MobileHeader Event Constant
 * @const
 * @type {string}
 */
sagewest.component.MobileHeader.ON_CLOSE = 'on_close';


//     ____ ____  _____    _  _____ _____ 
//    / ___|  _ \| ____|  / \|_   _| ____|
//   | |   | |_) |  _|   / _ \ | | |  _|  
//   | |___|  _ <| |___ / ___ \| | | |___ 
//    \____|_| \_\_____/_/   \_\_| |_____|
//                                        

sagewest.component.MobileHeader.prototype.create_main_buttons = function() {
  this.open_btn.click(this.on_open_btn_click.bind(this));
  this.close_btn.click(this.on_close_btn_click.bind(this));
  this.calendar_open_btn.click(this.on_calendar_open_btn_click.bind(this));
  this.calendar_close_btn.click(this.on_calendar_close_btn_click.bind(this));

};
sagewest.component.MobileHeader.prototype.create_menu = function() {

  this.menu_li_elements = this.menu_element.find('> ul > li');
  this.menu_a_elements = this.menu_element.find('> ul > li > a');
  this.menu_a_array = [];

  var arr = this.menu_element.find('> ul > li > a');
  var item = null;

  for (var i = 0, l=arr.length; i < l; i++) {
    item = $(arr[i]);
    item.click(this.on_menu_a_click.bind(this));

    this.menu_a_array[i] = item;
  }


  arr = this.menu_element.find('> ul > li.has-subnav .expand-btn');
  for (var i = 0, l=arr.length; i < l; i++) {
    item = $(arr[i]);    
    item.click(this.on_menu_expand_btn_click.bind(this));
  }  

  // click on else where
  $("#mobile-header-expanded").on('click tap', function(event) { 
      if(!$(event.target).closest('#mobile-header-open-btn').length && !$(event.target).closest('#mobile-header-close-btn').length && !$(event.target).closest('a').length && !$(event.target).closest('#mobile-header-booking-form').length) {
          this.close_menu();
      }        
      if(!$(event.target).closest('#mobile-header-calendar-open-btn').length && !$(event.target).closest('#mobile-header-calendar-close-btn').length && !$(event.target).closest('#mobile-date-picker').length && !$(event.target).closest('.next').length && !$(event.target).closest('.prev').length && !$(event.target).closest('#hover-day').length && !$(event.target).closest('#hover-weekname').length && !$(event.target).closest('th, td, tr').length && !$(event.target).closest('select').length && !$(event.target).closest('input').length && !$(event.target).closest('.date-input').length && !$(event.target).closest('#mobile-header-booking-form').length) {
          this.calendar_close_menu();
      }        
  }.bind(this));

  $(".hotel-dropdown").on("mouseup change", function(e){
    var selectedVal = $(this).val();

    if(selectedVal.length > 23) {
      $("#hotel option[value='"+selectedVal+"']").html(selectedVal.substring(0, 24) + "...");
    }
  });

};




//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


sagewest.component.MobileHeader.prototype.open_menu = function() {

  console.log('MobileHeader: open_menu');

  if (this.is_open == false) {
    this.is_open = true;
    this.is_calendar_open = false;
    console.log('MobileHeader: open_menu: inside');

    this.body.removeClass('mobile-calendar-open');


    this.mobile_header_bg.css({"right": "auto", "left": "0", "width": "100%"});

    this.body.addClass('mobile-menu-open');

    $('html').addClass('fixed');    
    $('body').addClass('fixed'); 

    // this.page_wrapper.addClass('hidden-version');
    this.expand_container.addClass('expand-version');


    TweenMax.to(this.close_btn, 0.3, {autoAlpha: 1});
    TweenMax.to(this.open_btn, 0.3, {autoAlpha: 0});

    TweenMax.to(this.calendar_close_btn, 0.3, {autoAlpha: 0});
    TweenMax.to(this.calendar_open_btn, 0.3, {autoAlpha: 1});
    
    this.dispatchEvent(new goog.events.Event(sagewest.component.MobileHeader.ON_OPEN));

  }
};
sagewest.component.MobileHeader.prototype.close_menu = function() {
  if (this.is_open == true) {
    this.is_open = false;

    this.body.removeClass('mobile-menu-open');

    $('html').removeClass('fixed');    
    $('body').removeClass('fixed'); 

    // this.page_wrapper.removeClass('hidden-version');
    this.expand_container.removeClass('expand-version');
    
    TweenMax.to(this.close_btn, 0.3, {autoAlpha: 0});
    TweenMax.to(this.open_btn, 0.3, {autoAlpha: 1});

    // close all sub menus
    this.menu_li_elements.removeClass('expand-version');

    this.dispatchEvent(new goog.events.Event(sagewest.component.MobileHeader.ON_CLOSE));

  }
};
sagewest.component.MobileHeader.prototype.calendar_open_menu = function() {

  console.log('MobileHeader: open_calendar');
  
  if (this.is_calendar_open == false) {
    this.is_calendar_open = true;
    this.is_open = false;

    this.body.addClass('mobile-calendar-open');
    this.body.removeClass('mobile-menu-open');

    $('html').addClass('fixed');    
    $('body').addClass('fixed');    

    this.expand_container.addClass('expand-version');

    TweenMax.to(this.calendar_close_btn, 0.3, {autoAlpha: 1});
    TweenMax.to(this.calendar_open_btn, 0.3, {autoAlpha: 0});

    TweenMax.to(this.close_btn, 0.3, {autoAlpha: 0});
    TweenMax.to(this.open_btn, 0.3, {autoAlpha: 1});

    $('#mobile-header-calendar-open-btn span').html('Close');
    $('#mobile-header-calendar-close-btn span').html('Close');
    
  }

};
sagewest.component.MobileHeader.prototype.calendar_close_menu = function() {
    
  if (this.is_calendar_open == true) {
    this.is_calendar_open = false;

    this.body.removeClass('mobile-calendar-open');
    this.body.removeClass('mobile-menu-open');

    $('html').removeClass('fixed');
    $('body').removeClass('fixed');

    this.expand_container.removeClass('expand-version');

    TweenMax.to(this.calendar_close_btn, 0.3, {autoAlpha: 0});
    TweenMax.to(this.calendar_open_btn, 0.3, {autoAlpha: 1});

    

    $('#mobile-header-calendar-open-btn span').html('Book Now');
    $('#mobile-header-calendar-close-btn span').html('Book Now');

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
sagewest.component.MobileHeader.prototype.on_open_btn_click = function(event) {
  this.open_menu();
};

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.MobileHeader.prototype.on_close_btn_click = function(event) {
  this.close_menu();
};

sagewest.component.MobileHeader.prototype.on_calendar_open_btn_click = function(event) {
  event.preventDefault();
  this.calendar_open_menu();
};

sagewest.component.MobileHeader.prototype.on_calendar_close_btn_click = function(event) {
  event.preventDefault();
  this.calendar_close_menu();
};

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.MobileHeader.prototype.on_menu_a_click = function(event) {
  var target = $(event.currentTarget);
  var target_parent = target.parent();

  event.stopPropagation();

  console.log("on_menu_a_click")

  var is_subnav = target_parent.hasClass('has-subnav');
  var is_expanded = target_parent.hasClass('expand-version');

  if(is_subnav){

    if (is_expanded) {
      // this.menu_li_elements.removeClass('expand-version');

      if(target.attr('href') == '#'){
        event['preventDefault']();
        target_parent.removeClass('expand-version');
      }


    } else {
      event['preventDefault']();
      this.menu_li_elements.removeClass('expand-version');
      target_parent.addClass('expand-version');
    }
  }

  
};

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.MobileHeader.prototype.on_menu_expand_btn_click = function(event) {

  event['preventDefault']();
  event.stopPropagation();

  console.log("on_menu_expand_btn_click");

  var target = $(event.currentTarget);
  var target_parent = target.parent();

  // var is_subnav = target_parent.hasClass('has-subnav');
  var is_expanded = target_parent.hasClass('expand-version');

  console.log('is_expanded: '+ is_expanded)

  if (is_expanded) {
    console.log(this.menu_li_elements);
    this.menu_li_elements.removeClass('expand-version');
  } else {
    this.menu_li_elements.removeClass('expand-version');
    target_parent.addClass('expand-version');
  }
  
};

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.MobileHeader.prototype.on_window_scroll = function(event) {
  var current_window_scroll = this.window.scrollTop();

  if(current_window_scroll > 10){

    if (current_window_scroll > this.window_scroll) {
      this.element.addClass('sticky-version');
      this.body_element.addClass('body-sticky-version');
    } else {
      this.element.removeClass('sticky-version');
      this.body_element.removeClass('body-sticky-version');
    }

  } else {
    this.element.removeClass('sticky-version');
    this.body_element.removeClass('body-sticky-version');
  }

  this.window_scroll = current_window_scroll;

}