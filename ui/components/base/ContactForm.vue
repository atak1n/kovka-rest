<template>
  <div>
    <v-form
      ref="form"
      v-model="valid"

    >
    <base-info-card
        :title="title"
        :subtitle="subtitle"
        space="4"
        color="primary"

    />

    <base-text-field
        v-model="form.name"
        label="Ваше имя"
        :rules="[rules.fieldCounter]"
        required
    />

    <base-text-field
        v-model="form.email"
        label="Электронная почта"
        :rules="[rules.mailCounter]"

    />

    <base-text-field
        v-model="form.phone"
        label="Телефон"
        :rules="[rules.fieldCounter, rules.phone]"
        required
    />

    <base-textarea
        v-model="form.text"
        class="mb-6"
        label="Ваш вопрос или предложение"
        :rules="[rules.textCounter]"
        required
        counter="300"
    />

    <base-btn
        :color="!theme.isDark ? 'accent' : 'white'"
        outlined
        :disabled="!valid"
        @click="submitMessage"

    >
      Отправить сообщение
    </base-btn>
    </v-form>
    <v-snackbar
      v-model="snackbar.show"
      :timeout="snackbar.timeout"
      :color="snackbar.color"
    >
      {{ snackbar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="snackbar.show = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
  import axios from 'axios'
  import store from "~/myStore";
  // import contacts from "@/store/contacts";

  export default {
    name: 'BaseContactForm',

    // Injected from the Vuetify Themeable mixin
    inject: ['theme'],

    props: {
      subtitle: String,
      title: {
        type: String,
        default: 'НАПИШИТЕ НАМ',
      },
    },
    data: () => ({
      contacts: store.contacts,
      valid: false,
      form: {
        name: '',
        email: '',
        phone: '',
        text: ''
      },
      snackbar: {
        timeout: 3000,
        show: false,
        color: 'green',
        text: 'Ваше сообщение отправленно успешно',
      },
      rules: {
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Не верный формат почты'
        },
        textCounter: value => value.length <= 300 || 'Максимальная длинна сообщения - 300 символов',
        fieldCounter: value => value.length <= 60 || 'Максимальная длинна 60 символов',
        mailCounter: value => value.length <= 40 || 'Максимальная длинна 40 символов',
        phone: value => {
          const pattern = /^\+?[78][-\s]?[-(\s]?\d{3}\)?[-\s]?\d{3}[-\s]?\d{2}[-\s]?\d{2}[\s]?$/
          return pattern.test(value) || 'Не верный формат телефонного номера'
        }
      }
    }),
    methods: {
      reset() {
        this.$refs.form.reset()
      },
      validate () {
        this.$refs.form.validate()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },

      snackbarSuccess() {
        this.snackbar.color = 'green'
        this.snackbar.text = 'Ваше сообщение отправленно успешно'
        this.snackbar.show = true
      },
      snackbarError() {
        this.snackbar.color = 'alert'
        this.snackbar.text = 'Сообщение не было отправлено :('
        this.snackbar.show = true
      },

      submitMessage(){
        // this.validate()
        // if (!this.valid) return

        const name = `<b>имя: </b>${this.form.name ? this.form.name : ''}\n`
        const email = `<b>почта: </b>${this.form.email ? this.form.email : ''}\n`
        const phone = `<b>телефон: </b>${this.form.phone ? this.form.phone : ''}\n`
        const text = `<b>сообщение: </b>${this.form.text ? this.form.text: ''}`
        const message = name + email + phone + text

        console.log(message)
        const path = `https://api.telegram.org/bot${this.contacts.telegramBot.token}/sendMessage`
        const formData = {
          chat_id: this.contacts.telegramBot.chId,
          text: message,
          parse_mode: 'html'
        }

        console.log(path, formData)
        axios.post(path, formData)
          .then(() => this.snackbarSuccess())
          .catch(() =>  this.snackbarError())
      }
    },
    computed: {}
  }
</script>
