<!--@slide 关闭收起回调， 其他事件在li 中自定义-->
<template>
  <div class="my-drag" v-myclickoutside="close" @click="toggle()">
    <div class="drag-btn">
      <slot name="header"></slot>
    </div>
    <div class="drag-list" :class="listClass">
    <ul class="drag-list-ul">
      <slot></slot>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id', 'listClass'],
  data () {
    return {
      show: false
    }
  },
  methods: {
    close () {
      this.toggle(true)
    },
    toggle (close) {
      const $ele = this.$el.querySelector('.drag-list')
      if (this.show || close) {
        this.show = false
        this.$emit('slide', this.show)
        $ele.style.height = 0
      } else {
        this.show = true
        this.$emit('slide', this.show)
        $ele.style.height = $ele.firstChild.offsetHeight + 'px'
      }
    }
  }
}
</script>

<style >
  .my-drag{
    position: relative;
    display: inline-block;
  }
  .my-drag .drag-btn{
    display: inline-block;
    padding: 5px;
    cursor: pointer;
  }
  .my-drag .drag-list{
    position: absolute;
    z-index: 1000;
    min-width: 120px;
    box-shadow: 5px 5px 10px #ccc;
    background-color: #fff;
    border-radius: 5px;
    height: 0;
    overflow: hidden;
    transition: height .3s ease;
  }
  .my-drag .drag-list-ul {
    list-style: none;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    border: 1px solid #e4e8f1;
  }
  .my-drag .drag-list li {
    text-align: left;
    font-size: 14px;
    padding: 8px 10px;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #48576a;
    height: 36px;
    line-height: 1.5;
    box-sizing: border-box;
    cursor: pointer;
  }
  .my-drag .drag-list li:hover{
    background-color: #e4e8f1;
  }

</style>
