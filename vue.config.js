const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
//intente hacer andar el proxy y no pude el 18 de abril a las 12 del mediodia:
// 01:21 del video tutorial https://www.youtube.com/watch?v=qZXt1Aom3Cs&t=75s
// module.exports = {
//   devServer: {
//     proxy: {
//       '^/api': {
//         // target: 'http://localhost:3000',
//         target: process.env.VUE_APP_BASE_URL_API,
//         changeOrigin: true,
//         logLevel:'debug',
//         pathRewrite: { '^/api': '/' },
//       },
//     }
//   }
// }
