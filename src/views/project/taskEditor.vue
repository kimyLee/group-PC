<template>
  <form action="" class="task-editor">
    <div class="edittask" v-bind:class="{'editpart-show':isShow}">
      <div class="bd-bt text-part">
        <textarea name="task" id="" placeholder="任务内容" v-model="tasktitle"></textarea>
        <div class="responser">
          <span class="head-portait"></span>
          <span class="responser-name">{{info.userName}}</span>
        </div>
      </div>
      <div class="bd-bt  add-responser">
        <div class="responser-title">参与者</div>
        <div class="arrange-responser responser">
          <span class="head-portait"></span>
          <span class="add-responser responser-name"><i class="fa fa-plus-circle fa-1x" aria-hidden="true"></i></span>
        </div>
      </div>
      <!--更多按钮点击-->
      <div  class="bd-bt more"  @click="showmore" v-bind:class="{ 'more-showing' : moreEditing}">
        <span class="showmore">
          <i class="el-icon-more"></i>
          <span>更多</span>
        </span>
      </div>
      <!--点击更多按钮之后显示-->
      <div class="more-part bd-bt" v-bind:class="{ 'more-showing' : !moreEditing}">
        <div class="set-deadline bd-bt">
          <time-setter  @setdeadline="DeadLineset"></time-setter>
        </div>
        <div class="set-priority bd-bt">
          <i class="el-icon-star-on" :style="{color:priorityColor}"></i>
          <div class="priority">
            <priority-setter @setpriority="getpriority"></priority-setter>
          </div>
        </div>
      </div>
      <div class="control-btn">
        <!--隐私模式及创建-->
        <div class="private-icon">
          <span class=" hover-active">
            <i class="fa fa-lock fa-2x" aria-hidden="true" ></i>
            <span class="private">隐私模式</span>
          </span>
          <div class="submit-btn"><button @click.prevent="submittask">创建</button></div>
        </div>
        <div class="private-info">所有成员可见</div>
      </div>
    </div>
  </form>
</template>
<script>
  import api from '@/services/user'
  import Bus from '@/bus'
  import TimeSetter from '@/components/timesetter.vue'
  import prioritySetter from '@/components/prioritysetter.vue'
  export default {
    props: ['index', 'info'],
    components: {TimeSetter, prioritySetter},
    data () {
      return {
        tasktitle: '', // 任务标题
        taskmember: '', // 任务成员
        taskpriority: 0, // 优先级 0：不紧急 1： 正常
        taskcomment: '',
        taskdeadline: '',
        ShowState: false,
        isShow: false,
        moreEditing: false,
        priorityColorFlow: ['gray', 'red', 'gold', 'peru'],
        priorityColor: ''
      }
    },
    methods: {
      submittask () {
        const self = this
        api.addtask({
          title: self.tasktitle,
          step: self.index,
          member: self.info.userName,
          priority: self.taskpriority,
          comment: self.taskcomment,
          deadline: self.taskdeadline
        })
          .then(() => {
            self.isShow = false
            Bus.$emit('close-edit', self.isShow)
            self.$emit('updatetask')
          })
          .catch((err) => {
            this.$message.error(err)
          })
      },
      showmore () {
        this.moreEditing = true
      },
      DeadLineset (data) {
        this.taskdeadline = data
        console.log(data)
        console.log('新的时间')
      },
      getpriority (data) {
        this.taskpriority = data
        this.priorityColor = this.priorityColorFlow[data]
      }
    },
    created () {
      Bus.$on('adding-task', (state, index) => {
        if (this.index === index) {
          this.isShow = state
        }
      })
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  a {
    text-decoration: none;
  }
  .edittask {
    display: none;
    background-color: white;
    padding:15px;
    margin: 5px;
    border-radius: 4px;
    .text-part {
      textarea {
        outline: none;
        width: 100%;
        height: 50px;
        border: 1px solid #f1f1f1;
        padding: 10px;
        box-sizing: border-box;
      }
      &:focus{
        border:1px solid #a29c9c!important;
      }
    }
    .bd-bt {
      border-bottom: 1px solid #f1f1f1;
    }
    .responser {
      height:40px;
      line-height: 40px;
      .head-portait {
        display: inline-block;
        padding-right: 5px;
        width: 20px;
        height:40px;
        border-radius: 50%;
        background: url('../../../static/image/headicon.png') no-repeat;
        background-size:20px 20px;
        background-position: center;
      }
      .responser-name {
        display: inline-block;
        height:40px;
        line-height: 40px;
        color: #808080;
        font-weight: bolder;
        vertical-align: top;
        &:hover {
          color: #3da8f5;
          cursor: pointer;
        }
      }
    }
    .add-responser {
      padding:5px;
      .responser-title {
        color: #808080;
        font-weight: bolder;
        padding:0px 0px 10px 0px ;
      }
      .arrange-responser {
        .head-portait {
          padding-right: 5px;
        }
        .add-responser {
          font-size: inherit;
          color: #3da8f5;
          .fa-plus-circle {
            font-size: 23px;
          }
        }
      }
    }
    .more {
      padding:15px 0px;
      cursor: pointer;
      &:hover {
        color: #3da8f5;
      }
    }
    .more-part {
      .set-deadline {
        height:40px;
        line-height: 40px;
        display: inline-block;
        width:100%;
      }
      .set-priority {
        line-height: 40px;
        height:40px;
        .priority {
          display: inline-block;
          padding-left: 10px;
          color: darkgray;
          &:hover {
            cursor: pointer;
            color: #3da8f5;
          }
        }
      }
    }
    .control-btn {
      padding:10px 0px;
      /*display: flex;*/
      .hover-active {
        flex: 1;
        height: 40px;
        vertical-align: middle;
        .fa{
          font-size: 16px;
        }
        .fa , .private{
          vertical-align: middle;
        }
      }
      .hover-active:after {
        display: inline-block;
        content: '';
        height: 100%;
        width: 0;
        vertical-align: middle;
      }
      .hover-active:hover {
        cursor: pointer;
        color: #3da8f5;
      }
      .private-icon {
        width: 100%;
        display: flex;
      }
      .private-info {
        display: inline-block;
        color: #A6A6A6;
      }
      .submit-btn{
        display: inline-block;
        height:25px;
        color: #000;
        cursor: pointer;
        line-height: 40px;

        button {
          height: 25px;
          cursor: pointer;
          background: #3da8f5;
          color: white;
          border-radius: 4px;
          box-shadow: none;
          border: none;
          padding: 3px 11px;
        }
      }
    }
  }
  .editpart-show {
    display: block;
    transition: all .4s ease;
  }
  .more-showing {
    display: none;
  }
</style>
