export const state = () => ({
  title: 'Каталог',
  annotate: '',
  products: [
    {
      title: 'Кованые ворота',
      // поле slug будет в URL адресе прим.
      // https://fenix-sr.ru/product_category/product_type/product_id/ или
      // https://fenix-sr.ru/vorota/vorota_prostie/1/
      slug: 'vorota',
      img: {
        preview: 'gallery/vorota/01_vorota_400x300.jpg',
        original:'gallery/vorota/01_vorota_1000x750.jpg',
      },

      text: 'Ворота - являются визитной карточкой вашего дома, которая определяет статус и вкус хозяина. Кованые ворота на фоне других выделяются высокой декоративностью и художественной ценностью',
      metaData: {
        meta: [
          { hid:'description-contacts', name: 'description', content: 'Купить кованые металлические ворота для дома, ворота для забора на заказ'},
          { name: 'keywords', content: 'купить кованые ворота не дорого, ковка, художественная, кованые, ворота, цена, стоимость, забор, дом'},
        ],
        title: 'Купить кованые ворота в Москве и МО, разработка индивидуального дизайна ковки –от компании Феникс Стальное Решение'
      },
      price: 'от 8000р кв.м' ,
      types: [
        {
          title: 'Кованые ворота распашные',
          slug: 'vorota_prostie',
          img: {
            preview: 'gallery/vorota/02_vorota_400x300.jpg',
            original: 'gallery/vorota/02_vorota_1000x750.jpg',
          },
          products: [
            {
              id: 1,
              title: 'Распашные кованые ворота',
              text: 'Распашные №1',
              img: {
                preview: 'gallery/vorota/01_vorota_400x300.jpg',
                original: 'gallery/vorota/01_vorota_1000x750.jpg',
              },
            },
            {
              id: 2,
              title: 'Распашные кованые ворота',
              text: 'Распашные №2',
              img: {
                preview: 'gallery/vorota/02_vorota_400x300.jpg',
                original: 'gallery/vorota/02_vorota_1000x750.jpg',
              },
            },
            {
              id: 3,
              title: 'Распашные кованые ворота',
              text: 'Распашные №3',
              img: {
                preview: 'gallery/vorota/03_vorota_400x300.jpg',
                original: 'gallery/vorota/03_vorota_1000x750.jpg',
              },
            },

            {
              id: 4,
              title: 'Распашные кованые ворота',
              text: 'Распашные №4',
              img: {
                preview: 'gallery/vorota/04_vorota_400x300.jpg',
                original: 'gallery/vorota/04_vorota_1000x750.jpg',
              },
            },


            {
              id: 5,
              title: 'Распашные кованые ворота',
              text: 'Распашные №5',
              img: {
                preview: 'gallery/vorota/05_vorota_400x300.jpg',
                original: 'gallery/vorota/05_vorota_1000x750.jpg',
              },
            },
          ]
        }
      ]

    },
    {
      title: 'Кованые навесы',
      slug: 'navesi',
      img: {
        preview: 'gallery/naves/arch/45_arch_400x300.jpg',
        original: 'gallery/naves/arch/45_arch_1000x750.jpg',
      },
      text: 'Кованые навесы – роскошь, оригинальность, красота, изящество и особый шик архитектурного ансамбля. ' +
        'Такие изделия становятся настоящим украшением парков, частных участков, фасадов жилых, административных, офисных зданий, коттеджей и маленьких дачных домиков.',
      metaData: {
        meta: [
          {
            hid: 'description-contacts',
            name: 'description',
            content: 'Купить кованые навесы изготовления на заказ с доставкой и установкой в Москве и Московской области. Фотографии и эскизы кованых навесов.'
          },
          {
            name: 'keywords',
            content: 'купить кованые навесы не дорого, ковка, художественная, кованые, навесы, крыльцо, сад, бассейн, арочные, поликарбонат, беседка, крыльцо, цена, стоимость, kovka-mo,кованые навесы,навесы одинцово'
          },
        ],
        title: 'Купить кованые навесы - цена и фото, изготовление на заказ в Москве и МО – ковка – от компании Феникс Стальное Решение'
      },
      price: 'от 3500р кв.м',
      types: [
        /////////////////////////Навесы////////////////////////////////////
        {
          title: 'Кованые навесы арочные',
          slug: 'navesi_2',
          img: {
            preview: 'gallery/naves/arch/45_arch_400x300.jpg',
            original: 'gallery/naves/arch/45_arch_1000x750.jpg',
          },
          products: [
            {
              id: 1030,
              title: 'Кованые навесы арочные',
              text: 'Кованые навесы  арочные №1',
              img: {
                preview: 'gallery/naves/arch/01_arched_400x300.jpg',
                original: 'gallery/naves/arch/01_arched_1000x750.jpg',
              },
            },
            {
              id: 1031,
              title: 'Кованые навесы арочные',
              text: 'Кованые навесы  арочные №2',
              img: {
                preview: 'gallery/naves/arch/02_arched_400x300.jpg',
                original: 'gallery/naves/arch/02_arched_1000x750.jpg',
              },
            },
          ]
        },

        {
          title: 'Кованые навесы полуарочные',
          slug: 'navesi_4',
          img: {
            preview: 'gallery/naves/semiarch/01_semi-arched_400x300.jpg',
            original: 'gallery/naves/semiarch/01_semi-arched_1000x750.jpg',
          },
          products: [
            {
              id: 1053,
              title: 'Кованые навесы полуарочные',
              text: 'Кованые навесы  полуарочные №1',
              img: {
                preview: 'gallery/naves/semiarch/01_semi-arched_400x300.jpg',
                original: 'gallery/naves/semiarch/01_semi-arched_1000x750.jpg',
              },
            },
            {
              id: 1054,
              title: 'Кованые навесы полуарочные',
              text: 'Кованые навесы  полуарочные №2',
              img: {
                preview: 'gallery/naves/semiarch/02_semi-arched_400x300.jpg',
                original: 'gallery/naves/semiarch/02_semi-arched_1000x750.jpg',
              },
            },
            {
              id: 1055,
              title: 'Кованые навесы полуарочные',
              text: 'Кованые навесы  полуарочные №3',
              img: {
                preview: 'gallery/naves/semiarch/03_semi-arched_400x300.jpg',
                original: 'gallery/naves/semiarch/03_semi-arched_1000x750.jpg',
              },
            }
          ]
        },
      ]
    },

    {
      title: 'Кованые люстры',
      slug: 'lustra',
      img: {
        preview: 'gallery/lustra/1_lustra_400x300.jpg',
        original:'gallery/lustra/1_lustra_1000x750.jpg',
      },
      text: 'Кованые люстры — классика в мире интерьерного и уличного освещения. Они применяются уже несколько веков, такие светильники со свечами украшали средневековые замки.' +
        ' Современные кованые люстры с разнообразными источниками света также популярны. Они сочетаются со многими стилями оформления, придавая помещению или улице особый шарм',
      metaData: {
        meta: [
          { hid:'description-contacts', name: 'description', content: 'Купить кованые люстры в Москве и Московской области, Фотографии с ценами.'},
          { name: 'keywords', content: 'купить кованые люстры не дорого,  ковка, художественная, кованые, люстры, цена, стоимость, kovka-mo,кованые люстры,люстры одинцово'},
        ],
        title: 'Купить кованые люстры - цена и фото, изготовление на заказ в Москве и МО – ковка – от компании Феникс Стальное Решение'
      },
      price: 'от 20000 за шт.',
      types: [
        {
          title: 'Кованые люстры',
          slug: 'lustra_1',
          img: {
            preview: 'gallery/lustra/1_lustra_400x300.jpg',
            original:'gallery/lustra/1_lustra_1000x750.jpg',
          },
          products: [
            {
              id: 152,
              title: 'Кованые люстры',
              text: 'Кованые люстры №1',
              img: {
                preview: 'gallery/lustra/1_lustra_400x300.jpg',
                original:'gallery/lustra/1_lustra_1000x750.jpg',
              },
            },
            {
              id: 153,
              title: 'Кованые люстры',
              text: 'Кованые люстры №2',
              img: {
                preview: 'gallery/lustra/2_lustra_400x300.jpg',
                original:'gallery/lustra/2_lustra_1000x750.jpg',
              },
            },
          ]
        },

      ]
    },


  ]

})
