describe('Teste: Alteração do Período da Dashboard', () => {

    before(() => {
      // Pré-condição: O usuário deve estar logado no sistema
      cy.visit('/login');  // Acessa a página de login
      cy.get('input[name="email"]').clear().type('demo@firefly');  // Insira o email de login
      cy.get('input[name="password"]').clear().type('demo');  // Insira a senha
      cy.get('button[type="submit"]').click();  // Submete o formulário de login
      
      // Verifica se está na Dashboard após o login
      cy.url().should('include', '/dashboard');  // Garante que a URL inclui '/dashboard'
    });
  
    it('Deve carregar a dashboard com o período padrão', () => {
      // Verifica se o período padrão está selecionado
      cy.get('.period-dropdown').should('contain', 'Today'); // Exemplo: "Today" como período padrão
    });
  
    it('Deve alterar o período da dashboard para o último mês', () => {
      // Seleciona o período desejado
      cy.get('.period-dropdown').click();
      cy.contains('July 2024').click(); // Seleciona o período 'July 2024'
      
      // Verifica se a dashboard é recarregada com os dados corretos
      cy.get('.dashboard-graph').should('exist'); // Verifica se o gráfico da dashboard foi atualizado
      cy.get('.checking-account-transactions').should('contain', 'Jul'); // Verifica se os dados exibem transações de Julho
    });
  
    it('Deve verificar se os dados são atualizados para outros períodos', () => {
      const periods = ['Last seven days', 'Last thirty days'];
      
      periods.forEach(period => {
        cy.get('.period-dropdown').click();
        cy.contains(period).click();
        
        // Verifica se os dados da dashboard são atualizados para o período selecionado
        cy.get('.dashboard-graph').should('exist');
        cy.get('.checking-account-transactions').should('contain', period);
      });
    });
  
    afterEach(() => {
      // Aqui você pode adicionar verificações adicionais, como pós-condições
    });
  });