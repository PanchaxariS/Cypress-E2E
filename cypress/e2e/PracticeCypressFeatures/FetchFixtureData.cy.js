/// <reference types="cypress" />

import testData from "../../fixtures/login.json";
const loginData = require("../../fixtures/login.json");

beforeEach(() => {
  cy.visit(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login"
  );
});

describe("Fetch Fixture Data", () => {
  it("Mthod 1 : Should fetch data from fixture file", () => {
    cy.fixture("login").then((data) => {
      cy.get("#input-email").type(data.email);
      cy.get("#input-password").type(data.password);
      cy.get('[type="submit"]').click();
    });
    cy.url().should("contain", "account");
    cy.get("#content").should("be.visible");
  });

  it("Mthod 2 : Should fetch data from importing fixture file", () => {
    cy.get("#input-email").type(testData.email);
    cy.get("#input-password").type(testData.password);
    cy.get('[type="submit"]').click();
    cy.url().should("contain", "account");
    cy.get("#content").should("be.visible");
  });

  it("Mthod 3 : Should fetch data from fixture by using require", () => {
    cy.get("#input-email").type(loginData.email);
    cy.get("#input-password").type(loginData.password);
    cy.get('[type="submit"]').click();
    cy.url().should("contain", "account");
    cy.get("#content").should("be.visible");
  });

  it.only("Mthod 4 : Should fetch data from fixture for multiple blocks", () => {
    cy.visit(
      "https://naveenautomationlabs.com/opencart/index.php?route=account/register"
    );
    cy.fixture("registrationForm").then((data) => {
      cy.get("#input-firstname").type(data.name.first_name);
      cy.get("#input-firstname").should("have.value", data.name.first_name);
      cy.get("#input-lastname").type(data.name.last_name);
      cy.get("#input-lastname").should("have.value", data.name.last_name);
      cy.get("#input-email").type(data.email);
      cy.get("#input-telephone").type("+91975186102");
      cy.get("#input-password").type(data.login.password);
      cy.get("#input-confirm").type(data.login.password);
    });

    cy.get('[type="radio"]').eq(2).check();
    cy.get('[name="agree"]').check();
    cy.get('[type="submit"]').click();
    cy.url().should("contain", "success");
  });
});
