import { browser } from "@wdio/globals";
import CommonPage from "./common.page.ts";
import * as assert from "assert";

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

  public get searchBarActive() {
    return $("id:fragmentSearchListSearchListRelativeLayout");
  }

  public verifySearchBarActive() {
    return this.searchBarActive.isDisplayed();
  }

  public async noSearchResultCostMoreThan(cost: number) {
    await this.searchResultPrice.waitForDisplayed({ timeout: 5000 });
    await this.searchResultsPrices.forEach(async (price) => {
      // expect(
      //   Number((await price.getText()).split(" ")[1]) <= cost
      // ).toBeTruthy();
      const actualPriceText = await price.getText();
      const actualPrice = Number(actualPriceText.split(" ")[1]);

      await assert.ok(
        actualPrice <= cost,
        `Expected the price (${actualPrice}) to be less than or equal to ${cost}`
      );
    });
  }
}

export default new SearchPage();
