/// <reference types="cypress" />

describe("Handle Multiple Tabs/NewTabs", () => {
  beforeEach(() => {
    cy.visit("https://selectorshub.com/xpath-practice-page/");
  });
  it("Method1 : Opening New Tab", () => {
    cy.contains("User Role").invoke("removeAttr", "target").click();
  });

  it("Method2 : Opening New Tab ", () => {
    cy.contains("Course Link").invoke("attr", "target", "_self").click();
  });
});
