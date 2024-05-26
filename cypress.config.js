const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/integration",
    baseUrl: "https://www.amazon.com",
    viewportWidth: 1000,
    viewportHeight: 660,
  },
});
