

describe('The Login Page', function () {
   it('.should() - assert that <title> is correct', function () {
   cy.visit('/')
   cy.title().should('include', 'Login | Governor')
   cy.get('.username').type("margie")
   cy.get('.password').type("1234abcD!")
   cy.get('.form-signin').submit()
   cy.title().should('include', 'Welcome | Governor')
  })
})


describe('As Admin I could add a new map correctly', function () {
  it('.should() - assert that <title> is correct', function () {
  cy.visit('/#administration')
   cy.visit('/')
     cy.title().should('include', 'Login | Governor')
     cy.get('.username').type("margie")
     cy.get('.password').type("1234abcD!")
     cy.get('.form-signin').submit()
     cy.title().should('include', 'Welcome | Governor')
})
})