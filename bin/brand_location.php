<?php 
ob_start();
?>
<?php 
  global $is_debug;
  global $body_class;

  $is_debug = false;
  // $is_debug = true;

  $body_class = "brand-location-page permanent-scrolled";
?>
<!doctype html>
<!--[if lt IE 7]><html class="no-js lt-ie9 lt-ie8 lt-ie7"><![endif]-->
<!--[if (IE 7)&!(IEMobile)]><html class="no-js lt-ie9 lt-ie8"><![endif]-->
<!--[if (IE 8)&!(IEMobile)]><html class="no-js lt-ie9"><![endif]-->
<!--[if gt IE 8]><!--><html lang="en" class="no-js"><!--<![endif]-->
  <head>
    <?php include('head.php'); ?>
  </head>


  <body class="<?php echo $body_class; ?>">

    <div id="page-preloader">
      <div id="page-preloader-line-01"></div>
      <div id="page-preloader-line-02">
        <div class="line-a"></div>
        <div class="line-b"></div>
      </div>
    </div>


    <!-- mobile header is outside the page wrapper -->
    <?php include('brand_header_mobile.php'); ?>
    
    <div id="page-wrapper">
      <div id="page-wrapper-content">

        <?php include('brand_header_alternative.php'); ?>

        <!--
           ____ _____  _    ____ _____
          / ___|_   _|/ \  |  _ \_   _|
          \___ \ | | / _ \ | |_) || |
           ___) || |/ ___ \|  _ < | |
          |____/ |_/_/   \_\_| \_\|_|

        -->




        <?php include('page_brand_location.php'); ?>




        <!--
           _____ _   _ ____
          | ____| \ | |  _ \
          |  _| |  \| | | | |
          | |___| |\  | |_| |
          |_____|_| \_|____/

        -->
        
        <?php include('js_brand.php'); ?>
        <?php include('brand_alternative_footer.php'); ?>

      </div> <!-- #page-wrapper-content -->
    </div> <!-- #page-wrapper -->
    
    <div id="mobile-page-hitarea"></div>

  </body>
</html>
<?php
// saving captured output to file
file_put_contents('brand_location.html', ob_get_contents());
// end buffering and displaying page
ob_end_flush();
?>