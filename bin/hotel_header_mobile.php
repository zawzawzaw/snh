<!-- <div id="mobile-header-spacer"></div> -->
<header id="mobile-header">

  <div class="mobile-header-bg"></div>

  <div id="mobile-header-content-container">
    <div id="mobile-header-close-btn"><span>Menu</span></div>
    <div id="mobile-header-open-btn"></div>

    <a href="hotel.php" id="mobile-header-logo">
      <img src="images/logo/sage-west-logo.svg">
    </a>  
  
    <a href="index.php" id="mobile-header-calendar-open-btn"><span>Book Now</span></a>  
    <a href="index.php" id="mobile-header-calendar-close-btn"><span>Book Now</span></a>          
  </div>

</header> <!-- #mobile-header -->

<header id="mobile-header-expanded">

  <div id="mobile-header-menu-container">
    <div id="destination-indicator" class="link-to-location">
      <a href="brand_location.php"><p>Select another location:</p></a>
    </div>
    <nav id="mobile-menu" class="has-mobile-sub-menu">
      <span>sage west perth</span>
      <ul>
        <li><a href="room_index.php">rooms</a></li>
        <li><a href="offer_index.php">offers</a></li>
        <li><a href="dining_index.php">dining</a></li>
        <li class="has-subnav">
          <a href="facilities.php">facilities</a>
          <ul class="mobile-sub-menu">
            <li><a href="facilities.php#lounge">Lounge</a></li>
            <li><a href="facilities.php#gym">Gym</a></li>
            <li><a href="facilities.php#spa">Spa</a></li>
          </ul>
          <div class="expand-btn"></div>
        </li>
        <li><a href="gallery.php">gallery</a></li>
        <li><a href="activities.php">activities</a></li>
        <li><a href="reviews.php">reviews</a></li>
        <li><a href="events.php">events</a></li>
        <li><a href="location.php">Location</a></li>
      </ul>
    </nav>
    <div id="brand-link" class="menu-link">
      <a href="brand_location_country_comfort.php"><span>Hotel Directory</span></a>
    </div>
    <div id="group-link" class="menu-link">
      <!-- <a href="#"><span>SilverNeedle <br class="hidden-xs hidden-sm"> Hospitality Group</span></a> -->
      <a href="#"><span>NextHotels.com</span></a>
    </div>
  </div> <!-- #mobile-header-menu-container -->

  <div id="mobile-header-booking-form">
    <form action="">
      <div class="input-box">
        <label for="hotel">Select Hotel</label>
        <div class="dropdown">
          <select name="hotel" id="hotel" class="hotel-dropdown">
            <option value="Sage Hotel Adelaide">Sage Hotel Adelaide</option>
            <option value="Sage Hotel James Street">Sage Hotel James Street</option>
            <option value="Sage Hotel West Perth">Sage Hotel West Perth</option>
            <option value="Sage Hotel Wollongong">Sage Hotel Wollongong</option>
          </select>
        </div>
      </div>
      <div class="input-box">
        <label for="hotel">Arrival <i class="fa fa-long-arrow-right" aria-hidden="true"></i> Departure</label>
        <div class="date-input">
          <input type="text" name="date" id="mobile-date-picker" readonly="true" onfocus="this.blur()">
        </div>
      </div>
      <div class="input-box row">
        <div class="input-box-col-1 col-sm-6 col-xs-6">
          <label for="">Adults</label>
          <div class="dropdown">
            <select name="adults" id="adults">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
        </div>
        <div class="input-box-col-2 col-sm-6 col-xs-6">
          <label for="">Children</label>
          <div class="dropdown">
            <select name="children" id="children">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="input-box-disclaimer">
            <p>11 years & below</p>
          </div>
          
        </div>
      </div>
      <div class="input-box">
        <label for="">Promotion Code</label>
        <input type="text" name="promo_code">
      </div>
      <div class="input-box">
        <input type="submit" class="check-availability square-cta highlight-version" value="check availability">
      </div>
    </form>
  </div>
  <div id="mobile-header-booking-calendar"></div>

</header> <!-- #mobile-header-expanded -->    