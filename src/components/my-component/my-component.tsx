import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
 
  @Prop({ reflect: true, mutable: true }) cardNumber: string;
  @Prop({ reflect: true, mutable: true }) nameOnCard: string;
  @Prop({ reflect: true, mutable: true }) cvc: string;
  @Prop({ reflect: true, mutable: true }) secureAddressLine1: string;
  @Prop({ reflect: true, mutable: true }) city: string;
  @Prop({ reflect: true, mutable: true }) securePostcode: string;

  private getCardNumber(event: Event) {
    this.cardNumber = (event.target as HTMLInputElement).value;
  }
  private getNameOnCard(event: Event) {
    this.nameOnCard = (event.target as HTMLInputElement).value;
  }
  private getCvc(event: Event) {
    this.cvc = (event.target as HTMLInputElement).value;
  }
  private getSecureAddressLine1(event: Event) {
    this.secureAddressLine1 = (event.target as HTMLInputElement).value;
  }
  private getCity(event: Event) {
    this.city = (event.target as HTMLInputElement).value;
  }
  private getSecurePostcode(event: Event) {
    this.securePostcode = (event.target as HTMLInputElement).value;
  }
  private verify() {
    const payload = {
      cardNumber: this.cardNumber,
      name: this.nameOnCard,
      cvv: this.cvc,
      address: this.secureAddressLine1,
      city: this.city,
      postcard: this.securePostcode
    }
    //console.log(payload);
    alert(JSON.stringify(payload))
  }

  render() {
    return <div id="main">
      <div class="heading-module">
        <div>
          <h1>Create Your Account</h1>
        </div>
      </div>
      <div class="wrapper pad1">
        <div class="cardholder holder-1200">
          <div class="create-account-holder pad1"  >
            <article class="create-account module form-wrapper">
              <div class="panel-header cardholder holder-795">
                <span class="step-number">1</span>
                <h2>
                  Enter your card information
                </h2>
              </div>
              <section class="panel-body">
                <div class="form-header cardholder holder-795 cf">
                  <h3>
                    Card details
                  </h3>
                  <span><span class="asterisk"> *</span> mandatory fields</span>
                  <div class="security-info cf">
                    {/* <img src="../public/assets/sample" alt="lock icon" width="34" height="43" class="lock-icon"></img> */}
                    <div class="security-info-text">
                      <strong>Important Information:</strong><br />
                      To verify your eligibility, after registration you may see a temporary charge of <strong>$1.00 (USD)</strong> in your payment card transaction history. This is solely a “pending” transaction and your card will NOT be charged.  After your eligibility is verified, the pending amount will be removed (usually within 10 business days).
                      <br />
                      <br />
                      By providing your payment card information you consent to the use of such information by LoungeKey and your issuing bank for verification purposes and in connection with the services in accordance with our <a href="/en/terms-of-use">Terms of Use</a>, <a href="/en/conditions-of-use">Conditions of Use</a> and <a href="/en/privacy-notice">Privacy Policy</a>.
                    </div>
                  </div>
                </div>
                <div data-error-summary="true" data-inline-errors="true" data-stylish-form="set" data-instant-feedback="true" data-stylish-native="true" data-server-error-message="There was an error, please try again" class="mod-form cf validate-card-form cardholder holder-795 stylish-form" data-id="modForm_1">
                  <div class="form-section" data-batch-name="validateCard" data-endpoint="/api/mccreateaccount/getvalidationmethods" data-id="batch_1" data-section-id="0">
                    <div class="form-section-errors"></div>
                    <fieldset>
                      <legend>Card details</legend>
                      <div class="form-field row cf" data-type="text" data-required="true" data-validation="server|required|regex" data-field-id="CardNumber" data-custom-regex="^[0-9]{16}$">
                        <label htmlFor="CardNumber">
                          Your 16-digit Mastercard number


                          <span class="asterisk required-msg"> *</span>

                        </label>
                        <div class="field">
                          <div class="stylish-number" data-type="number" tabindex="-1"><span></span><input type="number" id="CardNumber" placeholder="required" name="CardNumber" tabindex="0" onInput={this.getCardNumber.bind(this)} value={this.cardNumber} ></input></div>

                          <div class="err-msgs">
                            <div data-validation="required">Please enter your payment card number</div>


                            <div data-validation="regex">Please enter your 16-digit Mastercard number</div>

                          </div>
                          <div class="input-info">Please do not include spaces</div>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
              </section>
            </article>
          </div>
          

        </div>
        
      </div>
      <div class="create-account-holder1">
            <article class="create-account module form-wrapper">

              <section class="panel-body">

                <div data-error-summary="true" data-inline-errors="true" data-stylish-form="set" data-instant-feedback="true" data-stylish-native="true" data-server-error-message="There was an error, please try again" class="mod-form cf validate-card-form cardholder holder-795 stylish-form hidden" data-id="modForm_1">
                  <div class="form-section" data-batch-name="validateCard" data-endpoint="/api/mccreateaccount/getvalidationmethods" data-id="batch_1" data-section-id="0">
                    <div class="form-section-errors">
                    </div>
                    <fieldset>
                      <legend>
                        Card details
                      </legend>
                      <div class="form-field row cf valid" data-type="text" data-required="true" data-validation="server|required|regex" data-field-id="CardNumber" data-custom-regex="^[0-9]{16}$">
                        <label htmlFor="CardNumber">
                          Your 16-digit Mastercard number
                          <span class="asterisk required-msg">
                            *
                          </span>
                        </label>
                        <div class="field">
                          <div class="stylish-number" data-type="number" tabindex="-1">
                            <span>
                            </span>
                            <input type="number" id="CardNumber" placeholder="required" name="CardNumber" autoComplete="cc-number" tabindex="0" />
                          </div>
                          <div class="err-msgs">
                            <div data-validation="required">
                              Please enter a valid payment card number
                            </div>
                            <div data-validation="regex">
                              Please enter a valid payment card number
                            </div>
                          </div>
                          <div class="input-info">
                            Please do not include spaces
                          </div>
                        </div>
                      </div>


                    </fieldset>

                  </div>

                </div>
                <div data-error-summary="true" data-inline-errors="true" data-stylish-form="set" data-instant-feedback="true" data-stylish-native="true" data-server-error-message="There was an error, please try again" class="mod-form cf validate-card-details-form stylish-form" data-id="modForm_2">
                  <div class="form-section card-details-section" data-batch-name="validateCardDetails" data-endpoint="/api/mccreateaccount/validatecard" data-id="batch_1" data-section-id="0">
                    <div class="form-section-errors">
                    </div>
                    <fieldset>
                      <div class="cardholder holder-795">
                        <legend>
                          Card details
                        </legend>

                        <div class="form-field row cf validation-method sca-field" data-type="text" data-required="true" data-validation="server|required|regex" data-field-id="CardName" data-custom-regex="^[a-zA-Z\s-']{0,50}$">
                          <label htmlFor="CardName">
                            Name On Card
                            <span class="asterisk required-msg">
                              *
                            </span>
                            <button class="tooltip-info-trigger" aria-label="Please enter the name on card. This will be your first initial and surname e.g. J Smith.">
                            </button>
                          </label>
                          <div class="field">
                            <div class="stylish-text" data-type="text" tabindex="-1">

                              <input type="text" id="CardName" placeholder="required" name="CardName" tabindex="0" class="0-10-90-92 0-4-14-16" value={this.nameOnCard} onInput={this.getNameOnCard.bind(this)} />
                            </div>
                            <div class="err-msgs">
                              <div data-validation="required">
                                Please enter your name as it appears on your Mastercard
                              </div>
                              <div data-validation="regex">
                                Please ensure that you use only Latin characters (a-z) and does not contain accented characters or punctuation marks (e.g. ü, á, ‘, -)
                              </div>
                            </div>
                            <div class="input-info">
                              Please enter the name on card. This will be your first initial and surname e.g. J Smith.
                            </div>
                            <div class="tooltip-info">
                              <div class="tooltip-info-content">
                                <div class="tooltip-info-text">
                                  Please enter the name on card. This will be your first initial and surname e.g. J Smith.
                                </div>
                                <button class="tooltip-info-close">
                                  Close
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="form-field row cf tooltip-component extra-short-field validation-method sca-field" data-type="text" data-interaction="static" data-required="true" data-validation="server|required|regex" data-field-id="Cvv" data-custom-regex="^[0-9]{3}$">
                          <label htmlFor="Cvv">
                            CVC Number
                            <span class="asterisk required-msg">
                              *
                            </span>
                            <a href="" class="tooltip-trigger">
                              <img src="https://d25xpw488bmti5.cloudfront.net/MasterCard/Icons/question-mark-icon-d695cb4e-a4d2-4687-9625-59e9b8fc2fb0.webp?h=22&amp;la=en&amp;w=22" alt="Question mark icon" width="22" height="22" />
                              <span class="tooltip" role="tooltip" aria-describedby="#tooltip-desc">
                                <img src="https://d25xpw488bmti5.cloudfront.net/MasterCard/Icons/credit-card-5032facf-ba36-40c8-956f-edb80ef6e696.webp?h=44&amp;la=en&amp;w=70" alt="Credit card picture" width="70" height="44" />
                                <span id="tooltip-desc">
                                  Enter the 3-digit code on the back of your card
                                  <span class="tip">
                                  </span>
                                </span>
                              </span>
                            </a>
                          </label>
                          <div class="field">
                            <div class="stylish-text" data-type="text" tabindex="-1">
                              <span>
                              </span>
                              <input type="text" pattern="[0-9]*" inputMode="numeric" id="Cvv" placeholder="required" name="Cvv" tabindex="0" value={this.cvc} onInput={this.getCvc.bind(this)} />
                            </div>
                            <div class="err-msgs">
                              <div data-validation="required">
                                Please enter a valid CVC
                              </div>
                              <div data-validation="regex">
                                Please enter a valid 3-digit CVC number, this is found on the back of the card
                              </div>
                            </div>
                            <div class="input-info">
                              This is the 3-digit number found on the back of the card
                            </div>
                          </div>
                        </div>
                        <div class="form-field row cf hidden disabled validation-method" data-type="text" data-required="true" data-validation="server|required" data-field-id="UIC">
                          <label htmlFor="UIC">
                            Invitation code
                            <span class="asterisk required-msg">
                              *
                            </span>
                            <button class="tooltip-info-trigger" aria-label="Unique invitation code">
                            </button>
                          </label>
                          <div class="field">
                            <div class="stylish-text" data-type="text" tabindex="-1">
                              <span>
                              </span>
                              <input type="text" id="UIC" placeholder="required" name="UIC" tabindex="0" disabled class="0-10-201-203 0-4-125-127" />
                            </div>
                            <div class="err-msgs">
                              <div data-validation="required">
                                Please enter your Validation Code htmlFor Mastercard Airport Experiences
                              </div>
                            </div>
                            <div class="input-info">
                              Unique invitation code
                            </div>
                            <div class="tooltip-info">
                              <div class="tooltip-info-content">
                                <div class="tooltip-info-text">
                                  Unique invitation code
                                </div>
                                <button class="tooltip-info-close">
                                  Close
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="form-field row cf hidden disabled validation-method" data-type="text" data-required="true" data-validation="server|required" data-field-id="ValidationCode">
                          <label htmlFor="ValidationCode">
                            Validation code
                            <span class="asterisk required-msg">
                              *
                            </span>
                            <button class="tooltip-info-trigger" aria-label="">
                            </button>
                          </label>
                          <div class="field">
                            <div class="stylish-text" data-type="text" tabindex="-1">
                              <span>
                              </span>
                              <input type="text" id="ValidationCode" placeholder="required" name="ValidationCode" tabindex="0" disabled />
                            </div>
                            <div class="err-msgs">
                              <div data-validation="required">
                                Please enter your Validation Code htmlFor Mastercard Airport Experiences
                              </div>
                            </div>
                            <div class="input-info emptyInput">
                            </div>
                            <div class="tooltip-info">
                              <div class="tooltip-info-content">
                                <div class="tooltip-info-text">
                                </div>
                                <button class="tooltip-info-close">
                                  Close
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="verify-billing-fields sca-field">
                          <label htmlFor="BillingSectionTitle">
                            Billing Address
                            <span class="heading asterisk required-msg">
                              *
                            </span>
                            <span class="tooltip-component">
                              <a href="" class="tooltip-trigger">
                                <img src="https://d25xpw488bmti5.cloudfront.net/MasterCard/Icons/question-mark-icon-d695cb4e-a4d2-4687-9625-59e9b8fc2fb0.webp?h=22&amp;la=en&amp;w=22" alt="" width="22" height="22" class="0-11-230-231 0-5-154-155" />
                                <span class="tooltip" role="tooltip" aria-describedby="#tooltip-desc">
                                  <span id="tooltip-desc">
                                    Address to which this payment card is registered
                                    <span class="tip">
                                    </span>
                                  </span>
                                </span>
                              </a>
                            </span>
                          </label>
                          <div class="form-field row cf validation-method sca-field" data-type="select" data-required="true" data-validation="server|required" data-field-id="CountryOfResidence">

                          </div>
                          <div class="form-field row cf validation-method sca-field" data-type="text" data-required="true" data-validation="server|required" data-field-id="SecureAddressLine1">
                            <div class="field">
                              <div class="stylish-text" data-type="text" tabindex="-1">
                                <span>
                                </span>
                                <input type="text" id="SecureAddressLine1" placeholder="Address line 1" name="SecureAddressLine1" tabindex="0" value={this.secureAddressLine1} onInput={this.getSecureAddressLine1.bind(this)} />
                              </div>
                              <div class="err-msgs">
                                <div data-validation="required">
                                  Please enter Address Line1
                                </div>
                              </div>
                              <div class="input-info emptyInput">
                                &nbsp;
                              </div>
                              <div class="tooltip-info">
                                <div class="tooltip-info-content">
                                  <div class="tooltip-info-text">
                                    &nbsp;
                                  </div>
                                  <button class="tooltip-info-close">
                                    Close
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="form-field row cf validation-method sca-field" data-type="text" data-required="true" data-validation="server|required" data-field-id="City">
                            <div class="field">
                              <div class="stylish-text" data-type="text" tabindex="-1">
                                <span>
                                </span>
                                <input type="text" id="City" placeholder="City" name="City" tabindex="0" class="0-11-739-741 0-5-663-665" value={this.city} onInput={this.getCity.bind(this)} />
                              </div>
                              <div class="err-msgs">
                                <div data-validation="required">
                                  Please enter city
                                </div>
                              </div>
                              <div class="input-info">
                                &nbsp;
                              </div>
                              <div class="tooltip-info ">
                                <div class="tooltip-info-content ">
                                  <div class="tooltip-info-text ">
                                    &nbsp;
                                  </div>
                                  <button class="tooltip-info-close">
                                    Close
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="form-field row cf validation-method sca-field" data-type="text" data-required="true" data-validation="server|required|regex" data-field-id="SecurePostcode" data-custom-regex="^[0-9A-Za-z\-\s]{1,10}$">
                            <div class="field">
                              <div class="stylish-text" data-type="text" tabindex="-1">
                                <span>
                                </span>
                                <input type="text" id="SecurePostcode" placeholder="Postcode (if applicable)" name="SecurePostcode" tabindex="0" value={this.securePostcode} onInput={this.getSecurePostcode.bind(this)} />
                              </div>
                              <div class="err-msgs">
                                <div data-validation="required">
                                  Please enter post code
                                </div>
                                <div data-validation="regex">
                                  <span class="ui-provider hc b c d e f g h i j k l m n o p q r s t u v w x y z ab ac ae af ag ah ai aj ak" dir="ltr">
                                    Please ensure you have entered valid &amp; Max 10 length Character
                                  </span>
                                </div>
                              </div>
                              <div class="input-info emptyInput">
                                &nbsp;
                              </div>
                              <div class="tooltip-info">
                                <div class="tooltip-info-content">
                                  <div class="tooltip-info-text">
                                    &nbsp;
                                  </div>
                                  <button class="tooltip-info-close">
                                    Close
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <div class="form-header">
                                                <label>
                                                    Data processing
                                                </label>
                                                <span>
                                                    <span class="asterisk">
                                                        *
                                                    </span>
                                                    mandatory fields
                                                </span>
                                            </div> */}
                          {/* <div class="form-field cf inline-label checkbox-field sca-field" data-type="checkbox" data-required="true" data-validation="server|required" data-field-id="CardConsent">
                                                <div class="field">
                                                    <div class="stylish-ds" data-type="checkbox">
                                                        <span>
                                                            <span>
                                                            </span>
                                                        </span>
                                                        <input type="checkbox" id="CardConsent" name="CardConsent" autoComplete="" class="style-lNSh5" />
                                                    </div>
                                                    <label htmlFor="CardConsent">
                                                        I agree to abide by the&nbsp;
                                                        <a>
                                                        </a>
                                                        <a href="/en/conditions-of-use">
                                                            Conditions of Use 
                                                        </a>
                                                        ,
                                                        <a>
                                                        </a>
                                                        <a href="/en/privacy-notice">
                                                            Privacy Policy&nbsp;
                                                        </a>
                                                        and&nbsp;
                                                        <a>
                                                        </a>
                                                        <a href="/en/terms-of-use">
                                                            Terms of Use
                                                        </a>
                                                        .
                                                        <span class="asterisk required-msg">
                                                            *
                                                        </span>
                                                    </label>
                                                    <div class="err-msgs">
                                                        <div data-validation="required">
                                                            If you don’t confirm that you are happy htmlFor us to process your data you will not be able to access your account, and you will no longer receive communications from us.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}
                        </div>
                        <div class="form-field" data-type="hidden" data-validation="server" data-field-id="SourceCode">
                          <div class="field">
                            <input type="hidden" id="SourceCode" name="SourceCode" defaultValue="MCAENOMLON" />
                          </div>
                        </div>
                      </div>
                    </fieldset>
                    <div class="form-loader">
                    </div>
                  </div>
                  <div class="actions cardholder holder-795">
                    <div class="submit">
                      <input type="button" id="verify" class="full-submit button cta " defaultValue="Verify" onClick={this.verify.bind(this)} />
                    </div>
                  </div>
                </div>
              </section>
            </article>
          </div>
                                            <div id="stealCardNumber"/>
    </div >
  }
  
}
