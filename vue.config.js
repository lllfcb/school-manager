const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: '172.16.2.109', //运行的ip地址
    port: 8080, //端口号
    client: {
      overlay: false
    }
  }
})
