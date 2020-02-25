<template>
  <li>
    <input type="checkbox" v-model="task.checked" @click.prevent="toggleState">
    <router-link :to="{ name: 'taskShowPage', params: { taskId: task._id } }"
      v-text="`${task.text} (${task._id})`"></router-link>
      <button @click="deleteTask">Delete</button>
  </li>
</template>

<script type="text/javascript">
  import '/imports/collections/Task.js'

  export default {
    props: {
      task: {
        type: Object,
        required: true
      }
    },

    methods: {
      toggleState(e) {
        // this method will automatically update this given model to the db
        Tasks.update(this.task._id, {
          $set: { checked: !this.task.checked }
        })
      },

      deleteTask(e) {
        // Removes the given task from db
        Tasks.remove(this.task._id)
      }
    }
  }
</script>