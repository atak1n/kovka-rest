<template>
  <section id="contacts">
    <v-row no-gutters>

      <v-col cols="12">
        <SectionsHeroAlt />
      </v-col>

      <v-col cols="12">
        <SectionsKeepInTouch />
      </v-col>

      <v-col cols="12">
<!--        <SectionsMap />-->
      </v-col>

    </v-row>
  </section>
</template>

<script>

  export default {
    name: "ContactUs",

    scrollToTop: true,

    head() {
      return {
        // meta: this.contactsMeta.meta,
        // title: this.contactsMeta.title
        ...this.contactsMeta
      }
    },
    computed: {
      contactsMeta() {
        return this.$store.state.pagesMeta.contacts
      }
    }
  }
</script>

<style scoped>

</style>
