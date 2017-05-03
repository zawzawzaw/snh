goog.provide('sagewest.component.GalleryIndexTab');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');



goog.require('sagewest.component.GalleryData');


/**
 * The CLASSNAME constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
sagewest.component.GalleryIndexTab = function(options, element) {
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, sagewest.component.GalleryIndexTab.DEFAULT, options);
  this.element = element;

  this.container = this.element.find('#gallery-masonry-grid');
  this.current_category = 'none';

  this.is_created = false;

  this.isotope = null;


  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  // console.log('init');

  // this.create_isotope();

};
goog.inherits(sagewest.component.GalleryIndexTab, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for CLASSNAME
 * @const {object}
 */
sagewest.component.GalleryIndexTab.DEFAULT = {
};

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
sagewest.component.GalleryIndexTab.UPDATE_IMAGE = 'update_image';

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


sagewest.component.GalleryIndexTab.prototype.create_html = function() {


  // extra class = category-accommodation height-2 width-2

  var masonry_item_template = [
    '<div class="gallery-masonry-grid-item {extraclass}">',
      '<a href="{url}" title="{title}">',
        '<div class="manic-image-container">',
          '<img src="" data-image="{image}">',
        '</div>',
      '</a>',
    '</div>'
  ].join('');


  var fragment = $(document.createDocumentFragment());

  /**
   * @type {sagewest.component.GalleryData}
   */
  var data = null;

  var item = null;
  var masonry_item_str = '';

  for (var i = 0, l=this.data_array.length; i < l; i++) {

    data = this.data_array[i];

    masonry_item_str = nano(masonry_item_template, data.masonry_data_object);

    item = $(masonry_item_str);
    fragment.append(item);

  } // for


  this.container.append(fragment);

};

sagewest.component.GalleryIndexTab.prototype.create_isotope = function() {



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


  // update page layout on window size change

  this.isotope.on('layoutComplete', function(){
    this.dispatchEvent(new goog.events.Event(sagewest.component.GalleryIndexTab.UPDATE_IMAGE));
  }.bind(this));

  this.isotope.on('arrangeComplete', function(){
    this.dispatchEvent(new goog.events.Event(sagewest.component.GalleryIndexTab.UPDATE_IMAGE));
  }.bind(this));

};

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
 * @param {Array} arr_param
 */
sagewest.component.GalleryIndexTab.prototype.set_data_array = function(arr_param){

  this.data_array = arr_param;

  this.create_html();
  this.create_isotope();

  this.is_created = true;       // only after it has created 


};


/**
 * @param {String} category_param [description]
 */
sagewest.component.GalleryIndexTab.prototype.set_category = function(category_param) {
  // console.log('set_category: ' + category_param);
    
  // handle no category
  
  if (category_param == '' && 
      category_param == 'all' &&
      goog.isDefAndNotNull(category_param) == false) {

    category_param = 'all';
  }



  if (this.current_category != category_param) {

    this.current_category = category_param;

    var filter_class = '.category-' + this.current_category;

    if (this.current_category == 'all'){
      filter_class = '';
    }


    // THIS WON'T WORK ANYMORE
    $('#gallery-masonry-grid').isotope({
      itemSelector: '.gallery-masonry-grid-item',
      layoutMode: 'packery',
      filter: filter_class 
    });
    // $('#gallery-masonry-grid').isotope('layout');




    $('#gallery-page-tab-container a').removeClass('selected');
    $('#gallery-page-tab-container a[href="#' + this.current_category + '"]').addClass('selected');

    // moved to detail
    // $('#gallery-cta-container a.arrow-cta').attr('href', '#' + this.current_category);



  }


  


};
sagewest.component.GalleryIndexTab.prototype.animate_in = function() {
  this.element.css({
    'display': 'block'
  });
};
sagewest.component.GalleryIndexTab.prototype.animate_out = function() {
  this.element.css({
    'display': 'none'
  });
};
sagewest.component.GalleryIndexTab.prototype.update_layout = function() {

  if (this.isotope != null) {
    this.isotope.layout();
  }

};
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

