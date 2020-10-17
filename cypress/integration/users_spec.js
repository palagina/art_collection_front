describe("Post", function() {
  beforeEach(function() {
    cy.visit("http://localhost:3003");
    cy.get("input:first").type("user");
    cy.get("input:last").type("password");
    cy.get("button:first").click();
  });
  it("users page is rendered", function() {
    cy.contains("Users").click();
    cy.contains("No of posts");
  });
});

describe("when on the users page", function() {
  beforeEach(function() {
    cy.contains("Users").click();
  })
  it("Four users exist", function(){
    cy.contains("Users").click();
    cy.get('tbody>tr').eq(1).should('contain', 'mluukkai')
    cy.get('tbody>tr').eq(2).should('contain', 'user')
    cy.get('tbody>tr').eq(3).should('contain', 'user1')
    cy.get('tbody>tr').eq(4).should('contain', 'Mariia')
  })
  it("Page of a certian user opens", function(){
    cy.contains("Mariia").click();
    cy.contains("Added blogs");
  })
})
