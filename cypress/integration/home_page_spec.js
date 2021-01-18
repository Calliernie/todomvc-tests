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
  });
  it("successfully loads", () => {
    cy.visit("/");
  });
});
