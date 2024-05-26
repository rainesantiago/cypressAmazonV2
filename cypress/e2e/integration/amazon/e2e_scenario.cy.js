// cypress/integration/amazon/e2e_scenario.cy.js
describe('Amazon End-to-End', () => {
  beforeEach(() => {
      cy.visit('/');
  });

  it('should search for a product and add it to the cart', () => {
      cy.get('#twotabsearchtextbox').type('dog collar');
      cy.get('#nav-search-submit-button').click();
      cy.get('[data-cy="title-recipe"]').first().click();
      cy.get('#add-to-cart-button').click();
      cy.contains('Added to Cart').should('exist');
      cy.get('#sc-buy-box-ptc-button').click();
  });
});
  