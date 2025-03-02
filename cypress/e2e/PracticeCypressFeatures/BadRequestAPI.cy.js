/// <reference types="cypress" />

describe("Bad Request API Test", () => {
  it("Validate 400 Bad Request", () => {
    cy.request({
      methos: "GET",
      url: "https://reqres.in/api/users/23",
      failOnStatusCode: false,
    }).then((resp) => {
      expect(resp.status).to.be.eq(404);
    });
  });
});
