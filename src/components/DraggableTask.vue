<template>
  <div class="draggable">
    <div class="task-title">{{task.title}}</div>
    <draggable :options="options" v-model="task.cards">
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
    </draggable>
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
        }
      }
    },
    components: {
      draggable
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  .draggable {
    width:250px;
    margin:5px;
    background-color: #f1f1f1;
    padding:10px;
    border-radius: 5px;
    box-sizing: border-box;
    .task-title {
      margin-bottom: 10px;
      padding-left: 5px;
      font-weight: bolder;
    }
    .card {
      display: flex;
      max-height:100px;
      background-color: white;
      margin:5px;
      border-radius: 5px;
      cursor: move;
      &:hover .hover-mask{
        position: absolute;
        width:10px;
        transition: .4s width;
      }
      .hover-mask {
        width:0px;
        height:100px;
        background-color: #b4b472;
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
          background-color: #ff6d6d;
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
            .tab-label {
              display: inline-block;
              width:6px;
              height:6px;
              border-radius: 3px;
              background-color: #b94a48;
              margin-right: 4px;
            }
          }
        }
      }
    }
    /*拖拽样式显示*/
    .sortable-fallback {
      opacity: 1!important;
      .card {
        box-shadow: 6px 6px 15px #999;
        transform: rotate(3deg) translateZ(0)!important;
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
