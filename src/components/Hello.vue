<template>
    <div class="hello">
        <h1 @click="getData">{{ msg }}点击换数组</h1>
        <h2 @click.stop="show=!show">Essential Links</h2>
        <my-select v-for="item in arr" :key="item.id" :id="item.id" list-class="mySelect">
            <span slot="header"><i class="el-icon-more"></i></span>
            <li @click="test('111','333')">的的111的</li>
            <li>的的222的</li>
        </my-select>
        <br>
        <br>
        <br>
        <br>
        <my-select @slide="changeIcon">
            <span slot="header">更多&nbsp;<i class="el-icon-arrow-down" :class="{'slide': slide}"></i></span>
            <li @click="test('111','333')">的的111的</li>
            <li>的的222的</li>
        </my-select>
        <div v-show="show" style="margin-top: 100px;cursor: pointer">
            一个外部事件示例
        </div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <el-select v-model="value" placeholder="请选择">
            <el-option
                    label="esfdsdfsdf"
                    :value="1223">
            </el-option>
            <el-option
                    label="esfd33sdfsdf"
                    :value="12323">
            </el-option>
        </el-select>
    </div>
</template>

<script>
  import mySelect from './myDropDown.vue'

  export default {
    name: 'hello',
    data () {
      return {
        value: '',
        msg: 'Welcome to Your Vue.js App',
        show: false,
        slide: false,
        arr: [
          {id: 1}
        ]
      }
    },
    methods: {
      test (a, b) {
        console.log('test', a, b)
      },
      changeIcon (val) {
        this.slide = val
      },
      getData () {
        setTimeout(() => {
          this.arr = this.arr.map((e) => {
            e.id = e.id + 3
            return e
          })
        }, 50)
      }
    },
    components: {
      mySelect
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .mySelect {
        margin-left: -70px;
    }
    .el-icon-arrow-down {
        transition: all .3s ease;
        transform: rotate(-90deg);

    }
    .el-icon-arrow-down.slide {
        transform: rotate(0deg);
    }
    h1, h2 {
        font-weight: normal;
    }



    a {
        color: #42b983;
    }
</style>
