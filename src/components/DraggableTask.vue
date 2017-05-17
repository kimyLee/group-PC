<template>
  <div class="draggable">
    <div class="task-title">{{task.title}}</div>
    <draggable :options="options" v-model="task.cards">
      <div v-for="taskcard in task.cards" :id="taskcard.id">
      <div  class="card">{{taskcard.title}}</div>
      </div>
    </draggable>
  </div>
</template>
<script>
  import draggable from 'vuedraggable'
  export default {
    props: ['task'],
    data () {
      return {
        options: {
          group: 'task',
          animation: 100,
          forceFallback: true
        }
      }
    },
    components: {
      draggable
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  .draggable {
    width:250px;
    margin:5px;
    height:100%;
    background-color: #f1f1f1;
    padding:10px;
    border-radius: 5px;
    .task-title {
      margin-bottom: 10px;
      padding-left: 5px;
      font-weight: bolder;
    }
    .card {
      max-height:60px;
      padding:10px;
      background-color: white;
      margin:5px;
      border-radius: 5px;
      cursor: move;
    }
    .sortable-fallback {
      opacity: 1!important;
      .card {
        box-shadow: 6px 6px 15px #999;
        transform: rotate(3deg) translateZ(0)!important;
      }
    }
    .sortable-ghost {
      background-color: #ccc;
      .card {
        opacity: 0;
      }
    }
  }
</style>
