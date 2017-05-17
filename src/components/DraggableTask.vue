<template>
  <div class="draggable">
    <div class="task-title">{{task.title}}</div>
    <draggable :options="{group:'task'}" v-model="task.cards">
      <div v-for="taskcard in task.cards" :id="taskcard.id" class="card">{{taskcard.title}}</div>
    </draggable>
  </div>
</template>
<script>
  import draggable from 'vuedraggable'
  export default {
    props: ['task'],
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
  }
</style>
