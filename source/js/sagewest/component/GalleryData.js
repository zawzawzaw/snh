goog.provide('sagewest.component.GalleryData');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The CLASSNAME constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
sagewest.component.GalleryData = function(options, element) {
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, sagewest.component.GalleryData.DEFAULT, options);
  this.element = element;


  this.is_accommodation = false;
  this.link_url = '';

  this.thumbnail_data_object = {};
  this.masonry_data_object = {};
  this.overlay_data_object = {};



  this.data_title = '';
  this.data_id = 'no-id';
  this.data_category = 'no-category';
  this.data_masonry_width = '';
  this.data_masonry_height = '';
  this.data_masonry_image = '';
  this.data_gallery_desktop_image = '';
  this.data_gallery_desktop_thumnbail = '';
  this.data_gallery_mobile_image = '';
  this.data_gallery_mobile_thumnbail = '';
  this.data_accommodation_cta_url = '';
  this.data_accommodation_price_copy = '';
  this.data_accommodation_price_currency = '';
  this.data_accommodation_price_number   = '';

  if (goog.isDefAndNotNull(this.element.attr('data-title'))) {
    this.data_title = this.element.attr('data-title');
  }

  if (goog.isDefAndNotNull(this.element.attr('data-id'))) {
    this.data_id = this.element.attr('data-id');
  }

  if (goog.isDefAndNotNull(this.element.attr('data-category'))) {
    this.data_category = this.element.attr('data-category');
  }

  if (goog.isDefAndNotNull(this.element.attr('data-masonry-width'))) {
    this.data_masonry_width = this.element.attr('data-masonry-width');
  }

  if (goog.isDefAndNotNull(this.element.attr('data-masonry-height'))) {
    this.data_masonry_height = this.element.attr('data-masonry-height');
  }

  if (goog.isDefAndNotNull(this.element.attr('data-masonry-image'))) {
    this.data_masonry_image = this.element.attr('data-masonry-image');
  }

  if (goog.isDefAndNotNull(this.element.attr('data-gallery-desktop-image'))) {
    this.data_gallery_desktop_image = this.element.attr('data-gallery-desktop-image');
  }

  if (goog.isDefAndNotNull(this.element.attr('data-gallery-desktop-thumnbail'))) {
    this.data_gallery_desktop_thumnbail = this.element.attr('data-gallery-desktop-thumnbail');
  }

  if (goog.isDefAndNotNull(this.element.attr('data-gallery-mobile-image'))) {
    this.data_gallery_mobile_image = this.element.attr('data-gallery-mobile-image');
  }

  if (goog.isDefAndNotNull(this.element.attr('data-gallery-mobile-thumnbail'))) {
    this.data_gallery_mobile_thumnbail = this.element.attr('data-gallery-mobile-thumnbail');
  }

  if (goog.isDefAndNotNull(this.element.attr('data-accommodation-cta-url'))) {
    this.data_accommodation_cta_url = this.element.attr('data-accommodation-cta-url');
  }

  if (goog.isDefAndNotNull(this.element.attr('data-accommodation-price-copy'))) {
    this.data_accommodation_price_copy = this.element.attr('data-accommodation-price-copy');
  }

  if (goog.isDefAndNotNull(this.element.attr('data-accommodation-price-currency'))) {
    this.data_accommodation_price_currency = this.element.attr('data-accommodation-price-currency');
  }

  if (goog.isDefAndNotNull(this.element.attr('data-accommodation-price-number'))) {
    this.data_accommodation_price_number = this.element.attr('data-accommodation-price-number');
  }


  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //


  if (this.data_category == 'accommodation') {
    this.is_accommodation = true;
  }


  this.link_url = '#' + this.data_category + '/' + this.data_id;


  // CREATE DATA OBJECTS FOR TEMPLATING
  
  this.thumbnail_data_object = {
    'image': this.data_gallery_desktop_thumnbail,
    'url': this.link_url
  };


  this.masonry_data_object = {
    'image': this.data_masonry_image,
    'width': this.data_masonry_width,
    'height': this.data_masonry_height,
    'url': this.link_url
  };


  
  console.log(this.masonry_data_object)

  


  console.log('init');
};
goog.inherits(sagewest.component.GalleryData, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for CLASSNAME
 * @const {object}
 */
sagewest.component.GalleryData.DEFAULT = {
};

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
sagewest.component.GalleryData.EVENT_01 = '';


/**
 * sample_method_calls
 */
sagewest.component.GalleryData.prototype.sample_method_calls = function() {
  sagewest.component.GalleryData.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(sagewest.component.GalleryData.EVENT_01));
};