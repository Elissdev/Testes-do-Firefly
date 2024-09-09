describe('Modo de Exibição da Tela', () => {

  beforeEach(() => {
  
      cy.viewport(1366, 729)
      // Pré-condição: O usuário deve estar logado no sistema
      cy.visit('/');  // Acessa a página inicial da aplicação
  
      // Insere as credenciais de login
      cy.get('input[name="email"]').clear().type('demo@firefly');  // Insira o email de login correto
      cy.get('input[name="password"]').clear().type('demo');  // Insira a senha correta
      cy.get('button[type="submit"]').click();  // Submete o formulário de login
  
    });
  

  it('Deve alterar o modo de exibição para Always dark', () => {
     cy.contains('Options').click();
     cy.contains('Preferences').click();
     cy.contains('Layout').click();

     cy.get('div#layout.tab-pane').click();
    
    
     cy.get('input[name=darkMode][value=dark]').click();
     cy.get('button[type="submit"]').eq(1).click();

     // Realiza o logout
     cy.contains('Logout').click(); 

     // Realiza o login novamente
     cy.get('input[name="email"]').clear().type('demo@firefly');  
     cy.get('input[name="password"]').clear().type('demo');  
     cy.get('button[type="submit"]').click();  
 
     // Verifica se o modo "Always dark" persiste
     cy.contains('Options').click();
     cy.contains('Preferences').click();
     cy.contains('Layout').click();
     
     cy.get('input[name=darkMode][value=dark]').should('be.checked');

  });
});


