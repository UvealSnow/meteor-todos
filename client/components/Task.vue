<template>
  <li>
    <router-link :to="{ name: 'taskShowPage', params: { taskId: task._id } }"
      v-text="task.name"></router-link>
  </li>
</template>

<script type="text/javascript">
  export default {
    props: {
      task: {
        type: Object,
        required: true
      }
    }
  }
</script>