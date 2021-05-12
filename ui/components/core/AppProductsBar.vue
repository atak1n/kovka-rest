<template>
  <div>
    <v-btn
      dark
      left
      v-if="!drawer"
      :style="btnFixedStyle"
      color="primary"
      fixed
      @click="showDrawer"
    >
      <v-icon left>
        mdi-store
      </v-icon>
      каталог
    </v-btn>
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      floating
      color="#212121"
      dark
      style="max-height: 100%"
      :temporary="isTemporary"
      @input="showMobileDrawer = false"
    >
      <!--<div :style="topOffset">-->


      <v-list-item nav>
        <v-list-item-icon>
          <v-icon>mdi-fireplace</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Товары</v-list-item-title>
        <!--      <v-btn-->
        <!--        icon-->
        <!--        @click.stop="mini = !mini"-->
        <!--      >-->
        <!--        <v-icon>mdi-chevron-left</v-icon>-->
        <!--      </v-btn>-->
      </v-list-item>

      <v-divider/>

      <v-list dense nav>
        <v-list-item
          v-for="(product,i) in products" :key="i"
          nuxt
          :to="{ name: 'products-slug', params: { slug: product.slug } }"
        >
          <v-list-item-icon>
            <v-icon>mdi-anvil</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ product.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>

      <v-list-item style="height: 124px" />

      <!--</div>-->

    </v-navigation-drawer>

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "AppProductsBar",
  data: () => ({
    drawer: null,
    mini: true,

    // title: products.title,
    // annotate: products.annotate,
    // products: products.products,
    showMobileDrawer: false,

  }),
  computed: {
    ...mapState({
      title: state => state.products.title,
      annotate: state => state.products.annotate,
      products: state => state.products.products,
    }),

    bottomOffset() {
      return `height: ${this.$vuetify.application.bottom}px; position: fixed`
    },
    btnFixedStyle() {
      return `z-index: 4; bottom: ${this.$vuetify.application.footer}px`
    },
    isTemporary() {
      return this.$vuetify.breakpoint.mobile && this.showMobileDrawer
    },
  },
  methods: {
    showDrawer() {
      this.drawer = true
      this.showMobileDrawer = true
    },
  }
}
</script>

<style scoped>

</style>
