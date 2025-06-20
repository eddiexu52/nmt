describe('My First Test', () => {
  it('Finds the content "type"', ()  => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()

    // Should be on a new URL which
    // includes '/commands/actions'
    cy.url().should('include', '/commands/actions')

    //Get an input, type into it
    cy.get('.action-email').type('1234@email.com')

    //verify that the value has been updated
    cy.get('.action-email').should('have.value','1234@email.com')
  })
})