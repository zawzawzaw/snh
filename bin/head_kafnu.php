<?php
  global $is_debug;
?>

<title>Kafnu</title>

<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="HandheldFriendly" content="True">
<meta name="MobileOptimized" content="320">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, minimal-ui"/>

<link rel="icon" href="images/icons/favicon-kafnu.png">

<!-- Critical Css -->
<link rel="stylesheet" type="text/css" href="css/critical_style_kafnu.css">

<!-- Social Tags -->
<!-- <meta content="Sage West Perth" property="og:title"/>
<meta content="http://sg.sagewestperth.com/images/facebook-share-image.png" property="og:image"/>
<meta content="Sage West Perth" property="og:site_name"/>
<meta content="http://sg.sagewestperth.com" property="og:url"/>
<meta content="Discover Western Australia with our exclusive packages. Check back frequently for new deals." property="og:description"/> -->

<?php if($is_debug): ?>
  <!-- move these to the at the bottom of the body -->


  <!-- Web Fonts (in js_PAGENAME.php for optimized version) -->

  <!-- open-sans -->
  <!-- <link href='https://fonts.googleapis.com/css?family=Lato:400,300,400italic,700' rel='stylesheet' type='text/css'> -->
  <!-- <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700|Playfair+Display:400,600" rel="stylesheet"> -->
  <!-- <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,400italic,600,700|Playfair+Display:400,600|Poppins:300,400,500|Lato:300,400,600|Patua+One" rel="stylesheet"> -->
  <!-- <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,400italic,600,700|Lato:300,400,600|Patua+One" rel="stylesheet"> -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,400italic,600,700|Lato:300,400,600|Fira+Sans" rel="stylesheet">
  
  <script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/headjs/1.0.3/head.min.js"></script>
  
<?php endif; ?>


<script type="text/javascript">
  
  // simple preloader script
  
  window.preloader_counter = 0;
  window.preloader_js = 0;
  window.preloader_css = 0;

  window.preloader_interval = setInterval(function(){

    var counter = window.preloader_counter;
    var target = (window.preloader_js * 0.75) + (window.preloader_css * 0.25);
    counter += (target - counter) / 5;
    window.preloader_counter = counter;

    var display = Math.floor(Math.round(counter * 10) / 10);

    var number_element = document.getElementById('page-preloader-number');
    if(number_element){
      number_element.innerHTML = (display + '%');
    }

    var line_element = document.getElementById('page-preloader-line-b');
    if (line_element) {
      line_element.style.width = (display + '%');
    }
    

    if (display >= 100) {

      var preloader = document.getElementById('page-preloader');
      if (preloader) {
        preloader.className += ' preload-complete';
      }

      clearInterval(window.preloader_interval);
    }

  }, 50);

</script>