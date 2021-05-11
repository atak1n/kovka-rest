<template>
  <v-theme-provider dark>
    <base-section
      id="info-alt"
      class="grey darken-4"
    >
      <v-responsive
        class="mx-auto"
        max-width="1400"
      >
        <v-container fluid>
          <v-row justify="space-between">
            <v-col
              cols="12"
              md="3"
            >
              <base-info />
            </v-col>

            <v-col
              cols="12"
              md="3"
            >
              <base-fenix-business-contact title="Контакты" dense dark/>
            </v-col>

<!--            <v-col-->
<!--              cols="12"-->
<!--              md="3"-->
<!--            >-->
<!--              <info-features />-->
<!--            </v-col>-->

            <v-col
              cols="12"
              md="3"
            >
              <SocialNetworks/>
            </v-col>
          </v-row>
        </v-container>
      </v-responsive>
    </base-section>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'SectionInfo',

    components: {
      // InfoFeatures: () => import('@/components/InfoFeatures'),
      // SocialNetworks: () => import('~/components/SocialNetworks'),
    },
  }
</script>

<style lang="sass">
  #info-alt a
    text-decoration: none
</style>
