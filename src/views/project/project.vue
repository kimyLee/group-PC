<template>
  <div class="project">
    <app-header :info="info"></app-header>
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
<<<<<<< HEAD
    <div class="task-part" v-loading="loading">
      <draggable-task v-for="(task, index) in tasks" :task="task" :index="index"
                      @updatetask="gettask"  :taskflow="taskflow" :info="info"></draggable-task>
=======
    <div class="task-part">
      <draggable-task v-for="(task,index) in tasks"
                      :task="task" :index="index"
                      @updatetask="gettask"
                      :taskflow="taskflow"
                      :info="info">
      </draggable-task>
>>>>>>> 44f35b13fefe8f602a53440014c18d1d3cae873d
      <div>点击这里可以实现添加任务模块</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import api from '@/services/user'
  import appHeader from '@/components/header/header.vue'
  import rightSide from '@/components/rightSide.vue'
  import tabHeader from '@/components/header/TabHead.vue'
  // todo: 这个拖拽组件并不是通用的，没必要放到components， 更像页面一个独立特殊的部分，可以只放到当前目录就行了
  // 而且在component的组件里面引用当前目录的addTask是不对的，这个draggableTask要放当前目录
  import draggableTask from '@/components/DraggableTask.vue'

  export default {
    props: ['info'],
    data () {
      return {
        loading: false,
        isOpen: false,   // 是否打开侧边栏
        tasks: null,  // 从后台获取到的任务
        taskflow: {}
      }
    },
    components: {appHeader, rightSide, tabHeader, draggableTask},
    methods: {
      close () {
        this.isOpen = false
        // todo: 其他操作
      },
      // todo: 页面内主要的获取数据的接口，尽量写在这一父组件， 然后分开方法方便维护
      // 获取任务(在获取流程后进行请求）
      gettask () {
<<<<<<< HEAD
        const self = this
        this.loading = true
=======
        // 箭头函数会自动把this 传进去函数，不再需要self = this
        api.gettask()
          .then((data) => {
            this.tasks = data.data
          })
          .catch((err) => {
            console.log(err)
          })
      },
      // 获取流程
      getFlow (cb) {
>>>>>>> 44f35b13fefe8f602a53440014c18d1d3cae873d
        api.getflow()
          .then((data) => {
            setTimeout(() => {
              this.loading = false
            }, 2000)
            //  这里貌似有点问题 就是这里是用data.data才能获取到数据
<<<<<<< HEAD
            let len = data.data.length
//            for (let i = data.data.length; i--;) {
//
//            }
            for (var i = 0; i < len; i++) {
              self.taskflow[data.data[i].step] = data.data[i].stepname
            }
            api.gettask()
              .then((data) => {
                console.log(data.data)
                self.tasks = data.data
              })
              .catch((err) => {
                console.log(err)
              })
=======
            for (var i = 0; i < data.data.length; i++) {
              this.taskflow[data.data[i].step] = data.data[i].stepname
            }
            cb && cb()
            // console.log(self.taskflow)
            // console.log(self.taskflow['0'])
>>>>>>> 44f35b13fefe8f602a53440014c18d1d3cae873d
          })
      }
    },
    mounted () {
      this.getFlow(this.gettask)
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
    overflow: hidden;
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
  .test {
    /*position: relative;*/
    background: red;
    width:100px;
    height:100%;
  }
  .test1{
    /*position: absolute;*/
    background: blue;
    width:20px;
    height:100%;
    /*left:10px;*/
    /*top:5px;*/
  }
</style>
