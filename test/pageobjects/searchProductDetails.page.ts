import { $ } from "@wdio/globals";
import CommonPage from "./common.page.js";

class SearchProductDetails extends CommonPage {
  public get activationInOptions() {
    return $("//android.widget.TextView[@text='Activation in']");
  }

  public get angolaOption() {
    return $("//android.widget.TextView[@text='Angola']");
  }

  public get cartButton() {
    return $("id=offersDetailsItemCartButton");
  }

  public get showOtherOffersButton() {
    return $("//android.widget.TextView[@text='Show other offers']");
  }

  public get readMoreButton() {
    return $("id=descriptionItemShowMoreButton");
  }

  public get readMoreDescription() {
    return $("id=descriptionDialogLabelText");
  }

  public get showMoreOffersFromButton() {
    return $("id=offersFABConstraint");
  }

  public get offersList() {
    return $("id=offersDialogInstantRecycler");
  }

  public async tapActivationInOptions() {
    await this.activationInOptions.click();
  }

  public async tapAngolaOption() {
    await this.angolaOption.click();
  }

  public async tapCartButton() {
    await this.cartButton.click();
  }

  public async tapShowOtherOffersButton() {
    await this.showOtherOffersButton.click();
  }

  public async tapReadMoreButton() {
    await this.readMoreButton.click();
  }

  public async tapShowMoreOffersFromButton() {
    await this.showMoreOffersFromButton.click();
  }

  public async changeActivationInOptionToAngola() {
    await this.tapActivationInOptions();
    await this.tapAngolaOption();
  }

  // assertions

  public async examineReadMoreButton() {
    await this.tapReadMoreButton();
    await expect(this.readMoreDescription).toBeDisplayed();
  }

  public async examineShowOtherOffersButton() {
    await this.tapShowOtherOffersButton();
    await expect(this.offersList).toBeDisplayed();
  }

  public async examineShowMoreOffersFromButton() {
    await this.tapShowMoreOffersFromButton();
    await expect(this.offersList).toBeDisplayed();
  }

  public async cartButtonIsDisplayed() {
    expect(await this.cartButton.isDisplayed()).toBe(true);
  }

  public async angolaOptionIsDisplayed() {
    expect(await this.angolaOption.isDisplayed()).toBe(true);
  }
}

export default new SearchProductDetails();
