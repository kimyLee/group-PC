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
        info: {} // 用户基本信息
      }
    },
    name: 'app',
    created () {
      this.checkLogin()
    },
    watch: {
      // 不应该每次路由跳转进行登陆验证， 应该是初始化时候时候进行一次验证，然后后台每次接口都进行检验（我还没做）
      // todo: 去除app vue 的路由监听
      // $route: 'checkLogin'
    },
    methods: {
      // 获取用户基本信息
      getInfo (info) {
        // 即便是测试， console用完也要养成删除的好习惯， 以下console我都注释掉
        // console.log('xinxi', info)
        this.info = Object.assign({}, info)
        // console.log(this.info)
      },
      checkLogin () {
        api.checkLogin()
          .then((data) => {
            // console.log(data)
            // 登陆成功，跳转项目主页
            this.info = {userName: data.data.userName}
            this.$router.replace({path: '/project'})
          })
          .catch((err) => {
            // 检测到未登陆，跳转主页
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
