<!-- <div id="mobile-header-spacer"></div> -->
<header id="mobile-header">

  <div class="mobile-header-bg"></div>

  <div id="mobile-header-content-container">
    <div id="mobile-header-close-btn"><span>Menu</span></div>
    <div id="mobile-header-open-btn"></div>

    <a href="brand_next.php" id="mobile-header-logo">
      <img src="images/logo/next-logo.png">
    </a>  
  
    <a href="javascript:void(0);" id="mobile-header-calendar-open-btn"><span>Book Now</span></a>  
    <a href="javascript:void(0);" id="mobile-header-calendar-close-btn"><span>Book Now</span></a>          
  </div>

</header> <!-- #mobile-header -->

<header id="mobile-header-expanded">

  <div id="mobile-header-menu-container">
    <div id="destination-indicator">
      <p>Select Brand:</p>
    </div>
    <!-- <div id="country-indicator">
      <p>Australia</p>
    </div> -->

    <nav id="mobile-menu">
      <ul>
        <li><a href="hotel.php">next hotels</a></li>
        <li><a href="hotel.php">sage hotels</a></li>
        <li><a href="hotel.php">kafnu</a></li>
        <li><a href="hotel.php">Chifley Hotels</a></li>
        <li><a href="hotel.php">Country Comfort</a></li>      
        <li><a href="hotel.php">Sundowner Inns</a></li>
        <li><a href="hotel.php">Kiridara</a></li>
        <li><a href="hotel.php">Riva Arun</a></li>      
        <li><a href="hotel.php">Riva Surya</a></li>      
      </ul>
    </nav>
    <div id="brand-link" class="menu-link no-padding">
      <a href="#"><span>Hotel Directory</span></a>
    </div>
    <div id="group-link" class="menu-link no-padding">
      <a href="#"><span>Next Story Group</span></a>
    </div>
  </div> <!-- #mobile-header-menu-container -->

  <div id="mobile-header-booking-form">
    <form action="">
      <div class="input-box">
        <label for="hotel">Select Brand</label>
        <div class="dropdown">
          <select name="brand" id="brand" class="brand-dropdown">
            <option value="Next Hotel">Next Hotel</option>
              <option value="Sage Hotel">Sage Hotel</option>
              <option value="Kafnu">Kafnu</option>
              <option value="Chifely Hotel">Chifely Hotel</option>              
              <option value="Country Comfort">Country Comfort</option>              
              <option value="Sundowner Inns">Sundowner Inns</option>
              <option value="Kiridara">Kiridara</option>
              <option value="Riva Arun">Riva Arun</option>
              <option value="Riva Surya">Riva Surya</option>            
          </select>
        </div>
      </div>
      <div class="input-box">
        <label for="hotel">Select Hotel</label>
        <div class="dropdown">
          <select name="hotel" id="hotel" class="hotel-dropdown">
            <option value="NEXT Hotel Brisbane">NEXT Hotel Brisbane</option>
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