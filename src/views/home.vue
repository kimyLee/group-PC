<template>
<div class="homepage">
  <div class="headerpart">
    <span class="title">Katherine和kimmy的装逼之路</span>
    <router-link to="/login" class="login">登录</router-link>
    <router-link to="/signup" class="signup">免费注册</router-link>
  </div>
</div>
</template>
<script>
  // import user from '../services/user.js'
  export default {
    mounted () {
      // todo: 这里应该是无意义的？ 确认没用后应该删掉这段代码
      /* user.getuserinfo()
        .then((data) => {
          console.log(data)
        }) */
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  .homepage {
    position: absolute;
    background: url('../../static/image/homepage.jpg');
    width:100%;
    height:100%;
    .headerpart {
      display: flex;
      box-sizing: border-box;
      padding:20px;
      height: 50px;
      width: 100%;
      .title {
        flex: 1;
        font-weight:bolder;
        color: white;
        font-size: 20px;
      }
      .login {
        display: inline-block;
        height: 40px;
        width: 60px;
        line-height: 40px;
        border: 1px solid white;
        border-radius: 2px;
        color: white;
        text-align: center;
        transition: all .4s;
        margin-right: 20px;
        &:hover {
          background-color: white;
          color:#3da8f5;
        }
      }
      .signup {
        display: inline-block;
        text-align: center;
        height: 40px;
        line-height: 40px;
        width:80px;
        color: white;
        background-color: #3da8f5;
        &:hover {
          background-color: #50bfff;
        }
      }
    }
  }
</style>
