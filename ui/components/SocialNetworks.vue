<template>
  <base-info-card title="Мы в социальных сетях">
    <v-row dense>
      <v-col cols="auto">
        <!--        <v-tooltip top>-->
        <!--          <template v-slot:activator="{ on }">-->
        <base-btn-social
          x-large
          :color="lightTheme ? 'grey--text' : 'white' "

          :href="getHref(viber)"
        >
          <v-img
            :src="require(`~/assets/${ lightTheme ? viberIcon.grey : viberIcon.white }`)"
            contain
            height="32"
            max-width="32"
          />
        </base-btn-social>
        <!--          </template>-->
        <!--          <span>{{ viber.title }}</span>-->
        <!--        </v-tooltip>-->
      </v-col>

      <v-col
        v-for="(social, i) in socials"
        :key="i"
        cols="auto"
      >

        <!--        <v-tooltip top>-->
        <!--          <template v-slot:activator="{ on }">-->

        <base-btn-social
          x-large
          :icon="social.icon"
          :color="lightTheme ? 'grey--text' : 'white' "
          :href="getHref(social)"
        />

        <!--          </template>-->
        <!--          <span>{{ social.title }}</span>-->
        <!--        </v-tooltip>-->

      </v-col>
    </v-row>
  </base-info-card>
</template>

<script>
// import contacts from "~/myStore/contacts";
import { mapState } from 'vuex'

export default {
  name: "SocialNetworks",
  props: {
    lightTheme: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      viberIcon: {
        white: 'viber-light.svg',
        grey: 'viber-grey.svg'
      }
    }
  },
  computed: {
    ...mapState({
      whatsapp: state => state.contacts.whatsapp,
      telegram: state => state.contacts.telegram,
      instagram: state => state.contacts.instagram,
      vk: state => state.contacts.vk,
      profi: state => state.contacts.profi,
      viber: state => state.contacts.viber,
    }),
    socials() {
      return [
        this.whatsapp,
        this.telegram,
        this.instagram,
        this.vk,
        this.profi,
      ]
    }
  },
  methods: {
    getHref(contact) {
      return `${contact.href}${contact.link}`
    },

  },

}
</script>

<style scoped>

</style>
