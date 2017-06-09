<template>
<div class="prioritysetter">
  <el-dropdown trigger="click" @command="select">
  <span class="el-dropdown-link" v-if="!priority">
    {{title}}
  </span>
  <span class="el-dropdown-link" v-else="priority">{{priority}}</span>
    <el-dropdown-menu slot="dropdown" class="menu" >
      <el-dropdown-item command="0" ><span class="priority-state">
        <span class="state">
          <i class="el-icon-star-on star1"></i>
        不紧急</span><i class="el-icon-check checkicon" v-if="key===0"></i></span></el-dropdown-item>

      <el-dropdown-item command="1" class="menu"><span class="priority-state">
        <span class="state">
          <i class="el-icon-star-on star2"></i>
          正常</span><i class="el-icon-check checkicon" v-if="key===1"></i></span></el-dropdown-item>
      <el-dropdown-item command="2" class="menu"><span class="priority-state">
        <span class="state">
          <i class="el-icon-star-on star3"></i>
          紧急</span><i class="el-icon-check checkicon" v-if="key===2"></i></span></el-dropdown-item>
      <el-dropdown-item command="3" class="menu"><span class="priority-state">
        <span class="state">
          <i class="el-icon-star-on star4"></i>
          很紧急</span><i class="el-icon-check checkicon" v-if="key===3"></i></span></el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</div>
</template>
<script>
  export default {
    data () {
      return {
        priorityflow: {'0': '不紧急', '1': '正常', '2': '紧急', '3': '非常紧急'},
        priority: '',
        title: '选择优先级',
        key: 0
      }
    },
    methods: {
      select (command) {
        this.priority = this.priorityflow[command]
        this.key = +command
        this.$emit('setpriority', this.key)
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  .icon {
    display: inline-block;
    margin-right: 10px;
  }
  .prioritysetter {
    display: inline-block;
    .el-dropdown-link {
      &:hover {
        color: #3da8f5;
      }
    }
    .menu {
      display: flex;
      align-items: flex-end;
      .el-dropdown-menu__item{
        width:200px;
        padding:0px;
        margin:0px;
        .priority-state {
          display: inline-flex;
          .state {
            flex:1;
            display: inline-block;
          }
          .checkicon {
            display: inline-block;
            margin-left: 10px;
          }
        }
      }
    }
  }
  /*设置不同紧急程度的样式*/
  .star1 {
    color: grey;
  }
  .star2 {
    color: orangered;
  }
  .star3 {
    color: gold;
  }
  .star4 {
    color: peru;
  }
</style>
