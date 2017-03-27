goog.provide('sagewest.page.Brand');
goog.require('sagewest.page.Default');


goog.require('manic.google.Map');

goog.require('sagewest.component.BrandLocationTitle');



/**
 * The MICE constructor
 * @inheritDoc
 * @constructor
 * @extends {sagewest.page.Default}
 */
sagewest.page.Brand = function(options, element) {
  sagewest.page.Default.call(this, options, element);
  this.options = $.extend(this.options, sagewest.page.Brand.DEFAULT, options);

  this.map = null;

  /**
   * @type {jQuery}
   */
  this.experience_carousel = null;

  /**
   * @type {manic.google.Map}
   */
  this.contact_map = null;


  /**
   * @type {sagewest.component.BrandLocationTitle}
   */
  this.brand_location_title = null;




};
goog.inherits(sagewest.page.Brand, sagewest.page.Default);



// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for MICE
 * @const {object}
 */
sagewest.page.Brand.DEFAULT = {

};



/**
 * @override
 * @inheritDoc
 */
sagewest.page.Brand.prototype.init = function() {

  sagewest.page.Brand.superClass_.init.call(this);

  this.create_experience_slider();
  this.create_contact_map();
  // this.create_instagram();
  
  this.others();
  this.map_initialize();

  this.creage_brand_slider();
  this.create_brand_location_title();


  this.update_page_layout();    // this is called after the initial create to update the layout

};






//     ____ ____  _____    _  _____ _____
//    / ___|  _ \| ____|  / \|_   _| ____|
//   | |   | |_) |  _|   / _ \ | | |  _|
//   | |___|  _ <| |___ / ___ \| | | |___
//    \____|_| \_\_____/_/   \_\_| |_____|
//







sagewest.page.Brand.prototype.creage_brand_slider = function(){


  if ($('#brand-all-location-slider-version-02').length != 0) {

    $('#brand-all-location-slider-version-02').on('init', function(event, slick){
      this.create_image_container();
    }.bind(this));
    $('#brand-all-location-slider-version-02').on('breakpoint init reInit setPosition', function(event, slick, breakpoint){
      this.update_page_layout();
    }.bind(this));


    this.home_brand_slider = $('#brand-all-location-slider-version-02').slick({
      'speed': 350,
      'dots': false,
      // 'arrows': true,
      'arrows': false,
      'infinite': true,
      'slidesToShow': 1,
      'slidesToScroll': 1,
      'pauseOnHover': true,
      'autoplay': true,
      'autoplaySpeed': 4000
    });

    
    $('#brand-all-location-slider-prev-btn').click(function(event){
      event.preventDefault();
      $('#brand-all-location-slider-version-02').slick('slickPrev');

    }.bind(this));

    $('#brand-all-location-slider-next-btn').click(function(event){
      event.preventDefault();
      $('#brand-all-location-slider-version-02').slick('slickNext');

    }.bind(this));


  } // if


  // MOBILE SLIDER
  
  if ($('#brand-all-location-slider-version-02-mobile').length != 0) {

    

    $('#brand-all-location-slider-version-02-mobile').on('init', function(event, slick){
      this.create_image_container();
    }.bind(this));
    $('#brand-all-location-slider-version-02-mobile').on('breakpoint init reInit setPosition', function(event, slick, breakpoint){
      this.update_page_layout();
    }.bind(this));

    this.home_brand_slider_mobile = $('#brand-all-location-slider-version-02-mobile').slick({
      'speed': 350,
      'dots': true,
      'arrows': false,
      'infinite': true,
      'slidesToShow': 1,
      'slidesToScroll': 1,
      'pauseOnHover': true,
      'autoplay': true,
      'autoplaySpeed': 4000
    });
  }



  if ($('#page-brand-promotion-slider-mobile').length != 0) {

    

    $('#page-brand-promotion-slider-mobile').on('init', function(event, slick){
      this.create_image_container();
    }.bind(this));
    $('#page-brand-promotion-slider-mobile').on('breakpoint init reInit setPosition', function(event, slick, breakpoint){
      this.update_page_layout();
    }.bind(this));

    this.home_brand_offers_slider_mobile = $('#page-brand-promotion-slider-mobile').slick({
      'speed': 350,
      'dots': true,
      'arrows': false,
      // 'infinite': true,
      'infinite': false,
      'slidesToShow': 2,
      'slidesToScroll': 2,
      'pauseOnHover': true,
      'autoplay': true,
      'autoplaySpeed': 4000,
      'responsive': [
        {
          'breakpoint': 767,
          'settings':{
            'slidesToShow': 1,
            'slidesToScroll': 1
          }
        }
      ]
    });
  }



};


sagewest.page.Brand.prototype.create_brand_location_title = function() {


  



  if($('#brand-location-page-title-section').length != 0){

    this.brand_location_title = new sagewest.component.BrandLocationTitle({}, $('#brand-location-page-title-section'));

    goog.events.listen(this.brand_location_title, sagewest.component.BrandLocationTitle.ON_CHANGE, this.on_brand_location_title_filter_change.bind(this) );

    this.on_brand_location_title_filter_change();

  }
  
};



sagewest.page.Brand.prototype.create_experience_slider = function(){

  

  this.experience_carousel = $('#home-experience-carousel').slick({
    'speed': 350,
    'dots': false,
    'arrows': false,
    'infinite': false,
    'slidesToShow': 1,
    'slidesToScroll': 1,
    'pauseOnHover': true,
    'autoplay': true,
    'autoplaySpeed': 4000
  });

};


sagewest.page.Brand.prototype.create_contact_map = function(){

  // this.contact_map = new manic.google.Map({
  //   'lat': -31.947952,
  //   'lng': 115.8386173,
  //   'has_scrollwheel': false,
  //   // 'has_scrollwheel': true,
  //   'zoom': 16,
  //   'google_style_array':
  //     [{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#d3d3d3"}]},{"featureType":"transit","stylers":[{"color":"#808080"},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#b3b3b3"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"weight":1.8}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#d7d7d7"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ebebeb"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#a7a7a7"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#efefef"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#696969"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#737373"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#d6d6d6"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#dadada"}]}]
  // }, $('#home-contact-map'));

  // this.contact_map.add_to_overlay($('#home-contact-map-overlay'));



};


sagewest.page.Brand.prototype.create_instagram = function(){



  this.instagram_feed = null;

  var instafeed_template = [

    
    '<a class="home-instagram-item" href="{{link}}" target="_blank" title="{{caption}}">',
      '<div class="manic-image-container">',
        '<img src="" data-image-desktop="{{image}}">',
      '</div>',
    '</a>'
  ].join('');


  this.instagram_feed = new Instafeed({
    'target': 'home-instagram-item-container',
    'get': 'user',

    /*
    'userId': 1651397887,
    'accessToken': '1651397887.1677ed0.ef9b91e8df964f34b1d9f6c6b54e6d28',
    */

    'userId': 2989036714,
    'accessToken': '2989036714.1677ed0.7bf2fb6621874f7fbd244ce3ccf92749',

    
    
    'template': instafeed_template,
    'before': this.on_before_instafeed_create_html.bind(this),
    'after': this.on_after_instafeed_create_html.bind(this),
    // 'limit': 24,            // this number can be smaller
    'limit': 6,
    'resolution': 'low_resolution'
  });
  this.instagram_feed.run();
};

sagewest.page.Brand.prototype.on_before_instafeed_create_html = function(){
  $('#home-instagram-item-container').empty();
};


sagewest.page.Brand.prototype.on_after_instafeed_create_html = function(){
  var arr = $('#home-instagram-item-container .manic-image-container');
  var image_container = null;
  var item = null;

  for (var i = 0, l=arr.length; i < l; i++) {
    item = $(arr[i]);
    image_container = new manic.ui.ImageContainer({
      'has_window_resize': false,                                // updated manually by 'update_page_layout'
      'scale_mode': 'best_fit_no_scale_down'
    }, item);
    this.manic_image_array[this.manic_image_array.length] = image_container;
  }

  this.update_page_layout();
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
sagewest.page.Brand.prototype.update_page_layout = function() {

  sagewest.page.Brand.superClass_.update_page_layout.call(this);


  this.window_width = this.window.width();
  this.window_height = this.window.height();

  /*
  // zoom check
  if (this.window_width <= 1280 && manic.IS_ACTUAL_MOBILE == false ||
      manic.IS_ACTUAL_MOBILE == true && manic.IS_TABLET_LANDSCAPE) {
    this.window_width *= 1.1111;
    this.window_height *= 1.1111;
  }
  */


};


/**
 * @override
 * @inheritDoc
 */
sagewest.page.Brand.prototype.scroll_to_target = function(str_param, str_param_2, str_param_3) {
  sagewest.page.Brand.superClass_.scroll_to_target.call(this, str_param);

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
sagewest.page.Brand.prototype.on_scroll_to_no_target = function(){

  // Mice venue landing
  /*
  if(manic.IS_MOBILE == true && this.is_mice_venue_landing == true){
    // console.log('go home!!');
    this.mice_landing_mobile_both_close();
  }
  */

};

sagewest.page.Brand.prototype.others = function(){  

    $('body').addClass('preload-start');

    $('#home-location-content-carousel').slick({
      dots: true,
      centerMode: true,
      centerPadding: '155px',
      slidesToShow: 1,
      prevArrow: '<a class="carousel-prev"><span></span></a>',
      nextArrow: '<a class="carousel-next"><span></span></a>',
      responsive: [
        {
          breakpoint: 5000,
          settings: "unslick"
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });

    $('#home-location-content-mobile-carousel').slick({
      dots: true,
      slidesToShow: 1,
      prevArrow: '<a class="carousel-prev"><span></span></a>',
      nextArrow: '<a class="carousel-next"><span></span></a>',
      responsive: [
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            slidesToShow: 1
          }
        }
      ]
    });

    $(".brand-location-link").on("click", function(e){
      e.preventDefault();
      var target = $(event.currentTarget);
      var id = target.attr('href');

      $(".active").removeClass("active");
      $(id).addClass("active");

      this.update_page_layout();

    }.bind(this));    

    /*
    $("#desktop-header-nav ul li a").on('click', function(e){
      e.preventDefault();

      var div = $(this).attr("href").substring(1);

      $('html, body').animate({
          scrollTop: $('*[data-value="'+div+'"]').offset().top
      }, 800);
    });
    */


    /*
    $(".tnc").on("click", function(e){
      e.preventDefault();
      $(this).closest('.flip-container').addClass("hover");
    });

    $(".back-to-offer").on("click", function(e){
      e.preventDefault();
      $(this).closest('.flip-container').removeClass("hover");
    });
    */

    function myScroller()  {
        var scrollPos = $(window).scrollTop();
        
        if( ( scrollPos != 0 ) ) {
            $("#desktop-menu-bar").removeClass('open');                        
            $("body").addClass('scrolled');            
            if(scrolled==false && initialLoad==false) {                
                scrolled = true;               
            }
                
        }       
        else if( ( scrollPos === 0 ) ) {
            scrolled = false;
            $("#desktop-menu-bar").addClass('open');
            $("body").removeClass('scrolled');            
            // $('#header-wrapper').removeClass('shadow');
            // $('.arrow').show();
        }
    }

    var initialLoad = true;
    // home page first scroll
    var scrolled = false;
    $(window).on('scroll', function() {
       myScroller();
    });

    myScroller();

    // var count;
    // var interval;

    // $( '.scroller' ).on( 'mousewheel DOMMouseScroll', function ( e ) {
    //     var e0 = e.originalEvent,
    //         delta = e0.wheelDelta || -e0.detail;

    //     this.scrollTop += ( delta < 0 ? 1 : -1 ) * 5;
    //     e.preventDefault();
    // });

    $(document).on('DOMMouseScroll mousewheel', '.scroller', function(ev) {
      var $this = $(this),
          scrollTop = this.scrollTop,
          scrollHeight = this.scrollHeight,
          height = $this.innerHeight(),
          delta = (ev.type == 'DOMMouseScroll' ?
              ev.originalEvent.detail * -40 :
              ev.originalEvent.wheelDelta),
          up = delta > 0;

      var prevent = function() {
          ev.stopPropagation();
          ev.preventDefault();
          ev.returnValue = false;
          return false;
      }

      if (!up && -delta > scrollHeight - height - scrollTop) {
          // Scrolling down, but this will take us past the bottom.
          $this.scrollTop(scrollHeight);
          return prevent();
      } else if (up && delta > scrollTop) {
          // Scrolling up, but this will take us past the top.
          // $this.scrollTop(0);
          return prevent();
      }
  });

};


//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//



/**
 * @param  {Object} event
 */
sagewest.page.Brand.prototype.on_brand_location_title_filter_change = function(event){

  
  console.log('on_brand_location_title_filter_change');

  console.log(this.brand_location_title.current_country);
  console.log(this.brand_location_title.current_territory);
  console.log(this.brand_location_title.current_city);

  /*
  this.brand_location_title.current_country = 'none';
  this.brand_location_title.current_territory = 'none';
  this.brand_location_title.current_city = 'none';
  */

  var arr = $('#brand-location-page-item-container .brand-location-page-item');
  var item = null;

  // arr.removeClass('invisible-version');


  var country = '';
  var territory = '';
  var city = '';

  for (var i = 0, l=arr.length; i < l; i++) {
    item = $(arr[i]);
    
    country = item.attr('data-country');
    territory = item.attr('data-territory');
    city = item.attr('data-city');


    if(this.brand_location_title.current_country == 'none'){
      item.show(0);

    } else if(this.brand_location_title.current_country == country) {

      if (this.brand_location_title.current_territory == 'none'){
        item.show(0);

      } else if(this.brand_location_title.current_territory == territory) {

        if (this.brand_location_title.current_city == 'none') {
          item.show(0);
        } else if (this.brand_location_title.current_city == city) {
          item.show(0);
        } else {
          item.hide(0);
        }

      } else {
        item.hide(0);
      }

    } else {
      item.hide(0);
    }

  }


  this.update_page_layout();


};


//    _   _ _____ ___ _
//   | | | |_   _|_ _| |
//   | | | | | |  | || |
//   | |_| | | |  | || |___
//    \___/  |_| |___|_____|
//


goog.exportSymbol('sagewest.page.Brand', sagewest.page.Brand);
