<template>
  <div class="draggable">
    <div class="task-title">
      <span class="title">{{task.title}} · {{task.cards.length}}</span>
    </div>
    <div class="draggable-part" v-bind:class="{'draggable-part-show':editpartShow}">
      <draggable :options="options" v-model="task.cards"  style="height: 100%;">
        <div v-for="taskcard in task.cards" :id="taskcard.id">
          <div  class="card">
            <div class="hover-mask"></div>
            <div class="icon-part"><i class="fa fa-star important" aria-hidden="true"></i></div>
            <div class="content-part">
              <div class="task-head">
                <span class="task-infomation" :title=taskcard.title>{{taskcard.title}}</span>
                <span class="head-portrait">{{task.host.substring(0,3)}}</span>
              </div>
            <div class="task-deadline">5月13日截止</div>
            <div class="task-info">
              <span class="responser"><i class="tab-label"></i>{{taskcard.responser}}</span>
              <span class="status">等待开发</span>
            </div>
          </div>
        </div>
        </div>
        <!--添加任务编辑模块-->
        <div class="edittask" v-bind:class="{'editpart-show':editpartShow}">
          <div class="text-part">
            <textarea name="task" id=""></textarea>
            <div class="responser">参与者</div>
          </div>
          <div class="add-responser">参与者</div>
          <div class="more">更多</div>
          <div class="control-btn">
            <span class="private-set">隐私模式</span>
            <span class="submit-btn"><button>创建</button></span>
          </div>
        </div>
      </draggable>
    </div>
      <div class="add-task" @click="addtask" :class="{'ishide':editpartShow}">
        <i class="fa fa-plus-circle" aria-hidden="true"></i>
        添加任务
      </div>
  </div>
</template>
<script>
  import draggable from 'vuedraggable'
  export default {
    props: ['task'],
    data () {
      return {
        options: {
          group: 'task',
          animation: 100,
          forceFallback: true
        },
        editpartShow: false
      }
    },
    components: {
      draggable
    },
    methods: {
      addtask () {
        this.editpartShow = true
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  .draggable {
    width:250px;
    margin:5px;
    background-color: #f1f1f1;
    border-radius: 5px;
    box-sizing: border-box;
    .task-title {
      padding: 10px;
      font-weight: bolder;
    }
    .draggable-part {
      max-height: calc(100% - 80px);
      overflow: auto;
    }
    .card {
      display: flex;
      position: relative;
      max-height:100px;
      background-color: white;
      margin:0px 5px 5px 5px;
      border-radius: 5px;
      cursor: move;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
      &:hover .hover-mask{
        position: absolute;
        width:10px;
        transition: .4s width;
      }
      .hover-mask {
        position: absolute;
        left: 0px;
        top:0px;
        bottom:0px;
        width:0px;
        background-color: #A6A6A6;
      }
      .icon-part {
        width:20px;
        height:20px;
        margin: 14px 0px 0px 10px;
        color: gold;
      }
      .content-part {
        width:140px;
        padding:10px 10px 10px 0px;
        flex:1;
        .task-head {
          display: flex;
          span,i {
            display: inline-block;
            height:30px;
            line-height: 30px;
          }
          .task-infomation {
            flex:1;
            white-space:nowrap;
            text-overflow:ellipsis;
            overflow:hidden;
          }
          .head-portrait {
            font-size: 6px;
            width:30px;
            text-align: center;
            border-radius: 99em;
            background-color: gold;
            margin-left: 10px;
          }
        }
        .task-deadline {
          font-size: 6px;
          height:20px;
          line-height: 20px;
          max-width: 80px;
          text-align: center;
          border-radius:4px;
          background-color: #3da8f5;
          color: white;
        }
        .task-info {
          display: flex;
          height:30px;
          span {
            display:inline-block;
            height:30px;
            line-height: 30px;
          }
          .responser {
            flex:2;
            color:#A6A6A6;
            .tab-label {
              display: inline-block;
              width:6px;
              height:6px;
              border-radius: 3px;
              background-color: #3da8f5;
              margin-right: 4px;
            }
          }
        }
      }
    }
    .add-task {
      cursor: pointer;
      padding-left: 20px;
      height: 40px;
      line-height: 40px;
      color: #50bfff;
      &:hover {
        background: #c0ccda;
        opacity: 0.9;
      }
    }
    .edittask {
      display: none;
      background-color: white;
      padding: 15px;
      margin: 5px;
      border-radius: 4px;
      .text-part {
        textarea {
          width: 100%;
          height: 50px;
          padding:0px;
        }
      }
    }
    /*点击添加任务之后的样式显示，要同时考虑到内联滚动条的滚动以及底部的显示，需要再跟进提高一下*/
    .editpart-show {
      display: block;
      /*max-height:200px;*/
      transition: all .4s ease;
    }
    .ishide {
      display: none;
    }
    .draggable-part-show {
      max-height: calc(100% - 40px)!important;
    }
    /*拖拽样式显示*/
    .sortable-fallback {
      opacity: 1!important;
      .card {
        box-shadow: 6px 6px 15px #999;
        transform: rotate(3deg) translateZ(0);
      }
    }
    .sortable-ghost {
      background-color: #ccc;
      .card {
        opacity: 0;
      }
    }
  }
</style>
