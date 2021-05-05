<template>
  <v-btn
    fab
    small
    fixed
    right
    color="primary"
    :style='btnFixedStyle'
    @click="$vuetify.goTo(0)"
  >
    <v-icon>mdi-chevron-up</v-icon>
  </v-btn>

</template>

<script>
export default {
  name: "GoToTopBtn",
  computed: {
    btnFixedStyle() {
      return `bottom: ${this.$vuetify.application.footer}px`
    },
  }
}
</script>

<style scoped>

</style>
