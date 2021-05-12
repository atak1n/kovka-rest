<template>
  <ProductsAll/>
</template>

<script>
// import Products from "../../components/sections/ProductsGrid";
import ProductsAll from '~/components/sections/ProductsAll'

export default {
  name: "IndexProducts",
  components: {
    // Products,
    ProductsAll
  },

  scrollToTop: true,
}
</script>

<style scoped>

</style>
