<template>
  <form action="" class="task-editor">
    <div class="edittask" v-bind:class="{'editpart-show':isShow}">
      <div class="bd-bt text-part">
        <textarea name="task" id="" placeholder="任务内容"></textarea>
        <div class="responser">参与者</div>
      </div>
      <div class="bd-bt  add-responser">
        <div class="responser-title">参与者</div>
        <div class="arrange-responser">许泽珊</div>
      </div>
      <div class="bd-bt more">更多</div>
      <div class="control-btn">
        <span class="private-set">隐私模式</span>
        <span class="submit-btn"><button>创建</button></span>
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
  .edittask {
    display: none;
    background-color: white;
    padding:15px;
    margin: 5px;
    border-radius: 4px;
  .bd-bt {
    border-bottom: 1px solid #f1f1f1;
  }
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
  .add-responser {
  }
  }
  .editpart-show {
    display: block;
    /*max-height:200px;*/
    transition: all .4s ease;
  }
</style>
