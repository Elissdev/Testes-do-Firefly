describe('Teste de Redefinição de Senha', () => {
    it('Deve permitir iniciar o processo de redefinição de senha', () => {
      
      cy.visit('/login');
      cy.contains('a', 'I forgot my password').click();
      cy.url().should('include', '/password/reset');
      cy.get('input[name="email"]').clear().type('elistester76@gmail.com');
      cy.get('button[type="submit"]').click();
      
    });
  });