goog.provide('sagewest.component.GalleryDetailTab');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The CLASSNAME constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
sagewest.component.GalleryDetailTab = function(options, element) {
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, sagewest.component.GalleryDetailTab.DEFAULT, options);
  this.element = element;

  /**
   * @type {Array.<sagewest.component.GalleryData>}
   */
  this.gallery_data_array = [];

  /**
   * @type {Array}
   */
  this.gallery_data_category_dictionary = []; // given category str, returns all items on category

  /**
   * @type {Array}
   */
  this.gallery_data_category_id_dictionary = []; // given category str & item id, returns item


  this.current_category_data_array = [];


  this.current_category = 'none';
  this.current_id = 'none';

  this.main_slider = this.element.find('#gallery-slider');
  this.main_slider_length = 0;
  this.thumbnail_slider = this.element.find('#gallery-thumbnail-slider');

  this.desktop_close_btn = $('#gallery-cta-container a.arrow-cta');
  this.mobile_close_btn = $('#gallery-close-btn-mobile');



  // event listeners
  
  this.main_slider.on('init', function(event, slick){
    this.dispatchEvent(new goog.events.Event(sagewest.component.GalleryDetailTab.CREATE_IMAGE));
  }.bind(this));

  this.main_slider.on('breakpoint init reInit setPosition', function(event, slick, breakpoint){

    var current_slide = (slick.currentSlide + 1); // starts from zero
    var current_slide_txt = current_slide + ' / ' + this.main_slider_length;
    $('#gallery-slider-number-txt-mobile').html(current_slide_txt);

    this.dispatchEvent(new goog.events.Event(sagewest.component.GalleryDetailTab.UPDATE_IMAGE));

  }.bind(this));

  
  this.thumbnail_slider.on('init', function(event, slick){
    this.dispatchEvent(new goog.events.Event(sagewest.component.GalleryDetailTab.CREATE_IMAGE));
  }.bind(this));
  
  this.thumbnail_slider.on('breakpoint init reInit setPosition', function(event, slick, breakpoint){
    this.dispatchEvent(new goog.events.Event(sagewest.component.GalleryDetailTab.UPDATE_IMAGE));
  }.bind(this));


  
  
  this.element.find('#gallery-slider-prev-btn, #gallery-slider-prev-btn-mobile').click(function(event){
    event.preventDefault();
    this.main_slider.slick('slickPrev');

  }.bind(this));

  this.element.find('#gallery-slider-next-btn, #gallery-slider-next-btn-mobile').click(function(event){
    event.preventDefault();
    this.main_slider.slick('slickNext');

  }.bind(this));



  
  



  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  // console.log('init');
};
goog.inherits(sagewest.component.GalleryDetailTab, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for CLASSNAME
 * @const {object}
 */
sagewest.component.GalleryDetailTab.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
sagewest.component.GalleryDetailTab.CREATE_IMAGE = 'create_image';

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
sagewest.component.GalleryDetailTab.UPDATE_IMAGE = 'update_image';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


sagewest.component.GalleryDetailTab.prototype.private_method_01 = function() {};
sagewest.component.GalleryDetailTab.prototype.private_method_02 = function() {};
sagewest.component.GalleryDetailTab.prototype.private_method_03 = function() {};
sagewest.component.GalleryDetailTab.prototype.private_method_04 = function() {};
sagewest.component.GalleryDetailTab.prototype.private_method_05 = function() {};
sagewest.component.GalleryDetailTab.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
sagewest.component.GalleryDetailTab.prototype.sample_method_calls = function() {
  sagewest.component.GalleryDetailTab.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(sagewest.component.GalleryDetailTab.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


/**
 * @param {String} category_param
 * @param {String} id_param
 */
sagewest.component.GalleryDetailTab.prototype.set_category_and_id = function(category_param, id_param) {

  // console.log('set_category_and_id: ' + category_param + " " + id_param);



  // create sliders
  
  if (this.current_category != category_param &&
      this.gallery_data_category_dictionary[category_param] != null) {

    this.current_category = category_param;


    // set current data array 
    this.current_category_data_array = this.gallery_data_category_dictionary[this.current_category];

    // recreate sliders
    this.create_main_slider();
    this.create_thumbnail_slider();

    // $('#gallery-cta-container a.arrow-cta').attr('href', '#' + this.current_category);

    this.desktop_close_btn.attr('href', '#' + this.current_category);
    this.mobile_close_btn.attr('href', '#' + this.current_category);

    $('#gallery-page-tab-container a').removeClass('selected');
    $('#gallery-page-tab-container a[href="#' + this.current_category + '"]').addClass('selected');

  }


  // select current item (from sliders or existing sliders)

  var index = 0;
  var data = null;

  for (var i = 0, l=this.current_category_data_array.length; i < l; i++) {
    data = this.current_category_data_array[i];

    if (id_param == data.data_id) {
      index = i;
      break;
    }
  }


  this.main_slider.slick('slickGoTo', index);

  



};
sagewest.component.GalleryDetailTab.prototype.animate_in = function() {
  this.element.css({
    'display': 'block'
  });
};
sagewest.component.GalleryDetailTab.prototype.animate_out = function() {
  this.element.css({
    'display': 'none'
  });
};



/**
 * @param {Array} arr_param  [description]
 * @param {Array} arr2_param [description]
 * @param {Array} arr3_param [description]
 */
sagewest.component.GalleryDetailTab.prototype.set_data_array = function(arr_param, arr2_param, arr3_param) {

  this.gallery_data_array = arr_param;
  this.gallery_data_category_dictionary = arr2_param;
  this.gallery_data_category_id_dictionary = arr3_param;

  // do nothing for now

};




sagewest.component.GalleryDetailTab.prototype.update_layout = function() {
  // update sliders ? 
};


sagewest.component.GalleryDetailTab.prototype.public_method_04 = function() {};


//     ____ ____  _____    _  _____ _____
//    / ___|  _ \| ____|  / \|_   _| ____|
//   | |   | |_) |  _|   / _ \ | | |  _|
//   | |___|  _ <| |___ / ___ \| | | |___
//    \____|_| \_\_____/_/   \_\_| |_____|
//

sagewest.component.GalleryDetailTab.prototype.create_main_slider = function() {

  // CREATE HTML
  
  var slider_item_template = [
    '<div class="gallery-slider-item">',
      '<div class="manic-image-container">',
        '<img src="" ',
          'data-image-desktop="{image}"',
          'data-image-mobile="{mobileimage}">',
      '</div>',
    '</div>'
  ].join('');

  var slider_item_str = '';

  var overlay_template = [
    '<div class="gallery-slider-overlay">',
      '<div class="row">',
        '<div class="col-md-12">',
          '<div class="gallery-slider-overlay-left-container">',
            '<h5>{title}</h5>',
          '</div>',
        '</div>',
      '</div>',
    '</div>'
  ].join('');

  var overlay_accommodation_template = [
    '<div class="gallery-slider-overlay">',
      '<div class="row">',
        '<div class="col-md-7">',
          '<div class="gallery-slider-overlay-left-container">',
            '<h5>{title}</h5>',
          '</div>',
        '</div>',
        '<div class="col-md-5">',
          '<div class="gallery-slider-overlay-right-container">',
            '<div class="gallery-slider-overlay-content-price">',
              '<h6>{pricecopy}</h6>',
              '<p class="content-price">',
                '<span class="currency">{currency}</span>',
                '<span class="number">{price}</span>',
              '</p>',
            '</div>',
            '<div class="cta-container">',
              '<a href="{url}" class="square-cta highlight-version">Book Now</a>',
            '</div>',
          '</div>',
        '</div>',
      '</div>',
    '</div>'
  ].join('');

  var overlay_str = '';


  var fragment = $(document.createDocumentFragment());

  var data = null;
  var item = null;
  var overlay_item = null;

  for (var i = 0, l=this.current_category_data_array.length; i < l; i++) {
    data = this.current_category_data_array[i];

    slider_item_str = nano(slider_item_template, data.gallery_data_object);
    item = $(slider_item_str);


    if (data.is_accommodation == true) {
      overlay_str = nano(overlay_accommodation_template, data.overlay_data_object);
    } else {
      overlay_str = nano(overlay_template, data.overlay_data_object);
    }
    
    
    overlay_item = $(overlay_str);

    item.append(overlay_item);


    fragment.append(item);
  }


  this.main_slider_length = this.current_category_data_array.length;


  // DESTROY CURRENT SLIDER

  if (this.main_slider.hasClass('slick-initialized')) {
    this.main_slider.slick('unslick');
  }

  this.main_slider.empty();


  // CREATE SLIDER
  
  this.main_slider.append(fragment);
  this.main_slider.slick({
    'speed': 350,
    'dots': false,
    // 'arrows': true,
    'arrows': false,
    // 'infinite': false,
    'infinite': true,
    'slidesToShow': 1,
    'slidesToScroll': 1,
    'pauseOnHover': true,

    'autoplay': false,
    'autoplaySpeed': 4000,
    
    'prevArrow': '<a href="javascript:void(0);" class="slick-prev">Previous</a>',
    'nextArrow': '<a href="javascript:void(0);" class="slick-next">Next</a>'
  });
  



};
sagewest.component.GalleryDetailTab.prototype.create_thumbnail_slider = function() {

  // CREATE HTML
  
  var slider_thumbnail_template = [
    '<div class="gallery-thumbnail-slider-item">',
      '<a href="{url}" title="{title}" class="manic-image-container">',
        '<img src=""',
          'data-image-desktop="{image}"',
          'data-image-mobile="{mobileimage}">',
      '</a>',
    '</div>'
  ].join('');

  var slider_thumbnail_str = '';


  var fragment = $(document.createDocumentFragment());
  var fragment2 = $(document.createDocumentFragment());

  var data = null;
  var item = null;
  var item2 = null;

  for (var i = 0, l=this.current_category_data_array.length; i < l; i++) {
    data = this.current_category_data_array[i];

    slider_thumbnail_str = nano(slider_thumbnail_template, data.thumbnail_data_object);

    item = $(slider_thumbnail_str);
    item2 = $(slider_thumbnail_str);

    fragment.append(item);
    fragment2.append(item2);

  } // for

  // DESTROY CURRENT SLIDER
    
  if (this.thumbnail_slider.hasClass('slick-initialized')) {
    this.thumbnail_slider.slick('unslick');
  }

  this.thumbnail_slider.empty();



  // CREATE SLIDER

  this.thumbnail_slider.append(fragment);
  // this.thumbnail_slider.append(fragment2);
  this.thumbnail_slider.slick({
    'speed': 350,
    'dots': false,
    'arrows': false,
    // 'infinite': false,
    'infinite': true,
    'slidesToShow': 8,
    'slidesToScroll': 8,
    'pauseOnHover': true,
    'autoplay': false,
    'autoplaySpeed': 4000
  });

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
sagewest.component.GalleryDetailTab.prototype.on_event_handler_01 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.GalleryDetailTab.prototype.on_event_handler_02 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.GalleryDetailTab.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.GalleryDetailTab.prototype.on_event_handler_04 = function(event) {
};

