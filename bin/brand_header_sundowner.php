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
            <a href="brand_sundowner.php" id="desktop-header-logo">
              <img src="images/logo/sundowner-logo.png">
            </a>
          </div>          
        </div>
      </div>
      <div class="col-md-6">
        <div id="desktop-header-nav">
          <ul>
            <li><a href="brand_sundowner.php#about">About</a></li>
            <li><a href="brand_sundowner.php#location">Our Locations</a></li>
            <li><a href="brand_sundowner.php#offers">Offers</a></li>
            <li><a href="brand_sundowner.php#map">Map</a></li>
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
              <option value="Sundowner Bendigo Golden Reef">Sundowner Bendigo Golden Reef</option>
              <option value="Sundowner Dubbo Aberdeen Motor Inn">Sundowner Dubbo Aberdeen Motor Inn</option>
              <option value="Sundowner Echuca Nirebo">Sundowner Echuca Nirebo</option>
              <option value="Sundowner Gardenia Motor Inn Bass Hill">Sundowner Gardenia Motor Inn Bass Hill</option>
              <option value="Sundowner Horsham Westlander">Sundowner Horsham Westlander</option>
              <option value="Sundowner Hume Country Motor Inn">Sundowner Hume Country Motor Inn</option>
              <option value="Sundowner Huckisson - Jervis Bay">Sundowner Huckisson - Jervis Bay</option>
              <option value="Sundowner Oriana Orange">Sundowner Oriana Orange</option>
              <option value="Sundowner Rockhampton Gladstone">Sundowner Rockhampton Gladstone</option>
              <option value="Sundowner Townhouse Goondiwindi">Sundowner Townhouse Goondiwindi</option>
              <option value="Sundowner Twin Towns Motel">Sundowner Twin Towns Motel</option>
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
      
      <li><a href="javascript:void(0);">Victoria</a></li>
      <li><a href="javascript:void(0);">Queensland</a></li>
      <li><a href="javascript:void(0);">New South Wales</a></li>
      
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
    <!-- <a href="#"><span>SilverNeedle <br class="hidden-xs hidden-sm"> Hospitality Group</span></a> -->
    <a href="#"><span>NextHotels.com</span></a>
  </div>
</div>