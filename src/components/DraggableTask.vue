<template>
  <div class="draggable">
    <div class="task-title">{{task.title}}</div>
    <draggable>
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
    background-color: #bbbbbb;
    .card {
      max-height:60px;
      padding:10px;
      background-color: white;
      margin:5px;
    }
  }
</style>
