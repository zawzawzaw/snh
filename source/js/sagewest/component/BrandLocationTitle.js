

goog.provide('sagewest.component.BrandLocationTitle');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The BrandLocationTitle constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
sagewest.component.BrandLocationTitle = function(options, element) {
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, sagewest.component.BrandLocationTitle.DEFAULT, options);
  this.element = element;

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //


  this.data_array = [];
  this.data_container = this.element.find('#brand-location-page-filter-data-item-container');

  this.current_country = 'none';
  this.current_territory = 'none';
  this.current_city = 'none';


  this.initial_country = '';
  this.initial_territory = '';
  this.initial_city = '';

  if (goog.isDefAndNotNull($('#brand-location-page-filter-container').attr('data-selected-country')) == true) {
    this.initial_country = $('#brand-location-page-filter-container').attr('data-selected-country');
  }

  if (goog.isDefAndNotNull($('#brand-location-page-filter-container').attr('data-selected-territory')) == true) {
    this.initial_territory = $('#brand-location-page-filter-container').attr('data-selected-territory');
  }

  if (goog.isDefAndNotNull($('#brand-location-page-filter-container').attr('data-selected-city')) == true) {
    this.initial_city = $('#brand-location-page-filter-container').attr('data-selected-city');
  }
    
  
  
  



  

  /**
   * @type {manic.ui.Dropdown}
   */
  this.country_dropdown = null;

  /**
   * @type {manic.ui.Dropdown}
   */
  this.territory_dropdown = null;

  /**
   * @type {manic.ui.Dropdown}
   */
  this.city_dropdown = null;



  this.parse_data();
  this.create_dropdown();

  

  console.log('init');
};
goog.inherits(sagewest.component.BrandLocationTitle, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for BrandLocationTitle
 * @const {object}
 */
sagewest.component.BrandLocationTitle.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * BrandLocationTitle Event Constant
 * @const
 * @type {string}
 */
sagewest.component.BrandLocationTitle.ON_CHANGE = 'on_change';

/**
 * BrandLocationTitle Event Constant
 * @const
 * @type {string}
 */
sagewest.component.BrandLocationTitle.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


sagewest.component.BrandLocationTitle.prototype.parse_data = function() {

  var arr = this.data_container.find('.brand-location-page-filter-data-item');
  var item = null;

  var country = '';
  var territory = '';
  var city = '';

  // <div class="brand-location-page-filter-data-item" data-country="Australia" data-territory="South Australia" data-city="Adelaide"></div>

  for (var i = 0, l=arr.length; i < l; i++) {
    item = $(arr[i]);
    country = item.attr('data-country');
    territory = item.attr('data-territory');
    city = item.attr('data-city');

    // add to country
    if (goog.isDefAndNotNull(this.data_array[country]) == false) {
      this.data_array[country] = [];
    }

    // add to territory
    if (goog.isDefAndNotNull(this.data_array[country][territory]) == false) {
      this.data_array[country][territory] = [];
    }

    // add to city
    this.data_array[country][territory][this.data_array[country][territory].length] = city;
  }

  console.log('this.data_array');
  console.log(this.data_array);

};
sagewest.component.BrandLocationTitle.prototype.create_dropdown = function() {

  this.country_dropdown = $('#brand-location-country-dropdown').data('manic.ui.Dropdown');
  goog.events.listen(this.country_dropdown, manic.ui.Dropdown.ON_CHANGE, this.on_country_dropdown_change.bind(this));
  
  this.territory_dropdown = $('#brand-location-territory-dropdown').data('manic.ui.Dropdown');
  goog.events.listen(this.territory_dropdown, manic.ui.Dropdown.ON_CHANGE, this.on_territory_dropdown_change.bind(this));

  this.city_dropdown = $('#brand-location-city-dropdown').data('manic.ui.Dropdown');
  goog.events.listen(this.city_dropdown, manic.ui.Dropdown.ON_CHANGE, this.on_city_dropdown_change.bind(this));

  // create country

  var country = '';
  
  var country_array = [];
  country_array[0] = {
    'label': 'Please Select',
    'value': ''
  };
  for( var i in this.data_array) {
    country = '' + i;
    country_array[country_array.length] = {
      'label': country,
      'value': country
    }
    
  }
  this.country_dropdown.set_option_array(country_array);


  // select
  
  if (this.initial_country != '') {
    this.set_country(this.initial_country);
    this.country_dropdown.set_value(this.initial_country);


    if (this.initial_territory != '') {
      this.set_territory(this.initial_territory);
      this.territory_dropdown.set_value(this.initial_territory);


      if (this.initial_city != '') {
        this.city_dropdown.set_value(this.initial_city);
      } else {
        this.set_no_city();
      }

    } else {
      this.set_no_territory();
    }

  } else {
    this.set_no_country();
  }



  





  





};
sagewest.component.BrandLocationTitle.prototype.private_method_03 = function() {};
sagewest.component.BrandLocationTitle.prototype.private_method_04 = function() {};
sagewest.component.BrandLocationTitle.prototype.private_method_05 = function() {};
sagewest.component.BrandLocationTitle.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
sagewest.component.BrandLocationTitle.prototype.sample_method_calls = function() {
  sagewest.component.BrandLocationTitle.superClass_.method_02.call(this);                                    // call is important
  
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


sagewest.component.BrandLocationTitle.prototype.public_method_01 = function() {};


/**
 * @param {String} country_param [description]
 */
sagewest.component.BrandLocationTitle.prototype.set_country = function(country_param) {

  if (country_param != '' &&
      goog.isDefAndNotNull(this.data_array[country_param]) ) {

    this.current_country = country_param;
    this.current_territory = 'none';
    this.current_city = 'none';

    this.territory_dropdown.set_enabled();
    this.city_dropdown.set_enabled();

    var territory_array = [];
    territory_array[0] = {
      'label': 'Please Select',
      'value': ''
    };

    var territory = '';

    for( var i in this.data_array[this.current_country]) {
      territory = '' + i;
      territory_array[territory_array.length] = {
        'label': territory,
        'value': territory
      }
    }
    
    this.territory_dropdown.set_option_array(territory_array);

    this.dispatchEvent(new goog.events.Event(sagewest.component.BrandLocationTitle.ON_CHANGE));

  } else {

    this.set_no_country();
  }
};

/**
 * @param {String} territory_param
 */
sagewest.component.BrandLocationTitle.prototype.set_territory = function(territory_param) {
  
  if (territory_param != '' && 
      goog.isDefAndNotNull(this.data_array[this.current_country][territory_param]) ) {

    this.current_territory = territory_param;
    this.current_city = 'none';

    this.city_dropdown.set_enabled();

    var city_array = [];
    city_array[0] = {
      'label': 'Please Select',
      'value': ''
    };

    var city = '';

    for (var i = 0, l = this.data_array[this.current_country][this.current_territory].length; i < l; i++) {
      city = this.data_array[this.current_country][this.current_territory][i];
      city_array[city_array.length] = {
        'label': city,
        'value': city
      }
    }
    
    this.city_dropdown.set_option_array(city_array);

    this.dispatchEvent(new goog.events.Event(sagewest.component.BrandLocationTitle.ON_CHANGE));

  } else {
    this.set_no_territory();
  }
};


sagewest.component.BrandLocationTitle.prototype.set_city = function(city_param) {

  /*
  if (city_param != '' && 
      goog.isDefAndNotNull(this.data_array[this.current_country][this.current_territory][city_param]) ) {

    this.current_city = city_param;

    this.dispatchEvent(new goog.events.Event(sagewest.component.BrandLocationTitle.ON_CHANGE));

  } else {
    this.set_no_city();
  }
  */
  if (city_param != ''){
    this.current_city = city_param;
    this.dispatchEvent(new goog.events.Event(sagewest.component.BrandLocationTitle.ON_CHANGE));

  } else {
    this.set_no_city();

  }
};




//    _   _  ___   __     ___    _    _   _ _____
//   | \ | |/ _ \  \ \   / / \  | |  | | | | ____|
//   |  \| | | | |  \ \ / / _ \ | |  | | | |  _|
//   | |\  | |_| |   \ V / ___ \| |__| |_| | |___
//   |_| \_|\___/     \_/_/   \_\_____\___/|_____|
//

sagewest.component.BrandLocationTitle.prototype.set_no_country = function() {
  console.log('set_no_country');
  this.territory_dropdown.set_value('');
  this.territory_dropdown.set_disabled();
  this.city_dropdown.set_value('');
  this.city_dropdown.set_disabled();

  this.current_country = 'none';
  this.current_territory = 'none';
  this.current_city = 'none';
};
sagewest.component.BrandLocationTitle.prototype.set_no_territory = function() {
  console.log('set_no_territory');
  this.city_dropdown.set_value('');
  this.city_dropdown.set_disabled();

  this.current_territory = 'none';
  this.current_city = 'none';
};
sagewest.component.BrandLocationTitle.prototype.set_no_city = function() {
  console.log('set_no_city'); // do nothing :D
  this.current_city = 'none';
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
sagewest.component.BrandLocationTitle.prototype.on_country_dropdown_change = function(event) {
  console.log('on_country_dropdown_change: ' + this.country_dropdown.current_value);

  this.set_country(this.country_dropdown.current_value);
  /*
  if (this.country_dropdown.current_value == '') {
    this.set_no_country();
  } else {
    this.set_country(this.country_dropdown.current_value);
  }
  */

  
};

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.BrandLocationTitle.prototype.on_territory_dropdown_change = function(event) {
  console.log('on_territory_dropdown_change: ' + this.territory_dropdown.current_value)

  this.set_territory(this.territory_dropdown.current_value);
  /*
  if (this.territory_dropdown.current_value == '') {
    this.set_no_territory();
  } else {
    this.set_territory(this.territory_dropdown.current_value);
  }
  */
  
};

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.BrandLocationTitle.prototype.on_city_dropdown_change = function(event) {
  console.log('on_city_dropdown_change: ' + this.city_dropdown.current_value);

  this.set_city(this.city_dropdown.current_value);
  /*
  if (this.city_dropdown.current_value == '') {
    this.set_no_city();
  } else {
    this.set_city(this.city_dropdown.current_value);
  }
  */
  
};

/**
 * event handler
 * @param  {object} event
 */
sagewest.component.BrandLocationTitle.prototype.on_event_handler_04 = function(event) {
};

