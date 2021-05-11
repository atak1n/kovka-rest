<template>
  <v-app>

    <core-app-bar />

<!--    <ProductsBar />-->

<!--    <GoToTopBtn/>-->

    <v-main>
      <v-fade-transition mode="out-in">
        <nuxt />
      </v-fade-transition>
    </v-main>

<!--    <home-footer/>-->
  </v-app>
</template>

<script>

export default {
  components: {
    // HomeAppBar: () => import('~/components/core/AppBar.vue'),
    // HomeFooter: () => import('~/components/core/Footer'),
    // ProductsBar: () => import('~/components/core/AppProductsBar'),
    // GoToTopBtn: () => import('~/components/core/GoToTopBtn')
  },

  async fetch() {
    await this.$store.dispatch('testProducts/getProducts')
  },

  scrollToTop: true,
}
</script>

<style scoped>

</style>
