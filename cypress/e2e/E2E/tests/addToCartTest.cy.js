/// <reference types="cypress" />
import testData from "../../../fixtures/testData.json";
import { homePage } from "../../../pages/homePage";

const home = new homePage();

describe("Add to Cart Test", () => {
  before(() => {
    cy.visit(
      "https://naveenautomationlabs.com/opencart/index.php?route=account/login"
    );
    cy.Login(testData.login.username, testData.login.password);
  });

  it("Verify if Product is Added Successfully to Cart", () => {
    home.clickHomeButton();
    home.SearchBar("Macbook").type("{enter}");
    home.clickAddToCart().eq(0).click();
    home.successAlert().should("contain.text", "MacBook");
  });
});
