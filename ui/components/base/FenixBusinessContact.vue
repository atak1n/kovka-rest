<template>
  <v-theme-provider :dark="dark">
    <div>
      <base-info-card
          :title="title"
          color="primary"
      >
        <slot />
      </base-info-card>

      <v-row>
        <v-col cols="12">
          <base-avatar-card
              :icon="contacts.address.icon"
              :outlined="false"
              dense
              color="transparent"
              horizontal
              space="0"
              size="60"
              :text="contacts.address.link"
          />
          <v-divider class="my-2"/>
<!--          <a-->
<!--              class="text-decoration-none"-->
<!--              :href="'tel:' + contacts.phoneNumbers.main">-->
            <base-avatar-card
                :icon="contacts.phoneNumbers.icon"
                :outlined="false"
                dense
                color="transparent"
                horizontal
                space="0"
                size="60"
            >
              <div>
                <a
                    :class="linkDecoration"
                    :href="'tel:' + contacts.phoneNumbers.phones[0]">
                  <span>
                    {{contacts.phoneNumbers.phones[0]}}
                  </span>
                </a>
                <br>
                <a
                    :class="linkDecoration"
                    :href="'tel:' + contacts.phoneNumbers.phones[1]">
                  <span>
                    {{contacts.phoneNumbers.phones[1]}}
                  </span>
                </a>
              </div>
            </base-avatar-card>
<!--          </a>-->
          <v-divider class="my-2"/>
          <a
              class="text-decoration-none"
              :href="'mailto:'+contacts.email.link">
            <base-avatar-card
                :icon="contacts.email.icon"
                :outlined="false"
                dense
                color="transparent"
                horizontal
                space="0"
                size="60"
                :text="contacts.email.link"
            />
          </a>
          <v-divider v-if="mobile" class="my-2"/>
        </v-col>

        <!--        <v-col cols="12" md="6">-->
        <!--          <a-->
        <!--              class="text-decoration-none"-->
        <!--              :href="'https://api.whatsapp.com/send?phone='-->
        <!--              + contacts.whatsapp.link"-->
        <!--          >-->
        <!--            <base-avatar-card-->
        <!--                :icon="contacts.whatsapp.icon"-->
        <!--                :outlined="false"-->
        <!--                dense-->
        <!--                color="transparent"-->
        <!--                horizontal-->
        <!--                space="0"-->
        <!--                size="60"-->
        <!--                :text="contacts.whatsapp.link"-->
        <!--            />-->
        <!--          </a>-->
        <!--          <v-divider class="my-2"/>-->
        <!--          <a-->
        <!--              class="text-decoration-none"-->
        <!--              :href="'https://t.me/' + contacts.telegram.link">-->
        <!--            <base-avatar-card-->
        <!--                :icon="contacts.telegram.icon"-->
        <!--                :outlined="false"-->
        <!--                dense-->
        <!--                color="transparent"-->
        <!--                horizontal-->
        <!--                space="0"-->
        <!--                size="60"-->
        <!--                :text="contacts.telegram.link"-->
        <!--            />-->
        <!--          </a>-->
        <!--          <v-divider class="my-2"/>-->
        <!--          <a-->
        <!--              class="text-decoration-none"-->
        <!--              :href="'https://viber.click/' + contacts.viber.link">-->
        <!--            <base-avatar-card-->
        <!--                :icon="contacts.viber.icon"-->
        <!--                :outlined="false"-->
        <!--                dense-->
        <!--                color="transparent"-->
        <!--                horizontal-->
        <!--                space="0"-->
        <!--                size="60"-->
        <!--                :text="contacts.viber.link"-->
        <!--                title="viber"-->
        <!--            />-->
        <!--          </a>-->

        <!--        </v-col>-->
      </v-row>
    </div>
  </v-theme-provider>
</template>

<script>

  export default {
    name: "FenixBusinessContact",

    props: {
      dark: Boolean,
      dense: Boolean,
      title: String,
    },

    // data: () => ({
    //   contacts: store.contacts,
    // }),
    computed: {
      mobile() {
        return this.$vuetify.breakpoint.mobile
      },
      linkDecoration() {
        if (this.dark) {
          return 'text-decoration-none grey--text text--lighten-1'
        } else {
          return 'text-decoration-none grey--text text--darken-1'
        }
      },
      contacts() {
        return this.$store.state.contacts
      }
    }
  }
</script>

<style scoped>

</style>
