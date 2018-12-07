<template>
  <div>
    <img alt="Vue logo" src="@/assets/logo.png">
    <HelloWorld :msg="$t('msg')"/>
    <!-- <Me></Me> -->
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
// import Me from '@/pages/me.vue'
export default {
  name: 'layout',
  components: {
    HelloWorld,
    // Me
  }
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
</style>
