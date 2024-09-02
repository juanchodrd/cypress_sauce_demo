const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  video: true,
  reporterOptions: {
    charts: true,
    reportPageTitle: "Reporte pruebas Ecosistemas front end",
    embeddedScreenshots: true,
    inlineAssets: true, //Adds the asserts inline, para poder compartir reporte por mail
  },
  chromeWebSecurity: false,
  edgeWebSecurity: false,
  retryOnStatusCodeFailure: true,
  requestTimeout: 40000,
  responseTimeout: 40000,
  defaultCommandTimeout: 10000,
  env: {
    ENV: "production",
  },
  retries: {
    runMode: 1,
    openMode: 1,
  },
  e2e: {
    setupNodeEvents(on: any, config: any) {
      // require('cypress-grep/src/plugin')(config)
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },
  },
});
