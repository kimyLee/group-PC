<template>
  <div class="header">
    <span class="more-btn">
      <my-drop-down>
        <span slot="header"><i class="el-icon-setting"></i></span>
        <li>个人设置</li>
        <li>消息中心</li>
      </my-drop-down>
    </span>
    <span class="header-item">然后，哈姆太郎成了我女神</span>
    <span class="header-item search-panel" @click.stop="toggleInput()">
      <el-input
        placeholder="在全部中搜索"
        icon="search"
        v-model="input"
        @blur="toggleInput(true)"
        >
      </el-input>
    </span>
  </div>
</template>

<script type="text/ecmascript-6">
  import myDropDown from '../myDropDown.vue'
  export default {
    data () {
      return {
        input: '',
        focus: false
      }
    },
    components: { myDropDown },
    methods: {
      toggleInput (isBlur) {
        const $target = this.$el.querySelector('.search-panel')
        $target.style.width = isBlur ? '150px' : '200px'
      },
      handleIconClick () {
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .header {
    height: 40px;

    padding: 0 20px;
    background-color: #fff;
    &:after{
      display: inline-block;
      content: '';
      height: 100%;
      width: 0;
      vertical-align: middle;
    }
    .more-btn {
      font-size: 16px;
      display: inline-block;
      vertical-align: middle;
      cursor:pointer;
    }
    .header-item{
      vertical-align: middle;
    }
    .search-panel {
      display: inline-block;
      margin-left: 20px;
      width: 150px;
      transition: width .3s ease;
      .el-input{
        .el-input__inner{
          outline: none;
          height: 27px;
          border-radius: 15px;
        }
      }

      outline: none;
    }
  }
</style>
