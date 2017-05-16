<template>
  <div class="project">
    <span></span>
    hello word
  </div>
</template>

<script>
  import api from '@/services/home'

  export default {
    name: 'hello',
    data () {
      return {
        value: '',
        msg: 'Welcome to Your Vue.js App',
        show: false,
        slide: false,
        arr: [
          {id: 1}
        ]
      }
    },
    methods: {
      test (a, b) {
        console.log('test', a, b)
      },
      changeIcon (val) {
        this.slide = val
      },
      getData () {
        api.getCard()
          .then((data) => {
            console.log(data)
          })
          .catch((err) => {
            console.log(err)
          })
      }
    }
  }
</script>

<style lang="scss" type="stylesheet/scss">
  .project {
    span{color: #ccc}
  }
</style>
