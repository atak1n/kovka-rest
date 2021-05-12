<template>
  <v-app>

    <CoreAppBar />

<!--    <ProductsBar />-->

<!--    <GoToTopBtn/>-->

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
    await this.$store.dispatch('testProducts/getProducts')
  },

  scrollToTop: true,
}
</script>

<style scoped>

</style>
