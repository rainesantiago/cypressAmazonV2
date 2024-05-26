describe('Amazon Registration', () => {
    beforeEach(() => {
        // Visit the base URL before each test
        cy.visit('/');
    });

    it('should register a new user', () => {
        cy.get('#nav-link-accountList').click();
        cy.get('#createAccountSubmit').click();
        cy.get('#ap_customer_name').type('Raine');
        cy.get('#ap_email').type('rainexxsantiago@gmail.com');
        cy.get('#ap_password').type('omni@123');
        cy.get('#ap_password_check').type('omni@123');
        cy.get('#continue').click();
        cy.contains('Verify email address').should('exist');
    });
});
