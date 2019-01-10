<template lang="pug">
  div.you
    div you
    h3 {{inputMsg}}
</template>

<script>
import { setLanguage } from '@/locales'
export default {
  name: 'You',
  data () {
    return {
      inputMsg: ''
    }
  },
  mounted () {
    this.$eventBus.$on('sendMsgHandler', this.msgHandler)
  },
  methods: {
    toggleLanguage (obj) {
      if (obj.language === 'cn') {
        setLanguage('cn')
      } else {
        setLanguage('en')
      }
    },
    msgHandler (msg) {
      this.inputMsg = msg
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
</style>
