/// <reference types="cypress"/>

describe('UI Elements', () => 

{
    it('Verify InputBox & Radio buttons', () => 
    {
      cy.visit('https://demo.guru99.com/test/newtours/')
      cy.url().should('include','guru99')
      cy.get('input[name=userName]').should('be.visible').should('be.enabled').type("mercury")
      cy.get('input[name=password]').should('be.visible').should('be.enabled').type("mercury")
      cy.get('input[name=submit]').should('be.enabled').click()
      cy.contains('Login Successfully')


      cy.contains('Flights').click()
      cy.get('input[value=roundtrip]').should('be.visible').should('be.checked')
      cy.get('input[value=oneway]').should('be.visible').should('not.be.checked').click()

      cy.get('input[name=findFlights]').should('be.visible').click()
     
    })


}) 