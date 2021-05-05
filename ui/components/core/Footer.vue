<template>
  <v-footer
    app
    id="home-footer"
    color="grey darken-4"
    dark
    absolute
  >
    <v-container>
      <v-row>

        <v-col
          cols="12"
          md="6"
        >
          <a href="https://webmaster.yandex.ru/siteinfo/?site=https://kovka-mo.ru">
            <v-img
              src="https://yandex.ru/cycounter?https://kovka-mo.ru&theme=light&lang=ru"
              height="0"
              max-width="0"
            />
          </a>
        </v-col>


        <v-col
          class="text-center text-md-right"
          cols="12"
          md="6"
        >
          <v-icon>mdi-target-variant</v-icon>
          Ataka Studio <span class="ml-3">{{ date }}</span>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'HomeFooter',

  data: () => ({
    date: ''
  }),
  methods: {
    setDate() {
      this.date = new Date().getFullYear()
    }
  },
  created() {
    this.setDate()
  }
}
</script>

<style lang="sass">
#home-footer a
  text-decoration: none
</style>
