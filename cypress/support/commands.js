// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("ValidateCountry", (country_codes) => {
  switch (country_codes) {
    case "/in/":
      return "India";
    case "/ae/":
      return "United Arab Emirates";
    case "/uk/":
      return "United Kingdom";
    case "/ca/":
      return "Canada (English)";
    default:
      return "Country not found";
  }
});

Cypress.Commands.add("Login", (email, password) => {
  cy.get("#input-email").type(email);
  cy.get("#input-password").type(password);
  cy.get('input[type="submit"]').click();
});
