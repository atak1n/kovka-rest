<template>
  <base-section space="44" id="product">
    <base-section-heading
      :title="product.title"
      :text="product.text"
    />
    <v-responsive
      class="mx-auto"
      max-width="1350"
    >

      <v-container fluid>
        <!--        <transition name="fade" mode="out-in">-->
        <v-item-group mandatory v-model="selectedGroup" v-if="product.product_types.length > 1">
          <v-row dense>

            <v-col
              cols="6" md="2"
              v-for="type in product.product_types"
              :key="type.id">
              <v-item v-slot="{ active ,toggle }">

                <base-title-card
                  :title="type.title"
                  @click="toggle"
                  subtitle
                  :dark="active"
                />

              </v-item>
            </v-col>

          </v-row>
        </v-item-group>

        <transition name="fade" mode="out-in">
          <v-row v-if="activeType !== undefined" :dense="mobile">

            <v-col cols="12">
              <base-title v-if="product.product_types.length > 1">{{ activeType.title }}</base-title>
              <BaseProductPrice :price="product.price"/>
            </v-col>

            <v-col
              cols="12" md="3"
              v-for="(product,n) in activeType.products"
              :key="n"
            >
              <base-gallery-card
                :width="mobile ? 400 : 300"
                v-bind="product"
                :title="(n+1).toString()"
                @click="openCard(n)"
              >
                <template v-slot:imgText>{{ n }}</template>
              </base-gallery-card>
            </v-col>
          </v-row>
        </transition>
        <!--        </transition>-->
        <v-dialog
          v-model="dialog"
          overlay-opacity="0.9"
        >

          <!--          <v-container >-->
          <!--            <v-row no-gutters dense>-->
          <!--              <v-col cols="auto" class="mx-auto">-->


          <v-carousel
            v-show="activeType"
            v-model="activeCard"
            hide-delimiters
          >

            <v-carousel-item
              v-for="(product,i) in activeType.products"
              :key="i"
              :src="product.image.src.full"
              contain
            >
              <v-btn
                fab
                absolute
                text
                right
                small
                class="primary--text"
                @click="dialog = false"
              >
                <v-icon large>mdi-close-circle-outline</v-icon>
              </v-btn>
            </v-carousel-item>

          </v-carousel>


          <!--              </v-col>-->
          <!--            </v-row>-->
          <!--          </v-container>-->


        </v-dialog>
      </v-container>

    </v-responsive>
  </base-section>
</template>

<script>
// import products from "@/myStore/products"
// import BaseSubtitle from "~/components/base/Subtitle"

import { mapState } from 'vuex'

export default {
  name: "Product",
  // components: {
  //   BaseSubtitle,
  //   // BaseProductPrice,
  // },

  data: () => ({
    // title: products.title,
    // annotate: products.annotate,
    // products: products.products,

    selectedGroup: 0,
    dialog: false,
    activeCard: '',
  }),
  methods: {
    openCard(i) {
      this.activeCard = i
      this.dialog = true
    },
  },
  computed: {
    ...mapState({
      title: state => state.products.title,
      annotate: state => state.products.annotate,
      products: state => state.products.products,
    }),
    product() {
      this.selectedGroup = 0
      return this.products.find(product => product.slug === this.$route.params.slug)
    },

    activeType() {
      return this.product.product_types[this.selectedGroup]
    },
    mobile() {
      return this.$vuetify.breakpoint.mobile
    },
  },

}
</script>

<style lang="sass" scoped>
@import '~vuetify/src/components/VDialog/_variables'
.v-dialog--active
  $dialog-elevation: none
</style>
