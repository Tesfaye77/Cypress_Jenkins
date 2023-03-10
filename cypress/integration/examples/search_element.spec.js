/// <reference types="cypress"/>

describe('Search element', () => 

{

  let register;

  before(function(){
    cy.fixture('register.json').then(function(data){
      register=data
    })

  })

  it('Doing search', () => 
  {
   
    cy.visit('demo.nopcommerce.com')
   register.productName.forEach(function(element){
   cy.get('#small-searchterms').should('be.visible').clear();
   cy.get('#small-searchterms').type(element);
   cy.get('#small-search-box-form > .button-1').click();
   cy.get('.product-title > a').should('be.visible').contains(element);
   })

 
  })



  it('search_add', function() {


    cy.visit('demo.nopcommerce.com')
    cy.get('#small-searchterms').should('be.visible').clear();
    cy.get('#small-searchterms').type(register.productName[0]);
    cy.get('#small-search-box-form > .button-1').click();
    cy.get('.product-title > a').should('be.visible').contains(register.productName[0]);
    cy.get('.product-box-add-to-cart-button').should('be.visible').click();
    cy.get('#product_attribute_9').select(register.size);
    cy.get('#product_enteredQuantity_25').clear();
    cy.get('#product_enteredQuantity_25').type(register.quantity);
    cy.get('#add-to-cart-button-25').click();
    cy.get('.content').click();


  });
}) 