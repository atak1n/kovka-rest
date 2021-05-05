<template>
  <v-theme-provider :dark="dark">
    <!--    <div>-->
    <v-card
      class="mx-auto fill-height"
      v-bind="$attrs"
      v-on="$listeners"
      color="secondary"
      width="160"
      flat
    >
      <v-img class="text-center pa-4">
        <v-icon size="60" v-text="icon"/>
      </v-img>
      <v-card-subtitle
        class="pa-2"
        >
        {{ title }}
        <v-icon size="18">
          mdi-arrow-right
        </v-icon>
      </v-card-subtitle>

    </v-card>
    <!--    </div>-->
  </v-theme-provider>

</template>

<script>
export default {
  name: "ProductCard",
  props: {
    dark: Boolean,
    dense: Boolean,
    title: String,
    icon: {
      type: String,
      default: 'mdi-pyrite'
    },
    link: {
      type: String,
    }
  },

}
</script>

<style scoped>

</style>
