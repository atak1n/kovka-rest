import Vue from 'vue'

import company from "./company"
import contacts from "./contacts"
import services from "./services"
import features from "./features"
import projects from "./projects"
import gallery from "./gallery"
import pagesMeta from "./pagesMeta"
import products from "./products";



const store = new Vue({
  name: 'store',
  data: {
    // company: {
    //   name: 'СТАЛЬНОЕ РЕШЕНИЕ',
    //   slogan: 'ДОСТУПНО, КАЧЕСТВЕННО, НАДЕЖНО',
    //   about: 'Наши навесы - это надёжность, качество,' +
    //     ' современный дизайн вашего дома по разумным ценам.' +
    //     ' Мы молодая и динамично развивающаяся компания, которая' +
    //     ' занимается изготавливаем навесов различной степени сложности' +
    //     ' с индивидуальным подходом к каждому заказчику.',
    // },
    company: company,

    contacts: contacts,

    services: services ,

    features: features,

    projects: projects,

    gallery: gallery,

    products: products,

    pagesMeta: pagesMeta,

  },
})


// export default store
