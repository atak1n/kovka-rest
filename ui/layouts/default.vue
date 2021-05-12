<template>
  <v-app>

    <CoreAppBar />

    <CoreAppProductsBar />

    <CoreGoToTopBtn/>

    <v-main>
      <v-fade-transition mode="out-in">
        <nuxt />
      </v-fade-transition>
    </v-main>

    <CoreFooter/>
  </v-app>
</template>

<script>

export default {

  async fetch() {
    await this.$store.dispatch('products/getProducts')
  },

  scrollToTop: true,
}
</script>

<style scoped>

</style>
