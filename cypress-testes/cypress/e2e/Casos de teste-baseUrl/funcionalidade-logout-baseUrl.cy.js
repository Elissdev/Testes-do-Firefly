describe('Teste de Funcionalidade de Logout', () => {
    before(() => {
      cy.login();
    });
  
    it('Deve permitir o logout com sucesso', () => {
      cy.get('a.logout-link').should('be.visible').click();
      cy.url().should('include', '/login');
      cy.get('button[type="submit"]').should('be.visible');
    });
  });