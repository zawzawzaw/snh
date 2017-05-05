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
              <form action="booking_engine.php" class="booking-engine-booking-form">              
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
              </form>            
            </div>
          </div>
        </div>        
      </div>
  </div>

</div>

<div id="default-footer-spacer" class="hidden-xs hidden-sm"></div>