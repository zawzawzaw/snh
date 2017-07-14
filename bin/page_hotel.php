<?php 
  global $has_instagram;
  global $has_video;
?>

<!--
   ____    _    _   _ _   _ _____ ____
  | __ )  / \  | \ | | \ | | ____|  _ \
  |  _ \ / _ \ |  \| |  \| |  _| | |_) |
  | |_) / ___ \| |\  | |\  | |___|  _ <
  |____/_/   \_\_| \_|_| \_|_____|_| \_\

-->


<div class="scroll-target" data-value="banner"></div>
<article id="hotel-banner-section">
  <div id="hotel-banner" class="default-page-banner">

    <div class="default-page-banner-image visible-md visible-lg">
      <div class="manic-image-container">
        <img src=""
          data-image-desktop="images_cms/hotel/hotel-banner.jpg">
      </div>
    </div>
    <div class="default-page-banner-mobile-image visible-sm visible-xs">
      <div class="manic-image-container has-window-height" data-vertical-align="center" data-offset-height="-63">
        <img src=""
          data-image-tablet="images_cms/hotel/hotel-banner-tablet.jpg"
          data-image-mobile="images_cms/hotel/hotel-banner-mobile.jpg">
      </div>
    </div>

    <div class="default-page-banner-text">   
      <div class="banner-text">
        <h2>West Perth, Australia</h2>
        <!-- <img src="images/logo/hotel-banner-text.svg" class="visible-md visible-lg">       -->
        <h1>Welcome to Sage West Perth</h1>
        <h3>Sage Hotel West Perth is your modern gateway to the City of Light.</h3>
      </div>
      <!-- <div class="scroll-down-cta visible-xs visible-sm"></div> -->
      <div class="scroll-down-cta"></div>
      
    </div>
  </div>
  <!--
  <div class="default-page-banner-mobile-text">
    <div class="visible-sm visible-xs">
      <img src="images/logo/hotel-banner-text.svg">
    </div>
  </div>
  -->
</article>

<!-- 
    __  __________   ____  __
   /  |/  / ____/ | / / / / /
  / /|_/ / __/ /  |/ / / / /
 / /  / / /___/ /|  / /_/ /
/_/  /_/_____/_/ |_/\____/

 -->
<div class="scroll-target" data-value="hotel-menu"></div>
<article id="hotel-menu-section" class="hidden-xs hidden-sm">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
          <nav>
            <ul>
              <li><a href="hotel.php">Home</a></li>
              <li><a href="room_index.php">Rooms</a></li>
              <li><a href="offer_index.php">Offers</a></li>
              <li><a href="dining_index.php">Dining</a></li>
              <li><a href="facilities.php">Facilities</a></li>
              <li><a href="gallery.php">Gallery</a></li>
              <li><a href="activities.php">Activities</a></li>
              <li><a href="reviews.php">Reviews</a></li>
              <li><a href="events.php">Events</a></li>
              <li><a href="location.php">Location</a></li>
            </ul>
          </nav>
      </div>
    </div>    
  </div>
</article>

<!--
   ___ _   _ _____ ____   ___  ____  _   _  ____ _____ ___ ___  _   _
  |_ _| \ | |_   _|  _ \ / _ \|  _ \| | | |/ ___|_   _|_ _/ _ \| \ | |
   | ||  \| | | | | |_) | | | | | | | | | | |     | |  | | | | |  \| |
   | || |\  | | | |  _ <| |_| | |_| | |_| | |___  | |  | | |_| | |\  |
  |___|_| \_| |_| |_| \_\\___/|____/ \___/ \____| |_| |___\___/|_| \_|

-->

<div class="scroll-target" data-value="about"></div>
<article id="hotel-introduction-section">
  <div class="container-fluid has-breakpoint">
    <div class="row">
      <div class="col-md-12">
        <div id="hotel-introduction-breadcrumb">
          <a href="brand_landing.php">NEXT Hotels</a><i class="fa fa-long-arrow-right" aria-hidden="true"></i><a href="brand_alternative.php">sage hotels</a><i class="fa fa-long-arrow-right" aria-hidden="true"></i><span class="active">sage west perth</span>
        </div>
        <div id="hotel-introduction-title">
          <h1>We’re so glad to have you stay</h1>
          <p>Sage Hotel West Perth is your modern gateway to the City of Light, right in the heart of West Perth, walking distance to Kings Park and on the city fringe. With customer service that’s all about you, you couldn’t do better than booking a stay with us.</p>
        </div>  
      </div>
    </div>
    <div class="row">
      <div class="col-md-5 v-align">

        <?php if ($has_video == true): ?>

          <div id="hotel-introduction-mobile-video" class="visible-sm visible-xs">
            <iframe width="809" height="455" src="https://www.youtube.com/embed/uIF9AAjdXAw?autoplay=0&wmode=opaque&enablejsapi=1&showinfo=0&loop=1&playlist=xk3DoW378EY" frameborder="0" allowfullscreen></iframe>
          </div>

        <?php else: ?>

          <div id="hotel-introduction-mobile-image" class="visible-sm visible-xs">
            <div class="manic-image-container">
              <img src="" data-image-tablet="images_cms/hotel/hotel_introduction_tablet_mobile.jpg" data-image-mobile="images_cms/hotel/hotel_introduction_tablet_mobile.jpg">
            </div>
          </div>

        <?php endif; ?>


        <div id="hotel-introduction-copy">
          <div id="hotel-introduction-copy-title-2">
            <h4>a sense of place</h4>
            <h1>We care about your thing</h1>
          </div>

          <div id="hotel-introduction-copy-text">
            <p>We know how important it is to take the hassle out of travel. You’re on the road, for business or leisure, and you want the simple things done right, and the complicated done well. At Sage Hotels, everything is where you expect it to be. Our responsive service means impeccable attention to your needs, so every stay bears the hallmark of calm familiarity, which will make you feel right at home.</p>
            <!-- <a href="#" class="arrow-cta">Read More</a> -->
          </div>

        </div>
      </div>
      <div class="col-md-7 v-align hidden-xs hidden-sm">


        <?php if ($has_video == true): ?>

          <div id="hotel-introduction-video-container" class="visible-md visible-lg">
            <div id="hotel-introduction-video">
              <!-- <iframe width="100%" height="100%" src="https://www.youtube.com/embed/xk3DoW378EY?autoplay=1&cc_load_policy=1" frameborder="0" allowfullscreen></iframe> -->
              <!-- <iframe width="853" height="480" src="https://www.youtube.com/embed/xk3DoW378EY?autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=1&controls=0&showinfo=0" frameborder="0" allowfullscreen></iframe> -->
              <!-- <iframe width="1049" height="590" src="https://www.youtube.com/embed/xk3DoW378EY?autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=1&controls=0&showinfo=0&loop=1&playlist=xk3DoW378EY" frameborder="0" allowfullscreen></iframe> -->
              <!-- <iframe width="1049" height="590" src="https://www.youtube.com/embed/uIF9AAjdXAw?autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=1&controls=0&showinfo=0&loop=1&playlist=xk3DoW378EY" frameborder="0" allowfullscreen></iframe> -->


              <!-- <iframe width="809" height="455" src="https://www.youtube.com/embed/uIF9AAjdXAw?autoplay=1&wmode=opaque&enablejsapi=1&showinfo=0&loop=1&playlist=xk3DoW378EY" frameborder="0" allowfullscreen></iframe> -->

              <iframe width="809" height="455" src="https://www.youtube.com/embed/uIF9AAjdXAw?autoplay=0&wmode=opaque&enablejsapi=1&showinfo=0&loop=1&playlist=xk3DoW378EY" frameborder="0" allowfullscreen></iframe>


            </div>
          </div>
        <?php else: ?>

          <div id="hotel-introduction-image-container" class="visible-md visible-lg">
            <div id="hotel-introduction-image">
              <div class="manic-image-container">
                <img src="" data-image-desktop="images_cms/hotel/hotel_introduction_desktop.jpg">
              </div>
            </div>
          </div>
          
        <?php endif; ?>



        
        
      </div>
    </div>
  </div>
</article>










<!--
      _    ____ ____ ___  __  __ __  __  ___  ____    _  _____ ___ ___  _   _
     / \  / ___/ ___/ _ \|  \/  |  \/  |/ _ \|  _ \  / \|_   _|_ _/ _ \| \ | |
    / _ \| |  | |  | | | | |\/| | |\/| | | | | | | |/ _ \ | |  | | | | |  \| |
   / ___ \ |__| |__| |_| | |  | | |  | | |_| | |_| / ___ \| |  | | |_| | |\  |
  /_/   \_\____\____\___/|_|  |_|_|  |_|\___/|____/_/   \_\_| |___\___/|_| \_|

-->

<div class="scroll-target" data-value="accommodation"></div>
<article id="default-room-section" class='visible-md visible-lg'>
  <div class="container-fluid has-breakpoint">
    <div class="row">
      <div class="col-md-12">

        <div id="default-room-title">
          <h4>our accommodations</h4>
          <h1>West Perth Hotel Rooms</h1>
        </div>

      </div>
    </div>


    <div id="default-room-content" class="boxlist-item-container">
      <div class="row">

        <div class="col-md-4">
          <div class="hotel-page-item boxlist-item">
            <div class="hotel-page-item-box boxlist-item-box">
              <div class="boxlist-item-content-image">
                <a href="room_detail.php" class="manic-image-container">
                  <img src=""
                    data-image="images_cms/room/room-index-standard-room.jpg"
                    data-image-mobile="images_cms/room/room-index-standard-room-mobile.jpg">
                </a>
              </div>

              <div class="hotel-page-item-title">
                <h5><a href="room_detail.php">Standard Room</a></h5>
              </div>

              <div class="hotel-page-item-detail boxlist-item-content-room-detail">
                <p class="detail-person">2 adults, 2 children (max.)</p>
                <p class="detail-size">25 SQM</p>
                <p class="detail-bed">1 King size</p>
              </div>

              
              <div class="hotel-page-item-content-copy">
                <div class="default-copy">
                  <p>Refresh yourself under the dual shower heads and revitalizing SOAK amenities, then drift away on a king size custom mattress to drift off on.</p>
                </div>
              </div>

              <div class="boxlist-item-content-cta">

                <div class="hotel-page-item-arrow-cta-container">
                  <a href="room_detail.php" class="arrow-cta">View room details</a>
                </div>

                <div class="row">
                  <div class="col-xs-6">
                    <a href="javascript:void(0);" class="square-cta highlight-version">book now</a>
                  </div>
                  <div class="col-xs-6">

                    <div class="boxlist-item-content-price">
                      <h6>Prices from</h6>
                      <p class="content-price">
                        <span class="currency">aud</span>
                        <span class="number">$119</span>
                      </p>
                    </div>
                    
                  </div>
                </div>
              </div>

            </div>
          </div> <!-- hotel-page-item -->
        </div> <!-- col-md-4 -->

        <div class="col-md-4">
          <div class="hotel-page-item boxlist-item">
            <div class="hotel-page-item-box boxlist-item-box">
              <div class="boxlist-item-content-image">
                <a href="room_detail.php" class="manic-image-container">
                  <img src=""
                    data-image="images_cms/room/room-index-standard-room.jpg"
                    data-image-mobile="images_cms/room/room-index-standard-room-mobile.jpg">
                </a>
              </div>

              <div class="hotel-page-item-title">
                <h5><a href="room_detail.php">Standard Twin Room</a></h5>
              </div>

              <div class="hotel-page-item-detail boxlist-item-content-room-detail">
                <p class="detail-person">2 adults, 2 children (max.)</p>
                <p class="detail-size">25 SQM</p>
                <p class="detail-bed">2 Twin Beds</p>
              </div>

              
              <div class="hotel-page-item-content-copy">
                <div class="default-copy">
                  <p>Refresh yourself under the dual shower heads and revitalizing SOAK amenities, then drift away on a king size custom mattress to drift off on.</p>
                </div>
              </div>

              <div class="boxlist-item-content-cta">

                <div class="hotel-page-item-arrow-cta-container">
                  <a href="room_detail.php" class="arrow-cta">View room details</a>
                </div>

                <div class="row">
                  <div class="col-xs-6">
                    <a href="javascript:void(0);" class="square-cta highlight-version">book now</a>
                  </div>
                  <div class="col-xs-6">

                    <div class="boxlist-item-content-price">
                      <h6>Prices from</h6>
                      <p class="content-price">
                        <span class="currency">aud</span>
                        <span class="number">$119</span>
                      </p>
                    </div>
                    
                  </div>
                </div>
              </div>

            </div>
          </div> <!-- hotel-page-item -->
        </div> <!-- col-md-4 -->

        <div class="col-md-4">
          <div class="hotel-page-item boxlist-item">
            <div class="hotel-page-item-box boxlist-item-box">
              <div class="boxlist-item-content-image">
                <a href="room_detail.php" class="manic-image-container">
                  <img src=""
                    data-image="images_cms/room/room-index-standard-room.jpg"
                    data-image-mobile="images_cms/room/room-index-standard-room-mobile.jpg">
                </a>
              </div>

              <div class="hotel-page-item-title">
                <h5><a href="room_detail.php">Superior Room</a></h5>
              </div>

              <div class="hotel-page-item-detail boxlist-item-content-room-detail">
                <p class="detail-person">2 adults, 2 children (max.)</p>
                <p class="detail-size">25 SQM</p>
                <p class="detail-bed">1 King size</p>
              </div>

              
              <div class="hotel-page-item-content-copy">
                <div class="default-copy">
                  <p>These rooms offer amazing views of the Perth Skyline or Kings Park. Refresh yourself under the dual shower heads and revitalizing SOAK amenities, then drift away on a king size custom mattress to drift off on.</p>
                </div>
              </div>

              <div class="boxlist-item-content-cta">

                <div class="hotel-page-item-arrow-cta-container">
                  <a href="room_detail.php" class="arrow-cta">View room details</a>
                </div>

                <div class="row">
                  <div class="col-xs-6">
                    <a href="javascript:void(0);" class="square-cta highlight-version">book now</a>
                  </div>
                  <div class="col-xs-6">

                    <div class="boxlist-item-content-price">
                      <h6>Prices from</h6>
                      <p class="content-price">
                        <span class="currency">aud</span>
                        <span class="number">$135</span>
                      </p>
                    </div>
                    
                  </div>
                </div>
              </div>

            </div>
          </div> <!-- hotel-page-item -->
        </div> <!-- col-md-4 -->



      </div>
    </div> <!-- default-room-content -->

    <div class="row">
      <div class="col-md-12">

        <div class="default-room-cta-container">
          <a href="room_index.php" class="square-cta">View all Room Types</a>
        </div>


      </div>
    </div>

  </div>
</article>

<!-- 
<article id="page-hotel-accommodation-section-mobile" class="visible-sm visible-xs">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">

        <div id="page-hotel-accommodation-title-mobile">
          <h4>our accommodations</h4>
          <h1>Room Types</h1>
        </div>
        <div id="page-hotel-accommodation-image-mobile">
          <div class="manic-image-container">
            <img src="" data-image-mobile="images_cms/hotel/hotel-accommodation-banner-mobile.jpg">
          </div>
        </div>
        <div id="page-hotel-accommodation-content-mobile">
          <div class="default-copy">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate fringilla consectetur. ipsum in, dictum lobortis libero.</p>
          </div>
        </div>
        <div id="page-hotel-accommodation-cta-container-mobile">
          <a href="room_index.php" class="square-cta">View all Room Types</a>
        </div>



      </div>
    </div>
  </div>

  
</article> 
 -->
<!-- page-hotel-accommodation-section-mobile -->



<!--
      _    ____ ____ ___  __  __ __  __  ___  ____    _  _____ ___ ___  _   _   __  __  ___  ____ ___ _     _____    ___ ____
     / \  / ___/ ___/ _ \|  \/  |  \/  |/ _ \|  _ \  / \|_   _|_ _/ _ \| \ | | |  \/  |/ _ \| __ )_ _| |   | ____|  / _ \___ \
    / _ \| |  | |  | | | | |\/| | |\/| | | | | | | |/ _ \ | |  | | | | |  \| | | |\/| | | | |  _ \| || |   |  _|   | | | |__) |
   / ___ \ |__| |__| |_| | |  | | |  | | |_| | |_| / ___ \| |  | | |_| | |\  | | |  | | |_| | |_) | || |___| |___  | |_| / __/
  /_/   \_\____\____\___/|_|  |_|_|  |_|\___/|____/_/   \_\_| |___\___/|_| \_| |_|  |_|\___/|____/___|_____|_____|  \___/_____|

-->

<article id="page-hotel-accommodation-02-mobile-section" class="visible-sm visible-xs">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">

        <div id="page-hotel-accommodation-02-title-mobile">
          <h4>our accommodation</h4>
          <h1>Room Types</h1>
        </div>
        <div id="page-hotel-accommodation-02-slider-container-mobile">
          <div id="page-hotel-accommodation-02-slider-mobile" class="boxlist-item-container mobile-height-version">


            <div class="page-hotel-accommodation-02-slider-item-mobile">
              <div class="page-hotel-accommodation-02-item-mobile boxlist-item">
                <div class="page-hotel-accommodation-02-item-mobile-box boxlist-item-box">

                  <div class="boxlist-item-content-image">
                    <a href="room_detail.php" class="manic-image-container">
                      <img src=""
                        data-image-mobile="images_cms/brand/brand-promotion-01.png">
                    </a>
                  </div>

                  <div class="page-hotel-accommodation-02-item-mobile-title">
                    <h5><a href="room_detail.php">Standard Room</a></h5>
                  </div>

                  <div class="boxlist-item-content-room-detail">
                    <p class="detail-person">2 adults, 2 children (max.)</p>
                    <p class="detail-size">25 SQM</p>
                    <p class="detail-bed">1 KING SIZE BED</p>
                  </div>
                  
                  <div class="page-hotel-accommodation-02-item-mobile-cta-container boxlist-item-content-cta-mobile">
                    <div class="row">
                      <div class="col-xs-7 v-align-bottom">
                          <a href="room_detail.php" class="arrow-cta">View room</a>
                      </div>
                      <div class="col-xs-5 v-align-bottom">
                        <div class="boxlist-item-content-price">
                          <h6>Prices from</h6>
                          <p class="content-price">
                            <span class="currency">aud</span>
                            <span class="number">$119</span>
                          </p>
                        </div>
                      </div>
                    </div> 
                  </div>

                </div>
              </div>
            </div>

            <div class="page-hotel-accommodation-02-slider-item-mobile">
              <div class="page-hotel-accommodation-02-item-mobile boxlist-item">
                <div class="page-hotel-accommodation-02-item-mobile-box boxlist-item-box">

                  <div class="boxlist-item-content-image">
                    <a href="room_detail.php" class="manic-image-container">
                      <img src=""
                        data-image-mobile="images_cms/brand/brand-promotion-01.png">
                    </a>
                  </div>

                  <div class="page-hotel-accommodation-02-item-mobile-title">
                    <h5><a href="room_detail.php">Standard Room</a></h5>
                  </div>
                  <div class="boxlist-item-content-room-detail">
                    <p class="detail-person">2 adults, 2 children (max.)</p>
                    <p class="detail-size">25 SQM</p>
                    <p class="detail-bed">1 KING SIZE BED</p>
                  </div>
                  
                  <div class="page-hotel-accommodation-02-item-mobile-cta-container boxlist-item-content-cta-mobile">
                    <div class="row">
                      <div class="col-xs-7 v-align-bottom">
                        <a href="room_detail.php" class="arrow-cta">View room</a>
                      </div>
                      <div class="col-xs-5 v-align-bottom">
                        <div class="boxlist-item-content-price">
                          <h6>Prices from</h6>
                          <p class="content-price">
                            <span class="currency">aud</span>
                            <span class="number">$235</span>
                          </p>
                        </div>
                      </div>
                    </div>                        
                  </div>

                </div>
              </div>
            </div>

            <div class="page-hotel-accommodation-02-slider-item-mobile">
              <div class="page-hotel-accommodation-02-item-mobile boxlist-item">
                <div class="page-hotel-accommodation-02-item-mobile-box boxlist-item-box">

                  <div class="boxlist-item-content-image">
                    <a href="room_detail.php" class="manic-image-container">
                      <img src=""
                        data-image-mobile="images_cms/brand/brand-promotion-01.png">
                    </a>
                  </div>

                  <div class="page-hotel-accommodation-02-item-mobile-title">
                    <h5><a href="room_detail.php">Standard Room</a></h5>
                  </div>
                  <div class="room-detail-page-item-content-detail">
                    <div class="row">
                      <div class="col-xs-12">

                        <div class="boxlist-item-content-room-detail">
                          <p class="detail-person">2 adults, 2 children (max.)</p>
                          <p class="detail-size">25 SQM</p>
                          <p class="detail-bed">1 KING SIZE BED</p>
                        </div>

                      </div>                          
                    </div>
                  </div>
                  <div class="page-hotel-accommodation-02-item-mobile-cta-container boxlist-item-content-cta-mobile">
                    <div class="row">
                      <div class="col-xs-7 v-align-bottom">
                        <a href="room_detail.php" class="arrow-cta">View room</a>
                      </div>
                      <div class="col-xs-5 v-align-bottom">

                        <div class="boxlist-item-content-price">
                          <h6>Prices from</h6>
                          <p class="content-price">
                            <span class="currency">aud</span>
                            <span class="number">$135</span>
                          </p>
                        </div>
                        
                      </div>
                    </div>                        
                  </div>

                </div>
              </div>
            </div>




          </div>
        </div>
        <div id="page-hotel-accommodation-02-cta-container-mobile">
          <a href="room_index.php" class="square-cta">View all Room Types</a>
        </div>

      </div>
    </div>
  </div>
</article> <!-- page-hotel-accommodation-02-mobile-section -->






<!--
   _____ _    ____ ___ _     ___ _____ ___ _____ ____
  |  ___/ \  / ___|_ _| |   |_ _|_   _|_ _| ____/ ___|
  | |_ / _ \| |    | || |    | |  | |  | ||  _| \___ \
  |  _/ ___ \ |___ | || |___ | |  | |  | || |___ ___) |
  |_|/_/   \_\____|___|_____|___| |_| |___|_____|____/

-->

<article id="page-hotel-facilities-section" class="visible-md visible-lg">
  <div class="container-fluid has-breakpoint">
    <div class="row">
      <div class="col-md-12">

        <div id="page-hotel-facilities-title">
          <h4>Hotel Facilities</h4>
          <h1>Comfort & Convenience</h1>
        </div> <!-- page-hotel-facilities-title -->

      </div>
    </div>
    <div class="row">
      <div class="col-md-12">

        <div id="page-hotel-facilities-slider-container">
          <div id="page-hotel-facilities-slider">

            <div class="page-hotel-facilities-slider-item">
              <span class='fa fa-wifi'></span>
              <h4>WiFi</h4>
            </div>

            <div class="page-hotel-facilities-slider-item">
              <span class='fa fa-suitcase'></span>
              <h4>Luggage Storage</h4>
            </div>

            <div class="page-hotel-facilities-slider-item">
              <span class='fa fa-cutlery'></span>
              <h4>Restaurant</h4>
              <i>Julio’s Italian</i>
            </div>

            <div class="page-hotel-facilities-slider-item">
              <span class='fa fa-bell'></span>
              <h4>Room Service</h4>
              <i>24/7</i>
            </div>

            <div class="page-hotel-facilities-slider-item">
              <span class='fa fa-wheelchair'></span>
              <h4>Wheelchair Access</h4>
            </div>

            <div class="page-hotel-facilities-slider-item">
              <span class='fa fa-automobile'></span>
              <h4>Parking</h4>
              <i>Indoor & Outdoor</i>
            </div>

            <div class="page-hotel-facilities-slider-item">
              <span class='fa fa-beer'></span>
              <h4>Socialize</h4>
              <i>Bar & Lounge</i>
            </div>

            <div class="page-hotel-facilities-slider-item">
              <span class='fa fa-newspaper-o'></span>
              <h4>Newspaper</h4>
            </div>

            <div class="page-hotel-facilities-slider-item">
              <span class='fa fa-fax'></span>
              <h4>Fax Service</h4>
            </div>
            
          </div> <!-- page-hotel-facilities-slider -->
        </div> <!-- page-hotel-facilities-slider-container -->

      </div>
    </div>
  </div>
  

</article>



<article id="page-hotel-facilities-section-mobile" class="visible-sm visible-xs">

  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">

        <div id="page-hotel-facilities-title-mobile">
          <h4>Hotel Facilities</h4>
          <h1>Comfort & Convenience</h1>
        </div> <!-- page-hotel-facilities-title-mobile -->

        <div id="page-hotel-facilities-slider-container-mobile">
          <div id="page-hotel-facilities-slider-mobile">

            <div class="page-hotel-facilities-slider-item-group-mobile">
              <div class="page-hotel-facilities-slider-item-mobile">
                <span class='fa fa-wifi'></span>
                <h4>WiFi</h4>
              </div>

              <div class="page-hotel-facilities-slider-item-mobile">
                <span class='fa fa-suitcase'></span>
                <h4>Luggage Storage</h4>
              </div>

              <div class="page-hotel-facilities-slider-item-mobile">
                <span class='fa fa-cutlery'></span>
                <h4>Restaurant</h4>
                <i>Julio’s Italian</i>
              </div>

              <div class="page-hotel-facilities-slider-item-mobile">
                <span class='fa fa-bell'></span>
                <h4>Room Service</h4>
                <i>24/7</i>
              </div>
            </div> <!-- page-hotel-facilities-slider-item-group-mobile -->

            <div class="page-hotel-facilities-slider-item-group-mobile">
              <div class="page-hotel-facilities-slider-item-mobile">
                <span class='fa fa-wheelchair'></span>
                <h4>Wheelchair Access</h4>
              </div>

              <div class="page-hotel-facilities-slider-item-mobile">
                <span class='fa fa-automobile'></span>
                <h4>Parking</h4>
                <i>Indoor & Outdoor</i>
              </div>

              <div class="page-hotel-facilities-slider-item-mobile">
                <span class='fa fa-beer'></span>
                <h4>Socialize</h4>
                <i>Bar & Lounge</i>
              </div>

              <div class="page-hotel-facilities-slider-item-mobile">
                <span class='fa fa-newspaper-o'></span>
                <h4>Newspaper</h4>
              </div>
            </div> <!-- page-hotel-facilities-slider-item-group-mobile -->

            <div class="page-hotel-facilities-slider-item-group-mobile">
              <div class="page-hotel-facilities-slider-item-mobile">
                <span class='fa fa-fax'></span>
                <h4>Fax Service</h4>
              </div>
            </div> <!-- page-hotel-facilities-slider-item-group-mobile -->




          </div> <!-- page-hotel-facilities-slider-mobile -->
        </div> <!-- page-hotel-facilities-slider-container-mobile -->

      </div>
    </div>
  </div>
  
</article>






<!-- 
    ____  _____   _______   ________
   / __ \/  _/ | / /  _/ | / / ____/
  / / / // //  |/ // //  |/ / / __
 / /_/ // // /|  // // /|  / /_/ /
/_____/___/_/ |_/___/_/ |_/\____/

 -->

<div class="scroll-target" data-value="dining"></div>
<article id="hotel-dining-section">
  <div class="container-fluid has-breakpoint">
    <div class="row">
      <div class="col-lg-4 col-md-5">
        <div id="hotel-dining-content">
          <h4>fresh, vibrant, authentic service</h4>
          <h1>West Perth Dining</h1>

          <div id="mobile-hotel-dining-instagram-feed-container" class="visible-xs visible-sm">
            <div class="mobile-hotel-dining-image-01">
              <div class="manic-image-container">
                <img src="" data-image-mobile="images_cms/hotel/hotel-dining-01-new.jpg" alt="">
              </div>
            </div>
            <div class="mobile-hotel-dining-image-02">
              <div class="manic-image-container">
                <img src="" data-image-mobile="images_cms/hotel/hotel-dining-02-new.jpg" alt="">
              </div>
            </div>
          </div>

          <span>A Taste of Italy — Julio’s</span>
          <p>With over 20 years of rich heritage and a passion for seriously delicious food, we’ve got something for everyone from a quick bite to a leisurely dinner.</p>
          <p>As sticklers for authenticity and wholesome flavours, we serve up mouth-watering modern Italian cuisine, and that includes tasty hotel-made pasta.</p>

          <div class="arrow-cta-container visible-md visible-lg">
            <a href="dining_index.php" class="arrow-cta">more dining options</a>
          </div>

          <div class="square-cta-container visible-sm visible-xs">
            <a href="dining_index.php" class="square-cta">more dining options</a>
          </div>


          

        </div>
      </div>
      <div class="col-lg-7 col-md-6 col-md-offset-1 hidden-xs hidden-sm">
        <div id="hotel-dining-instagram-feed-container">
          <div class="instagram-feed">
            <div class="manic-image-container manic-image-container-01">
              <img src="" data-image-desktop="images_cms/hotel/hotel-dining-01-new.jpg">
            </div>
          </div>

          <div class="instagram-feed">
            <div class="manic-image-container manic-image-container-02">
              <img src="" data-image-desktop="images_cms/hotel/hotel-dining-02-new.jpg">
            </div>
          </div>

          <!-- <span class="instagram-feed-text">No half-hearted measures here—everything’s made from the freshest locally sourced ingredients!</span> -->
        </div>        
      </div>
    </div>
  </div>
</article>

<!-- 
    ____  ____  ____  __  _______  ______________  _   __
   / __ \/ __ \/ __ \/  |/  / __ \/_  __/  _/ __ \/ | / /
  / /_/ / /_/ / / / / /|_/ / / / / / /  / // / / /  |/ /
 / ____/ _, _/ /_/ / /  / / /_/ / / / _/ // /_/ / /|  /
/_/   /_/ |_|\____/_/  /_/\____/ /_/ /___/\____/_/ |_/

 -->
<div class="scroll-target" data-value="offers"></div>
<article id="default-promotion-section" class="visible-md visible-lg">
  <div class="container-fluid has-breakpoint">
    <div class="row">
      <div class="col-md-12">
        <div id="default-promotion-title">
          <h4>simply irresistable</h4>
          <h1>Offers</h1>          
        </div>
      </div>
    </div>
    <div class="row">
      <div id="default-promotion-content" class="boxlist-item-container">
        <div class="col-md-4">
          <div class="default-promotion-content-item boxlist-item">
            <div class="default-promotion-content-box boxlist-item-box">

              <div class="boxlist-item-tag">Accommodation</div>

              <div class="boxlist-item-content-image">
                <a href="offer_detail.php" class="manic-image-container">
                  <img src=""
                    data-image-desktop="images_cms/brand/brand-promotion-01.png">
                </a>
              </div>

              <div class="default-promotion-content-item-copy">
                <div class="default-copy">
                  <h5><a href="offer_detail.php">City Escape</a></h5>
                  <p>Take a walk through Kings Park get some fresh air at Elizabeth Quays or take one of the hotel complimentary pushbikes for a spin.</p>
                  <ul>
                    <li><p>Newly Constructed Sage Rooms</p></li>
                    <li><p>Continental Buffet Breakfast for 2</p></li>
                    <li><p>Late Check out at 12 noon</p></li>
                  </ul>
                  
                </div>
              </div>

              <div class="boxlist-item-content-cta">
                <div class="default-promotion-content-item-arrow-cta-container">
                  <a href="offer_detail.php" class="arrow-cta">More details</a>
                </div>
                <a href="javascript:void(0);" class="square-cta highlight-version">Book now</a>
              </div>


            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="default-promotion-content-item boxlist-item">
            <div class="default-promotion-content-box boxlist-item-box">

              <div class="boxlist-item-tag">Dining</div>

              <div class="boxlist-item-content-image">
                <a href="offer_detail.php" class="manic-image-container">
                  <img src=""
                    data-image-desktop="images_cms/brand/brand-promotion-02.png">
                </a>
              </div>

              <div class="default-promotion-content-item-copy">
                <div class="default-copy">
                  <h5><a href="offer_detail.php">Valentine’s Day</a></h5>
                  <p>Treat your loved one to a nice candlelit dinner at Lennons Restaurant</p>
                  <ul>
                    <li><p>Arrival rose for your significant other</p></li>
                    <li><p>3-course dinner with choice of dish</p></li>
                    <li><p>Complimentary bottle of red or white wine</p></li>
                    <li><p>Live jazz singer duo</p></li>
                  </ul>

                </div>
              </div>

              <div class="boxlist-item-content-cta">
                <div class="default-promotion-content-item-arrow-cta-container">
                  <a href="offer_detail.php" class="arrow-cta">More details</a>
                </div>

                <div class="row">
                  <div class="col-xs-6">
                    <a href="javascript:void(0);" class="square-cta">Contact us</a>
                  </div>
                  <div class="col-xs-6">

                    <div class="boxlist-item-content-price">
                      <h6>per pax</h6>
                      <p class="content-price">
                        <span class="currency">aud</span>
                        <span class="number">$79.90</span>
                      </p>
                    </div>
                    
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="default-promotion-content-item boxlist-item">
            <div class="default-promotion-content-box boxlist-item-box">

              <div class="boxlist-item-tag">Dining</div>

              <div class="boxlist-item-content-image">
                <a href="offer_detail.php" class="manic-image-container">
                  <img src=""
                    data-image-desktop="images_cms/brand/brand-promotion-03.png">
                </a>
              </div>

              <div class="default-promotion-content-item-copy">
                <div class="default-copy">
                  <h5><a href="offer_detail.php">Ascot Horse Racing</a></h5>
                  <ul>
                    <li><p>Complimentary upgrade to Executive Wing</p></li>
                    <li><p>General admission ticket for 2 to Ascot Races</p></li>
                    <li><p>Early Check-in</p></li>
                    <li><p>Bottle of Sparkling Wine on arrival</p></li>
                    <li><p>Complimentary shuttle to Ascot Race Track</p></li>
                    <li><p>Complimentary beverage offer when dining in the Firehouse Restaurant</p></li>
                  </ul>
                  
                </div>
              </div>

              <div class="boxlist-item-content-cta">
                <div class="default-promotion-content-item-arrow-cta-container">
                  <a href="offer_detail.php" class="arrow-cta">More details</a>
                </div>

                <a href="javascript:void(0);" class="square-cta highlight-version">Book now</a>
              </div>
              
            </div>

          </div>
        </div>
      </div>
    </div> <!-- row -->

    <div class="row">
      <div class="col-md-12">

        <div id="default-promotion-view-all-container">
          <a href="offer_index.php" class="square-cta">View all offers</a>
        </div>

      </div>
    </div>
  </div>
</article>

<!--
   ____  ____   ___  __  __  ___ _____ ___ ___  _   _   __  __  ___  ____ ___ _     _____
  |  _ \|  _ \ / _ \|  \/  |/ _ \_   _|_ _/ _ \| \ | | |  \/  |/ _ \| __ )_ _| |   | ____|
  | |_) | |_) | | | | |\/| | | | || |  | | | | |  \| | | |\/| | | | |  _ \| || |   |  _|
  |  __/|  _ <| |_| | |  | | |_| || |  | | |_| | |\  | | |  | | |_| | |_) | || |___| |___
  |_|   |_| \_\\___/|_|  |_|\___/ |_| |___\___/|_| \_| |_|  |_|\___/|____/___|_____|_____|

-->

<article id="page-brand-promotion-mobile-section" class="hotel-version visible-sm visible-xs">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">

        <div id="page-brand-promotion-title-mobile">
          <h4>simply irresistable</h4>
          <h1>Offers</h1>
        </div>
        <div id="page-brand-promotion-slider-container-mobile">
          <div id="page-brand-promotion-slider-mobile" class="boxlist-item-container mobile-height-version">


            <div class="page-brand-promotion-slider-item-mobile">
              <div class="default-promotion-content-item boxlist-item">
                <div class="default-promotion-content-box boxlist-item-box">

                  <div class="boxlist-item-tag">Accommodation</div>

                  <div class="boxlist-item-content-image">
                    <a href="offer_detail.php" class="manic-image-container">
                      <img src=""
                        data-image-mobile="images_cms/brand/brand-promotion-01.png">
                    </a>
                  </div>

                  <div class="default-promotion-content-item-copy">
                    <div class="default-copy">
                      <h5><a href="offer_detail.php">City Escape</a></h5>
                      <p class="minimize" data-length="80">Take a walk through Kings Park get some fresh air at Elizabeth Quays or take one of the hotel complimentary pushbikes for a spin.</p>
                    </div>
                  </div>

                  <div class="default-promotion-content-item-arrow-cta-container-mobile">
                    <a href="offer_detail.php" class="arrow-cta">More details</a>
                  </div>

                </div>
              </div>
            </div>

            <div class="page-brand-promotion-slider-item-mobile">
              <div class="default-promotion-content-item boxlist-item">
                <div class="default-promotion-content-box boxlist-item-box">

                  <div class="boxlist-item-tag">Dining</div>

                  <div class="boxlist-item-content-image">
                    <a href="offer_detail.php" class="manic-image-container">
                      <img src=""
                        data-image-mobile="images_cms/brand/brand-promotion-01.png">
                    </a>
                  </div>

                  <div class="default-promotion-content-item-copy">
                    <div class="default-copy">
                      <h5><a href="offer_detail.php">Valentine’s Day</a></h5>
                      <p class="minimize" data-length="80">Treat your loved one to a nice candlelit dinner at Lennons Restaurant</p>
                    </div>
                  </div>

                  <div class="default-promotion-content-item-arrow-cta-container-mobile">
                    <a href="offer_detail.php" class="arrow-cta">More details</a>
                  </div>

                </div>
              </div>
            </div>

            <div class="page-brand-promotion-slider-item-mobile">
              <div class="default-promotion-content-item boxlist-item">
                <div class="default-promotion-content-box boxlist-item-box">

                  <div class="boxlist-item-tag">Dining</div>

                  <div class="boxlist-item-content-image">
                    <a href="offer_detail.php" class="manic-image-container">
                      <img src=""
                        data-image-mobile="images_cms/brand/brand-promotion-01.png">
                    </a>
                  </div>

                  <div class="default-promotion-content-item-copy">
                    <div class="default-copy">
                      <h5><a href="offer_detail.php">Ascot Horse Racing</a></h5>
                      <p class="minimize" data-length="80">Complimentary upgrade to Executive Wing</p>
                    </div>
                  </div>

                  <div class="default-promotion-content-item-arrow-cta-container-mobile">
                    <a href="offer_detail.php" class="arrow-cta">More details</a>
                  </div>

                </div>
              </div>
            </div>




          </div>
        </div>
        <div id="page-brand-promotion-cta-container-mobile">
          <a href="offer_index.php" class="square-cta">View all Offers</a>
        </div>

      </div>
    </div>
  </div>
</article> <!-- page-brand-promotion-mobile-section -->




<!-- 
    ____  _______    _____________       _______
   / __ \/ ____/ |  / /  _/ ____/ |     / / ___/
  / /_/ / __/  | | / // // __/  | | /| / /\__ \
 / _, _/ /___  | |/ // // /___  | |/ |/ /___/ /
/_/ |_/_____/  |___/___/_____/  |__/|__//____/

 -->
<div class="scroll-target" data-value="reviews"></div>
<article id="hotel-reviews-section">
  <div class="container-fluid has-breakpoint">
    <div class="row">
      <div class="col-md-12">
        <div id="hotel-reviews-slider">
          <div class="hotel-reviews-slider-content">
            <div class="hotel-reviews-slider-title">
              <h4>Guest Reviews</h4>
              <h1>“Great location, comfortable stay.”</h1>            
            </div>
            <div class="hotel-reviews-slider-text">
              <div class="stars">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star-half-empty" aria-hidden="true"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
              </div>
              <span class="quote">“Out of town location so very quiet and peaceful. Lots of interesting birdlife to see close up. Interesting walks from here and historical interest in the town.…”</span>
              <hr class="small">
              <span class="name-and-location">Ralph, United Kingdom</span>
              <span class="hotel-reviews-date">Trip Advisor, 15 March 2017</span>
            </div>
          </div>
          <div class="hotel-reviews-slider-content">
            <div class="hotel-reviews-slider-title">
              <h4>Guest Reviews</h4>
              <h1>“Great location, comfortable stay.”</h1>            
            </div>
            <div class="hotel-reviews-slider-text">
              <div class="stars">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star-half-empty" aria-hidden="true"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
              </div>
              <span class="quote">“Out of town location so very quiet and peaceful. Lots of interesting birdlife to see close up. Interesting walks from here and historical interest in the town.…”</span>
              <hr class="small">
              <span class="name-and-location">Ralph, United Kingdom</span>
              <span class="hotel-reviews-date">Trip Advisor, 15 March 2017</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">

        <!-- <a href="#" id="hotel-reviews-reall-all-reviews" class="arrow-cta">Read all reviews</a> -->

        <div id="hotel-reviews-reall-all-reviews">
          <a href="javascript:void(0);" class="square-cta">Read all reviews</a>
        </div>
      </div>
    </div>
  </div>
</article>

<!-- 
    ____  ____  ____  __ __ _____   ________
   / __ )/ __ \/ __ \/ //_//  _/ | / / ____/
  / __  / / / / / / / ,<   / //  |/ / / __
 / /_/ / /_/ / /_/ / /| |_/ // /|  / /_/ /
/_____/\____/\____/_/ |_/___/_/ |_/\____/

 -->

<div class="scroll-target" data-value="booking"></div>
<article id="hotel-booking-section">
  <div class="container-fluid has-breakpoint">
    <div class="row">
      <div class="col-md-12">
        <div id="hotel-booking-title" class="hidden-sm hidden-xs">
          <h4>benefit by booking directly with us</h4>
          <h1>Book Directly With Sage Hotels</h1>            
        </div>
        <div id="hotel-booking-title-mobile" class="visible-sm visible-xs">
          <h4>benefit by booking directly</h4>
          <h1>Book Directly</h1>            
        </div>
      </div>
    </div>
    <div class="row">
      <div id="hotel-booking-content">
        <div class="col-md-4">
          <img src="images/icons/change-mind-icon.png" alt="">
          <h4>Change Your Mind</h4>
          <p>It’s okay to change your mind—we allow free cancellation up to 24 hours before checkin!</p>
        </div>
        <div class="col-md-4">
          <img src="images/icons/best-price-icon.png" alt="">
          <h4>best price guarantee</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        </div>
        <div class="col-md-4">
          <img src="images/icons/no-booking-fees-icon.png" alt="">
          <h4>no booking fees</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        </div>
      </div>
    </div>
  </div>
</article>




<?php if($has_instagram == true): ?>

  <!-- 
      __  _______  __  __________   ________
     /  |/  / __ \/  |/  / ____/ | / /_  __/
    / /|_/ / / / / /|_/ / __/ /  |/ / / /
   / /  / / /_/ / /  / / /___/ /|  / / /
  /_/  /_/\____/_/  /_/_____/_/ |_/ /_/

   -->

  <div class="scroll-target" data-value="moment"></div>
  <article id="default-moment-section" class="hotel-version">
    <div class="container-fluid has-breakpoint">
      <div class="row">
        <div class="col-md-4 hidden-xs hidden-sm">
          <div id="default-moment-content">
            <h4>Capture the best moments</h4>
            <h1>#SageHotelWestPerth</h1>
            <p>Share your favourite moments with us on Instagram! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <ul id="social-buttons">
              <li><a href="#"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
            </ul>
          </div>
        </div>
        <div class="col-md-7 col-md-offset-1">
          <div id="default-moment-instagram-feed-container-container">
            <div id="default-moment-instagram-feed-container">
              <div class="instagram-feed"><img src="images_cms/brand/brand-instagram-01.png" alt=""></div>
              <div class="instagram-feed"><img src="images_cms/brand/brand-instagram-02.png" alt=""></div>
              <div class="instagram-feed"><img src="images_cms/brand/brand-instagram-03.png" alt=""></div>
              <div class="instagram-feed"><img src="images_cms/brand/brand-instagram-04.png" alt=""></div>
              <div class="instagram-feed"><img src="images_cms/brand/brand-instagram-05.png" alt=""></div>
              <div class="instagram-feed"><img src="images_cms/brand/brand-instagram-06.png" alt=""></div>
              
              <div class="instagram-feed"><img src="images_cms/brand/brand-instagram-01.png" alt=""></div>
              <div class="instagram-feed"><img src="images_cms/brand/brand-instagram-02.png" alt=""></div>
              <div class="instagram-feed"><img src="images_cms/brand/brand-instagram-03.png" alt=""></div>
              <div class="instagram-feed"><img src="images_cms/brand/brand-instagram-04.png" alt=""></div>
              <div class="instagram-feed"><img src="images_cms/brand/brand-instagram-05.png" alt=""></div>
              <div class="instagram-feed"><img src="images_cms/brand/brand-instagram-06.png" alt=""></div>
            </div>
          </div>
        </div>
        <div class="col-md-4 visible-xs visible-sm">
          <div id="default-moment-content">
            <h4>Capture the best moments</h4>
            <h1>#SageHotelWestPerth</h1>
            <p>Share your favourite moments with us on Instagram! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <ul id="social-buttons">
              <li><a href="#"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </article>

<?php else: ?>

  <article id="default-no-moment-section">
  </article>

<?php endif; ?>


<!-- 
    ___  ________________  ___   ____________________  _   __
   /   |/_  __/_  __/ __ \/   | / ____/_  __/  _/ __ \/ | / /
  / /| | / /   / / / /_/ / /| |/ /     / /  / // / / /  |/ /
 / ___ |/ /   / / / _, _/ ___ / /___  / / _/ // /_/ / /|  /
/_/  |_/_/   /_/ /_/ |_/_/  |_\____/ /_/ /___/\____/_/ |_/

 -->

<div class="scroll-target" data-value="attraction"></div>
<article id="hotel-attraction-section">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div id="hotel-attraction-title">
          <h4>sage west perth</h4>
          <h1>Hang out in our neighbourhood</h1>
        </div>
      </div>
    </div>
  </div>
  <div id="page-brand-map" class="default-version"></div>


  <!-- 
  <div class="default_marker" data-zoom="4" data-location="Australia" data-lat="-25.783190" data-lng="133.583079"></div>
  
  <div class="markers" 
      data-pin-icon="images/icons/map-pin.svg" 
      data-location="1309 Hay Street, West Perth, WA 6005, Australia" 
      data-lat="-31.947794" 
      data-lng="115.838702" 
      data-html="<div class='infoBox-text'><div class='address'><div class='address-icon'></div><div class='address-content'><a target='_blank' href='http://maps.google.com/?q=1309 Hay Street, West Perth, WA 6005, Australia'><h4>SAGE WEST PERTH</h4><p>1309 Hay Street, West Perth, WA 6005, Australia</p></a></div></div><div class='telephone'><div class='telephone-icon'></div><div class='telephone-content'><a href='javascript:void(0);'><p>+61 8 6500 9100</p></a></div></div><div class='mail'><div class='mail-icon'></div><div class='mail-content'><p><a href='mailto:reservations.westperth@sage-hotels.com'>reservations.westperth@sage-hotels.com</a></p></div></div><div class='arrow-left'></div></div>"></div>
  <div class="markers" 
      data-pin-icon="images/icons/map-pin.svg" 
      data-location="60-62 Harbour St, Wollongong, NSW 2500, Australia" 
      data-lat="-34.428887" 
      data-lng="150.901011" 
      data-html="<div class='infoBox-text'><div class='address'><div class='address-icon'></div><div class='address-content'><a target='_blank' href='http://maps.google.com/?q=60-62 Harbour St, Wollongong, NSW 2500, Australia'><h4>SAGE HOTEL WOLLONGONG</h4><p>60-62 Harbour St, Wollongong, NSW 2500, Australia</p></a></div></div><div class='telephone'><div class='telephone-icon'></div><div class='telephone-content'><a href='javascript:void(0);'><p>+61 2 4201 2111</p></a></div></div><div class='mail'><div class='mail-icon'></div><div class='mail-content'><p><a href='mailto:reservations.wollongong@sage-hotels.com'>reservations.wollongong@sage-hotels.com</a></p></div></div><div class='arrow-left'></div></div>"></div>
  <div class="markers" 
      data-pin-icon="images/icons/map-pin.svg" 
      data-location="70 James Street, Fortitude Valley, QLD 4006, Australia" 
      data-lat="-27.457880" 
      data-lng="153.041811" 
      data-html="<div class='infoBox-text'><div class='address'><div class='address-icon'></div><div class='address-content'><a target='_blank' href='http://maps.google.com/?q=70 James Street, Fortitude Valley, QLD 4006, Australia'><h4>Accommodation Fortitude Valley</h4><p>70 James Street, Fortitude Valley, QLD 4006, Australia</p></a></div></div><div class='telephone'><div class='telephone-icon'></div><div class='telephone-content'><a href='javascript:void(0);'><p>+61 7 3222 3111</p></a></div></div><div class='mail'><div class='mail-icon'></div><div class='mail-content'><p><a href='mailto:reservations.jamesst@sage-hotels.com'>reservations.jamesst@sage-hotels.com</a></p></div></div><div class='arrow-left'></div></div>"></div>
  <div class="markers" 
      data-pin-icon="images/icons/map-pin.svg" 
      data-location="208 South Terrace, Adelaide, SA 5000, Australia" 
      data-lat="-34.935166" 
      data-lng="138.604266" 
      data-html="<div class='infoBox-text'><div class='address'><div class='address-icon'></div><div class='address-content'><a target='_blank' href='http://maps.google.com/?q=208 South Terrace, Adelaide, SA 5000, Australia'><h4>SAGE HOTEL ADELAIDE</h4><p>208 South Terrace, Adelaide, SA 5000, Australia</p></a></div></div><div class='telephone'><div class='telephone-icon'></div><div class='telephone-content'><a href='javascript:void(0);'><p>+61 8 8223 2800</p></a></div></div><div class='mail'><div class='mail-icon'></div><div class='mail-content'><p><a href='mailto:reservations.adelaide@sage-hotels.com'>reservations.adelaide@sage-hotels.com</a></p></div></div><div class='arrow-left'></div></div>"></div>
  -->

  
  <!-- 
  <div class="default_marker" data-zoom="15" data-location="Australia" data-lat="-31.946899" data-lng="115.8524116"></div>
  <div class="markers no-hover" data-pin-icon="images/icons/map-pin.png" data-location="James Street" data-lat="-31.946899" data-lng="115.8524116" data-place-id="ChIJe1YLH6UZE2sRIOcyFmh9AQU" data-html="<div class='infoBox-text'><div class='address'><div class='address-content'><a target='_blank' href='http://maps.google.com/?q=Sage West Perth 1309 Hay Street, West Perth WA 6005, Australia'><h4>Sage West Perth</h4><p>1309 Hay Street, West Perth WA 6005, Australia</p></a></div></div><div class='arrow-left'></div></div>"></div>  

  <div class="markers" data-pin-icon="images/icons/map-pin-grey.png" data-location="Sage West Perth" data-lat="-31.947888" data-lng="115.8362825" data-place-id="ChIJufd18zGlMioRIFTfNbXwBAU" data-html="<div class='infoBox-text'><div class='address'><div class='address-content'><a target='_blank' href='http://maps.google.com/?q=Sage West Perth 1309 Hay Street, West Perth WA 6005, Australia'><h4>Sage West Perth</h4><p>1309 Hay Street, West Perth WA 6005, Australia</p></a></div></div><div class='arrow-left'></div></div>"></div>
  <div class="markers" data-pin-icon="images/icons/map-pin-grey.png" data-location="Ord Street" data-lat="-31.948616" data-lng="115.835907" data-place-id="EihKYW1lcyBTdCwgTm9ydGhicmlkZ2UgV0EgNjAwMywgQXVzdHJhbGlh" data-html="<div class='infoBox-text'><div class='address'><div class='address-content'><a target='_blank' href='http://maps.google.com/?q=Sage West Perth 1309 Hay Street, West Perth WA 6005, Australia'><h4>Sage West Perth</h4><p>1309 Hay Street, West Perth WA 6005, Australia</p></a></div></div><div class='arrow-left'></div></div>"></div>  
  <div class="markers" data-pin-icon="images/icons/map-pin-grey.png" data-location="Fielder Street" data-lat="-31.9509356" data-lng="115.8708259" data-place-id="ChIJ56QDo9fOsGoRUz4cTlhwjbM" data-html="<div class='infoBox-text'><div class='address'><div class='address-content'><a target='_blank' href='http://maps.google.com/?q=Sage West Perth 1309 Hay Street, West Perth WA 6005, Australia'><h4>Sage West Perth</h4><p>1309 Hay Street, West Perth WA 6005, Australia</p></a></div></div><div class='arrow-left'></div></div>"></div>
  <div class="markers" data-pin-icon="images/icons/map-pin-grey.png" data-location="Sterling Street" data-lat="-31.9468795" data-lng="115.8635481" data-place-id="ChIJ56QDo9fOsGoRUz4cTlhwjbM" data-html="<div class='infoBox-text'><div class='address'><div class='address-content'><a target='_blank' href='http://maps.google.com/?q=Sage West Perth 1309 Hay Street, West Perth WA 6005, Australia'><h4>Sage West Perth</h4><p>1309 Hay Street, West Perth WA 6005, Australia</p></a></div></div><div class='arrow-left'></div></div>"></div>
  -->
  



  
  <div class="default_marker" data-zoom="15" data-location="Australia" data-lat="-31.947794" data-lng="115.838702"></div>

  <div class="markers" 
      data-pin-icon="images/icons/map-pin-sage.svg" 
      data-location="1309 Hay Street, West Perth, WA 6005, Australia" 
      data-lat="-31.947794" 
      data-lng="115.838702" 
      data-html="<div class='infoBox-text hotel-version'><div class='address'><div class='address-icon'></div><div class='address-content'><a target='_blank' href='http://maps.google.com/?q=1309 Hay Street, West Perth, WA 6005, Australia'><h4>SAGE WEST PERTH</h4><p>1309 Hay Street, West Perth, WA 6005, Australia</p></a></div></div><div class='telephone'><div class='telephone-icon'></div><div class='telephone-content'><a href='javascript:void(0);'><p>+61 8 6500 9100</p></a></div></div><div class='mail'><div class='mail-icon'></div><div class='mail-content'><p><a href='mailto:reservations.westperth@sage-hotels.com'>reservations.westperth@sage-hotels.com</a></p></div></div><div class='arrow-left'></div></div>"></div>

  <div class="markers" data-pin-icon="images/icons/map-pin-grey.png" data-location="Location A" data-lat="-31.947888" data-lng="115.8362825" data-html="<div class='infoBox-text'><div class='address'><div class='address-content'><a target='_blank' href='http://maps.google.com/?q=Location A 1309 Hay Street, West Perth WA 6005, Australia'><h4>Location A</h4><p>1309 Hay Street, West Perth WA 6005, Australia</p></a></div></div><div class='arrow-left'></div></div>"></div>
  <div class="markers" data-pin-icon="images/icons/map-pin-grey.png" data-location="Location B" data-lat="-31.948616" data-lng="115.835907" data-html="<div class='infoBox-text'><div class='address'><div class='address-content'><a target='_blank' href='http://maps.google.com/?q=Location B 1309 Hay Street, West Perth WA 6005, Australia'><h4>Location B</h4><p>1309 Hay Street, West Perth WA 6005, Australia</p></a></div></div><div class='arrow-left'></div></div>"></div>
  <div class="markers" data-pin-icon="images/icons/map-pin-grey.png" data-location="Location C" data-lat="-31.9509356" data-lng="115.8708259" data-html="<div class='infoBox-text'><div class='address'><div class='address-content'><a target='_blank' href='http://maps.google.com/?q=Location C 1309 Hay Street, West Perth WA 6005, Australia'><h4>Location C</h4><p>1309 Hay Street, West Perth WA 6005, Australia</p></a></div></div><div class='arrow-left'></div></div>"></div>
  <div class="markers" data-pin-icon="images/icons/map-pin-grey.png" data-location="Location D" data-lat="-31.9468795" data-lng="115.8635481" data-html="<div class='infoBox-text'><div class='address'><div class='address-content'><a target='_blank' href='http://maps.google.com/?q=Location D 1309 Hay Street, West Perth WA 6005, Australia'><h4>Location D</h4><p>1309 Hay Street, West Perth WA 6005, Australia</p></a></div></div><div class='arrow-left'></div></div>"></div>

  
  <div class="container-fluid has-breakpoint">
    <div class="row">

      <div id="hotel-attraction-content" class="boxlist-item-container visible-md visible-lg">
        <div class="col-md-4">
          <div class="hotel-attraction-content-item boxlist-item">
            <div class="hotel-attraction-content-box boxlist-item-box">

              
              <div class="boxlist-item-content-image">
                <a href="javascript:void(0);" class="manic-image-container">
                  <img src="" data-image-desktop="images_cms/hotel/hotel-attraction-01.png" data-image-mobile="images_cms/hotel/hotel-attraction-01.png" alt="">
                </a>
              </div>

              <div class="hotel-attraction-content-copy">
                <div class="default-copy">
                  <h5><a href="javascript:void(0);">Subiaco Farmers Market</a></h5>
                  <p>Sabiaco is best known for its unique old village charm with cafes, restaurants, boutique fashion shopping and jewellery. The market opens every Saturday from 8am – 12:30pm, you can find specialty local produce, seafood, meats, breads and many more delicious items.</p>
                </div>
              </div>

              <div class="hotel-attraction-cta-container">
                <a href="javascript:void(0);" class="arrow-cta">Visit Website</a>
              </div>

            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="hotel-attraction-content-item boxlist-item">
            <div class="hotel-attraction-content-box boxlist-item-box">

              <div class="boxlist-item-content-image">
                <a href="javascript:void(0);" class="manic-image-container">
                  <img src="" data-image-desktop="images_cms/hotel/hotel-attraction-02.png" alt="">
                </a>
              </div>

              <div class="hotel-attraction-content-copy">
                <div class="default-copy">
                  <h5><a href="javascript:void(0);">Perth Zoo</a></h5>
                  <p>Animal aficionados will definitely relish a trip to Perth Zoo in nearby South Perth.</p>
                </div>
              </div>

              <div class="hotel-attraction-cta-container">
                <a href="javascript:void(0);" class="arrow-cta">Visit Website</a>
              </div>
              
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="hotel-attraction-content-item boxlist-item">
            <div class="hotel-attraction-content-box boxlist-item-box">


              <div class="boxlist-item-content-image">
                <a href="javascript:void(0);" class="manic-image-container">
                  <img src="" data-image-desktop="images_cms/hotel/hotel-attraction-03.png" alt="">
                </a>
              </div>

              <div class="hotel-attraction-content-copy">
                <div class="default-copy">
                  <h5><a href="javascript:void(0);">Leederville Farmers Market</a></h5>
                  <p>Opens every Sunday from 8am – 12:30pm, here is a celebration of West Australian produce. You can sample and buy the finest food farmers and local producers have to offer.</p>
                </div>
              </div>

              <div class="hotel-attraction-cta-container">
                <a href="javascript:void(0);" class="arrow-cta">Visit Website</a>
              </div>
              
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="hotel-attraction-content-item boxlist-item">
            <div class="hotel-attraction-content-box boxlist-item-box">


              <div class="boxlist-item-content-image">
                <a href="javascript:void(0);" class="manic-image-container">
                  <img src="" data-image-desktop="images_cms/hotel/hotel-attraction-04.png" data-image-mobile="images_cms/hotel/hotel-attraction-04.png" alt="">
                </a>
              </div>

              <div class="hotel-attraction-content-copy">
                <div class="default-copy">
                  <h5><a href="javascript:void(0);">High St Dispensary</a></h5>
                  <p>Dispensing all kinds of yummy items, this is THE place to go to in Freo. For those who don’t drink coffee, a Turmeric Chai is highly recommended.</p>
                </div>
              </div>

              <div class="hotel-attraction-cta-container">
                <a href="javascript:void(0);" class="arrow-cta">Visit Website</a>
              </div>
              
              
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="hotel-attraction-content-item boxlist-item">
            <div class="hotel-attraction-content-box boxlist-item-box">


              <div class="boxlist-item-content-image">
                <a href="javascript:void(0);" class="manic-image-container">
                  <img src="" data-image-desktop="images_cms/hotel/hotel-attraction-05.png" alt="">
                </a>
              </div>

              <div class="hotel-attraction-content-copy">
                <div class="default-copy">
                  <h5><a href="javascript:void(0);">Linton & Kay</a></h5>
                  <p>Check out the highly recommended Linton & Kay art galleries at Mandoon Estate.</p>
                </div>
              </div>

              <div class="hotel-attraction-cta-container">
                <a href="javascript:void(0);" class="arrow-cta">Visit Website</a>
              </div>
              
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="hotel-attraction-content-item boxlist-item">
            <div class="hotel-attraction-content-box boxlist-item-box">

              
              <div class="boxlist-item-content-image">
                <a href="javascript:void(0);" class="manic-image-container">
                  <img src="" data-image-desktop="images_cms/hotel/hotel-attraction-06.png" alt="">
                </a>
              </div>

              <div class="hotel-attraction-content-copy">
                <div class="default-copy">
                  <h5><a href="javascript:void(0);">Yelo</a></h5>
                  <p>If you’re exploring the North Beach and are on the go, pop in and grab a quick takeaway. This rustic surf shack is packed with locals and tourists alike and has fantastic views of the Indian Ocean.</p>
                </div>
              </div>

              <div class="hotel-attraction-cta-container">
                <a href="javascript:void(0);" class="arrow-cta">Visit Website</a>
              </div>
              
            </div>
          </div>
        </div>
      </div> <!-- hotel-attraction-content -->

      <!-- mobile version -->

      <div id="hotel-attraction-slider-container-mobile" class="boxlist-item-container mobile-height-version visible-sm visible-xs">
        <div id="hotel-attraction-slider-mobile">

          <div class="hotel-attraction-slider-mobile-item">
            <div class="hotel-attraction-content-item boxlist-item">
              <div class="hotel-attraction-content-box boxlist-item-box">

                <div class="boxlist-item-content-image">
                  <a href="javascript:void(0);" class="manic-image-container">
                    <img src="" data-image-mobile="images_cms/hotel/hotel-attraction-01.png" alt="">
                  </a>
                </div>

                <div class="hotel-attraction-content-copy">
                  <div class="default-copy">
                    <h5><a href="javascript:void(0);">Subiaco Farmers Market</a></h5>
                    <p>Opens every Saturday from 8am – 12:30pm, you can find specialty local produce, seafood...</p>
                  </div>
                </div>

                <div class="hotel-attraction-cta-container">
                  <a href="javascript:void(0);" class="arrow-cta">Visit Website</a>
                </div>

              </div>
            </div>
          </div> <!-- hotel-attraction-slider-mobile-item -->

          <div class="hotel-attraction-slider-mobile-item">
            <div class="hotel-attraction-content-item boxlist-item">
              <div class="hotel-attraction-content-box boxlist-item-box">

                <div class="boxlist-item-content-image">
                  <a href="javascript:void(0);" class="manic-image-container">
                    <img src="" data-image-mobile="images_cms/hotel/hotel-attraction-02.png" alt="">
                  </a>
                </div>

                <div class="hotel-attraction-content-copy">
                  <div class="default-copy">
                    <h5><a href="javascript:void(0);">Perth Zoo</a></h5>
                    <p>Animal aficionados will definitely relish a trip to Perth Zoo in nearby South Perth.</p>
                  </div>
                </div>

                <div class="hotel-attraction-cta-container">
                  <a href="javascript:void(0);" class="arrow-cta">Visit Website</a>
                </div>
                
              </div>
            </div>
          </div> <!-- hotel-attraction-slider-mobile-item -->

          <div class="hotel-attraction-slider-mobile-item">
            <div class="hotel-attraction-content-item boxlist-item">
              <div class="hotel-attraction-content-box boxlist-item-box">


                <div class="boxlist-item-content-image">
                  <a href="javascript:void(0);" class="manic-image-container">
                    <img src="" data-image-mobile="images_cms/hotel/hotel-attraction-03.png" alt="">
                  </a>
                </div>

                <div class="hotel-attraction-content-copy">
                  <div class="default-copy">
                    <h5><a href="javascript:void(0);">Leederville Farmers Market</a></h5>
                    <p>Boasting a rich café, restaurant and pub culture, stop by Leederville, Highgate and Mount...</p>
                  </div>
                </div>

                <div class="hotel-attraction-cta-container">
                  <a href="javascript:void(0);" class="arrow-cta">Visit Website</a>
                </div>
                
              </div>
            </div>
          </div> <!-- hotel-attraction-slider-mobile-item -->

          <div class="hotel-attraction-slider-mobile-item">
            <div class="hotel-attraction-content-item boxlist-item">
              <div class="hotel-attraction-content-box boxlist-item-box">


                <div class="boxlist-item-content-image">
                  <a href="javascript:void(0);" class="manic-image-container">
                    <img src="" data-image-mobile="images_cms/hotel/hotel-attraction-04.png" data-image-mobile="images_cms/hotel/hotel-attraction-04.png" alt="">
                  </a>
                </div>

                <div class="hotel-attraction-content-copy">
                  <div class="default-copy">
                    <h5><a href="javascript:void(0);">High St Dispensary</a></h5>
                    <p>Dispensing all kinds of yummy items, this is THE place to go to in Freo. For those who don’t...</p>
                  </div>
                </div>

                <div class="hotel-attraction-cta-container">
                  <a href="javascript:void(0);" class="arrow-cta">Visit Website</a>
                </div>
                
                
              </div>
            </div>
          </div> <!-- hotel-attraction-slider-mobile-item -->

          <div class="hotel-attraction-slider-mobile-item">
            <div class="hotel-attraction-content-item boxlist-item">
              <div class="hotel-attraction-content-box boxlist-item-box">


                <div class="boxlist-item-content-image">
                  <a href="javascript:void(0);" class="manic-image-container">
                    <img src="" data-image-mobile="images_cms/hotel/hotel-attraction-05.png" alt="">
                  </a>
                </div>

                <div class="hotel-attraction-content-copy">
                  <div class="default-copy">
                    <h5><a href="javascript:void(0);">Linton & Kay</a></h5>
                    <p>Check out the highly recommended Linton & Kay art galleries at Mandoon Estate...</p>
                  </div>
                </div>

                <div class="hotel-attraction-cta-container">
                  <a href="javascript:void(0);" class="arrow-cta">Visit Website</a>
                </div>
                
              </div>
            </div>
          </div> <!-- hotel-attraction-slider-mobile-item -->

          <div class="hotel-attraction-slider-mobile-item">
            <div class="hotel-attraction-content-item boxlist-item">
              <div class="hotel-attraction-content-box boxlist-item-box">

                
                <div class="boxlist-item-content-image">
                  <a href="javascript:void(0);" class="manic-image-container">
                    <img src="" data-image-mobile="images_cms/hotel/hotel-attraction-06.png" alt="">
                  </a>
                </div>

                <div class="hotel-attraction-content-copy">
                  <div class="default-copy">
                    <h5><a href="javascript:void(0);">Yelo</a></h5>
                    <p>If you’re exploring the North Beach and are on the go, pop in and grab a quick takeaway...</p>
                  </div>
                </div>

                <div class="hotel-attraction-cta-container">
                  <a href="javascript:void(0);" class="arrow-cta">Visit Website</a>
                </div>
                
              </div>
            </div>
          </div> <!-- hotel-attraction-slider-mobile-item -->

        </div>
      </div> <!-- hotel-attraction-slider-container-mobile -->




    </div>
  </div>
</article> <!-- hotel-attraction-section -->




