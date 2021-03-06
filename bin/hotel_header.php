<!-- 
   ____  _____ ____  _  _______ ___  ____    _   _ _____    _    ____  _____ ____  
  |  _ \| ____/ ___|| |/ /_   _/ _ \|  _ \  | | | | ____|  / \  |  _ \| ____|  _ \ 
  | | | |  _| \___ \| ' /  | || | | | |_) | | |_| |  _|   / _ \ | | | |  _| | |_) |
  | |_| | |___ ___) | . \  | || |_| |  __/  |  _  | |___ / ___ \| |_| | |___|  _ < 
  |____/|_____|____/|_|\_\ |_| \___/|_|     |_| |_|_____/_/   \_\____/|_____|_| \_\
                                           
-->

<header id="desktop-header">
  
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-2">
        <div id="desktop-header-menu-logo-container">
          <div id="desktop-header-logo-container">
            <a href="#" id="desktop-menu-bar" class="open">
              <img src="images/icons/menu-bar.svg" alt="">     
              <span>Menu</span>       
            </a>
            <a href="hotel.php" id="desktop-header-logo">
              <img src="images/logo/sage-west-logo.svg">            
            </a>
          </div>          
        </div>
      </div>
      <div class="col-md-8">
        <div id="desktop-header-nav">
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
      <div class="col-md-2">
        <div id="weather-container">
          <div class="current-location-container">
            <h6 class="current-country">Australia</h6>
            <span class="current-location">West Perth</span>
          </div>
          <div class="seperator"></div>
          <div class="time-weather-container">
            <ul>
              <li><span class="time">2:24<sup class="ampm">pm</sup></span></li>
              <li><span class="temperature">23°C</span></li>
            </ul>
          </div>
        </div>
        <a href="#" id="book-now"><span>Book Now</span></a>        
      </div>
    </div>
  </div>

  <div id="desktop-header-booking-form">
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
            <input type="text" name="date" id="date-picker" readonly="true" onfocus="this.blur()">
          </div>
        </div>
        <div class="input-box row">
          <div class="input-box-col-1 col-md-6">
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
          <div class="input-box-col-2 col-md-6">
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
  <div id="desktop-header-booking-calendar">
    
  </div>
</header> <!-- #desktop-header -->

<div id="desktop-header-menu">          

  <div id="destination-indicator">
    <p>Select a destination:</p>
  </div>
  <div id="country-indicator">
    <p>Australia</p>
  </div>

  <div id="sage-links">
    <ul>
      <li><a href="hotel.php">Adelaide</a></li>
      <li><a href="hotel.php">brisbane</a></li>
      <li><a href="hotel.php">west perth</a></li>
      <li><a href="hotel.php">wollongong</a></li>
    </ul>    
  </div>

  <!-- 
  <div id="sage-links">
    <ul>
      <li><a href="hotel.php">sage adelaide</a></li>
      <li><a href="hotel.php">Sage James Street Brisbane</a></li>
      <li><a href="hotel.php">sage west perth</a></li>
      <li><a href="hotel.php">sage wollongong</a></li>
    </ul>
  </div>
  -->
  
  <div id="brand-link" class="menu-link">
    <a href="brand_location_country_comfort.php"><span>Hotel Directory</span></a>
  </div>
  <div id="group-link" class="menu-link">
    <!-- <a href="#"><span>SilverNeedle <br class="hidden-xs hidden-sm"> Hospitality Group</span></a> -->
    <a href="#"><span>NextHotels.com</span></a>
  </div>
</div>