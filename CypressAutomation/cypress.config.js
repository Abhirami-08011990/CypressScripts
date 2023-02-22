const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    url: 'https://pflegia-nx.vercel.app/',
    username: 'testqa@byom.de',
    password: "12345678"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern :'cypress/integration/examples/Pflegia.js'
    
  },
});
