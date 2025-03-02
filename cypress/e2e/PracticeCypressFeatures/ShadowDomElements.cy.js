/// <reference types="cypress" />

describe("Shadow DOM Elements", () => {
  it("Should interact with shadow DOM elements", () => {
    cy.visit("https://selectorshub.com/xpath-practice-page/");
    cy.get("#pizza", { includeShadowDom: true }).type("Pizza Hut");
  });
});
