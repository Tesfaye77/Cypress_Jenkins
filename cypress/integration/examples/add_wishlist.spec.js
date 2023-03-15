
it('favlist', function() {
 
  cy.visit('demo.nopcommerce.com');


  cy.get(':nth-child(1) > .product-item > .details > .add-info > .buttons > .add-to-wishlist-button').click();
  cy.get('#product_attribute_2').should('be.visible').select('4');
  cy.get('#product_attribute_3_6').check();
  cy.get('#add-to-wishlist-button-1').click();
  cy.get('.content').should('be.visible');
  cy.get('.content').should('have.text', 'The product has been added to your wishlist');
  cy.get('.wishlist-qty').should('have.class', 'wishlist-qty');
  cy.get('.wishlist-qty').should('have.text', '(1)');
  cy.get('ul > :nth-child(1) > :nth-child(1) > a').click();
  cy.get(':nth-child(2) > .product-item > .details > .add-info > .buttons > .add-to-wishlist-button').click();
  cy.get('#add-to-wishlist-button-4').click();
  cy.get('.content').should('be.visible');
  cy.get('.bar-notification').should('have.text', 'The product has been added to your wishlist');
  cy.get('.wishlist-qty').should('have.class', 'wishlist-qty');
  cy.get('.wishlist-qty').should('have.text', '(3)');
  cy.get(':nth-child(1) > :nth-child(1) > a > span').click();
  cy.get(':nth-child(3) > .product-item > .details > .add-info > .buttons > .add-to-wishlist-button').click();
  cy.get('.content > a').should('be.visible');
  cy.get('.content').should('have.text', 'The product has been added to your wishlist');
  cy.get('.wishlist-qty').should('have.class', 'wishlist-qty');
  cy.get('.wishlist-qty').should('have.text', '(4)');

 
});