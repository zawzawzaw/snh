<div id="default-header-spacer" class="hidden-xs hidden-sm"></div>
<div id="default-header-mobile-spacer" class="visible-xs visible-sm"></div>


<div id="booking-engine-form">   

  <div id="booking-engine-step-0" data-step="0" class="booking-steps active-step">
      <div id="booking-engine-step-0-header">
        <h3>Please select the dates to see the available rooms for your stay.</h3>
        <h5>date & number of guest</h5>
      </div>
      <div id="booking-engine-step-0-content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="booking-engine-booking-form">              
                <div class="booking-form">                
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
                      <input type="text" name="date" id="booking-engine-date-picker" readonly="true" onfocus="this.blur()">
                    </div>
                  </div>
                  <div class="input-box row">
                    <div class="input-box-col-1 col-md-6 col-sm-6 col-xs-6">
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
                    <div class="input-box-col-2 col-md-6 col-sm-6 col-xs-6">
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
                    <button class="check-availability square-cta highlight-version">check availability</button>
                  </div>                
                </div>
                <div id="booking-calendar"></div>
              </div>            
            </div>
          </div>
        </div>        
      </div>
  </div>

  <div id="booking-engine-steps-indicator">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3">
          <div id="step-indicator-1" class="step active-step" data-step="1">
            <a href="#" class="go-to-step">
              <h3>1. Select your room</h3>
              <h5>accommodation & offers</h5>
            </a>
          </div>
        </div>
        <div class="col-md-3">
          <div id="step-indicator-2" class="step" data-step="2">
            <a href="#" class="go-to-step">
              <h3>2. Personalise your stay</h3>
              <h5>service experience</h5>
            </a>
          </div>
        </div>
        <div class="col-md-3">
          <div id="step-indicator-3" class="step" data-step="3">
            <a href="#" class="go-to-step">
              <h3>3. Make payment </h3>
              <h5>guest & payment details</h5>
            </a>
          </div>
        </div>
        <div class="col-md-3">
          <div id="step-indicator-4" class="step" data-step="4">
            <a href="#" class="go-to-step">
              <h3>4. Confirmation</h3>
              <h5>enjoy your stay</h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
        
  <div id="booking-engine-steps-container">

    <div id="booking-engine-step-1" data-step="1" class="booking-steps">
      <div id="booking-engine-step-1-header">      
        <div class="container-fluid">
          <div class="row">
            <form id="booking-engine-search-form" action="" class="default-form">
              <div class="col-md-3">
                <div class="form-group">
                  <label for="promotion_code">Promotion Code</label>
                  <input type="text" name="promotion_code" id="promotion_code">
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-group">
                  <label for="arrival_departure">Arrival <i class="fa fa-long-arrow-right" aria-hidden="true"></i> Departure</label>
                  <div class="date-input">
                    <input type="text" name="arrival_departure" id="arrival_departure">
                  </div>
                  <div id="step-1-booking-calendar"></div>
                </div>
              </div>
              <div class="col-md-2">
                <div class="form-group">
                  <label for="adults">Adults</label>
                  <div class="manic-dropdown">
                    <select name="adults" id="adults">
                      <option value="">Please Select</option>
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
              <div class="col-md-2">
                <div class="form-group">
                  <label for="children">Children <span>≤ 11 years old</span></label>
                  <div class="manic-dropdown">
                    <select name="children" id="children">
                      <option value="">Please Select</option>
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
              <div class="col-md-2">
                <div class="cta-container">
                  <button type="submit" class="square-cta highlight-version">change search</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div id="booking-engine-step-1-content">
        <div class="container-fluid">
          <div class="col-md-12">
            <div class="booking-no-room">
              <div class="booking-no-room-content">
                <h1>All our Sage Hotels West Perth rooms are fully occupied within your searched date range, here are our alternative hotels you could investigate</h1>      
                <p>Aenean a ultrices lectus. Fusce sem elit, malesuada tincidunt aliquam vitae, rutrum id diam. Vivamus cursus egestas ligula in condimentum. Aliquam id pretium orci.</p>
              </div>

              <div id="booking-no-room-suggestion">
                <div id="booking-no-room-suggestion-carousel">
                  <div class="carousel-content">
                    <img src="images_cms/home/home-location-01.jpg" alt="">                
                  </div>
                  <div class="carousel-content">
                    <img src="images_cms/home/home-location-02.jpg" alt="">                
                  </div>
                  <div class="carousel-content">
                    <img src="images_cms/home/home-location-03.jpg" alt="">                
                  </div>
                </div>
                <div id="booking-no-room-suggestion-carousel-text-1" class="active booking-no-room-suggestion-carousel-text">
                  <div class="row">
                    <div class="col-md-12">
                      <div id="booking-no-room-suggestion-carousel-header-text">
                        <h4>western perth</h4>
                        <h3>Country Comfort Inter City Perth</h3>
                        <p>Sage Hotel West Perth is your modern gateway to the City of Light, right in the heart of West Perth, walking distance to Kings Park and on the city fringe of the city. With customer service that’s all about you, you couldn’t do better than booking a stay with us.</p>
                      <a href="#" class="arrow-cta">Visit Website</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="booking-no-room-suggestion-carousel-text-2" class="booking-no-room-suggestion-carousel-text">
                  <div class="row">
                    <div id="booking-no-room-suggestion-carousel-header-text" class="col-md-2">
                      <h4>Sage Hotels</h4>
                      <h3>West Perth</h3>
                    </div>
                    <div id="booking-no-room-suggestion-carousel-content-text" class="col-md-8 col-md-offset-1">
                      <h1>Gateway to the City of Light 2</h1>
                      <p>Sage Hotel West Perth is your modern gateway to the City of Light, right in the heart of West Perth, walking distance to Kings Park and on the city fringe of the city. With customer service that’s all about you, you couldn’t do better than booking a stay with us.</p>
                      <a href="#" class="arrow-cta">Read more</a>
                    </div>
                  </div>
                </div>
                <div id="booking-no-room-suggestion-carousel-text-3" class="booking-no-room-suggestion-carousel-text">
                  <div class="row">
                    <div id="booking-no-room-suggestion-carousel-header-text" class="col-md-2">
                      <h4>Sage Hotels</h4>
                      <h3>West Perth</h3>
                    </div>
                    <div id="booking-no-room-suggestion-carousel-content-text" class="col-md-8 col-md-offset-1">
                      <h1>Gateway to the City of Light 3</h1>
                      <p>Sage Hotel West Perth is your modern gateway to the City of Light, right in the heart of West Perth, walking distance to Kings Park and on the city fringe of the city. With customer service that’s all about you, you couldn’t do better than booking a stay with us.</p>
                      <a href="#" class="arrow-cta">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>          
        </div>
      </div>
    </div>  

  </div>
      
        

  

</div>

<!-- 
    ____  ____  ____     __  ______
   / __ \/ __ \/ __ \   / / / / __ \
  / /_/ / / / / /_/ /  / / / / /_/ /
 / ____/ /_/ / ____/  / /_/ / ____/
/_/    \____/_/       \____/_/

 -->

<div class="rates-breakdown-popup-container">
  <div class="rates-breakdown-popup">
    <div class="rates-breakdown-popup-title">
      <h5>7 days Advanced Purchase <span>Rate Breakdown</span></h5>
      <div class="boxlist-item-content-price rates-breakdown-popup-price">
        <h6>4 nights from</h6>
        <p class="content-price">
          <span class="currency">aud</span>
          <span class="number">$626</span>
        </p>
      </div>
    </div>
    <div class="rates-breakdown-popup-content">
      <div class="rates-breakdown-popup-rate">
        <div class="rates-breakdown-popup-rate-content-date">
          <p>Sun, 26 Mar</p>
        </div>
        <div class="rates-breakdown-popup-rate-content-price">
          <p class="price">$133.00</p>
        </div>
      </div>
      <div class="rates-breakdown-popup-rate">
        <div class="rates-breakdown-popup-rate-content-date">
          <p>Sun, 26 Mar</p>
        </div>
        <div class="rates-breakdown-popup-rate-content-price">
          <p class="price">$133.00</p>
        </div>
      </div>
      <div class="rates-breakdown-popup-rate">
        <div class="rates-breakdown-popup-rate-content-date">
          <p>Sun, 26 Mar</p>
        </div>
        <div class="rates-breakdown-popup-rate-content-price">
          <p class="price">$133.00</p>
        </div>
      </div>
      <div class="rates-breakdown-popup-rate">
        <div class="rates-breakdown-popup-rate-content-date">
          <p>Sun, 26 Mar</p>
        </div>
        <div class="rates-breakdown-popup-rate-content-price">
          <p class="price">$133.00</p>
        </div>
      </div>
    </div> 
    <a href="#" class="back-arrow-cta back-to-search-btn">Back to see rooms</a>     
  </div>
</div>

<div class="cancellation-popup-container">
  <div class="cancellation-popup">
    <div class="cancellation-popup-title">
      <h5>7 days Advanced Purchase <span>Rate Breakdown</span></h5>
    </div>
    <div class="cancellation-popup-content">
      <p>Advance Purchase rates are non-refundable unless stated otherwise. Customers credit cards will be charged immediately upon booking for the full amount of the stay. Cancellations or failure to arrive will result in forfeiture of full payment.</p>
    </div> 
    <a href="#" class="back-arrow-cta back-to-search-btn">Back to see rooms</a>     
  </div>
</div>

<div class="cvv-popup-container">
  <div class="cvv-popup">
    <div class="cvv-popup-title">
      <h5>Where is CVV?</h5>
    </div>
    <div class="cvv-popup-content">
      <p>For Visa, MasterCard, Diners Club, UnionPay, the 3 digits on the back of your card. (Left)</p>
      <p>For American Express, the 4 digits on the front of your card. (Right)</p>

      <div class="card-front"></div>
      <div class="card-back"></div>
    </div> 
    <a href="#" class="back-arrow-cta back-to-payment-btn">Back to payment</a>     
  </div>
</div>

<div id="default-footer-spacer" class="hidden-xs hidden-sm"></div>