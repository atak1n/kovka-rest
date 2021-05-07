<template>
  <v-theme-provider dark>
    <section id="hero">
      <v-img
        :height="minHeight"
        :src="require('~/assets/home_hero_2.jpg')"
        class="white--text"
        gradient="180deg, rgba(2,0,36,1) 0%, rgba(255,192,0,0.6334733722590599) 0%, rgba(244,81,30,1) 100%, rgba(55,55,145,1) 100%"
      >
        <v-container class="fill-height px-4 py-auto">
          <v-responsive
            class="d-flex align-center"
            height="100%"
            max-width="800"
            width="100%"
          >
            <!--          <base-heading title="ФЕНИКС СТАЛЬНЫЕ РЕШЕНИЯ" />-->
            <base-heading space="1"><span>{{ name }}</span></base-heading>
            <base-heading space="1">
              <p class="font-weight-light text-h5">{{ slogan }}</p>
            </base-heading>

            <base-heading space="1">
              <p class="base-body body-1 light--text  text-left">{{ about }}</p>
            </base-heading>


          </v-responsive>
        </v-container>
      </v-img>
    </section>
  </v-theme-provider>

</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'SectionHero',
  provide: {
    theme: { isDark: true },
  },

  data: () => ({
    // contacts: {...store.contacts},
    // company: {...store.company},
  }),
  methods: {
    // getHref(contact) {
    //   return `${contact.href}${contact.link}`
    // }
  },
  computed: {
    minHeight () {
      const height = this.$vuetify.breakpoint.mdAndUp ? '50vh' : '50vh'
      return `calc(${height} + ${this.$vuetify.application.top}px)`
    },
    ...mapState({
      // contacts: state => state.contacts.contacts,
      name: state => state.company.name,
      slogan: state => state.company.slogan,
      about: state => state.company.about,

    })

    // heroHeight() {
    //
    //   return this.$vuetify.breakpoint.height / 2 + this.$vuetify.application.top
    // }
  },
}
</script>
