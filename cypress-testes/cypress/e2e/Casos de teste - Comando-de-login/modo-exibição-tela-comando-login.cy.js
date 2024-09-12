describe('Modo de Exibição da Tela', () => {
    beforeEach(() => {
      cy.viewport(1366, 729); // Define a resolução da tela
      cy.login(); // Usa o comando de login personalizado
    });
  
    it('Deve alterar o modo de exibição para Always dark', () => {
      // Navega para as opções de layout
      cy.contains('Options').click();
      cy.contains('Preferences').click();
      cy.contains('Layout').click();
  
      // Altera o modo de exibição para "Always dark"
      cy.get('div#layout.tab-pane').click();
      cy.get('input[name=darkMode][value=dark]').click();
      cy.get('button[type="submit"]').eq(1).click();
  
      // Realiza o logout
      cy.contains('Logout').click();
  
      // Realiza o login novamente usando o comando de login
      cy.login();
  
      // Verifica se o modo "Always dark" persiste após o login
      cy.contains('Options').click();
      cy.contains('Preferences').click();
      cy.contains('Layout').click();
      cy.get('input[name=darkMode][value=dark]').should('be.checked');
    });
  });