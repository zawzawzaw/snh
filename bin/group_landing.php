<?php 
ob_start();
?>
<?php 
  global $is_debug;
  global $body_class;

  // $is_debug = false;
  $is_debug = true;

  $body_class = "group-landing-page";
?>
<!doctype html>
<!--[if lt IE 7]><html class="no-js lt-ie9 lt-ie8 lt-ie7"><![endif]-->
<!--[if (IE 7)&!(IEMobile)]><html class="no-js lt-ie9 lt-ie8"><![endif]-->
<!--[if (IE 8)&!(IEMobile)]><html class="no-js lt-ie9"><![endif]-->
<!--[if gt IE 8]><!--><html lang="en" class="no-js"><!--<![endif]-->
  <head>
    <?php include('head_group_landing.php'); ?>
  </head>


  <body class="<?php echo $body_class; ?>">

    <div id="page-preloader" class="square-version">
      <div id="page-preloader-logo">
        <img src="images/icons/preloader-next.png">
      </div>

      <div id="page-preloader-line">
        <div id="page-preloader-line-a"></div>
        <div id="page-preloader-line-b"></div>
      </div>
      <div id="page-preloader-number">0%</div>
    </div>
    


    <!-- mobile header is outside the page wrapper -->
    <?php include('group_landing_header_mobile.php'); ?>
    
    <div id="page-wrapper">
      <div id="page-wrapper-content">

        <?php include('group_landing_header.php'); ?>

        <!--
           ____ _____  _    ____ _____
          / ___|_   _|/ \  |  _ \_   _|
          \___ \ | | / _ \ | |_) || |
           ___) || |/ ___ \|  _ < | |
          |____/ |_/_/   \_\_| \_\|_|

        -->




        <?php include('page_group_landing.php'); ?>




        <!--
           _____ _   _ ____
          | ____| \ | |  _ \
          |  _| |  \| | | | |
          | |___| |\  | |_| |
          |_____|_| \_|____/

        -->
        
        <?php include('js_group_landing.php'); ?>
        <?php include('group_landing_footer.php'); ?>

      </div> <!-- #page-wrapper-content -->
    </div> <!-- #page-wrapper -->
    
    <div id="mobile-page-hitarea"></div>

  </body>
</html>
<?php
// saving captured output to file
file_put_contents('group_landing.html', ob_get_contents());
// end buffering and displaying page
ob_end_flush();
?>