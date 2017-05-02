<!-- this will select the header link with the following value -->
<div id="desktop-header-selector" data-value="location.php"></div>



<div id="default-header-spacer" class="visible-md visible-lg"></div>
<div id="default-header-mobile-spacer" class="visible-sm visible-xs"></div>


<!--
   ____  ____  _____    _    ____   ____ ____  _   _ __  __ ____
  | __ )|  _ \| ____|  / \  |  _ \ / ___|  _ \| | | |  \/  | __ )
  |  _ \| |_) |  _|   / _ \ | | | | |   | |_) | | | | |\/| |  _ \
  | |_) |  _ <| |___ / ___ \| |_| | |___|  _ <| |_| | |  | | |_) |
  |____/|_| \_\_____/_/   \_\____/ \____|_| \_\\___/|_|  |_|____/

-->

<!-- used in index & inner pages -->

<article class="default-breadcrumb-section visible-md visible-lg">
  <div class="container-fluid has-breakpoint">
    <div class="row">
      <div class="col-md-12">

        <div class="default-breadcrumb">
          <ul>
            <li><a href="javascript:void(0);">Silverneedle Hospitality</a></li>
            <li><a href="brand_alternative.php">Sage Hotels</a></li>
            <li><a href="hotel.php">Sage West Perth</a></li>
            <li>Location</li>
          </ul>
        </div> <!-- default-breadcrumb -->

      </div>
    </div>
  </div>
</article> <!-- default-breadcrumb-container -->

<!--
   _____ ___ _____ _     _____
  |_   _|_ _|_   _| |   | ____|
    | |  | |  | | | |   |  _|
    | |  | |  | | | |___| |___
    |_| |___| |_| |_____|_____|

-->

<!-- used in index pages -->

<article class="index-page-title-section" style="display:none;"> <!-- removed by client -->
  <div class="container-fluid has-breakpoint">
    <div class="row">
      <div class="col-md-2 col-sm-1 col-xs-0"></div>
      <div class="col-md-8 col-sm-10 col-xs-12">
        
        <div class="index-page-title">
          <h1>Contact & Location</h1>
          <p>Please fill in the details below to submit your request. <br>We will be in touch with you in a short time to follow up with your request.</p>
        </div> <!-- default-index-page-title -->

      </div>
    </div> <!-- row -->
  </div>
</article> <!-- index-page-title-section -->
  


<!--
   _____ ___  ____  __  __
  |  ___/ _ \|  _ \|  \/  |
  | |_ | | | | |_) | |\/| |
  |  _|| |_| |  _ <| |  | |
  |_|   \___/|_| \_\_|  |_|

-->

<article id="contact-page-form-section" style="display:none;"> <!-- removed by client -->
  <div class="container-fluid has-breakpoint">
    
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-10">



        <form id="contact-page-form" 
          action="contact_thankyou.php"
          method="POST"
          class="default-form simple-form-check"
          novalidate>

          <div class="row">
            <div class="col-md-5">

              <div class="form-group">
                <label>Reason For Contact<span class="asterisk-span">*</span></label>
                <div class="manic-dropdown">
                  <select id="contact-form-reason-for-contact" name="contact-form-reason-for-contact" class="required">
                    <option value="">Please Select</option>
                    <option>General Enquiry</option>
                    <option>Reason 02</option>
                    <option>Reason 03</option>
                    <option>Reason 04</option>
                    <option>Reason 05</option>
                  </select>
                </div>
              </div>

            </div>
            <div class="col-md-2"></div>
            <div class="col-md-5">
              
              <div id="contact-page-form-disclaimer">
                <p><span class="asterisk-span">*</span>Mandatory</p>
              </div>

            </div>
          </div> <!-- row -->

          <div class="row">
            <div class="col-md-5">

              <div class="form-group">
                <label>Salutation<span class="asterisk-span">*</span></label>
                <div class="manic-dropdown">
                  <select id="contact-form-salutation" name="contact-form-salutation" class="required">
                    <option value="">Please Select</option>
                    <option>Mr.</option>
                    <option>Ms.</option>
                    <option>Mrs.</option>
                    <option>Dr.</option>
                  </select>
                </div>

              </div>
            </div>
            <div class="col-md-2"></div>
            <div class="col-md-5">

              <div class="form-group">
                <label>Full Name<span class="asterisk-span">*</span></label>
                <input type="text" id="contact-form-full-name" name="contact-form-full-name" class="required">
              </div>

            </div>
          </div> <!-- row -->

          <div class="row">
            <div class="col-md-5">

              <div class="form-group">
                <label>Email Address<span class="asterisk-span">*</span></label>
                <input type="email" id="contact-form-email-address" name="contact-form-email-address" class="required only-email">
              </div>

            </div>
            <div class="col-md-2"></div>
            <div class="col-md-5">

              <div class="form-group">
                <label>Contact Number</label>
                <input type="text" id="contact-form-contact-number" name="contact-form-contact-number" class="">
              </div>

            </div>
          </div> <!-- row -->

          <div class="space20"></div>

          <div class="form-group">
            <label>Inquiry<span class="asterisk-span">*</span></label>
            <textarea id="contact-form-inquiry" name="contact-form-inquiry" class="required"></textarea>
          </div>

          <div class="cta-container">
            <button type="submit" class="square-cta highlight-version">Submit</button>
          </div>

        </form> <!-- contact-page-form -->


        
      </div>
    </div>
  </div>
</article> <!-- contact-page-form-section -->



<!--
   __  __    _    ____
  |  \/  |  / \  |  _ \
  | |\/| | / _ \ | |_) |
  | |  | |/ ___ \|  __/
  |_|  |_/_/   \_\_|

-->

<article id="contact-page-map-section" class="visible-md visible-lg">
  <div class="container-fluid has-breakpoint">
    <div class="row">

      <div id="contact-page-map-title">
        <!-- <h1>Getting Here</h1> -->
        <!-- <h1>Contact Us</h1> -->
        <h1>Contact & Location</h1>
      </div> <!-- contact-page-map-title -->

    </div> <!-- row -->
    <div class="row">
      <div class="col-md-7">

        <div id="contact-page-map-container">
          
          <div id="contact-page-map" class="generic-map" data-lat="-31.947643" data-lng="115.838698"  data-zoom="15">
            <div class="generic-map-map"></div>
            <div class="generic-map-markers open-version" 
              data-pin-icon="images/icons/map-pin-grey.png" 
              data-location="Sage West Perth" 
              data-lat="-31.947643" 
              data-lng="115.838698" 
              data-place-id="ChIJufd18zGlMioRIFTfNbXwBAU" 
              data-html="<div class='infoBox-text'><div class='address'><div class='address-content'><a target='_blank' href='http://maps.google.com/?q=Sage West Perth 1309 Hay Street, West Perth WA 6005, Australia'><h4>Sage West Perth</h4><p>1309 Hay Street, West Perth WA 6005, Australia</p></a></div></div><div class='arrow-left'></div></div>">
            </div>
          </div>
          
        </div>
        
      </div>
      <div class="col-md-5">

        <div id="contact-page-map-copy-container">
          <div id="contact-page-map-copy">
            <div class="default-copy">
              <h3>Sage West Perth</h3>
              <p>
                1309 Hay Street, West Perth, <br>
                WA 6005, Australia <br>
                Phone: +61865009100 <br>
                Fax: +61 8 6500 9101 <br>
                Reservations: <a href="mailto:reservations.westperth@sage-hotels.com">reservations.westperth@sage-hotels.com</a><br>
                Email 1: <a href="mailto:TEST1.westperth@sage-hotels.com">TEST1.westperth@sage-hotels.com</a><br>
                Email 2: <a href="mailto:TEST2.westperth@sage-hotels.com">TEST2.westperth@sage-hotels.com</a>

              </p>
              <p>
                Reception Hours: 24 hours <br>
                Check In Time: 14:00 <br>
                Check Out Time: 10:00
              </p>
              <p>
                Central Reservations <br>
                1800 303 186 (Within Australia) <br>
                0800 480 274 (Within New Zealand)
              </p>
            </div> <!-- default-copy -->
          </div> <!-- contact-page-map-copy -->
        </div> <!-- contact-page-map-copy-container -->
        
      </div>
    </div>
  </div>
</article> <!-- contact-page-map-section -->




<!--
   __  __    _    ____    __  __  ___  ____ ___ _     _____
  |  \/  |  / \  |  _ \  |  \/  |/ _ \| __ )_ _| |   | ____|
  | |\/| | / _ \ | |_) | | |\/| | | | |  _ \| || |   |  _|
  | |  | |/ ___ \|  __/  | |  | | |_| | |_) | || |___| |___
  |_|  |_/_/   \_\_|     |_|  |_|\___/|____/___|_____|_____|

-->

<article id="contact-page-map-section-mobile" class="visible-sm visible-xs">


  <div id="contact-page-map-title-mobile">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-1 col-xs-0"></div>
        <div class="col-sm-10 col-xs-12">

          <h1>Contact Us</h1>

        </div>
      </div>
    </div>
  </div>
  
  <div id="contact-page-map-container-mobile">

    <div id="contact-page-map-mobile" class="generic-map" data-lat="-31.947643" data-lng="115.838698"  data-zoom="15">
      <div class="generic-map-map"></div>
      <div class="generic-map-markers" 
        data-pin-icon="images/icons/map-pin-grey.png" 
        data-location="Sage West Perth" 
        data-lat="-31.947643" 
        data-lng="115.838698" 
        data-place-id="ChIJufd18zGlMioRIFTfNbXwBAU" 
        data-html="<div class='infoBox-text'><div class='address'><div class='address-content'><a target='_blank' href='http://maps.google.com/?q=Sage West Perth 1309 Hay Street, West Perth WA 6005, Australia'><h4>Sage West Perth</h4><p>1309 Hay Street, West Perth WA 6005, Australia</p></a></div></div><div class='arrow-left'></div></div>">
      </div>
    </div>
  </div>

  <div id="contact-page-map-copy-container-mobile">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-1 col-xs-0"></div>
        <div class="col-sm-10 col-xs-12">

          

          <div id="contact-page-map-copy-mobile">
            <div class="default-copy">
              <div class="contact-page-map-copy-title">Sage West Perth</div>
              <p>
                1309 Hay Street, West Perth, <br>
                WA 6005, Australia <br>
                Phone: +61865009100 <br>
                Fax: +61 8 6500 9101 <br>
                Reservations: <br><a href="mailto:reservations.westperth@sage-hotels.com">reservations.westperth@sage-hotels.com</a><br>
                Email 1: <br><a href="mailto:TEST1.westperth@sage-hotels.com">TEST1.westperth@sage-hotels.com</a><br>
                Email 2: <br><a href="mailto:TEST2.westperth@sage-hotels.com">TEST2.westperth@sage-hotels.com</a>
              </p>
              <p>
                Reception Hours: 24 hours <br>
                Check In Time: 14:00 <br>
                Check Out Time: 10:00
              </p>
              <p>
                Central Reservations <br>
                1800 303 186 (Within Australia) <br>
                0800 480 274 (Within New Zealand)
              </p>

            </div>
          </div> <!-- contact-page-map-copy-mobile -->

        </div>
      </div>
    </div>
  </div> <!-- contact-page-map-copy-container-mobile -->
</article>






<div class="container-fluid has-breakpoint visible-md visible-lg">
  <div class="row">
    <div class="col-md-12">
      <hr>
    </div>
  </div>
</div>

<!--
    ____ ___  ______   __
   / ___/ _ \|  _ \ \ / /
  | |  | | | | |_) \ V /
  | |__| |_| |  __/ | |
   \____\___/|_|    |_|

-->

<article id="contact-page-copy-section" class="visible-md visible-lg">

  

  <div class="container-fluid has-breakpoint">

    <div class="row">
      <div class="col-md-12">
        <div id="contact-page-copy-section-title">
          <h1>Getting Here</h1>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">

        <div id="contact-page-copy-column-01">
          <div class="contact-page-copy-title">
            <h5>By Metro & Bus</h5>
          </div>

          <div class="contact-page-copy-section">
            <div class="default-copy">
              <h3>Shuttle Service</h3>
              <p>Take the Skybus service no. 978 from Terminal 2 of the airport. The journey takes about 2 hours and the bus stops right infront of our hotel.</p>
            </div>
          </div>

          <div class="contact-page-copy-section">
            <div class="default-copy">
              <h3>Metro</h3>
              <p>The nearest metro station is Hay Station.</p>
              <ol>
                <li>Take Exit 5 upon attival at Hay Station. On your left, you should see an area with bicycles and buses. Head straight through  and spot the building that has an orange sign saying ‘LIXIL’. The sign is on the corner of the building on the Level 3.</li>
                <li>Head down that street on the left hand side and after passing two roads you should pass a LAWSON’s convenience store. </li>
                <li>Cross the road, turn left and follow the street down, stay on the right hand side of this street. The first street on your right should be the street our hotel is on. </li>
              </ol>
            </div>
          </div>

          <div class="contact-page-copy-section">
            <div class="default-copy">
              <h3>Public Bus</h3>
              <p>Take the Skybus service no. 978 from Terminal 2 of the airport. The journey takes about 2 hours and the bus stops right infront of our hotel.</p>
            </div>
          </div>

        </div> <!-- contact-page-copy-column-01 -->

      </div>
      <div class="col-md-6">

        <div id="contact-page-copy-column-02">
          <div class="contact-page-copy-title">
            <h5>By Car / Taxi</h5>
          </div>

          <div class="contact-page-copy-section">
            <div class="default-copy">
              <h3>Via Central Expressway (CTE) from the City:</h3>
              <ul>
                <li>Take the CTE towards SLE</li>
                <li>Continue onto SLE towards Smith Street</li>
                <li>Take exit 8A at SLE onto Smith Street</li>
                <li>Turn left onto Hay Street</li>
              </ul>
            </div>
          </div>

          <div class="contact-page-copy-section">
            <div class="default-copy">
              <h3>Via Pan Island Expressway (PIE) from the City:</h3>
              <ul>
                <li>Take the PIE towards BKE</li>
                <li>Continue onto BKE towards Fitzgerald Street</li>
                <li>Take exit 7 at BKE onto Roe Street</li>
                <li>Turn right onto Hay Street</li>
              </ul>
            </div>
          </div>

          <div class="contact-page-copy-section">
            <div class="default-copy">
              <h3>Valet Parking</h3>
              <p>Driving in? Here at NEXT Hotel Brisbane we offer valet parking onsite for AU$45.00 per night. There is a height restriction of 2.0m. These spots are limited and subject to availability. </p>
              <p>If you would like to find out if the car park is full prior to your arrival please phone the hotel on 07 3222 3222. Entry to our valet parking is at 33 Burnett Lane, Brisbane City.</p>
            </div>
          </div>

          <div class="contact-page-copy-section">
            <div class="default-copy">
              <h3>Self Parking</h3>

              <p>When the car park is full or you would prefer to park yourself we offer discounted rates across the mall at the Myer Centre.</p>

              <ul>
                <li>
                  <div class="row">
                    <div class="col-xs-4">Weekdays</div>
                    <div class="col-xs-8">$35.00 per night</div>
                  </div>
                </li>
                <li>
                  <div class="row">
                    <div class="col-xs-4">Friday</div>
                    <div class="col-xs-8">$15.00 overnight if arriving after 4pm</div>
                  </div>
                </li>
                <li>
                  <div class="row">
                    <div class="col-xs-4">Weekends</div>
                    <div class="col-xs-8">$15.00 per night </div>
                  </div>
                </li>
              </ul>

              <p>Pay cycles starts at 11:30am. Terms and Conditions apply.</p>
              <p>Upon check-out you will need to present your ticket to our reception who will charge your account directly and validate your ticket. Please note that the Myer Centre Car Park only allows for one entry and exit.</p>
              <p>Entry into the Myer Centre Car Park is via 86 Elizabeth Street, Brisbane. The following video shows directions from the hotel to the Myer Centre Car Park.</p>

            </div>
          </div>

        </div> <!-- contact-page-copy-column-02 -->

      </div>
    </div>
  </div>
</article> <!-- contact-page-copy-section -->






<!--
    ____ ___  ______   __  __  __  ___  ____ ___ _     _____
   / ___/ _ \|  _ \ \ / / |  \/  |/ _ \| __ )_ _| |   | ____|
  | |  | | | | |_) \ V /  | |\/| | | | |  _ \| || |   |  _|
  | |__| |_| |  __/ | |   | |  | | |_| | |_) | || |___| |___
   \____\___/|_|    |_|   |_|  |_|\___/|____/___|_____|_____|

-->


<div id="contact-page-copy-section-mobile" class="visible-sm visible-xs">

  <div id="contact-page-copy-section-title">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-1 col-xs-0"></div>
        <div class="col-sm-10 col-xs-12">

          <h1>Getting Here</h1>

        </div>
      </div>
    </div>
    
  </div>

  <div id="contact-page-copy-expanding-container-mobile">

    <!--
        ___  _
       / _ \/ |
      | | | | |
      | |_| | |
       \___/|_|

    -->

    <div class="manic-expand-container" data-group="mobile-contact">
      <div class="scroll-target" data-value="mobile-by-metro-bus"></div>
      <div class="manic-expand-container-title">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-1 col-xs-0"></div>
            <div class="col-sm-10 col-xs-12">

              <h4>By Metro & Bus</h4>

            </div>
          </div>
        </div>
      </div>
      <div class="manic-expand-container-btn"></div>
      <div class="manic-expand-container-content">

        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-1 col-xs-0"></div>
            <div class="col-sm-10 col-xs-12">

              <div class="contact-page-copy-section">
                <div class="default-copy">
                  <h3>Shuttle Service</h3>
                  <p>Take the Skybus service no. 978 from Terminal 2 of the airport. The journey takes about 2 hours and the bus stops right infront of our hotel.</p>
                </div>
              </div>

              <div class="contact-page-copy-section">
                <div class="default-copy">
                  <h3>Metro</h3>
                  <p>The nearest metro station is Hay Station.</p>
                  <ol>
                    <li>Take Exit 5 upon attival at Hay Station. On your left, you should see an area with bicycles and buses. Head straight through  and spot the building that has an orange sign saying ‘LIXIL’. The sign is on the corner of the building on the Level 3.</li>
                    <li>Head down that street on the left hand side and after passing two roads you should pass a LAWSON’s convenience store. </li>
                    <li>Cross the road, turn left and follow the street down, stay on the right hand side of this street. The first street on your right should be the street our hotel is on. </li>
                  </ol>
                </div>
              </div>

              <div class="contact-page-copy-section">
                <div class="default-copy">
                  <h3>Public Bus</h3>
                  <p>Take the Skybus service no. 978 from Terminal 2 of the airport. The journey takes about 2 hours and the bus stops right infront of our hotel.</p>
                </div>
              </div>



            </div>
          </div>
        </div>
      </div>
    </div> <!-- manic-expand-container -->

    <!--
        ___ ____
       / _ \___ \
      | | | |__) |
      | |_| / __/
       \___/_____|

    -->

    <div class="manic-expand-container" data-group="mobile-contact">
      <div class="scroll-target" data-value="mobile-by-car-taxi"></div>
      <div class="manic-expand-container-title">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-1 col-xs-0"></div>
            <div class="col-sm-10 col-xs-12">

              <h4>By Car / Taxi</h4>

            </div>
          </div>
        </div>
      </div>
      <div class="manic-expand-container-btn"></div>
      <div class="manic-expand-container-content">

        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-1 col-xs-0"></div>
            <div class="col-sm-10 col-xs-12">

              <div class="contact-page-copy-section">
                <div class="default-copy">
                  <h3>Via Central Expressway (CTE) from the City:</h3>
                  <ul>
                    <li>Take the CTE towards SLE</li>
                    <li>Continue onto SLE towards Smith Street</li>
                    <li>Take exit 8A at SLE onto Smith Street</li>
                    <li>Turn left onto Hay Street</li>
                  </ul>
                </div>
              </div>

              <div class="contact-page-copy-section">
                <div class="default-copy">
                  <h3>Via Pan Island Expressway (PIE) from the City:</h3>
                  <ul>
                    <li>Take the PIE towards BKE</li>
                    <li>Continue onto BKE towards Fitzgerald Street</li>
                    <li>Take exit 7 at BKE onto Roe Street</li>
                    <li>Turn right onto Hay Street</li>
                  </ul>
                </div>
              </div>

              <div class="contact-page-copy-section">
                <div class="default-copy">
                  
                  <h3>Valet Parking</h3>
                  <p>Driving in? Here at NEXT Hotel Brisbane we offer valet parking onsite for AU$45.00 per night. There is a height restriction of 2.0m. These spots are limited and subject to availability. </p>
                  <p>If you would like to find out if the car park is full prior to your arrival please phone the hotel on 07 3222 3222. Entry to our valet parking is at 33 Burnett Lane, Brisbane City.</p>

                </div>
              </div>

              <div class="contact-page-copy-section">
                <div class="default-copy">
                  
                  <h3>Self Parking</h3>

                  <p>When the car park is full or you would prefer to park yourself we offer discounted rates across the mall at the Myer Centre.</p>

                  <ul>
                    <li>
                      <div class="row">
                        <div class="col-xs-4">Weekdays</div>
                        <div class="col-xs-8">$35.00 per night</div>
                      </div>
                    </li>
                    <li>
                      <div class="row">
                        <div class="col-xs-4">Friday</div>
                        <div class="col-xs-8">$15.00 overnight if arriving after 4pm</div>
                      </div>
                    </li>
                    <li>
                      <div class="row">
                        <div class="col-xs-4">Weekends</div>
                        <div class="col-xs-8">$15.00 per night </div>
                      </div>
                    </li>
                  </ul>

                  <p>Pay cycles starts at 11:30am. Terms and Conditions apply.</p>
                  <p>Upon check-out you will need to present your ticket to our reception who will charge your account directly and validate your ticket. Please note that the Myer Centre Car Park only allows for one entry and exit.</p>
                  <p>Entry into the Myer Centre Car Park is via 86 Elizabeth Street, Brisbane. The following video shows directions from the hotel to the Myer Centre Car Park.</p>
                  
                </div>
              </div>










            </div>
          </div>
        </div>
      </div>
    </div> <!-- manic-expand-container -->



  </div> <!-- #contact-page-copy-expanding-container-mobile -->


</div> <!-- #contact-page-copy-section-mobile -->



<div id="default-footer-spacer"></div>
