<template>
  <v-theme-provider :dark="dark">
    <div>
      <base-info-card
        :title="title"
        color="primary"
      >
        <slot />
      </base-info-card>

      <template v-for="({ icon, text, title: t }, i) in business">
        <base-avatar-card
          :key="i"
          :icon="icon"
          :outlined="false"
          :title="!dense ? t : undefined"
          color="transparent"
          horizontal
          space="0"
        >
          <!-- Do not use v-html for user -->
          <!-- provided values -->
          <div v-html="text" />
        </base-avatar-card>

        <v-divider
          v-if="i + 1 !== business.length"
          :key="`divider-${i}`"
          class="my-2"
        />
      </template>
    </div>
  </v-theme-provider>
</template>

<script>

  export default {
    name: 'BaseBusinessContact',

    props: {
      dark: Boolean,
      dense: Boolean,
      title: String,
    },

    data: () => ({
      business: [
        // {
        //   icon: 'mdi-map-marker-outline',
        //   title: 'Address',
        //   text: 'г. Москва, Кремель, д.1<br> г. Балашиха, ул. Ленина, д. 2',
        // },
        {
          icon: 'mdi-cellphone',
          title: 'Телефон',
          text: '+7(977) 353 67 66 <br> +7(499) 964 66 67',
        },
        {
          icon: 'mdi-email',
          title: 'Эл. почта',
          text: 'feniks-sr@yandex.ru',
        },
      ],

    }),
  }
</script>
