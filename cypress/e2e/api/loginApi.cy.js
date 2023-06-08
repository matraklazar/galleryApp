/// reference <types ="cypress" />

describe('Login via API',()=>{
    // before(()=>{
    //     cy.loginViaApi();
    // });

    it.only('Verify user landed on homepage',()=>{
        cy.loginViaApi();
        cy.visit(Cypress.config().baseUrl);
        cy.url().should('eql',Cypress.config().baseUrl);
        cy.wait(5000);
    });

    it('Negative case - Invalid password via login',()=>{
        cy.loginViaApi('lm@gmail.com','mypass1234');
    });
    
    it('Negative case - Invalid email via login',()=>{
        cy.loginViaApi('lmssda@gmail.com','mynewpass1234')
    })
})