

goog.provide('sagewest.component.PackagesPopup');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The CLASSNAME constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
sagewest.component.PackagesPopup = function(options, element) {
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, sagewest.component.PackagesPopup.DEFAULT, options);
  this.element = element;

  this.window = $(window);
  this.body = $('body');
  this.html = $('html');

  this.is_open = false;


  this.black_bg = this.element.find('.black-bg');
  // this.black_bg.click(this.on_black_bg_click.bind(this));

  this.popup_element = this.element.find('#packages-popup');
  $(document).click(this.on_document_click.bind(this));


  this.element.find('#packages-popup-close-btn').click(this.on_close_button_click.bind(this));


  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  console.log('init');
};
goog.inherits(sagewest.component.PackagesPopup, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for CLASSNAME
 * @const {object}
 */
sagewest.component.PackagesPopup.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
sagewest.component.PackagesPopup.ON_OPEN = 'on_open';

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
sagewest.component.PackagesPopup.ON_CLOSE = 'on_close';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


sagewest.component.PackagesPopup.prototype.open_fullscreen = function() {


  if (this.is_open == false) {
    this.is_open = true;

    this.element.show(0);
    TweenMax.killTweensOf(this.element);
    TweenMax.to(this.element, 0.5, {opacity:1});




    var offset = this.window.scrollTop();

    this.window_height = this.window.height();
    this.window_width = this.window.width();
    // zoom check
    // if (this.window_width <= 1280 && manic.IS_ACTUAL_MOBILE == false ||
    // manic.IS_ACTUAL_MOBILE == true && manic.IS_TABLET_LANDSCAPE) {

    if (this.window_width <= 1280 && manic.IS_ACTUAL_MOBILE == false ||
        manic.IS_ACTUAL_MOBILE == true && manic.IS_TABLET_LANDSCAPE) {

      offset *= 1.1111;


      this.window_height *= 1.1111;

      // console.log('asdfasdfasd');
    }

    // disable scroll
    this.body.addClass('fullscreen-component-open');
    this.html.addClass('fullscreen-component-open');

    // http://jsfiddle.net/Allendar/TeQdb/          (idea from)

    console.log('offset: ' + offset);



    if (manic.IS_MOBILE == true) {

      var temp_window_height = this.window.height();

      this.popup_element.css({
        'min-height': temp_window_height + 'px'
      });

    } else {

      this.element.css({
        'height': this.window_height + 'px',
        'top': offset + 'px'
      });

    }


    this.dispatchEvent(new goog.events.Event(sagewest.component.PackagesPopup.ON_OPEN));
  }


};
sagewest.component.PackagesPopup.prototype.close_fullscreen = function() {
  if (this.is_open == true) {
    // this.is_open = false;

    TweenMax.killTweensOf(this.element);
    TweenMax.to(this.element, 0.3, {opacity:0, onComplete: this.close_fullscreen_complete, onCompleteScope: this});

  }
};

sagewest.component.PackagesPopup.prototype.close_fullscreen_complete = function(){
  this.is_open = false;

  this.body.removeClass('fullscreen-component-open');
  this.html.removeClass('fullscreen-component-open');

  this.element.hide(0);
  this.dispatchEvent(new goog.events.Event(sagewest.component.PackagesPopup.ON_CLOSE));
};

sagewest.component.PackagesPopup.prototype.private_method_03 = function() {};
sagewest.component.PackagesPopup.prototype.private_method_04 = function() {};
sagewest.component.PackagesPopup.prototype.private_method_05 = function() {};
sagewest.component.PackagesPopup.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
sagewest.component.PackagesPopup.prototype.sample_method_calls = function() {
  sagewest.component.PackagesPopup.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(sagewest.component.PackagesPopup.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//

/**
 * @param  {String} value_str
 */
sagewest.component.PackagesPopup.prototype.display_content = function(value_str) {
  this.element.find('.packages-popup-copy').hide(0);

  this.element.find('.packages-popup-copy[data-value="' + value_str + '"]').show(0);
  
};
sagewest.component.PackagesPopup.prototype.public_method_02 = function() {};
sagewest.component.PackagesPopup.prototype.public_method_03 = function() {};
sagewest.component.PackagesPopup.prototype.public_method_04 = function() {};
sagewest.component.PackagesPopup.prototype.public_method_05 = function() {};
sagewest.component.PackagesPopup.prototype.public_method_06 = function() {};


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
sagewest.component.PackagesPopup.prototype.on_black_bg_click = function(event) {
  console.log('on_black_bg_click');
  this.close_fullscreen();
};

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.PackagesPopup.prototype.on_document_click = function(event) {
  var target = $(event.target);


  if (this.is_open == true){

    if ($.contains(this.popup_element[0], target[0]) == false) {
  
      this.close_fullscreen();      

    }

  }
};

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.PackagesPopup.prototype.on_close_button_click = function(event) {
  this.close_fullscreen();
};

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.PackagesPopup.prototype.on_event_handler_04 = function(event) {
};

