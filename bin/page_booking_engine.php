<div id="default-header-spacer"></div>
<div id="booking-engine-form">         
  <div id="booking-engine-step-0">
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

  <div id="booking-engine-steps">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3">
          <div class="step active-step">
            <a href="#">
              <h3>1. Select your room</h3>
              <h5>accommodation & offers</h5>
            </a>
          </div>
        </div>
        <div class="col-md-3">
          <div class="step">
            <a href="#">
              <h3>2. Personalise your stay</h3>
              <h5>service experience</h5>
            </a>
          </div>
        </div>
        <div class="col-md-3">
          <div class="step">
            <a href="#">
              <h3>3. Make payment </h3>
              <h5>guest & payment details</h5>
            </a>
          </div>
        </div>
        <div class="col-md-3">
          <div class="step">
            <a href="#">
              <h3>4. Confirmation</h3>
              <h5>enjoy your stay</h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="booking-engine-step-1">    
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
              </div>
            </div>
            <div class="col-md-2">
              <div class="form-group">
                <label for="adults">Adults</label>
                <div class="manic-dropdown">
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
            </div>
            <div class="col-md-2">
              <div class="form-group">
                <label for="children">Children <span>≤ 11 years old</span></label>
                <div class="manic-dropdown">
                  <select name="children" id="children">
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
        <div class="col-md-9">
          <div class="booking-result-room-box">
            <div class="row">
              <div class="col-md-5">
                <div class="booking-result-room-content-image">
                  <a href="room_detail.php" class="manic-image-container">
                    <img src="" data-image-desktop="images_cms/room/room-index-standard-room.jpg" alt="">
                  </a>
                </div>
              </div>
              <div class="col-md-6">
                <div class="booking-result-room-title-and-price">
                  <div class="booking-result-room-title">
                    <h5><a href="room_detail.php">Standard Room</a></h5>
                  </div>
                  <div class="booking-result-room-price">
                    <h6>4 nights from</h6>
                    <p class="content-price">
                      <span class="currency">aud</span>
                      <span class="number">$612</span>
                    </p>
                  </div>
                </div>
                
                <div class="booking-result-room-detail boxlist-item-content-room-detail">
                  <p class="detail-size">25 SQM</p>
                  <p class="detail-person">2 adults, 2 children (max.)</p>                  
                  <p class="detail-bed">1 KING SIZE BED</p>

                  <a href="javascript:void(0);" class="square-cta highlight-version">Show Rates</a>
                </div>                              
                
                <div class="room-index-page-item-content-copy">
                  <div class="default-copy">
                    <p>Sage Hotels raises the bar on every hotel standard you know, and it starts here. Featuring a King or Queen custom mattress to drift off on. After a long day out refresh yourself under the dual shower heads and revitalizing SOAK amenities.</p>
                  </div>
                </div>
              </div>
            </div>            
          
            <div class="booking-result-room-rates">
              <div class="booking-result-room-rate">
                <div class="row">
                  <div class="col-md-8">
                    <div class="booking-result-room-rates-title">
                      <a href="#"><h5>Lorem Ipsum Room Rate 1</h5></a>
                      <a href="#" class="more-details-cta collapsable-arrow-cta">More details</a>
                    </div>
                  </div>
                  <div class="col-md-2">
                    <div class="booking-result-room-price">
                      <h6>4 nights from</h6>
                      <p class="content-price">
                        <span class="currency">aud</span>
                        <span class="number">$612</span>
                      </p>
                    </div>
                  </div>
                  <div class="col-md-2">
                    <a href="javascript:void(0);" class="square-cta highlight-version select-room-cta">Select Room</a>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-8">
                    <div class="booking-result-room-rate-content-copy">
                      <p>Book 7 days in advance and enjoy 5% savings on our Sage Flexible Rate. Te qui putant saperet consequat, at per habeo populo. Quot scaevola vis. Te quod zril oporteat mel, has tota postulant suavitate.</p>
                      <ul>
                        <li>Free Hotel Bicycles</li>
                        <li>Free local calls</li>
                        <li>Free Parking</li>
                        <li>Free unlimited WIFI</li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <a href="#" class="view-rate-breakdown">view rate breakdown</a>
                    
                    <div class="room-rate-cancellation-policies">
                      <h5>Cancellation Policies</h5>  
                      <p>Advance Purchase rates are non-refundable unless stated otherwise. Customers credit cards will be charged immediately upon booking for the full amount of the stay. Cancellations or failure to arrive will result in forfeiture of full payment.</p>
                    </div>
                    
                  </div>
                </div>
              </div>         
            </div>
          </div> 
        </div>
        <div class="col-md-3">
          <div class="reservation-summary-sidebar">
            <div class="reservation-summary-title">
              <h5>Reservation Summary</h5>
              <h6>Sage west perth</h6>
            </div>
            <div class="reservation-summary-content">
              <div class="reservation-summary-content-check-in-date">
                <h6>Check in</h6>
                <p>Sun, 26 Mar 2017</p>
              </div>
              <div class="reservation-summary-content-check-out-date">
                <h6>Check out</h6>
                <p>Wed, 29 Mar 2017</p>
              </div>
            </div>
            
            <div class="reservation-summary-expandable-content">
              <div class="manic-expand-container" data-group="mobile-dining-detail-page">
                <div class="scroll-target" data-value="title-01"></div>
                <div class="manic-expand-container-title">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-md-12">

                        <h6>Room 1</h6>

                      </div>
                    </div>
                  </div>
                </div>
                <div class="manic-expand-container-btn"></div>
                <div class="manic-expand-container-content">

                  <div class="container-fluid">
                    <div class="selected-room">
                      <div class="selected-room-title">
                        <h5>Standard Room</h5>
                        <a href="#" class="delete-btn"></a>
                      </div>
                      <div class="selected-room-content">
                        <div class="selected-room-content-details">
                          <p>7 days advance purchase</p>
                          <p>2 Adults, 0 Children</p>
                        </div>
                        <div class="selected-room-content-price">
                          <span class="price">$626.00</span>
                        </div>
                      </div>
                    </div>
                    <div class="selected-room-nightly-rates">
                      <div class="selected-room-nightly-rates-title">
                        <a href="#" class="collapsable-arrow-cta"><h6>Nightly Rates</h6></a>
                      </div>
                      <div class="selected-room-nightly-rates-content">
                        <div class="selected-room-nightly-rates-content-date-and-price">
                          <p>Sun, 26 Mar</p>
                          <p>$133.00</p>
                        </div>
                        <div class="selected-room-nightly-rates-content-date-and-price">
                          <p>Mon, 27 Mar</p>
                          <p>$142.00</p>
                        </div>
                        <div class="selected-room-nightly-rates-content-date-and-price">
                          <p>Tue, 28 Mar</p>
                          <p>$142.00</p>
                        </div>
                        <div class="selected-room-nightly-rates-content-date-and-price">
                          <p>Wed, 29 Mar</p>
                          <p>$209.00</p>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>

            <div class="reservation-summary-expandable-content">
              <div class="manic-expand-container" data-group="mobile-dining-detail-page">
                <div class="scroll-target" data-value="title-01"></div>
                <div class="manic-expand-container-title">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-md-12">

                        <h6>Room 1</h6>

                      </div>
                    </div>
                  </div>
                </div>
                <div class="manic-expand-container-btn"></div>
                <div class="manic-expand-container-content">

                  <div class="container-fluid">
                    <div class="selected-room">
                      <div class="selected-room-title">
                        <h5>Standard Room</h5>
                        <a href="#" class="delete-btn"></a>
                      </div>
                      <div class="selected-room-content">
                        <div class="selected-room-content-details">
                          <p>7 days advance purchase</p>
                          <p>2 Adults, 0 Children</p>
                        </div>
                        <div class="selected-room-content-price">
                          <span class="price">$626.00</span>
                        </div>
                      </div>
                    </div>
                    <div class="selected-room-nightly-rates">
                      <div class="selected-room-nightly-rates-title">
                        <a href="#" class="collapsable-arrow-cta"><h6>Nightly Rates</h6></a>
                      </div>
                      <div class="selected-room-nightly-rates-content">
                        <div class="selected-room-nightly-rates-content-date-and-price">
                          <p>Sun, 26 Mar</p>
                          <p>$133.00</p>
                        </div>
                        <div class="selected-room-nightly-rates-content-date-and-price">
                          <p>Mon, 27 Mar</p>
                          <p>$142.00</p>
                        </div>
                        <div class="selected-room-nightly-rates-content-date-and-price">
                          <p>Tue, 28 Mar</p>
                          <p>$142.00</p>
                        </div>
                        <div class="selected-room-nightly-rates-content-date-and-price">
                          <p>Wed, 29 Mar</p>
                          <p>$209.00</p>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>

            <div class="reservation-summary-cost-content">
              <div class="reservation-summary-cost-content-promotion-code">
                <h5>Promotion Code</h5>
                <p>ABC123</p>
              </div>

              <div class="reservation-summary-cost-content-selected-rooms">
                <div class="reservation-summary-cost-content-selected-room">
                  <div class="reservation-summary-cost-content-selected-room-title">
                    <h5>Room 1</h5>
                    <p>Total Room Rates</p>
                  </div>
                  <div class="reservation-summary-cost-content-selected-room-price">                    
                    <p>$626.00</p>
                  </div>
                </div>
                <div class="reservation-summary-cost-content-selected-room">
                  <div class="reservation-summary-cost-content-selected-room-title">
                    <h5>Room 2</h5>
                    <p>Total Room Rates</p>
                  </div>
                  <div class="reservation-summary-cost-content-selected-room-price">                    
                    <p>$816.00</p>
                  </div>
                </div>
              </div>
              
              <div class="reservation-summary-cost-content-total-and-tax">
                <div class="reservation-summary-cost-content-total">
                  <div class="reservation-summary-cost-content-total-title">
                    <p>Total Charges</p>
                  </div>
                  <div class="reservation-summary-cost-content-total-price">
                    <p>$1442.00</p>
                  </div>
                </div>
                <div class="reservation-summary-cost-content-tax">
                  <div class="reservation-summary-cost-content-tax-title">
                    <p>Tax</p>
                  </div>
                  <div class="reservation-summary-cost-content-tax-price">
                    <p>$100.94</p>
                  </div>
                </div>
              </div>
            </div>
    
            <div class="reservation-summary-cost-content-sub-total">
              <div class="reservation-summary-cost-content-sub-total-title">
                <p>Sub Total</p>
              </div>
              <div class="reservation-summary-cost-content-sub-total-price">
                <p>$1542.94</p>
              </div>
            </div>

            <button type="submit" class="square-cta highlight-version">proceed to payment</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</div