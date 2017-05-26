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
      <div class="col-md-3">
        <div id="desktop-header-menu-logo-container">
          <div id="desktop-header-logo-container">
            <a href="#" id="desktop-menu-bar" class="open">
              <img src="images/icons/menu-bar.svg" alt="">     
              <span>Menu</span>
            </a>
            <a href="brand_chifley.php" id="desktop-header-logo">
              <img src="images/logo/chifley-logo.png">
            </a>
          </div>          
        </div>
      </div>
      <div class="col-md-6">
        <div id="desktop-header-nav">
          <ul>
            <li><a href="brand_chifley.php#about">About</a></li>
            <li><a href="brand_chifley.php#location">Our Locations</a></li>
            <li><a href="brand_chifley.php#offers">Offers</a></li>
            <li><a href="brand_chifley.php#map">Map</a></li>
          </ul>
        </div>
      </div>  
      <div class="col-md-3">
        <a href="javascript:void(0);" id="book-now"><span>Book Now</span></a>        
      </div>
    </div>
  </div>  

  <div id="desktop-header-booking-form">
      <form action="">
        <div class="input-box">
          <label for="hotel">Select Hotel</label>
          <div class="dropdown">
            <select name="hotel" id="hotel" class="hotel-dropdown">

              <option value="Chifley Alice Springs Resort">Chifley Alice Springs Resort</option>
              <option value="Chifley Apartments Newcastle">Chifley Apartments Newcastle</option>
              <option value="Chifley Executive Suites Newcastle">Chifley Executive Suites Newcastle</option>
              <option value="Chifley Plaza Townsville">Chifley Plaza Townsville</option>
              <option value="The Chifley On South Terrace">The Chifley On South Terrace</option>
              
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
      <li><a href="hotel.php">Alice Springs</a></li>
      <li><a href="hotel.php">Newcastle</a></li>
      <li><a href="hotel.php">Townsville</a></li>
      
    </ul>    
  </div>

  <!-- 
  <div id="sage-links" class="full-height">
    <div class="scroller">
      <ul>
        <li><a href="hotel.php">Country Comfort Hotel Adelaide</a></li>
        <li><a href="hotel.php">Country Comfort Adelaide Manor</a></li>
        <li><a href="hotel.php">Country Comfort Amity Motel Albany</a></li>
        <li><a href="hotel.php">Country Comfort Armidale</a></li>
        <li><a href="hotel.php">Country Comfort Bundaberg International</a></li>
        <li><a href="hotel.php">Country Comfort Coffs Harbour</a></li>
        <li><a href="hotel.php">Country Comfort gin gin</a></li>
        <li><a href="hotel.php">Country Comfort hunts liverpool</a></li>   
        <li><a href="hotel.php">Country Comfort Inter City Perth</a></li>   
        <li><a href="hotel.php">Country Comfort Inter Mt Gambier</a></li>   
        <li><a href="hotel.php">Country Comfort Newcastle Airport & Convention Centre</a></li>   
        <li><a href="hotel.php">Country Comfort Port Macquarie Water Edge Boutique</a></li>   
        <li><a href="hotel.php">Country Comfort Toowoomba</a></li>   
      </ul>        
    </div>
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