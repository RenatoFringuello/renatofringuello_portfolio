const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // transpileDependencies: true
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/style/partials/_variables.scss";
          @import "@/style/partials/_keyframes.scss";
          @import "@/style/partials/_mixins.scss";
          @import "@/style/general.scss";
        `
      }
    }
  }
})
