<template>
  <v-navigation-drawer
    bottom
    color="transparent"
    fixed
    height="auto"
    overlay-color="secondary"
    overlay-opacity=".8"
    temporary
    v-bind="$attrs"
    v-on="$listeners"
  >
    <v-list
      color="white"
      shaped
    >
      <v-list-item
        nuxt
        v-for="item in items"
        :key="item.name"
        :to="item.path"
        :exact="item.name === 'index'"
        color="primary"
      >
        <v-list-item-content>
          <v-list-item-title v-text="item.alias" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>

  export default {
    name: 'HomeDrawer',

    props: {
      items: {
        type: Array,
        default: () => ([]),
      },
    },
  }
</script>
