<template>
  <div>
  <div v-if="!isTurn" class="signupPart">
    <!--之所以注册页按enter 能触发turnto 事件，是因为form事件，可以查查原理 -->
    <form action="" class="login">
      <h1 class="title">teambition</h1>
      <div class="form-field">
        <input class="form-part email" type="text" name="email" placeholder="用户名" v-model="username">
        <i class="icon close fa fa-times-circle" aria-hidden="true" style="right: 12px;"></i>
      </div>
      <div class="form-field" @mouseover="show" @mouseout="unshow">
        <button @click.prevent="turnto"  class="form-part submit" type="submit">即刻开始<i v-bind:class="{show:isShow}" style="display: none;" class="fa fa-arrow-circle-right" aria-hidden="true"></i></button>
      </div>
    </form>
  </div>
  <div  v-if="isTurn"  class="signupPart">
    <div action=""  class="login">
      <h1 class="title">teambition</h1>
      <h3 class="title">注册新账号</h3>
      <div class="form-field">
        <input class="form-part email" type="text" name="email" placeholder="用户名" v-model="username">
        <i class="icon close fa fa-times-circle" aria-hidden="true" style="right: 12px;"></i>
      </div>
      <div class="form-field">
        <input class="form-part email" type="text" name="email" placeholder="邮箱/手机号" v-model="mail">
        <i class="icon close fa fa-times-circle" aria-hidden="true" style="right: 12px;"></i>
      </div>
      <div class="form-field">
        <input class="form-part password" type="text" name="password" placeholder="密码(字母，数字，至少六位)"
               v-model="password">
        <i class="icon close fa fa-times-circle" aria-hidden="true" style="right: 35px;"></i>
        <i class="icon eye fa fa-eye" aria-hidden="true" style="right: 12px;"></i>
        <i class="icon eye fa fa-eye-slash" aria-hidden="true" style="right: 12px;display: none"></i>
      </div>
      <div class="form-field">
        <input class="form-part password" type="text" name="password" placeholder="确认密码(字母，数字，至少六位)"
               v-model="confirmpassword">
        <i class="icon close fa fa-times-circle" aria-hidden="true" style="right: 35px;"></i>
        <i class="icon eye fa fa-eye" aria-hidden="true" style="right: 12px;"></i>
        <i class="icon eye fa fa-eye-slash" aria-hidden="true" style="right: 12px;display: none"></i>
      </div>
      <div class="form-field" @mouseover="show" @mouseout="unshow">
        <button @click="signup" class="form-part submit" type="submit">注册<i v-bind:class="{show:isShow}" style="display: none;" class="fa fa-arrow-circle-right" aria-hidden="true"></i></button>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
  import api from '@/services/user'
  export default {
    data () {
      return {
        isShow: false,
        isTurn: false,
        username: '',
        mail: '',
        password: '',
        confirmpassword: ''
      }
    },
    methods: {
      /** 和登录一样，如果只是一个语句，可以直接写在模板 isShow = true **/
      show () {
        this.isShow = true
      },
      unshow () {
        this.isShow = false
      },
      turnto () {
        this.isTurn = true
      },
      signup () {
        api.register({
          userName: this.username,
          password: this.password,
          email: this.mail,
          confirmPassword: this.confirmpassword
        })
          .then(() => {
            this.$message('注册成功')
            api.login({
              userName: this.username,
              password: this.password
            })
              .then((data) => {
                this.$emit('getinfo', {
                  userName: this.username
                })
                // console.log(data)
                this.$router.push({path: '/project'})
              })
              .catch((err) => {
                console.log(err)
              })
          })
          .catch((err) => {
            this.$message(err)
            console.log(err)
          })
      }
    }
  }
</script>
<style  lang="scss" rel="stylesheet/scss">
  .signupPart {
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    .title {
      text-align: center;
    }
    .form-field {
      position: relative;
      .icon {
        color:lightgrey;
        cursor: pointer;
        position: absolute;
        top:20px;
        transform: translateY(-50%);
      }
      .close {
        &:hover {
          color: dodgerblue;
        }
      }
      .eye {
        right:10px;
      }
    }
    .form-part {
      box-sizing: border-box;
      border-radius: 4px;
      outline: none;
      width:300px;
      margin-bottom: 40px;
      padding:4px;
    }
    .email,.password {
      height:40px;
      border:1px solid grey;
    }
    .submit {
      cursor: pointer;
      font-size: 18px;
      height:50px;
      color: white;
      border:1px solid #3DA8F5;
      background: #3DA8F5;
      transition:all 125ms ease;
      &:hover {
        padding-right: 20px;
        background: dodgerblue;
      }
      .show {
        display:inline-block !important;
        font-size: 30px;
        vertical-align: middle;
        margin-left: 10px;
      }
    }
  }
</style>
