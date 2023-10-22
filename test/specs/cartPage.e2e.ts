import commonPage from "../pageobjects/common.page.ts";
import SearchPage from "../pageobjects/search.page.ts";
import CartPage from "../pageobjects/cart.page.ts";
import SearchProductDetailsPage from "../pageobjects/searchProductDetails.page.ts";
const CommonPage = new commonPage();

describe("Cart page tests", () => {
  it("should inspect empty cart", async () => {
    await CommonPage.tapCartBottomMenu();
    await CartPage.assertCartIsEmpty();
  });
  it("should delete product from cart", async () => {
    await CommonPage.tapSearchBottomMenu();
    await SearchPage.tapGamesSection();
    await SearchPage.tapSearchResultAnyTitle();
    await SearchProductDetailsPage.tapCartButton();
    await CartPage.tapProductThreeDotsbutton();
    await CartPage.tapProductDeleteButton();
    await CartPage.assertCartIsEmpty();
  });
  it("should test not existing discount code", async () => {
    await CommonPage.tapSearchBottomMenu();
    await SearchPage.tapGamesSection();
    await SearchPage.tapSearchResultAnyTitle();
    await SearchProductDetailsPage.tapCartButton();
    // try catch for commercial webview as it often appears here
    await CommonPage.tapWebviewPopUpXButton()
    await CartPage.tapAddDiscountCodeButton();
    await CommonPage.keys(["test"]);
    await CartPage.tapApplyDiscountCodeButton();
    await CartPage.assertNoCodeFoundMsg();
  });
  it("should test go through payment until payment methods visible", async () => {
    await CommonPage.tapSearchBottomMenu();
    await SearchPage.tapGamesSection();
    await SearchPage.tapSearchResultAnyTitle();
    await SearchProductDetailsPage.tapCartButton();
    await CartPage.tapProductContinueButton();
    await CartPage.tapBuyAsGuestButton();
    await CartPage.tapBuyAsGUestEmailInput();
    await CartPage.sendKeys(["test@test.pl"]);
    await CartPage.tapBuyAsGuestContinueButton();
    await CartPage.assertApplePayOptionDisplayed();
    await CartPage.assertGooglePayOptionDisplayed();
  });
});
