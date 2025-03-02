export class loginPage {
  webLocators = {
    email: "#input-email",
    password: "#input-password",
    loginButton: '[type="submit"]',
  };

  enterEmail(email) {
    cy.get(this.webLocators.email).type(email);
  }

  enterPassword(pwd) {
    return cy.get(this.webLocators.password).type(pwd);
  }

  clickLogin() {
    return cy.get(this.webLocators.loginButton).click();
  }
}
