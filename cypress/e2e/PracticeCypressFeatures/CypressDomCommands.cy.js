/// <reference types = "cypress" />

describe("Cypress Dom Commands", () => {
  it("Should visit the application", () => {
    cy.visit("https://naveenautomationlabs.com/opencart/");
    cy.get(".image").should("be.visible").and("have.length", 4).first().click();
    cy.go("back");
    cy.get(".image").should("be.visible").and("have.length", 4).last().click();
    cy.go(-1); //Can be used as an alternative to cy.go("back")
    cy.get(".image").should("be.visible").and("have.length", 4).eq(2).click();
    cy.go("back");
    cy.contains("iPhone").click();
    cy.go(-1);
    cy.get("div").find('>a>img[alt="MacBook"]').click();
    cy.go("back");
    cy.get("div").find(">a").filter('>img[alt="iPhone"]').click();
  });
});
