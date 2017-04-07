<?php 
ob_start();
?>
<?php 
  global $is_debug;
  global $body_class;

  $is_debug = false;
  // $is_debug = true;

  $body_class = "hotel contact-thankyou-page permanent-scrolled";
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

          <div id="default-header-spacer"></div>


          <!--
             ____  ____  _____    _    ____   ____ ____  _   _ __  __ ____
            | __ )|  _ \| ____|  / \  |  _ \ / ___|  _ \| | | |  \/  | __ )
            |  _ \| |_) |  _|   / _ \ | | | | |   | |_) | | | | |\/| |  _ \
            | |_) |  _ <| |___ / ___ \| |_| | |___|  _ <| |_| | |  | | |_) |
            |____/|_| \_\_____/_/   \_\____/ \____|_| \_\\___/|_|  |_|____/

          -->

          <!-- used in index & inner pages -->

          <article class="default-breadcrumb-section visible-md visible-lg">
            <div class="container-fluid has-breakpoint">
              <div class="row">
                <div class="col-md-12">

                  <div class="default-breadcrumb">
                    <ul>
                      <li><a href="javascript:void(0);">Silverneedle Hospitality</a></li>
                      <li><a href="brand_alternative.php">Sage Hotels</a></li>
                      <li><a href="hotel.php">Sage West Perth</a></li>
                      <li>Contact</li>
                    </ul>
                  </div> <!-- default-breadcrumb -->

                </div>
              </div>
            </div>
          </article> <!-- default-breadcrumb-container -->
          
          <article id="contact-thankyou-page-content-section">
            <div class="container-fluid has-breakpoint">
              <div class="row">
                <div class="col-md-12">

                  <div id="contact-thankyou-page-content">
                    <h1>Thank you for getting in touch.</h1>
                    <p>Your message has been sent successfully. We will get back to you as soon as possible.</p>
                    <div class="cta-container">
                      <a href="brand_alternative.php" class="square-cta highlight-version">Back to Home</a>
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
file_put_contents('contact_thankyou.html', ob_get_contents());
// end buffering and displaying page
ob_end_flush();
?>