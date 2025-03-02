/// <reference types="cypress" />

describe("Read and Write to Fixture File", () => {
  it("Test Case to write data in a file", function () {
    cy.writeFile("cypress/fixtures/test.txt", "Hello World \n");
    cy.writeFile("cypress/fixtures/test.txt", "Cypress Test", { flag: "a+" });
    cy.writeFile("cypress/fixtures/test.json", {
      name: "John Doe",
      name2: "Cyper user",
    });
  });

  it("Test Case to read data from a file", function () {
    cy.readFile("cypress/fixtures/test.txt").then((data) => {
      cy.log(data);
    });

    cy.readFile("cypress/fixtures/test.json").then((data1) => {
      cy.log(data1).should("contain", "name", "John Doe");
    });
  });
});
