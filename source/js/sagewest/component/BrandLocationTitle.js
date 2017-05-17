

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
  this.link_data_array = [];

  this.country_name_dictionary = [];
  this.territory_name_dictionary = [];
  this.city_name_dictionary = [];


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

  // this.set_no_country();


  

  // console.log('init');
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

  var country_link = '';
  var territory_link = '';
  var city_link = '';

  // var replaced = str.split(' ').join('+');



  // <div class="brand-location-page-filter-data-item" data-country="Australia" data-territory="South Australia" data-city="Adelaide"></div>

  for (var i = 0, l=arr.length; i < l; i++) {
    item = $(arr[i]);
    country = item.attr('data-country');
    territory = item.attr('data-territory');
    city = item.attr('data-city');

    country_link = country.toLowerCase().split(' ').join('-');
    territory_link = territory.toLowerCase().split(' ').join('-');
    city_link = city.toLowerCase().split(' ').join('-');

    this.country_name_dictionary[country_link] = country;
    this.territory_name_dictionary[territory_link] = territory;
    this.city_name_dictionary[city_link] = city_link;


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


    // link version

    // add to country
    if (goog.isDefAndNotNull(this.link_data_array[country_link]) == false) {
      this.link_data_array[country_link] = [];
    }

    // add to territory
    if (goog.isDefAndNotNull(this.link_data_array[country_link][territory_link]) == false) {
      this.link_data_array[country_link][territory_link] = [];
    }

    // add to city
    this.link_data_array[country_link][territory_link][this.link_data_array[country_link][territory_link].length] = city_link;


  }

  // console.log('this.data_array');
  // console.log(this.data_array);
  // console.log('this.link_data_array');
  // console.log(this.link_data_array);

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
    'label': 'Select Country',
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



  
  // select initial
  
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



/**
 * @param  {String} param_country
 * @param  {String} param_territory
 * @param  {String} param_city
 */
sagewest.component.BrandLocationTitle.prototype.select_title = function(param_country, param_territory, param_city) {

  var is_valid_country = this.check_country(param_country);
  var is_valid_territory = this.check_territory(param_country, param_territory);
  var is_valid_city = this.check_city(param_country, param_territory, param_city);


  
  var target_country_str = '';
  var target_territory_str = '';
  var target_city_str = '';


  if (is_valid_country) {
    target_country_str = this.country_name_dictionary[param_country];
  }
  if (is_valid_territory) {
    target_territory_str = this.territory_name_dictionary[param_territory];
  }
  if (is_valid_city) {
    target_city_str = this.city_name_dictionary[param_city];
  }



  // console.log('param_country:' + param_country);
  // console.log('param_territory:' + param_territory);
  // console.log('param_city:' + param_city);
  // console.log('is_valid_country: ' + is_valid_country);
  // console.log('is_valid_territory: ' + is_valid_territory);
  // console.log('is_valid_city: ' + is_valid_city);
  // console.log('target_country_str: ' + target_country_str);
  // console.log('target_territory_str: ' + target_territory_str);
  // console.log('target_city_str: ' + target_city_str);

    

  


  if (param_country != '' && is_valid_country == true) {
    this.set_country(target_country_str);
    this.country_dropdown.set_value(target_country_str);


    if (param_territory != '' && is_valid_territory == true) {
      this.set_territory(target_territory_str);
      this.territory_dropdown.set_value(target_territory_str);


      if (param_city != '' && is_valid_city == true) {
        this.city_dropdown.set_value(target_city_str);
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


//     ____ _   _ _____ ____ _  __
//    / ___| | | | ____/ ___| |/ /
//   | |   | |_| |  _|| |   | ' /
//   | |___|  _  | |__| |___| . \
//    \____|_| |_|_____\____|_|\_\
//

/**
 * @param  {String} param_country
 * @return {Boolean}
 */
sagewest.component.BrandLocationTitle.prototype.check_country = function(param_country) {
  if (goog.isDefAndNotNull(param_country) == false) {
    return false;
  }


  if (goog.isDefAndNotNull(this.link_data_array[param_country]) == false) {
    return false;
  }

  return true;
  
};

/**
 * @param  {String} param_country   [description]
 * @param  {String} param_territory [description]
 * @return {Boolean}                 [description]
 */
sagewest.component.BrandLocationTitle.prototype.check_territory = function(param_country, param_territory) {
  if (goog.isDefAndNotNull(param_country) == false) {
    return false;
  }
  if (goog.isDefAndNotNull(param_territory) == false) {
    return false;
  }

  if (goog.isDefAndNotNull(this.link_data_array[param_country]) == false) {
    return false;
  }
  if (goog.isDefAndNotNull(this.link_data_array[param_country][param_territory]) == false) {
    return false;
  }

  return true;

};


/**
 * @param  {String} param_country   [description]
 * @param  {String} param_territory [description]
 * @param  {String} param_city      [description]
 * @return {Boolean}                 [description]
 */
sagewest.component.BrandLocationTitle.prototype.check_city = function(param_country, param_territory, param_city) {

  if (goog.isDefAndNotNull(param_country) == false) {
    return false;
  }
  if (goog.isDefAndNotNull(param_territory) == false) {
    return false;
  }
  if (goog.isDefAndNotNull(param_city) == false) {
    return false;
  }

  if (goog.isDefAndNotNull(this.link_data_array[param_country]) == false) {
    return false;
  }
  if (goog.isDefAndNotNull(this.link_data_array[param_country][param_territory]) == false) {
    return false;
  }
  if (this.link_data_array[param_country][param_territory].indexOf(param_city) != -1) {
    return false;
  }

  return true;

  



};


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
      'label': 'Select Territory',
      'value': ''
    };

    // var territory = '';

    // for( var i in this.data_array[this.current_country]) {      
    //   territory = '' + i;
    //   territory_array[territory_array.length] = {
    //     'label': territory,
    //     'value': territory
    //   }
    // }

    var keys = [];
    for( var key in this.data_array[this.current_country]) {      
      keys.push(key);
    }

    keys.sort();

    for (var i = 0; i < keys.length; i++) {
      var territory = keys[i];
      territory_array.push({
        'label': territory,
        'value': territory
      });
    }
    
    this.territory_dropdown.set_option_array(territory_array);

    // skipping territory
    if(this.current_country=="Thailand" || this.current_country=="Laos") {
      this.territory_dropdown.set_disabled();
      this.set_territory(this.current_country);
    }else {
      this.set_no_territory();
    }

    this.country_dropdown.element.removeClass('not-selected-version');

    this.dispatchEvent(new goog.events.Event(sagewest.component.BrandLocationTitle.ON_CHANGE));

  } else {
    // console.log("set_no_country");
    this.set_no_country();

    this.dispatchEvent(new goog.events.Event(sagewest.component.BrandLocationTitle.ON_CHANGE));
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

    // if(this.current_territory=="Bangkok" || this.current_territory=="Luang Prabang")
    //   this.city_dropdown.set_disabled();

    var city_array = [];
    city_array[0] = {
      'label': 'Select City',
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

    // if only one city select it as default
    if(this.data_array[this.current_country][this.current_territory].length == 1) {
      this.set_city(city);
      this.city_dropdown.set_value(city);
    }

    this.territory_dropdown.element.removeClass('not-selected-version');

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

    this.city_dropdown.element.removeClass('not-selected-version');

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
  // console.log('set_no_country');
  this.territory_dropdown.set_value('');
  this.territory_dropdown.set_disabled();
  this.city_dropdown.set_value('');
  this.city_dropdown.set_disabled();

  this.current_country = 'none';
  this.current_territory = 'none';
  this.current_city = 'none';


  this.country_dropdown.element.addClass('not-selected-version');
  this.territory_dropdown.element.addClass('not-selected-version');
  this.city_dropdown.element.addClass('not-selected-version');

  
};
sagewest.component.BrandLocationTitle.prototype.set_no_territory = function() {
  // console.log('set_no_territory');
  this.city_dropdown.set_value('');
  this.city_dropdown.set_disabled();

  this.current_territory = 'none';
  this.current_city = 'none';

  this.territory_dropdown.element.addClass('not-selected-version');
  this.city_dropdown.element.addClass('not-selected-version');
};
sagewest.component.BrandLocationTitle.prototype.set_no_city = function() {
  // console.log('set_no_city'); // do nothing :D
  this.current_city = 'none';

  this.city_dropdown.element.addClass('not-selected-version');
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
  // console.log('on_country_dropdown_change: ' + this.country_dropdown.current_value);

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
  // console.log('on_territory_dropdown_change: ' + this.territory_dropdown.current_value)

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
  // console.log('on_city_dropdown_change: ' + this.city_dropdown.current_value);

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

