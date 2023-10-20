import commonPage from "../pageobjects/common.page.ts";
import ProfilePage from "../pageobjects/profile.page.ts";
const CommonPage = new commonPage();

describe("Profile page tests", () => {
  it("should inspect orders button", async () => {
    await CommonPage.tapProfileBottomMenu();
    await ProfilePage.tapOrdersButton();

    await ProfilePage.assertSignInScreeDisplayed();
  });

  it("should turn off push notifications", async () => {
    await CommonPage.tapProfileBottomMenu();
    await ProfilePage.tapPushNotificationsButton();
    await ProfilePage.tapPushNotificationsTurnOffButton();

    await ProfilePage.assertPushNotificationOff();
    // to restore push notifications state from before test
    await ProfilePage.tapPushNotificationsButton();
  });

  it("should go to turn off push notifications but use cancel button", async () => {
    await CommonPage.tapProfileBottomMenu();
    await ProfilePage.tapPushNotificationsButton();
    await ProfilePage.tapPushNotificationsCancelButton();

    await ProfilePage.assertPushNotificationOn();
  });

  it("should inspect terms of service button", async () => {
    await CommonPage.tapProfileBottomMenu();
    await ProfilePage.tapTermsOfServiceButton();

    await ProfilePage.assertWebviewUrlIsG2acom();
  });

  it("should inspect privacy policy button", async () => {
    await CommonPage.tapProfileBottomMenu();
    await ProfilePage.tapPrivacyPolicyButton();

    await ProfilePage.assertWebviewUrlIsG2acom();
  });
});
