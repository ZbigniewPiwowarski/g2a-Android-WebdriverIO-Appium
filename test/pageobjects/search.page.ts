import { browser } from "@wdio/globals";
import CommonPage from "./common.page.ts";
import * as assert from "assert";
import { expect } from "chai";

class SearchPage extends CommonPage {
  public get searchResultTitle() {
    return $("~com.g2a.marketplace:id/fragmentSearchListSearchListTextView");
  }

  public get psGiftCardSearchTag() {
    return $("//android.widget.CompoundButton[@text='PSN']");
  }

  public get xboxGiftCardSearchTag() {
    return $("//android.widget.CompoundButton[@text='XBOX Game Pass']");
  }

  public get steamGiftCardSearchTag() {
    return $("//android.widget.CompoundButton[@text='Steam']");
  }

  public get netflixGiftCardSearchTag() {
    return $("//android.widget.CompoundButton[@text='VOD']");
  }

  public get bestSoftwareSearchTag() {
    return $("//android.widget.CompoundButton[@text='Software']");
  }

  public get preordersSearchTag() {
    return $("//android.widget.CompoundButton[@text='Gaming']");
  }

  public get backButton() {
    return $("id:fragmentSearchListSearchListActionUpButton");
  }

  public get searchResultsPrices() {
    return $$("id:searchResultHorizontalItemPriceText");
  }

  public get searchResultPrice() {
    return $("id:searchResultHorizontalItemPriceText");
  }

  public get searchResultsTitles() {
    return $$("id:searchResultHorizontalItemTitleText");
  }

  public get searchResultAnyTitle() {
    return $("id:searchResultHorizontalItemTitleText");
  }

  public get searchBarActive() {
    return $("id:fragmentSearchListSearchListRelativeLayout");
  }

  public get noResultsFound() {
    return $("id:fragmentSearchListNoResultText");
  }

  public get filtersButton() {
    return $("id:fragmentSearchListSearchListFilterButton");
  }

  public get filtersOptionEurope() {
    return $("//android.widget.TextView[@text='EUROPE']");
  }

  public get clearAllFilters() {
    return $("id:fragmentFiltersClearAllButton");
  }

  public get filtersApplyButton() {
    return $("id:fragmentFiltersApplyButton");
  }

  public get hideFiltersButton() {
    return $("id:fragmentFiltersFiltersButton");
  }

  public get gamesSection() {
    return $("//android.widget.TextView[@text='Games']");
  }

  public async noSearchResultCostMoreThan(cost: number) {
    await this.searchResultPrice.waitForDisplayed({ timeout: 5000 });
    await this.searchResultsPrices.forEach(async (price) => {
      const actualPriceText = await price.getText();
      const actualPrice = Number(actualPriceText.split(" ")[1]);

      await assert.ok(
        actualPrice <= cost,
        `Expected the price (${actualPrice}) to be less than or equal to ${cost}`
      );
    });
  }

  public async everySearchResultContainsWord(text: string) {
    await this.searchResultsTitles.forEach(async (title) => {
      const actualTitle = await title.getText();

      await assert.ok(
        actualTitle.includes(text),
        `Expected the title (${actualTitle}) to include ${text}`
      );
    });
  }

  public async searchResultIsBiggerThan0() {
    await this.searchResultAnyTitle.waitForDisplayed({ timeout: 5000 });
    expect(await this.searchResultAnyTitle.isDisplayed()).to.be.true;
  }

  public async tapFilterButton() {
    await this.filtersButton.click();
  }

  public async tapEuropeFilter() {
    // adjust this number to your need
    await super.performSwipeDown(7);
    await this.filtersOptionEurope.click();
  }

  public async tapClearAllFilters() {
    await this.clearAllFilters.click();
  }

  public async tapApplyFilters() {
    await this.filtersApplyButton.click();
  }

  public async tapGamesSection() {
    await this.gamesSection.click();
  }

  public async tapSearchResultAnyTitle() {
    await this.searchResultAnyTitle.click();
  }

  public async goToProductDetailsOfAnyGame() {
    await this.tapSearchResultAnyTitle();
    await this.tapGamesSection();
  }

  public async verifyNoResultsFound() {
    expect(await this.noResultsFound.isDisplayed(), "There are results found")
      .to.be.true;
  }

  public async verifySearchBarActive() {
    await this.searchBarActive.waitForDisplayed({ timeout: 5000 });
    expect(await this.searchBarActive.isDisplayed()).to.be.true;
  }

  public async filtersButtonIsDisplayed() {
    expect(await this.filtersButton.isDisplayed()).to.be.true;
  }
}

export default new SearchPage();
