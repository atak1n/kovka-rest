<template>
  <base-section space="44" id="products-all">
    <base-section-heading
      :title="title"
      :text="annotate"
    />
    <v-responsive
      class="mx-auto"
      max-width="1350"
    >
      <v-container fluid>
        <transition name="fade" mode="out-in">
          <v-row>

            <template v-for="product in products">

              <v-col
                :key="product.title"
                class="pb-0"
                cols="12"
              >
                <base-title> {{ product.title }}</base-title>
                <BaseProductPrice :price="product.price"/>
              </v-col>

              <v-col
                v-for="(type,j) in product.product_types"
                :key="`${product.title}${j}`"
                cols="6"
                md="3"
                sm="2"
              >
                <base-gallery-card
                  rounded
                  :image="type.image"
                  :subtitle="type.title"
                  :width="mobile ? 400 : 300"
                  nuxt
                  :to="{ name: 'products-slug', params: { slug: product.slug } }"
                />
              </v-col>

            </template>

          </v-row>
        </transition>
      </v-container>
    </v-responsive>
  </base-section>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: "Products",

  computed: {
    ...mapState({
      title: state => state.products.title,
      annotate: state => state.products.annotate,
      products: state => state.products.products,
    }),
    mobile() {
      return this.$vuetify.breakpoint.mobile
    },
  },

}
</script>

<style scoped>

</style>
