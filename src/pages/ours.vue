<template>
  <div class="ours">
      <You></You>
      <Me></Me>
  </div>
</template>

<script>
import Me from '@/components/Me'
import You from '@/components/You'
export default {
  name: 'ours',
  data () {
    return {
    }
  },
  components: {
    Me,
    You
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
</style>
