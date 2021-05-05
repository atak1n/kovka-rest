<template>
  <v-theme-provider :dark="dark">
    <div>
      <base-img
        :src="require(`@/assets/${logo}`)"
        contain
        max-width="128"
        min-height="78"
        width="100%"
        class="mb-2"
      />

      <base-title
        size="body-1"
        space="4"
        :title="company.name"
        weight="regular"
      />

      <base-body :text="company.welcome" />

<!--      <base-btn-->
<!--        class="mb-12"-->
<!--        color="white"-->
<!--        outlined-->
<!--      >-->
<!--        More Info-->
<!--      </base-btn>-->
    </div>
  </v-theme-provider>
</template>

<script>
  import store from "~/myStore";

  export default {
    name: 'BaseInfo',

    props: {
      title: String,
      dark: Boolean,
    },

    data: () => ({
      logo: 'egg-logo-192.png',
      // logo: store.company.logo,
      company: store.company,
      contacts: store.contacts,

      business: [
        {
          icon: 'mdi-map-marker-outline',
          title: 'Address',
          text: '8553 N. Beach St. Ste. 227<br>Fort Worth, Texas 76137',
        },
        {
          icon: 'mdi-cellphone',
          title: 'Phone',
          text: '01 (800) 433 744<br>01 (800) 433 633',
        },
        {
          icon: 'mdi-email',
          title: 'Email',
          text: 'john@vuetifyjs.com<br>heather@vuetifyjs.com',
        },
      ],

    }),
  }
</script>
