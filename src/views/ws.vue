<template>
    <div>
        <el-input
                placeholder="请开始你的表演"
                v-model="input"
        >
        </el-input>
        <el-button type="text" @click="sendMsg">发送</el-button>
        <div>
            <p v-for="item in msg">{{item}}</p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        ws: '',
        input: '',
        msg: []
      }
    },
    mounted () {
      this.$nextTick(() => {
        Notification.requestPermission(function (status) {
          if (Notification.permission !== status) {
            Notification.permission = status
          }
        })

        this.ws = new WebSocket('ws://localhost:3001/test')
        this.ws.onmessage = (msg) => {
          this.msg.push(msg.data)
          var options = {
            dir: 'ltr',
            lang: 'utf-8',
            icon: 'http://ihuster.com/static/avatar/m_default.png',
            body: '你好呀，欢迎留言交流呀'
          }
          if (Notification && Notification.permission === 'granted') {
            options.data = msg.data
            var n = new Notification(msg.data, options)
            n.onshow = function () {
              console.log('tgdg')
            }
          }
        }
          /* let waitForConnection = (callback, interval) => {
           if (this.ws.readyState === 1) {
           callback()
           } else {
           setTimeout(() => {
           waitForConnection(callback, interval)
           }, interval)
           }
           }
           let send = (message, callback) => {
           waitForConnection(() => {
           this.ws.send(message)
           if (typeof callback !== 'undefined') {
           callback()
           }
           }, 1000)
           } */
        // send('hello!!!')
      })
    },
    methods: {
      sendMsg () {
        console.log(this.input)
        this.ws.send(this.input)
        this.input = ''
      },
      handleIconClick () {
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
    .header {

    }
</style>
