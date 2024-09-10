describe('Teste de Funcionalidade de Logout', () => {
    before(() => {
      cy.viewport(1366, 729)
      // Pré-condição: O usuário deve estar logado no sistema
      cy.visit('/');  // Acessa a página inicial da aplicação
  
      // Insere as credenciais de login
      cy.get('input[name="email"]').clear().type('demo@firefly');  // Insira o email de login correto
      cy.get('input[name="password"]').clear().type('demo');  // Insira a senha correta
      cy.get('button[type="submit"]').click();  // Submete o formulário de login
    });
  
    it('Deve permitir o logout com sucesso', () => {
      cy.get('a.logout-link').should('be.visible').click();
      cy.url().should('include', '/login');
      cy.get('button[type="submit"]').should('be.visible');
    });
  });