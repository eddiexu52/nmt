const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'o5eru2',
  projectRoot: 'D:\\tool\\cypress', 
  e2e: {
    experimentalStudio: true,  // 启用 Studio:ml-citation{ref="3" data="citationList"}
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }, 
  },
});
