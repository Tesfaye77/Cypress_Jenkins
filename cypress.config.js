const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
     
      
    },
    specPattern: 'cypress/integration/**/*.{js,jsx,ts,tsx}'
  },

  
    "chromeWebSecurity": false,
    "$schema": "https://on.cypress.io/cypress.schema.json",
    "projectId": "ioceso",
    "experimentalStudio": true,
    "screenshotOnRunFailure": true,
    "reporter": "cypress-mochawesome-reporter",
    "reporterOptions": {
        "reportDir": "cypress/report",
        "charts": true,
        "reportPageTitle": "Ulrich Demo Report",
        "embeddedScreenshots": true
      }



});

