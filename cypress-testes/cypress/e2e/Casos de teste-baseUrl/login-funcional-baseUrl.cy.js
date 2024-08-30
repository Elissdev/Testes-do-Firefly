describe('Funcionalidade de Login', () => {
    it('Deve realizar o login com sucesso', () => {
      cy.visit('/login');
      cy.get('input[name="email"]').clear().type('demo@firefly');
      cy.get('input[name="password"]').clear().type('demo');
      cy.get('button[type="submit"]').click();
      
      cy.url().should('include', '/');
    });
  });