<template>
  <section id="home">
    <v-row no-gutters>

      <v-col cols="12">
        <hero />
      </v-col>

      <v-col cols="12">
<!--        <projects />-->
      </v-col>

      <v-col cols="12">
<!--        <ContactUs />-->
      </v-col>

      <v-col cols="12">
<!--        <services />-->
      </v-col>

      <v-col cols="12">
<!--        <info />-->
      </v-col>

    </v-row>
  </section>
</template>

<script>
  // import pagesMeta from "@/myStore/pagesMeta"

  export default {
    name: "index",
    components:{
      Hero: () => import('~/components/sections/Hero.vue'),
      // Projects: () => import('~/components/sections/Projects.vue'),
      // Services: () => import('~/components/sections/Services.vue'),
      // ContactUs: () => import('~/components/sections/ContactUs.vue'),
      // Info: () => import('~/components/sections/Info.vue'),

    },

    // scrollToTop: true,

    // вернуть когда все починим
    // head: { ...pagesMeta.home }
  }
</script>

<style scoped>

</style>
