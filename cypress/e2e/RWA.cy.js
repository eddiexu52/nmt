describe('template spec', () => {
  it('Login', () => {
    cy.visit('http://localhost:3000/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#username').type('eddie');
    cy.get('#password').type('s3cret');
    cy.get('[data-test="signin-submit"]').click();
    /* ==== End Cypress Studio ==== */
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('click_new', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('localhost:3000');
    cy.get('#username').type('eddie');
    cy.get('#password').type('s3cret');
    cy.get('[data-test="signin-submit"]').click();
    cy.get('[data-test="nav-top-new-transaction"]').click();
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[data-test="user-list-search-input"]').clear('L');
    cy.get('[data-test="user-list-search-input"]').type('Lia Rosenbaum');
    cy.get('[data-test="user-list-item-WHjJ4qR2R2"] > .MuiListItemText-root > .MuiTypography-body1').should('have.text', 'Lia Rosenbaum');
    cy.get('[data-test="user-list-item-WHjJ4qR2R2"] > .MuiListItemText-root > .MuiTypography-body1').click();
    cy.get('#amount').clear('$26');
    cy.get('#amount').type('$26');
    cy.get('#transaction-create-description-input').clear('2');
    cy.get('#transaction-create-description-input').type('20250602');
    cy.get('[data-test="transaction-create-submit-payment"]').should('be.enabled');
    cy.get('[data-test="transaction-create-submit-payment"]').click();
    cy.get('.MuiPaper-root > :nth-child(2) > .MuiGrid-container').click();
    cy.get(':nth-child(2) > .MuiGrid-container > .MuiGrid-root > .MuiTypography-root').should('be.visible');
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('name_assert', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('localhost:3000');
    cy.get('#username').clear('eddie');
    cy.get('#username').type('eddie');
    cy.get('#password').clear('s');
    cy.get('#password').type('s3cret');
    cy.get('[data-test="signin-submit"]').click();
    cy.get('[data-testid="AttachMoneyIcon"]').click();
    cy.get('[data-test="user-list-search-input"]').clear('Lia Rosenbaum');
    cy.get('[data-test="user-list-search-input"]').type('Lia Rosenbaum');
    cy.get('[data-test="user-list-item-WHjJ4qR2R2"] > .MuiListItemText-root > .MuiTypography-body1').should('have.text', 'Lia Rosenbaum');
    cy.get('.MuiGrid-grid-xs-12').click();
    /* ==== End Cypress Studio ==== */
  });
})