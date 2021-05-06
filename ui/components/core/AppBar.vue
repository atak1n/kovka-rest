<template>
  <div>
    <v-app-bar
      id="home-app-bar"
      app
      clipped-left
      color="white"
      elevation="1"
      extension-height="28"
    >
      <base-img
        :src="require('@/assets/egg-logo.png')"
        contain
        max-width="60"
        class="mr-3 v-card--link"
        @click="$vuetify.goTo(0)"
        alt="вверх страницы"
      />

      <v-toolbar-title class=" v-card--link" @click="$router.push({path: '/'})">
        {{ companyName }}
      </v-toolbar-title>

      <v-spacer />

      <BtnSocialList v-show="!isMobile"/>

      <v-spacer />

      <div>
        <v-tabs
          class="hidden-sm-and-down"
          optional
        >
          <v-tab
            v-for="(item, i) in items"
            :key="i"
            nuxt
            :to="item.path"
            :exact="item.name === 'index'"
            :ripple="false"
            active-class="text--primary"
            class="font-weight-bold"
            min-width="96"
            text
            v-html="item.alias"
          />
        </v-tabs>
      </div>

      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      />

      <template v-if="isMobile" v-slot:extension>

        <BtnSocialList />

      </template>

    </v-app-bar>

    <home-drawer
      v-model="drawer"
      :items="items"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BtnSocialList from "~/components/BtnSocialList"
import HomeDrawer from './Drawer'

export default {
  name: 'HomeAppBar',

  components: {
    BtnSocialList,
    HomeDrawer,
  },

  data: () => ({
    drawer: null,
    items: [
      {
        path: '/',
        name: 'index',
        alias: 'главная'
      },
      {
        path: '/products',
        name: 'products',
        alias: 'продукция'
      },
      // {
      //   path: '/gallery',
      //   name: 'gallery',
      //   alias: 'наши работы'
      // },

      {
        path: '/contact-us',
        name: 'contacts',
        alias: 'контакты'
      },

    ],
    // companyName: store.company.name,
    // phone: store.contacts.phoneNumbers.main,
  }),
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.mobile
    },
    ...mapState({
      companyName: state => state.company.name,
      phone: state => state.contacts.phoneNumbers.main,
    })
  }
}
</script>

<style lang="sass">
#home-app-bar
  .v-tabs-slider
    max-width: 24px
    margin: 0 auto

  .v-tab
    &::before
      display: none
</style>
