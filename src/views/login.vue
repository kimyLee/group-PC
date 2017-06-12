<template>
  <!--支持enter触发登录事件  @keyup.enter="login" 聚焦时候有效-->
  <div class="loginPart" @keyup.enter="login">
    <div class="login">
      <h1 class="title">teambition</h1>
      <!--邮箱-->
      <div class="form-field">
        <input class="form-part email" type="text" name="email" placeholder="邮箱/手机号" v-model="userName">
        <i class="icon close fa fa-times-circle" aria-hidden="true" style="right: 12px;"></i>
      </div>
      <!--密码-->
      <div class="form-field">
        <input type="password" class="form-part password"  name="password" placeholder="密码" v-model="password">
        <i class="icon close fa fa-times-circle" aria-hidden="true" style="right: 35px;"></i>
        <i class="icon eye fa fa-eye" aria-hidden="true" style="right: 12px;"></i>
        <i class="icon eye fa fa-eye-slash" aria-hidden="true" style="right: 12px;display: none"></i>
      </div>
      <div class="form-field" @mouseover="isShow = true" @mouseout="isShow = false">
        <button class="form-part submit" type="submit" @click="login">登 录
          <i v-bind:class="{show:isShow}" style="display: none;" class="fa fa-arrow-circle-right" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  /** 如果编辑器注释经常莫名其妙的出现错，但实际格式是对的，可以编译，把 ↑ 上面type改成babel 或 ecmascript-6 **/
  import api from '@/services/user.js'

  export default {
    data () {
      return {
        isShow: false, // 是否显示按钮箭头样式
        userName: '',
        password: ''
      }
    },
    methods: {
      // todo: 如果show 和 unshow 方法只在一个地方调用一次，并且每个方法只是一个语句，可以直接在模板里面 isShow = true 如上
      show () {
        this.isShow = true
      },
      unshow () {
        this.isShow = false
      },
      login () {
        api.login({
          userName: this.userName,
          password: this.password
        })
          .then((data) => {
            this.$message('登陆成功')
            // 成功后将用户信息派发给父组件，并跳转项目主页
            this.$emit('getinfo', {
              userName: this.userName
            })
            this.$router.replace({name: 'project'})
          })
          .catch((err) => {
            this.$message.error(err)
          })
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  .loginPart {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    .title {
      text-align: center;
    }
    .form-field {
      position: relative;
      .icon {
        color: lightgrey;
        cursor: pointer;
        position: absolute;
        top: 20px;
        transform: translateY(-50%);
      }
      .close {
        &:hover {
          color: dodgerblue;
        }
      }
      .eye {
        right: 10px;
      }
    }
    .form-part {
      box-sizing: border-box;
      border-radius: 4px;
      outline: none;
      width: 300px;
      margin-bottom: 40px;
      padding: 4px;
    }
    .email, .password {
      height: 40px;
      border: 1px solid grey;
    }
    .submit {
      cursor: pointer;
      font-size: 18px;
      height: 50px;
      color: white;
      border: 1px solid #3DA8F5;
      background: #3DA8F5;
      transition: all 125ms ease;
      &:hover {
        padding-right: 20px;
        background: dodgerblue;
      }
      .show {
        display: inline-block !important;
        font-size: 30px;
        vertical-align: middle;
        margin-left: 10px;
      }
    }
  }
</style>
