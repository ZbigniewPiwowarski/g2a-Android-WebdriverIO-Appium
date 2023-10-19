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

  public async tapSearchBar() {
    await this.searchBar.click();
  }

  public async tapSearchBottomMenu() {
    await this.searchBottomMenu.click();
  }

  public isWebviewPopUpXButtonDisplayed() {
    return this.webviewPopUpXButton.isDisplayed();
  }

  public tapWebviewPopUpXButton() {
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

  async performSwipeDown(count: number): Promise<void> {
    for (let i = 0; i < count; i++) {
      const { width, height } = await browser.getWindowSize();
      const startPoint = { x: width / 2, y: height / 2 };
      const endPoint = { x: width / 2, y: height * 0.2 };

      await browser.touchAction([
        { action: "longPress", ...startPoint },
        { action: "moveTo", ...endPoint },
        "release",
      ]);
    }
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

  public async sendKeys(text: string[]) {
    await driver.sendKeys(text);
  }

  // assertions
  public async checkIfSearchIconIsSelected() {
    expect(await this.searchBottomMenu.getAttribute("selected")).toEqual(
      "true"
    );
  }

  public async checkIfCartIconIsSelected() {
    expect(await this.cartBottomMenu.getAttribute("selected")).toEqual("true");
  }
}
