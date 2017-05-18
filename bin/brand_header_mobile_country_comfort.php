<!-- <div id="mobile-header-spacer"></div> -->
<header id="mobile-header">

  <div class="mobile-header-bg"></div>

  <div id="mobile-header-content-container">
    <div id="mobile-header-close-btn"><span>Menu</span></div>
    <div id="mobile-header-open-btn"></div>

    <a href="brand_country_comfort.php" id="mobile-header-logo">
      <img src="images/logo/country-comfort-logo.png">
    </a>  
  
    <a href="javascript:void(0);" id="mobile-header-calendar-open-btn"><span>Book Now</span></a>  
    <a href="javascript:void(0);" id="mobile-header-calendar-close-btn"><span>Book Now</span></a>          
  </div>

</header> <!-- #mobile-header -->

<header id="mobile-header-expanded">

  <div id="mobile-header-menu-container">
    <div id="destination-indicator">
      <p>Select a destination:</p>
    </div>
    <div id="country-indicator">
      <p>Australia</p>
    </div>

    <nav id="mobile-menu">
      <ul>
        <li><a href="brand_location_country_comfort.php#australia/south-australia">South Australia</a></li>
        <li><a href="brand_location_country_comfort.php#australia/western-australia">Western Australia</a></li>
        <li><a href="brand_location_country_comfort.php#australia/new-south-wales">New South Wales</a></li>
        <li><a href="brand_location_country_comfort.php#australia/queensland">Queensland</a></li>
      </ul>
    </nav>
    <div id="brand-link" class="menu-link">
      <a href="#"><span>Our Brands</span></a>
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

            <option value="Country Comfort Adelaide">Country Comfort Adelaide</option>
            <option value="Country Comfort Adelaide Manor">Country Comfort Adelaide Manor</option>
            <option value="Country Comfort Amity Motel Albany">Country Comfort Amity Motel Albany</option>
            <option value="Country Comfort Armidale">Country Comfort Armidale</option>
            <option value="Country Comfort Bundaberg International">Country Comfort Bundaberg International</option>
            <option value="Country Comfort Coffs Harbour">Country Comfort Coffs Harbour</option>
            <option value="Country Comfort Cowra">Country Comfort Cowra</option>
            <option value="Country Comfort Gin Gin">Country Comfort Gin Gin</option>
            <option value="Country Comfort Hunts Liverpool">Country Comfort Hunts Liverpool</option>
            <option value="Country Comfort Inter City Perth">Country Comfort Inter City Perth</option>
            <option value="Country Comfort Mt Gambier">Country Comfort Mt Gambier</option>
            <option value="Country Comfort Newcastle Airport & Convention Centre">Country Comfort Newcastle Airport & Convention Centre</option>
            <option value="Country Comfort Port Macquarie Waters Edge Boutique">Country Comfort Port Macquarie Waters Edge Boutique</option>
            <option value="Country Comfort Toowoomba">Country Comfort Toowoomba</option>

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