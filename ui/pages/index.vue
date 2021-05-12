<template>
  <div id="home">
    <v-row no-gutters>

      <v-col cols="12">
        <SectionsHero />
      </v-col>

      <v-col cols="12">
        <SectionsProjects/>
      </v-col>

      <v-col cols="12">
        <SectionsContactUs />
      </v-col>

      <v-col cols="12">
        <SectionsServices />
      </v-col>

      <v-col cols="12">
        <SectionsInfo />
      </v-col>

    </v-row>
  </div>
</template>

<script>

  export default {
    name: "index",
    // components:{
    //   Hero: () => import('~/components/sections/Hero.vue'),
    //   Projects: () => import('~/components/sections/Projects.vue'),
    //   Services: () => import('~/components/sections/Services.vue'),
    //   ContactUs: () => import('~/components/sections/ContactUs.vue'),
    //   Info: () => import('~/components/sections/Info.vue'),
    //
    // },

    // scrollToTop: true,

    head() {
      return {
        // meta: this.homeMeta.meta,
        // title: this.homeMeta.title
        ...this.homeMeta
      }
    },
    computed: {
      homeMeta() {
        return this.$store.state.pagesMeta.home
      }
    }
  }
</script>

<style scoped>

</style>
