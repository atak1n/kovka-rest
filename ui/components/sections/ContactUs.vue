<template>
  <v-theme-provider dark>
    <base-section
      id="contact-us"
      class="primary"
      space="40"
    >
      <v-container>
        <v-row justify="center">
          <v-col cols="10">
            <base-title
              :space="$vuetify.breakpoint.mdAndUp ? 0 : 4"
              title="ЕСТЬ ВОПРОСЫ? ДАЙТЕ НАМ ЗНАТЬ!"
            />

            <base-body space="0">
              <span class="white--text">
                {{ contactUsMessage }}
              </span>
            </base-body>
          </v-col>

          <v-col
            cols="12"
            md="2"
          >
            <base-btn
              :block="$vuetify.breakpoint.smAndDown"
              color="white"
              to="/contact-us#contacts"
              large
              outlined
            >
              Напишите нам
            </base-btn>
          </v-col>
        </v-row>
      </v-container>
    </base-section>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'SectionContactUs',
    computed: {
      contactUsMessage() {
        return this.$store.state.company.contactUsMessage
      }
    }

  }
</script>
