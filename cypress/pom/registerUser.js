import{faker} from '@faker-js/faker'

class RegisterUser{
    _firstName = faker.person.firstName();
    _lastName = faker.person.lastName();
    _email = faker.internet.email({firstName: this._firstName, lastName: this._lastName});
    _password = faker.internet.password();

    register(){
        cy.visit('register');
        cy.get('#first-name').type(this._firstName);
        cy.get('#last-name').type(this._lastName);
        cy.get('#email').type(this._email);
        cy.get('#password').type(this._password);
        cy.get('#password-confirmation').type(this._password)
        cy.get('.form-check-input').check();
        cy.get('.btn').click();
    }
}

export default RegisterUser;