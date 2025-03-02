/// <reference types="cypress" />

describe("Registration Flow", () => {
  it.only("Enter Form Details for Registration", () => {
    cy.visit(
      "https://naveenautomationlabs.com/opencart/index.php?route=account/register"
    );
    cy.get("#input-firstname").type("Panchaxari");
    cy.get("#input-firstname").should("have.value", "Panchaxari");
    cy.get("#input-lastname").type("Shanavadmeti");
    cy.get("#input-lastname").should("have.value", "Shanavadmeti");
    cy.get("#input-email").type("p1shanavadmeti@gmail.com");
    cy.get("#input-telephone").type("+91975186102");
    cy.get("#input-password").type("Admin123");
    cy.get("#input-confirm").type("Admin123");
    cy.get('[type="radio"]').eq(2).check();
    cy.get('[name="agree"]').check();
    cy.get('[type="submit"]').click();
    cy.url().should("contain", "success");
  });
});
