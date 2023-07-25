const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    historyApiFallback: true,
    proxy: "http://gnsdl2846.cafe24.com"
  },
})
