<template>
  <div class="project">
    <app-header></app-header>
    <tab-header></tab-header>
    <!--<span @click="getData" class="red">sass实例</span>-->
    <!--<br>-->
    <!--<el-button type="text" @click="isOpen = true">打开侧边栏</el-button>-->
    <!--<right-side :is-open="isOpen" @close="close" width="500">-->
      <!--<div slot="head">标题</div>-->
      <!--<div>-->
        <!--helloword-->
      <!--</div>-->
    <!--</right-side>-->
    <div class="task-part">
      <draggable-task v-for="task in tasks" :task="task" ></draggable-task>
      <div>点击这里可以实现添加任务模块</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import api from '@/services/home'
  import appHeader from '@/components/header/header.vue'
  import rightSide from '@/components/rightSide.vue'
  import tabHeader from '@/components/header/TabHead.vue'
  import draggableTask from '@/components/DraggableTask.vue'

  export default {
    data () {
      return {
        isOpen: false,   // 是否打开侧边栏
        tasks: null       // 从后台获取到的任务
      }
    },
    components: {appHeader, rightSide, tabHeader, draggableTask},
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
    },
    mounted () {
      const self = this
      api.gettask()
        .then((data) => {
          self.tasks = data
          console.log(data)
        })
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  /* 用sass 好处，能层层嵌套写，一般一个模块页面定义一个唯一的类，比如project，其他类在project里面，就不怕污染 */
  /* 而且v-cli帮我们打包时候做了兼容处理，-webkit-什么前缀就不用写了 */
  .project {
    position: absolute;
    width: 100%;
    height: 100%;
    color: #444;
    font-size: 14px;
    .red {
      color: #ccc;
    }
    .task-part {
      display: flex;
      height:calc(100% - 80px);
      padding: 5px;
      box-sizing: border-box;
    }
  }
</style>
