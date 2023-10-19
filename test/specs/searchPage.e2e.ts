import { expect } from "@wdio/globals";
import commonPage from "../pageobjects/common.page.ts";
import HomePage from "../pageobjects/home.page.ts";
import SearchPage from "../pageobjects/search.page.ts";
const CommonPage = new commonPage();

describe("Search page tests", () => {
  it("should inspect search bar with no existing phrase", async () => {
    await CommonPage.clickSearchBottomMenu();
    await CommonPage.clickSearchBar();
    await SearchPage.verifySearchBarActive();

    await SearchPage.sendKeys(["ssssssssssssssssss"]);
    await SearchPage.verifyNoResultsFound();
  });

  it("should inspect search bar with existing phrase", async () => {
    await CommonPage.clickSearchBottomMenu();
    await CommonPage.clickSearchBar();
    await SearchPage.verifySearchBarActive();

    await SearchPage.sendKeys(["game"]);
    await SearchPage.searchResultIsBiggerThan0();
  });

  it("should inspect EUROPE filter", async () => {
    await CommonPage.clickSearchBottomMenu();
    await CommonPage.clickSearchBar();
    await SearchPage.verifySearchBarActive();

    await SearchPage.clickFIlterButton();
    await SearchPage.clickEuropeFilter();
    await SearchPage.clickApplyFilters();
    await SearchPage.everySearchResultContainsWord("EUROPE");
  });

  it("should inspect filter CLEAR option", async () => {
    await CommonPage.clickSearchBottomMenu();
    await CommonPage.clickSearchBar();
    await SearchPage.verifySearchBarActive();

    await SearchPage.clickFIlterButton();
    await SearchPage.clickEuropeFilter();
    await SearchPage.clickApplyFilters();

    await SearchPage.clickFIlterButton();
    await SearchPage.clickClearAllFilters();
    await SearchPage.clickApplyFilters();

    await SearchPage.filtersButtonIsDisplayed();
  });
});
