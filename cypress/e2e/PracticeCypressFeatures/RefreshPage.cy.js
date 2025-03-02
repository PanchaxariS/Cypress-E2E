/// <reference types="cypress" />

describe("Refresh Page", () => {
  it("Refresh the page", () => {
    cy.visit("https://www.google.com");
    cy.contains("India").should("be.visible");
    cy.reload(); //normal refresh
    cy.contains("India").should("be.visible");
    cy.reload(true); //hard refresh
    cy.contains("India").should("be.visible");
  });
});
