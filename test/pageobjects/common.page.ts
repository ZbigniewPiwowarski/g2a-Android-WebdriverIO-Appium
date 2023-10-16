import { browser } from "@wdio/globals";

export default class CommonPage {
  //   public get notificationOkButton() {
  //     return $("~com.g2a.marketplace:id/buttonTurnOn");
  //   }
  //   public get notificationNoButton() {
  //     return $("com.g2a.marketplace:id/buttonCancel");
  //   }
  public get searchBottomMenu() {
    return $("~Search");
  }

  public get profileBottomMenu() {
    return $("id:profile");
  }

  public get cartBottomMenu() {
    return $("id:cart");
  }

  public get homeBottomMenu() {
    return $("id:home");
  }

  public get currencyButton() {
    return $("id:fragmentProfileCurrency");
  }

  public get webviewPopUpXButton() {
    return $("//android.view.View[@clickable='true']");
  }

  public get euroCurrency() {
    return $("//android.widget.TextView[@text='EUR']");
  }

  // components that are on more than one page

  public get searchBar() {
    return $("id:searchTextView");
  }

  // methods

  public isWebviewPopUpXButtonDisplayed() {
    return this.webviewPopUpXButton.isDisplayed();
  }

  public clickWebviewPopUpXButton() {
    return this.webviewPopUpXButton.click();
  }

  public async restartApp() {
    await driver.terminateApp("com.g2a.marketplace");
    await driver.activateApp("com.g2a.marketplace");
  }

  public async scrollTextIntoView(text: String) {
    const elementSelector = `new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("${text}"))`;
    return $(`android=${elementSelector}`);
  }

  public async chooseCurrency(currency: String) {
    await this.profileBottomMenu.click();

    await this.currencyButton.click();
    await this.scrollTextIntoView(currency);
    let currencySelector = await $(
      `//android.widget.TextView[@text='${currency}']`
    );
    await currencySelector.click();
  }

  public async switchCurrencyToEuro() {
    await this.profileBottomMenu.click();
    if (!(await this.euroCurrency.isDisplayed())) {
      await this.currencyButton.click();
      await this.scrollTextIntoView("EUR");

      await this.euroCurrency.click();
    }
  }

  // assertions
  public async checkIfSearchIconIsSelected() {
    expect(await this.searchBottomMenu.getAttribute("selected")).toEqual(
      "true"
    );
  }
}
