<template>
<div class="tab-head">
  <div class="group-head">首页 > group-web</div>
  <!--<div class="login_user">你好！{{info.userName}}</div>-->
</div>
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        title: ''
//        login_user: ''
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  .tab-head {
    display: flex;
    width:100%;
    color: #000;
    height:40px;
    line-height:40px;
    padding-left: 20px;
    background-color: #f1f1f1;
    .group-head {
      flex:1;
    }
    .login_user {
      width:200px;
      margin-right: 20px;
    }
  }
</style>
