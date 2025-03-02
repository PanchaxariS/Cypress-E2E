export class registrationForm {
  webLocators = {
    firstName: "#input-firstname",
    lastName: "#input-lastname",
    email: "#input-email",
    phone: "#input-telephone",
    password: "#input-password",
    confirmPassword: "#input-confirm",
    policyCheckbox: '[type="radio"]',
    agreeCheckbox: '[name="agree"]',
    continue: '[type="submit"]',
  };

  enterFirstName(Fname) {
    return cy.get(this.webLocators.firstName).type(Fname);
  }

  enterLastName(Lname) {
    return cy.get(this.webLocators.lastName).type(Lname);
  }

  enterEmail(email) {
    return cy.get(this.webLocators.email).type(email);
  }

  enterPhoneNumber(num) {
    return cy.get(this.webLocators.phone).type(num);
  }

  enterPassword(pwd) {
    cy.get(this.webLocators.password).type(pwd);
    return cy.get(this.webLocators.confirmPassword).type(pwd);
  }

  selectCheckBoxes() {
    cy.get(this.webLocators.policyCheckbox).eq(2).check();
    return cy.get(this.webLocators.agreeCheckbox).check();
  }

  clickContinue() {
    return cy.get(this.webLocators.continue).click();
  }
}
