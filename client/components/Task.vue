<template>
  <li>
    <router-link :to="{ name: 'taskShowPage', params: { taskId: task._id } }"
      v-text="`${task.text} (${task._id})`"></router-link>
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