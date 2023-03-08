/// <reference types="cypress"/>

describe('Locating element', () => 

{
    it('Verify type of locator', () => 
    {
      cy.visit('https://demo.nopcommerce.com/')
      cy.get("#small-searchterms").type("Apple MacBook Pro 13-inch")
      cy.get("[type='submit']").click()
      cy.get(".product-box-add-to-cart-button[type='button']").click()
      cy.get("#product_enteredQuantity_4").clear().type('2')
      cy.wait(3000)
      cy.get("#add-to-cart-button-4").click()
      cy.wait(5000)
      cy.get("#topcartlink > a > span.cart-label").click()
      cy.wait(3000)
      cy.get(".product-unit-price").contains('$1,800.00')
    })


}) 