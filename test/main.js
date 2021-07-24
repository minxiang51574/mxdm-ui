/*
 * @Author: your name
 * @Date: 2021-07-21 19:14:18
 * @LastEditTime: 2021-07-21 20:05:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mxdm-ui\test\main.js
 */
import Vue from 'vue'
import App from './App.vue'
// 导入组件库
import mxdmUI from '../packages'
console.log(mxdmUI);
Vue.use(mxdmUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
