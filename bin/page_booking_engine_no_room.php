<div id="default-header-spacer" class="hidden-xs hidden-sm"></div>
<div id="default-header-mobile-spacer" class="visible-xs visible-sm"></div>


<div id="booking-engine-form">   

  <div id="booking-engine-step-0" data-step="0" class="booking-steps active-step">
      <div id="booking-engine-step-0-header">
        <h3>Please select the dates to see the available rooms for your stay.</h3>
        <h5>date & number of guests</h5>
      </div>
      <div id="booking-engine-step-0-content">
        <div class="container-fluid has-breakpoint">
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
        <div class="container-fluid has-breakpoint">
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
                    <input type="text" name="arrival_departure" id="arrival_departure" readonly="true">
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
        <div class="container-fluid has-breakpoint">
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
    <a href="#" class="back-arrow-cta back-to-search-btn">Close</a>     
  </div>
</div>

<div class="cancellation-popup-container">
  <div class="cancellation-popup">
    <div class="cancellation-popup-title">
      <h5>7 days Advanced Purchase <span>Cancellation Policies</span></h5>
    </div>
    <div class="cancellation-popup-content">
      <p>Advance Purchase rates are non-refundable unless stated otherwise. Customers credit cards will be charged immediately upon booking for the full amount of the stay. Cancellations or failure to arrive will result in forfeiture of full payment.</p>
    </div> 
    <a href="#" class="back-arrow-cta back-to-search-btn">Close</a>     
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
    <a href="#" class="back-arrow-cta back-to-payment-btn">Close</a>     
  </div>
</div>

<script id="summary-room-template" type="text/x-handlebars-template">
  <div class="reservation-summary-expandable-content selected-rooms">
      <div class="manic-expand-container desktop-open-version">
          <div class="scroll-target" data-value="title-{{ no_of_room_booked }}"></div>
          <div class="manic-expand-container-title">
              <h6>Room {{ no_of_room_booked }}</h6> </div>
          <div class="manic-expand-container-btn"></div>
          <div class="manic-expand-container-content">
              <div class="row">
                  <div class="col-md-5">
                      <div class="manic-image-container"><img src="" data-image-desktop="images_cms/room/room-index-standard-room.jpg" alt=""></div>
                  </div>
                  <div class="col-md-7">
                      <div class="selected-room">
                          <div class="selected-room-title">
                              <h5>{{ room_title }}</h5> <a href="#" class="delete-room-btn delete-btn"><i class="fa fa-times"></i></a> </div>
                          <div class="selected-room-content">
                              <div class="selected-room-content-details">
                                  <h5>{{ rate_title }}</h5>
                                  <p>2 Adults, 0 Children</p>
                              </div>
                              <div class="selected-room-content-price"> <span class="price">{{ price }}</span> </div>
                          </div>
                      </div>
                      <div class="selected-room-nightly-rates">
                          <div class="selected-room-nightly-rates-title"> <a href="#" class="nightly-rates-popup-cta"><h6>Nightly Rates</h6></a> </div>
                      </div>
                      <div class="selected-room-cancellation-policies">
                          <div class="selected-room-cancellation-policies-title"> <a href="#" class="cancellation-popup-cta"><h6>Cancellation Policy </h6></a> </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</script>

<script id="summary-room-template-02" type="text/x-handlebars-template">
  <div class="reservation-summary-content-selected-room">
      <div class="reservation-summary-content-selected-room-title">
          <h5>Room {{ no_of_room_booked }}</h5>
          <p>{{ rate_title_shorten }}</p>
      </div>
      <div class="reservation-summary-content-selected-room-price">
          <p class="price">{{ price }}</p>
      </div>
  </div>
</script>

<script id="summary-extra-template" type="text/x-handlebars-template">
  <div class="selected-extra">
      <div class="row">
          <div class="col-md-5">
              <div class="manic-image-container"><img src="" data-image-desktop="images_cms/booking/extra-booking-item-01.jpg" alt=""></div>
          </div>
          <div class="col-md-7">
              <div class="selected-extra-title">
                  <h5>{{ extra_title }}</h5> <a href="#" class="delete-extra-btn delete-btn"><i class="fa fa-times"></i></a> </div>
              <div class="selected-extra-content">
                  <div class="selected-extra-content-details">
                      {{#ifCond quantity ">" "0" }}
                        <p>{{ quantity }} Bookings</p>
                      {{/ifCond}}
                      {{#ifCond adult ">" "0" }}
                        <p>{{ adult }} Adults</p>
                      {{/ifCond}}
                      {{#ifCond child ">" "0" }}
                        <p>{{ child }} Children</p>
                      {{/ifCond}}
                  </div>
                  <div class="selected-extra-content-price"> <span class="price">{{ extra_price }}</span> </div>
              </div>
          </div>
      </div>
  </div>
</script>

<script id="summary-extra-template-02" type="text/x-handlebars-template">
  <div class="reservation-summary-content-selected-extra">
    <div class="reservation-summary-content-selected-extra-title">
        <p>{{ extra_title }}</p>
    </div>
    <div class="reservation-summary-content-selected-extra-price">
        <p class="price">{{ extra_price }}</p>
    </div>
</div>

</script>

<script id="guest-detail-for-each-room-form" type="text/x-handlebars-template">
  <div class="guest-for-each-room">
    <div class="row">
      <div class="col-md-4">
        <span class="room-title">Room {{ no_of_room_booked }}</span>
        <h5 class="room-detail-no">Guest Details</h5>
        <a href="#" class="visible-xs visible-sm show-hide-guest-detail-form"><i class="fa fa-angle-down" aria-hidden="true"></i></a>
      </div>
      <div class="col-md-8">
        <div id="personal_info" class="default-form">
          <div class="row guest-name-inputs">
              <div class="col-md-6">
                  <div class="form-group">
                      <label for="first_name">First Name</label>
                      <input type="text" name="first_name" class="required"> 
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="form-group">
                      <label for="last_name">Last Name</label>
                      <input type="text" name="last_name" class="required"> 
                  </div>
              </div>
          </div>
          <div class="row">
              <div class="col-md-12">
                  <div class="form-group">
                      <label for="special_requests">Special Requests</label>
                      <textarea name="special_requests"></textarea>
                  </div>
              </div>
          </div>
          <div class="row">
              <div class="col-md-6">
                  <div class="form-group">
                      <label for="estimated_check_in_time">Estimated Check-In Time</label>
                      <div class="manic-dropdown">
                          <select name="estimated_check_in_time" id="estimated_check_in_time">
                              <option value="">Please select</option>
                              <option value="00:00" selected>00:00</option>
                              <option value="00:30">00:30</option>
                              <option value="01:00">01:00</option>
                              <option value="01:30">01:30</option>
                              <option value="02:00">02:00</option>
                              <option value="02:30">02:30</option>
                              <option value="03:00">03:00</option>
                              <option value="03:30">03:30</option>
                              <option value="04:00">04:00</option>
                              <option value="04:30">04:30</option>
                              <option value="05:00">05:00</option>
                              <option value="05:30">05:30</option>
                              <option value="06:00">06:00</option>
                              <option value="06:30">06:30</option>
                              <option value="07:00">07:00</option>
                              <option value="07:30">07:30</option>
                              <option value="08:00">08:00</option>
                              <option value="08:30">08:30</option>
                              <option value="09:00">09:00</option>
                              <option value="09:30">09:30</option>
                              <option value="10:00">10:00</option>
                              <option value="10:30">10:30</option>
                              <option value="11:00">11:00</option>
                              <option value="11:30">11:30</option>
                              <option value="12:00">12:00</option>
                              <option value="12:30">12:30</option>
                              <option value="13:00">13:00</option>
                              <option value="13:30">13:30</option>
                              <option value="14:00">14:00</option>
                              <option value="14:30">14:30</option>
                              <option value="15:00">15:00</option>
                              <option value="15:30">15:30</option>
                              <option value="16:00">16:00</option>
                              <option value="16:30">16:30</option>
                              <option value="17:00">17:00</option>
                              <option value="17:30">17:30</option>
                              <option value="18:00">18:00</option>
                              <option value="18:30">18:30</option>
                              <option value="19:00">19:00</option>
                              <option value="19:30">19:30</option>
                              <option value="20:00">20:00</option>
                              <option value="20:30">20:30</option>
                              <option value="21:00">21:00</option>
                              <option value="21:30">21:30</option>
                              <option value="22:00">22:00</option>
                              <option value="22:30">22:30</option>
                              <option value="23:00">23:00</option>
                              <option value="23:30">23:30</option>
                          </select>
                      </div>
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="form-group">
                      <label for="estimated_check_out_time">Estimated Check-Out Time</label>
                      <div class="manic-dropdown">
                          <select name="estimated_check_out_time" id="estimated_check_out_time">
                              <option value="">Please select</option>
                              <option value="00:00" selected>00:00</option>
                              <option value="00:30">00:30</option>
                              <option value="01:00">01:00</option>
                              <option value="01:30">01:30</option>
                              <option value="02:00">02:00</option>
                              <option value="02:30">02:30</option>
                              <option value="03:00">03:00</option>
                              <option value="03:30">03:30</option>
                              <option value="04:00">04:00</option>
                              <option value="04:30">04:30</option>
                              <option value="05:00">05:00</option>
                              <option value="05:30">05:30</option>
                              <option value="06:00">06:00</option>
                              <option value="06:30">06:30</option>
                              <option value="07:00">07:00</option>
                              <option value="07:30">07:30</option>
                              <option value="08:00">08:00</option>
                              <option value="08:30">08:30</option>
                              <option value="09:00">09:00</option>
                              <option value="09:30">09:30</option>
                              <option value="10:00">10:00</option>
                              <option value="10:30">10:30</option>
                              <option value="11:00">11:00</option>
                              <option value="11:30">11:30</option>
                              <option value="12:00">12:00</option>
                              <option value="12:30">12:30</option>
                              <option value="13:00">13:00</option>
                              <option value="13:30">13:30</option>
                              <option value="14:00">14:00</option>
                              <option value="14:30">14:30</option>
                              <option value="15:00">15:00</option>
                              <option value="15:30">15:30</option>
                              <option value="16:00">16:00</option>
                              <option value="16:30">16:30</option>
                              <option value="17:00">17:00</option>
                              <option value="17:30">17:30</option>
                              <option value="18:00">18:00</option>
                              <option value="18:30">18:30</option>
                              <option value="19:00">19:00</option>
                              <option value="19:30">19:30</option>
                              <option value="20:00">20:00</option>
                              <option value="20:30">20:30</option>
                              <option value="21:00">21:00</option>
                              <option value="21:30">21:30</option>
                              <option value="22:00">22:00</option>
                              <option value="22:30">22:30</option>
                              <option value="23:00">23:00</option>
                              <option value="23:30">23:30</option>
                          </select>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</script>

<div id="default-footer-spacer" class="hidden-xs hidden-sm"></div>