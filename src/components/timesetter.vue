<template>
<div class="timesetter">
  <div class="block">
    <i class="el-icon-date"></i>
    <el-date-picker
      v-model="deadline"
      type="datetime"
      disable=true
      format="MM-dd"
      placeholder="设置截止时间" @change="settime()">
    </el-date-picker>
  </div>
</div>
</template>
<script>
  export default {
    data () {
      return {
        deadline: ''
      }
    },
    methods: {
      settime () {
        this.$emit('setdeadline', this.deadline)
      }
    },
    mounted () {
      this.$emit('setdeadline', this.deadline)
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  .timesetter {
    .el-date-editor {
      display: inline-block;
      width: 80%;
      .el-input__icon {
        display: none;
      }
      .el-input__inner {
        width:100%;
        padding-right: 0px;
        color: darkgray;
        border:none;
        &:hover {
          cursor: pointer;
          color: deepskyblue;
        }
      }
    }
    /*设置日历组件的宽度 与任务列表的宽度差不多*/
    .el-date-picker.has-time {
      min-width:300px;
    }
  }
</style>

