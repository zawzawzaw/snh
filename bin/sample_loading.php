<?php 
ob_start();
?>
<?php 
  global $is_debug;
  global $body_class;

  $is_debug = false;
  // $is_debug = true;

  $body_class = "hotel facilities-page permanent-scrolled";
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

    <div id="page-preloader" class="square-version">
      <div id="page-preloader-logo">
        <img src="images/icons/preloader-sage.png">
      </div>

      <div id="page-preloader-line">
        <div id="page-preloader-line-a"></div>
        <div id="page-preloader-line-b"></div>
      </div>
      <div id="page-preloader-number">0%</div>
    </div>


    <!-- mobile header is outside the page wrapper -->
    <?php include('hotel_header_mobile.php'); ?>
    
    <div id="page-wrapper">
      <div id="page-wrapper-content">

        <?php include('hotel_header.php'); ?>

        <!--
           ____ _____  _    ____ _____
          / ___|_   _|/ \  |  _ \_   _|
          \___ \ | | / _ \ | |_) || |
           ___) || |/ ___ \|  _ < | |
          |____/ |_/_/   \_\_| \_\|_|

        -->




        <!-- page-wrapper-content-min-height for short pages, long pages will have a scrollbar -->
        <div id="page-wrapper-content-min-height">

          <div id="default-header-spacer" class="visible-md visible-lg"></div>
          <div id="default-header-mobile-spacer" class="visible-sm visible-xs"></div>

          <article id="error-404-page-content-section">
            <div class="container-fluid has-breakpoint">
              <div class="row">
                <div class="col-md-12">

                  <div id="error-404-page-content">
                    <h1>Sample Loading area</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div class="cta-container">
                      <a href="hotel.php" class="square-cta highlight-version">Back to Home</a>
                    </div>


                    <!-- add this -->
                    <div class="loading-area">
                      <div class="loading-icon"></div>
                    </div>



                  </div> <!-- 404-page-content -->

                </div>
              </div>
            </div>

          </article> <!-- 404-page-content-section -->

          <div id="default-footer-spacer"></div>

        </div> <!-- page-wrapper-content-min-height -->




        <!--
           _____ _   _ ____
          | ____| \ | |  _ \
          |  _| |  \| | | | |
          | |___| |\  | |_| |
          |_____|_| \_|____/

        -->
        
        <?php include('js_default.php'); ?>
        <?php include('hotel_footer.php'); ?>

      </div> <!-- #page-wrapper-content -->
    </div> <!-- #page-wrapper -->
    
    <div id="mobile-page-hitarea"></div>

  </body>
</html>
<?php
// saving captured output to file
file_put_contents('sample_loading.html', ob_get_contents());
// end buffering and displaying page
ob_end_flush();
?>