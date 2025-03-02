/// <reference types = "cypress" />

describe("Upload File Test", () => {
  beforeEach(() => {
    Cypress.on("uncaught:exception", () => false); // Prevent test failure due to website errors
  });

  it("Upload File Test", () => {
    cy.visit("https://www.lambdatest.com/selenium-playground/upload-file-demo");
    cy.get("#file").selectFile("cypress/fixtures/linkedin Banner.png");
    cy.contains("File Successfully Uploaded").should("be.visible");
  });

  it.only("Upload File via Drag-Drop", () => {
    cy.visit("https://www.ilovepdf.com/pdf_to_word");
    cy.fixture("Top SQA Tools.pdf").as("file");
    cy.get(".uploader__droptxt").selectFile("@file", { action: "drag-drop" });
    //cy.contains("File Successfully Uploaded").should("be.visible");
  });
});
