/// <reference types="cypress" />

describe("Handle Dropdown", () => {
  before(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });

  it("TC1: Single Value Dropdown", () => {
    cy.visit(
      "https://www.lambdatest.com/selenium-playground/select-dropdown-demo"
    );
    let value = "Thursday";
    cy.get("#select-demo").should("be.visible").select(value, { force: true });
    cy.contains(`Day selected :- ${value}`);

    cy.get("#select-demo option:selected").should("have.text", value);
  });

  it("MultiSelect Dropdown", () => {
    cy.visit(
      "https://www.lambdatest.com/selenium-playground/select-dropdown-demo"
    );
    cy.get("#multi-select").select(["California", "Ohio", "Washington"]);
  });

  it("AutoSuggest Dropdown", () => {
    cy.visit("https://www.amazon.in/");
    cy.get("#twotabsearchtextbox").type("iphone");
    cy.get(".two-pane-results-container")
      .find(">div")
      .contains("16pro max")
      .click();
  });
});
