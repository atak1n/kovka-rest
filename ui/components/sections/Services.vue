<template>
  <base-section
    id="Services"
  >
    <base-section-heading :title="title">
      {{ annotate }}
    </base-section-heading>
    <v-responsive
      class="mx-auto"
      max-width="1350"
    >
      <v-container fluid>
        <v-row justify="center">
          <v-col
            v-for="(service, i) in services"
            :key="i"
            cols="12"
            sm="4"
            md="3"
          >
            <base-info-card
              align="center"
              v-bind="service"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-responsive>
  </base-section>
</template>

<script>
import { mapState } from 'vuex'

  export default {
    name: 'SectionServices',
    computed: {
      ...mapState({
        title: state => state.services.title,
        annotate: state => state.services.annotate,
        services: state => state.services.services,
      })
    },

  }
</script>
