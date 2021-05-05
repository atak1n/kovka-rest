<template>
  <base-subtitle
    :v-bind="$attrs"
    class="text--primary"
    size="body-1"
  >
    <v-icon color="primary">mdi-currency-rub</v-icon>
    <strong>{{ price }}</strong>
  </base-subtitle>
</template>

<script>
export default {
  name: "ProductPrice",
  props: {
    price: {
      type: [String, Number],
      default: 0
    }
  }
}
</script>

<style scoped>

</style>
