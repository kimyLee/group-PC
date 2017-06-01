<template>
<div class="homepage">
  <div class="header">
    <span class="title">groupPC</span>
    <router-link to="/login" class="login">登陆</router-link>
    <router-link to="/signup" class="signup">免费注册</router-link>
  </div>
</div>
</template>
<script>
  export default {

  }
</script>
<style lang="scss" rel="stylesheet/scss">
  .homepage {
    background: url('../../static/image/homepage.jpg');
    .header {
      height: 50px;
      width: 100%;
      .login {
        display: inline-block;
        height: 40px;
        width: 60px;
        line-height: 40px;
        border: 1px solid black;
        border-radius: 2px;
        color: black;
        text-align: center;
        transition: all .4s;
        &:hover {
          background-color: #444444;
          color:white;
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
          
        }
      }
    }
  }
</style>
