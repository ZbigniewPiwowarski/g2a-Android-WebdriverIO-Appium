import { $ } from "@wdio/globals";
import CommonPage from "./common.page.js";
import SearchPage from "./search.page.js";

class HomePage extends CommonPage {
  public get xboxSubscriptionSection() {
    return $("//android.widget.TextView[@text='Xbox subscriptions']");
  }

  public get psGiftCardsSection() {
    return $("//android.widget.TextView[@text='PlayStation gift cards']");
  }

  public get steamGiftCardsSection() {
    return $("//android.widget.TextView[@text='Steam gift cards']");
  }

  public get netflixGiftCardsSection() {
    return $("//android.widget.TextView[@text='Netflix gift cards']");
  }

  public get bestSoftwareSection() {
    return $("//android.widget.TextView[@text='Best software']");
  }

  public get preordersSection() {
    return $("//android.widget.TextView[@text='Preorders']");
  }

  public get upTo10EuroButton() {
    return $(
      "//android.widget.TextView[@text='€ 10.00' and @resource-id='com.g2a.marketplace:id/homeCheapProductsItemValueText']"
    );
  }

  public async examinePlayStationGiftCardsSection() {
    await super.scrollTextIntoView("PlayStation gift cards");
    await this.psGiftCardsSection.click();

    expect(await SearchPage.searchResultTitle).toBeDisplayed();
    expect(await SearchPage.psGiftCardSearchTag).toBeDisplayed();
    await super.checkIfSearchIconIsSelected();
  }

  public async examineXboxSubscriptionSection() {
    await super.scrollTextIntoView("Xbox subscriptions");
    await this.xboxSubscriptionSection.click();

    expect(await SearchPage.searchResultTitle).toBeDisplayed();
    expect(await SearchPage.xboxGiftCardSearchTag).toBeDisplayed();
    await super.checkIfSearchIconIsSelected();
  }

  public async examineSteamGiftCardsSection() {
    await super.scrollTextIntoView("Steam gift cards");
    await this.steamGiftCardsSection.click();

    expect(await SearchPage.searchResultTitle).toBeDisplayed();
    expect(await SearchPage.steamGiftCardSearchTag).toBeDisplayed();
    await super.checkIfSearchIconIsSelected();
  }

  public async examineNetflixGiftCardsSection() {
    await super.scrollTextIntoView("Netflix gift cards");
    await this.netflixGiftCardsSection.click();

    expect(await SearchPage.searchResultTitle).toBeDisplayed();
    expect(await SearchPage.netflixGiftCardSearchTag).toBeDisplayed();
    await super.checkIfSearchIconIsSelected();
  }

  public async examineBestSoftwareSection() {
    await super.scrollTextIntoView("Best software");
    await this.bestSoftwareSection.click();

    expect(await SearchPage.searchResultTitle).toBeDisplayed();
    expect(await SearchPage.bestSoftwareSearchTag).toBeDisplayed();
    await super.checkIfSearchIconIsSelected();
  }

  public async examinePreordersSection() {
    await super.scrollTextIntoView("Preorders");
    await this.preordersSection.click();

    expect(await SearchPage.searchResultTitle).toBeDisplayed();
    expect(await SearchPage.preordersSearchTag).toBeDisplayed();
    await super.checkIfSearchIconIsSelected();
  }

  public async examineSearchBar() {
    await super.searchBar.click();
    expect(await SearchPage.searchBarActive).toBeDisplayed();
  }

  public async clickUpTo10EuroButton() {
    await super.scrollTextIntoView("Up to");
    await this.upTo10EuroButton.click();
  }
}

export default new HomePage();
