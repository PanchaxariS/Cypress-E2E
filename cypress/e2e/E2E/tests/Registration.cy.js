/// <reference types="cypress" />
import { registrationForm } from "../../../pages/registrationPage";
import regForm from "../../../fixtures/regForm.json";
const registerObj = new registrationForm();

describe("Registration Flow", () => {
  it.only("Enter Form Details for Registration", () => {
    cy.visit(Cypress.env("URL"));

    // Enter First Name and assert without cy.get
    registerObj
      .enterFirstName(regForm.name.first_name)
      .should("have.value", regForm.name.first_name);

    // Enter Last Name and assert without cy.get
    registerObj
      .enterLastName(regForm.name.last_name)
      .should("have.value", regForm.name.last_name);

    // Enter Email
    registerObj.enterEmail(regForm.email);

    // Enter Phone Number
    registerObj.enterPhoneNumber(regForm.phone);

    // Enter Password
    registerObj.enterPassword(regForm.login.password);

    // Select Checkboxes and click Continue
    registerObj.selectCheckBoxes();
    registerObj.clickContinue();

    // Validate successful navigation
    cy.contains("Warning: E-Mail Address is already registered!");
  });
});
