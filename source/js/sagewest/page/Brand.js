goog.provide('sagewest.page.Brand');
goog.require('sagewest.page.Default');


goog.require('manic.google.Map');



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

  this.update_page_layout();    // this is called after the initial create to update the layout

};






//     ____ ____  _____    _  _____ _____
//    / ___|  _ \| ____|  / \|_   _| ____|
//   | |   | |_) |  _|   / _ \ | | |  _|
//   | |___|  _ <| |___ / ___ \| | | |___
//    \____|_| \_\_____/_/   \_\_| |_____|
//




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

  // zoom check
  if (this.window_width <= 1280 && manic.IS_ACTUAL_MOBILE == false ||
      manic.IS_ACTUAL_MOBILE == true && manic.IS_TABLET_LANDSCAPE) {
    this.window_width *= 1.1111;
    this.window_height *= 1.1111;
  }


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

    this.map_initialize();    

    $("#desktop-header-nav ul li a").on('click', function(e){
      e.preventDefault();

      var div = $(this).attr("href").substring(1);

      $('html, body').animate({
          scrollTop: $('*[data-value="'+div+'"]').offset().top
      }, 800);
    });

    $(".tnc").on("click", function(e){
      e.preventDefault();
      $(this).closest('.flip-container').addClass("hover");
    });

    $(".back-to-offer").on("click", function(e){
      e.preventDefault();
      $(this).closest('.flip-container').removeClass("hover");
    });

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
          $this.scrollTop(0);
          return prevent();
      }
  });

};

sagewest.page.Brand.prototype.map_initialize = function() {
  
    var map;    

    /////
    // MAP STYLE
    /////

    var styles = [
        {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#6195a0"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#f2f2f2"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#e6f3d6"
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": 45
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#f4d2c5"
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text",
            "stylers": [
                {
                    "color": "#4e4e4e"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#f4f4f4"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#787878"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#eaf6f8"
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#eaf6f8"
                }
            ]
        }
    ];

    ////
    // MAP INIT
    ////

    function setMarkerLatLng(lat, lng) {
      return new google.maps.LatLng(lat, lng);
    }

    var AusLatLng = setMarkerLatLng(-25.783190, 133.583079);
    var mapOptions = {
      mapTypeControlOptions: {  
          mapTypeIds: ['Styled']  
      },  
      zoom: 4,
      center: AusLatLng,
      disableDefaultUI: true,   
      mapTypeId: 'Styled',
      scrollwheel: false,
      zoomControl: true
    };
    map = new google.maps.Map(document.getElementById('map'),
      mapOptions);
    var styledMapType = new google.maps.StyledMapType(styles, { name: 'Styled' });  
    map.mapTypes.set('Styled', styledMapType);

    // var service = new google.maps.places.PlacesService(map);

    /////
    // LAT LNG
    /////
    var WestPerthLatlng = setMarkerLatLng(-31.947888,115.8364702);
    var JamesStreetLatlng = setMarkerLatLng(-33.3220933,116.4979821);
    var WollongongLatlng = setMarkerLatLng(-34.4282346,150.8842032);
    var AdelaideLatlng = setMarkerLatLng(-34.9256023,138.583259);

    /////
    // INFOBOX
    /////

    infobox = new InfoBox({           
      disableAutoPan: false,
      maxWidth: 225,
      zIndex: null,
      boxStyle: {
          opacity: 1,
          width: "225px"
      },              
      infoBoxClearance: new google.maps.Size(1, 1)
    });

    ////
    // MARKERS
    ////

    var markersObj = {};

    function createGoogleMarker(markerName ,Latlng, icon, title) {  

        markersObj[markerName] = new google.maps.Marker({
          position: Latlng,
          map: map,
          title: title,
          icon: 'images/icons/map-pin.png'
        });

    }   

    createGoogleMarker('WestPerthMarker', WestPerthLatlng, 'westperth', 'Sage West Perth');
    createGoogleMarker('JamesStreetMarker', JamesStreetLatlng, 'jamesstreet', 'James Street');
    createGoogleMarker('WollongongMarker', WollongongLatlng, 'wollongong', 'Wollongong');
    createGoogleMarker('AdelaideMarker', AdelaideLatlng, 'adelaide', 'Adelaide');

    ///////
    //// Place Info
    ///////

    var WestPerthPlaceId = 'ChIJufd18zGlMioRIFTfNbXwBAU';
    var JamesStreetPlaceId = 'EihKYW1lcyBTdCwgTm9ydGhicmlkZ2UgV0EgNjAwMywgQXVzdHJhbGlh';
    var WollongongPlaceId = 'ChIJe1YLH6UZE2sRIOcyFmh9AQU';
    var AdelaidePlaceId = 'ChIJ56QDo9fOsGoRUz4cTlhwjbM';

    requestObj = {};

    function createRequestObj(requestObjName, PlaceId) {
      requestObj[requestObjName] = {
          placeId : PlaceId
        }
    }

    createRequestObj('westPerthRequest', WestPerthPlaceId);
    createRequestObj('JamesStreetRequest', JamesStreetPlaceId);
    createRequestObj('WollongongRequest', WollongongPlaceId);
    createRequestObj('AdelaideRequest', AdelaidePlaceId);

    /////
    // EVENTS
    /////

    function events(Marker, MarkerLatLng, MarkerRequest) {

      google.maps.event.addListener(Marker, 'click', function() {
          infobox.open(map, this);              
          infobox.setContent("<div class='infoBox-text'><div class='address'><div class='address-icon'></div><div class='address-content'><a target='_blank' href='http://maps.google.com/?q=Sage West Perth 1309 Hay Street, West Perth WA 6005, Australia'><h4>Sage West Perth</h4><p>1309 Hay Street, West Perth WA 6005, Australia</p></a></div></div><div class='telephone'><div class='telephone-icon'></div><div class='telephone-content'><a href='#'><p>+61 8 6500 9100</p></a></div></div><div class='mail'><div class='mail-icon'></div><div class='mail-content'><p><a href='#'>reservations.westperth@sage-hotels.com</a></p></div></div><div class='arrow-left'></div></div>");
          infobox.setOptions({ 'pixelOffset' : new google.maps.Size(45, -95) });
          map.panTo(MarkerLatLng);
      }); 

      google.maps.event.addListener(map, "click", function(event) {
          infobox.close();
      });

      // service.getDetails(MarkerRequest, function(place, status) {
      //     if (status == google.maps.places.PlacesServiceStatus.OK) {
      //       google.maps.event.addListener(Marker, 'mouseover', function() {
      //           infobox.open(map, this);              
      //           infobox.setContent("<div class='infoBox-text'><h5>"+place.name+"</h5><p>"+place.formatted_address+"</p><a href='"+place.website+"' target='_blank'>VISIT WEBSITE <i class='fa fa-chevron-circle-right'></i></a><div class='arrow-down'></div></div>");
      //           infobox.setOptions({ 'pixelOffset' : new google.maps.Size(-25, -195) });
      //           map.panTo(MarkerLatLng);
      //       }); 
      //     }else if (status === google.maps.GeocoderStatus.OVER_QUERY_LIMIT) {
      //           setTimeout(function() {
      //               events(Marker, MarkerLatLng, MarkerRequest);
      //           }, 200);
      //       }
      //   });
      
    }

    events(markersObj['WestPerthMarker'], WestPerthLatlng, requestObj['westPerth']);
    events(markersObj['JamesStreetMarker'], JamesStreetLatlng, requestObj['JamesStreetRequest']);
    events(markersObj['WollongongMarker'], WollongongLatlng, requestObj['WollongongRequest']);
    events(markersObj['AdelaideMarker'], AdelaideLatlng, requestObj['AdelaideRequest']);

      //Resize Function
    google.maps.event.addDomListener(window, "resize", function() {
      var center = map.getCenter();
      google.maps.event.trigger(map, "resize");
      map.setCenter(center);
    });    

}


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


goog.exportSymbol('sagewest.page.Brand', sagewest.page.Brand);
