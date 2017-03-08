goog.provide('sagewest.component.GalleryIndexTab');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The CLASSNAME constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
sagewest.component.GalleryIndexTab = function(options, element) {
  // if has parent
  //goog.events.EventTarget.call(this, options, element);
  //this.options = $.extend(this.options, sagewest.component.GalleryIndexTab.DEFAULT, options);

  // else
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, sagewest.component.GalleryIndexTab.DEFAULT, options);
  this.element = element;

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  console.log('init');

  this.create_isotope();

};
goog.inherits(sagewest.component.GalleryIndexTab, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for CLASSNAME
 * @const {object}
 */
sagewest.component.GalleryIndexTab.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
sagewest.component.GalleryIndexTab.EVENT_01 = '';

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
sagewest.component.GalleryIndexTab.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


sagewest.component.GalleryIndexTab.prototype.create_isotope = function() {

  // #gallery-masonry-grid

  this.isotope = new Isotope('#gallery-masonry-grid', {
    itemSelector: '.gallery-masonry-grid-item',

    layoutMode: 'packery',
    packery: {
      // horizontal: true,
      // gutter: 10
    }
    

    // layoutMode: 'fitColumns'


    /*
    packery: {
      gutter: 10
    }
    */
  });
  this.isotope.on('layoutComplete', this.on_isotope_arrange_complete.bind(this));
  this.isotope.on('arrangeComplete', this.on_isotope_arrange_complete.bind(this));

};
sagewest.component.GalleryIndexTab.prototype.private_method_02 = function() {};
sagewest.component.GalleryIndexTab.prototype.private_method_03 = function() {};
sagewest.component.GalleryIndexTab.prototype.private_method_04 = function() {};
sagewest.component.GalleryIndexTab.prototype.private_method_05 = function() {};
sagewest.component.GalleryIndexTab.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
sagewest.component.GalleryIndexTab.prototype.sample_method_calls = function() {
  sagewest.component.GalleryIndexTab.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(sagewest.component.GalleryIndexTab.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


/**
 * @param {String} category_param [description]
 */
sagewest.component.GalleryIndexTab.prototype.set_category = function(category_param) {
  console.log('set_category: ' + category_param);
};
sagewest.component.GalleryIndexTab.prototype.public_method_02 = function() {};
sagewest.component.GalleryIndexTab.prototype.public_method_03 = function() {};
sagewest.component.GalleryIndexTab.prototype.public_method_04 = function() {};
sagewest.component.GalleryIndexTab.prototype.public_method_05 = function() {};
sagewest.component.GalleryIndexTab.prototype.public_method_06 = function() {};


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
sagewest.component.GalleryIndexTab.prototype.on_isotope_arrange_complete = function(event) {

};

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.GalleryIndexTab.prototype.on_event_handler_02 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.GalleryIndexTab.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.GalleryIndexTab.prototype.on_event_handler_04 = function(event) {
};

