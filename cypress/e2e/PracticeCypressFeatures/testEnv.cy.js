/// <reference types="cypress" />

describe("Test Various config files", () => {
  it("Visit Application based on Config File", () => {
    cy.visit("");
    cy.log("Printing Domain in use : " + Cypress.env("username"));
  });
});
