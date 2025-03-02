/// <reference types="cypress" />

describe("Login and Product Search", () => {
  it("Should login and search for a product via Custom Command", () => {
    cy.visit(
      "https://naveenautomationlabs.com/opencart/index.php?route=account/login"
    );
    cy.Login("Cypress.env('email')", "Cypress.env('password')");
    cy.url().should("contain", "account");
    cy.get("#content").should("be.visible");
    cy.get('input[name="search"]')
      .type("MacBook")
      .type("{enter}")
      .then(() => {
        cy.get(".product-layout").should("be.visible").and("have.length", 3);
      });
  });
});
