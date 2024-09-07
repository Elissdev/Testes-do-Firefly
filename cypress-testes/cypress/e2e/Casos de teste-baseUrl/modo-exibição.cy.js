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
    // Acesse as preferências
    cy.contains('Options').click();
    cy.contains('Preferences').click();

    // Altere o layout para Always dark
    cy.get('.nav > .active > a').click();//.select('Always dark');
    cy.get(':nth-child(2) > :nth-child(4) > label').click().

    // Salve as configurações
    cy.get('button[type="submit"]').click();

    // Verifique se o modo escuro foi aplicado
    cy.get('body').should('have.class', 'dark-mode'); 
  });

});
