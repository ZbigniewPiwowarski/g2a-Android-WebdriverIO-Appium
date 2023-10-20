import { $ } from "@wdio/globals";
import CommonPage from "./common.page.js";
import { expect } from "chai";

class ProfilePage extends CommonPage {
  public get ordersButton() {
    return $("id=fragmentProfileMyOrders");
  }

  public get signInScreenTitle() {
    return $("id=fragmentAuthenticationLabel");
  }

  public get pushNotificationsButton() {
    return $("id=fragmentProfileNotifications");
  }

  public get pushNotificationsCancelButton() {
    return $("id=buttonCancel");
  }

  public get pushNotificationsTurnOffButton() {
    return $("id=buttonTurnOff");
  }

  public get webviewUrlBar() {
    const url = "com.android.chrome:id/url_bar";
    return $(`android=new UiSelector().resourceId("${url}")`);
  }

  public get privacyPolicyButton() {
    return $("id=fragmentProfilePrivacyPolicy");
  }

  public get termsOfServiceButton() {
    return $("id=fragmentProfileTermsConditions");
  }

  // taps

  public async tapOrdersButton() {
    await this.ordersButton.click();
  }

  public async tapPushNotificationsButton() {
    await this.pushNotificationsButton.click();
  }

  public async tapPushNotificationsCancelButton() {
    await this.pushNotificationsCancelButton.click();
  }

  public async tapPushNotificationsTurnOffButton() {
    await this.pushNotificationsTurnOffButton.click();
  }

  public async tapPrivacyPolicyButton() {
    await this.privacyPolicyButton.click();
  }

  public async tapTermsOfServiceButton() {
    await this.termsOfServiceButton.click();
  }

  // assertions

  public async assertPushNotificationOn() {
    expect(
      await this.pushNotificationsButton.getText(),
      "Push notifications are not ON"
    ).to.equal("Push notifications ON");
  }

  public async assertPushNotificationOff() {
    expect(
      await this.pushNotificationsButton.getText(),
      "Push notifications are not OFF"
    ).to.equal("Push notifications OFF");
  }

  public async assertSignInScreeDisplayed() {
    expect(
      await this.signInScreenTitle.isDisplayed(),
      "Sign in screen is not displayed"
    ).to.be.true;
  }

  public async assertWebviewUrlIsG2acom() {
    expect(
      await this.webviewUrlBar.getText(),
      "Webview URL is not g2a.com"
    ).to.equal("g2a.com");
  }
}

export default new ProfilePage();
