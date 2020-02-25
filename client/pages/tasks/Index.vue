<template>
  <div>
    <ul v-if="tasks.length > 0">
      <Task v-for="(task, index) in tasks" :task="task" :key="index" />
    </ul>
    <p v-else>No tasks available</p>

    <hr>

    <form @submit.prevent="handleSubmit">
      <div>
        <label>Task text</label>
        <input type="text" v-model="newTask.text">
      </div>
      <input type="submit" value="Add new task">
    </form>

    <pre><code>
      {{allTasks}}
    </code></pre>
  </div>

</template>

<script type="text/javascript">
  import '/imports/collections/Task.js'                 // This is the collection instance for the tasks models
  import Task from '/client/components/Task.vue'        // This is the vue component that renders the tasks

  export default {
    data() {
      return {
        tasks: [],
        newTask: { text: null }
      }
    },

    methods: {
      handleSubmit(event) {
        Tasks.insert({ text: this.newTask.text, createdAt: new Date() })
        this.newTask.text = null
      }
    },

    watch: {
      allTasks(newVal, oldVal) {
        this.tasks = newVal
      }
    },

    meteor: {
      $subscribe: {
        'Tasks': []      // Done like this because we're not sending any arguments to the default query
      },

      allTasks() {
        return Tasks.find({}).fetch()
      }
    },

    components: {
      Task
    }
  }
</script>