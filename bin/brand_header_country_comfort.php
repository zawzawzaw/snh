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
            <a href="index.php" id="desktop-header-logo">
              <img src="images/logo/country-comfort-logo.png">
            </a>
          </div>          
        </div>
      </div>
      <div class="col-md-6">
        <div id="desktop-header-nav">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#location">Our Locations</a></li>
            <li><a href="#offers">Offers</a></li>
            <li><a href="#map">Map</a></li>
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
      
      <li><a href="hotel.php">Western Australia </a></li>
      <li><a href="hotel.php">Northern Australia </a></li>
      <li><a href="hotel.php">South Australia</a></li>
      <li><a href="hotel.php">Queensland</a></li>
      <li><a href="hotel.php">New South Wales </a></li>
      <li><a href="hotel.php">Victoria</a></li>
      
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
    <a href="#"><span>Our Brands</span></a>
  </div>
  <div id="group-link" class="menu-link">
    <a href="#"><span>SilverNeedle™ <br class="hidden-xs hidden-sm"> Hospitality Group</span></a>
  </div>
</div>