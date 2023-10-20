import commonPage from "../pageobjects/common.page.ts";
import SearchPage from "../pageobjects/search.page.ts";
const CommonPage = new commonPage();

describe("Search page tests", () => {
  it("should inspect search bar with no existing phrase", async () => {
    await CommonPage.tapSearchBottomMenu();
    await CommonPage.tapSearchBar();
    await SearchPage.verifySearchBarActive();

    await SearchPage.sendKeys(["ssssssssssssssssss"]);
    await SearchPage.verifyNoResultsFound();
  });

  it("should inspect search bar with existing phrase", async () => {
    await CommonPage.tapSearchBottomMenu();
    await CommonPage.tapSearchBar();
    await SearchPage.verifySearchBarActive();

    await SearchPage.sendKeys(["game"]);
    await SearchPage.searchResultIsBiggerThan0();
  });

  it("should inspect EUROPE filter", async () => {
    await CommonPage.tapSearchBottomMenu();
    await CommonPage.tapSearchBar();
    await SearchPage.verifySearchBarActive();

    await SearchPage.tapFilterButton();
    await SearchPage.tapEuropeFilter();
    await SearchPage.tapApplyFilters();
    await SearchPage.everySearchResultContainsWord("EUROPE");
  });

  it("should inspect filter CLEAR option", async () => {
    await CommonPage.tapSearchBottomMenu();
    await CommonPage.tapSearchBar();
    await SearchPage.verifySearchBarActive();

    await SearchPage.tapFilterButton();
    await SearchPage.tapEuropeFilter();
    await SearchPage.tapApplyFilters();

    await SearchPage.tapFilterButton();
    await SearchPage.tapClearAllFilters();
    await SearchPage.tapApplyFilters();

    await SearchPage.filtersButtonIsDisplayed();
  });
});
