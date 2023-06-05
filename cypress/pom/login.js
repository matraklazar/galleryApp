class Login{
    get emailInputField(){
        return cy.get('#email').type("lm@gmail.com");
    }
}