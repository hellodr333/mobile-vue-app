<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld :msg="$t('msg')"/> -->
    <div class="nav">
      <router-link to="/">HOME</router-link>
      <router-link to="/ours">OURS</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.nav a {
  padding: 0 10px;
  height: 40px;
  line-height: 40px;
  background: #eee;
  margin-right: 10px;
  display: inline-block;
}
</style>
