<?php 
ob_start();
?>
<?php 
  global $is_debug;
  global $body_class;

  // $is_debug = false;
  $is_debug = true;

  $body_class = "booking booking-page permanent-scrolled";
?>
<!doctype html>
<!--[if lt IE 7]><html class="no-js lt-ie9 lt-ie8 lt-ie7"><![endif]-->
<!--[if (IE 7)&!(IEMobile)]><html class="no-js lt-ie9 lt-ie8"><![endif]-->
<!--[if (IE 8)&!(IEMobile)]><html class="no-js lt-ie9"><![endif]-->
<!--[if gt IE 8]><!--><html lang="en" class="no-js"><!--<![endif]-->
  <head>
    <?php include('head.php'); ?>

    <!--Start of Zendesk Chat Script-->
    <script type="text/javascript">
    window.$zopim||(function(d,s){var z=$zopim=function(c){z._.push(c)},$=z.s=
    d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set.
    _.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute("charset","utf-8");
    $.src="https://v2.zopim.com/?4h86XryKDSdwSe2B79EcoPHK2QIiVyy3";z.t=+new Date;$.
    type="text/javascript";e.parentNode.insertBefore($,e)})(document,"script");
    </script>
    <script>
      $zopim(function() {
        $zopim.livechat.theme.setFontConfig({
          google: {
            families: ['Open Sans']
          }
        }, 'Open Sans, cursive');
        $zopim.livechat.theme.setColor('#7d0052');
        $zopim.livechat.theme.reload(); // apply new theme settings

        $zopim.livechat.hideAll();

        $zopim.livechat.concierge.setAvatar('http://clients.manic.com.sg/snh/html/bin/images/logo/sage-west-logo.png');
        $zopim.livechat.concierge.setName('Customer Support');
        $zopim.livechat.concierge.setTitle('Sage Hotels');

        $zopim.livechat.window.setTitle('SAGE HOTELS');

        // $zopim.livechat.window.onHide(function(){
        //   console.log('hiding...')
        // });

        // console.log('Chat window is visible: ' + $zopim.livechat.window.getDisplay());
    
      });
    </script>
    <!--End of Zendesk Chat Script-->
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
    <?php include('booking_engine_header_mobile.php'); ?>
    
    <div id="page-wrapper">
      <div id="page-wrapper-content">

        <?php include('booking_engine_header.php'); ?>

        <!--
           ____ _____  _    ____ _____
          / ___|_   _|/ \  |  _ \_   _|
          \___ \ | | / _ \ | |_) || |
           ___) || |/ ___ \|  _ < | |
          |____/ |_/_/   \_\_| \_\|_|

        -->



        <?php include('page_booking_engine.php'); ?>

        

        <!--
           _____ _   _ ____
          | ____| \ | |  _ \
          |  _| |  \| | | | |
          | |___| |\  | |_| |
          |_____|_| \_|____/

        -->
        
        <?php include('js_booking.php'); ?>
        <?php include('hotel_footer.php'); ?>

      </div> <!-- #page-wrapper-content -->
    </div> <!-- #page-wrapper -->
    
    <div id="mobile-page-hitarea"></div>

    <!-- <a href="javascript:void(0);" id="open-chat" style="position: fixed;bottom: 30px;right: 30px;color: white;border-radius: 50px;background-color: #7d0052;width: 50px;height: 50px;text-align: center;vertical-align: middle;font-size: 28px;line-height: 28px;padding-top: 8px; z-index: 999999;"><i class="fa fa-comment" aria-hidden="true"></i></a> -->
    <a href="javascript:void(0);" id="open-chat" style="background: url('images/icons/livechat.png') no-repeat; width: 110px; height: 31px; display: block; position: fixed;bottom: 30px;right: 30px; z-index: 999999;"></a>

    <script type="text/javascript">
      $("#open-chat").on("click", function(e){
        e.stopPropagation();   
        $('*[data-test-id="ChatWidgetWindow"]').show();  
        $zopim(function() {
          $zopim.livechat.window.show();
        });             
      });      

      var specifiedElement = $('*[data-test-id="ChatWidgetWindow"]')[0];
      console.log(specifiedElement);
      document.addEventListener('click', function(event) {
          var isClickInside = specifiedElement.contains(event.target);
          if (isClickInside) {
            console.log('You clicked inside');
          }
          else {
            $('*[data-test-id="ChatWidgetWindow"]').hide();    
            $zopim(function() {
              $zopim.livechat.window.hide();
            });

          }
      });

      // $('iframe').load(function(){
      //   $(this).contents().find(".meshim_widget_widgets_titleBar_MinimizeButton").on('click', function(event) { alert('test'); });
      // });

      $('iframe').load( function() {
        $('iframe').contents().find("head").append($("<style type='text/css'>  .meshim_widget_widgets_titleBar_MinimizeButton{display:none;}  </style>"));
      });
    </script>

    <style>
      [data-test-id="ChatWidgetButton"] {
        display: none!important;
      }
    </style>

  </body>
</html>
<?php
// saving captured output to file
file_put_contents('booking_engine.html', ob_get_contents());
// end buffering and displaying page
ob_end_flush();
?>