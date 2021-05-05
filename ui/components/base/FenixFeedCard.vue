<template>
  <v-col
    cols="12"
    :md="size === 2 ? 6 : size === 3 ? 4 : size === 4 ? 3 : undefined"
    :sm="size === 2 ? 12 : size === 3 ? 6 : size === 4 ? 6: undefined"
  >
<!--    :md="size === 2 ? 6 : size === 3 ? 4 : undefined"-->
<!--    :height="value.prominent ? 450 : 350"-->
    <base-fenix-card
      :height="height"
      color="grey lighten-1"
      dark
      ripple
    >
      <v-img
        :src="require(`@/assets/${value.src}`)"
        height="100%"
        gradient="rgba(0, 0, 0, .42), rgba(0, 0, 0, .42)"
        class="align-end"
      >
<!--        <v-row-->
<!--          class="fill-height text-right ma-0"-->
<!--        >-->
<!--          <v-col cols="12">-->
<!--            <v-chip-->
<!--              label-->
<!--              class="mx-0 mb-2 text-uppercase"-->
<!--              color="grey darken-3"-->
<!--              text-color="white"-->
<!--              small-->
<!--              @click.stop=""-->
<!--            >-->
<!--              {{ value.category }}-->
<!--            </v-chip>-->

<!--            <h3 class="title font-weight-bold mb-2">-->
<!--              {{ value.title }}-->
<!--            </h3>-->

<!--            <div class="caption">-->
<!--              {{ value.author }}<br>Date-->
<!--            </div>-->
<!--          </v-col>-->

<!--          <v-col align-self="end">-->
<!--            <v-chip-->
<!--              class="text-uppercase ma-0"-->
<!--              color="primary"-->
<!--              label-->
<!--              small-->
<!--              @click.stop=""-->
<!--            >-->

<!--            </v-chip>-->
<!--          </v-col>-->
<!--        </v-row>-->
        <v-card-title class="text-right">{{ value.title }}</v-card-title>
      </v-img>
    </base-fenix-card>
  </v-col>
</template>

<script>
  export default {
    name: 'FenixFeedCard',

    props: {
      size: {
        type: Number,
        required: true,
      },
      value: {
        type: Object,
        default: () => ({}),
      },
      height: {
        type: Number,
        required: true,
        default: 450
      },
    },
  }
</script>

<style>
.v-image__image {
  transition: .3s linear;
}
</style>
