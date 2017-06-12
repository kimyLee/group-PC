<template>
  <div class="add-task" :class="{'ishide':isAdding}"  @click="addtask()">
    <i class="fa fa-plus-circle" aria-hidden="true"></i>
    添加任务
  </div>
</template>
<script>
  import Bus from '@/bus'
  export default {
    props: ['index'],
    data () {
      return {
        isAdding: false
      }
    },
    created () {
      Bus.$on('close-edit', (state) => {
        this.isAdding = state
      })
    },
    methods: {
      addtask () {
        this.isAdding = true
        Bus.$emit('adding-task', this.isAdding, this.index)
        this.$emit('addtask')
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
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
  .ishide {
    display: none;
  }
</style>
