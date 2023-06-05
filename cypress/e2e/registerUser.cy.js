/// <reference types = "cypress" />
import RegisterUser from "../pom/registerUser";

const regUser = new RegisterUser();
describe('Register user Tests',()=>{
    it('Landed on Register page',()=>{
        cy.visit('register');
    });

    it('Successful user registration',()=>{
        regUser.register();
        

        //  Assertations
        cy.url().should('eql',Cypress.config('baseUrl'));
        cy.get('h1').should('contain','All Galleries');
    });
})