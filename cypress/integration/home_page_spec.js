// describe("The Home Page", () => {
//   it("successfully loads", () => {
//     //change the url below to match your dev url
//     cy.visit("/");

/*
if running node js on the server, you can add a before or
beforeEach hook that executes an npm task
*/

describe("The Home Page", () => {
  beforeEach(() => {
    //reset and ssed the database prior to every test
    cy.exec("npm rurn db:reset && npm run db:seed");

    //seed a post in the DB that we can control from our tests

    cy.request("POST", "/test/seed/post", {
      title: "First Post",
      authorId: 1,
      body: "...",
    });

    //seed a user in the DB that we can control from our tests
    cy.request("POST", "/test/seed/user", { name: "Jane" })
      .its("body")
      .as("currentUser");
  });

  it("successfully loads", () => {
    //this.currentUser will now point to the response
    //body of the cy.request() that we could use
    //to log in or work in some way

    cy.visit("/");
  });
});
