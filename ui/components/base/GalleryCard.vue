<template>
  <v-card
    :height="height"
    :width="width"
    flat
    dark
    v-bind="$attrs"
    v-on="$listeners"
  >
    <v-img
      v-if="img.preview"
      :src="require(`@/assets/${img.preview}`)"
      height="100%"
      gradient="rgba(0, 0, 0, .1), rgba(0, 0, 0, .1)"
      class="align-end"
      contain
    >
      <v-card-title class="text-right" v-if="title">
        {{ title }}
      </v-card-title>
    </v-img>

    <v-card-subtitle v-if="subtitle">
      <slot name="subtitle">
        {{ subtitle }}
      </slot>
    </v-card-subtitle>

  </v-card>
</template>

<script>
export default {
  name: "GalleryCard",

  props: {
    height: {
      type: [Number, String],
      // required: true,
      // default: 270
    },
    width: {
      type: [Number, String],
      default: 270
    },
    img: {
      type: Object,
    },

    title: {
      type: [Boolean, String] ,
      default: false
    },
    subtitle: {
      type: [Boolean, String] ,
      default: false
    }
  },


}
</script>

<style scoped>

</style>
