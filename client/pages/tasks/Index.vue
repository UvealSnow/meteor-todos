<template>
  <div>
    <ul v-if="allTasks.length > 0">
      <Task v-for="(task, index) in allTasks" :task="task" :key="index" />
    </ul>
    <p v-else>No tasks available</p>

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
        tasks: []
      }
    },

    methods: {
      // 
    },

    watch: {
      allTasks(oldVal, newVal) {
        console.log(oldVal, newVal)
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