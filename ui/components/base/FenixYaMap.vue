<template>
  <div :id="'map'+id" style="width: 100%; height: 560px">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "FenixYaMap",
    props: {
      id: {
        type: String
      }
    }
  }
</script>

<style scoped>

</style>