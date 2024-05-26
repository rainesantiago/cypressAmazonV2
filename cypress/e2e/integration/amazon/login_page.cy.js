// // cypress/integration/amazon/login_spec.js
// /// <reference types="cypress" />
describe('Amazon Login', () => {
    beforeEach(() => {
        // Visit the base URL before each test
        cy.visit('/');
    });

    it('should login with valid credentials', () => {
        cy.get('#nav-link-accountList').click();
        cy.get('#ap_email').type('your_email@example.com');
        cy.get('#continue').click();
        cy.get('#ap_password').type('your_password');
        cy.get('#signInSubmit').click();
        cy.contains('your_account').should('exist');
    });
});
