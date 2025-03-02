/// <reference types="cypress" />

describe("Find Broken Links", () => {
  it("Should find broken links", () => {
    cy.visit("https://ecommerce-playground.lambdatest.io/");
    let brokenLinks = 0;
    let activeLinks = 0;
    cy.get("a")
      .each(($link, index) => {
        const href = $link.attr("href");
        if (href) {
          cy.request({ url: href, failOnStatusCode: false }).then(
            (Response) => {
              if (Response.status >= 400) {
                cy.log(`The link no ${index} is broken with href: ${href}`);
                brokenLinks++;
              } else {
                cy.log(`The link no ${index} is Active Link`);
                activeLinks++;
              }
            }
          );
        }
      })
      .then((data) => {
        let TotalLinks = data.length;
        cy.log(`Total Links: ${TotalLinks}`);
        cy.log(`Total Broken Links: ${brokenLinks}`);
        cy.log(`Total Active Links: ${activeLinks}`);
      });
  });
});
