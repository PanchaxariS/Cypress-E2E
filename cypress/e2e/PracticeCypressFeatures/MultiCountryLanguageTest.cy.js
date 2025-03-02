/// <reference types="cypress"/>

describe("Multi Country Language Test", () => {
  const country_codes = ["/ae/", "/uk/", "/in/", "/ca/"];

  beforeEach(() => {
    Cypress.on("uncaught:exception", () => false); // Prevent test failure due to website errors
  });

  country_codes.forEach((country) => {
    it(`Should test application behavior for country: ${country}`, () => {
      cy.visit(`https://www.apple.com${country}`);
      cy.url().should("contain", country);
      cy.ValidateCountry(country).then((text) => {
        cy.get('[title="Choose your country or region"]').should(
          "have.text",
          text
        );
      });
    });
  });
});
