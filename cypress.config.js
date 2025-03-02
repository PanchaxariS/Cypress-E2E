const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      email: "p1shanvadmeti@gmail.com",
      password: "Admin123",
    },
  },
});
