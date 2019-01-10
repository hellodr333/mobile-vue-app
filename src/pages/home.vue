<template lang="pug">
  div
    img(alt="Vue logo" src="@/assets/logo.png")
    HelloWorld(sg="$t('msg')")
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
