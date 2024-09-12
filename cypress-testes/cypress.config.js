const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demo.firefly-iii.org/', // Defina sua baseUrl aqui
    setupNodeEvents(on, config) {
      // configure os eventos do Cypress aqui
    },
  },
})