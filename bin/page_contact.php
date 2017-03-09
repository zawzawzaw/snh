<!-- this will select the header link with the following value -->
<div id="desktop-header-selector" data-value="contact.php"></div>



<div id="default-header-spacer"></div>

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
            <li><a href="index.php">Sage Hotels</a></li>
            <li><a href="hotel.php">Sage West Perth</a></li>
            <li>Contact</li>
          </ul>
        </div> <!-- default-breadcrumb -->

      </div>
    </div>
  </div>
</article> <!-- default-breadcrumb-container -->

<article class="default-breadcrumb-section-mobile visible-sm visible-xs">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">

        <div class="default-breadcrumb-mobile">
          <ul>
            <li><a href="javascript:void(0);">Silverneedle Hospitality</a></li>
            <li><a href="index.php">Sage Hotels</a></li>
            <li><a href="hotel.php">Sage West Perth</a></li>
            <li>Contact</li>
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

<article class="index-page-title-section">
  <div class="container-fluid has-breakpoint">
    <div class="row">
      <div class="col-md-2 col-sm-1 col-xs-0"></div>
      <div class="col-md-8 col-sm-10 col-xs-12">

        <div class="index-page-title">
          <h1>Contact Us</h1>
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

<article id="contact-page-form-section">
  <div class="container-fluid has-breakpoint">
    
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-10">



        <form id="contact-page-form" 
          action="contact_thankyou.php"
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

<article id="contact-page-map-section">
  <div class="container-fluid has-breakpoint">
    <div class="row">

      <div id="contact-page-map-title">
        <h1>Getting Here</h1>
      </div> <!-- contact-page-map-title -->

    </div> <!-- row -->
    <div class="row">
      <div class="col-md-7">

        <div id="contact-page-map-container">

          <div id="contact-page-map" class="generic-map" data-lat="-31.946899" data-lng="115.8524116"  data-zoom="15">
            <div class="generic-map-map"></div>
            <div class="generic-map-markers open-version" 
              data-pin-icon="images/icons/map-pin-grey.png" 
              data-location="Sage West Perth" 
              data-lat="-31.946899" 
              data-lng="115.8524116" 
              data-place-id="ChIJufd18zGlMioRIFTfNbXwBAU" 
              data-html="<div class='infoBox-text'><div class='address'><div class='address-content'><a target='_blank' href='http://maps.google.com/?q=Sage West Perth 1309 Hay Street, West Perth WA 6005, Australia'><h4>Sage West Perth</h4><p>1309 Hay Street, West Perth WA 6005, Australia</p></a></div></div><div class='arrow-left'></div></div>">
            </div>
          </div>
          
        </div>
        
      </div>
      <div class="col-md-4">

        <div id="contact-page-map-copy-container">
          <div id="contact-page-map-copy">
            <div class="default-copy">
              <h3>Sage West Perth</h3>
              <p>
                1309 Hay Street, West Perth, <br>
                WA 6005, Australia <br>
                P: +61865009100 <br>
                F: +61 8 6500 9101 <br>
                E: <a href="mailto:reservations.westperth@sage-hotels.com">reservations.westperth@sage-hotels.com</a>
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
    ____ ___  ______   __
   / ___/ _ \|  _ \ \ / /
  | |  | | | | |_) \ V /
  | |__| |_| |  __/ | |
   \____\___/|_|    |_|

-->

<article id="contact-page-copy-section">
  <div class="container-fluid has-breakpoint">
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
      <div class="col-md-1"></div>
      <div class="col-md-5">

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

        </div> <!-- contact-page-copy-column-02 -->

      </div>
    </div>
  </div>
</article> <!-- contact-page-copy-section -->



<div id="default-footer-spacer"></div>
