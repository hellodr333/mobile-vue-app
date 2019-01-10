<template lang="pug">
  div.me
    div
      input(type="text" name="" v-model="message" @input="sendMsg")
</template>

<script>
import { setLanguage } from '@/locales'
export default {
  name: 'Me',
  data () {
    return {
      message: ''
    }
  },
  mounted () {
   },
  methods: {
    toggleLanguage (obj) {
      if (obj.language === 'cn') {
        setLanguage('cn')
      } else {
        setLanguage('en')
      }
    },
    sendMsg () {
      this.$eventBus.$emit('sendMsgHandler', this.message)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
</style>
