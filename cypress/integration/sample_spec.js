describe("My first test", () => {
  it("Visits the kitchen sink", () => {
    cy.visit("https://example.cypress.io");

    cy.pause();

    cy.contains("type").click();

    //should be on a new URL which includes '/commands/actions'
    cy.url().should("include", "/commands/actions");

    //get an input, type into it and veerify that the value has been updated
    /*
personal note - you can communicate with an element in the browser 
through its css selector or through its id
    */

    cy.get(".action-email")
      .type("fake@email.com")
      .should("have.value", "fake@email.com");
  });
});
