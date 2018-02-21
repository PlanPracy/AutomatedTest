// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
 Cypress.Commands.add("login" , (userType, options = {}) => {
 const types = {
 admin: {
 name: 'margie',
  admin: true,
  },
  user: {
  name: 'margie2a',
  admin: false,
   }
   }
 const user = types[userType]
   cy.request({
     url: '/', // assuming you've exposed a seeds route
     method: 'POST',
     body: user,
   })
   .its('body')
   .then((body) => {
     // assuming the server sends back the user details
     // including a randomly generated password
     //
     // we can now login as this newly created user
     cy.request({
       url: '/#login',
       method: 'POST',
       body: {
         email: body.email,
         password: body.password,
       }
     })
   })
 })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
