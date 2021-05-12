<template>
  <section>
    <v-row no-gutters>
      <v-col cols="12">
        <v-breadcrumbs :items="getRoutes">
          <template v-slot:item="{ item }">
            <v-breadcrumbs-item
              nuxt
              :to="item.to"
              exact
            >
              {{ item.text.toUpperCase() }}
            </v-breadcrumbs-item>
          </template>
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
      </v-col>
      <v-col cols="12">

        <!--        <Products/>-->

        <NuxtChild/>

      </v-col>
    </v-row>
  </section>
</template>

<script>
// import products from "@/myStore/products";
// import pagesMeta from "@/myStore/pagesMeta";

export default {
  name: "ProductsPage",
  data: () => ({
    // products: products.products,
    items: [],
  }),
  computed: {
    products() {
      return this.$store.state.products.products
    },
    product() {
      return this.products.find( product => product.slug === this.$route.params.slug)
    },
    getRoutes() {
      let routes = [{
        to: '/products',
        link: true,
        // name: 'products',
        text: 'Продукция',
      }]

      if (this.product) {
        const currentRoute = {
          to: this.$route.path,
          link: true,
          text: this.product.title,
        }
        routes.push(currentRoute)
      }
      return routes
    },
  },

  // НУЖНО ПОЧИТНИТЬ ПОСЛЕ ВНЕДРЕНИЯ МЕТА В API
  // head() {
  //    return this.$route.params.slug ? {...this.product.metaData} : {...pagesMeta.products}
  // },

}
</script>

<style scoped>

</style>
