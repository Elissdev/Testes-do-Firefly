describe('Teste de Funcionalidade de Logout', () => {
    before(() => {
      cy.visit('https://demo.firefly-iii.org/login');
      cy.get('input[name="email"]').clear().type('demo@firefly');
      cy.get('input[name="password"]').clear().type('demo');
      cy.get('button[type="submit"]').click();
      cy.url().should('include', 'https://demo.firefly-iii.org/');
    });
  
    it('Deve permitir o logout com sucesso', () => {
      
      cy.get('a.logout-link').should('be.visible').click(); 
  
      cy.url().should('include', 'https://demo.firefly-iii.org/login');
  
      cy.get('button[type="submit"]').should('be.visible');
    });
  });
  