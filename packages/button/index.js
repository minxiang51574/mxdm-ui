/*
 * @Author: your name
 * @Date: 2021-07-06 19:50:56
 * @LastEditTime: 2021-07-21 19:59:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hls-ui\packages\button\index.js
 */
import MxButton from './src/button.vue';
MxButton.install = function(Vue){
    Vue.component(MxButton.name, MxButton);
}

export default MxButton;