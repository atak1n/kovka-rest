import Vue from 'vue'
import YmapPlugin from 'vue-yandex-maps'
import store from '~/myStore'

// настройки плагина
const settings = {
  apiKey: store.contacts.map.apiKey,
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1',
}

Vue.use(YmapPlugin, settings);
