/// <reference types = "cypress"/>

describe("Landing test",()=>{
    it("Verify that user landed on main page",()=>{
        cy.visit('');
        cy.url().should('eq',Cypress.config('baseUrl'));
    });

    it("Successful login",()=>{
        cy.visit("login");
        cy.get('#email').type("lm@gmail.com");
        cy.get('#password').type('mynewpass1234');
        cy.get('[type="submit"]').click();
    });
})