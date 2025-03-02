import { loginPage } from "../pages/loginPage";

const login = new loginPage();

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
  login.enterEmail(email);
  login.enterPassword(password);
  login.clickLogin();
});
