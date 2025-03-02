/// <reference types="cypress" />

describe("Verify ToolTip", () => {
  it("Should verify the tooltip text", () => {
    cy.visit("https://practice.expandtesting.com/tooltips");
    cy.get("#btn1").trigger("mouseover");
    cy.get(".tooltip-inner")
      .should("be.visible")
      .and("have.text", "Tooltip on top");
  });
});
