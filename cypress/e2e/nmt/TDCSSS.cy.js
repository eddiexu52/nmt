describe('TDCSSS Template Case', () => {
 it('Edit 1 New status then save', () => {
  cy.intercept('GET', '/api/data').as('dataRequest');
  cy.visit('https://successstories-tw.twds.tophenix.com/');
  /* ==== Generated with Cypress Studio ==== */
  cy.get('#content').click();
  cy.get('#userNameInput').clear();
  cy.get('#userNameInput').type('HK\\kahui');
  cy.get('#submitButton').click();
  /* ==== End Cypress Studio ==== */
  /* ==== Generated with Cypress Studio ==== */
  cy.get(':nth-child(4) > :nth-child(4) > .ant-select-show-arrow > .ant-select-selection > .ant-select-arrow > .anticon > svg').click();
  cy.get('.ant-select-dropdown-menu-item-active').click();
  cy.get('.oneSearchButton').click();
  cy.wait(30000); 
  cy.get('span.loading').should('not.be.visible');  // 再检查动画状态
  cy.get(':nth-child(2) > :nth-child(2) > .ant-col > a').should('be.visible').click();
  cy.get('.leadDtlTopImg').click();
  cy.get('#industry_a > .editLeadfield > .ant-select-show-arrow > .ant-select-selection > .ant-select-selection__rendered').click();
  cy.get('.ant-select-dropdown-menu').should('be.visible');
  cy.get('.ant-select-dropdown-menu-item').contains('Baby Products').scrollIntoView().click({ force: true });
  //cy.get('.ant-select-dropdown-menu-item-active').select('Baby Products');
  //cy.get('.pageRight').click();
  cy.get('body').click('topLeft', { force: true });  // 点击 body 左上角:ml-citation{ref="1" data="citationList"}

  cy.get(
   '[src="data:image/png;base64,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"]'
  ).click();

  /* ==== End Cypress Studio ==== */
 })
})