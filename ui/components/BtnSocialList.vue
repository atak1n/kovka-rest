<template>
  <div>
    <v-btn
      :class="isMobile? 'text-body-1 ml-10' : 'text-h5 ml-10'"
      :href="'tel:'+ phoneNumbers.main"
      text
      :small="isMobile"
    >
      <!--          <v-icon v-text="'mdi-phone'"/>-->
      {{ phoneNumbers.main }}
    </v-btn>

    <v-btn
      :href="getHref(whatsapp)"
      :small="isMobile"
      icon
      class="mr-1"
    >
      <v-icon
        color="green"
        :size="isMobile ? 24 : 32"
        v-text="whatsapp.icon"
      />
    </v-btn>

    <v-btn
      :href="getHref(telegram)"
      :small="isMobile"
      icon
      class="mr-2"
    >
      <v-icon
        color="blue darken-2"
        :size="isMobile ? 24 : 32"
        v-text="telegram.icon"
      />
    </v-btn>

    <v-btn
      :href="getHref(viber)"
      :small="isMobile"
      icon
    >
      <v-img
        :src="require('assets/viber-purple.svg')"
        contain
        :height="isMobile ? 24 : 30"
        :width="isMobile ? 24 : 30"
      />
    </v-btn>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "BtnSocialList",

  methods: {
    getHref(contact) {
      return `${contact.href}${contact.link}`
    }
  },

  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.mobile
    },
    ...mapState({
      phoneNumbers: state => state.contacts.phoneNumbers,
      whatsapp: state => state.contacts.whatsapp,
      telegram: state => state.contacts.telegram,
      viber: state => state.contacts.viber,
    })
  },


}
</script>

<style scoped>

</style>
