const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    output: {
      filename: "treeselect.js"
    }
  },
  css: {
    extract: {
      filename: "treeselect.css"
    }
  }
})
