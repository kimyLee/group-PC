<template>
  <div class="hello" v-myclickoutside="toggle">
    <button @click="toggle">按钮{{id}}</button>
    <div style="width: 200px;height: 200px;background-color: #ccc;" v-show="show">
      我来测试{{id}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  props: ['id'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      show: false
    }
  },
  methods: {
    toggle () {
      this.show = !this.show
    }
  },
  component: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
