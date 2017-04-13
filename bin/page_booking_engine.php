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

        <div class="col-md-12">
          <div class="booking-no-room">
            <div class="booking-no-room-content">
              <h1>All the Sage hotel rooms are fully booked, here are the alternative hotel you could try.</h1>      
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

        <div class="col-md-9">

          <div class="booking-room-booked-content">
            <h1>“Superior Room” not available for the selected search, here are some other rooms for you.</h1>      
            <p>Aliquam vel elit sit amet sem congue dignissim. Nunc mattis tempus varius. Cras nisi massa, egestas in consectetur id, tempor et leo. Curabitur quam elit, varius vitae.</p>
          </div>
          
          <div class="booking-room-content booking-rooms">            

            <div class="booking-room-content-info">
              <div class="row">
                <div class="col-md-5">
                  <div class="booking-room-content-image">
                    <a href="room_detail.php" class="manic-image-container">
                      <img src="" data-image-desktop="images_cms/room/room-index-standard-room.jpg" alt="">
                    </a>
                  </div>
                </div>
                <div class="col-md-7">
                  
                  <div class="booking-room-content-title">
                    <a href="room_detail.php"><h5>Standard Room</h5></a>
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
              </div>            
            </div><!-- end booking-room-content-info-->

            <div class="booking-room-rates collapsable-content booking-room-rates">

              <div class="booking-room-rate">

                <div class="booking-room-rate-content">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="booking-room-rates-title">
                        <a href="#"><h5>Lorem Ipsum Room Rate 1</h5></a>
                        <a href="#" class="more-details-cta collapsable-arrow-cta show-rate-cta">More details</a>
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

                <div class="booking-room-rate-more-content collapsable-content">
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
                          <h5>Cancellation Policies</h5>  
                          <p>Advance Purchase rates are non-refundable unless stated otherwise. Customers credit cards will be charged immediately upon booking for the full amount of the stay. Cancellations or failure to arrive will result in forfeiture of full payment.</p>
                        </div>                    
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
                        <a href="#"><h5>Lorem Ipsum Room Rate 1</h5></a>
                        <a href="#" class="more-details-cta collapsable-arrow-cta show-rate-cta">More details</a>
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

                <div class="booking-room-rate-more-content collapsable-content">
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
                          <h5>Cancellation Policies</h5>  
                          <p>Advance Purchase rates are non-refundable unless stated otherwise. Customers credit cards will be charged immediately upon booking for the full amount of the stay. Cancellations or failure to arrive will result in forfeiture of full payment.</p>
                        </div>                    
                      </div>
                    </div>                    
                  </div>
                </div><!-- end booking-room-rate-more-content -->

              </div><!-- end booking-room-rate -->

            </div><!-- end booking-room-rates -->
          
          </div><!-- end booking-room-content -->

          <div class="booking-room-content booking-rooms">            

            <div class="booking-room-content-info">
              <div class="row">
                <div class="col-md-5">
                  <div class="booking-room-content-image">
                    <a href="room_detail.php" class="manic-image-container">
                      <img src="" data-image-desktop="images_cms/room/room-index-standard-room.jpg" alt="">
                    </a>
                  </div>
                </div>
                <div class="col-md-7">
                  
                  <div class="booking-room-content-title">
                    <a href="room_detail.php"><h5>Standard Room</h5></a>
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
              </div>            
            </div><!-- end booking-room-content-info-->

            <div class="booking-room-rates collapsable-content booking-room-rates">

              <div class="booking-room-rate">

                <div class="booking-room-rate-content">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="booking-room-rates-title">
                        <a href="#"><h5>Lorem Ipsum Room Rate 1</h5></a>
                        <a href="#" class="more-details-cta collapsable-arrow-cta show-rate-cta">More details</a>
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

                <div class="booking-room-rate-more-content collapsable-content">
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
                          <h5>Cancellation Policies</h5>  
                          <p>Advance Purchase rates are non-refundable unless stated otherwise. Customers credit cards will be charged immediately upon booking for the full amount of the stay. Cancellations or failure to arrive will result in forfeiture of full payment.</p>
                        </div>                    
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
                        <a href="#"><h5>Lorem Ipsum Room Rate 1</h5></a>
                        <a href="#" class="more-details-cta collapsable-arrow-cta show-rate-cta">More details</a>
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

                <div class="booking-room-rate-more-content collapsable-content">
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
                          <h5>Cancellation Policies</h5>  
                          <p>Advance Purchase rates are non-refundable unless stated otherwise. Customers credit cards will be charged immediately upon booking for the full amount of the stay. Cancellations or failure to arrive will result in forfeiture of full payment.</p>
                        </div>                    
                      </div>
                    </div>                    
                  </div>
                </div><!-- end booking-room-rate-more-content -->

              </div><!-- end booking-room-rate -->

            </div><!-- end booking-room-rates -->
          
          </div><!-- end booking-room-content -->
        </div>

        <div class="col-md-3">
          <div class="reservation-summary-sidebar">
            <div class="reservation-summary-title">
              <h5>Reservation Summary</h5>
              <h6>Sage west perth</h6>
            </div>
            <div class="reservation-summary-content">
              <div class="reservation-summary-content-check-in-out-date">
                <h6>Check in</h6>
                <p>Sun, 26 Mar 2017</p>
              </div>
              <div class="reservation-summary-content-check-in-out-date">
                <h6>Check out</h6>
                <p>Wed, 29 Mar 2017</p>
              </div>
            </div>
            
            <div class="reservation-summary-expandable-content">
              <div class="manic-expand-container">
                <div class="scroll-target" data-value="title-01"></div>
                <div class="manic-expand-container-title">                
                  <h6>Room 1</h6>
                </div>
                <div class="manic-expand-container-btn"></div>
                <div class="manic-expand-container-content">
                  
                  <div class="selected-room">
                    <div class="selected-room-title">
                      <h5>Standard Room</h5>
                      <a href="#" class="delete-btn"><i class="fa fa-times"></i></a>
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
                      <div class="selected-room-nightly-rate">
                        <div class="selected-room-nightly-rate-content-date">
                          <p>Sun, 26 Mar</p>
                        </div>
                        <div class="selected-room-nightly-rate-content-price">
                          <p class="price">$133.00</p>
                        </div>
                      </div>
                      <div class="selected-room-nightly-rate">
                        <div class="selected-room-nightly-rate-content-date">
                          <p>Mon, 27 Mar</p>
                        </div>
                        <div class="selected-room-nightly-rate-content-price">
                          <p class="price">$142.00</p>
                        </div>
                      </div>
                      <div class="selected-room-nightly-rate">
                        <div class="selected-room-nightly-rate-content-date">
                          <p>Tue, 28 Mar</p>
                        </div>
                        <div class="selected-room-nightly-rate-content-price">
                          <p class="price">$142.00</p>
                        </div>
                      </div>
                      <div class="selected-room-nightly-rate">
                        <div class="selected-room-nightly-rate-content-date">
                          <p>Wed, 29 Mar</p>
                        </div>
                        <div class="selected-room-nightly-rate-content-price">
                          <p class="price">$209.00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                    
                </div>
              </div>
            </div>

            <div class="reservation-summary-expandable-content">
              <div class="manic-expand-container">
                <div class="scroll-target" data-value="title-01"></div>
                <div class="manic-expand-container-title">
                  <h6>Room 1</h6>                  
                </div>
                <div class="manic-expand-container-btn"></div>
                <div class="manic-expand-container-content">
                  <div class="selected-room">
                    <div class="selected-room-title">
                      <h5>Standard Room</h5>
                      <a href="#" class="delete-btn"><i class="fa fa-times"></i></a>
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
                      <div class="selected-room-nightly-rate">
                        <div class="selected-room-nightly-rate-content-date">
                          <p>Sun, 26 Mar</p>
                        </div>
                        <div class="selected-room-nightly-rate-content-price">
                          <p class="price">$133.00</p>
                        </div>
                      </div>
                      <div class="selected-room-nightly-rate">
                        <div class="selected-room-nightly-rate-content-date">
                          <p>Mon, 27 Mar</p>
                        </div>
                        <div class="selected-room-nightly-rate-content-price">
                          <p class="price">$142.00</p>
                        </div>
                      </div>
                      <div class="selected-room-nightly-rate">
                        <div class="selected-room-nightly-rate-content-date">
                          <p>Tue, 28 Mar</p>
                        </div>
                        <div class="selected-room-nightly-rate-content-price">
                          <p class="price">$142.00</p>
                        </div>
                      </div>
                      <div class="selected-room-nightly-rate">
                        <div class="selected-room-nightly-rate-content-date">
                          <p>Wed, 29 Mar</p>
                        </div>
                        <div class="selected-room-nightly-rate-content-price">
                          <p class="price">$209.00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="reservation-summary">
              <div class="reservation-summary-title">
                <h6>cost for your stay</h6>
              </div>
              
              <div class="reservation-summary-content">
                <div class="reservation-summary-content-promotion-code">
                  <h5>Promotion Code</h5>
                  <p>ABC123</p>
                </div>

                <div class="reservation-summary-content-selected-rooms">
                  <div class="reservation-summary-content-selected-room">
                    <div class="reservation-summary-content-selected-room-title">
                      <h5>Room 1</h5>
                      <p>Total Room Rates</p>
                    </div>
                    <div class="reservation-summary-content-selected-room-price">                    
                      <p>$626.00</p>
                    </div>
                  </div>
                  <div class="reservation-summary-content-selected-room">
                    <div class="reservation-summary-content-selected-room-title">
                      <h5>Room 2</h5>
                      <p>Total Room Rates</p>
                    </div>
                    <div class="reservation-summary-content-selected-room-price">                    
                      <p>$816.00</p>
                    </div>
                  </div>
                </div>
                
                <div class="reservation-summary-content-totals">
                  <div class="reservation-summary-content-total">
                    <div class="reservation-summary-content-total-title">
                      <p>Total Charges</p>
                    </div>
                    <div class="reservation-summary-content-total-price">
                      <p>$1442.00</p>
                    </div>
                  </div>
                  <div class="reservation-summary-content-total">
                    <div class="reservation-summary-content-total-title">
                      <p>Tax</p>
                    </div>
                    <div class="reservation-summary-content-total-price">
                      <p>$100.94</p>
                    </div>
                  </div>
                </div>

                <div class="reservation-summary-content-sub-total">
                  <div class="reservation-summary-content-sub-total-title">
                    <h6>Sub Total</h6>
                  </div>
                  <div class="reservation-summary-content-sub-total-price">
                    <h6>$1542.94</h6>
                  </div>
                </div>

                <button type="submit" class="square-cta proceed-to-payment highlight-version">proceed to payment</button>
              </div>
            </div>
                
          </div>
        </div>

      </div>
    </div>    

  </div>

</div>

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

<div id="default-footer-spacer"></div>