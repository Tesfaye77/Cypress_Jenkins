/// <reference types="cypress"/>

describe('UI Elements2', () => 

{
    it('Hobbies check boxes', () => 
    {
      cy.visit('https://demo.automationtesting.in/Register.html')
      cy.url().should('include','automationtesting')

      cy.get('#checkbox1').check().should('be.checked').and('have.value','Cricket')
      cy.get('#checkbox2').check().should('be.checked').and('have.value','Movies')
      cy.get('#checkbox3').check().should('be.checked').and('have.value','Hockey')

      cy.get('#checkbox1').uncheck().should('not.be.checked').and('have.value','Cricket')
      cy.get('#checkbox2').uncheck().should('not.be.checked').and('have.value','Movies')
      cy.get('#checkbox3').uncheck().should('not.be.checked').and('have.value','Hockey')

      cy.get('input[type=checkbox]').check(['Cricket','Hockey'])
      
     
    })

    it('Skills Drop Down', () => 
    {
      cy.visit('https://demo.automationtesting.in/Register.html')
      cy.url().should('include','automationtesting')
      cy.get('#Skills').select('Android').should('have.value','Android')
     
    })


    it('Languages Multi Select', () => 
    {
      cy.visit('https://demo.automationtesting.in/Register.html')
      cy.url().should('include','automationtesting')
      cy.get('#msdd').click()
      cy.get('.ui-corner-all').contains('English').click()
      cy.get('.ui-corner-all').contains('Japanese').click()
     
    })


    it('Search contries searchable drop down', () => 
    {
      cy.visit('https://demo.automationtesting.in/Register.html')
      cy.url().should('include','automationtesting')
      cy.get('[role=combobox]').click({force: true})
      cy.get('.select2-search__field').type('Ind')
      cy.get('.select2-search__field').type('{enter}')
     
    })

}) 