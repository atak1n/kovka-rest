<template>
  <v-theme-provider :dark="dark">
    <div>
      <base-info-card
        title="МЫ ВСЕГДА ГОТОВЫ К СОТРУДНИЧЕСТВУ"
        pace="6"
      >
        Мы всегда открыты для сотрудничества и готовы выполнить работу любой сложности.
        Широкий спектр услуг и гарантия качества.
      </base-info-card>

      <base-business-contact/>
    </div>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'BaseBusinessInfo',

    props: { dark: Boolean },

    data: () => ({
      business: [
        // {
        //   icon: 'mdi-map-marker-outline',
        //   title: 'Address',
        //   text: '8553 N. Beach St. Ste. 227<br>Fort Worth, Texas 76137',
        // },
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
