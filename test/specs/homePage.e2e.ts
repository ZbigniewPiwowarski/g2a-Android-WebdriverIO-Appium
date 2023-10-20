import HomePage from "../pageobjects/home.page.ts";
import SearchPage from "../pageobjects/search.page.ts";

describe("Home page tests", () => {
  it("should inspect if search bar redirects to search view", async () => {
    await HomePage.examineSearchBar();
  });

  it("should inspect cheap products Up to 10 euro option", async () => {
    await HomePage.clickUpTo10EuroButton();
    await SearchPage.noSearchResultCostMoreThan(10);
  });

  it("should inspect preorder section", async () => {
    await HomePage.examinePreordersSection();
  });

  it("should inspect best software section", async () => {
    await HomePage.examineBestSoftwareSection();
  });

  it("should inspect netflix gift cards section", async () => {
    await HomePage.examineNetflixGiftCardsSection();
  });

  it("should inspect steam gift cards section", async () => {
    await HomePage.examineSteamGiftCardsSection();
  });

  it("should inspect xbox subscription section", async () => {
    await HomePage.examineXboxSubscriptionSection();
  });

  it("should inspect playstation gift cards section", async () => {
    await HomePage.examinePlayStationGiftCardsSection();
  });
});
