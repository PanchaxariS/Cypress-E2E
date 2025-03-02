export class homePage {
  webLocators = {
    homebutton: ".breadcrumb > :nth-child(1)",
    searchBar: ".form-control",
    addToCart: "[onclick^='cart.add']",
    successMessage: ".alert",
  };

  clickHomeButton() {
    return cy.get(this.webLocators.homebutton).click();
  }
  SearchBar(text) {
    return cy.get(this.webLocators.searchBar).type(text);
  }
  clickAddToCart() {
    return cy.get(this.webLocators.addToCart);
  }
  successAlert() {
    return cy.get(this.webLocators.successMessage).should("be.visible");
  }
}
