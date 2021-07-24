/*
 * @Author: your name
 * @Date: 2021-07-21 19:19:03
 * @LastEditTime: 2021-07-21 19:21:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mxdm-ui\vue.config.js
 */
module.exports = {
    pages:{
        index:{
            entry:"test/main.js",
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
        }
    },
      // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
        .add('/packages')
        .end()
      .use('babel')
        .loader('babel-loader')
        .tap(options => {
          // 修改它的选项...
          return options
        })
  }
}