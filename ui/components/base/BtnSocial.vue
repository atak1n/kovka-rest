<template>
  <v-btn
    :color="color"
    class="font-weight-bold"
    v-bind="$attrs"
    v-on="$listeners"
    icon
  >
    <slot>
      <v-icon>{{ icon }}</v-icon>
    </slot>
  </v-btn>
</template>

<script>
  export default {
    name: 'BaseBtnSocial',

    props: {
      color: {
        type: String,
        default: 'primary',
      },
      depressed: {
        type: Boolean,
        default: true,
      },
      minWidth: {
        type: [Number, String],
        default: 164,
      },
      icon: {
        type: String,
        default: 'mdi-star'
      }
    },
  }
</script>