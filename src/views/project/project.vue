<template>
  <div class="project">
    <app-header></app-header>
    <span @click="getData" class="red">sass实例</span>
    <br>
    <el-button type="text" @click="isOpen = true">打开侧边栏</el-button>
    <right-side :is-open="isOpen" @close="close" width="500">
      <div slot="head">标题</div>
      <div>
        helloword
      </div>
    </right-side>
  </div>
</template>

<script type="text/ecmascript-6">
  import api from '@/services/home'
  import appHeader from '@/components/header/header.vue'
  import rightSide from '@/components/rightSide.vue'

  export default {
    data () {
      return {
        isOpen: false   // 是否打开侧边栏
      }
    },
    components: { appHeader, rightSide },
    methods: {
      close () {
        this.isOpen = false
        // todo: 其他操作
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

<style lang="scss" rel="stylesheet/scss">
  /* 用sass 好处，能层层嵌套写，一般一个模块页面定义一个唯一的类，比如project，其他类在project里面，就不怕污染 */
  /* 而且v-cli帮我们打包时候做了兼容处理，-webkit-什么前缀就不用写了 */
  .project {
    background-color: #f1f1f1;
    position: absolute;
    width: 100%;
    height: 100%;
    color: #444;
    font-size: 14px;
    .red {
      color: #ccc;
    }
  }
</style>
