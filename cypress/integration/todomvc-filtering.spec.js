/// <reference types = "cypress"/>

describe("filtering", () => {
  beforeEach(() => {
    cy.visit("https://todomvc-app-for-testing.surge.sh/");

    cy.get(".new-todo").type("Clean room{enter}");
    cy.get(".new-todo").type("Learn javascript{enter}");
    cy.get(".new-todo").type("Use cypress{enter}");

    cy.get(".todo-list li:nth-child(2) .toggle").click();
  });

  it('should filter "Active" todos', () => {
    cy.contains("active", { matchCase: false }).click();

    cy.get(".todo-list li").should("have.length", 2);
  });
});
