<?php
  global $is_debug;
?>

<!-- 
         _   ___     ___    ____   ____ ____  ___ ____ _____ 
        | | / \ \   / / \  / ___| / ___|  _ \|_ _|  _ \_   _|
     _  | |/ _ \ \ / / _ \ \___ \| |   | |_) || || |_) || |  
    | |_| / ___ \ V / ___ \ ___) | |___|  _ < | ||  __/ | |  
     \___/_/   \_\_/_/   \_\____/ \____|_| \_\___|_|    |_|  
                                                             
-->


<?php if($is_debug): ?>
  <!-- Development Version -->
  <link rel="stylesheet" type="text/css" href="css/style.css">

  <!-- Page Library -->
  <script type="text/javascript" src="../source/js/all.js"></script>
  <script type="text/javascript" src="../source/library/jquery/jquery-1.9.1.min.js"></script>
  <script type="text/javascript" src="../source/library/jquery/jquery.mousewheel.min.js"></script>
  <script type="text/javascript" src="../source/library/_js/mobile-detect.js"></script>
  <script type="text/javascript" src="../source/library/_js/preloadjs-0.4.0.min.js"></script>
  <script type="text/javascript" src="../source/library/gsap/TweenMax.min.js"></script>
  <script type="text/javascript" src="../source/library/gsap/jquery.gsap.min.js"></script>
  <script type="text/javascript" src="../source/library/gsap/easing/EasePack.min.js"></script>
  <script type="text/javascript" src="../source/library/gsap/plugins/ScrollToPlugin.min.js"></script>
  <script type="text/javascript" src="../source/library/scrollmagic/ScrollMagic.js"></script>
  <script type="text/javascript" src="../source/library/scrollmagic/plugins/animation.gsap.js"></script>
  <script type="text/javascript" src="../source/library/scrollmagic/plugins/debug.addIndicators.js"></script>
  <script type="text/javascript" src="../source/library/scrollmagic/lib/iscroll-probe.js"></script>
  <script type="text/javascript" src="../source/library/slick/slick.min.js"></script>
  <script type="text/javascript" src="../source/library/instafeed/instafeed.min.js"></script>  
  <script type="text/javascript" src="//maps.googleapis.com/maps/api/js?key=AIzaSyC2SOmCXdM5TEYYk81BFxiFwJZ_Z56moYo&v=3.exp&libraries=places"></script>
  <script type="text/javascript" src="../source/library/infobox/infobox.js"></script>  
  <script type="text/javascript" src="../source/library/momentjs/moment.min.js"></script>  
  <script type="text/javascript" src="../source/library/daterangepicker/daterangepicker.js"></script>

  <!-- Google Closure -->
  <script src="../source/library/closure-library/closure/goog/base.js"></script>
  <script src="../source/js/goog-custom-dependencies.js"></script>
  <script type="text/javascript">
    goog.require('sagewest.page.Hotel');
  </script>
  <script type="text/javascript">
    $(document).ready(function(){
      page = new sagewest.page.Hotel({});    
    });

    //Google Maps JS
    //Set Map
    // function initialize() {
    //     var myLatlng = new google.maps.LatLng(-22.944736, 133.683826);
    //     var imagePath = 'images/icons/map-pin.png'
    //     var mapOptions = {
    //       zoom: 5,
    //       center: myLatlng,
    //       mapTypeId: google.maps.MapTypeId.ROADMAP
    //     }

    //   var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    //   //Callout Content
    //   var contentString = 'Some address here..';
    //   //Set window width + content
    //   var infowindow = new google.maps.InfoWindow({
    //     content: contentString,
    //     maxWidth: 500
    //   });

    //   //Add Marker
    //   var marker = new google.maps.Marker({
    //     position: myLatlng,
    //     map: map,
    //     icon: imagePath,
    //     title: 'image title'
    //   });

    //   google.maps.event.addListener(marker, 'click', function() {
    //     infowindow.open(map,marker);
    //   });

    //   //Resize Function
    //   google.maps.event.addDomListener(window, "resize", function() {
    //     var center = map.getCenter();
    //     google.maps.event.trigger(map, "resize");
    //     map.setCenter(center);
    //   });
    // }

    // google.maps.event.addDomListener(window, 'load', initialize);

  </script>

<?php else: ?>


  <!-- Optimized Version -->
  <script type="text/javascript">
    var PAGE_GOOGLE_LIBRARY        = "js/page-google.min.js";
    var PAGE_LIBRARY        = "js/page-libraries.min.js";
    var PAGE_JS             = "js/page-hotel.min.js";

    head.load("css/style.css");
    head.load(PAGE_LIBRARY, "https://maps.googleapis.com/maps/api/js?key=AIzaSyC2SOmCXdM5TEYYk81BFxiFwJZ_Z56moYo&v=3.exp", function() {

      head.load(PAGE_JS, PAGE_GOOGLE_LIBRARY, function() {
          
        page = new sagewest.page.Hotel({});
        $('body').addClass('preload-start');

      });
    });

    // start preload

  </script>
  

<?php endif; ?>