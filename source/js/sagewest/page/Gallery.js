goog.provide('sagewest.page.Gallery');
goog.require('sagewest.page.Default');


goog.require('manic.google.Map');

goog.require('sagewest.component.GalleryData');
goog.require('sagewest.component.GalleryIndexTab');
goog.require('sagewest.component.GalleryDetailTab');



/**
 * The MICE constructor
 * @inheritDoc
 * @constructor
 * @extends {sagewest.page.Default}
 */
sagewest.page.Gallery = function(options, element) {
  sagewest.page.Default.call(this, options, element);
  this.options = $.extend(this.options, sagewest.page.Gallery.DEFAULT, options);


  this.current_category = 'all';


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


  /**
   * @type {sagewest.component.GalleryData}
   */
  this.current_gallery_data = null;



  /**
   * @type {sagewest.component.GalleryIndexTab}
   */
  this.gallery_index_tab = null;

  /**
   * @type {sagewest.component.GalleryDetailTab}
   */
  this.gallery_detail_tab = null;


  


  
  
  


};
goog.inherits(sagewest.page.Gallery, sagewest.page.Default);



// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for MICE
 * @const {object}
 */
sagewest.page.Gallery.DEFAULT = {

};



/**
 * @override
 * @inheritDoc
 */
sagewest.page.Gallery.prototype.init = function() {

  sagewest.page.Gallery.superClass_.init.call(this);


  $('body').addClass('preload-start');

  this.parse_data();


  this.gallery_index_tab = new sagewest.component.GalleryIndexTab({}, $('#page-gallery-index-tab'));
  this.gallery_index_tab.set_data_array(this.gallery_data_array);

  this.create_image_container();
  // goog.events.listen(this.gallery_index_tab, sagewest.component.GalleryIndexTab.EVENTNAME, function(){}.bind(this));
  
  
  this.gallery_detail_tab = new sagewest.component.GalleryDetailTab({}, $('#page-gallery-detail-tab'));
  // goog.events.listen(this.gallery_detail_tab, sagewest.component.GalleryDetailTab.EVENTNAME, function(){}.bind(this));
  




  this.update_page_layout();    // this is called after the initial create to update the layout

};






//     ____ ____  _____    _  _____ _____
//    / ___|  _ \| ____|  / \|_   _| ____|
//   | |   | |_) |  _|   / _ \ | | |  _|
//   | |___|  _ <| |___ / ___ \| | | |___
//    \____|_| \_\_____/_/   \_\_| |_____|
//


sagewest.page.Gallery.prototype.parse_data = function() {
  var arr = $('#page-gallery-data-item-container .page-gallery-data-item');
  var item = null;
  var data = null;


  var category = '';
  var id = '';


  for (var i = 0, l=arr.length; i < l; i++) {
    item = $(arr[i]);

    data = new sagewest.component.GalleryData({}, item);

    category = data.data_category;
    id = data.data_id;

    this.gallery_data_array[this.gallery_data_array.length] = data;



    // add to category dictionary
    if (goog.isDefAndNotNull(this.gallery_data_category_dictionary[category]) == false) {
      this.gallery_data_category_dictionary[category] = [];
    }

    var temp_index = this.gallery_data_category_dictionary[category].length;
    this.gallery_data_category_dictionary[category][temp_index] = data;



    // add to category id dictionary
    
    if (goog.isDefAndNotNull(this.gallery_data_category_id_dictionary[category]) == false) {
      this.gallery_data_category_id_dictionary[category] = [];
    }

    this.gallery_data_category_id_dictionary[category][id] = data;

  } // endfor
  
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//



sagewest.page.Gallery.prototype.show_detail_tab = function(){
  this.gallery_index_tab.animate_out();
  this.gallery_detail_tab.animate_in();

};

sagewest.page.Gallery.prototype.show_index_tab = function(){
  this.gallery_index_tab.animate_in();
  this.gallery_detail_tab.animate_out();

};

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
sagewest.page.Gallery.prototype.update_page_layout = function() {

  sagewest.page.Gallery.superClass_.update_page_layout.call(this);

  


};


/**
 * @override
 * @inheritDoc
 */
sagewest.page.Gallery.prototype.scroll_to_target = function(str_param, str_param_2, str_param_3) {
  sagewest.page.Gallery.superClass_.scroll_to_target.call(this, str_param, str_param_2, str_param_3);



  if (goog.isDefAndNotNull(str_param_2) == true) {

    
    this.show_detail_tab();
    this.gallery_detail_tab.set_category_and_id(str_param, str_param_2);


  } else {

    this.show_index_tab();
    this.gallery_index_tab.set_category(str_param);
    // this.show_category(str_param);      // accepts null & '', displays all

  }

  this.update_page_layout();

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
sagewest.page.Gallery.prototype.on_scroll_to_no_target = function(){

  // Mice venue landing
  /*
  if(manic.IS_MOBILE == true && this.is_mice_venue_landing == true){
    // console.log('go home!!');
    this.mice_landing_mobile_both_close();
  }
  */

};


//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//



//    _   _ _____ ___ _
//   | | | |_   _|_ _| |
//   | | | | | |  | || |
//   | |_| | | |  | || |___
//    \___/  |_| |___|_____|
//


goog.exportSymbol('sagewest.page.Gallery', sagewest.page.Gallery);
