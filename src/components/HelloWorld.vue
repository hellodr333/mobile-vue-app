<template lang="pug">
  div.hello
    h1 {{ msg }}&nbsp;&nbsp;{{$t('guide')}}
    button(@click="toggleLanguage({language: 'cn'})") 中文 &nbsp;&nbsp;
    button(@click="toggleLanguage({language: 'en'})") 英文
</template>

<script>
import { setLanguage } from '@/locales'
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String
    }
  },
  methods: {
    toggleLanguage (obj) {
      if (obj.language === 'cn') {
        setLanguage('cn')
      } else {
        setLanguage('en')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
h1
  margin: 2rem 0;
</style>
