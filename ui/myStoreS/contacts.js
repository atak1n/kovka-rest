const contacts = {
  phoneNumbers: {
    title: 'Телефоны',
    phones: [
      '8(499) 964 66 67',
      '8(977) 353 67 66',
    ],
    icon: 'mdi-cellphone',
    main: '+7(977) 353 67 66',
    href: 'tel:',
  },
  email: {
    title: 'Эл. почта',
    link: 'kovka@feniks-sr.ru',
    icon: 'mdi-email',
    href: 'mailto:'
  },
  whatsapp: {
    title: 'WhatsApp',
    link: '+79773536766',
    icon: 'mdi-whatsapp',
    href: 'https://api.whatsapp.com/send?phone=',
  },

  telegram: {
    title: 'Telegram',
    link: 'feniks_sr',
    icon: 'mdi-telegram',
    href: 'https://t.me/',
  },
  viber: {
    title: 'Viber',
    link: '+79773536766',
    icon: 'mdi-whatsapp',
    href: 'https://viber.click/',
  },
  instagram: {
    title: 'Instagram',
    link: 'fenikssr',
    icon: 'mdi-instagram',
    href: 'https://instagram.com/',
  },
  vk: {
    title: 'Вконтакте',
    link: 'fenikssr',
    icon: 'mdi-vk',
    href: 'https://vk.com/',
  },
  profi: {
    title: 'profi.ru',
    link: 'RevchukVP',
    icon: 'mdi-account',
    href: 'https://profi.ru/profile/',
  },
  // avito: {
  //   title: 'avito.ru',
  //   link: 'RevchukVP',
  //   icon: 'mdi-account',
  //   href: 'https://profi.ru/profile/',
  // },

  address: {
    title: 'Адрес',
    link: 'Россия, г. Балашиха, микрорайон Северный, д. 54',

    icon: 'mdi-map-marker-outline',
  },
  map: {
    title: 'Наши координаты',
    coords: [55.794467, 38.009256],
    apiKey: '5d8955cd-bd38-47e1-b600-49f9bc950a36',
    zoom: 16,

    controls: [
      'zoomControl',
      'searchControl',
      'typeSelector',
      // 'fullscreenControl',
      'routeButtonControl'
    ]

  },
  telegramBot: {
    token: '1351875952:AAFBzLrS_meLd72eLtymicq1kKpAYbk-U0g',
    chId: '-1001228590282'
  },
  yaMetrika: {
    token: '68280775',
  }
}

export default contacts
