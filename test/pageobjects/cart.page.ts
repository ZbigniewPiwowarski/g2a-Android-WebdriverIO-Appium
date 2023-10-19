import { $ } from "@wdio/globals";
import CommonPage from "./common.page.js";

class CartPage extends CommonPage {
  public get cartIsEmpty() {
    return $("id=fragmentCartErrorView");
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
}

export default new CartPage();
