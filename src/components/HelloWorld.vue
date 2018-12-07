<template>
  <div class="hello">
    <h1>{{ msg }}&nbsp;&nbsp;{{$t('guide')}}</h1>
    <button @click="toggleLanguage({language: 'cn'})">中文</button>&nbsp;&nbsp;
    <button @click="toggleLanguage({language: 'en'})">英文</button>
  </div>
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
  mounted() {
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
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
