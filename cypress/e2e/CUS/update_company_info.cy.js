describe('Update Company Info', () => {
  it('login', () => {
    cy.visit('http://192.168.0.153:8080/cus/login.jsp')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#j_username_display').clear();
    cy.get('#j_username_display').type('admin');
    cy.get('#j_password').type('123');
    cy.get('#secUserDomain').type('hk');
    cy.get('[href="javascript:handleLogin();"] > span').click();
    cy.url().should('include', '/cus/home')
    cy.get('#subMenuSideBarModule2', { timeout: 15000 }) // 延长等待时间
      .should('be.visible')
      .then(($el) => {
        // 后续操作（如点击、输入等）
      })
    cy.contains('Customer Search').click()
    /* ==== End Cypress Studio ==== */
  })
})