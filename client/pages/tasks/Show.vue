<template>
  <div>
    Task show {{ taskId }}
  </div>
</template>


<script type="text/javascript">
  export default {
    props: {
      taskId: {
        type: String | Number,
        required: true
      }
    }
  }
</script>