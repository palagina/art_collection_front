
describe("Post", function() {
  beforeEach(function() {
    cy.visit('http://localhost:3003')
  });
  it("front page can be opened", function() {
    cy.contains("posts");
  });
  it("login form can be opened", function() {
    cy.contains("Login");
  });
  it("user can login", function() {
    cy.get("input:first").type("user");
    cy.get("input:last").type("password");
    cy.get("button:first").click();
    cy.contains("user logged in");
  });

  describe("when logged in", function() {
    beforeEach(function() {
      cy.get("input:first").type("user");
      cy.get("input:last").type("password");
      cy.get("button:first").click();
    })
    it('name of the user is shown', function() {
      cy.contains("user logged in")
    })
    it("a new post can be created", function() {
      cy.contains("New Post").click();
      cy.get("input:first").type("test post1");
      cy.get("div.ui input").eq(1).type("test author");
      cy.contains("Add").click();
      cy.contains("You created new post");
    });
  });
});

