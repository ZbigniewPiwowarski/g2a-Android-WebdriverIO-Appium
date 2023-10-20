import { $ } from "@wdio/globals";
import CommonPage from "./common.page.js";

class CartPage extends CommonPage {
  public get cartIsEmpty() {
    return $("id=fragmentCartErrorView");
  }

  public get productThreeDotsbutton() {
    return $("id=cartProductDetailsItemButtonEdit");
  }

  public get productDeleteButton() {
    return $("id=cartItemProductActionItemRemove");
  }

  public get productIncreaseButton() {
    return $("id=cartItemProductActionItemCountIncrease");
  }

  public get productDecreaseButton() {
    return $("id=cartItemProductActionItemCountDecrease");
  }

  public get addDiscountCodeButton() {
    return $("id=addCouponCodeTextView");
  }

  public get addDiscountCodeInput() {
    return $("id=couponCodeEditText");
  }

  public get applyDiscountCodeButton() {
    return $("id=applyButton");
  }

  public get noCodeFoundMsg() {
    return $("id=errorTextView");
  }

  public get productContinueButton() {
    return $("id=cartFooterCheckoutButton");
  }

  public get buyAsGuestButton() {
    return $("id=fragmentAuthenticationBuyAsGuestLabel");
  }

  public get signInWithGoogleButton() {
    return $("id=googleButton");
  }

  public get signInWithFacebookButton() {
    return $("id=facebookButton");
  }

  public get buyAsGuestEmailInput() {
    return $("id=fragmentAuthenticationEmailText");
  }

  public get buyAsGuestContinueButton() {
    return $("id=fragmentAuthenticationContinueButton");
  }

  public get applePayOption() {
    return $("//android.widget.TextView[@text='Apple Pay']");
  }

  public get googlePayOption() {
    return $("//android.widget.TextView[@text='Google Pay']");
  }

  // taps

  public async tapProductThreeDotsbutton() {
    await this.productThreeDotsbutton.click();
  }

  public async tapProductDeleteButton() {
    await this.productDeleteButton.click();
  }

  public async tapProductIncreaseButton() {
    await this.productIncreaseButton.click();
  }

  public async tapProductDecreaseButton() {
    await this.productDecreaseButton.click();
  }

  public async tapAddDiscountCodeButton() {
    await this.addDiscountCodeButton.click();
  }

  public async tapApplyDiscountCodeButton() {
    await this.applyDiscountCodeButton.click();
  }

  public async tapProductContinueButton() {
    await this.productContinueButton.click();
  }

  public async tapBuyAsGuestButton() {
    await this.buyAsGuestButton.click();
  }

  public async tapSignInAsGuestButton() {
    await this.signInWithGoogleButton.click();
  }

  public async tapBuyAsGUestEmailInput() {
    await this.buyAsGuestEmailInput.click();
  }

  public async tapBuyAsGuestContinueButton() {
    await this.scrollTextIntoView("Continue");
    await this.buyAsGuestContinueButton.click();
  }

  // inputs

  public async inputAddDiscountCodeInput(code: string) {
    await this.addDiscountCodeInput.setValue(code);
  }

  public async inputBuyAsGuestEmailInput(email: string) {
    await this.buyAsGuestEmailInput.setValue(email);
  }

  // assertions
  public async assertCartIsEmpty() {
    await this.cartIsEmpty.waitForDisplayed();
    await expect(this.cartIsEmpty).toBeDisplayed();
  }

  public async assertCartIsNotEmpty() {
    await this.cartIsEmpty.waitForDisplayed({ reverse: true });
    await expect(this.cartIsEmpty).not.toBeDisplayed();
  }

  public async assertNoCodeFoundMsg() {
    await expect(this.noCodeFoundMsg).toBeDisplayed();
  }

  public async assertApplePayOptionDisplayed() {
    await expect(this.applePayOption).toBeDisplayed();
  }

  public async assertGooglePayOptionDisplayed() {
    await expect(this.googlePayOption).toBeDisplayed();
  }
}

export default new CartPage();
