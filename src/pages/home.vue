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

<style lang="stylus" scoped>
</style>
