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
        <!--隐私模式及创建-->
        <div class="private-icon">
          <span class=" hover-active">
            <i class="fa fa-lock fa-2x" aria-hidden="true" ></i>
            <span class="private">隐私模式</span>
          </span>
          <div class="submit-btn"><button>创建</button></div>
        </div>
        <div class="private-info">所有成员可见</div>

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

        line-height: 40px;

        button {
          height: 25px;

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
</style>
