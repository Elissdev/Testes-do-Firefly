describe('Teste: Alteração do Período da Dashboard', () => {
  beforeEach(() => {
    cy.viewport(1366, 729);
    // Pré-condição: O usuário deve estar logado no sistema
    cy.visit('/'); // Acessa a página inicial da aplicação

    // Insere as credenciais de login
    cy.get('input[name="email"]').clear().type('demo@firefly'); // Insira o email de login correto
    cy.get('input[name="password"]').clear().type('demo'); // Insira a senha correta
    cy.get('button[type="submit"]').click(); // Submete o formulário de login
  });

  it('Deve carregar a dashboard com o período atual', () => {
    const index = 0;
    cy.get('#daterange').click();
    cy.get('div.ranges ul li').eq(index).click();

    // Verificação: A dashboard deve exibir dados do período atual
    cy.get('#accounts-chart').click();
    cy.get('div.accounts-canvas').should('contain', 'Today'); 
  });

  it('Deve alterar o período da dashboard para o último mês', () => {
    const index = 1;
    cy.get('#daterange').click();
    cy.get('div.ranges ul li').eq(index).click();

    // Verificação: A dashboard deve exibir dados do último mês
    cy.get('#accounts-chart').click();
    cy.get('div.accounts-canvas').should('contain', 'Last month'); 
  });

  it('Deve verificar se o período é alterado para "Last seven days"', () => {
    const index = 3;
    cy.get('#daterange').click();
    cy.get('div.ranges ul li').eq(index).click();

    // Verificação: A dashboard deve exibir dados dos últimos sete dias
    cy.get('#accounts-chart').click();
    cy.get('div.accounts-canvas').should('contain', 'Last seven days'); 
  });

  it('Deve verificar se o período é alterado para "Last thirty days"', () => {
    const index = 4;
    cy.get('#daterange').click();
    cy.get('div.ranges ul li').eq(index).click();

    // Verificação: A dashboard deve exibir dados dos últimos trinta dias
    cy.get('#accounts-chart').click();
    cy.get('div.accounts-canvas').should('contain', 'Last thirty days'); 
  });
});
