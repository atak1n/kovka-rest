<template>

  <v-card
    v-bind="$attrs"
    v-on="$listeners"
    class="mx-auto fill-height"

>
<!--  <div class="pa-2">-->

<!--    <v-img-->
<!--      :src="require(`@/assets/${value.img.preview}`)"-->
<!--      height="100%"-->
<!--      class=""-->
<!--    />-->

<!--</div>-->
    <v-card-subtitle class="text--lighten-3" v-text="value.title"/>
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
    value: {
      type: Object,
      default: () => ({}),
    },
    title: {
      type: Boolean,
      default: false
    },
    subtitle: {
      type: Boolean,
      default: false
    }
  },


}
</script>

<style scoped>

</style>
