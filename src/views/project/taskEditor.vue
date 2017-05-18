<template>
  <form action="" class="task-editor">
    <div class="edittask" v-bind:class="{'editpart-show':isShow}">
      <div class="bd-bt text-part">
        <textarea name="task" id="" placeholder="任务内容"></textarea>
        <div class="responser">
          <span class="head-portait">头像</span>
          <span class="responser-name"><a href="">许泽珊</a></span>
        </div>
      </div>
      <div class="bd-bt  add-responser">
        <div class="responser-title">参与者</div>
        <div class="arrange-responser">
          <span class="head-portait">头像</span>
          <span class="add-responser"><i class="fa fa-plus-circle fa-1x" aria-hidden="true"></i></span>
        </div>
      </div>
      <div class="bd-bt more">*** 更多</div>
      <div class="control-btn">
        <div class="private-icon">
          <span class=" hover-active"><i class="fa fa-lock fa-2x" aria-hidden="true"></i>
            <span>隐私模式</span>
          </span>
          <span class="private-info">所有成员可见</span>
        </div>
        <div class="submit-btn"><button>创建</button></div>
      </div>
    </div>
  </form>
</template>
<script>
  export default {
    props: ['isShow']
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
        padding-right: 5px;
        height:inherit;
        width: 40px;
        border-radius: 50%;
        background: yellow;
      }
      .responser-name a{
        color: #808080;
        font-weight: bolder;
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
        }
      }
    }
    .more {
      padding:15px 0px;
    }
    .control-btn {
      height:40px;
      padding:10px 0px;
      display: flex;
      .hover-active:hover {
        cursor: pointer;
        color: #3da8f5;
      }
      .private-icon {
        flex:1;
        padding-right: 10px;
      }
      .private-info {
        display: inline-block;
        padding-top: 5px;
        padding-left:20px;
        color: #A6A6A6;
      }
      .submit-btn{
        height:inherit;
        color: #000;
        width:70px;
        button {
          height: inherit;
          width: inherit;
          background: #3da8f5;
          border-color: #3da8f5;
          color: white;
          border-radius: 4px;
        }
      }
    }
  }
  .editpart-show {
    display: block;
    transition: all .4s ease;
  }
</style>
