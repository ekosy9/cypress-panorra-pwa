const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    browser : 'chrome',
    supportFile: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    reporter: 'mochawesome', 
    reporterOptions: {
      reportDir: 'cypress/results', // results will be saved in this folder for html and json report
      overwrite: false,             
      html: true,                   
      json: true                    
    },
    video: true, 
    videoCompression: 32, // Set the video compression quality (value between 0-51)
    videosFolder: 'cypress/videos', 
    screenshotOnRunFailure: true, 
    screenshotsFolder: 'cypress/screenshots', 
  },
});