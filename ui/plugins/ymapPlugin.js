import Vue from 'vue'
import YmapPlugin from 'vue-yandex-maps'
// import store from '~/myStore'

// настройки плагина
const settings = {
  apiKey: '5d8955cd-bd38-47e1-b600-49f9bc950a36',
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1',
}

Vue.use(YmapPlugin, settings);
