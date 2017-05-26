
goog.provide('sagewest.component.ReviewContent');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');


goog.require('manic.ui.Dropdown');




/**
 * The CLASSNAME constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
sagewest.component.ReviewContent = function(options, element) {

  goog.events.EventTarget.call(this);
  this.options = $.extend({}, sagewest.component.ReviewContent.DEFAULT, options);
  this.element = element;

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //


  /**
   * @type {manic.ui.Dropdown}
   */
  this.language_dropdown = null;

  /**
   * @type {manic.ui.Dropdown}
   */
  this.travel_type_dropdown = null;
  

  this.current_language = 'all';
  this.current_travel_type = 'all';

  /**
   * @type {jQuery}
   */
  this.item_elements = null;

  this.item_array = [];
  this.language_array = [];         // just so that it performs faster
  this.travel_type_array = [];


  this.item_visible_array = [];

  // PAGINATION VARIABLES
  
  this.current_page = -1;
  this.current_max_page = 0;







  // MOBILE VARIABLES
  
  this.body_element = $('body');
  this.is_filter_mobile_open = false;


  this.filter_title_mobile = null;
  this.filter_title_copy_mobile = null;
  this.filter_expand_container_mobile = null;
  this.filter_cancel_btn_mobile = null;
  this.filter_apply_btn_mobile = null;


  /**
   * @type {manic.ui.Dropdown}
   */
  this.language_dropdown_mobile = null;

  /**
   * @type {manic.ui.Dropdown}
   */
  this.travel_type_dropdown_mobile = null;


  




  this.create_items();
  this.create_dropdown();
  this.create_pagination();
  this.create_mobile_filter();


  this.update_item_list();
  this.update_pagination_layout();

};
goog.inherits(sagewest.component.ReviewContent, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for CLASSNAME
 * @const {object}
 */
sagewest.component.ReviewContent.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
sagewest.component.ReviewContent.ON_UPDATE_PAGINATION = 'on_update_pagination';

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
sagewest.component.ReviewContent.ON_UPDATE_PAGE = 'on_update_page';



/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
sagewest.component.ReviewContent.ON_OPEN_FILTER = 'on_open_filter';
/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
sagewest.component.ReviewContent.ON_CLOSE_FILTER = 'on_close_filter';





/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
sagewest.component.ReviewContent.ITEMS_IN_PAGE = 10;

// sagewest.component.ReviewContent.ITEMS_IN_PAGE = 5;


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


sagewest.component.ReviewContent.prototype.create_items = function() {


  this.item_elements = $('#page-reviews-item-container .page-reviews-item');

  var arr = $('#page-reviews-item-container .page-reviews-item');
  var item = null;
  var language = '';
  var travel_type = '';

  for (var i = 0, l=arr.length; i < l; i++) {
    item = $(arr[i]);
    this.item_array[i] = item;

    language = 'all';
    travel_type = 'all';


    if (goog.isDefAndNotNull(item.attr('data-language'))) {
      language = item.attr('data-language');
    }

    if (goog.isDefAndNotNull(item.attr('data-travel-type'))) {
      travel_type = item.attr('data-travel-type');
    }

    this.language_array[i] = language;
    this.travel_type_array[i] = travel_type;

  }

};

sagewest.component.ReviewContent.prototype.create_dropdown = function() {


  if ($('#page-review-language-dropdown').length != 0) {
    this.language_dropdown = $('#page-review-language-dropdown').data('manic.ui.Dropdown');
    goog.events.listen(this.language_dropdown, manic.ui.Dropdown.ON_CHANGE, this.on_language_dropdown_change.bind(this));


    // GET INITIAL VALUE
    if (this.language_dropdown.current_value == '') {
      this.current_language = 'all';
    } else {
      this.current_language = this.language_dropdown.current_value;
    }
  }
  
  if ($('#page-review-travel-type-dropdown').length != 0) {
    this.travel_type_dropdown = $('#page-review-travel-type-dropdown').data('manic.ui.Dropdown');
    goog.events.listen(this.travel_type_dropdown, manic.ui.Dropdown.ON_CHANGE, this.on_travel_type_dropdown_change.bind(this));

    // GET INITIAL VALUE
    if (this.travel_type_dropdown.current_value == '') {
      this.travel_type_dropdown.current_value = 'all';
    } else {
      this.current_travel_type = this.travel_type_dropdown.current_value;
    }
  }

  
  

};

sagewest.component.ReviewContent.prototype.create_pagination = function() {


  $('#page-reviews-pagination-prev-btn').click(function(event){
    this.prev_page();
  }.bind(this));

  $('#page-reviews-pagination-next-btn').click(function(event){
    this.next_page();
  }.bind(this));
  


  // http://api.jquery.com/live/
  // jQuery 1.7+
  
  $(document).on( "click", "#page-reviews-pagination ul li", function(event) {

    var target = $(event.currentTarget);
    var target_index = 0;

    if (goog.isDefAndNotNull(target.attr('data-index'))) {
      target_index = target.attr('data-index');
      target_index = parseInt(target_index);
    }

    // console.log('target_index: ' + target_index);

    this.goto_page(target_index);
    
    
  }.bind(this));

};

sagewest.component.ReviewContent.prototype.private_method_03 = function() {};
sagewest.component.ReviewContent.prototype.private_method_05 = function() {};
sagewest.component.ReviewContent.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
sagewest.component.ReviewContent.prototype.sample_method_calls = function() {
  sagewest.component.ReviewContent.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(sagewest.component.ReviewContent.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


sagewest.component.ReviewContent.prototype.update_item_list = function() {

  // console.log('update_item_list:');
  // console.log('this.current_language:' + this.current_language)
  // console.log('this.current_travel_type:' + this.current_travel_type)

  this.item_visible_array = [];

  var item = null;
  var language = '';
  var travel_type = '';

  var is_item_language = false;
  var is_item_travel_type = false;

  for (var i = 0, l=this.item_array.length; i < l; i++) {
    item = this.item_array[i];
    language = this.language_array[i];
    travel_type = this.travel_type_array[i];

    // language check
    is_item_language = false;
    if (this.current_language == 'all'){
      is_item_language = true; 
    } else if (this.current_language == language) {
      is_item_language = true; 
    }

    // travel type check
    is_item_travel_type = false;
    if (this.current_travel_type == 'all') {
      is_item_travel_type = true;
    } else if (this.current_travel_type == travel_type) {
      is_item_travel_type = true;
    }


    // bool
    if (is_item_language == true && 
        is_item_travel_type == true) {

      this.item_visible_array[this.item_visible_array.length] = item;

    }

  } // end for




  if (this.item_visible_array.length == 0) {
    $('#page-reviews-no-reviews').addClass('visible-version');
  } else {
    $('#page-reviews-no-reviews').removeClass('visible-version');
  }



};
sagewest.component.ReviewContent.prototype.update_pagination_layout = function() {

  if(manic.IS_MOBILE == true) {

    // MOBILE
    
    // console.log('did i get here');
    $('#page-reviews-pagination').addClass('hidden-version');   // always hidden :))
    this.show_all();



  } else {


    // DESKTOP

    this.current_max_page = Math.ceil(this.item_visible_array.length / sagewest.component.ReviewContent.ITEMS_IN_PAGE);

    $('#page-reviews-pagination ul').empty();


    var page_item = null;
    var page_number = 0;

    for (var i = 0, l=this.current_max_page; i < l; i++) {
      page_number = (i + 1);
      page_item = $('<li data-index="' + i + '">' + page_number + '</li>');
      $('#page-reviews-pagination ul').append(page_item);
    }

    // don't show pagination on 1 or 0
    if (this.current_max_page <= 1) {

      $('#page-reviews-pagination').addClass('hidden-version');

    } else {

      $('#page-reviews-pagination').removeClass('hidden-version');

    }

    this.goto_page(0);

  }



  this.dispatchEvent(new goog.events.Event(sagewest.component.ReviewContent.ON_UPDATE_PAGINATION));




};




//    ____   _    ____ ___ _   _    _  _____ ___ ___  _   _
//   |  _ \ / \  / ___|_ _| \ | |  / \|_   _|_ _/ _ \| \ | |
//   | |_) / _ \| |  _ | ||  \| | / _ \ | |  | | | | |  \| |
//   |  __/ ___ \ |_| || || |\  |/ ___ \| |  | | |_| | |\  |
//   |_| /_/   \_\____|___|_| \_/_/   \_\_| |___\___/|_| \_|
//

sagewest.component.ReviewContent.prototype.prev_page = function() {

  var target_index = this.current_page - 1;
  // target_index = target_index < 0 ? 0 : target_index;

  if (target_index >= 0) {
    this.goto_page(target_index);
  }
  

  

  

  
};

sagewest.component.ReviewContent.prototype.next_page = function() {

  var target_index = this.current_page + 1;
  // target_index = target_index > (this.current_max_page - 1) ? (this.current_max_page - 1) : target_index;
  
  if (target_index <= (this.current_max_page - 1)) {
    this.goto_page(target_index);
  }

  

};

sagewest.component.ReviewContent.prototype.goto_page = function(num_param) {

  if (goog.isDefAndNotNull(num_param) && 
      num_param >= 0) {

    // console.log('goto_page: ' + num_param);

    this.current_page = num_param;


    var min_index = this.current_page * sagewest.component.ReviewContent.ITEMS_IN_PAGE;
    var max_index = (this.current_page + 1) * sagewest.component.ReviewContent.ITEMS_IN_PAGE;
    

    this.item_elements.css({
      'display': 'none'
    });
    
    var item = null;
    for (var i = 0, l=this.item_visible_array.length; i < l; i++) {
      item = this.item_visible_array[i];

      if (min_index <= i && i < max_index) {
        item.css({
          'display': 'block'
        });
      }

    } // end for




    // highlight pagination
    
    $('#page-reviews-pagination ul li').removeClass('selected');
    $('#page-reviews-pagination ul li:nth-child(' + (this.current_page + 1) + ')').addClass('selected');



    this.dispatchEvent(new goog.events.Event(sagewest.component.ReviewContent.ON_UPDATE_PAGE));
  }
};

sagewest.component.ReviewContent.prototype.show_all = function(){

  this.item_elements.css({
    'display': 'none'
  });
  
  var item = null;
  for (var i = 0, l=this.item_visible_array.length; i < l; i++) {
    item = this.item_visible_array[i];
    item.css({
      'display': 'block'
    });

  } // end for

  this.dispatchEvent(new goog.events.Event(sagewest.component.ReviewContent.ON_UPDATE_PAGE));
};




//    __  __  ___  ____ ___ _     _____   _____ ___ _   _____ _____ ____
//   |  \/  |/ _ \| __ )_ _| |   | ____| |  ___|_ _| | |_   _| ____|  _ \
//   | |\/| | | | |  _ \| || |   |  _|   | |_   | || |   | | |  _| | |_) |
//   | |  | | |_| | |_) | || |___| |___  |  _|  | || |___| | | |___|  _ <
//   |_|  |_|\___/|____/___|_____|_____| |_|   |___|_____|_| |_____|_| \_\
//


sagewest.component.ReviewContent.prototype.create_mobile_filter = function() {



  if ($('#page-review-language-dropdown-mobile').length != 0) {
    this.language_dropdown_mobile = $('#page-review-language-dropdown-mobile').data('manic.ui.Dropdown');
    goog.events.listen(this.language_dropdown_mobile, manic.ui.Dropdown.ON_CHANGE, this.on_language_dropdown_mobile_change.bind(this));
  }
  
  if ($('#page-review-travel-type-dropdown-mobile').length != 0) {
    this.travel_type_dropdown_mobile = $('#page-review-travel-type-dropdown-mobile').data('manic.ui.Dropdown');
    goog.events.listen(this.travel_type_dropdown_mobile, manic.ui.Dropdown.ON_CHANGE, this.on_travel_type_dropdown_mobile_change.bind(this));  
  }

  // this.filter_title_mobile = this.element.find('#page-reviews-filter-title-mobile');
  this.filter_title_mobile = this.element.find('#page-reviews-filter-mobile');

  this.filter_title_copy_mobile = this.element.find('#page-reviews-filter-title-mobile i');
  this.filter_expand_container_mobile = this.element.find('#page-reviews-filter-expanded-container-mobile');
  this.filter_cancel_btn_mobile = this.element.find('#page-review-filter-cancel-btn');
  this.filter_apply_btn_mobile = this.element.find('#page-review-filter-apply-btn');

  this.filter_title_mobile.click(function(event){

    event.preventDefault();

    if (this.is_filter_mobile_open==true) {

      this.reset_filter_mobile();
      this.close_filter_mobile();

    } else {
      this.open_filter_mobile();
    }

  }.bind(this));



  this.filter_cancel_btn_mobile.click(function(event){

    event.preventDefault();
    this.reset_filter_mobile();
    this.close_filter_mobile();

  }.bind(this));

  this.filter_apply_btn_mobile.click(function(event){

    event.preventDefault();
    this.apply_filter_mobile();
    this.close_filter_mobile();

  }.bind(this));

};


sagewest.component.ReviewContent.prototype.open_filter_mobile = function() {

  if (this.is_filter_mobile_open == false) {
    this.is_filter_mobile_open = true;

    this.body_element.addClass('review-page-filter-mobile-open-version');

    this.dispatchEvent(new goog.events.Event(sagewest.component.ReviewContent.ON_OPEN_FILTER));

  }

};
sagewest.component.ReviewContent.prototype.close_filter_mobile = function() {

  if (this.is_filter_mobile_open == true) {
    this.is_filter_mobile_open = false;

    this.body_element.removeClass('review-page-filter-mobile-open-version');

    this.dispatchEvent(new goog.events.Event(sagewest.component.ReviewContent.ON_CLOSE_FILTER));

  }

};


sagewest.component.ReviewContent.prototype.reset_filter_mobile = function() {


  this.language_dropdown_mobile.set_value(this.current_language);
  this.travel_type_dropdown_mobile.set_value(this.current_travel_type);
};





sagewest.component.ReviewContent.prototype.apply_filter_mobile = function() {

  this.current_language = this.language_dropdown_mobile.current_value;
  if (this.language_dropdown_mobile.current_value == '') {
    this.current_language = 'all';
  }

  this.current_travel_type = this.travel_type_dropdown_mobile.current_value;
  if (this.travel_type_dropdown_mobile.current_value == '') {
    this.travel_type_dropdown_mobile.current_value = 'all';
  }


  // All languages, All travel types
  var filter_title_str = '';

  var language_label_str = $('#page-review-language-select-mobile option[value="' +  this.current_language + '"]').text();
  var travel_type_label_str = $('#page-review-travel-type-select-mobile option[value="' + this.current_travel_type + '"]').text();
  
  
  language_label_str = this.current_language == 'all' ? 'All languages' : language_label_str;
  travel_type_label_str = this.current_travel_type == 'all' ? 'All travel types' : travel_type_label_str;
  
  filter_title_str = language_label_str + ', ' + travel_type_label_str;


  this.filter_title_copy_mobile.html(filter_title_str);


  this.update_item_list();
  this.update_pagination_layout();

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
sagewest.component.ReviewContent.prototype.on_language_dropdown_change = function(event) {
  //console.log('on_language_dropdown_change: ' + this.language_dropdown.current_value);

  this.language_dropdown.element.removeClass('not-selected-version');
  

  if (this.current_language != this.language_dropdown.current_value) {
    this.current_language = this.language_dropdown.current_value;

    if (this.language_dropdown.current_value == '') {
      this.current_language = 'all';
    }

    this.update_item_list();
    this.update_pagination_layout();

  }

};

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.ReviewContent.prototype.on_travel_type_dropdown_change = function(event) {
  //console.log('on_travel_type_dropdown_change: ' + this.travel_type_dropdown.current_value);
  
  this.travel_type_dropdown.element.removeClass('not-selected-version');

  if (this.current_travel_type != this.travel_type_dropdown.current_value) {
    
    this.current_travel_type = this.travel_type_dropdown.current_value;
    if (this.travel_type_dropdown.current_value == '') {
      this.travel_type_dropdown.current_value = 'all';
    }

    this.update_item_list();
    this.update_pagination_layout();
  }

};







/**
 * event handler
 * @param  {object} event
 */
sagewest.component.ReviewContent.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.ReviewContent.prototype.on_event_handler_04 = function(event) {
};



//    __  __  ___  ____ ___ _     _____   _______     _______ _   _ _____ ____
//   |  \/  |/ _ \| __ )_ _| |   | ____| | ____\ \   / / ____| \ | |_   _/ ___|
//   | |\/| | | | |  _ \| || |   |  _|   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |  | | |_| | |_) | || |___| |___  | |___  \ V / | |___| |\  | | |  ___) |
//   |_|  |_|\___/|____/___|_____|_____| |_____|  \_/  |_____|_| \_| |_| |____/
//


/**
 * event handler
 * @param  {object} event
 */
sagewest.component.ReviewContent.prototype.on_language_dropdown_mobile_change = function(event) {
  //console.log('on_language_dropdown_mobile_change: ' + this.language_dropdown_mobile.current_value);

  this.language_dropdown_mobile.element.removeClass('not-selected-version');

  /*
  this.language_dropdown_mobile.element.removeClass('not-selected-version');
  
  if (this.current_language != this.language_dropdown_mobile.current_value) {
    this.current_language = this.language_dropdown_mobile.current_value;

    if (this.language_dropdown_mobile.current_value == '') {
      this.current_language = 'all';
    }

    this.update_item_list();
    this.update_pagination_layout();
  }
  */

};

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.ReviewContent.prototype.on_travel_type_dropdown_mobile_change = function(event) {
  //console.log('on_travel_type_dropdown_mobile_change: ' + this.travel_type_dropdown_mobile.current_value);
  
  this.travel_type_dropdown_mobile.element.removeClass('not-selected-version');

  /*
  this.travel_type_dropdown_mobile.element.removeClass('not-selected-version');

  if (this.current_travel_type != this.travel_type_dropdown_mobile.current_value) {
    
    this.current_travel_type = this.travel_type_dropdown_mobile.current_value;
    if (this.travel_type_dropdown_mobile.current_value == '') {
      this.travel_type_dropdown_mobile.current_value = 'all';
    }

    this.update_item_list();
    this.update_pagination_layout();
  }
  */

};