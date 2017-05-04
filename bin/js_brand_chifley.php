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
  <link rel="stylesheet" type="text/css" href="css/style_chifley.css">

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
  <script type="text/javascript" src="../source/library/momentjs/moment.min.js"></script>  
  <script type="text/javascript" src="../source/library/daterangepicker/daterangepicker.js"></script>

  <script type="text/javascript" src="//maps.googleapis.com/maps/api/js?key=AIzaSyC2SOmCXdM5TEYYk81BFxiFwJZ_Z56moYo&v=3.exp&libraries=places"></script>
  <script type="text/javascript" src="../source/library/infobox/infobox.js"></script>  
  
  <!-- Google Closure -->
  <script src="../source/library/closure-library/closure/goog/base.js"></script>
  <script src="../source/js/goog-custom-dependencies.js"></script>
  <script type="text/javascript">
    goog.require('sagewest.page.Brand');
  </script>
  <script type="text/javascript">
    jQuery(document).ready(function($) {
      page = new sagewest.page.Brand({});    
    });
  </script>

<?php else: ?>

  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,400italic,600,700|Lato:300,400,600|Julius+Sans+One" rel="stylesheet">
  <script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/headjs/1.0.3/head.min.js"></script>

  <!-- Optimized Version -->
  <script type="text/javascript">
    var PAGE_GOOGLE_LIBRARY       = "js/page-google.min.js";
    var PAGE_LIBRARY              = "js/page-default-libraries.min.js";
    var PAGE_JS                   = "js/page-brand.min.js";
    var PAGE_CSS                  = "css/style_chifley.css";
    
    head.load(PAGE_CSS, function(){

      window.preloader_css = 100;

    });

    head.load(PAGE_LIBRARY, "https://maps.googleapis.com/maps/api/js?key=AIzaSyC2SOmCXdM5TEYYk81BFxiFwJZ_Z56moYo&v=3.exp", function() {

      window.preloader_js = 50;

      head.load(PAGE_JS, PAGE_GOOGLE_LIBRARY, function() {
          
        window.preloader_js = 100;

        page = new sagewest.page.Brand({});

      });
      
    });

    // start preload

  </script>
  

<?php endif; ?>