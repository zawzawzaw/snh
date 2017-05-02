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
    <div class="container-fluid has-breakpoint">
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

          <div class="col-md-9">

            <div class="booking-room-booked-content">
              <h1>The “Superior Room” is not available for your selected search, here are our other rooms that might interest you</h1>      
              <p>Aliquam vel elit sit amet sem congue dignissim. Nunc mattis tempus varius. Cras nisi massa, egestas in consectetur id, tempor et leo. Curabitur quam elit, varius vitae.</p>
            </div>
            
            <div class="booking-room-content booking-rooms">            
              <div class="room-qty-tag">3 rooms left</div>
              <div class="booking-room-content-info">
                <div class="row">
                  <div class="col-md-5">
                    <div class="booking-room-content-image">
                      <a href="#" class="manic-image-container">
                        <img src="" data-image-desktop="images_cms/room/room-index-standard-room.jpg" data-image-mobile="images_cms/room/room-index-standard-room.jpg" alt="">
                      </a>
                    </div>
                  </div>
                  <div class="col-md-7">
                    
                    <div class="booking-room-content-text-container-desktop hidden-xs hidden-sm">
                      <div class="booking-room-content-title">
                        <a href="#"><h5>Standard Room</h5></a>
                        <div class="boxlist-item-content-price room-price">
                          <h6>4 nights from</h6>
                          <p class="content-price">
                            <span class="currency">aud</span>
                            <span class="number">$612</span>
                          </p>
                        </div>                 
                      </div>                                
                      
                      <div class="booking-room-content-detail boxlist-item-content-room-detail">
                        <p class="detail-size">25 SQM</p>
                        <p class="detail-person">2 adults, 2 children (max.)</p>                  
                        <p class="detail-bed">1 KING SIZE BED</p>                  

                        <div class="show-rates-cta-container">
                          <a href="javascript:void(0);" class="show-rates-cta square-cta highlight-version">Show Rates</a>
                        </div>
                      </div>                                              
                      
                      <div class="booking-room-content-copy">
                        <div class="default-copy">
                          <p>Sage Hotels raises the bar on every hotel standard you know, and it starts here. Featuring a King or Queen custom mattress to drift off on. After a long day out refresh yourself under the dual shower heads and revitalizing SOAK amenities.</p>
                        </div>
                      </div>
                    </div>
                    
                    <!-- mobile only -->
                    <div class="booking-room-content-text-container-mobile visible-xs visible-sm">
                      <div class="booking-room-content-title-mobile">
                        <a href="#"><h5>Standard Room</h5></a>                      
                      </div>

                      <div class="booking-room-content-detail-mobile boxlist-item-content-room-detail">
                        <p class="detail-size">25 SQM</p>
                        <p class="detail-person">2 adults, 2 children (max.)</p>                  
                        <p class="detail-bed">1 KING SIZE BED</p>     
                      </div>

                      <div class="booking-room-content-cta-and-price-mobile">
                        <a href="#" class="collapsable-arrow-cta show-room-copy-cta-mobile">More details</a>
                        <div class="boxlist-item-content-price room-price">
                          <h6>4 nights from</h6>
                          <p class="content-price">
                            <span class="currency">aud</span>
                            <span class="number">$612</span>
                          </p>
                        </div>

                        <div class="booking-room-content-copy-mobile">
                          <div class="default-copy">
                            <p>Sage Hotels raises the bar on every hotel standard you know, and it starts here. Featuring a King or Queen custom mattress to drift off on. After a long day out refresh yourself under the dual shower heads and revitalizing SOAK amenities.</p>
                          </div>
                        </div>

                        <div class="show-rates-cta-container-mobile">
                          <a href="javascript:void(0);" class="show-rates-cta-mobile square-cta highlight-version">Show Rates</a>
                        </div>
                      </div>

                    </div>
                    <!-- end mobile only-->

                  </div>
                </div>            
              </div><!-- end booking-room-content-info-->

              <div class="booking-room-rates booking-room-rates">

                <div class="booking-room-rate">

                  <div class="booking-room-rate-content">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="booking-room-rates-title">
                          <h5>Lorem Ipsum Room Rate 1</h5>
                          <a href="#" class="collapsable-arrow-cta show-rate-detail-cta">More details</a>
                        </div>
                        <div class="price-and-cta-container">
                          <div class="col-md-6">
                            <div class="boxlist-item-content-price booking-room-price">
                              <h6>4 nights</h6>
                              <p class="content-price">
                                <span class="currency">aud</span>
                                <span class="number">$612</span>
                              </p>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <a href="javascript:void(0);" class="square-cta highlight-version select-room-cta">Select Room</a>
                          </div>
                        </div>
                      </div>                    
                    </div>
                  </div><!-- end booking-room-rate-content -->

                  <div class="booking-room-rate-more-content">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="booking-room-rate-more-content-copy">
                          <p>Book 7 days in advance and enjoy 5% savings on our Sage Flexible Rate. Te qui putant saperet consequat, at per habeo populo. Quot scaevola vis. Te quod zril oporteat mel, has tota postulant suavitate.</p>
                          <ul>
                            <li>Free Hotel Bicycles</li>
                            <li>Free local calls</li>
                            <li>Free Parking</li>
                            <li>Free unlimited WIFI</li>
                          </ul>
                        </div>
                        <div class="booking-room-rate-more-content-extra-info">
                          <div class="col-md-6">
                            <div class="view-rate-breakdown-cta-container">
                              <a href="#" class="view-rate-breakdown-cta">view rate breakdown</a>
                            </div>
                          </div>
                          
                          <div class="col-md-12 cancellation-policies">
                            <h5>7 days Advanced Purchase<span>Cancellation Policies</span></h5>  
                            <p>Advance Purchase rates are non-refundable unless stated otherwise. Customers credit cards will be charged immediately upon booking for the full amount of the stay. Cancellations or failure to arrive will result in forfeiture of full payment.</p>
                          </div>
                          
                          <!-- mobile only -->
                          <a href="javascript:void(0);" class="square-cta highlight-version select-room-cta-mobile visible-xs visible-sm">Select Room</a>
                          <!-- end mobile only-->

                        </div>
                      </div>                    
                    </div>
                  </div><!-- end booking-room-rate-more-content -->

                </div><!-- end booking-room-rate -->

                <div class="booking-room-rate">

                  <div class="booking-room-rate-content">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="booking-room-rates-title">
                          <h5>Lorem Ipsum Room Rate 2</h5>
                          <a href="#" class="collapsable-arrow-cta show-rate-detail-cta">More details</a>
                        </div>
                        <div class="price-and-cta-container">
                          <div class="col-md-6">
                            <div class="boxlist-item-content-price booking-room-price">
                              <h6>4 nights</h6>
                              <p class="content-price">
                                <span class="currency">aud</span>
                                <span class="number">$612</span>
                              </p>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <a href="javascript:void(0);" class="square-cta highlight-version select-room-cta">Select Room</a>
                          </div>
                        </div>
                      </div>                    
                    </div>
                  </div><!-- end booking-room-rate-content -->

                  <div class="booking-room-rate-more-content">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="booking-room-rate-more-content-copy">
                          <p>Book 7 days in advance and enjoy 5% savings on our Sage Flexible Rate. Te qui putant saperet consequat, at per habeo populo. Quot scaevola vis. Te quod zril oporteat mel, has tota postulant suavitate.</p>
                          <ul>
                            <li>Free Hotel Bicycles</li>
                            <li>Free local calls</li>
                            <li>Free Parking</li>
                            <li>Free unlimited WIFI</li>
                          </ul>
                        </div>
                        <div class="booking-room-rate-more-content-extra-info">
                          <div class="col-md-6">
                            <div class="view-rate-breakdown-cta-container">
                              <a href="#" class="view-rate-breakdown-cta">view rate breakdown</a>
                            </div>
                          </div>
                          
                          <div class="col-md-12 cancellation-policies">
                            <h5>7 days Advanced Purchase<span>Cancellation Policies</span></h5>  
                            <p>Advance Purchase rates are non-refundable unless stated otherwise. Customers credit cards will be charged immediately upon booking for the full amount of the stay. Cancellations or failure to arrive will result in forfeiture of full payment.</p>
                          </div>        

                          <!-- mobile only -->
                          <a href="javascript:void(0);" class="square-cta highlight-version select-room-cta-mobile visible-xs visible-sm">Select Room</a>
                          <!-- end mobile only-->
                        </div>
                      </div>                    
                    </div>
                  </div><!-- end booking-room-rate-more-content -->

                </div><!-- end booking-room-rate -->

              </div><!-- end booking-room-rates -->
            
            </div><!-- end booking-room-content -->

            <div class="booking-room-content booking-rooms">            
              <div class="room-qty-tag">4 rooms left</div>
              <div class="booking-room-content-info">
                <div class="row">
                  <div class="col-md-5">
                    <div class="booking-room-content-image">
                      <a href="#" class="manic-image-container">
                        <img src="" data-image-desktop="images_cms/room/room-index-standard-room.jpg" data-image-mobile="images_cms/room/room-index-standard-room.jpg" alt="">
                      </a>
                    </div>
                  </div>
                  <div class="col-md-7">
                    
                    <div class="booking-room-content-text-container-desktop hidden-xs hidden-sm">
                      <div class="booking-room-content-title">
                        <a href="#"><h5>Standard Room</h5></a>
                        <div class="boxlist-item-content-price room-price">
                          <h6>4 nights from</h6>
                          <p class="content-price">
                            <span class="currency">aud</span>
                            <span class="number">$612</span>
                          </p>
                        </div>                 
                      </div>                                
                      
                      <div class="booking-room-content-detail boxlist-item-content-room-detail">
                        <p class="detail-size">25 SQM</p>
                        <p class="detail-person">2 adults, 2 children (max.)</p>                  
                        <p class="detail-bed">1 KING SIZE BED</p>                  

                        <div class="show-rates-cta-container">
                          <a href="javascript:void(0);" class="show-rates-cta square-cta highlight-version">Show Rates</a>
                        </div>
                      </div>                                              
                      
                      <div class="booking-room-content-copy">
                        <div class="default-copy">
                          <p>Sage Hotels raises the bar on every hotel standard you know, and it starts here. Featuring a King or Queen custom mattress to drift off on. After a long day out refresh yourself under the dual shower heads and revitalizing SOAK amenities.</p>
                        </div>
                      </div>
                    </div>

                    <div class="booking-room-content-text-container-mobile visible-xs visible-sm">
                      <div class="booking-room-content-title-mobile">
                        <a href="#"><h5>Standard Room</h5></a>                      
                      </div>

                      <div class="booking-room-content-detail-mobile boxlist-item-content-room-detail">
                        <p class="detail-size">25 SQM</p>
                        <p class="detail-person">2 adults, 2 children (max.)</p>                  
                        <p class="detail-bed">1 KING SIZE BED</p>     
                      </div>

                      <div class="booking-room-content-cta-and-price-mobile">
                        <a href="#" class="collapsable-arrow-cta show-room-copy-cta-mobile">More details</a>
                        <div class="boxlist-item-content-price room-price">
                          <h6>4 nights from</h6>
                          <p class="content-price">
                            <span class="currency">aud</span>
                            <span class="number">$612</span>
                          </p>
                        </div>

                        <div class="booking-room-content-copy-mobile">
                          <div class="default-copy">
                            <p>Sage Hotels raises the bar on every hotel standard you know, and it starts here. Featuring a King or Queen custom mattress to drift off on. After a long day out refresh yourself under the dual shower heads and revitalizing SOAK amenities.</p>
                          </div>
                        </div>

                        <div class="show-rates-cta-container-mobile">
                          <a href="javascript:void(0);" class="show-rates-cta-mobile square-cta highlight-version">Show Rates</a>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>            
              </div><!-- end booking-room-content-info-->

              <div class="booking-room-rates booking-room-rates">

                <div class="booking-room-rate">

                  <div class="booking-room-rate-content">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="booking-room-rates-title">
                          <h5>Lorem Ipsum Room Rate 1</h5>
                          <a href="#" class="collapsable-arrow-cta show-rate-detail-cta">More details</a>
                        </div>
                        <div class="price-and-cta-container">
                          <div class="col-md-6">
                            <div class="boxlist-item-content-price booking-room-price">
                              <h6>4 nights</h6>
                              <p class="content-price">
                                <span class="currency">aud</span>
                                <span class="number">$612</span>
                              </p>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <a href="javascript:void(0);" class="square-cta highlight-version select-room-cta">Select Room</a>
                          </div>
                        </div>
                      </div>                    
                    </div>
                  </div><!-- end booking-room-rate-content -->

                  <div class="booking-room-rate-more-content">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="booking-room-rate-more-content-copy">
                          <p>Book 7 days in advance and enjoy 5% savings on our Sage Flexible Rate. Te qui putant saperet consequat, at per habeo populo. Quot scaevola vis. Te quod zril oporteat mel, has tota postulant suavitate.</p>
                          <ul>
                            <li>Free Hotel Bicycles</li>
                            <li>Free local calls</li>
                            <li>Free Parking</li>
                            <li>Free unlimited WIFI</li>
                          </ul>
                        </div>
                        <div class="booking-room-rate-more-content-extra-info">
                          <div class="col-md-6">
                            <div class="view-rate-breakdown-cta-container">
                              <a href="#" class="view-rate-breakdown-cta">view rate breakdown</a>
                            </div>
                          </div>
                          
                          <div class="col-md-12 cancellation-policies">
                            <h5>7 days Advanced Purchase<span>Cancellation Policies</span></h5>  
                            <p>Advance Purchase rates are non-refundable unless stated otherwise. Customers credit cards will be charged immediately upon booking for the full amount of the stay. Cancellations or failure to arrive will result in forfeiture of full payment.</p>
                          </div>     

                          <!-- mobile only -->
                          <a href="javascript:void(0);" class="square-cta highlight-version select-room-cta-mobile visible-xs visible-sm">Select Room</a>
                          <!-- end mobile only-->               
                        </div>
                      </div>                    
                    </div>
                  </div><!-- end booking-room-rate-more-content -->

                </div><!-- end booking-room-rate -->

                <div class="booking-room-rate">

                  <div class="booking-room-rate-content">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="booking-room-rates-title">
                          <h5>Lorem Ipsum Room Rate 2</h5>
                          <a href="#" class="collapsable-arrow-cta show-rate-detail-cta">More details</a>
                        </div>
                        <div class="price-and-cta-container">
                          <div class="col-md-6">
                            <div class="boxlist-item-content-price booking-room-price">
                              <h6>4 nights</h6>
                              <p class="content-price">
                                <span class="currency">aud</span>
                                <span class="number">$612</span>
                              </p>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <a href="javascript:void(0);" class="square-cta highlight-version select-room-cta">Select Room</a>
                          </div>
                        </div>
                      </div>                    
                    </div>
                  </div><!-- end booking-room-rate-content -->

                  <div class="booking-room-rate-more-content">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="booking-room-rate-more-content-copy">
                          <p>Book 7 days in advance and enjoy 5% savings on our Sage Flexible Rate. Te qui putant saperet consequat, at per habeo populo. Quot scaevola vis. Te quod zril oporteat mel, has tota postulant suavitate.</p>
                          <ul>
                            <li>Free Hotel Bicycles</li>
                            <li>Free local calls</li>
                            <li>Free Parking</li>
                            <li>Free unlimited WIFI</li>
                          </ul>
                        </div>
                        <div class="booking-room-rate-more-content-extra-info">
                          <div class="col-md-6">
                            <div class="view-rate-breakdown-cta-container">
                              <a href="#" class="view-rate-breakdown-cta">view rate breakdown</a>
                            </div>
                          </div>
                          
                          <div class="col-md-12 cancellation-policies">
                            <h5>7 days Advanced Purchase<span>Cancellation Policies</span></h5>  
                            <p>Advance Purchase rates are non-refundable unless stated otherwise. Customers credit cards will be charged immediately upon booking for the full amount of the stay. Cancellations or failure to arrive will result in forfeiture of full payment.</p>
                          </div>         

                          <!-- mobile only -->
                          <a href="javascript:void(0);" class="square-cta highlight-version select-room-cta-mobile visible-xs visible-sm">Select Room</a>
                          <!-- end mobile only-->           
                        </div>
                      </div>                    
                    </div>
                  </div><!-- end booking-room-rate-more-content -->

                </div><!-- end booking-room-rate -->

              </div><!-- end booking-room-rates -->
            
            </div><!-- end booking-room-content -->
          </div>
        </div>
      </div>
    </div>

    <div id="booking-engine-step-2" data-step="2" class="booking-steps">
      <div id="booking-engine-step-2-content">
        <div class="container-fluid has-breakpoint">
          <div class="col-md-9">
            <div class="booking-extra-content booking-extras">            

              <div class="booking-extra-content-info">
                <div class="row">
                  <div class="col-md-5">
                    <div class="booking-extra-content-image">
                      <a href="#" class="manic-image-container">
                        <img src="" data-image-desktop="images_cms/booking/extra-booking-item-01.jpg" data-image-mobile="images_cms/booking/extra-booking-item-01.jpg" alt="">
                      </a>
                    </div>
                  </div>
                  <div class="col-md-7">
                    
                    <div class="booking-extra-content-title">
                      <h5>Tesla Transfer</h5>
                      <div class="boxlist-item-content-price room-price">
                        <h6>per booking</h6>
                        <p class="content-price">
                          <span class="currency">aud</span>
                          <span class="number">$75</span>
                        </p>
                      </div>                 
                    </div>                                
                    
                    <div class="booking-extra-content-copy">
                      <a href="#" class="collapsable-arrow-cta show-extra-copy-cta-mobile visible-xs visible-sm">More details</a>                   
                      <div class="default-copy">
                        <p>One Way Transfer from/to Brisbane Domestic or International Airport. Please email our NEXT Journey team on journey.brisbane@nexthotels.com and advise Flight Number/s, Arrival/Departure Time, Number of People Travelling and our NEXT Journeyman will be in contact with you to confirm your transfer.</p>
                      </div>
                    </div>

                    <div class="booking-extra-content-cta default-form">
                      <div class="form-group">
                        <label for="quantity">Quantity</label>                      
                        <div class="manic-dropdown">
                          <select name="quantity" id="quantity">
                            <option value="">Please Select</option>
                            <option value="1" selected>1</option>
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
                      <button class="square-cta add-to-booking-cta highlight-version">Add to booking</a>               
                    </div>     

                  </div>
                </div>            
              </div><!-- end booking-extra-content-info-->
            
            </div><!-- end booking-extra-content -->

            <div class="booking-extra-content booking-extras">            

              <div class="booking-extra-content-info">
                <div class="row">
                  <div class="col-md-5">
                    <div class="booking-extra-content-image">
                      <a href="#" class="manic-image-container">
                        <img src="" data-image-desktop="images_cms/booking/extra-booking-item-02.jpg" data-image-mobile="images_cms/booking/extra-booking-item-02.jpg" alt="">
                      </a>
                    </div>
                  </div>
                  <div class="col-md-7">
                    
                    <div class="booking-extra-content-title">
                      <h5>Tesla Journey</h5>
                      <div class="boxlist-item-content-price room-price">
                        <h6>per booking</h6>
                        <p class="content-price">
                          <span class="currency">aud</span>
                          <span class="number">$40</span>
                        </p>
                      </div>                 
                    </div>                                
                    
                    <div class="booking-extra-content-copy">
                      <a href="#" class="collapsable-arrow-cta show-extra-copy-cta-mobile visible-xs visible-sm">More details</a>                   
                      <div class="default-copy">
                        <p>Staying at NEXT Hotel Brisbane and need to get to your office? Locally, or even the Gold Coast? Our Tesla Journey team is at your disposal. Let us know where and when you are wanting your Tesla journey and we can get back to you with a quote..</p>
                      </div>
                    </div>

                    <div class="booking-extra-content-cta default-form">
                      <div class="form-group">
                        <label for="quantity">Quantity</label>                      
                        <div class="manic-dropdown">
                          <select name="quantity" id="quantity">
                            <option value="">Please Select</option>
                            <option value="1" selected>1</option>
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
                      <button class="square-cta add-to-booking-cta highlight-version">Add to booking</a>               
                    </div>     

                  </div>
                </div>            
              </div><!-- end booking-extra-content-info-->
            
            </div><!-- end booking-extra-content -->

            <div class="booking-extra-content booking-extras">            

              <div class="booking-extra-content-info">
                <div class="row">
                  <div class="col-md-5">
                    <div class="booking-extra-content-image">
                      <a href="#" class="manic-image-container">
                        <img src="" data-image-desktop="images_cms/booking/extra-booking-item-03.jpg" data-image-mobile="images_cms/booking/extra-booking-item-03.jpg" alt="">
                      </a>
                    </div>
                  </div>
                  <div class="col-md-7">
                    
                    <div class="booking-extra-content-title">
                      <h5>Guarantee Your Room for Early Chek In!</h5>
                      <div class="boxlist-item-content-price room-price">
                        <h6>per booking</h6>
                        <p class="content-price">
                          <span class="currency">aud</span>
                          <span class="number">$50</span>
                        </p>
                      </div>                 
                    </div>                                
                    
                    <div class="booking-extra-content-copy">
                      <a href="#" class="collapsable-arrow-cta show-extra-copy-cta-mobile visible-xs visible-sm">More details</a>                   
                      <div class="default-copy">
                        <p>Can’t wait to get into your room? Beat the 3pm check-in by guaranteeing your room from midday!</p>
                      </div>
                    </div>

                    <div class="booking-extra-content-cta default-form">
                      <div class="form-group">
                        <label for="quantity">Quantity</label>                      
                        <div class="manic-dropdown">
                          <select name="quantity" id="quantity">
                            <option value="">Please Select</option>
                            <option value="1" selected>1</option>
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
                      <button class="square-cta add-to-booking-cta highlight-version">Add to booking</a>               
                    </div>     

                  </div>
                </div>            
              </div><!-- end booking-extra-content-info-->
            
            </div><!-- end booking-extra-content -->

            <div class="booking-extra-content booking-extras">            

              <div class="booking-extra-content-info">
                <div class="row">
                  <div class="col-md-5">
                    <div class="booking-extra-content-image">
                      <a href="#" class="manic-image-container">
                        <img src="" data-image-desktop="images_cms/booking/extra-booking-item-04.jpg" data-image-mobile="images_cms/booking/extra-booking-item-04.jpg" alt="">
                      </a>
                    </div>
                  </div>
                  <div class="col-md-7">
                    
                    <div class="booking-extra-content-title">
                      <h5>Sage Hotel Breakfast, Prepay & Save</h5>
                      <div class="boxlist-item-content-price room-price">
                        <h6>price from</h6>
                        <p class="content-price">
                          <span class="currency">aud</span>
                          <span class="number">$25</span>
                        </p>
                      </div>                 
                    </div>                                
                    
                    <div class="booking-extra-content-copy">
                      <a href="#" class="collapsable-arrow-cta show-extra-copy-cta-mobile visible-xs visible-sm">More details</a>                   
                      <div class="default-copy">
                        <p>Haven't you heard that breakfast is the most important meal of the day? Kick start your morning by adding on our $25 breakfast. Make up your own healthy cereals with nuts and seeds or head straight to the delectable pastries.</p>
                      </div>
                    </div>

                    <div class="booking-extra-content-cta default-form">
                      <div class="form-group">
                        <div class="row">
                          <div class="col-md-6 col-sm-6 col-xs-6">
                            <label for="adult">Adult</label>                      
                            <div class="manic-dropdown small-version">
                              <select name="adult" id="adult">
                                <option value="">Please Select</option>
                                <option value="1" selected>1</option>
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
                          <div class="col-md-6 col-sm-6 col-xs-6">
                            <label for="child">Child</label>                      
                            <div class="manic-dropdown small-version">
                              <select name="child" id="child">
                                <option value="">Please Select</option>
                                <option value="0" selected>0</option>
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
                            <span class="child-age-notice">11 years & below</span>
                          </div>
                        </div>
                        
                      </div>                      
                      <button class="square-cta add-to-booking-cta highlight-version">Add to booking</a>               
                    </div>     

                  </div>
                </div>            
              </div><!-- end booking-extra-content-info-->
            
            </div><!-- end booking-extra-content -->

            <a href="#" class="back-arrow-cta back-to-select-your-room">back to select your room</a>     

          </div>
        </div>
      </div>
    </div>

    <div id="booking-engine-step-3" data-step="3" class="booking-steps">
      <div id="booking-engine-step-3-content">
        <div class="container-fluid has-breakpoint">
          <div class="col-md-9">
              <!-- <ul class="payment-tabs">
                <li><a href="#" data-tab="book-for-myself" class="active">Booking for myself</a></li>
                <li><a href="#" data-tab="book-for-someone">Booking for someone else</a></li>
              </ul> -->

              <!-- <div id="book-for-myself" class="personal-detail">
                <div class="your-details">
                  <div class="row">
                    <div class="col-md-4"><h5>Your Details</h5></div>
                    <div class="col-md-8">
                      <div id="personal_info" class="default-form simple-form-check">
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="first_name">First Name*</label>
                              <input type="text" name="first_name" class="required">
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="last_name">Last Name*</label>
                              <input type="text" name="last_name" class="required">
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="email">Email*</label>
                              <input type="text" name="email" class="required">
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="telephone">Telephone</label>
                              <input type="text" name="telephone">
                            </div>
                          </div>
                        </div> 
                        <div class="row">
                          <div class="col-md-12">
                            <a href="#" class="collapsable-arrow-cta optional-info-cta">Optional Information</a>
                          </div>
                        </div>                               
                      </div>

                      <div id="optional_info" class="default-form">
                        <div class="row">
                          <div class="col-md-12">
                            <div class="form-group">
                              <label for="address">Address</label>
                              <input type="text" name="address">
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="city">City</label>
                              <input type="text" name="city">
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="state">State</label>
                              <input type="text" name="state">
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="country">Country</label>
                              <input type="text" name="country">
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="post_code">Postcode</label>
                              <input type="text" name="post_code">
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
                              <label for="estimated_check_in_time">Estimated Check In Time</label>
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
                              <label for="estimated_check_out_time">Estimated Check Out Time</label>
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
              </div> -->

              <div id="book-for-someone" class="personal-details active-tab">
                <div class="your-details">
                  <div class="row">
                    <div class="col-md-4"><h5>Your Details</h5></div>
                    <div class="col-md-8">
                      <div id="personal_info" class="default-form simple-form-check">
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="first_name">First Name*</label>
                              <input type="text" name="first_name" class="required">
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="last_name">Last Name*</label>
                              <input type="text" name="last_name" class="required">
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="email">Email*</label>
                              <input type="text" name="email" class="required">
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="telephone">Telephone</label>
                              <input type="text" name="telephone" class="telephone-inputs">
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-12">
                            <a href="#" class="collapsable-arrow-cta optional-info-cta">Optional Information</a>
                          </div>
                        </div>                
                      </div>

                      <div id="optional_info" class="default-form">
                        <div class="row">
                          <div class="col-md-12">
                            <div class="form-group">
                              <label for="address">Address</label>
                              <input type="text" name="address">
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="city">City</label>
                              <input type="text" name="city">
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="state">State</label>
                              <input type="text" name="state">
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="country">Country</label>
                              <input type="text" name="country">
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="post_code">Postcode</label>
                              <input type="text" name="post_code">
                            </div>
                          </div>
                        </div>
                        <!-- <div class="row">
                          <div class="col-md-12">
                            <div class="form-group">
                              <label for="special_requests">Special Requests</label>
                              <textarea name="special_requests"></textarea>
                            </div>
                          </div>                    
                        </div> -->
                        <!-- <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="estimated_check_in_time">Estimated Check In Time</label>
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
                              <label for="estimated_check_out_time">Estimated Check Out Time</label>
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
                        </div> -->
                      </div>
                    </div>
                  </div>
                </div>
                <div class="guest-details">
                  <!-- dynamic element from js -->                  
                </div>
              </div>

              <div id="terms-and-conditions">
                <div class="row">
                  <div class="col-md-4"><h5>Terms & Conditions</h5></div>
                  <div class="col-md-8">
                    <div class="minimize-read-more" data-length="280">
                      <!-- <p>On arrival, all guests must provide a credit card with available funds for full payment of booking & a AUD$100 per night pre-authorization swipe, along with a valid current photo identification corresponding to the booking name. Cash bonds will NOT be accepted.</p>

                      <p>For security purposes, valid photo identification is required at check-in. Acceptable forms include a drivers license, passport, and/or proof of age card.</p>

                      <p>The hotels cash/EFTPOS policy requires full payment of accommodation plus $100 per night bond at the time of check in. Valid identification must be provided for all cash bookings.</p>

                      <p>A valid credit card must be provided to secure your reservation. You will not be charged until arrival at the property, unless stated otherwise. You are welcome to pay on departure with CASH, EFPTOS or CREDIT CARD. Guests choosing to settle their account with a credit card will incur a surcharge of 1.5% for Visa/Mastercard and 3% for AMEX/Diners, EFTPOS (Savings or Cheque Account) payments exempt.</p> -->

                      <p>Cancelation charges apply if a booking is changed or cancelled after the deadline stipulated in the rates cancelation policy, or in the case of a no-show.</p>

                      <p>For certain rates (for example, advanced purchase rates), changes to booking are not permitted once booked and may result in a forfeiture of payment.</p>
                    </div>
                    
                    <div class="default-form simple-form-check">
                      <div class="form-group check-box-error">
                        <input type="checkbox" name="terms_and_conditions" id="terms_and_conditions" class="required">
                        <label for="terms_and_conditions" class="color-version"><span>I have read and agreed to the terms & conditions governing this booking.</span></label>
                      </div>
                      <div class="form-group check-box-error">
                        <input type="checkbox" name="cancellation_policies" id="cancellation_policies" class="required">
                        <label for="cancellation_policies" class="color-version"><span>I have read and agreed to the cancellation policies.</span></label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- <div id="cancellation-policies">
                <div class="row">
                  <div class="col-md-4"><h5>Cancellation Policies</h5></div>
                  <div class="col-md-8">
                    <div class="minimize-read-more" data-length="280">
                      <p>Cancellations or changes to bookings must be made at least 24 hours prior to the check in date and time or you will be charged the full amount of the first changed or cancelled night. </p>

                      <p>Please be aware that promotional room rates have specific cancellation policies. For promotional room rates customer credit cards will be charged immediately upon booking for the full amount of the stay. Cancellations or failure to arrive will result in forfeiture of full payment.</p>
                    </div>
                    
                    <div class="default-form simple-form-check">
                      <div class="form-group check-box-error">
                        <input type="checkbox" name="cancellation_policies" id="cancellation_policies" class="required">
                        <label for="cancellation_policies" class="color-version"><span>I have read and agreed to the cancellation policies.</span></label>
                      </div>
                    </div>
                  </div>
                </div>
              </div> -->

              <div id="card-details">
                <div class="row">
                  <div class="col-md-4"><h5>Card Details</h5></div>
                  <div class="col-md-8">
                    <div class="default-form simple-form-check">
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="name_on_card">Name on Card*</label>
                            <input type="text" name="name_on_card" class="required">                            
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="card_number">Card Number*</label>
                            <input type="text" name="card_number" class="required">                            
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="name_on_card">Card Type*</label>
                            <div class="manic-dropdown">
                              <select name="name_on_card" id="name_on_card" class="required">
                                <option value="">Please select</option>
                                <option value="Visa" selected>Visa</option>
                                <option value="Mastercard">Mastercard</option>
                                <option value="American Express">American Express</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="card_number">We Accept</label>
                            <ul class="payment-card">
                              <li><i class="fa fa-cc-visa" aria-hidden="true"></i></li>
                              <li><i class="fa fa-cc-mastercard" aria-hidden="true"></i></li>
                              <li><i class="fa fa-cc-amex" aria-hidden="true"></i></li>
                              <li><i class="fa fa-cc-diners-club" aria-hidden="true"></i></li>
                              <li><i class="union-pay" aria-hidden="true"></i></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="row">
                            <div class="col-md-6 col-sm-6 col-xs-6">
                              <div class="form-group">
                                <label for="expiry_date">Expiry Date*</label>
                                <div class="manic-dropdown">
                                  <select name="expiry_date" id="expiry_date" class="required">
                                    <option value="">Month</option>
                                    <option value="01">01</option>
                                    <option value="02">02</option>
                                    <option value="03">03</option>
                                    <option value="04">04</option>
                                    <option value="05">05</option>
                                    <option value="06">06</option>
                                    <option value="07">07</option>
                                    <option value="08">08</option>
                                    <option value="09">09</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-6 col-sm-6 col-xs-6">
                              <div class="form-group">
                                <label for="expiry_date" class="hidden-label">Expiry Date*</label>
                                <div class="manic-dropdown">
                                  <select name="expiry_date" id="expiry_date" class="required">
                                    <option value="">Year</option>
                                    <option value="2017">2017</option>
                                    <option value="2018">2018</option>
                                    <option value="2019">2019</option>
                                    <option value="2020">2020</option>
                                    <option value="2021">2021</option>
                                    <option value="2022">2022</option>
                                    <option value="2023">2023</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>                                    
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>                          
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="cvv">CVV*</label>
                            <input type="text" name="cvv" class="cvv required">
                            <a href="#" class="cvv-cta"><i class="fa fa-credit-card" aria-hidden="true"></i></a>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <!-- <span class="notice">*Your card will not be charged, it serves as guarantee only unless stated otherwise.</span> -->
                          <span class="notice">A valid credit card is used to guarantee your room and will not be charged until you arrive, unless the rate(s) requires payment in advance. </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a href="#" class="back-arrow-cta back-to-personalise-your-stay">back to personalise your stay</a>     

          </div>
        </div>
      </div>
    </div>

    <div id="booking-engine-step-4" data-step="4" class="booking-steps">
      <div id="booking-engine-step-4-content">
        <div class="container-fluid has-breakpoint">
          <div class="col-md-5">
            <div id="thank-you-container">
              <div id="thank-you-container-title">
                <h5>Thank you! Booking ID: 123ABC</h5>
              </div>
              <div id="thank-you-container-content">
                <p>Thank you for making your reservation with us! We have sent you the booking summary to the email account you provided to us.</p>

                <p>If you have any questions, please contact us to the details below for further help!</p>
                
                <div class="hotel-details">
                  <p class="hotel-address">
                  <span>Sage Hotels West Perth</span>
                  1309 Hay Street, <br>
                  West Perth, <br>
                  WA 6005, Australia
                  </p>

                  <ul class="contact-details">
                    <li><span>T:</span> <a href="tel:+61 865009100">+61 865009100</a><br></li>
                    <li><span>F:</span> <a href="tel:+61 865009101">+61 865009101</a><br></li>
                    <li><span>E:</span> <a href="mailto:reservations.westperth@sage-hotels.com">reservations.westperth@sage-hotels.com</a></li>
                  </ul>

                  <p>Reception hours: 24 hours</p>

                  <p>Check-In Time: 14:00 <br>
                  Check-Out Time: 10:00</p>                   

                  <p class="reservation-phone-nos">
                  <span>Central Reservations</span>
                  1800 303 186 (Within Australia) <br>
                  0800 480 274 (Within New Zealand)
                  </p>
                </div>

                <div class="ctas-container">
                  <button id="download-booking-summary-cta" class="square-cta highlight-version">download booking summary</button>
                  <button id="print-booking-summary-cta" class="square-cta highlight-version">print booking summary</button>
                  <button id="return-to-homepage-cta" class="square-cta highlight-version">return to homepage</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div id="booking-engine-sidebar">
      <div class="container-fluid has-breakpoint">
        <div class="col-md-3 col-md-offset-9">
          <div id="sticky-anchor-mobile"></div>
          <div id="sticky-sidebar-mobile" class="reservation-summary-sidebar">
            <div class="reservation-summary-sidebar-title see-more-booking-summary-mobile">
              <h5>Booking Summary</h5>
              <h6>Sage west perth</h6>
              <div class="reservation-summary-sidebar-title-mobile visible-xs visible-sm">
                <h6 class="reservation-summary-sidebar-total-room-mobile">0 Room</h6>
                <h6 class="reservation-summary-sidebar-total-amount-mobile">$0.00</h6>
              </div>              
            </div>
            <div class="reservation-summary-sidebar-content">
              <div class="reservation-summary-content-check-in-out-date-02">
                <h6>Arrival <i class="fa fa-long-arrow-right" aria-hidden="true"></i> Departure</h6>
                <p>29/03/2017 to 26/03/2017</p>                                
              </div>
              <div class="reservation-summary-content-check-in-out-date">
                <h6>Check-In</h6>
                <p>Sun, 26 Mar 2017</p>
              </div>
              <div class="reservation-summary-content-check-in-out-date">
                <h6>Check-Out</h6>
                <p>Wed, 29 Mar 2017</p>
              </div>
            </div>
              
            <div class="reservation-summary-sidebar-details">
              <div id="non-sticky-sidebar">
                <div class="reservation-summary-selected-rooms-container">
                  <!-- dynamic element from js -->
                </div>

                <div class="reservation-summary-selected-extras-container">
                  <div class="reservation-summary-expandable-content selected-extras">
                      <div class="manic-expand-container desktop-open-version extra-version">
                          <div class="scroll-target" data-value="title-extra"></div>
                          <div class="manic-expand-container-title extra-version">
                              <h6>Extras</h6> </div>
                          <div class="manic-expand-container-btn"></div>
                          <div class="manic-expand-container-content">
                            <div class="selected-extra-container">
                              <!-- dynamic element from js -->
                            </div>                       
                          </div>
                      </div>
                  </div>
                </div>
              </div>
              
              <div id="sticky-anchor"></div>              
              <div id="sticky-sidebar" class="reservation-summary">
                <div class="reservation-summary-title">
                  <h6>cost for your stay</h6>
                </div>
                
                <div class="reservation-summary-content">
                  <div class="reservation-summary-content-promotion-code">
                    <h5>Promotion Code</h5>
                    <p>ABC123</p>
                  </div>

                  <div class="reservation-summary-content-selected-rooms">
                    <!-- dynamic element from js -->
                  </div>

                  <div class="reservation-summary-content-selected-extras">                  
                    <div class="reservation-summary-content-selected-extras-title">
                      <h5>Extras</h5>
                    </div>
                    <div class="reservation-summary-content-selected-extras-content">
                      <!-- dynamic element from js -->                    
                    </div>                  
                  </div>
                                    
                  <div class="reservation-summary-content-totals">
                    <div class="reservation-summary-content-total">
                      <div class="reservation-summary-content-total-title">
                        <p>Total Charges</p>
                      </div>
                      <div class="reservation-summary-content-total-price">
                        <p>$0.00</p>
                      </div>
                    </div>
                    <div class="reservation-summary-content-total">
                      <div class="reservation-summary-content-total-title">
                        <p>Tax</p>
                      </div>
                      <div class="reservation-summary-content-total-tax">
                        <p>$0.00</p>
                      </div>
                    </div>
                  </div>

                  <div class="reservation-summary-content-sub-total">
                    <div class="reservation-summary-content-sub-total-title">
                      <h6>Sub Total</h6>
                    </div>
                    <div class="reservation-summary-content-sub-total-price">
                      <h6>$0.00</h6>
                    </div>
                  </div>

                  <button type="submit" class="square-cta proceed-to-payment highlight-version">proceed to booking</button>
                  
                </div>
              </div>
            </div>
                
          </div>
        </div>
      </div>
    </div>
    
    <div id="proceed-btn-container-mobile">
      <button type="submit" class="square-cta proceed-to-payment-mobile highlight-version">proceed to booking</button>
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