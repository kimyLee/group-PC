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
          let message = JSON.parse(msg.data)
          this.msg.push(`${message.user.name}: ${message.data}`)
          var options = {
            icon: '/static/image/headicon.png',
            body: message.data
          }
          if (Notification && Notification.permission === 'granted') {
            var n = new Notification(message.user.name, options)
            n.onshow = function () {
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
