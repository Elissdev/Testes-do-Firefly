// cypress.config.js
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demo.firefly-iii.org/', // Ajuste a baseUrl conforme necessário
    setupNodeEvents(on, config) {
      // Configurações de eventos podem ser adicionadas aqui
    },
    specPattern: 'cypress/e2e/**/*.spec.js', // Ajuste o padrão de especificação conforme necessário
  },
});