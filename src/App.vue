<template>
  <div id="app">
    <router-view @getinfo="getInfo" :info="info"></router-view>
  </div>
</template>

<script>
  import api from '@/services/user'
  export default {
    data () {
      return {
        info: {}
      }
    },
    name: 'app',
    created () {
      this.checkLogin()
    },
    watch: {
      // $route: 'checkLogin'
    },
    methods: {
      // 获取用户基本信息
      getInfo (info) {
        console.log('xinxi', info)
        this.info = Object.assign({}, info)
        console.log(this.info)
      },
      checkLogin () {
        api.checkLogin()
          .then((data) => {
            console.log(data)
            this.info = {userName: data.data.userName}
            this.$router.replace({path: '/project'})
          })
          .catch((err) => {
            this.$router.replace({path: '/'})
            console.log(err)
          })
      }
    }
  }
</script>

<style>
  html, body {
    margin: 0;
    padding: 0;
  }
  #app {

    font-family: '微软雅黑', Helvetica, Arial, sans-serif;
  }
  textarea input button {
    outline:none;
  }
  a {
    text-decoration: none;
  }
</style>
