<template>
  <v-carousel
    :v-bind="$attrs"
    :v-on="$listeners"

    v-show="activeType"
    v-model="active"

    hide-delimiters
    :class="mobile ? 'mt-16' : ''"
  >
    <v-carousel-item
      v-for="(product,i) in products"
      :key="i"
      :src="require(`@/assets/${product.img.original}`)"
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
</template>

<script>
export default {
  name: "GalleryCarousel",
  props: {
    products: {
      type: Array,
      default: () => []
    },
    activeCard: {
      type: [Number, undefined],
      default: 0
    },
    activeType: {
      type: Object
    },
  },
  data() {
    return{
      active: this.activeCard
    }
  },
  computed: {
    mobile() {
      return this.$vuetify.breakpoint.mobile
    },

  },
}
</script>

<style scoped>

</style>
