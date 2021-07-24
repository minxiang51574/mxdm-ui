<!--
 * @Author: your name
 * @Date: 2021-07-21 19:14:18
 * @LastEditTime: 2021-07-21 19:50:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mxdm-ui\test\App.vue
-->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <mx-button size="small">默认按钮</mx-button>

    <mx-button type="primary" >主要按钮</mx-button>
    
    <mx-button type="warning" size="small">主要按钮</mx-button>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
