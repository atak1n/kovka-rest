
const products = {
  title: 'Каталог',
  annotate: '',
  products: [
    // {
    //   title: 'Кованые ворота',
    //   // поле slug будет в URL адресе прим.
    //   // https://fenix-sr.ru/product_category/product_type/product_id/ или
    //   // https://fenix-sr.ru/vorota/vorota_prostie/1/
    //   slug: 'vorota',
    //   img: {
    //     preview: 'gallery/vorota/01_vorota_400x300.jpg',
    //     original:'gallery/vorota/01_vorota_1000x750.jpg',
    //   },
    //
    //   text: 'Ворота - являются визитной карточкой вашего дома, которая определяет статус и вкус хозяина. Кованые ворота на фоне других выделяются высокой декоративностью и художественной ценностью',
    //   metaData: {
    //     meta: [
    //       { hid:'description-contacts', name: 'description', content: 'Купить кованые металлические ворота для дома, ворота для забора на заказ'},
    //       { name: 'keywords', content: 'купить кованые ворота не дорого, ковка, художественная, кованые, ворота, цена, стоимость, забор, дом'},
    //     ],
    //     title: 'Купить кованые ворота в Москве и МО, разработка индивидуального дизайна ковки –от компании Феникс Стальное Решение'
    //   },
    //   price: 'от 8000р кв.м' ,
    //   types: [
    //     {
    //       title: 'Кованые ворота распашные',
    //       slug: 'vorota_prostie',
    //       img: {
    //         preview: 'gallery/vorota/02_vorota_400x300.jpg',
    //         original: 'gallery/vorota/02_vorota_1000x750.jpg',
    //       },
    //       products: [
    //         {
    //           id: 1,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №1',
    //           img: {
    //             preview: 'gallery/vorota/01_vorota_400x300.jpg',
    //             original: 'gallery/vorota/01_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 2,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №2',
    //           img: {
    //             preview: 'gallery/vorota/02_vorota_400x300.jpg',
    //             original: 'gallery/vorota/02_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 3,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №3',
    //           img: {
    //             preview: 'gallery/vorota/03_vorota_400x300.jpg',
    //             original: 'gallery/vorota/03_vorota_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 4,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №4',
    //           img: {
    //             preview: 'gallery/vorota/04_vorota_400x300.jpg',
    //             original: 'gallery/vorota/04_vorota_1000x750.jpg',
    //           },
    //         },
    //
    //
    //         {
    //           id: 5,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №5',
    //           img: {
    //             preview: 'gallery/vorota/05_vorota_400x300.jpg',
    //             original: 'gallery/vorota/05_vorota_1000x750.jpg',
    //           },
    //         },
    //
    //
    //         {
    //           id: 6,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №6',
    //           img: {
    //             preview: 'gallery/vorota/06_vorota_400x300.jpg',
    //             original: 'gallery/vorota/06_vorota_1000x750.jpg',
    //           },
    //         },
    //
    //
    //         {
    //           id: 7,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №7',
    //           img: {
    //             preview: 'gallery/vorota/07_vorota_400x300.jpg',
    //             original: 'gallery/vorota/07_vorota_1000x750.jpg',
    //           },
    //         },
    //
    //
    //         {
    //           id: 8,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №8',
    //           img: {
    //             preview: 'gallery/vorota/08_vorota_400x300.jpg',
    //             original: 'gallery/vorota/08_vorota_1000x750.jpg',
    //           },
    //         },
    //
    //
    //         {
    //           id: 9,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №9',
    //           img: {
    //             preview: 'gallery/vorota/09_vorota_400x300.jpg',
    //             original: 'gallery/vorota/09_vorota_1000x750.jpg',
    //           },
    //         },
    //
    //
    //         {
    //           id: 10,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №10',
    //           img: {
    //             preview: 'gallery/vorota/10_vorota_400x300.jpg',
    //             original: 'gallery/vorota/10_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130011,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №11',
    //           img: {
    //             preview: 'gallery/vorota/11_vorota_400x300.jpg',
    //             original: 'gallery/vorota/11_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130012,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №12',
    //           img: {
    //             preview: 'gallery/vorota/12_vorota_400x300.jpg',
    //             original: 'gallery/vorota/12_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130013,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №13',
    //           img: {
    //             preview: 'gallery/vorota/13_vorota_400x300.jpg',
    //             original: 'gallery/vorota/13_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130014,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №14',
    //           img: {
    //             preview: 'gallery/vorota/14_vorota_400x300.jpg',
    //             original: 'gallery/vorota/14_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130015,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №15',
    //           img: {
    //             preview: 'gallery/vorota/15_vorota_400x300.jpg',
    //             original: 'gallery/vorota/15_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130016,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №16',
    //           img: {
    //             preview: 'gallery/vorota/16_vorota_400x300.jpg',
    //             original: 'gallery/vorota/16_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130017,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №17',
    //           img: {
    //             preview: 'gallery/vorota/17_vorota_400x300.jpg',
    //             original: 'gallery/vorota/17_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130018,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №18',
    //           img: {
    //             preview: 'gallery/vorota/18_vorota_400x300.jpg',
    //             original: 'gallery/vorota/18_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130019,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №19',
    //           img: {
    //             preview: 'gallery/vorota/19_vorota_400x300.jpg',
    //             original: 'gallery/vorota/19_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130020,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №20',
    //           img: {
    //             preview: 'gallery/vorota/20_vorota_400x300.jpg',
    //             original: 'gallery/vorota/20_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130021,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №21',
    //           img: {
    //             preview: 'gallery/vorota/21_vorota_400x300.jpg',
    //             original: 'gallery/vorota/21_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130022,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №22',
    //           img: {
    //             preview: 'gallery/vorota/22_vorota_400x300.jpg',
    //             original: 'gallery/vorota/22_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130023,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №23',
    //           img: {
    //             preview: 'gallery/vorota/23_vorota_400x300.jpg',
    //             original: 'gallery/vorota/23_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130024,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №24',
    //           img: {
    //             preview: 'gallery/vorota/24_vorota_400x300.jpg',
    //             original: 'gallery/vorota/24_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130025,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №25',
    //           img: {
    //             preview: 'gallery/vorota/25_vorota_400x300.jpg',
    //             original: 'gallery/vorota/25_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130026,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №26',
    //           img: {
    //             preview: 'gallery/vorota/26_vorota_400x300.jpg',
    //             original: 'gallery/vorota/26_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1300127,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №27',
    //           img: {
    //             preview: 'gallery/vorota/27_vorota_400x300.jpg',
    //             original: 'gallery/vorota/27_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130028,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №28',
    //           img: {
    //             preview: 'gallery/vorota/28_vorota_400x300.jpg',
    //             original: 'gallery/vorota/28_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130029,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №29',
    //           img: {
    //             preview: 'gallery/vorota/29_vorota_400x300.jpg',
    //             original: 'gallery/vorota/29_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130030,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №30',
    //           img: {
    //             preview: 'gallery/vorota/30_vorota_400x300.jpg',
    //             original: 'gallery/vorota/30_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130031,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №31',
    //           img: {
    //             preview: 'gallery/vorota/31_vorota_400x300.jpg',
    //             original: 'gallery/vorota/31_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130032,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №32',
    //           img: {
    //             preview: 'gallery/vorota/32_vorota_400x300.jpg',
    //             original: 'gallery/vorota/32_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130033,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №33',
    //           img: {
    //             preview: 'gallery/vorota/33_vorota_400x300.jpg',
    //             original: 'gallery/vorota/33_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130034,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №34',
    //           img: {
    //             preview: 'gallery/vorota/34_vorota_400x300.jpg',
    //             original: 'gallery/vorota/34_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130035,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №35',
    //           img: {
    //             preview: 'gallery/vorota/35_vorota_400x300.jpg',
    //             original: 'gallery/vorota/35_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130036,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №36',
    //           img: {
    //             preview: 'gallery/vorota/36_vorota_400x300.jpg',
    //             original: 'gallery/vorota/36_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130037,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №37',
    //           img: {
    //             preview: 'gallery/vorota/37_vorota_400x300.jpg',
    //             original: 'gallery/vorota/37_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130038,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №38',
    //           img: {
    //             preview: 'gallery/vorota/38_vorota_400x300.jpg',
    //             original: 'gallery/vorota/38_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130039,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №39',
    //           img: {
    //             preview: 'gallery/vorota/39_vorota_400x300.jpg',
    //             original: 'gallery/vorota/39_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130040,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №40',
    //           img: {
    //             preview: 'gallery/vorota/40_vorota_400x300.jpg',
    //             original: 'gallery/vorota/40_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130041,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №41',
    //           img: {
    //             preview: 'gallery/vorota/41_vorota_400x300.jpg',
    //             original: 'gallery/vorota/41_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130042,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №42',
    //           img: {
    //             preview: 'gallery/vorota/42_vorota_400x300.jpg',
    //             original: 'gallery/vorota/42_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130043,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №43',
    //           img: {
    //             preview: 'gallery/vorota/43_vorota_400x300.jpg',
    //             original: 'gallery/vorota/43_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130044,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №44',
    //           img: {
    //             preview: 'gallery/vorota/44_vorota_400x300.jpg',
    //             original: 'gallery/vorota/44_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130045,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №45',
    //           img: {
    //             preview: 'gallery/vorota/45_vorota_400x300.jpg',
    //             original: 'gallery/vorota/45_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130046,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №46',
    //           img: {
    //             preview: 'gallery/vorota/46_vorota_400x300.jpg',
    //             original: 'gallery/vorota/46_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130047,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №47',
    //           img: {
    //             preview: 'gallery/vorota/47_vorota_400x300.jpg',
    //             original: 'gallery/vorota/47_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130048,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №48',
    //           img: {
    //             preview: 'gallery/vorota/48_vorota_400x300.jpg',
    //             original: 'gallery/vorota/48_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130049,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №49',
    //           img: {
    //             preview: 'gallery/vorota/49_vorota_400x300.jpg',
    //             original: 'gallery/vorota/49_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130050,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №50',
    //           img: {
    //             preview: 'gallery/vorota/50_vorota_400x300.jpg',
    //             original: 'gallery/vorota/50_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130051,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №51',
    //           img: {
    //             preview: 'gallery/vorota/51_vorota_400x300.jpg',
    //             original: 'gallery/vorota/51_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130052,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №52',
    //           img: {
    //             preview: 'gallery/vorota/52_vorota_400x300.jpg',
    //             original: 'gallery/vorota/52_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130053,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №53',
    //           img: {
    //             preview: 'gallery/vorota/53_vorota_400x300.jpg',
    //             original: 'gallery/vorota/53_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130054,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №54',
    //           img: {
    //             preview: 'gallery/vorota/54_vorota_400x300.jpg',
    //             original: 'gallery/vorota/54_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130055,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №55',
    //           img: {
    //             preview: 'gallery/vorota/55_vorota_400x300.jpg',
    //             original: 'gallery/vorota/55_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130056,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №56',
    //           img: {
    //             preview: 'gallery/vorota/56_vorota_400x300.jpg',
    //             original: 'gallery/vorota/56_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130057,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №57',
    //           img: {
    //             preview: 'gallery/vorota/57_vorota_400x300.jpg',
    //             original: 'gallery/vorota/57_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130058,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №58',
    //           img: {
    //             preview: 'gallery/vorota/58_vorota_400x300.jpg',
    //             original: 'gallery/vorota/58_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130059,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №59',
    //           img: {
    //             preview: 'gallery/vorota/59_vorota_400x300.jpg',
    //             original: 'gallery/vorota/59_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130060,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №60',
    //           img: {
    //             preview: 'gallery/vorota/60_vorota_400x300.jpg',
    //             original: 'gallery/vorota/60_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130061,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №61',
    //           img: {
    //             preview: 'gallery/vorota/61_vorota_400x300.jpg',
    //             original: 'gallery/vorota/61_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130062,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №62',
    //           img: {
    //             preview: 'gallery/vorota/62_vorota_400x300.jpg',
    //             original: 'gallery/vorota/62_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130063,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №63',
    //           img: {
    //             preview: 'gallery/vorota/63_vorota_400x300.jpg',
    //             original: 'gallery/vorota/63_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130064,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №64',
    //           img: {
    //             preview: 'gallery/vorota/64_vorota_400x300.jpg',
    //             original: 'gallery/vorota/64_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130065,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №65',
    //           img: {
    //             preview: 'gallery/vorota/65_vorota_400x300.jpg',
    //             original: 'gallery/vorota/65_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130066,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №66',
    //           img: {
    //             preview: 'gallery/vorota/66_vorota_400x300.jpg',
    //             original: 'gallery/vorota/66_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130067,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №67',
    //           img: {
    //             preview: 'gallery/vorota/67_vorota_400x300.jpg',
    //             original: 'gallery/vorota/67_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130068,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №68',
    //           img: {
    //             preview: 'gallery/vorota/68_vorota_400x300.jpg',
    //             original: 'gallery/vorota/68_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130069,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №69',
    //           img: {
    //             preview: 'gallery/vorota/69_vorota_400x300.jpg',
    //             original: 'gallery/vorota/69_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130070,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №70',
    //           img: {
    //             preview: 'gallery/vorota/70_vorota_400x300.jpg',
    //             original: 'gallery/vorota/70_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130071,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №71',
    //           img: {
    //             preview: 'gallery/vorota/71_vorota_400x300.jpg',
    //             original: 'gallery/vorota/71_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130072,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №72',
    //           img: {
    //             preview: 'gallery/vorota/72_vorota_400x300.jpg',
    //             original: 'gallery/vorota/72_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130073,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №73',
    //           img: {
    //             preview: 'gallery/vorota/73_vorota_400x300.jpg',
    //             original: 'gallery/vorota/73_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130074,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №74',
    //           img: {
    //             preview: 'gallery/vorota/74_vorota_400x300.jpg',
    //             original: 'gallery/vorota/74_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130075,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №75',
    //           img: {
    //             preview: 'gallery/vorota/75_vorota_400x300.jpg',
    //             original: 'gallery/vorota/75_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130076,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №76',
    //           img: {
    //             preview: 'gallery/vorota/76_vorota_400x300.jpg',
    //             original: 'gallery/vorota/76_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130077,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №77',
    //           img: {
    //             preview: 'gallery/vorota/77_vorota_400x300.jpg',
    //             original: 'gallery/vorota/77_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130078,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №78',
    //           img: {
    //             preview: 'gallery/vorota/78_vorota_400x300.jpg',
    //             original: 'gallery/vorota/78_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130079,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №79',
    //           img: {
    //             preview: 'gallery/vorota/79_vorota_400x300.jpg',
    //             original: 'gallery/vorota/79_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130080,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №80',
    //           img: {
    //             preview: 'gallery/vorota/80_vorota_400x300.jpg',
    //             original: 'gallery/vorota/80_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130081,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №81',
    //           img: {
    //             preview: 'gallery/vorota/81_vorota_400x300.jpg',
    //             original: 'gallery/vorota/81_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130082,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №82',
    //           img: {
    //             preview: 'gallery/vorota/82_vorota_400x300.jpg',
    //             original: 'gallery/vorota/82_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130083,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №83',
    //           img: {
    //             preview: 'gallery/vorota/83_vorota_400x300.jpg',
    //             original: 'gallery/vorota/83_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130084,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №84',
    //           img: {
    //             preview: 'gallery/vorota/84_vorota_400x300.jpg',
    //             original: 'gallery/vorota/84_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130085,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №85',
    //           img: {
    //             preview: 'gallery/vorota/85_vorota_400x300.jpg',
    //             original: 'gallery/vorota/85_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130086,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №86',
    //           img: {
    //             preview: 'gallery/vorota/86_vorota_400x300.jpg',
    //             original: 'gallery/vorota/86_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130087,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №87',
    //           img: {
    //             preview: 'gallery/vorota/87_vorota_400x300.jpg',
    //             original: 'gallery/vorota/87_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130088,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №88',
    //           img: {
    //             preview: 'gallery/vorota/88_vorota_400x300.jpg',
    //             original: 'gallery/vorota/88_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130089,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №89',
    //           img: {
    //             preview: 'gallery/vorota/89_vorota_400x300.jpg',
    //             original: 'gallery/vorota/89_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130090,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №90',
    //           img: {
    //             preview: 'gallery/vorota/90_vorota_400x300.jpg',
    //             original: 'gallery/vorota/90_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130091,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №91',
    //           img: {
    //             preview: 'gallery/vorota/91_vorota_400x300.jpg',
    //             original: 'gallery/vorota/91_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130092,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №92',
    //           img: {
    //             preview: 'gallery/vorota/92_vorota_400x300.jpg',
    //             original: 'gallery/vorota/92_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130093,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №93',
    //           img: {
    //             preview: 'gallery/vorota/93_vorota_400x300.jpg',
    //             original: 'gallery/vorota/93_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130094,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №94',
    //           img: {
    //             preview: 'gallery/vorota/94_vorota_400x300.jpg',
    //             original: 'gallery/vorota/94_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130095,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №95',
    //           img: {
    //             preview: 'gallery/vorota/95_vorota_400x300.jpg',
    //             original: 'gallery/vorota/95_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130096,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №96',
    //           img: {
    //             preview: 'gallery/vorota/96_vorota_400x300.jpg',
    //             original: 'gallery/vorota/96_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130097,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №97',
    //           img: {
    //             preview: 'gallery/vorota/97_vorota_400x300.jpg',
    //             original: 'gallery/vorota/97_vorota_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130098,
    //           title: 'Распашные кованые ворота',
    //           text: 'Распашные №98',
    //           img: {
    //             preview: 'gallery/vorota/98_vorota_400x300.jpg',
    //             original: 'gallery/vorota/98_vorota_1000x750.jpg',
    //           },
    //         },
    //
    //
    //       ],
    //     },
    //     {
    //       title: 'Откатные кованые ворота',
    //       slug: 'vorota_otkatnye',
    //       img: {
    //         preview: 'gallery/vorota/otkatnye/01_otkatnye_400x300.jpg',
    //         original: 'gallery/vorota/otkatnye/01_otkatnye_1000x750.jpg',
    //       },
    //       products: [
    //         {
    //           id: 11,
    //           title: 'Откатные кованые ворота',
    //           text: 'Откатные №1',
    //           img: {
    //             preview: 'gallery/vorota/otkatnye/01_otkatnye_400x300.jpg',
    //             original: 'gallery/vorota/otkatnye/01_otkatnye_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 12,
    //           title: 'Откатные кованые ворота',
    //           text: 'Откатные №2',
    //           img: {
    //             preview: 'gallery/vorota/otkatnye/02_otkatnye_400x300.jpg',
    //             original: 'gallery/vorota/otkatnye/02_otkatnye_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 13,
    //           title: 'Откатные кованые ворота',
    //           text: 'Откатные 3',
    //           img: {
    //             preview: 'gallery/vorota/otkatnye/03_otkatnye_400x300.jpg',
    //             original: 'gallery/vorota/otkatnye/03_otkatnye_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 14,
    //           title: 'Откатные кованые ворота',
    //           text: 'Откатные №4',
    //           img: {
    //             preview: 'gallery/vorota/otkatnye/04_otkatnye_400x300.jpg',
    //             original: 'gallery/vorota/otkatnye/04_otkatnye_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 15,
    //           title: 'Откатные кованые ворота',
    //           text: 'Откатные №5',
    //           img: {
    //             preview: 'gallery/vorota/otkatnye/05_otkatnye_400x300.jpg',
    //             original: 'gallery/vorota/otkatnye/05_otkatnye_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 16,
    //           title: 'Откатные кованые ворота',
    //           text: 'Откатные №6',
    //           img: {
    //             preview: 'gallery/vorota/otkatnye/06_otkatnye_400x300.jpg',
    //             original: 'gallery/vorota/otkatnye/06_otkatnye_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 17,
    //           title: 'Откатные кованые ворота',
    //           text: 'Откатные №7',
    //           img: {
    //             preview: 'gallery/vorota/otkatnye/07_otkatnye_400x300.jpg',
    //             original: 'gallery/vorota/otkatnye/07_otkatnye_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 18,
    //           title: 'Откатные кованые ворота',
    //           text: 'Откатные №8',
    //           img: {
    //             preview: 'gallery/vorota/otkatnye/08_otkatnye_400x300.jpg',
    //             original: 'gallery/vorota/otkatnye/08_otkatnye_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 19,
    //           title: 'Откатные кованые ворота',
    //           text: 'Откатные №9',
    //           img: {
    //             preview: 'gallery/vorota/otkatnye/09_otkatnye_400x300.jpg',
    //             original: 'gallery/vorota/otkatnye/09_otkatnye_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 20,
    //           title: 'Откатные кованые ворота',
    //           text: 'Откатные №10',
    //           img: {
    //             preview: 'gallery/vorota/otkatnye/10_otkatnye_400x300.jpg',
    //             original: 'gallery/vorota/otkatnye/10_otkatnye_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130111,
    //           title: 'Откатные кованые ворота',
    //           text: 'Откатные №11',
    //           img: {
    //             preview: 'gallery/vorota/otkatnye/11_otkatnye_400x300.jpg',
    //             original: 'gallery/vorota/otkatnye/11_otkatnye_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130112,
    //           title: 'Откатные кованые ворота',
    //           text: 'Откатные №12',
    //           img: {
    //             preview: 'gallery/vorota/otkatnye/12_otkatnye_400x300.jpg',
    //             original: 'gallery/vorota/otkatnye/12_otkatnye_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130113,
    //           title: 'Откатные кованые ворота',
    //           text: 'Откатные №13',
    //           img: {
    //             preview: 'gallery/vorota/otkatnye/13_otkatnye_400x300.jpg',
    //             original: 'gallery/vorota/otkatnye/13_otkatnye_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130114,
    //           title: 'Откатные кованые ворота',
    //           text: 'Откатные №14',
    //           img: {
    //             preview: 'gallery/vorota/otkatnye/14_otkatnye_400x300.jpg',
    //             original: 'gallery/vorota/otkatnye/14_otkatnye_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130115,
    //           title: 'Откатные кованые ворота',
    //           text: 'Откатные №15',
    //           img: {
    //             preview: 'gallery/vorota/otkatnye/15_otkatnye_400x300.jpg',
    //             original: 'gallery/vorota/otkatnye/15_otkatnye_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130116,
    //           title: 'Откатные кованые ворота',
    //           text: 'Откатные №16',
    //           img: {
    //             preview: 'gallery/vorota/otkatnye/16_otkatnye_400x300.jpg',
    //             original: 'gallery/vorota/otkatnye/16_otkatnye_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130117,
    //           title: 'Откатные кованые ворота',
    //           text: 'Откатные №17',
    //           img: {
    //             preview: 'gallery/vorota/otkatnye/17_otkatnye_400x300.jpg',
    //             original: 'gallery/vorota/otkatnye/17_otkatnye_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130118,
    //           title: 'Откатные кованые ворота',
    //           text: 'Откатные №18',
    //           img: {
    //             preview: 'gallery/vorota/otkatnye/18_otkatnye_400x300.jpg',
    //             original: 'gallery/vorota/otkatnye/18_otkatnye_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130119,
    //           title: 'Откатные кованые ворота',
    //           text: 'Откатные №19',
    //           img: {
    //             preview: 'gallery/vorota/otkatnye/19_otkatnye_400x300.jpg',
    //             original: 'gallery/vorota/otkatnye/19_otkatnye_1000x750.jpg',
    //           },
    //         },
    //
    //       ],
    //     },
    //     {
    //       title: 'Ворота из профнастила',
    //       slug: 'vorota_prof',
    //       img: {
    //         preview: 'gallery/vorota/prof/6_vorota_prof_400x300.jpg',
    //         original: 'gallery/vorota/prof/6_vorota_prof_1000x750.jpg',
    //       },
    //       products: [
    //         {
    //           id: 11000,
    //           title: 'Ворота из профнастила',
    //           text: 'Из профнастила №1',
    //           img: {
    //             preview: 'gallery/vorota/prof/1_vorota_prof_400x300.jpg',
    //             original: 'gallery/vorota/prof/1_vorota_prof_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 11001,
    //           title: 'Ворота из профнастила',
    //           text: 'Из профнастила №2',
    //           img: {
    //             preview: 'gallery/vorota/prof/2_vorota_prof_400x300.jpg',
    //             original: 'gallery/vorota/prof/2_vorota_prof_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 11002,
    //           title: 'Ворота из профнастила',
    //           text: 'Из профнастила №3',
    //           img: {
    //             preview: 'gallery/vorota/prof/3_vorota_prof_400x300.jpg',
    //             original: 'gallery/vorota/prof/3_vorota_prof_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 11003,
    //           title: 'Ворота из профнастила',
    //           text: 'Из профнастила №4',
    //           img: {
    //             preview: 'gallery/vorota/prof/4_vorota_prof_400x300.jpg',
    //             original: 'gallery/vorota/prof/4_vorota_prof_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 11004,
    //           title: 'Ворота из профнастила',
    //           text: 'Из профнастила №5',
    //           img: {
    //             preview: 'gallery/vorota/prof/5_vorota_prof_400x300.jpg',
    //             original: 'gallery/vorota/prof/5_vorota_prof_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 11005,
    //           title: 'Ворота из профнастила',
    //           text: 'Из профнастила №6',
    //           img: {
    //             preview: 'gallery/vorota/prof/6_vorota_prof_400x300.jpg',
    //             original: 'gallery/vorota/prof/6_vorota_prof_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 11006,
    //           title: 'Ворота из профнастила',
    //           text: 'Из профнастила №7',
    //           img: {
    //             preview: 'gallery/vorota/prof/7_vorota_prof_400x300.jpg',
    //             original: 'gallery/vorota/prof/7_vorota_prof_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 11007,
    //           title: 'Ворота из профнастила',
    //           text: 'Из профнастила №8',
    //           img: {
    //             preview: 'gallery/vorota/prof/8_vorota_prof_400x300.jpg',
    //             original: 'gallery/vorota/prof/8_vorota_prof_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 11008,
    //           title: 'Ворота из профнастила',
    //           text: 'Из профнастила №9',
    //           img: {
    //             preview: 'gallery/vorota/prof/9_vorota_prof_400x300.jpg',
    //             original: 'gallery/vorota/prof/9_vorota_prof_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 11009,
    //           title: 'Ворота из профнастила',
    //           text: 'Из профнастила №10',
    //           img: {
    //             preview: 'gallery/vorota/prof/10_vorota_prof_400x300.jpg',
    //             original: 'gallery/vorota/prof/10_vorota_prof_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 11010,
    //           title: 'Ворота из профнастила',
    //           text: 'Из профнастила №11',
    //           img: {
    //             preview: 'gallery/vorota/prof/11_vorota_prof_400x300.jpg',
    //             original: 'gallery/vorota/prof/11_vorota_prof_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 11011,
    //           title: 'Ворота из профнастила',
    //           text: 'Из профнастила №12',
    //           img: {
    //             preview: 'gallery/vorota/prof/12_vorota_prof_400x300.jpg',
    //             original: 'gallery/vorota/prof/12_vorota_prof_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 11012,
    //           title: 'Ворота из профнастила',
    //           text: 'Из профнастила №13',
    //           img: {
    //             preview: 'gallery/vorota/prof/13_vorota_prof_400x300.jpg',
    //             original: 'gallery/vorota/prof/13_vorota_prof_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 11013,
    //           title: 'Ворота из профнастила',
    //           text: 'Из профнастила №14',
    //           img: {
    //             preview: 'gallery/vorota/prof/14_vorota_prof_400x300.jpg',
    //             original: 'gallery/vorota/prof/14_vorota_prof_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 11014,
    //           title: 'Ворота из профнастила',
    //           text: 'Из профнастила №15',
    //           img: {
    //             preview: 'gallery/vorota/prof/15_vorota_prof_400x300.jpg',
    //             original: 'gallery/vorota/prof/15_vorota_prof_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 11015,
    //           title: 'Ворота из профнастила',
    //           text: 'Из профнастила №16',
    //           img: {
    //             preview: 'gallery/vorota/prof/16_vorota_prof_400x300.jpg',
    //             original: 'gallery/vorota/prof/16_vorota_prof_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 11016,
    //           title: 'Ворота из профнастила',
    //           text: 'Из профнастила №17',
    //           img: {
    //             preview: 'gallery/vorota/prof/17_vorota_prof_400x300.jpg',
    //             original: 'gallery/vorota/prof/17_vorota_prof_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 11017,
    //           title: 'Ворота из профнастила',
    //           text: 'Из профнастила №18',
    //           img: {
    //             preview: 'gallery/vorota/prof/18_vorota_prof_400x300.jpg',
    //             original: 'gallery/vorota/prof/18_vorota_prof_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 11018,
    //           title: 'Ворота из профнастила',
    //           text: 'Из профнастила №19',
    //           img: {
    //             preview: 'gallery/vorota/prof/19_vorota_prof_400x300.jpg',
    //             original: 'gallery/vorota/prof/19_vorota_prof_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 11019,
    //           title: 'Ворота из профнастила',
    //           text: 'Из профнастила №20',
    //           img: {
    //             preview: 'gallery/vorota/prof/20_vorota_prof_400x300.jpg',
    //             original: 'gallery/vorota/prof/20_vorota_prof_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 11020,
    //           title: 'Ворота из профнастила',
    //           text: 'Из профнастила №21',
    //           img: {
    //             preview: 'gallery/vorota/prof/21_vorota_prof_400x300.jpg',
    //             original: 'gallery/vorota/prof/21_vorota_prof_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 11021,
    //           title: 'Ворота из профнастила',
    //           text: 'Из профнастила №22',
    //           img: {
    //             preview: 'gallery/vorota/prof/22_vorota_prof_400x300.jpg',
    //             original: 'gallery/vorota/prof/22_vorota_prof_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 11022,
    //           title: 'Ворота из профнастила',
    //           text: 'Из профнастила №23',
    //           img: {
    //             preview: 'gallery/vorota/prof/23_vorota_prof_400x300.jpg',
    //             original: 'gallery/vorota/prof/23_vorota_prof_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 11023,
    //           title: 'Ворота из профнастила',
    //           text: 'Из профнастила №24',
    //           img: {
    //             preview: 'gallery/vorota/prof/24_vorota_prof_400x300.jpg',
    //             original: 'gallery/vorota/prof/24_vorota_prof_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 11024,
    //           title: 'Ворота из профнастила',
    //           text: 'Из профнастила №25',
    //           img: {
    //             preview: 'gallery/vorota/prof/25_vorota_prof_400x300.jpg',
    //             original: 'gallery/vorota/prof/25_vorota_prof_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 11026,
    //           title: 'Ворота из профнастила',
    //           text: 'Из профнастила №26',
    //           img: {
    //             preview: 'gallery/vorota/prof/26_vorota_prof_400x300.jpg',
    //             original: 'gallery/vorota/prof/26_vorota_prof_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 11027,
    //           title: 'Ворота из профнастила',
    //           text: 'Из профнастила №27',
    //           img: {
    //             preview: 'gallery/vorota/prof/27_vorota_prof_400x300.jpg',
    //             original: 'gallery/vorota/prof/27_vorota_prof_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 11028,
    //           title: 'Ворота из профнастила',
    //           text: 'Из профнастила №28',
    //           img: {
    //             preview: 'gallery/vorota/prof/28_vorota_prof_400x300.jpg',
    //             original: 'gallery/vorota/prof/28_vorota_prof_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 11029,
    //           title: 'Ворота из профнастила',
    //           text: 'Из профнастила №29',
    //           img: {
    //             preview: 'gallery/vorota/prof/29_vorota_prof_400x300.jpg',
    //             original: 'gallery/vorota/prof/29_vorota_prof_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 11030,
    //           title: 'Ворота из профнастила',
    //           text: 'Из профнастила №30',
    //           img: {
    //             preview: 'gallery/vorota/prof/30_vorota_prof_400x300.jpg',
    //             original: 'gallery/vorota/prof/30_vorota_prof_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 11031,
    //           title: 'Ворота из профнастила',
    //           text: 'Из профнастила №31',
    //           img: {
    //             preview: 'gallery/vorota/prof/31_vorota_prof_400x300.jpg',
    //             original: 'gallery/vorota/prof/31_vorota_prof_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 11032,
    //           title: 'Ворота из профнастила',
    //           text: 'Из профнастила №32',
    //           img: {
    //             preview: 'gallery/vorota/prof/32_vorota_prof_400x300.jpg',
    //             original: 'gallery/vorota/prof/32_vorota_prof_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 11033,
    //           title: 'Ворота из профнастила',
    //           text: 'Из профнастила №10',
    //           img: {
    //             preview: 'gallery/vorota/prof/33_vorota_prof_400x300.jpg',
    //             original: 'gallery/vorota/prof/33_vorota_prof_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 11034,
    //           title: 'Ворота из профнастила',
    //           text: 'Из профнастила №34',
    //           img: {
    //             preview: 'gallery/vorota/prof/34_vorota_prof_400x300.jpg',
    //             original: 'gallery/vorota/prof/34_vorota_prof_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 11035,
    //           title: 'Ворота из профнастила',
    //           text: 'Из профнастила №35',
    //           img: {
    //             preview: 'gallery/vorota/prof/35_vorota_prof_400x300.jpg',
    //             original: 'gallery/vorota/prof/35_vorota_prof_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 11036,
    //           title: 'Ворота из профнастила',
    //           text: 'Из профнастила №10',
    //           img: {
    //             preview: 'gallery/vorota/prof/36_vorota_prof_400x300.jpg',
    //             original: 'gallery/vorota/prof/36_vorota_prof_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 11037,
    //           title: 'Ворота из профнастила',
    //           text: 'Из профнастила №10',
    //           img: {
    //             preview: 'gallery/vorota/prof/37_vorota_prof_400x300.jpg',
    //             original: 'gallery/vorota/prof/37_vorota_prof_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 11038,
    //           title: 'Ворота из профнастила',
    //           text: 'Из профнастила №38',
    //           img: {
    //             preview: 'gallery/vorota/prof/38_vorota_prof_400x300.jpg',
    //             original: 'gallery/vorota/prof/38_vorota_prof_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 11039,
    //           title: 'Ворота из профнастила',
    //           text: 'Из профнастила №39',
    //           img: {
    //             preview: 'gallery/vorota/prof/39_vorota_prof_400x300.jpg',
    //             original: 'gallery/vorota/prof/39_vorota_prof_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 11040,
    //           title: 'Ворота из профнастила',
    //           text: 'Из профнастила №40',
    //           img: {
    //             preview: 'gallery/vorota/prof/40_vorota_prof_400x300.jpg',
    //             original: 'gallery/vorota/prof/40_vorota_prof_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 11041,
    //           title: 'Ворота из профнастила',
    //           text: 'Из профнастила №41',
    //           img: {
    //             preview: 'gallery/vorota/prof/41_vorota_prof_400x300.jpg',
    //             original: 'gallery/vorota/prof/41_vorota_prof_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 11042,
    //           title: 'Ворота из профнастила',
    //           text: 'Из профнастила №42',
    //           img: {
    //             preview: 'gallery/vorota/prof/42_vorota_prof_400x300.jpg',
    //             original: 'gallery/vorota/prof/42_vorota_prof_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 11043,
    //           title: 'Ворота из профнастила',
    //           text: 'Из профнастила №43',
    //           img: {
    //             preview: 'gallery/vorota/prof/43_vorota_prof_400x300.jpg',
    //             original: 'gallery/vorota/prof/43_vorota_prof_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 11044,
    //           title: 'Ворота из профнастила',
    //           text: 'Из профнастила №44',
    //           img: {
    //             preview: 'gallery/vorota/prof/44_vorota_prof_400x300.jpg',
    //             original: 'gallery/vorota/prof/44_vorota_prof_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 11045,
    //           title: 'Ворота из профнастила',
    //           text: 'Из профнастила №45',
    //           img: {
    //             preview: 'gallery/vorota/prof/45_vorota_prof_400x300.jpg',
    //             original: 'gallery/vorota/prof/45_vorota_prof_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 11046,
    //           title: 'Ворота из профнастила',
    //           text: 'Из профнастила №46',
    //           img: {
    //             preview: 'gallery/vorota/prof/46_vorota_prof_400x300.jpg',
    //             original: 'gallery/vorota/prof/46_vorota_prof_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 11047,
    //           title: 'Ворота из профнастила',
    //           text: 'Из профнастила №47',
    //           img: {
    //             preview: 'gallery/vorota/prof/47_vorota_prof_400x300.jpg',
    //             original: 'gallery/vorota/prof/47_vorota_prof_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 11048,
    //           title: 'Ворота из профнастила',
    //           text: 'Из профнастила №48',
    //           img: {
    //             preview: 'gallery/vorota/prof/48_vorota_prof_400x300.jpg',
    //             original: 'gallery/vorota/prof/48_vorota_prof_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 11049,
    //           title: 'Ворота из профнастила',
    //           text: 'Из профнастила №49',
    //           img: {
    //             preview: 'gallery/vorota/prof/43_vorota_prof_400x300.jpg',
    //             original: 'gallery/vorota/prof/43_vorota_prof_1000x750.jpg',
    //           },
    //         },
    //
    //       ],
    //     }
    //   ]
    // },
    // {
    //   title: 'Кованые калитки',
    //   slug: 'kalitki',
    //   img: {
    //     preview: 'gallery/kalitki/01_kalitki_400x300.jpg',
    //     original:'gallery/kalitki/01_kalitki_1000x750.jpg',
    //   },
    //   text: 'Кованые калитки являются украшением входной зоны, придают забору и ограждению завершенный вид, облогараживают пространство. Кованые ворота отличаются отовсех других своей прочностью, стойкостью к механическим повреждениям и погодным явлениям.',
    //   metaData: {
    //     meta: [
    //       { hid:'description-contacts', name: 'description', content: 'Купить кованые калитки, заказать калитку с установкой - Москва и Московская область  '},
    //       { name: 'keywords', content: 'купить калитки не дорого, ковка, художественная, кованые, заборы, ворота, калитки, цена, стоимость, kovka-mo,калитки одинцово'},
    //     ],
    //     title: 'Купить кованые калитки - фото и цены в Москве и МО – ковка –от компании Феникс Стальное Решение'
    //   },
    //   price: 'от 7000р кв.м',
    //   types: [
    //     {
    //       title: 'Кованые калитки',
    //       slug: 'kalitki_prostie',
    //       img: {
    //         preview: 'gallery/kalitki/01_kalitki_400x300.jpg',
    //         original:'gallery/kalitki/01_kalitki_1000x750.jpg',
    //       },
    //       products: [
    //         {
    //           id: 21,
    //           title: 'Калитки уличные',
    //           text: 'Калитки №1',
    //           img: {
    //             preview: 'gallery/kalitki/01_kalitki_400x300.jpg',
    //             original:'gallery/kalitki/01_kalitki_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 22,
    //           title: 'Калитки уличные',
    //           text: 'Калитки №2',
    //           img: {
    //             preview: 'gallery/kalitki/02_kalitki_400x300.jpg',
    //             original:'gallery/kalitki/02_kalitki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 23,
    //           title: 'Калитки уличные',
    //           text: 'Калитки №3',
    //           img: {
    //             preview: 'gallery/kalitki/03_kalitki_400x300.jpg',
    //             original:'gallery/kalitki/03_kalitki_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 24,
    //           title: 'Калитки уличные',
    //           text: 'Калитки №4',
    //           img: {
    //             preview: 'gallery/kalitki/04_kalitki_400x300.jpg',
    //             original:'gallery/kalitki/04_kalitki_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 25,
    //           title: 'Калитки уличные',
    //           text: 'Калитки №5',
    //           img: {
    //             preview: 'gallery/kalitki/05_kalitki_400x300.jpg',
    //             original:'gallery/kalitki/05_kalitki_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 26,
    //           title: 'Калитки уличные',
    //           text: 'Калитки №6',
    //           img: {
    //             preview: 'gallery/kalitki/06_kalitki_400x300.jpg',
    //             original:'gallery/kalitki/06_kalitki_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 27,
    //           title: 'Калитки уличные',
    //           text: 'Калитки №7',
    //           img: {
    //             preview: 'gallery/kalitki/07_kalitki_400x300.jpg',
    //             original:'gallery/kalitki/07_kalitki_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 28,
    //           title: 'Калиткиуличные',
    //           text: 'Калитки №8',
    //           img: {
    //             preview: 'gallery/kalitki/08_kalitki_400x300.jpg',
    //             original:'gallery/kalitki/08_kalitki_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 29,
    //           title: 'Калитки уличные',
    //           text: 'Калитки №9',
    //           img: {
    //             preview: 'gallery/kalitki/09_kalitki_400x300.jpg',
    //             original:'gallery/kalitki/09_kalitki_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 30,
    //           title: 'Калитки уличные',
    //           text: 'Калитки №10',
    //           img: {
    //             preview: 'gallery/kalitki/10_kalitki_400x300.jpg',
    //             original:'gallery/kalitki/10_kalitki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130212,
    //           title: 'Калитки уличные',
    //           text: 'Калитки №12',
    //           img: {
    //             preview: 'gallery/kalitki/12_kalitki_400x300.jpg',
    //             original:'gallery/kalitki/12_kalitki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130213,
    //           title: 'Калитки уличные',
    //           text: 'Калитки №13',
    //           img: {
    //             preview: 'gallery/kalitki/13_kalitki_400x300.jpg',
    //             original:'gallery/kalitki/13_kalitki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130214,
    //           title: 'Калитки уличные',
    //           text: 'Калитки №14',
    //           img: {
    //             preview: 'gallery/kalitki/14_kalitki_400x300.jpg',
    //             original:'gallery/kalitki/14_kalitki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130215,
    //           title: 'Калитки уличные',
    //           text: 'Калитки №51',
    //           img: {
    //             preview: 'gallery/kalitki/15_kalitki_400x300.jpg',
    //             original:'gallery/kalitki/15_kalitki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130216,
    //           title: 'Калитки уличные',
    //           text: 'Калитки №16',
    //           img: {
    //             preview: 'gallery/kalitki/16_kalitki_400x300.jpg',
    //             original:'gallery/kalitki/16_kalitki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130217,
    //           title: 'Калитки уличные',
    //           text: 'Калитки №17',
    //           img: {
    //             preview: 'gallery/kalitki/17_kalitki_400x300.jpg',
    //             original:'gallery/kalitki/17_kalitki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130218,
    //           title: 'Калитки уличные',
    //           text: 'Калитки №18',
    //           img: {
    //             preview: 'gallery/kalitki/18_kalitki_400x300.jpg',
    //             original:'gallery/kalitki/18_kalitki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130219,
    //           title: 'Калитки уличные',
    //           text: 'Калитки №19',
    //           img: {
    //             preview: 'gallery/kalitki/19_kalitki_400x300.jpg',
    //             original:'gallery/kalitki/19_kalitki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130220,
    //           title: 'Калитки уличные',
    //           text: 'Калитки №20',
    //           img: {
    //             preview: 'gallery/kalitki/20_kalitki_400x300.jpg',
    //             original:'gallery/kalitki/20_kalitki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130221,
    //           title: 'Калитки уличные',
    //           text: 'Калитки №21',
    //           img: {
    //             preview: 'gallery/kalitki/21_kalitki_400x300.jpg',
    //             original:'gallery/kalitki/21_kalitki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130222,
    //           title: 'Калитки уличные',
    //           text: 'Калитки №22',
    //           img: {
    //             preview: 'gallery/kalitki/22_kalitki_400x300.jpg',
    //             original:'gallery/kalitki/22_kalitki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130223,
    //           title: 'Калитки уличные',
    //           text: 'Калитки №23',
    //           img: {
    //             preview: 'gallery/kalitki/23_kalitki_400x300.jpg',
    //             original:'gallery/kalitki/23_kalitki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130224,
    //           title: 'Калитки уличные',
    //           text: 'Калитки №24',
    //           img: {
    //             preview: 'gallery/kalitki/24_kalitki_400x300.jpg',
    //             original:'gallery/kalitki/24_kalitki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130225,
    //           title: 'Калитки уличные',
    //           text: 'Калитки №25',
    //           img: {
    //             preview: 'gallery/kalitki/25_kalitki_400x300.jpg',
    //             original:'gallery/kalitki/25_kalitki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130226,
    //           title: 'Калитки уличные',
    //           text: 'Калитки №26',
    //           img: {
    //             preview: 'gallery/kalitki/26_kalitki_400x300.jpg',
    //             original:'gallery/kalitki/26_kalitki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130227,
    //           title: 'Калитки уличные',
    //           text: 'Калитки №27',
    //           img: {
    //             preview: 'gallery/kalitki/27_kalitki_400x300.jpg',
    //             original:'gallery/kalitki/27_kalitki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130228,
    //           title: 'Калитки уличные',
    //           text: 'Калитки №28',
    //           img: {
    //             preview: 'gallery/kalitki/28_kalitki_400x300.jpg',
    //             original:'gallery/kalitki/28_kalitki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130229,
    //           title: 'Калитки уличные',
    //           text: 'Калитки №29',
    //           img: {
    //             preview: 'gallery/kalitki/29_kalitki_400x300.jpg',
    //             original:'gallery/kalitki/29_kalitki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130230,
    //           title: 'Калитки уличные',
    //           text: 'Калитки №30',
    //           img: {
    //             preview: 'gallery/kalitki/30_kalitki_400x300.jpg',
    //             original:'gallery/kalitki/30_kalitki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130231,
    //           title: 'Калитки уличные',
    //           text: 'Калитки №31',
    //           img: {
    //             preview: 'gallery/kalitki/31_kalitki_400x300.jpg',
    //             original:'gallery/kalitki/31_kalitki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130232,
    //           title: 'Калитки уличные',
    //           text: 'Калитки №32',
    //           img: {
    //             preview: 'gallery/kalitki/32_kalitki_400x300.jpg',
    //             original:'gallery/kalitki/32_kalitki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130233,
    //           title: 'Калитки уличные',
    //           text: 'Калитки №33',
    //           img: {
    //             preview: 'gallery/kalitki/33_kalitki_400x300.jpg',
    //             original:'gallery/kalitki/33_kalitki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130234,
    //           title: 'Калитки уличные',
    //           text: 'Калитки №34',
    //           img: {
    //             preview: 'gallery/kalitki/34_kalitki_400x300.jpg',
    //             original:'gallery/kalitki/34_kalitki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130235,
    //           title: 'Калитки уличные',
    //           text: 'Калитки №35',
    //           img: {
    //             preview: 'gallery/kalitki/35_kalitki_400x300.jpg',
    //             original:'gallery/kalitki/35_kalitki_1000x750.jpg',
    //           },
    //         },
    //
    //
    //       ],
    //     },
    //     {
    //       title: 'Кованые калитки в доме',
    //       slug: 'kalitki_dom',
    //       img: {
    //         preview: 'gallery/kalitki/kalitkivdome/01_kalitkivdome_400x300.jpg',
    //         original:'gallery/kalitki/kalitkivdome/01_kalitkivdome_1000x750.jpg',
    //       },
    //       products: [
    //         {
    //           id: 31,
    //           title: 'Калитка в помещении',
    //           text: 'Калитки в помещении №1',
    //           img: {
    //             preview: 'gallery/kalitki/kalitkivdome/01_kalitkivdome_400x300.jpg',
    //             original:'gallery/kalitki/kalitkivdome/01_kalitkivdome_1000x750.jpg',
    //           },
    //         },
    //
    //       ],
    //     }
    //   ]
    // },
    // {
    //   title: 'Кованые перила',
    //   slug: 'perila',
    //   img: {
    //     preview: 'gallery/perila/01_perila_400x300.jpg',
    //     original:'gallery/perila/01_perila_1000x750.jpg',
    //   },
    //   text: 'Перила являются неотъемлемым атрибутом любого здания. Они встречаются у входа в дом, крепятся на лестницы.' +
    //     ' По внешнему виду кованые перила могут быть красивее резных деревянных,' +
    //     ' благодаря технологиям художественной ковки позволяющим создавать уникальные фигуры.',
    //   metaData: {
    //     meta: [
    //       { hid:'description-contacts', name: 'description', content: 'Купить кованые перила в Москве по фото, эскизу, на заказ с доставкой и установкой в Москве и Московской области.'},
    //       { name: 'keywords', content: 'купить кованые перила не дорого, фото, ковка, художественная, кованые, перила, ограждения, лестниц, цена, стоимость, kovka-mo,кованые перила,перила одинцово'},
    //     ],
    //     title: 'Купить кованые перила  в Москве и МО - цена и фото, изготовление на заказ – ковка –от компании Феникс Стальное Решение'
    //   },
    //   price: 'от 5000р кв.м',
    //   types: [
    //     {
    //       title: 'Кованые перила в стиле Барокко',
    //       slug: 'perila_barokko',
    //       img: {
    //         preview: 'gallery/perila/baroko/01_perila_barokko_400x300.jpg',
    //         original:'gallery/perila/baroko/01_perila_barokko_1000x750.jpg',
    //       },
    //       products: [
    //         {
    //           id: 32,
    //           title: 'Кованые перила в стиле Барокко',
    //           text: 'Кованые перила в стиле Барокко №1',
    //           img: {
    //             preview: 'gallery/perila/baroko/01_perila_barokko_400x300.jpg',
    //             original:'gallery/perila/baroko/01_perila_barokko_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 33,
    //           title: 'Кованые перила в стиле Барокко',
    //           text: 'Кованые перила в стиле Барокко №2',
    //           img: {
    //             preview: 'gallery/perila/baroko/02_perila_barokko_400x300.jpg',
    //             original:'gallery/perila/baroko/02_perila_barokko_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 34,
    //           title: 'Кованые перила в стиле Барокко',
    //           text: 'Кованые перила в стиле Барокко №3',
    //           img: {
    //             preview: 'gallery/perila/baroko/03_perila_barokko_400x300.jpg',
    //             original:'gallery/perila/baroko/03_perila_barokko_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 35,
    //           title: 'Кованые перила в стиле Барокко',
    //           text: 'Кованые перила в стиле Барокко №4',
    //           img: {
    //             preview: 'gallery/perila/baroko/04_perila_barokko_400x300.jpg',
    //             original:'gallery/perila/baroko/04_perila_barokko_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 36,
    //           title: 'Кованые перила в стиле Барокко',
    //           text: 'Кованые перила в стиле Барокко №5',
    //           img: {
    //             preview: 'gallery/perila/baroko/05_perila_barokko_400x300.jpg',
    //             original:'gallery/perila/baroko/05_perila_barokko_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 37,
    //           title: 'Кованые перила в стиле Барокко',
    //           text: 'Кованые перила в стиле Барокко №6',
    //           img: {
    //             preview: 'gallery/perila/baroko/06_perila_barokko_400x300.jpg',
    //             original:'gallery/perila/baroko/06_perila_barokko_1000x750.jpg',
    //           },
    //         },
    //
    //       ],
    //     },
    //     {
    //       title: 'Кованые перила в стиле Рококо',
    //       slug: 'perila_rokoko',
    //       img: {
    //         preview: 'gallery/perila/rokoko/01_perila_rokoko_400x300.jpg',
    //         original:'gallery/perila/rokoko/01_perila_rokoko_1000x750.jpg',
    //       },
    //       products: [
    //         {
    //           id: 38,
    //           title: 'Кованые перила в стиле Рококо',
    //           text: 'Кованые перила в стиле Рококо №1',
    //           img: {
    //             preview: 'gallery/perila/rokoko/01_perila_rokoko_400x300.jpg',
    //             original:'gallery/perila/rokoko/01_perila_rokoko_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 39,
    //           title: 'Кованые перила в стиле Рококо',
    //           text: 'Кованые перила в стиле Рококо №2',
    //           img: {
    //             preview: 'gallery/perila/rokoko/02_perila_rokoko_400x300.jpg',
    //             original:'gallery/perila/rokoko/02_perila_rokoko_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 40,
    //           title: 'Кованые перила в стиле Рококо',
    //           text: 'Кованые перила в стиле Рококо №3',
    //           img: {
    //             preview: 'gallery/perila/rokoko/03_perila_rokoko_400x300.jpg',
    //             original:'gallery/perila/rokoko/03_perila_rokoko_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 41,
    //           title: 'Кованые перила в стиле Рококо',
    //           text: 'Кованые перила в стиле Рококо №4',
    //           img: {
    //             preview: 'gallery/perila/rokoko/04_perila_rokoko_400x300.jpg',
    //             original:'gallery/perila/rokoko/04_perila_rokoko_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 42,
    //           title: 'Кованые перила в стиле Рококо',
    //           text: 'Кованые перила в стиле Рококо №5',
    //           img: {
    //             preview: 'gallery/perila/rokoko/05_perila_rokoko_400x300.jpg',
    //             original:'gallery/perila/rokoko/05_perila_rokoko_1000x750.jpg',
    //           },
    //         },
    //       ],
    //     },
    //     {
    //       title: 'Кованые перила в классическом стиле',
    //       slug: 'perila_klasik',
    //       img: {
    //         preview: 'gallery/perila/klasik/01_perila_klasik_400x300.jpg',
    //         original:'gallery/perila/klasik/01_perila_klasik_1000x750.jpg',
    //       },
    //       products: [
    //         {
    //           id: 43,
    //           title: 'Кованые перила в классическом стиле',
    //           text: 'Кованые перила в классическом стиле №1',
    //           img: {
    //             preview: 'gallery/perila/klasik/01_perila_klasik_400x300.jpg',
    //             original:'gallery/perila/klasik/01_perila_klasik_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 44,
    //           title: 'Кованые перила в классическом стиле',
    //           text: 'Кованые перила в классическом стиле №2',
    //           img: {
    //             preview: 'gallery/perila/klasik/02_perila_klasik_400x300.jpg',
    //             original:'gallery/perila/klasik/02_perila_klasik_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 45,
    //           title: 'Кованые перила в классическом стиле',
    //           text: 'Кованые перила в классическом стиле №3',
    //           img: {
    //             preview: 'gallery/perila/klasik/03_perila_klasik_400x300.jpg',
    //             original:'gallery/perila/klasik/03_perila_klasik_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 46,
    //           title: 'Кованые перила в классическом стиле',
    //           text: 'Кованые перила в классическом стиле №4',
    //           img: {
    //             preview: 'gallery/perila/klasik/04_perila_klasik_400x300.jpg',
    //             original:'gallery/perila/klasik/04_perila_klasik_1000x750.jpg',
    //           },
    //         },
    //
    //
    //         {
    //           id: 47,
    //           title: 'Кованые перила в классическом стиле',
    //           text: 'Кованые перила в классическом стиле №5',
    //           img: {
    //             preview: 'gallery/perila/klasik/05_perila_klasik_400x300.jpg',
    //             original:'gallery/perila/klasik/05_perila_klasik_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 48,
    //           title: 'Кованые перила в классическом стиле',
    //           text: 'Кованые перила в классическом стиле №6',
    //           img: {
    //             preview: 'gallery/perila/klasik/06_perila_klasik_400x300.jpg',
    //             original:'gallery/perila/klasik/06_perila_klasik_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 49,
    //           title: 'Кованые перила в классическом стиле',
    //           text: 'Кованые перила в классическом стиле №7',
    //           img: {
    //             preview: 'gallery/perila/klasik/07_perila_klasik_400x300.jpg',
    //             original:'gallery/perila/klasik/07_perila_klasik_1000x750.jpg',
    //           },
    //         },
    //
    //
    //       ],
    //     },
    //     {
    //       title: 'Кованые перила в современном стиле',
    //       slug: 'perila_sovremen',
    //       img: {
    //         preview: 'gallery/perila/sovremen/01_perila_sovremen_400x300.jpg',
    //         original:'gallery/perila/sovremen/01_perila_sovremen_1000x750.jpg',
    //       },
    //       products: [
    //         {
    //           id: 50,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №1',
    //           img: {
    //             preview: 'gallery/perila/sovremen/01_perila_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/01_perila_sovremen_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 51,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №2',
    //           img: {
    //             preview: 'gallery/perila/sovremen/02_perila_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/02_perila_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 52,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №3',
    //           img: {
    //             preview: 'gallery/perila/sovremen/03_perila_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/03_perila_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 53,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №4',
    //           img: {
    //             preview: 'gallery/perila/sovremen/04_perila_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/04_perila_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 54,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №5',
    //           img: {
    //             preview: 'gallery/perila/sovremen/05_perila_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/05_perila_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 55,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №6',
    //           img: {
    //             preview: 'gallery/perila/sovremen/06_perila_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/06_perila_sovremen_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 56,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №7',
    //           img: {
    //             preview: 'gallery/perila/sovremen/07_perila_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/07_perila_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140908,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №8',
    //           img: {
    //             preview: 'gallery/perila/sovremen/8_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/8_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140909,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №9',
    //           img: {
    //             preview: 'gallery/perila/sovremen/9_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/9_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140910,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №10',
    //           img: {
    //             preview: 'gallery/perila/sovremen/10_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/10_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140911,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №11',
    //           img: {
    //             preview: 'gallery/perila/sovremen/11_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/11_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140912,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №12',
    //           img: {
    //             preview: 'gallery/perila/sovremen/12_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/12_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140913,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №13',
    //           img: {
    //             preview: 'gallery/perila/sovremen/13_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/13_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140914,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №14',
    //           img: {
    //             preview: 'gallery/perila/sovremen/14_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/14_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140915,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №15',
    //           img: {
    //             preview: 'gallery/perila/sovremen/15_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/15_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140916,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №16',
    //           img: {
    //             preview: 'gallery/perila/sovremen/16_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/16_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140917,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №17',
    //           img: {
    //             preview: 'gallery/perila/sovremen/17_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/17_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140918,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №18',
    //           img: {
    //             preview: 'gallery/perila/sovremen/18_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/18_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140919,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №19',
    //           img: {
    //             preview: 'gallery/perila/sovremen/19_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/19_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140920,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №20',
    //           img: {
    //             preview: 'gallery/perila/sovremen/20_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/20_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140921,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №21',
    //           img: {
    //             preview: 'gallery/perila/sovremen/21_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/21_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140922,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №22',
    //           img: {
    //             preview: 'gallery/perila/sovremen/22_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/22_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140923,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №23',
    //           img: {
    //             preview: 'gallery/perila/sovremen/23_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/23_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140924,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №24',
    //           img: {
    //             preview: 'gallery/perila/sovremen/24_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/24_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140925,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №25',
    //           img: {
    //             preview: 'gallery/perila/sovremen/25_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/25_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140926,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №26',
    //           img: {
    //             preview: 'gallery/perila/sovremen/26_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/26_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140927,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №27',
    //           img: {
    //             preview: 'gallery/perila/sovremen/27_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/27_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140928,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №28',
    //           img: {
    //             preview: 'gallery/perila/sovremen/28_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/28_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140929,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №29',
    //           img: {
    //             preview: 'gallery/perila/sovremen/29_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/29_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140930,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №30',
    //           img: {
    //             preview: 'gallery/perila/sovremen/30_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/30_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140931,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №31',
    //           img: {
    //             preview: 'gallery/perila/sovremen/31_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/31_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140932,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №32',
    //           img: {
    //             preview: 'gallery/perila/sovremen/32_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/32_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140933,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №33',
    //           img: {
    //             preview: 'gallery/perila/sovremen/33_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/33_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140934,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №34',
    //           img: {
    //             preview: 'gallery/perila/sovremen/34_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/34_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140935,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №35',
    //           img: {
    //             preview: 'gallery/perila/sovremen/35_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/35_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140936,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №36',
    //           img: {
    //             preview: 'gallery/perila/sovremen/36_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/36_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140937,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №37',
    //           img: {
    //             preview: 'gallery/perila/sovremen/37_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/37_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140938,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №38',
    //           img: {
    //             preview: 'gallery/perila/sovremen/38_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/38_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140939,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №39',
    //           img: {
    //             preview: 'gallery/perila/sovremen/39_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/39_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140940,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №40',
    //           img: {
    //             preview: 'gallery/perila/sovremen/40_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/40_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140941,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №41',
    //           img: {
    //             preview: 'gallery/perila/sovremen/41_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/41_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140942,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №42',
    //           img: {
    //             preview: 'gallery/perila/sovremen/42_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/42_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140943,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №43',
    //           img: {
    //             preview: 'gallery/perila/sovremen/43_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/43_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140944,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №44',
    //           img: {
    //             preview: 'gallery/perila/sovremen/44_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/44_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140945,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №45',
    //           img: {
    //             preview: 'gallery/perila/sovremen/45_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/45_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140946,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №46',
    //           img: {
    //             preview: 'gallery/perila/sovremen/46_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/46_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140947,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №47',
    //           img: {
    //             preview: 'gallery/perila/sovremen/47_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/47_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140948,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №48',
    //           img: {
    //             preview: 'gallery/perila/sovremen/48_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/48_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140949,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №49',
    //           img: {
    //             preview: 'gallery/perila/sovremen/49_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/49_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140950,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №50',
    //           img: {
    //             preview: 'gallery/perila/sovremen/50_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/50_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140951,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №51',
    //           img: {
    //             preview: 'gallery/perila/sovremen/51_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/51_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140952,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №52',
    //           img: {
    //             preview: 'gallery/perila/sovremen/52_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/52_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140953,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №53',
    //           img: {
    //             preview: 'gallery/perila/sovremen/53_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/53_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140954,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №54',
    //           img: {
    //             preview: 'gallery/perila/sovremen/54_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/54_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140955,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №55',
    //           img: {
    //             preview: 'gallery/perila/sovremen/55_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/55_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140956,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №56',
    //           img: {
    //             preview: 'gallery/perila/sovremen/56_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/56_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140957,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №57',
    //           img: {
    //             preview: 'gallery/perila/sovremen/57_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/57_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140958,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №58',
    //           img: {
    //             preview: 'gallery/perila/sovremen/58_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/58_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140959,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №59',
    //           img: {
    //             preview: 'gallery/perila/sovremen/59_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/59_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140960,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №60',
    //           img: {
    //             preview: 'gallery/perila/sovremen/60_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/60_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140951,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №61',
    //           img: {
    //             preview: 'gallery/perila/sovremen/61_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/61_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140962,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №62',
    //           img: {
    //             preview: 'gallery/perila/sovremen/62_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/62_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140963,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №63',
    //           img: {
    //             preview: 'gallery/perila/sovremen/63_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/63_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140964,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №64',
    //           img: {
    //             preview: 'gallery/perila/sovremen/64_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/64_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140965,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №65',
    //           img: {
    //             preview: 'gallery/perila/sovremen/65_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/65_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140966,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №66',
    //           img: {
    //             preview: 'gallery/perila/sovremen/66_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/66_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140967,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №67',
    //           img: {
    //             preview: 'gallery/perila/sovremen/67_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/67_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140968,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №68',
    //           img: {
    //             preview: 'gallery/perila/sovremen/68_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/68_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140969,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №69',
    //           img: {
    //             preview: 'gallery/perila/sovremen/69_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/69_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140970,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №70',
    //           img: {
    //             preview: 'gallery/perila/sovremen/70_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/70_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140972,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №72',
    //           img: {
    //             preview: 'gallery/perila/sovremen/72_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/72_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140973,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №73',
    //           img: {
    //             preview: 'gallery/perila/sovremen/73_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/73_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140974,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №74',
    //           img: {
    //             preview: 'gallery/perila/sovremen/74_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/74_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140975,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №75',
    //           img: {
    //             preview: 'gallery/perila/sovremen/75_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/75_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140976,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №76',
    //           img: {
    //             preview: 'gallery/perila/sovremen/76_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/76_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140977,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №77',
    //           img: {
    //             preview: 'gallery/perila/sovremen/77_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/77_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140978,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №78',
    //           img: {
    //             preview: 'gallery/perila/sovremen/78_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/78_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140979,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №79',
    //           img: {
    //             preview: 'gallery/perila/sovremen/79_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/79_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140980,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №80',
    //           img: {
    //             preview: 'gallery/perila/sovremen/80_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/80_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140981,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №8',
    //           img: {
    //             preview: 'gallery/perila/sovremen/81_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/81_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140982,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №82',
    //           img: {
    //             preview: 'gallery/perila/sovremen/82_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/82_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140983,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №83',
    //           img: {
    //             preview: 'gallery/perila/sovremen/83_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/83_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140984,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №84',
    //           img: {
    //             preview: 'gallery/perila/sovremen/84_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/84_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140985,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №85',
    //           img: {
    //             preview: 'gallery/perila/sovremen/85_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/85_sovremen_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140986,
    //           title: 'Кованые перила в современном стиле',
    //           text: 'Кованые перила в современном стиле №86',
    //           img: {
    //             preview: 'gallery/perila/sovremen/86_sovremen_400x300.jpg',
    //             original:'gallery/perila/sovremen/86_sovremen_1000x750.jpg',
    //           },
    //         },
    //
    //
    //       ],
    //     },
    //     {
    //       title: 'Кованые перила входной группы',
    //       slug: 'perila_vhod',
    //       img: {
    //         preview: 'gallery/perila/vhod/11_vhod_400x300.jpg',
    //         original:'gallery/perila/vhod/11_vhod_400x300.jpg',
    //       },
    //       products: [
    //         {
    //           id: 150201,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №1',
    //           img: {
    //             preview: 'gallery/perila/vhod/1_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/1_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150202,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №2',
    //           img: {
    //             preview: 'gallery/perila/vhod/2_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/2_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150203,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №3',
    //           img: {
    //             preview: 'gallery/perila/vhod/3_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/3_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150204,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №4',
    //           img: {
    //             preview: 'gallery/perila/vhod/4_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/4_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150205,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №5',
    //           img: {
    //             preview: 'gallery/perila/vhod/5_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/5_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150206,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №6',
    //           img: {
    //             preview: 'gallery/perila/vhod/6_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/6_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150207,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №7',
    //           img: {
    //             preview: 'gallery/perila/vhod/7_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/7_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150208,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №8',
    //           img: {
    //             preview: 'gallery/perila/vhod/8_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/8_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150209,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №9',
    //           img: {
    //             preview: 'gallery/perila/vhod/9_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/9_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150210,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №10',
    //           img: {
    //             preview: 'gallery/perila/vhod/10_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/10_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150211,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №11',
    //           img: {
    //             preview: 'gallery/perila/vhod/11_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/11_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150212,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №12',
    //           img: {
    //             preview: 'gallery/perila/vhod/12_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/12_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150213,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №13',
    //           img: {
    //             preview: 'gallery/perila/vhod/13_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/13_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150214,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №14',
    //           img: {
    //             preview: 'gallery/perila/vhod/14_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/14_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150215,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №15',
    //           img: {
    //             preview: 'gallery/perila/vhod/15_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/15_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150216,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №16',
    //           img: {
    //             preview: 'gallery/perila/vhod/16_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/16_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150217,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №17',
    //           img: {
    //             preview: 'gallery/perila/vhod/17_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/17_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150218,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №18',
    //           img: {
    //             preview: 'gallery/perila/vhod/18_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/18_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150219,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №19',
    //           img: {
    //             preview: 'gallery/perila/vhod/19_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/19_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150220,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №20',
    //           img: {
    //             preview: 'gallery/perila/vhod/20_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/20_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150221,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №21',
    //           img: {
    //             preview: 'gallery/perila/vhod/21_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/21_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150222,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №22',
    //           img: {
    //             preview: 'gallery/perila/vhod/22_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/22_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150223,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №23',
    //           img: {
    //             preview: 'gallery/perila/vhod/23_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/23_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150224,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №24',
    //           img: {
    //             preview: 'gallery/perila/vhod/24_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/24_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150225,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №25',
    //           img: {
    //             preview: 'gallery/perila/vhod/25_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/25_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150226,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №26',
    //           img: {
    //             preview: 'gallery/perila/vhod/26_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/26_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150227,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №27',
    //           img: {
    //             preview: 'gallery/perila/vhod/27_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/27_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150228,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №28',
    //           img: {
    //             preview: 'gallery/perila/vhod/28_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/28_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150229,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №20',
    //           img: {
    //             preview: 'gallery/perila/vhod/29_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/29_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150230,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №30',
    //           img: {
    //             preview: 'gallery/perila/vhod/30_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/30_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150231,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №31',
    //           img: {
    //             preview: 'gallery/perila/vhod/31_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/31_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150232,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №32',
    //           img: {
    //             preview: 'gallery/perila/vhod/32_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/32_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150233,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №33',
    //           img: {
    //             preview: 'gallery/perila/vhod/33_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/33_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150234,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №34',
    //           img: {
    //             preview: 'gallery/perila/vhod/34_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/34_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150235,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №35',
    //           img: {
    //             preview: 'gallery/perila/vhod/35_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/35_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150236,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №36',
    //           img: {
    //             preview: 'gallery/perila/vhod/36_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/36_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150237,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №37',
    //           img: {
    //             preview: 'gallery/perila/vhod/37_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/37_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150238,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №38',
    //           img: {
    //             preview: 'gallery/perila/vhod/38_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/38_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150239,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №39',
    //           img: {
    //             preview: 'gallery/perila/vhod/39_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/39_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150240,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №40',
    //           img: {
    //             preview: 'gallery/perila/vhod/40_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/40_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150241,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №41',
    //           img: {
    //             preview: 'gallery/perila/vhod/41_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/41_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150242,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №42',
    //           img: {
    //             preview: 'gallery/perila/vhod/42_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/42_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150243,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №43',
    //           img: {
    //             preview: 'gallery/perila/vhod/43_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/43_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150244,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №44',
    //           img: {
    //             preview: 'gallery/perila/vhod/44_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/44_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150245,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №45',
    //           img: {
    //             preview: 'gallery/perila/vhod/45_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/45_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150246,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №46',
    //           img: {
    //             preview: 'gallery/perila/vhod/46_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/46_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150247,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №47',
    //           img: {
    //             preview: 'gallery/perila/vhod/47_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/47_vhod_1000x750.jpg',
    //           },
    //         },
    //         // {
    //         // id: 150248,
    //         // title: 'Кованые перила входной группы',
    //         // text: 'Кованые перила входной группы №48',
    //         // img: {
    //         //   preview: 'gallery/perila/vhod/48_vhod_400x300.jpg',
    //         //   original:'gallery/perila/vhod/48_vhod_1000x750.jpg',
    //         // },
    //         // },
    //         {
    //           id: 1502249,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №49',
    //           img: {
    //             preview: 'gallery/perila/vhod/49_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/49_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150250,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №50',
    //           img: {
    //             preview: 'gallery/perila/vhod/50_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/50_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150251,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №51',
    //           img: {
    //             preview: 'gallery/perila/vhod/51_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/51_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150252,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №52',
    //           img: {
    //             preview: 'gallery/perila/vhod/52_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/52_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150253,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №53',
    //           img: {
    //             preview: 'gallery/perila/vhod/53_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/53_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150254,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №54',
    //           img: {
    //             preview: 'gallery/perila/vhod/54_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/54_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150255,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №55',
    //           img: {
    //             preview: 'gallery/perila/vhod/55_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/55_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150256,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №56',
    //           img: {
    //             preview: 'gallery/perila/vhod/56_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/56_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150257,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №57',
    //           img: {
    //             preview: 'gallery/perila/vhod/57_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/57_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150258,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №58',
    //           img: {
    //             preview: 'gallery/perila/vhod/58_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/58_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150259,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №59',
    //           img: {
    //             preview: 'gallery/perila/vhod/59_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/59_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150260,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №60',
    //           img: {
    //             preview: 'gallery/perila/vhod/60_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/60_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150261,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №61',
    //           img: {
    //             preview: 'gallery/perila/vhod/61_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/61_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150262,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №62',
    //           img: {
    //             preview: 'gallery/perila/vhod/62_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/62_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150263,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №63',
    //           img: {
    //             preview: 'gallery/perila/vhod/63_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/63_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150264,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №64',
    //           img: {
    //             preview: 'gallery/perila/vhod/64_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/64_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150265,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №65',
    //           img: {
    //             preview: 'gallery/perila/vhod/65_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/65_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150266,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №66',
    //           img: {
    //             preview: 'gallery/perila/vhod/66_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/66_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150267,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №67',
    //           img: {
    //             preview: 'gallery/perila/vhod/67_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/67_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150268,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №68',
    //           img: {
    //             preview: 'gallery/perila/vhod/68_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/68_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150269,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №69',
    //           img: {
    //             preview: 'gallery/perila/vhod/69_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/69_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150270,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №70',
    //           img: {
    //             preview: 'gallery/perila/vhod/70_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/70_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150271,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №71',
    //           img: {
    //             preview: 'gallery/perila/vhod/71_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/71_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150272,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №72',
    //           img: {
    //             preview: 'gallery/perila/vhod/72_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/72_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150273,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №73',
    //           img: {
    //             preview: 'gallery/perila/vhod/73_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/73_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150274,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №74',
    //           img: {
    //             preview: 'gallery/perila/vhod/74_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/74_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150275,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №75',
    //           img: {
    //             preview: 'gallery/perila/vhod/75_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/75_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150276,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №76',
    //           img: {
    //             preview: 'gallery/perila/vhod/76_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/76_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150277,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №77',
    //           img: {
    //             preview: 'gallery/perila/vhod/77_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/77_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150278,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №78',
    //           img: {
    //             preview: 'gallery/perila/vhod/78_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/78_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150279,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №79',
    //           img: {
    //             preview: 'gallery/perila/vhod/79_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/79_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150280,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №80',
    //           img: {
    //             preview: 'gallery/perila/vhod/80_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/80_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150281,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №81',
    //           img: {
    //             preview: 'gallery/perila/vhod/81_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/81_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150282,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №82',
    //           img: {
    //             preview: 'gallery/perila/vhod/82_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/82_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150283,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №83',
    //           img: {
    //             preview: 'gallery/perila/vhod/83_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/83_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150284,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №84',
    //           img: {
    //             preview: 'gallery/perila/vhod/84_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/84_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150285,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №85',
    //           img: {
    //             preview: 'gallery/perila/vhod/85_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/85_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150286,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №86',
    //           img: {
    //             preview: 'gallery/perila/vhod/86_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/86_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150287,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №87',
    //           img: {
    //             preview: 'gallery/perila/vhod/87_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/87_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150288,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №88',
    //           img: {
    //             preview: 'gallery/perila/vhod/88_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/88_vhod_1000x750.jpg',
    //           },
    //         },
    //         // {
    //         //   id: 150289,
    //         //   title: 'Кованые перила входной группы',
    //         //   text: 'Кованые перила входной группы №89',
    //         //   img: {
    //         //     preview: 'gallery/perila/vhod/89_vhod_400x300.jpg',
    //         //     original:'gallery/perila/vhod/89_vhod_1000x750.jpg',
    //         //   },
    //         // },
    //         {
    //           id: 150290,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №90',
    //           img: {
    //             preview: 'gallery/perila/vhod/90_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/90_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150291,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №91',
    //           img: {
    //             preview: 'gallery/perila/vhod/91_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/91_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150292,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №92',
    //           img: {
    //             preview: 'gallery/perila/vhod/92_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/92_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150293,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №93',
    //           img: {
    //             preview: 'gallery/perila/vhod/93_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/93_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150294,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №94',
    //           img: {
    //             preview: 'gallery/perila/vhod/94_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/94_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150295,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №95',
    //           img: {
    //             preview: 'gallery/perila/vhod/95_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/95_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150296,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №96',
    //           img: {
    //             preview: 'gallery/perila/vhod/96_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/96_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150297,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №97',
    //           img: {
    //             preview: 'gallery/perila/vhod/97_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/97_vhod_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150298,
    //           title: 'Кованые перила входной группы',
    //           text: 'Кованые перила входной группы №98',
    //           img: {
    //             preview: 'gallery/perila/vhod/98_vhod_400x300.jpg',
    //             original:'gallery/perila/vhod/98_vhod_1000x750.jpg',
    //           },
    //         },
    //
    //
    //
    //
    //
    //
    //       ],
    //     },
    //   ]
    // },
    // {
    //   title: 'Кованые балконы',
    //   slug: 'balkoni',
    //   img: {
    //     preview: 'gallery/balkoni/01_balkoni_400x300.jpg',
    //     original:'gallery/balkoni/01_balkoni_1000x750.jpg',
    //   },
    //   text: 'При постройке дома балкон является обязательным элементом. Он не только удобен и уютен, ' +
    //     'но и придает дому большую эстетичность. А если сделать кованое ограждение балкона, он будет ' +
    //     'смотреться особо изящно и притягивать к себе взгляды. Кроме красоты, кованые перила на балконе ' +
    //     'отличаются особой надежностью и стойкостью, поэтому будут радовать вас долгие годы.',
    //   metaData: {
    //     meta: [
    //       { hid:'description-contacts', name: 'description', content: 'Купить кованый балкон по фото, эскизу, на заказ с доставкой и установкой в Москве и Московской области.'},
    //       { name: 'keywords', content: 'купить кованый балкон не дорого, ограждение, балкон, парапет, цена, стоимость, ковка, художественная, изделие, кованые, французские, перила, kovka-mo,кованый балкон,балкон одинцово'},
    //     ],
    //     title: 'Купить кованый балкон - цена и фото, изготовление на заказ в Москве и МО – ковка – от компании Феникс Стальное Решение'
    //   },
    //   price: 'от 5000р кв.м',
    //   types: [
    //     {
    //       title: 'Кованые балконы с прямыеми перилами',
    //       slug: 'balkoni_prymper',
    //       img: {
    //         preview: 'gallery/balkoni/prymper/01_prymper_400x300.jpg',
    //         original:'gallery/balkoni/prymper/01_prymper_1000x750.jpg',
    //       },
    //       products: [
    //         {
    //           id: 57,
    //           title: 'Кованые балконы с прямыеми перилами',
    //           text: 'Кованые балконы с прямыеми перилами №1',
    //           img: {
    //             preview: 'gallery/balkoni/prymper/01_prymper_400x300.jpg',
    //             original:'gallery/balkoni/prymper/01_prymper_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 58,
    //           title: 'Кованые балконы с прямыеми перилами',
    //           text: 'Кованые балконы с прямыеми перилами №2',
    //           img: {
    //             preview: 'gallery/balkoni/prymper/02_prymper_400x300.jpg',
    //             original:'gallery/balkoni/prymper/02_prymper_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 59,
    //           title: 'Кованые балконы с прямыеми перилами',
    //           text: 'Кованые балконы с прямыеми перилами №3',
    //           img: {
    //             preview: 'gallery/balkoni/prymper/03_prymper_400x300.jpg',
    //             original:'gallery/balkoni/prymper/03_prymper_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 60,
    //           title: 'Кованые балконы с прямыеми перилами',
    //           text: 'Кованые балконы с прямыеми перилами №4',
    //           img: {
    //             preview: 'gallery/balkoni/prymper/04_prymper_400x300.jpg',
    //             original:'gallery/balkoni/prymper/04_prymper_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 61,
    //           title: 'Кованые балконы с прямыеми перилами',
    //           text: 'Кованые балконы с прямыеми перилами №5',
    //           img: {
    //             preview: 'gallery/balkoni/prymper/05_prymper_400x300.jpg',
    //             original:'gallery/balkoni/prymper/05_prymper_1000x750.jpg',
    //           },
    //         },
    //
    //       ],
    //     },
    //     {
    //       title: 'Кованые балконы радиусные',
    //       slug: 'balkoni_radius',
    //       img: {
    //         preview: 'gallery/balkoni/radius/01_radius_400x300.jpg',
    //         original:'gallery/balkoni/radius/01_radius_1000x750.jpg',
    //       },
    //       products: [
    //         {
    //           id: 62,
    //           title: 'Кованые балконы радиусные',
    //           text: 'Кованые балконы радиусные №1',
    //           img: {
    //             preview: 'gallery/balkoni/radius/01_radius_400x300.jpg',
    //             original:'gallery/balkoni/radius/01_radius_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 63,
    //           title: 'Кованые балконы радиусные',
    //           text: 'Кованые балконы радиусные №2',
    //           img: {
    //             preview: 'gallery/balkoni/radius/02_radius_400x300.jpg',
    //             original:'gallery/balkoni/radius/02_radius_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 64,
    //           title: 'Кованые балконы радиусные',
    //           text: 'Кованые балконы радиусные №3',
    //           img: {
    //             preview: 'gallery/balkoni/radius/03_radius_400x300.jpg',
    //             original:'gallery/balkoni/radius/03_radius_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 65,
    //           title: 'Кованые балконы радиусные',
    //           text: 'Кованые балконы радиусные №4',
    //           img: {
    //             preview: 'gallery/balkoni/radius/04_radius_400x300.jpg',
    //             original:'gallery/balkoni/radius/04_radius_1000x750.jpg',
    //           },
    //         },
    //         // {
    //         //   id: 66,
    //         //   title: 'Кованые балконы радиусные',
    //         //   text: 'Кованые балконы радиусные №5',
    //         //   img: {
    //         //     preview: 'gallery/balkoni/radius/05_radius_400x300.jpg',
    //         //     original:'gallery/balkoni/radius/05_radius_1000x750.jpg',
    //         //   },
    //         // },
    //       ],
    //     },
    //     {
    //       title: 'Кованые балконы комбинированные',
    //       slug: 'balkoni_combo',
    //       img: {
    //         preview: 'gallery/balkoni/combo/01_combo_400x300.jpg',
    //         original:'gallery/balkoni/combo/01_combo_1000x750.jpg',
    //       },
    //       products: [
    //         {
    //           id: 67,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №1',
    //           img: {
    //             preview: 'gallery/balkoni/combo/01_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/01_combo_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 68,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №2',
    //           img: {
    //             preview: 'gallery/balkoni/combo/02_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/02_combo_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 69,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №3',
    //           img: {
    //             preview: 'gallery/balkoni/combo/03_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/03_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 70,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №4',
    //           img: {
    //             preview: 'gallery/balkoni/combo/04_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/04_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 71,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №5',
    //           img: {
    //             preview: 'gallery/balkoni/combo/05_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/05_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 72,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №6',
    //           img: {
    //             preview: 'gallery/balkoni/combo/06_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/06_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 110007,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №7',
    //           img: {
    //             preview: 'gallery/balkoni/combo/7_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/7_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 110008,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №8',
    //           img: {
    //             preview: 'gallery/balkoni/combo/8_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/8_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 110009,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №9',
    //           img: {
    //             preview: 'gallery/balkoni/combo/9_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/9_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 110010,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №10',
    //           img: {
    //             preview: 'gallery/balkoni/combo/10_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/10_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100011,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №11',
    //           img: {
    //             preview: 'gallery/balkoni/combo/11_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/11_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100012,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №12',
    //           img: {
    //             preview: 'gallery/balkoni/combo/12_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/12_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100013,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №13',
    //           img: {
    //             preview: 'gallery/balkoni/combo/13_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/13_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100014,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №14',
    //           img: {
    //             preview: 'gallery/balkoni/combo/14_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/14_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100015,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №15',
    //           img: {
    //             preview: 'gallery/balkoni/combo/15_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/15_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100016,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №16',
    //           img: {
    //             preview: 'gallery/balkoni/combo/16_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/16_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100017,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №17',
    //           img: {
    //             preview: 'gallery/balkoni/combo/17_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/17_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100018,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №11',
    //           img: {
    //             preview: 'gallery/balkoni/combo/18_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/18_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100019,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №19',
    //           img: {
    //             preview: 'gallery/balkoni/combo/19_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/19_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100020,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №20',
    //           img: {
    //             preview: 'gallery/balkoni/combo/20_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/20_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100021,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №21',
    //           img: {
    //             preview: 'gallery/balkoni/combo/21_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/21_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100022,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №22',
    //           img: {
    //             preview: 'gallery/balkoni/combo/22_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/22_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100023,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №23',
    //           img: {
    //             preview: 'gallery/balkoni/combo/23_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/23_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100024,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №24',
    //           img: {
    //             preview: 'gallery/balkoni/combo/24_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/24_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100025,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №25',
    //           img: {
    //             preview: 'gallery/balkoni/combo/25_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/25_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100026,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №26',
    //           img: {
    //             preview: 'gallery/balkoni/combo/26_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/26_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100011,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №27',
    //           img: {
    //             preview: 'gallery/balkoni/combo/27_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/27_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100028,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №28',
    //           img: {
    //             preview: 'gallery/balkoni/combo/28_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/28_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100029,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №29',
    //           img: {
    //             preview: 'gallery/balkoni/combo/29_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/29_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100030,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №30',
    //           img: {
    //             preview: 'gallery/balkoni/combo/30_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/30_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100031,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №31',
    //           img: {
    //             preview: 'gallery/balkoni/combo/31_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/31_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100032,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №32',
    //           img: {
    //             preview: 'gallery/balkoni/combo/32_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/32_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100033,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №33',
    //           img: {
    //             preview: 'gallery/balkoni/combo/33_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/33_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100034,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №34',
    //           img: {
    //             preview: 'gallery/balkoni/combo/34_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/34_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100035,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №35',
    //           img: {
    //             preview: 'gallery/balkoni/combo/35_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/35_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100036,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №36',
    //           img: {
    //             preview: 'gallery/balkoni/combo/36_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/36_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100037,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №37',
    //           img: {
    //             preview: 'gallery/balkoni/combo/37_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/37_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100038,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №38',
    //           img: {
    //             preview: 'gallery/balkoni/combo/38_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/38_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100039,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №39',
    //           img: {
    //             preview: 'gallery/balkoni/combo/39_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/39_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100040,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №40',
    //           img: {
    //             preview: 'gallery/balkoni/combo/40_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/40_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100041,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №41',
    //           img: {
    //             preview: 'gallery/balkoni/combo/41_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/41_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100042,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №42',
    //           img: {
    //             preview: 'gallery/balkoni/combo/42_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/42_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100043,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №43',
    //           img: {
    //             preview: 'gallery/balkoni/combo/43_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/43_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100044,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №44',
    //           img: {
    //             preview: 'gallery/balkoni/combo/44_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/44_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100045,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №45',
    //           img: {
    //             preview: 'gallery/balkoni/combo/45_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/45_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100046,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №46',
    //           img: {
    //             preview: 'gallery/balkoni/combo/46_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/46_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100047,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №47',
    //           img: {
    //             preview: 'gallery/balkoni/combo/47_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/47_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100048,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №48',
    //           img: {
    //             preview: 'gallery/balkoni/combo/48_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/48_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100049,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №49',
    //           img: {
    //             preview: 'gallery/balkoni/combo/49_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/49_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100050,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №50',
    //           img: {
    //             preview: 'gallery/balkoni/combo/50_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/50_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100051,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №51',
    //           img: {
    //             preview: 'gallery/balkoni/combo/51_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/51_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100052,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №52',
    //           img: {
    //             preview: 'gallery/balkoni/combo/52_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/52_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100053,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №53',
    //           img: {
    //             preview: 'gallery/balkoni/combo/53_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/53_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100054,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №54',
    //           img: {
    //             preview: 'gallery/balkoni/combo/54_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/54_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100055,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №55',
    //           img: {
    //             preview: 'gallery/balkoni/combo/55_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/55_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100056,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №56',
    //           img: {
    //             preview: 'gallery/balkoni/combo/56_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/56_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100057,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №57',
    //           img: {
    //             preview: 'gallery/balkoni/combo/57_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/57_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100058,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №58',
    //           img: {
    //             preview: 'gallery/balkoni/combo/58_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/58_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100059,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №59',
    //           img: {
    //             preview: 'gallery/balkoni/combo/59_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/59_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100060,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №60',
    //           img: {
    //             preview: 'gallery/balkoni/combo/60_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/60_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100061,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №61',
    //           img: {
    //             preview: 'gallery/balkoni/combo/61_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/61_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100011,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №62',
    //           img: {
    //             preview: 'gallery/balkoni/combo/62_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/62_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100011,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №63',
    //           img: {
    //             preview: 'gallery/balkoni/combo/63_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/63_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100011,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №64',
    //           img: {
    //             preview: 'gallery/balkoni/combo/64_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/64_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100065,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №65',
    //           img: {
    //             preview: 'gallery/balkoni/combo/65_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/65_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100066,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №66',
    //           img: {
    //             preview: 'gallery/balkoni/combo/66_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/66_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100067,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №67',
    //           img: {
    //             preview: 'gallery/balkoni/combo/67_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/67_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100068,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №68',
    //           img: {
    //             preview: 'gallery/balkoni/combo/68_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/68_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100069,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №69',
    //           img: {
    //             preview: 'gallery/balkoni/combo/69_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/69_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100070,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №70',
    //           img: {
    //             preview: 'gallery/balkoni/combo/70_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/70_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100071,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №71',
    //           img: {
    //             preview: 'gallery/balkoni/combo/71_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/71_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100072,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №72',
    //           img: {
    //             preview: 'gallery/balkoni/combo/72_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/72_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100073,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №73',
    //           img: {
    //             preview: 'gallery/balkoni/combo/73_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/73_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100074,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №74',
    //           img: {
    //             preview: 'gallery/balkoni/combo/74_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/74_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100075,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №75',
    //           img: {
    //             preview: 'gallery/balkoni/combo/75_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/75_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100076,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №76',
    //           img: {
    //             preview: 'gallery/balkoni/combo/76_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/76_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100077,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №77',
    //           img: {
    //             preview: 'gallery/balkoni/combo/77_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/77_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100078,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №78',
    //           img: {
    //             preview: 'gallery/balkoni/combo/78_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/78_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100079,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №79',
    //           img: {
    //             preview: 'gallery/balkoni/combo/79_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/79_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100080,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №80',
    //           img: {
    //             preview: 'gallery/balkoni/combo/80_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/80_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100081,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №81',
    //           img: {
    //             preview: 'gallery/balkoni/combo/81_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/81_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100082,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №82',
    //           img: {
    //             preview: 'gallery/balkoni/combo/82_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/82_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100083,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №83',
    //           img: {
    //             preview: 'gallery/balkoni/combo/83_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/83_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100084,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №84',
    //           img: {
    //             preview: 'gallery/balkoni/combo/84_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/84_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100085,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №85',
    //           img: {
    //             preview: 'gallery/balkoni/combo/85_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/85_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100086,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №86',
    //           img: {
    //             preview: 'gallery/balkoni/combo/86_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/86_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100087,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №87',
    //           img: {
    //             preview: 'gallery/balkoni/combo/87_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/87_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100088,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №88',
    //           img: {
    //             preview: 'gallery/balkoni/combo/88_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/88_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100089,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №89',
    //           img: {
    //             preview: 'gallery/balkoni/combo/89_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/89_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100090,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №90',
    //           img: {
    //             preview: 'gallery/balkoni/combo/90_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/90_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100091,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №91',
    //           img: {
    //             preview: 'gallery/balkoni/combo/91_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/91_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100092,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №92',
    //           img: {
    //             preview: 'gallery/balkoni/combo/92_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/92_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100093,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №93',
    //           img: {
    //             preview: 'gallery/balkoni/combo/93_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/93_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100094,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №94',
    //           img: {
    //             preview: 'gallery/balkoni/combo/94_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/94_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100095,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №95',
    //           img: {
    //             preview: 'gallery/balkoni/combo/95_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/95_combo_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1100096,
    //           title: 'Кованые балконы комбинированные',
    //           text: 'Кованые балконы комбинированные №96',
    //           img: {
    //             preview: 'gallery/balkoni/combo/96_combo_400x300.jpg',
    //             original:'gallery/balkoni/combo/96_combo_1000x750.jpg',
    //           },
    //         },
    //       ],
    //     }
    //   ]
    // },
    // {
    //   title: 'Кованые козырьки',
    //   slug: 'kozirky',
    //   img: {
    //     preview: 'gallery/kozirky/01_kozirky_400x300.jpg',
    //     original:'gallery/kozirky/01_kozirky_1000x750.jpg',
    //   },
    //   text: 'Кованый козырек является функциональной и практичной конструкцией, отличающейся надежностью, презентабельным и оригинальным дизайном.' +
    //     ' Существует множество видов данных изделий. В качестве критерия для деления на группы выступает форма, технология изготовления, место расположения.',
    //   metaData: {
    //     meta: [
    //       { hid:'description-contacts', name: 'description', content: 'Купить кованые козырьки в Москве и Московской области. Фотографии с ценами.'},
    //       { name: 'keywords', content: 'купить кованые козырьки не дорого, ковка, художественная, кованые, козырьки, цена, стоимость, вход, дверь, установка, kovka-mo,кованный козырьки,козырьки одинцово'},
    //     ],
    //     title: 'Купить кованые козырьки - цена и фото, изготовление на заказ в Москве и МО – ковка – от компании Феникс Стальное Решение'
    //   },
    //   price: 'от 10000р кв.м',
    //   types: [
    //     {
    //       title: 'Кованые козырьки',
    //       slug: 'kozirky_1',
    //       img: {
    //         preview: 'gallery/kozirky/01_kozirky_400x300.jpg',
    //         original:'gallery/kozirky/01_kozirky_1000x750.jpg',
    //       },
    //       products: [
    //         {
    //           id: 73,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №1',
    //           img: {
    //             preview: 'gallery/kozirky/01_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/01_kozirky_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 74,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №2',
    //           img: {
    //             preview: 'gallery/kozirky/02_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/02_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 75,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №3',
    //           img: {
    //             preview: 'gallery/kozirky/03_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/03_kozirky_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 76,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №4',
    //           img: {
    //             preview: 'gallery/kozirky/04_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/04_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 77,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №5',
    //           img: {
    //             preview: 'gallery/kozirky/05_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/05_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 78,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №6',
    //           img: {
    //             preview: 'gallery/kozirky/06_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/06_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 79,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №7',
    //           img: {
    //             preview: 'gallery/kozirky/07_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/07_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 80,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №8',
    //           img: {
    //             preview: 'gallery/kozirky/08_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/08_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 81,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №9',
    //           img: {
    //             preview: 'gallery/kozirky/09_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/09_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130510,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №10',
    //           img: {
    //             preview: 'gallery/kozirky/10_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/10_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130511,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №11',
    //           img: {
    //             preview: 'gallery/kozirky/11_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/11_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130512,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №12',
    //           img: {
    //             preview: 'gallery/kozirky/12_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/12_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130513,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №13',
    //           img: {
    //             preview: 'gallery/kozirky/13_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/13_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130514,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №14',
    //           img: {
    //             preview: 'gallery/kozirky/14_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/14_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130515,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №15',
    //           img: {
    //             preview: 'gallery/kozirky/15_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/15_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130516,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №16',
    //           img: {
    //             preview: 'gallery/kozirky/16_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/16_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130517,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №17',
    //           img: {
    //             preview: 'gallery/kozirky/17_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/17_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130518,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №18',
    //           img: {
    //             preview: 'gallery/kozirky/18_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/18_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130519,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №19',
    //           img: {
    //             preview: 'gallery/kozirky/19_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/19_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130520,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №20',
    //           img: {
    //             preview: 'gallery/kozirky/20_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/20_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130521,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №21',
    //           img: {
    //             preview: 'gallery/kozirky/21_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/21_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130522,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №22',
    //           img: {
    //             preview: 'gallery/kozirky/22_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/22_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130523,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №23',
    //           img: {
    //             preview: 'gallery/kozirky/23_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/23_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130524,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №24',
    //           img: {
    //             preview: 'gallery/kozirky/24_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/24_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130525,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №25',
    //           img: {
    //             preview: 'gallery/kozirky/25_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/25_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130526,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №26',
    //           img: {
    //             preview: 'gallery/kozirky/26_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/26_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130527,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №27',
    //           img: {
    //             preview: 'gallery/kozirky/27_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/27_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130528,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №28',
    //           img: {
    //             preview: 'gallery/kozirky/28_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/28_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130529,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №29',
    //           img: {
    //             preview: 'gallery/kozirky/29_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/29_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130530,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №30',
    //           img: {
    //             preview: 'gallery/kozirky/30_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/30_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130531,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №31',
    //           img: {
    //             preview: 'gallery/kozirky/31_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/31_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130532,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №32',
    //           img: {
    //             preview: 'gallery/kozirky/32_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/32_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130533,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №33',
    //           img: {
    //             preview: 'gallery/kozirky/33_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/33_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130534,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №34',
    //           img: {
    //             preview: 'gallery/kozirky/34_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/34_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130535,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №35',
    //           img: {
    //             preview: 'gallery/kozirky/35_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/35_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130536,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №36',
    //           img: {
    //             preview: 'gallery/kozirky/36_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/36_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130537,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №37',
    //           img: {
    //             preview: 'gallery/kozirky/37_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/37_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130538,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №38',
    //           img: {
    //             preview: 'gallery/kozirky/38_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/38_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130539,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №39',
    //           img: {
    //             preview: 'gallery/kozirky/39_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/39_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130540,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №40',
    //           img: {
    //             preview: 'gallery/kozirky/40_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/40_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130541,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №41',
    //           img: {
    //             preview: 'gallery/kozirky/41_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/41_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130542,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №42',
    //           img: {
    //             preview: 'gallery/kozirky/42_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/42_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130543,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №43',
    //           img: {
    //             preview: 'gallery/kozirky/43_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/43_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130544,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №44',
    //           img: {
    //             preview: 'gallery/kozirky/44_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/44_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130545,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №45',
    //           img: {
    //             preview: 'gallery/kozirky/45_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/45_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130546,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №46',
    //           img: {
    //             preview: 'gallery/kozirky/46_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/46_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130547,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №47',
    //           img: {
    //             preview: 'gallery/kozirky/47_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/47_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130548,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №48',
    //           img: {
    //             preview: 'gallery/kozirky/48_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/48_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130549,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №49',
    //           img: {
    //             preview: 'gallery/kozirky/49_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/49_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130550,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №50',
    //           img: {
    //             preview: 'gallery/kozirky/50_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/50_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130551,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №51',
    //           img: {
    //             preview: 'gallery/kozirky/51_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/51_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130552,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №52',
    //           img: {
    //             preview: 'gallery/kozirky/52_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/52_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130553,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №53',
    //           img: {
    //             preview: 'gallery/kozirky/53_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/53_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130554,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №54',
    //           img: {
    //             preview: 'gallery/kozirky/54_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/54_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130555,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №55',
    //           img: {
    //             preview: 'gallery/kozirky/55_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/55_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130556,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №56',
    //           img: {
    //             preview: 'gallery/kozirky/56_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/56_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130557,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №57',
    //           img: {
    //             preview: 'gallery/kozirky/57_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/57_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130558,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №58',
    //           img: {
    //             preview: 'gallery/kozirky/58_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/58_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130559,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №59',
    //           img: {
    //             preview: 'gallery/kozirky/59_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/59_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130560,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №60',
    //           img: {
    //             preview: 'gallery/kozirky/60_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/60_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130561,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №61',
    //           img: {
    //             preview: 'gallery/kozirky/61_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/61_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130562,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №62',
    //           img: {
    //             preview: 'gallery/kozirky/62_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/62_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130563,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №63',
    //           img: {
    //             preview: 'gallery/kozirky/63_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/63_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130564,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №64',
    //           img: {
    //             preview: 'gallery/kozirky/64_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/64_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130565,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №65',
    //           img: {
    //             preview: 'gallery/kozirky/65_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/65_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130566,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №66',
    //           img: {
    //             preview: 'gallery/kozirky/66_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/66_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130567,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №67',
    //           img: {
    //             preview: 'gallery/kozirky/67_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/67_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130568,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №68',
    //           img: {
    //             preview: 'gallery/kozirky/68_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/68_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130569,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №69',
    //           img: {
    //             preview: 'gallery/kozirky/69_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/69_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130570,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №70',
    //           img: {
    //             preview: 'gallery/kozirky/70_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/70_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130571,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №71',
    //           img: {
    //             preview: 'gallery/kozirky/71_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/71_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130572,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №72',
    //           img: {
    //             preview: 'gallery/kozirky/72_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/72_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130573,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №73',
    //           img: {
    //             preview: 'gallery/kozirky/73_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/73_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130574,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №74',
    //           img: {
    //             preview: 'gallery/kozirky/74_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/74_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130575,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №75',
    //           img: {
    //             preview: 'gallery/kozirky/75_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/75_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130576,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №76',
    //           img: {
    //             preview: 'gallery/kozirky/76_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/76_kozirky_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130577,
    //           title: 'Кованые козырьки',
    //           text: 'Кованые козырьки №77',
    //           img: {
    //             preview: 'gallery/kozirky/77_kozirky_400x300.jpg',
    //             original:'gallery/kozirky/77_kozirky_1000x750.jpg',
    //           },
    //         },
    //
    //
    //
    //
    //       ],
    //     },
    //
    //   ]
    // },
    // {
    //   title: 'Кованые заборы',
    //   slug: 'zabory',
    //   img: {
    //     preview: 'gallery/zabor/zaborpk/1_zaborpk_400x300.jpg',
    //     original:'gallery/zabor/zaborpk/1_zaborpk_1000x750.jpg',
    //   },
    //   text: 'Кованые заборы находят свое применение во многих местах. Такая ограда может быть вокруг территории частного дома или дачного участка. Ажурный металлический забор может украшать ' +
    //     'и охранять пространство вокруг зданий, в которых располагаются различные государственные учреждения. Он становится естественным дополнением общественного или частного парка.',
    //   metaData: {
    //     meta: [
    //       { hid:'description-contacts', name: 'description', content: 'Купить кованые заборы по эскизу и на заказ в Москве и Московской области'},
    //       { name: 'keywords', content: 'купить кованые заборы не дорого, ковка, художественная, кованые, заборы, ограды, цена, стоимость, kovka-mo,кованые заборы,заборы одинцово'},
    //     ],
    //     title: 'Купить кованые заборы - цена и фото, изготовление на заказ в Москве и МО – ковка – от компании Феникс Стальное Решение'
    //   },
    //   price: 'от 5000р кв.м',
    //   types: [
    //     {
    //       title: 'Кованые заборы с поликарбонатом',
    //       slug: 'zabory_pk',
    //       img: {
    //         preview: 'gallery/zabor/zaborpk/1_zaborpk_400x300.jpg',
    //         original:'gallery/zabor/zaborpk/1_zaborpk_1000x750.jpg',
    //       },
    //       products: [
    //         {
    //           id: 82,
    //           title: 'Кованые заборы с поликарбонатом',
    //           text: 'Кованые заборы с поликарбонатом №1',
    //           img: {
    //             preview: 'gallery/zabor/zaborpk/1_zaborpk_400x300.jpg',
    //             original:'gallery/zabor/zaborpk/1_zaborpk_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 83,
    //           title: 'Кованые заборы с поликарбонатом',
    //           text: 'Кованые заборы с поликарбонатом №2',
    //           img: {
    //             preview: 'gallery/zabor/zaborpk/2_zaborpk_400x300.jpg',
    //             original:'gallery/zabor/zaborpk/2_zaborpk_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 84,
    //           title: 'Кованые заборы с поликарбонатом',
    //           text: 'Кованые заборы с поликарбонатом №3',
    //           img: {
    //             preview: 'gallery/zabor/zaborpk/3_zaborpk_400x300.jpg',
    //             original:'gallery/zabor/zaborpk/3_zaborpk_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 85,
    //           title: 'Кованые заборы с поликарбонатом',
    //           text: 'Кованые заборы с поликарбонатом №4',
    //           img: {
    //             preview: 'gallery/zabor/zaborpk/4_zaborpk_400x300.jpg',
    //             original:'gallery/zabor/zaborpk/4_zaborpk_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 86,
    //           title: 'Кованые заборы с поликарбонатом',
    //           text: 'Кованые заборы с поликарбонатом №5',
    //           img: {
    //             preview: 'gallery/zabor/zaborpk/5_zaborpk_400x300.jpg',
    //             original:'gallery/zabor/zaborpk/5_zaborpk_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 87,
    //           title: 'Кованые заборы с поликарбонатом',
    //           text: 'Кованые заборы с поликарбонатом №6',
    //           img: {
    //             preview: 'gallery/zabor/zaborpk/6_zaborpk_400x300.jpg',
    //             original:'gallery/zabor/zaborpk/6_zaborpk_1000x750.jpg',
    //           },
    //         },
    //         // {
    //         //   id: 88,
    //         //   title: 'Кованые заборы с поликарбонатом',
    //         //   text: 'Кованые заборы с поликарбонатом №7',
    //         //   img: {
    //         //     preview: 'gallery/zabor/zaborpk/7_zaborpk_400x300.jpg',
    //         //     original:'gallery/zabor/zaborpk/7_zaborpk_1000x750.jpg',
    //         //   },
    //         // },
    //       ],
    //     },
    //     {
    //       title: 'Кованые заборы с железным листом',
    //       slug: 'zabory_stal',
    //       img: {
    //         preview: 'gallery/zabor/zaborstal/1_zaborstal_400x300.jpg',
    //         original:'gallery/zabor/zaborstal/1_zaborstal_1000x750.jpg',
    //       },
    //       products: [
    //         {
    //           id: 89,
    //           title: 'Кованые заборы с железным листом',
    //           text: 'Кованые заборы с железным листом №1',
    //           img: {
    //             preview: 'gallery/zabor/zaborstal/1_zaborstal_400x300.jpg',
    //             original:'gallery/zabor/zaborstal/1_zaborstal_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 90,
    //           title: 'Кованые заборы с железным листом',
    //           text: 'Кованые заборы с железным листом №2',
    //           img: {
    //             preview: 'gallery/zabor/zaborstal/2_zaborstal_400x300.jpg',
    //             original:'gallery/zabor/zaborstal/2_zaborstal_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 91,
    //           title: 'Кованые заборы с железным листом',
    //           text: 'Кованые заборы с железным листом №3',
    //           img: {
    //             preview: 'gallery/zabor/zaborstal/3_zaborstal_400x300.jpg',
    //             original:'gallery/zabor/zaborstal/3_zaborstal_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 92,
    //           title: 'Кованые заборы с железным листом',
    //           text: 'Кованые заборы с железным листом №4',
    //           img: {
    //             preview: 'gallery/zabor/zaborstal/4_zaborstal_400x300.jpg',
    //             original:'gallery/zabor/zaborstal/4_zaborstal_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 93,
    //           title: 'Кованые заборы с железным листом',
    //           text: 'Кованые заборы с железным листом №5',
    //           img: {
    //             preview: 'gallery/zabor/zaborstal/5_zaborstal_400x300.jpg',
    //             original:'gallery/zabor/zaborstal/5_zaborstal_1000x750.jpg',
    //           },
    //         },
    //       ],
    //     },
    //     {
    //       title: 'Кованые заборы с профлистом',
    //       slug: 'zabory_stal',
    //       img: {
    //         preview: 'gallery/zabor/zaborstalprof/1_zaborstalprof_400x300.jpg',
    //         original:'gallery/zabor/zaborstalprof/1_zaborstalprof_1000x750.jpg',
    //       },
    //       products: [
    //         {
    //           id: 94,
    //           title: 'Кованые заборы с профлистом',
    //           text: 'Кованые заборы с профлистом №1',
    //           img: {
    //             preview: 'gallery/zabor/zaborstalprof/1_zaborstalprof_400x300.jpg',
    //             original:'gallery/zabor/zaborstalprof/1_zaborstalprof_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 95,
    //           title: 'Кованые заборы с профлистом',
    //           text: 'Кованые заборы с профлистом №2',
    //           img: {
    //             preview: 'gallery/zabor/zaborstalprof/2_zaborstalprof_400x300.jpg',
    //             original:'gallery/zabor/zaborstalprof/2_zaborstalprof_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 96,
    //           title: 'Кованые заборы с профлистом',
    //           text: 'Кованые заборы с профлистом №3',
    //           img: {
    //             preview: 'gallery/zabor/zaborstalprof/3_zaborstalprof_400x300.jpg',
    //             original:'gallery/zabor/zaborstalprof/3_zaborstalprof_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 97,
    //           title: 'Кованые заборы с профлистом',
    //           text: 'Кованые заборы с профлистом №4',
    //           img: {
    //             preview: 'gallery/zabor/zaborstalprof/4_zaborstalprof_400x300.jpg',
    //             original:'gallery/zabor/zaborstalprof/4_zaborstalprof_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 98,
    //           title: 'Кованые заборы с профлистом',
    //           text: 'Кованые заборы с профлистом №5',
    //           img: {
    //             preview: 'gallery/zabor/zaborstalprof/5_zaborstalprof_400x300.jpg',
    //             original:'gallery/zabor/zaborstalprof/5_zaborstalprof_1000x750.jpg',
    //           },
    //         },
    //       ],
    //     },
    //     {
    //       title: 'Кованые заборы с кирпичом',
    //       slug: 'zabory_stal',
    //       img: {
    //         preview: 'gallery/zabor/zaborkirp/1_zaborkirp_400x300.jpg',
    //         original:'gallery/zabor/zaborkirp/1_zaborkirp_1000x750.jpg',
    //       },
    //       products: [
    //         {
    //           id: 99,
    //           title: 'Кованые заборы с кирпичом',
    //           text: 'Кованые заборы с кирпичом №1',
    //           img: {
    //             preview: 'gallery/zabor/zaborkirp/1_zaborkirp_400x300.jpg',
    //             original:'gallery/zabor/zaborkirp/1_zaborkirp_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 100,
    //           title: 'Кованые заборы с кирпичом',
    //           text: 'Кованые заборы с кирпичом №2',
    //           img: {
    //             preview: 'gallery/zabor/zaborkirp/2_zaborkirp_400x300.jpg',
    //             original:'gallery/zabor/zaborkirp/2_zaborkirp_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 101,
    //           title: 'Кованые заборы с кирпичом',
    //           text: 'Кованые заборы с кирпичом №3',
    //           img: {
    //             preview: 'gallery/zabor/zaborkirp/3_zaborkirp_400x300.jpg',
    //             original:'gallery/zabor/zaborkirp/3_zaborkirp_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 102,
    //           title: 'Кованые заборы с кирпичом',
    //           text: 'Кованые заборы с кирпичом №4',
    //           img: {
    //             preview: 'gallery/zabor/zaborkirp/4_zaborkirp_400x300.jpg',
    //             original:'gallery/zabor/zaborkirp/4_zaborkirp_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130405,
    //           title: 'Кованые заборы с кирпичом',
    //           text: 'Кованые заборы с кирпичом №5',
    //           img: {
    //             preview: 'gallery/zabor/zaborkirp/5_zaborkirp_400x300.jpg',
    //             original:'gallery/zabor/zaborkirp/5_zaborkirp_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130406,
    //           title: 'Кованые заборы с кирпичом',
    //           text: 'Кованые заборы с кирпичом №6',
    //           img: {
    //             preview: 'gallery/zabor/zaborkirp/6_zaborkirp_400x300.jpg',
    //             original:'gallery/zabor/zaborkirp/6_zaborkirp_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130407,
    //           title: 'Кованые заборы с кирпичом',
    //           text: 'Кованые заборы с кирпичом №7',
    //           img: {
    //             preview: 'gallery/zabor/zaborkirp/7_zaborkirp_400x300.jpg',
    //             original:'gallery/zabor/zaborkirp/7_zaborkirp_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130408,
    //           title: 'Кованые заборы с кирпичом',
    //           text: 'Кованые заборы с кирпичом №8',
    //           img: {
    //             preview: 'gallery/zabor/zaborkirp/8_zaborkirp_400x300.jpg',
    //             original:'gallery/zabor/zaborkirp/8_zaborkirp_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130409,
    //           title: 'Кованые заборы с кирпичом',
    //           text: 'Кованые заборы с кирпичом №9',
    //           img: {
    //             preview: 'gallery/zabor/zaborkirp/9_zaborkirp_400x300.jpg',
    //             original:'gallery/zabor/zaborkirp/9_zaborkirp_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130410,
    //           title: 'Кованые заборы с кирпичом',
    //           text: 'Кованые заборы с кирпичом №10',
    //           img: {
    //             preview: 'gallery/zabor/zaborkirp/10_zaborkirp_400x300.jpg',
    //             original:'gallery/zabor/zaborkirp/10_zaborkirp_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130411,
    //           title: 'Кованые заборы с кирпичом',
    //           text: 'Кованые заборы с кирпичом №11',
    //           img: {
    //             preview: 'gallery/zabor/zaborkirp/11_zaborkirp_400x300.jpg',
    //             original:'gallery/zabor/zaborkirp/11_zaborkirp_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130412,
    //           title: 'Кованые заборы с кирпичом',
    //           text: 'Кованые заборы с кирпичом №12',
    //           img: {
    //             preview: 'gallery/zabor/zaborkirp/12_zaborkirp_400x300.jpg',
    //             original:'gallery/zabor/zaborkirp/12_zaborkirp_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130413,
    //           title: 'Кованые заборы с кирпичом',
    //           text: 'Кованые заборы с кирпичом №13',
    //           img: {
    //             preview: 'gallery/zabor/zaborkirp/13_zaborkirp_400x300.jpg',
    //             original:'gallery/zabor/zaborkirp/13_zaborkirp_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130414,
    //           title: 'Кованые заборы с кирпичом',
    //           text: 'Кованые заборы с кирпичом №14',
    //           img: {
    //             preview: 'gallery/zabor/zaborkirp/14_zaborkirp_400x300.jpg',
    //             original:'gallery/zabor/zaborkirp/14_zaborkirp_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130415,
    //           title: 'Кованые заборы с кирпичом',
    //           text: 'Кованые заборы с кирпичом №15',
    //           img: {
    //             preview: 'gallery/zabor/zaborkirp/15_zaborkirp_400x300.jpg',
    //             original:'gallery/zabor/zaborkirp/15_zaborkirp_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130416,
    //           title: 'Кованые заборы с кирпичом',
    //           text: 'Кованые заборы с кирпичом №16',
    //           img: {
    //             preview: 'gallery/zabor/zaborkirp/16_zaborkirp_400x300.jpg',
    //             original:'gallery/zabor/zaborkirp/16_zaborkirp_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130417,
    //           title: 'Кованые заборы с кирпичом',
    //           text: 'Кованые заборы с кирпичом №17',
    //           img: {
    //             preview: 'gallery/zabor/zaborkirp/17_zaborkirp_400x300.jpg',
    //             original:'gallery/zabor/zaborkirp/17_zaborkirp_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130418,
    //           title: 'Кованые заборы с кирпичом',
    //           text: 'Кованые заборы с кирпичом №18',
    //           img: {
    //             preview: 'gallery/zabor/zaborkirp/18_zaborkirp_400x300.jpg',
    //             original:'gallery/zabor/zaborkirp/18_zaborkirp_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130419,
    //           title: 'Кованые заборы с кирпичом',
    //           text: 'Кованые заборы с кирпичом №19',
    //           img: {
    //             preview: 'gallery/zabor/zaborkirp/19_zaborkirp_400x300.jpg',
    //             original:'gallery/zabor/zaborkirp/19_zaborkirp_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130420,
    //           title: 'Кованые заборы с кирпичом',
    //           text: 'Кованые заборы с кирпичом №20',
    //           img: {
    //             preview: 'gallery/zabor/zaborkirp/20_zaborkirp_400x300.jpg',
    //             original:'gallery/zabor/zaborkirp/20_zaborkirp_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130421,
    //           title: 'Кованые заборы с кирпичом',
    //           text: 'Кованые заборы с кирпичом №21',
    //           img: {
    //             preview: 'gallery/zabor/zaborkirp/21_zaborkirp_400x300.jpg',
    //             original:'gallery/zabor/zaborkirp/21_zaborkirp_1000x750.jpg',
    //           },
    //         },
    //
    //       ],
    //     }
    //   ]
    // },
    // {
    //   title: 'Кованые навесы',
    //   slug: 'navesi',
    //   img: {
    //     preview: 'gallery/naves/arch/45_arch_400x300.jpg',
    //     original:'gallery/naves/arch/45_arch_1000x750.jpg',
    //   },
    //   text: 'Кованые навесы – роскошь, оригинальность, красота, изящество и особый шик архитектурного ансамбля. ' +
    //     'Такие изделия становятся настоящим украшением парков, частных участков, фасадов жилых, административных, офисных зданий, коттеджей и маленьких дачных домиков.',
    //   metaData: {
    //     meta: [
    //       { hid:'description-contacts', name: 'description', content: 'Купить кованые навесы изготовления на заказ с доставкой и установкой в Москве и Московской области. Фотографии и эскизы кованых навесов.'},
    //       { name: 'keywords', content: 'купить кованые навесы не дорого, ковка, художественная, кованые, навесы, крыльцо, сад, бассейн, арочные, поликарбонат, беседка, крыльцо, цена, стоимость, kovka-mo,кованые навесы,навесы одинцово'},
    //     ],
    //     title: 'Купить кованые навесы - цена и фото, изготовление на заказ в Москве и МО – ковка – от компании Феникс Стальное Решение'
    //   },
    //   price: 'от 3500р кв.м',
    //   types: [
    //     /////////////////////////Навесы////////////////////////////////////
    //     {
    //       title: 'Кованые навесы арочные',
    //       slug: 'navesi_2',
    //       img: {
    //         preview: 'gallery/naves/arch/45_arch_400x300.jpg',
    //         original:'gallery/naves/arch/45_arch_1000x750.jpg',
    //       },
    //       products: [
    //         {
    //           id: 1030,
    //           title: 'Кованые навесы арочные',
    //           text: 'Кованые навесы  арочные №1',
    //           img: {
    //             preview: 'gallery/naves/arch/01_arched_400x300.jpg',
    //             original:'gallery/naves/arch/01_arched_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1031,
    //           title: 'Кованые навесы арочные',
    //           text: 'Кованые навесы  арочные №2',
    //           img: {
    //             preview: 'gallery/naves/arch/02_arched_400x300.jpg',
    //             original:'gallery/naves/arch/02_arched_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 1032,
    //           title: 'Кованые навесы арочные',
    //           text: 'Кованые навесы  арочные №3',
    //           img: {
    //             preview: 'gallery/naves/arch/03_arched_400x300.jpg',
    //             original:'gallery/naves/arch/03_arched_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1033,
    //           title: 'Кованые навесы арочные',
    //           text: 'Кованые навесы  арочные №4',
    //           img: {
    //             preview: 'gallery/naves/arch/04_arched_400x300.jpg',
    //             original:'gallery/naves/arch/04_arched_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1034,
    //           title: 'Кованые навесы арочные',
    //           text: 'Кованые навесы  арочные №4',
    //           img: {
    //             preview: 'gallery/naves/arch/05_arched_400x300.jpg',
    //             original:'gallery/naves/arch/05_arched_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1035,
    //           title: 'Кованые навесы арочные',
    //           text: 'Кованые навесы  арочные №6',
    //           img: {
    //             preview: 'gallery/naves/arch/06_arched_400x300.jpg',
    //             original:'gallery/naves/arch/06_arched_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1036,
    //           title: 'Кованые навесы арочные',
    //           text: 'Кованые навесы  арочные №7',
    //           img: {
    //             preview: 'gallery/naves/arch/07_arched_400x300.jpg',
    //             original:'gallery/naves/arch/07_arched_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1037,
    //           title: 'Кованые навесы арочные',
    //           text: 'Кованые навесы  арочные №8',
    //           img: {
    //             preview: 'gallery/naves/arch/08_arched_400x300.jpg',
    //             original:'gallery/naves/arch/08_arched_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1038,
    //           title: 'Кованые навесы арочные',
    //           text: 'Кованые навесы  арочные №9',
    //           img: {
    //             preview: 'gallery/naves/arch/09_arched_400x300.jpg',
    //             original:'gallery/naves/arch/09_arched_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1039,
    //           title: 'Кованые навесы арочные',
    //           text: 'Кованые навесы  арочные №10',
    //           img: {
    //             preview: 'gallery/naves/arch/10_arched_400x300.jpg',
    //             original:'gallery/naves/arch/10_arched_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1040,
    //           title: 'Кованые навесы арочные',
    //           text: 'Кованые навесы  арочные №11',
    //           img: {
    //             preview: 'gallery/naves/arch/11_arched_400x300.jpg',
    //             original:'gallery/naves/arch/11_arched_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1041,
    //           title: 'Кованые навесы арочные',
    //           text: 'Кованые навесы  арочные №12',
    //           img: {
    //             preview: 'gallery/naves/arch/12_arched_400x300.jpg',
    //             original:'gallery/naves/arch/12_arched_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1042,
    //           title: 'Кованые навесы арочные',
    //           text: 'Кованые навесы  арочные №13',
    //           img: {
    //             preview: 'gallery/naves/arch/13_arched_400x300.jpg',
    //             original:'gallery/naves/arch/13_arched_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1043,
    //           title: 'Кованые навесы арочные',
    //           text: 'Кованые навесы  арочные №14',
    //           img: {
    //             preview: 'gallery/naves/arch/14_arched_400x300.jpg',
    //             original:'gallery/naves/arch/14_arched_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1044,
    //           title: 'Кованые навесы арочные',
    //           text: 'Кованые навесы  арочные №15',
    //           img: {
    //             preview: 'gallery/naves/arch/15_arched_400x300.jpg',
    //             original:'gallery/naves/arch/15_arched_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 103,
    //           title: 'Кованые навесы арочные',
    //           text: 'Кованые навесы №16',
    //           img: {
    //             preview: 'gallery/naves/1_naves_400x300.jpg',
    //             original:'gallery/naves/1_naves_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 105,
    //           title: 'Кованые навесы арочные',
    //           text: 'Кованые навесы арочные №17',
    //           img: {
    //             preview: 'gallery/naves/3_naves_400x300.jpg',
    //             original:'gallery/naves/3_naves_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 106,
    //           title: 'Кованые навесы арочные',
    //           text: 'Кованые навесы арочные №18',
    //           img: {
    //             preview: 'gallery/naves/4_naves_400x300.jpg',
    //             original:'gallery/naves/4_naves_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 107,
    //           title: 'Кованые навесы арочные',
    //           text: 'Кованые навесы арочные №19',
    //           img: {
    //             preview: 'gallery/naves/5_naves_400x300.jpg',
    //             original:'gallery/naves/5_naves_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130616,
    //           title: 'Кованые навесы арочные',
    //           text: 'Кованые навесы арочные №19',
    //           img: {
    //             preview: 'gallery/naves/arch/16_arch_400x300.jpg',
    //             original:'gallery/naves/arch/16_arch_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130617,
    //           title: 'Кованые навесы арочные',
    //           text: 'Кованые навесы арочные №20',
    //           img: {
    //             preview: 'gallery/naves/arch/17_arch_400x300.jpg',
    //             original:'gallery/naves/arch/17_arch_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130618,
    //           title: 'Кованые навесы арочные',
    //           text: 'Кованые навесы арочные №20',
    //           img: {
    //             preview: 'gallery/naves/arch/18_arch_400x300.jpg',
    //             original:'gallery/naves/arch/18_arch_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130619,
    //           title: 'Кованые навесы арочные',
    //           text: 'Кованые навесы арочные №21',
    //           img: {
    //             preview: 'gallery/naves/arch/19_arch_400x300.jpg',
    //             original:'gallery/naves/arch/19_arch_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130620,
    //           title: 'Кованые навесы арочные',
    //           text: 'Кованые навесы арочные №22',
    //           img: {
    //             preview: 'gallery/naves/arch/20_arch_400x300.jpg',
    //             original:'gallery/naves/arch/20_arch_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130621,
    //           title: 'Кованые навесы арочные',
    //           text: 'Кованые навесы арочные №23',
    //           img: {
    //             preview: 'gallery/naves/arch/21_arch_400x300.jpg',
    //             original:'gallery/naves/arch/21_arch_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130622,
    //           title: 'Кованые навесы арочные',
    //           text: 'Кованые навесы арочные №24',
    //           img: {
    //             preview: 'gallery/naves/arch/22_arch_400x300.jpg',
    //             original:'gallery/naves/arch/22_arch_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130623,
    //           title: 'Кованые навесы арочные',
    //           text: 'Кованые навесы арочные №25',
    //           img: {
    //             preview: 'gallery/naves/arch/23_arch_400x300.jpg',
    //             original:'gallery/naves/arch/23_arch_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130624,
    //           title: 'Кованые навесы арочные',
    //           text: 'Кованые навесы арочные №26',
    //           img: {
    //             preview: 'gallery/naves/arch/24_arch_400x300.jpg',
    //             original:'gallery/naves/arch/24_arch_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130625,
    //           title: 'Кованые навесы арочные',
    //           text: 'Кованые навесы арочные №27',
    //           img: {
    //             preview: 'gallery/naves/arch/25_arch_400x300.jpg',
    //             original:'gallery/naves/arch/25_arch_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130626,
    //           title: 'Кованые навесы арочные',
    //           text: 'Кованые навесы арочные №28',
    //           img: {
    //             preview: 'gallery/naves/arch/26_arch_400x300.jpg',
    //             original:'gallery/naves/arch/26_arch_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130627,
    //           title: 'Кованые навесы арочные',
    //           text: 'Кованые навесы арочные №29',
    //           img: {
    //             preview: 'gallery/naves/arch/27_arch_400x300.jpg',
    //             original:'gallery/naves/arch/27_arch_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130628,
    //           title: 'Кованые навесы арочные',
    //           text: 'Кованые навесы арочные №30',
    //           img: {
    //             preview: 'gallery/naves/arch/28_arch_400x300.jpg',
    //             original:'gallery/naves/arch/28_arch_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130629,
    //           title: 'Кованые навесы арочные',
    //           text: 'Кованые навесы арочные №31',
    //           img: {
    //             preview: 'gallery/naves/arch/29_arch_400x300.jpg',
    //             original:'gallery/naves/arch/29_arch_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130630,
    //           title: 'Кованые навесы арочные',
    //           text: 'Кованые навесы арочные №32',
    //           img: {
    //             preview: 'gallery/naves/arch/30_arch_400x300.jpg',
    //             original:'gallery/naves/arch/30_arch_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130631,
    //           title: 'Кованые навесы арочные',
    //           text: 'Кованые навесы арочные №33',
    //           img: {
    //             preview: 'gallery/naves/arch/31_arch_400x300.jpg',
    //             original:'gallery/naves/arch/31_arch_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130632,
    //           title: 'Кованые навесы арочные',
    //           text: 'Кованые навесы арочные №34',
    //           img: {
    //             preview: 'gallery/naves/arch/32_arch_400x300.jpg',
    //             original:'gallery/naves/arch/32_arch_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130633,
    //           title: 'Кованые навесы арочные',
    //           text: 'Кованые навесы арочные №35',
    //           img: {
    //             preview: 'gallery/naves/arch/33_arch_400x300.jpg',
    //             original:'gallery/naves/arch/33_arch_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130634,
    //           title: 'Кованые навесы арочные',
    //           text: 'Кованые навесы арочные №36',
    //           img: {
    //             preview: 'gallery/naves/arch/34_arch_400x300.jpg',
    //             original:'gallery/naves/arch/34_arch_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130635,
    //           title: 'Кованые навесы арочные',
    //           text: 'Кованые навесы арочные №37',
    //           img: {
    //             preview: 'gallery/naves/arch/35_arch_400x300.jpg',
    //             original:'gallery/naves/arch/35_arch_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130636,
    //           title: 'Кованые навесы арочные',
    //           text: 'Кованые навесы арочные №38',
    //           img: {
    //             preview: 'gallery/naves/arch/36_arch_400x300.jpg',
    //             original:'gallery/naves/arch/36_arch_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130637,
    //           title: 'Кованые навесы арочные',
    //           text: 'Кованые навесы арочные №39',
    //           img: {
    //             preview: 'gallery/naves/arch/37_arch_400x300.jpg',
    //             original:'gallery/naves/arch/37_arch_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130638,
    //           title: 'Кованые навесы арочные',
    //           text: 'Кованые навесы арочные №40',
    //           img: {
    //             preview: 'gallery/naves/arch/39_arch_400x300.jpg',
    //             original:'gallery/naves/arch/39_arch_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130639,
    //           title: 'Кованые навесы арочные',
    //           text: 'Кованые навесы арочные №41',
    //           img: {
    //             preview: 'gallery/naves/arch/39_arch_400x300.jpg',
    //             original:'gallery/naves/arch/39_arch_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130640,
    //           title: 'Кованые навесы арочные',
    //           text: 'Кованые навесы арочные №42',
    //           img: {
    //             preview: 'gallery/naves/arch/40_arch_400x300.jpg',
    //             original:'gallery/naves/arch/40_arch_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130641,
    //           title: 'Кованые навесы арочные',
    //           text: 'Кованые навесы арочные №43',
    //           img: {
    //             preview: 'gallery/naves/arch/41_arch_400x300.jpg',
    //             original:'gallery/naves/arch/41_arch_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130642,
    //           title: 'Кованые навесы арочные',
    //           text: 'Кованые навесы арочные №44',
    //           img: {
    //             preview: 'gallery/naves/arch/42_arch_400x300.jpg',
    //             original:'gallery/naves/arch/42_arch_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130643,
    //           title: 'Кованые навесы арочные',
    //           text: 'Кованые навесы арочные №45',
    //           img: {
    //             preview: 'gallery/naves/arch/43_arch_400x300.jpg',
    //             original:'gallery/naves/arch/43_arch_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130644,
    //           title: 'Кованые навесы арочные',
    //           text: 'Кованые навесы арочные №46',
    //           img: {
    //             preview: 'gallery/naves/arch/44_arch_400x300.jpg',
    //             original:'gallery/naves/arch/44_arch_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130645,
    //           title: 'Кованые навесы арочные',
    //           text: 'Кованые навесы арочные №47',
    //           img: {
    //             preview: 'gallery/naves/arch/45_arch_400x300.jpg',
    //             original:'gallery/naves/arch/45_arch_1000x750.jpg',
    //           },
    //         },
    //
    //       ],
    //     },
    //     //////////////////////////////////////////////////////////////////
    //     {
    //       title: 'Кованые навесы каскадные',
    //       slug: 'navesi_3',
    //       img: {
    //         preview: 'gallery/naves/cascade/01_cascade_400x300.jpg',
    //         original:'gallery/naves/cascade/01_cascade_1000x750.jpg',
    //       },
    //       products: [
    //         {
    //           id: 1045,
    //           title: 'Кованые навесы каскадные',
    //           text: 'Кованые навесы  каскадные №1',
    //           img: {
    //             preview: 'gallery/naves/cascade/01_cascade_400x300.jpg',
    //             original:'gallery/naves/cascade/01_cascade_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1046,
    //           title: 'Кованые навесы каскадные',
    //           text: 'Кованые навесы  каскадные №2',
    //           img: {
    //             preview: 'gallery/naves/cascade/02_cascade_400x300.jpg',
    //             original:'gallery/naves/cascade/02_cascade_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1047,
    //           title: 'Кованые навесы каскадные',
    //           text: 'Кованые навесы  каскадные №3',
    //           img: {
    //             preview: 'gallery/naves/cascade/03_cascade_400x300.jpg',
    //             original:'gallery/naves/cascade/03_cascade_1000x750.jpg',
    //           },
    //         },
    //
    //
    //       ],
    //     },
    //     //////////////////////////////////////////////////////////////////
    //     {
    //       title: 'Кованые навесы односкатные',
    //       slug: 'navesi_3',
    //       img: {
    //         preview: 'gallery/naves/oneskat/01_single_400x300.jpg',
    //         original:'gallery/naves/oneskat/01_single_1000x750.jpg',
    //       },
    //       products: [
    //
    //         {
    //           id: 1048,
    //           title: 'Кованые навесы односкатные',
    //           text: 'Кованые навесы  односкатные №1',
    //           img: {
    //             preview: 'gallery/naves/oneskat/01_single_400x300.jpg',
    //             original:'gallery/naves/oneskat/01_single_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1049,
    //           title: 'Кованые навесы односкатные',
    //           text: 'Кованые навесы  односкатные №2',
    //           img: {
    //             preview: 'gallery/naves/oneskat/02_single_400x300.jpg',
    //             original:'gallery/naves/oneskat/02_single_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1050,
    //           title: 'Кованые навесы односкатные',
    //           text: 'Кованые навесы  односкатные №3',
    //           img: {
    //             preview: 'gallery/naves/oneskat/03_single_400x300.jpg',
    //             original:'gallery/naves/oneskat/03_single_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1051,
    //           title: 'Кованые навесы односкатные',
    //           text: 'Кованые навесы  односкатные №4',
    //           img: {
    //             preview: 'gallery/naves/oneskat/04_single_400x300.jpg',
    //             original:'gallery/naves/oneskat/04_single_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1052,
    //           title: 'Кованые навесы односкатные',
    //           text: 'Кованые навесы  односкатные №5',
    //           img: {
    //             preview: 'gallery/naves/oneskat/05_single_400x300.jpg',
    //             original:'gallery/naves/oneskat/05_single_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 104,
    //           title: 'Кованые навесы односкатные',
    //           text: 'Кованые навесы односкатные №6',
    //           img: {
    //             preview: 'gallery/naves/2_naves_400x300.jpg',
    //             original:'gallery/naves/2_naves_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130707,
    //           title: 'Кованые навесы односкатные',
    //           text: 'Кованые навесы односкатные №7',
    //           img: {
    //             preview: 'gallery/naves/oneskat/7_single_400x300.jpg',
    //             original:'gallery/naves/oneskat/7_single_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130708,
    //           title: 'Кованые навесы односкатные',
    //           text: 'Кованые навесы односкатные №8',
    //           img: {
    //             preview: 'gallery/naves/oneskat/8_single_400x300.jpg',
    //             original:'gallery/naves/oneskat/8_single_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130709,
    //           title: 'Кованые навесы односкатные',
    //           text: 'Кованые навесы односкатные №9',
    //           img: {
    //             preview: 'gallery/naves/oneskat/9_single_400x300.jpg',
    //             original:'gallery/naves/oneskat/9_single_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130710,
    //           title: 'Кованые навесы односкатные',
    //           text: 'Кованые навесы односкатные №10',
    //           img: {
    //             preview: 'gallery/naves/oneskat/10_single_400x300.jpg',
    //             original:'gallery/naves/oneskat/10_single_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130711,
    //           title: 'Кованые навесы односкатные',
    //           text: 'Кованые навесы односкатные №11',
    //           img: {
    //             preview: 'gallery/naves/oneskat/11_single_400x300.jpg',
    //             original:'gallery/naves/oneskat/11_single_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130712,
    //           title: 'Кованые навесы односкатные',
    //           text: 'Кованые навесы односкатные №12',
    //           img: {
    //             preview: 'gallery/naves/oneskat/12_single_400x300.jpg',
    //             original:'gallery/naves/oneskat/12_single_1000x750.jpg',
    //           },
    //         },
    //       ],
    //     },
    //     /////////////////////////////////////////////////////////////////
    //     {
    //       title: 'Кованые навесы полуарочные',
    //       slug: 'navesi_4',
    //       img: {
    //         preview: 'gallery/naves/semiarch/01_semi-arched_400x300.jpg',
    //         original:'gallery/naves/semiarch/01_semi-arched_1000x750.jpg',
    //       },
    //       products: [
    //         {
    //           id: 1053,
    //           title: 'Кованые навесы полуарочные',
    //           text: 'Кованые навесы  полуарочные №1',
    //           img: {
    //             preview: 'gallery/naves/semiarch/01_semi-arched_400x300.jpg',
    //             original:'gallery/naves/semiarch/01_semi-arched_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1054,
    //           title: 'Кованые навесы полуарочные',
    //           text: 'Кованые навесы  полуарочные №2',
    //           img: {
    //             preview: 'gallery/naves/semiarch/02_semi-arched_400x300.jpg',
    //             original:'gallery/naves/semiarch/02_semi-arched_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1055,
    //           title: 'Кованые навесы полуарочные',
    //           text: 'Кованые навесы  полуарочные №3',
    //           img: {
    //             preview: 'gallery/naves/semiarch/03_semi-arched_400x300.jpg',
    //             original:'gallery/naves/semiarch/03_semi-arched_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1056,
    //           title: 'Кованые навесы полуарочные',
    //           text: 'Кованые навесы  полуарочные №4',
    //           img: {
    //             preview: 'gallery/naves/semiarch/04_semi-arched_400x300.jpg',
    //             original:'gallery/naves/semiarch/04_semi-arched_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1057,
    //           title: 'Кованые навесы полуарочные',
    //           text: 'Кованые навесы  полуарочные №5',
    //           img: {
    //             preview: 'gallery/naves/semiarch/05_semi-arched_400x300.jpg',
    //             original:'gallery/naves/semiarch/05_semi-arched_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1058,
    //           title: 'Кованые навесы полуарочные',
    //           text: 'Кованые навесы  полуарочные №6',
    //           img: {
    //             preview: 'gallery/naves/semiarch/06_semi-arched_400x300.jpg',
    //             original:'gallery/naves/semiarch/06_semi-arched_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130713,
    //           title: 'Кованые навесы полуарочные',
    //           text: 'Кованые навесы  полуарочные №7',
    //           img: {
    //             preview: 'gallery/naves/semiarch/7_semi-arched_400x300.jpg',
    //             original:'gallery/naves/semiarch/7_semi-arched_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130714,
    //           title: 'Кованые навесы полуарочные',
    //           text: 'Кованые навесы  полуарочные №8',
    //           img: {
    //             preview: 'gallery/naves/semiarch/8_semi-arched_400x300.jpg',
    //             original:'gallery/naves/semiarch/8_semi-arched_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130715,
    //           title: 'Кованые навесы полуарочные',
    //           text: 'Кованые навесы  полуарочные №9',
    //           img: {
    //             preview: 'gallery/naves/semiarch/9_semi-arched_400x300.jpg',
    //             original:'gallery/naves/semiarch/9_semi-arched_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130716,
    //           title: 'Кованые навесы полуарочные',
    //           text: 'Кованые навесы  полуарочные №10',
    //           img: {
    //             preview: 'gallery/naves/semiarch/10_semi-arched_400x300.jpg',
    //             original:'gallery/naves/semiarch/10_semi-arched_1000x750.jpg',
    //           },
    //         },
    //         // {
    //         //   id: 130717,
    //         //   title: 'Кованые навесы полуарочные',
    //         //   text: 'Кованые навесы  полуарочные №11',
    //         //   img: {
    //         //     preview: 'gallery/naves/semiarch/11_semi-arched_400x300.jpg',
    //         //     original:'gallery/naves/semiarch/11_semi-arched_1000x750.jpg',
    //         //   },
    //         // },
    //         // {
    //         //   id: 130718,
    //         //   title: 'Кованые навесы полуарочные',
    //         //   text: 'Кованые навесы  полуарочные №12',
    //         //   img: {
    //         //     preview: 'gallery/naves/semiarch/12_semi-arched_400x300.jpg',
    //         //     original:'gallery/naves/semiarch/12_semi-arched_1000x750.jpg',
    //         //   },
    //         // },
    //       ],
    //     },
    //   ]
    // },
    // {
    //   title: 'Кованые беседки',
    //   slug: 'besedki',
    //   img: {
    //     preview: 'gallery/besedki/1_besedki_400x300.jpg',
    //     original:'gallery/besedki/1_besedki_1000x750.jpg',
    //   },
    //   text: 'Кованая беседка — настоящее украшение дачного участка. А кроме своей декоративной функции постройка имеет еще и немалое практическое значение: в беседке можно устраивать семейные вечера, проводить вечеринки, веселые дружеские встречи.' +
    //     ' Наличие рядом мангала сделает пребывание в беседке не только приятным с эстетической точки зрения, но еще и с гастрономической.',
    //   metaData: {
    //     meta: [
    //       { hid:'description-contacts', name: 'description', content: 'Купить кованые беседки в Москве и Московской области. Фотографии работ. Цены, расчет стоимости по фото, эскизу.'},
    //       { name: 'keywords', content: 'купить кованые беседки не дорого, ковка, художественная, кованые, беседки, цена, стоимость, kovka-mo,кованые беседки,беседки одинцово'},
    //     ],
    //     title: 'Купить кованые беседки - цена и фото, изготовление на заказ в Москве и МО – ковка – от компании Феникс Стальное Решение'
    //   },
    //   price: 'от 15000р кв.м',
    //   types: [
    //     {
    //       title: 'Кованые беседки',
    //       slug: 'besedki_1',
    //       img: {
    //         preview: 'gallery/besedki/1_besedki_400x300.jpg',
    //         original:'gallery/besedki/1_besedki_1000x750.jpg',
    //       },
    //       products: [
    //         {
    //           id: 108,
    //           title: 'Кованые беседки',
    //           text: 'Кованые беседки №1',
    //           img: {
    //             preview: 'gallery/besedki/1_besedki_400x300.jpg',
    //             original:'gallery/besedki/1_besedki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 109,
    //           title: 'Кованые беседки',
    //           text: 'Кованые беседки №2',
    //           img: {
    //             preview: 'gallery/besedki/2_besedki_400x300.jpg',
    //             original:'gallery/besedki/2_besedki_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 110,
    //           title: 'Кованые беседки',
    //           text: 'Кованые беседки №3',
    //           img: {
    //             preview: 'gallery/besedki/3_besedki_400x300.jpg',
    //             original:'gallery/besedki/3_besedki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 111,
    //           title: 'Кованые беседки',
    //           text: 'Кованые беседки №4',
    //           img: {
    //             preview: 'gallery/besedki/4_besedki_400x300.jpg',
    //             original:'gallery/besedki/4_besedki_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 112,
    //           title: 'Кованые беседки',
    //           text: 'Кованые беседки №5',
    //           img: {
    //             preview: 'gallery/besedki/5_besedki_400x300.jpg',
    //             original:'gallery/besedki/5_besedki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 113,
    //           title: 'Кованые беседки',
    //           text: 'Кованые беседки №6',
    //           img: {
    //             preview: 'gallery/besedki/6_besedki_400x300.jpg',
    //             original:'gallery/besedki/6_besedki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 114,
    //           title: 'Кованые беседки',
    //           text: 'Кованые беседки №7',
    //           img: {
    //             preview: 'gallery/besedki/7_besedki_400x300.jpg',
    //             original:'gallery/besedki/7_besedki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 115,
    //           title: 'Кованые беседки',
    //           text: 'Кованые беседки №8',
    //           img: {
    //             preview: 'gallery/besedki/8_besedki_400x300.jpg',
    //             original:'gallery/besedki/8_besedki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 116,
    //           title: 'Кованые беседки',
    //           text: 'Кованые беседки №9',
    //           img: {
    //             preview: 'gallery/besedki/9_besedki_400x300.jpg',
    //             original:'gallery/besedki/9_besedki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 120010,
    //           title: 'Кованые беседки',
    //           text: 'Кованые беседки №10',
    //           img: {
    //             preview: 'gallery/besedki/10_besedki_400x300.jpg',
    //             original:'gallery/besedki/10_besedki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 120011,
    //           title: 'Кованые беседки',
    //           text: 'Кованые беседки №11',
    //           img: {
    //             preview: 'gallery/besedki/11_besedki_400x300.jpg',
    //             original:'gallery/besedki/11_besedki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 120012,
    //           title: 'Кованые беседки',
    //           text: 'Кованые беседки №12',
    //           img: {
    //             preview: 'gallery/besedki/12_besedki_400x300.jpg',
    //             original:'gallery/besedki/12_besedki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 120013,
    //           title: 'Кованые беседки',
    //           text: 'Кованые беседки №13',
    //           img: {
    //             preview: 'gallery/besedki/13_besedki_400x300.jpg',
    //             original:'gallery/besedki/13_besedki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 120014,
    //           title: 'Кованые беседки',
    //           text: 'Кованые беседки №14',
    //           img: {
    //             preview: 'gallery/besedki/14_besedki_400x300.jpg',
    //             original:'gallery/besedki/14_besedki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 120015,
    //           title: 'Кованые беседки',
    //           text: 'Кованые беседки №15',
    //           img: {
    //             preview: 'gallery/besedki/15_besedki_400x300.jpg',
    //             original:'gallery/besedki/15_besedki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 120016,
    //           title: 'Кованые беседки',
    //           text: 'Кованые беседки №16',
    //           img: {
    //             preview: 'gallery/besedki/16_besedki_400x300.jpg',
    //             original:'gallery/besedki/16_besedki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 120017,
    //           title: 'Кованые беседки',
    //           text: 'Кованые беседки №17',
    //           img: {
    //             preview: 'gallery/besedki/17_besedki_400x300.jpg',
    //             original:'gallery/besedki/17_besedki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 120018,
    //           title: 'Кованые беседки',
    //           text: 'Кованые беседки №18',
    //           img: {
    //             preview: 'gallery/besedki/18_besedki_400x300.jpg',
    //             original:'gallery/besedki/18_besedki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 120019,
    //           title: 'Кованые беседки',
    //           text: 'Кованые беседки №19',
    //           img: {
    //             preview: 'gallery/besedki/19_besedki_400x300.jpg',
    //             original:'gallery/besedki/19_besedki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 120020,
    //           title: 'Кованые беседки',
    //           text: 'Кованые беседки №20',
    //           img: {
    //             preview: 'gallery/besedki/20_besedki_400x300.jpg',
    //             original:'gallery/besedki/20_besedki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 120021,
    //           title: 'Кованые беседки',
    //           text: 'Кованые беседки №21',
    //           img: {
    //             preview: 'gallery/besedki/21_besedki_400x300.jpg',
    //             original:'gallery/besedki/21_besedki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 120022,
    //           title: 'Кованые беседки',
    //           text: 'Кованые беседки №22',
    //           img: {
    //             preview: 'gallery/besedki/22_besedki_400x300.jpg',
    //             original:'gallery/besedki/22_besedki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 120023,
    //           title: 'Кованые беседки',
    //           text: 'Кованые беседки №23',
    //           img: {
    //             preview: 'gallery/besedki/23_besedki_400x300.jpg',
    //             original:'gallery/besedki/23_besedki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 120024,
    //           title: 'Кованые беседки',
    //           text: 'Кованые беседки №24',
    //           img: {
    //             preview: 'gallery/besedki/24_besedki_400x300.jpg',
    //             original:'gallery/besedki/24_besedki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 120025,
    //           title: 'Кованые беседки',
    //           text: 'Кованые беседки №25',
    //           img: {
    //             preview: 'gallery/besedki/25_besedki_400x300.jpg',
    //             original:'gallery/besedki/25_besedki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 120026,
    //           title: 'Кованые беседки',
    //           text: 'Кованые беседки №26',
    //           img: {
    //             preview: 'gallery/besedki/26_besedki_400x300.jpg',
    //             original:'gallery/besedki/26_besedki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 120027,
    //           title: 'Кованые беседки',
    //           text: 'Кованые беседки №27',
    //           img: {
    //             preview: 'gallery/besedki/27_besedki_400x300.jpg',
    //             original:'gallery/besedki/27_besedki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 120028,
    //           title: 'Кованые беседки',
    //           text: 'Кованые беседки №28',
    //           img: {
    //             preview: 'gallery/besedki/28_besedki_400x300.jpg',
    //             original:'gallery/besedki/28_besedki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 120029,
    //           title: 'Кованые беседки',
    //           text: 'Кованые беседки №29',
    //           img: {
    //             preview: 'gallery/besedki/29_besedki_400x300.jpg',
    //             original:'gallery/besedki/29_besedki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 120030,
    //           title: 'Кованые беседки',
    //           text: 'Кованые беседки №30',
    //           img: {
    //             preview: 'gallery/besedki/30_besedki_400x300.jpg',
    //             original:'gallery/besedki/30_besedki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 120031,
    //           title: 'Кованые беседки',
    //           text: 'Кованые беседки №31',
    //           img: {
    //             preview: 'gallery/besedki/31_besedki_400x300.jpg',
    //             original:'gallery/besedki/31_besedki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 120032,
    //           title: 'Кованые беседки',
    //           text: 'Кованые беседки №32',
    //           img: {
    //             preview: 'gallery/besedki/32_besedki_400x300.jpg',
    //             original:'gallery/besedki/32_besedki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 120033,
    //           title: 'Кованые беседки',
    //           text: 'Кованые беседки №33',
    //           img: {
    //             preview: 'gallery/besedki/33_besedki_400x300.jpg',
    //             original:'gallery/besedki/33_besedki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 120034,
    //           title: 'Кованые беседки',
    //           text: 'Кованые беседки №34',
    //           img: {
    //             preview: 'gallery/besedki/34_besedki_400x300.jpg',
    //             original:'gallery/besedki/34_besedki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 120035,
    //           title: 'Кованые беседки',
    //           text: 'Кованые беседки №35',
    //           img: {
    //             preview: 'gallery/besedki/35_besedki_400x300.jpg',
    //             original:'gallery/besedki/35_besedki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 120036,
    //           title: 'Кованые беседки',
    //           text: 'Кованые беседки №36',
    //           img: {
    //             preview: 'gallery/besedki/36_besedki_400x300.jpg',
    //             original:'gallery/besedki/36_besedki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 120037,
    //           title: 'Кованые беседки',
    //           text: 'Кованые беседки №37',
    //           img: {
    //             preview: 'gallery/besedki/37_besedki_400x300.jpg',
    //             original:'gallery/besedki/37_besedki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 120038,
    //           title: 'Кованые беседки',
    //           text: 'Кованые беседки №38',
    //           img: {
    //             preview: 'gallery/besedki/38_besedki_400x300.jpg',
    //             original:'gallery/besedki/38_besedki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 120039,
    //           title: 'Кованые беседки',
    //           text: 'Кованые беседки №39',
    //           img: {
    //             preview: 'gallery/besedki/39_besedki_400x300.jpg',
    //             original:'gallery/besedki/39_besedki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 120040,
    //           title: 'Кованые беседки',
    //           text: 'Кованые беседки №40',
    //           img: {
    //             preview: 'gallery/besedki/40_besedki_400x300.jpg',
    //             original:'gallery/besedki/40_besedki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 120041,
    //           title: 'Кованые беседки',
    //           text: 'Кованые беседки №41',
    //           img: {
    //             preview: 'gallery/besedki/41_besedki_400x300.jpg',
    //             original:'gallery/besedki/41_besedki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 120042,
    //           title: 'Кованые беседки',
    //           text: 'Кованые беседки №42',
    //           img: {
    //             preview: 'gallery/besedki/42_besedki_400x300.jpg',
    //             original:'gallery/besedki/42_besedki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 120043,
    //           title: 'Кованые беседки',
    //           text: 'Кованые беседки №43',
    //           img: {
    //             preview: 'gallery/besedki/43_besedki_400x300.jpg',
    //             original:'gallery/besedki/43_besedki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 120044,
    //           title: 'Кованые беседки',
    //           text: 'Кованые беседки №44',
    //           img: {
    //             preview: 'gallery/besedki/44_besedki_400x300.jpg',
    //             original:'gallery/besedki/44_besedki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 120045,
    //           title: 'Кованые беседки',
    //           text: 'Кованые беседки №45',
    //           img: {
    //             preview: 'gallery/besedki/45_besedki_400x300.jpg',
    //             original:'gallery/besedki/45_besedki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 120046,
    //           title: 'Кованые беседки',
    //           text: 'Кованые беседки №46',
    //           img: {
    //             preview: 'gallery/besedki/46_besedki_400x300.jpg',
    //             original:'gallery/besedki/46_besedki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 120047,
    //           title: 'Кованые беседки',
    //           text: 'Кованые беседки №47',
    //           img: {
    //             preview: 'gallery/besedki/47_besedki_400x300.jpg',
    //             original:'gallery/besedki/47_besedki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 120048,
    //           title: 'Кованые беседки',
    //           text: 'Кованые беседки №48',
    //           img: {
    //             preview: 'gallery/besedki/48_besedki_400x300.jpg',
    //             original:'gallery/besedki/48_besedki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 120049,
    //           title: 'Кованые беседки',
    //           text: 'Кованые беседки №49',
    //           img: {
    //             preview: 'gallery/besedki/49_besedki_400x300.jpg',
    //             original:'gallery/besedki/49_besedki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 120050,
    //           title: 'Кованые беседки',
    //           text: 'Кованые беседки №50',
    //           img: {
    //             preview: 'gallery/besedki/50_besedki_400x300.jpg',
    //             original:'gallery/besedki/50_besedki_1000x750.jpg',
    //           },
    //         },
    //
    //       ],
    //     },
    //
    //   ]
    // },
    // {
    //   title: 'Кованые ограды',
    //   slug: 'ograda',
    //   img: {
    //     preview: 'gallery/ograda/1_ograda_400x300.jpg',
    //     original:'gallery/ograda/1_ograda_1000x750.jpg',
    //   },
    //   text: 'Кованая ограда не боится перепадов температуры воздуха, не подвергается воздействию погодных явлений,' +
    //     ' не требует специального ухода и особого внимания, что является преимуществами этого вида над другими моделями.',
    //   metaData: {
    //     meta: [
    //       { hid:'description-contacts', name: 'description', content: 'Купить кованые ограды в Москве и Московской области с коваными элементами - от недорогих и бюджетных до премиум, выполненных вручную на заказ. '},
    //       { name: 'keywords', content: 'купить кованые ограды не дорого, заказ, ковка, художественная, кованые, ограждения, цена, стоимость, купить, москва, kovka-mo,кованые ограды,ограды одинцово'},
    //     ],
    //     title: 'Купить кованые ограды - цена и фото, изготовление на заказ в Москве и МО – ковка – от компании Феникс Стальное Решение'
    //   },
    //   price: 'от 3000р кв.м',
    //   types: [
    //     {
    //       title: 'Кованые ограды',
    //       slug: 'ograda_1',
    //       img: {
    //         preview: 'gallery/ograda/1_ograda_400x300.jpg',
    //         original:'gallery/ograda/1_ograda_1000x750.jpg',
    //       },
    //       products: [
    //         {
    //           id: 117,
    //           title: 'Кованые ограды',
    //           text: 'Кованые ограды №1',
    //           img: {
    //             preview: 'gallery/ograda/1_ograda_400x300.jpg',
    //             original:'gallery/ograda/1_ograda_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 118,
    //           title: 'Кованые ограды',
    //           text: 'Кованые ограды №2',
    //           img: {
    //             preview: 'gallery/ograda/2_ograda_400x300.jpg',
    //             original:'gallery/ograda/2_ograda_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 119,
    //           title: 'Кованые ограды',
    //           text: 'Кованые ограды №3',
    //           img: {
    //             preview: 'gallery/ograda/3_ograda_400x300.jpg',
    //             original:'gallery/ograda/3_ograda_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 120,
    //           title: 'Кованые ограды',
    //           text: 'Кованые ограды №4',
    //           img: {
    //             preview: 'gallery/ograda/4_ograda_400x300.jpg',
    //             original:'gallery/ograda/4_ograda_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 121,
    //           title: 'Кованые ограды',
    //           text: 'Кованые ограды №5',
    //           img: {
    //             preview: 'gallery/ograda/5_ograda_400x300.jpg',
    //             original:'gallery/ograda/5_ograda_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 122,
    //           title: 'Кованые ограды',
    //           text: 'Кованые ограды №6',
    //           img: {
    //             preview: 'gallery/ograda/6_ograda_400x300.jpg',
    //             original:'gallery/ograda/6_ograda_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 123,
    //           title: 'Кованые ограды',
    //           text: 'Кованые ограды №7',
    //           img: {
    //             preview: 'gallery/ograda/7_ograda_400x300.jpg',
    //             original:'gallery/ograda/7_ograda_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130808,
    //           title: 'Кованые ограды',
    //           text: 'Кованые ограды №8',
    //           img: {
    //             preview: 'gallery/ograda/8_ograda_400x300.jpg',
    //             original:'gallery/ograda/8_ograda_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130809,
    //           title: 'Кованые ограды',
    //           text: 'Кованые ограды №9',
    //           img: {
    //             preview: 'gallery/ograda/9_ograda_400x300.jpg',
    //             original:'gallery/ograda/9_ograda_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130810,
    //           title: 'Кованые ограды',
    //           text: 'Кованые ограды №10',
    //           img: {
    //             preview: 'gallery/ograda/10_ograda_400x300.jpg',
    //             original:'gallery/ograda/10_ograda_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130811,
    //           title: 'Кованые ограды',
    //           text: 'Кованые ограды №11',
    //           img: {
    //             preview: 'gallery/ograda/11_ograda_400x300.jpg',
    //             original:'gallery/ograda/11_ograda_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130812,
    //           title: 'Кованые ограды',
    //           text: 'Кованые ограды №12',
    //           img: {
    //             preview: 'gallery/ograda/12_ograda_400x300.jpg',
    //             original:'gallery/ograda/12_ograda_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130813,
    //           title: 'Кованые ограды',
    //           text: 'Кованые ограды №13',
    //           img: {
    //             preview: 'gallery/ograda/13_ograda_400x300.jpg',
    //             original:'gallery/ograda/13_ograda_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130814,
    //           title: 'Кованые ограды',
    //           text: 'Кованые ограды №14',
    //           img: {
    //             preview: 'gallery/ograda/14_ograda_400x300.jpg',
    //             original:'gallery/ograda/14_ograda_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130815,
    //           title: 'Кованые ограды',
    //           text: 'Кованые ограды №15',
    //           img: {
    //             preview: 'gallery/ograda/15_ograda_400x300.jpg',
    //             original:'gallery/ograda/15_ograda_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130816,
    //           title: 'Кованые ограды',
    //           text: 'Кованые ограды №16',
    //           img: {
    //             preview: 'gallery/ograda/16_ograda_400x300.jpg',
    //             original:'gallery/ograda/16_ograda_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130817,
    //           title: 'Кованые ограды',
    //           text: 'Кованые ограды №17',
    //           img: {
    //             preview: 'gallery/ograda/17_ograda_400x300.jpg',
    //             original:'gallery/ograda/17_ograda_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130818,
    //           title: 'Кованые ограды',
    //           text: 'Кованые ограды №18',
    //           img: {
    //             preview: 'gallery/ograda/18_ograda_400x300.jpg',
    //             original:'gallery/ograda/18_ograda_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130819,
    //           title: 'Кованые ограды',
    //           text: 'Кованые ограды №19',
    //           img: {
    //             preview: 'gallery/ograda/19_ograda_400x300.jpg',
    //             original:'gallery/ograda/19_ograda_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130820,
    //           title: 'Кованые ограды',
    //           text: 'Кованые ограды №20',
    //           img: {
    //             preview: 'gallery/ograda/20_ograda_400x300.jpg',
    //             original:'gallery/ograda/20_ograda_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130821,
    //           title: 'Кованые ограды',
    //           text: 'Кованые ограды №21',
    //           img: {
    //             preview: 'gallery/ograda/21_ograda_400x300.jpg',
    //             original:'gallery/ograda/21_ograda_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130822,
    //           title: 'Кованые ограды',
    //           text: 'Кованые ограды №22',
    //           img: {
    //             preview: 'gallery/ograda/22_ograda_400x300.jpg',
    //             original:'gallery/ograda/22_ograda_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130823,
    //           title: 'Кованые ограды',
    //           text: 'Кованые ограды №23',
    //           img: {
    //             preview: 'gallery/ograda/23_ograda_400x300.jpg',
    //             original:'gallery/ograda/23_ograda_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130824,
    //           title: 'Кованые ограды',
    //           text: 'Кованые ограды №24',
    //           img: {
    //             preview: 'gallery/ograda/24_ograda_400x300.jpg',
    //             original:'gallery/ograda/24_ograda_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130825,
    //           title: 'Кованые ограды',
    //           text: 'Кованые ограды №25',
    //           img: {
    //             preview: 'gallery/ograda/25_ograda_400x300.jpg',
    //             original:'gallery/ograda/25_ograda_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130826,
    //           title: 'Кованые ограды',
    //           text: 'Кованые ограды №26',
    //           img: {
    //             preview: 'gallery/ograda/26_ograda_400x300.jpg',
    //             original:'gallery/ograda/26_ograda_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130827,
    //           title: 'Кованые ограды',
    //           text: 'Кованые ограды №27',
    //           img: {
    //             preview: 'gallery/ograda/27_ograda_400x300.jpg',
    //             original:'gallery/ograda/27_ograda_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130828,
    //           title: 'Кованые ограды',
    //           text: 'Кованые ограды №28',
    //           img: {
    //             preview: 'gallery/ograda/28_ograda_400x300.jpg',
    //             original:'gallery/ograda/28_ograda_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130829,
    //           title: 'Кованые ограды',
    //           text: 'Кованые ограды №29',
    //           img: {
    //             preview: 'gallery/ograda/29_ograda_400x300.jpg',
    //             original:'gallery/ograda/29_ograda_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130830,
    //           title: 'Кованые ограды',
    //           text: 'Кованые ограды №30',
    //           img: {
    //             preview: 'gallery/ograda/30_ograda_400x300.jpg',
    //             original:'gallery/ograda/30_ograda_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130831,
    //           title: 'Кованые ограды',
    //           text: 'Кованые ограды №31',
    //           img: {
    //             preview: 'gallery/ograda/31_ograda_400x300.jpg',
    //             original:'gallery/ograda/31_ograda_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130832,
    //           title: 'Кованые ограды',
    //           text: 'Кованые ограды №32',
    //           img: {
    //             preview: 'gallery/ograda/32_ograda_400x300.jpg',
    //             original:'gallery/ograda/32_ograda_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130833,
    //           title: 'Кованые ограды',
    //           text: 'Кованые ограды №33',
    //           img: {
    //             preview: 'gallery/ograda/33_ograda_400x300.jpg',
    //             original:'gallery/ograda/33_ograda_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130834,
    //           title: 'Кованые ограды',
    //           text: 'Кованые ограды №34',
    //           img: {
    //             preview: 'gallery/ograda/34_ograda_400x300.jpg',
    //             original:'gallery/ograda/34_ograda_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130835,
    //           title: 'Кованые ограды',
    //           text: 'Кованые ограды №35',
    //           img: {
    //             preview: 'gallery/ograda/35_ograda_400x300.jpg',
    //             original:'gallery/ograda/35_ograda_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130836,
    //           title: 'Кованые ограды',
    //           text: 'Кованые ограды №36',
    //           img: {
    //             preview: 'gallery/ograda/36_ograda_400x300.jpg',
    //             original:'gallery/ograda/36_ograda_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130837,
    //           title: 'Кованые ограды',
    //           text: 'Кованые ограды №37',
    //           img: {
    //             preview: 'gallery/ograda/37_ograda_400x300.jpg',
    //             original:'gallery/ograda/37_ograda_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130838,
    //           title: 'Кованые ограды',
    //           text: 'Кованые ограды №38',
    //           img: {
    //             preview: 'gallery/ograda/38_ograda_400x300.jpg',
    //             original:'gallery/ograda/38_ograda_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130839,
    //           title: 'Кованые ограды',
    //           text: 'Кованые ограды №39',
    //           img: {
    //             preview: 'gallery/ograda/39_ograda_400x300.jpg',
    //             original:'gallery/ograda/39_ograda_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130840,
    //           title: 'Кованые ограды',
    //           text: 'Кованые ограды №40',
    //           img: {
    //             preview: 'gallery/ograda/40_ograda_400x300.jpg',
    //             original:'gallery/ograda/40_ograda_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130841,
    //           title: 'Кованые ограды',
    //           text: 'Кованые ограды №41',
    //           img: {
    //             preview: 'gallery/ograda/41_ograda_400x300.jpg',
    //             original:'gallery/ograda/41_ograda_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130842,
    //           title: 'Кованые ограды',
    //           text: 'Кованые ограды №42',
    //           img: {
    //             preview: 'gallery/ograda/42_ograda_400x300.jpg',
    //             original:'gallery/ograda/42_ograda_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130814,
    //           title: 'Кованые ограды',
    //           text: 'Кованые ограды №43',
    //           img: {
    //             preview: 'gallery/ograda/43_ograda_400x300.jpg',
    //             original:'gallery/ograda/43_ograda_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130844,
    //           title: 'Кованые ограды',
    //           text: 'Кованые ограды №44',
    //           img: {
    //             preview: 'gallery/ograda/44_ograda_400x300.jpg',
    //             original:'gallery/ograda/44_ograda_1000x750.jpg',
    //           },
    //         },
    //         // {
    //         //   id: 124,
    //         //   title: 'Кованые ограды',
    //         //   text: 'Кованые ограды №8',
    //         //   img: {
    //         //     preview: 'gallery/ograda/8_ograda_400x300.jpg',
    //         //     original:'gallery/ograda/8_ograda_1000x750.jpg',
    //         //   },
    //         // },
    //
    //
    //       ],
    //     },
    //
    //   ]
    // },
    // {
    //   title: 'Кованые решетки',
    //   slug: 'reshetki',
    //   img: {
    //     preview: 'gallery/reshetki/1_reshetki_400x300.jpg',
    //     original:'gallery/reshetki/1_reshetki_1000x750.jpg',
    //   },
    //   text: 'Кованые решетки отличаются самой разной формой, что позволяет выбирать изделия под любую конфигурацию проема окна и в зависимости от глубины его утопания в фасаде.',
    //   metaData: {
    //     meta: [
    //       { hid:'description-contacts', name: 'description', content: 'Купить кованые решетки по фото, эскизу, на заказ с доставкой и установкой в Москве и Московской области.'},
    //       { name: 'keywords', content: 'купить кованые решетки не дорого, ковка, художественная, кованые, решетки, окна, цена, стоимость, kovka-mo,кованые решетки,решетки одинцово'},
    //     ],
    //     title: 'Купить кованые решетки - цена и фото, изготовление на заказ в Москве и МО – ковка – от компании Феникс Стальное Решение'
    //   },
    //   price: 'от 3500р кв.м',
    //   types: [
    //     {
    //       title: 'Кованые решетки',
    //       slug: 'reshetki_1',
    //       img: {
    //         preview: 'gallery/reshetki/1_reshetki_400x300.jpg',
    //         original:'gallery/reshetki/1_reshetki_1000x750.jpg',
    //       },
    //       products: [
    //         {
    //           id: 125,
    //           title: 'Кованые решетки',
    //           text: 'Кованые решетки №1',
    //           img: {
    //             preview: 'gallery/reshetki/1_reshetki_400x300.jpg',
    //             original:'gallery/reshetki/1_reshetki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 126,
    //           title: 'Кованые решетки',
    //           text: 'Кованые решетки №2',
    //           img: {
    //             preview: 'gallery/reshetki/2_reshetki_400x300.jpg',
    //             original:'gallery/reshetki/2_reshetki_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 127,
    //           title: 'Кованые решетки',
    //           text: 'Кованые решетки №3',
    //           img: {
    //             preview: 'gallery/reshetki/3_reshetki_400x300.jpg',
    //             original:'gallery/reshetki/3_reshetki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 128,
    //           title: 'Кованые решетки',
    //           text: 'Кованые решетки №4',
    //           img: {
    //             preview: 'gallery/reshetki/4_reshetki_400x300.jpg',
    //             original:'gallery/reshetki/4_reshetki_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 129,
    //           title: 'Кованые решетки',
    //           text: 'Кованые решетки №5',
    //           img: {
    //             preview: 'gallery/reshetki/5_reshetki_400x300.jpg',
    //             original:'gallery/reshetki/5_reshetki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130,
    //           title: 'Кованые решетки',
    //           text: 'Кованые решетки №6',
    //           img: {
    //             preview: 'gallery/reshetki/6_reshetki_400x300.jpg',
    //             original:'gallery/reshetki/6_reshetki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 131,
    //           title: 'Кованые решетки',
    //           text: 'Кованые решетки №7',
    //           img: {
    //             preview: 'gallery/reshetki/7_reshetki_400x300.jpg',
    //             original:'gallery/reshetki/7_reshetki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 132,
    //           title: 'Кованые решетки',
    //           text: 'Кованые решетки №8',
    //           img: {
    //             preview: 'gallery/reshetki/8_reshetki_400x300.jpg',
    //             original:'gallery/reshetki/8_reshetki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 133,
    //           title: 'Кованые решетки',
    //           text: 'Кованые решетки №9',
    //           img: {
    //             preview: 'gallery/reshetki/9_reshetki_400x300.jpg',
    //             original:'gallery/reshetki/9_reshetki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 134,
    //           title: 'Кованые решетки',
    //           text: 'Кованые решетки №10',
    //           img: {
    //             preview: 'gallery/reshetki/10_reshetki_400x300.jpg',
    //             original:'gallery/reshetki/10_reshetki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150011,
    //           title: 'Кованые решетки',
    //           text: 'Кованые решетки №11',
    //           img: {
    //             preview: 'gallery/reshetki/11_reshetki_400x300.jpg',
    //             original:'gallery/reshetki/11_reshetki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150012,
    //           title: 'Кованые решетки',
    //           text: 'Кованые решетки №12',
    //           img: {
    //             preview: 'gallery/reshetki/12_reshetki_400x300.jpg',
    //             original:'gallery/reshetki/12_reshetki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150013,
    //           title: 'Кованые решетки',
    //           text: 'Кованые решетки №13',
    //           img: {
    //             preview: 'gallery/reshetki/13_reshetki_400x300.jpg',
    //             original:'gallery/reshetki/13_reshetki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150014,
    //           title: 'Кованые решетки',
    //           text: 'Кованые решетки №14',
    //           img: {
    //             preview: 'gallery/reshetki/14_reshetki_400x300.jpg',
    //             original:'gallery/reshetki/14_reshetki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150015,
    //           title: 'Кованые решетки',
    //           text: 'Кованые решетки №15',
    //           img: {
    //             preview: 'gallery/reshetki/15_reshetki_400x300.jpg',
    //             original:'gallery/reshetki/15_reshetki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150016,
    //           title: 'Кованые решетки',
    //           text: 'Кованые решетки №16',
    //           img: {
    //             preview: 'gallery/reshetki/16_reshetki_400x300.jpg',
    //             original:'gallery/reshetki/16_reshetki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150017,
    //           title: 'Кованые решетки',
    //           text: 'Кованые решетки №17',
    //           img: {
    //             preview: 'gallery/reshetki/17_reshetki_400x300.jpg',
    //             original:'gallery/reshetki/17_reshetki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150018,
    //           title: 'Кованые решетки',
    //           text: 'Кованые решетки №18',
    //           img: {
    //             preview: 'gallery/reshetki/18_reshetki_400x300.jpg',
    //             original:'gallery/reshetki/18_reshetki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150019,
    //           title: 'Кованые решетки',
    //           text: 'Кованые решетки №19',
    //           img: {
    //             preview: 'gallery/reshetki/19_reshetki_400x300.jpg',
    //             original:'gallery/reshetki/19_reshetki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150020,
    //           title: 'Кованые решетки',
    //           text: 'Кованые решетки №20',
    //           img: {
    //             preview: 'gallery/reshetki/20_reshetki_400x300.jpg',
    //             original:'gallery/reshetki/20_reshetki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150021,
    //           title: 'Кованые решетки',
    //           text: 'Кованые решетки №21',
    //           img: {
    //             preview: 'gallery/reshetki/21_reshetki_400x300.jpg',
    //             original:'gallery/reshetki/21_reshetki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150022,
    //           title: 'Кованые решетки',
    //           text: 'Кованые решетки №22',
    //           img: {
    //             preview: 'gallery/reshetki/22_reshetki_400x300.jpg',
    //             original:'gallery/reshetki/22_reshetki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150023,
    //           title: 'Кованые решетки',
    //           text: 'Кованые решетки №23',
    //           img: {
    //             preview: 'gallery/reshetki/23_reshetki_400x300.jpg',
    //             original:'gallery/reshetki/23_reshetki_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150024,
    //           title: 'Кованые решетки',
    //           text: 'Кованые решетки №24',
    //           img: {
    //             preview: 'gallery/reshetki/24_reshetki_400x300.jpg',
    //             original:'gallery/reshetki/24_reshetki_1000x750.jpg',
    //           },
    //         },
    //       ],
    //     },
    //
    //   ]
    // },
    // {
    //   title: 'Кованые вывески',
    //   slug: 'viveski',
    //   img: {
    //     preview: 'gallery/viveski/1_viveski_400x300.jpg',
    //     original:'gallery/viveski/1_viveski_1000x750.jpg',
    //   },
    //   text: 'Кованые вывески один из самых древних, изящных и оригинальных видов наружной рекламы. Европейская цивилизация веками пользуется этими источниками информации, а они служат верой и правдой до наших дней. Как и раньше,' +
    //     ' они выполняют две основные функции являются оригинальным фасадным украшением и доступным средством информирования.',
    //   metaData: {
    //     meta: [
    //       { hid:'description-contacts', name: 'description', content: 'Купить кованые вывески в Москве и Московской области. Фотографии и эскизы кованых вывесок.'},
    //       { name: 'keywords', content: 'купить кованые вывески не дорого, ковка, художественная, кованые, решетки, вывески, цена, стоимость, kovka-mo,кованые вывески,вывески одинцово'},
    //     ],
    //     title: 'Купить кованые вывески - цена и фото, изготовление на заказ в Москве и МО – ковка – от компании Феникс Стальное Решение'
    //   },
    //   price: 'от 10000 за шт.',
    //   types: [
    //     {
    //       title: 'Кованые вывески',
    //       slug: 'viveski_1',
    //       img: {
    //         preview: 'gallery/viveski/1_viveski_400x300.jpg',
    //         original:'gallery/viveski/1_viveski_1000x750.jpg',
    //       },
    //       products: [
    //         {
    //           id: 135,
    //           title: 'Кованые вывески',
    //           text: 'Кованые вывески №1',
    //           img: {
    //             preview: 'gallery/viveski/1_viveski_400x300.jpg',
    //             original:'gallery/viveski/1_viveski_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 136,
    //           title: 'Кованые вывески',
    //           text: 'Кованые вывески №2',
    //           img: {
    //             preview: 'gallery/viveski/2_viveski_400x300.jpg',
    //             original:'gallery/viveski/2_viveski_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 137,
    //           title: 'Кованые вывески',
    //           text: 'Кованые вывески №3',
    //           img: {
    //             preview: 'gallery/viveski/3_viveski_400x300.jpg',
    //             original:'gallery/viveski/3_viveski_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 138,
    //           title: 'Кованые вывески',
    //           text: 'Кованые вывески №4',
    //           img: {
    //             preview: 'gallery/viveski/4_viveski_400x300.jpg',
    //             original:'gallery/viveski/4_viveski_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130305,
    //           title: 'Кованые вывески',
    //           text: 'Кованые вывески №5',
    //           img: {
    //             preview: 'gallery/viveski/5_viveski_400x300.jpg',
    //             original:'gallery/viveski/5_viveski_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130306,
    //           title: 'Кованые вывески',
    //           text: 'Кованые вывески №6',
    //           img: {
    //             preview: 'gallery/viveski/6_viveski_400x300.jpg',
    //             original:'gallery/viveski/6_viveski_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130307,
    //           title: 'Кованые вывески',
    //           text: 'Кованые вывески №7',
    //           img: {
    //             preview: 'gallery/viveski/7_viveski_400x300.jpg',
    //             original:'gallery/viveski/7_viveski_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130308,
    //           title: 'Кованые вывески',
    //           text: 'Кованые вывески №8',
    //           img: {
    //             preview: 'gallery/viveski/8_viveski_400x300.jpg',
    //             original:'gallery/viveski/8_viveski_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130309,
    //           title: 'Кованые вывески',
    //           text: 'Кованые вывески №9',
    //           img: {
    //             preview: 'gallery/viveski/9_viveski_400x300.jpg',
    //             original:'gallery/viveski/9_viveski_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130310,
    //           title: 'Кованые вывески',
    //           text: 'Кованые вывески №10',
    //           img: {
    //             preview: 'gallery/viveski/10_viveski_400x300.jpg',
    //             original:'gallery/viveski/10_viveski_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130311,
    //           title: 'Кованые вывески',
    //           text: 'Кованые вывески №11',
    //           img: {
    //             preview: 'gallery/viveski/11_viveski_400x300.jpg',
    //             original:'gallery/viveski/11_viveski_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130312,
    //           title: 'Кованые вывески',
    //           text: 'Кованые вывески №12',
    //           img: {
    //             preview: 'gallery/viveski/12_viveski_400x300.jpg',
    //             original:'gallery/viveski/12_viveski_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130313,
    //           title: 'Кованые вывески',
    //           text: 'Кованые вывески №13',
    //           img: {
    //             preview: 'gallery/viveski/13_viveski_400x300.jpg',
    //             original:'gallery/viveski/13_viveski_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130314,
    //           title: 'Кованые вывески',
    //           text: 'Кованые вывески №14',
    //           img: {
    //             preview: 'gallery/viveski/14_viveski_400x300.jpg',
    //             original:'gallery/viveski/14_viveski_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 130315,
    //           title: 'Кованые вывески',
    //           text: 'Кованые вывески №15',
    //           img: {
    //             preview: 'gallery/viveski/15_viveski_400x300.jpg',
    //             original:'gallery/viveski/15_viveski_1000x750.jpg',
    //           },
    //         },
    //
    //       ],
    //     },
    //
    //   ]
    // },
    // {
    //   title: 'Кованые мангалы',
    //   slug: 'mangal',
    //   img: {
    //     preview: 'gallery/mangal/1_mangal_400x300.jpg',
    //     original:'gallery/mangal/1_mangal_1000x750.jpg',
    //   },
    //   text: 'Кованый мангал – это удивительное украшение участка, которое сразу привлекает взгляд и делает пространство гораздо уютнее. Удобство и безопасность.' +
    //     ' Легко ухаживать и чистить. Мясо на таком мангале прожаривается равномерно, не пересыхает, всегда получается сочным и вкусным.',
    //   metaData: {
    //     meta: [
    //       { hid:'description-contacts', name: 'description', content: 'Купить кованый мангал в Москве и Московской области. Фотографии кованых мангалов. Расчет цен'},
    //       { name: 'keywords', content: 'купить кованые мангалы не дорого, ковка, художественная, кованые, мангалы, цена, стоимость, kovka-mo,кованые мангалы,мангалы одинцово'},
    //     ],
    //     title: 'Купить кованые мангалы - цена и фото, изготовление на заказ в Москве и МО – ковка – от компании Феникс Стальное Решение'
    //   },
    //   price: 'от 15000 за шт.',
    //   types: [
    //     {
    //       title: 'Кованые мангалы',
    //       slug: 'mangal_1',
    //       img: {
    //         preview: 'gallery/mangal/1_mangal_400x300.jpg',
    //         original:'gallery/mangal/1_mangal_1000x750.jpg',
    //       },
    //       products: [
    //         {
    //           id: 139,
    //           title: 'Кованые мангалы',
    //           text: 'Кованые мангалы №1',
    //           img: {
    //             preview: 'gallery/mangal/1_mangal_400x300.jpg',
    //             original:'gallery/mangal/1_mangal_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 140,
    //           title: 'Кованые мангалы',
    //           text: 'Кованые мангалы №2',
    //           img: {
    //             preview: 'gallery/mangal/2_mangal_400x300.jpg',
    //             original:'gallery/mangal/2_mangal_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 141,
    //           title: 'Кованые мангалы',
    //           text: 'Кованые мангалы №3',
    //           img: {
    //             preview: 'gallery/mangal/3_mangal_400x300.jpg',
    //             original:'gallery/mangal/3_mangal_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 142,
    //           title: 'Кованые мангалы',
    //           text: 'Кованые мангалы №4',
    //           img: {
    //             preview: 'gallery/mangal/4_mangal_400x300.jpg',
    //             original:'gallery/mangal/4_mangal_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 143,
    //           title: 'Кованые мангалы',
    //           text: 'Кованые мангалы №5',
    //           img: {
    //             preview: 'gallery/mangal/5_mangal_400x300.jpg',
    //             original:'gallery/mangal/5_mangal_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 144,
    //           title: 'Кованые мангалы',
    //           text: 'Кованые мангалы №6',
    //           img: {
    //             preview: 'gallery/mangal/6_mangal_400x300.jpg',
    //             original:'gallery/mangal/6_mangal_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 145,
    //           title: 'Кованые мангалы',
    //           text: 'Кованые мангалы №7',
    //           img: {
    //             preview: 'gallery/mangal/7_mangal_400x300.jpg',
    //             original:'gallery/mangal/7_mangal_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 146,
    //           title: 'Кованые мангалы',
    //           text: 'Кованые мангалы №8',
    //           img: {
    //             preview: 'gallery/mangal/8_mangal_400x300.jpg',
    //             original:'gallery/mangal/8_mangal_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 147,
    //           title: 'Кованые мангалы',
    //           text: 'Кованые мангалы №9',
    //           img: {
    //             preview: 'gallery/mangal/9_mangal_400x300.jpg',
    //             original:'gallery/mangal/9_mangal_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 148,
    //           title: 'Кованые мангалы',
    //           text: 'Кованые мангалы №10',
    //           img: {
    //             preview: 'gallery/mangal/10_mangal_400x300.jpg',
    //             original:'gallery/mangal/10_mangal_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 149,
    //           title: 'Кованые мангалы',
    //           text: 'Кованые мангалы №11',
    //           img: {
    //             preview: 'gallery/mangal/11_mangal_400x300.jpg',
    //             original:'gallery/mangal/11_mangal_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150,
    //           title: 'Кованые мангалы',
    //           text: 'Кованые мангалы №12',
    //           img: {
    //             preview: 'gallery/mangal/12_mangal_400x300.jpg',
    //             original:'gallery/mangal/12_mangal_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 151,
    //           title: 'Кованые мангалы',
    //           text: 'Кованые мангалы №13',
    //           img: {
    //             preview: 'gallery/mangal/13_mangal_400x300.jpg',
    //             original:'gallery/mangal/13_mangal_1000x750.jpg',
    //           },
    //         },
    //       ],
    //     },
    //
    //   ]
    // },
    // {
    //   title: 'Кованые люстры',
    //   slug: 'lustra',
    //   img: {
    //     preview: 'gallery/lustra/1_lustra_400x300.jpg',
    //     original:'gallery/lustra/1_lustra_1000x750.jpg',
    //   },
    //   text: 'Кованые люстры — классика в мире интерьерного и уличного освещения. Они применяются уже несколько веков, такие светильники со свечами украшали средневековые замки.' +
    //     ' Современные кованые люстры с разнообразными источниками света также популярны. Они сочетаются со многими стилями оформления, придавая помещению или улице особый шарм',
    //   metaData: {
    //     meta: [
    //       { hid:'description-contacts', name: 'description', content: 'Купить кованые люстры в Москве и Московской области, Фотографии с ценами.'},
    //       { name: 'keywords', content: 'купить кованые люстры не дорого,  ковка, художественная, кованые, люстры, цена, стоимость, kovka-mo,кованые люстры,люстры одинцово'},
    //     ],
    //     title: 'Купить кованые люстры - цена и фото, изготовление на заказ в Москве и МО – ковка – от компании Феникс Стальное Решение'
    //   },
    //   price: 'от 20000 за шт.',
    //   types: [
    //     {
    //       title: 'Кованые люстры',
    //       slug: 'lustra_1',
    //       img: {
    //         preview: 'gallery/lustra/1_lustra_400x300.jpg',
    //         original:'gallery/lustra/1_lustra_1000x750.jpg',
    //       },
    //       products: [
    //         {
    //           id: 152,
    //           title: 'Кованые люстры',
    //           text: 'Кованые люстры №1',
    //           img: {
    //             preview: 'gallery/lustra/1_lustra_400x300.jpg',
    //             original:'gallery/lustra/1_lustra_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 153,
    //           title: 'Кованые люстры',
    //           text: 'Кованые люстры №2',
    //           img: {
    //             preview: 'gallery/lustra/2_lustra_400x300.jpg',
    //             original:'gallery/lustra/2_lustra_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 154,
    //           title: 'Кованые люстры',
    //           text: 'Кованые люстры №3',
    //           img: {
    //             preview: 'gallery/lustra/3_lustra_400x300.jpg',
    //             original:'gallery/lustra/3_lustra_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 155,
    //           title: 'Кованые люстры',
    //           text: 'Кованые люстры №4',
    //           img: {
    //             preview: 'gallery/lustra/4_lustra_400x300.jpg',
    //             original:'gallery/lustra/4_lustra_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 156,
    //           title: 'Кованые люстры',
    //           text: 'Кованые люстры №5',
    //           img: {
    //             preview: 'gallery/lustra/5_lustra_400x300.jpg',
    //             original:'gallery/lustra/5_lustra_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 157,
    //           title: 'Кованые люстры',
    //           text: 'Кованые люстры №6',
    //           img: {
    //             preview: 'gallery/lustra/1_lustra_400x300.jpg',
    //             original:'gallery/lustra/1_lustra_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 158,
    //           title: 'Кованые люстры',
    //           text: 'Кованые люстры №7',
    //           img: {
    //             preview: 'gallery/lustra/7_lustra_400x300.jpg',
    //             original:'gallery/lustra/7_lustra_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 159,
    //           title: 'Кованые люстры',
    //           text: 'Кованые люстры №8',
    //           img: {
    //             preview: 'gallery/lustra/8_lustra_400x300.jpg',
    //             original:'gallery/lustra/8_lustra_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 160,
    //           title: 'Кованые люстры',
    //           text: 'Кованые люстры №9',
    //           img: {
    //             preview: 'gallery/lustra/9_lustra_400x300.jpg',
    //             original:'gallery/lustra/9_lustra_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 161,
    //           title: 'Кованые люстры',
    //           text: 'Кованые люстры №10',
    //           img: {
    //             preview: 'gallery/lustra/10_lustra_400x300.jpg',
    //             original:'gallery/lustra/10_lustra_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 162,
    //           title: 'Кованые люстры',
    //           text: 'Кованые люстры №11',
    //           img: {
    //             preview: 'gallery/lustra/11_lustra_400x300.jpg',
    //             original:'gallery/lustra/11_lustra_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 163,
    //           title: 'Кованые люстры',
    //           text: 'Кованые люстры №12',
    //           img: {
    //             preview: 'gallery/lustra/12_lustra_400x300.jpg',
    //             original:'gallery/lustra/12_lustra_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 164,
    //           title: 'Кованые люстры',
    //           text: 'Кованые люстры №13',
    //           img: {
    //             preview: 'gallery/lustra/13_lustra_400x300.jpg',
    //             original:'gallery/lustra/13_lustra_1000x750.jpg',
    //           },
    //         },
    //       ],
    //     },
    //
    //   ]
    // },
    // {
    //   title: 'Кованые бра',
    //   slug: 'bra',
    //   img: {
    //     preview: 'gallery/bra/1_bra_400x300.jpg',
    //     original:'gallery/bra/1_bra_1000x750.jpg',
    //   },
    //   text: 'Кованые бра на стену могут быть как интерьерными, так и уличными. В помещении бра используется чаще всего в качестве дополнительного локального освещения. ' +
    //     'С его помощью можно визуально разделить пространство комнаты. Кованые бра часто повторяют дизайн люстры или же подбираются в одном стиле с ней',
    //   metaData: {
    //     meta: [
    //       { hid:'description-contacts', name: 'description', content: 'Купить кованые бра в Москве и Московской области, Фотографии с ценами.'},
    //       { name: 'keywords', content: 'купить кованые бра не дорого,  ковка, художественная, кованые, бра, цена, стоимость, kovka-mo,кованые бра,бра одинцово'},
    //     ],
    //     title: 'Купить кованые бра - цена и фото, изготовление на заказ в Москве и МО – ковка – от компании Феникс Стальное Решение'
    //   },
    //   price: 'от 7000 за шт.',
    //   types: [
    //     {
    //       title: 'Кованые бра',
    //       slug: 'bra_1',
    //       img: {
    //         preview: 'gallery/bra/1_bra_400x300.jpg',
    //         original:'gallery/bra/1_bra_1000x750.jpg',
    //       },
    //       products: [
    //         {
    //           id: 165,
    //           title: 'Кованые бра',
    //           text: 'Кованые бра №1',
    //           img: {
    //             preview: 'gallery/bra/1_bra_400x300.jpg',
    //             original:'gallery/bra/1_bra_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 166,
    //           title: 'Кованые бра',
    //           text: 'Кованые бра №2',
    //           img: {
    //             preview: 'gallery/bra/2_bra_400x300.jpg',
    //             original:'gallery/bra/2_bra_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 167,
    //           title: 'Кованые бра',
    //           text: 'Кованые бра №3',
    //           img: {
    //             preview: 'gallery/bra/3_bra_400x300.jpg',
    //             original:'gallery/bra/3_bra_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 168,
    //           title: 'Кованые бра',
    //           text: 'Кованые бра №4',
    //           img: {
    //             preview: 'gallery/bra/4_bra_400x300.jpg',
    //             original:'gallery/bra/4_bra_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 169,
    //           title: 'Кованые бра',
    //           text: 'Кованые бра №5',
    //           img: {
    //             preview: 'gallery/bra/5_bra_400x300.jpg',
    //             original:'gallery/bra/5_bra_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 170,
    //           title: 'Кованые бра',
    //           text: 'Кованые бра №6',
    //           img: {
    //             preview: 'gallery/bra/6_bra_400x300.jpg',
    //             original:'gallery/bra/6_bra_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 171,
    //           title: 'Кованые бра',
    //           text: 'Кованые бра №7',
    //           img: {
    //             preview: 'gallery/bra/7_bra_400x300.jpg',
    //             original:'gallery/bra/7_bra_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 172,
    //           title: 'Кованые бра',
    //           text: 'Кованые бра №8',
    //           img: {
    //             preview: 'gallery/bra/8_bra_400x300.jpg',
    //             original:'gallery/bra/8_bra_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 173,
    //           title: 'Кованые бра',
    //           text: 'Кованые бра №9',
    //           img: {
    //             preview: 'gallery/bra/9_bra_400x300.jpg',
    //             original:'gallery/bra/9_bra_1000x750.jpg',
    //           },
    //         },
    //
    //       ],
    //     },
    //
    //   ]
    // },
    // {
    //   title: 'Кованые торшеры',
    //   slug: 'torsher',
    //   img: {
    //     preview: 'gallery/torsher/1_torsher_400x300.jpg',
    //     original:'gallery/torsher/1_torsher_1000x750.jpg',
    //   },
    //   text: 'Кованые торшеры благодаря своей уникальной конструкции имеют оригинальный дизайн. Всем, кому нравится атмосфера средневековых замков и кто имеет желание перенести ее в свой дом, ' +
    //     'отлично подойдет такой вариант светильников. Этот элемент декора замечательно вписывается в любой интерьер и гармонично сочетается с современной мебелью.',
    //   metaData: {
    //     meta: [
    //       { hid:'description-contacts', name: 'description', content: 'Купить кованые бра в Москве и Московской области, Фотографии с ценами.'},
    //       { name: 'keywords', content: 'купить кованые торшеры не дорого,  ковка, художественная, кованые, торшеры, цена, стоимость, kovka-mo,кованые торшеры,торшеры одинцово'},
    //     ],
    //     title: 'Купить кованые торшеры - цена и фото, изготовление на заказ в Москве и МО – ковка – от компании Феникс Стальное Решение'
    //   },
    //   price: 'от 15000 за шт.',
    //   types: [
    //     {
    //       title: 'Кованые торшеры',
    //       slug: 'torsher_1',
    //       img: {
    //         preview: 'gallery/torsher/1_torsher_400x300.jpg',
    //         original:'gallery/torsher/1_torsher_1000x750.jpg',
    //       },
    //       products: [
    //         {
    //           id: 174,
    //           title: 'Кованые торшеры',
    //           text: 'Кованые торшеры №1',
    //           img: {
    //             preview: 'gallery/torsher/1_torsher_400x300.jpg',
    //             original:'gallery/torsher/1_torsher_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 175,
    //           title: 'Кованые торшеры',
    //           text: 'Кованые торшеры №2',
    //           img: {
    //             preview: 'gallery/torsher/2_torsher_400x300.jpg',
    //             original:'gallery/torsher/2_torsher_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 176,
    //           title: 'Кованые торшеры',
    //           text: 'Кованые торшеры №3',
    //           img: {
    //             preview: 'gallery/torsher/3_torsher_400x300.jpg',
    //             original:'gallery/torsher/3_torsher_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 177,
    //           title: 'Кованые торшеры',
    //           text: 'Кованые торшеры №4',
    //           img: {
    //             preview: 'gallery/torsher/4_torsher_400x300.jpg',
    //             original:'gallery/torsher/4_torsher_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 178,
    //           title: 'Кованые торшеры',
    //           text: 'Кованые торшеры №5',
    //           img: {
    //             preview: 'gallery/torsher/5_torsher_400x300.jpg',
    //             original:'gallery/torsher/5_torsher_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 179,
    //           title: 'Кованые торшеры',
    //           text: 'Кованые торшеры №6',
    //           img: {
    //             preview: 'gallery/torsher/6_torsher_400x300.jpg',
    //             original:'gallery/torsher/6_torsher_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 180,
    //           title: 'Кованые торшеры',
    //           text: 'Кованые торшеры №7',
    //           img: {
    //             preview: 'gallery/torsher/7_torsher_400x300.jpg',
    //             original:'gallery/torsher/7_torsher_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 181,
    //           title: 'Кованые торшеры',
    //           text: 'Кованые торшеры №8',
    //           img: {
    //             preview: 'gallery/torsher/8_torsher_400x300.jpg',
    //             original:'gallery/torsher/8_torsher_1000x750.jpg',
    //           },
    //         },
    //
    //
    //       ],
    //     },
    //
    //   ]
    // },
    // {
    //   title: 'Ковка в стиле лофт',
    //   slug: 'loft',
    //   img: {
    //     preview: 'gallery/loft/1_loft_400x300.jpg',
    //     original:'gallery/loft/1_loft_1000x750.jpg',
    //   },
    //   text: 'Лофт — грубый фон (кирпичные или бетонные стены) высокие потолки, открытые коммуникации. Стиль, ' +
    //     'в котором можно встретить сочетание металла и натуральной кожи, стекла и пластика, плакатов и живописи маслом. ' +
    //     'Лофт — это волшебство простора и естественного света, соединение старого и нового, а также уникальная возможность реализовать свои самые смелые фантазии.',
    //   metaData: {
    //     meta: [
    //       { hid:'description-contacts', name: 'description', content: 'Интерьер в стиле лофт заказать в Москве и Московской области, Фотографии с ценами.'},
    //       { name: 'keywords', content: 'купить  лофт не дорого, ковка, художественная, кованые, лофт, стиль лофт, цена, стоимость, kovka-mo,кованые лофт,лофт одинцово'},
    //     ],
    //     title: 'Сделать интерьер в стиле лофт - цена и фото, изготовление на заказ в Москве и МО – ковка – от компании Феникс Стальное Решение'
    //   },
    //   price: 'от 5000 за шт.',
    //   types: [
    //     {
    //       title: 'Ковка в стиле лофт',
    //       slug: 'loft_1',
    //       img: {
    //         preview: 'gallery/loft/1_loft_400x300.jpg',
    //         original:'gallery/loft/1_loft_1000x750.jpg',
    //       },
    //       products: [
    //         {
    //           id: 182,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №1',
    //           img: {
    //             preview: 'gallery/loft/1_loft_400x300.jpg',
    //             original:'gallery/loft/1_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 183,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №2',
    //           img: {
    //             preview: 'gallery/loft/2_loft_400x300.jpg',
    //             original:'gallery/loft/2_loft_1000x750.jpg',
    //           },
    //         },
    //
    //         {
    //           id: 184,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №3',
    //           img: {
    //             preview: 'gallery/loft/3_loft_400x300.jpg',
    //             original:'gallery/loft/3_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 185,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №4',
    //           img: {
    //             preview: 'gallery/loft/4_loft_400x300.jpg',
    //             original:'gallery/loft/4_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 186,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №5',
    //           img: {
    //             preview: 'gallery/loft/5_loft_400x300.jpg',
    //             original:'gallery/loft/5_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 187,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №6',
    //           img: {
    //             preview: 'gallery/loft/6_loft_400x300.jpg',
    //             original:'gallery/loft/6_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 188,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №7',
    //           img: {
    //             preview: 'gallery/loft/7_loft_400x300.jpg',
    //             original:'gallery/loft/7_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 189,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №8',
    //           img: {
    //             preview: 'gallery/loft/8_loft_400x300.jpg',
    //             original:'gallery/loft/8_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 190,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №9',
    //           img: {
    //             preview: 'gallery/loft/9_loft_400x300.jpg',
    //             original:'gallery/loft/9_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 191,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №10',
    //           img: {
    //             preview: 'gallery/loft/10_loft_400x300.jpg',
    //             original:'gallery/loft/10_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 192,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №11',
    //           img: {
    //             preview: 'gallery/loft/11_loft_400x300.jpg',
    //             original:'gallery/loft/11_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 193,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №12',
    //           img: {
    //             preview: 'gallery/loft/12_loft_400x300.jpg',
    //             original:'gallery/loft/12_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 194,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №13',
    //           img: {
    //             preview: 'gallery/loft/13_loft_400x300.jpg',
    //             original:'gallery/loft/13_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 195,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №14',
    //           img: {
    //             preview: 'gallery/loft/14_loft_400x300.jpg',
    //             original:'gallery/loft/14_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 196,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №15',
    //           img: {
    //             preview: 'gallery/loft/15_loft_400x300.jpg',
    //             original:'gallery/loft/15_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 197,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №16',
    //           img: {
    //             preview: 'gallery/loft/16_loft_400x300.jpg',
    //             original:'gallery/loft/16_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 198,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №17',
    //           img: {
    //             preview: 'gallery/loft/17_loft_400x300.jpg',
    //             original:'gallery/loft/17_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 199,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №18',
    //           img: {
    //             preview: 'gallery/loft/18_loft_400x300.jpg',
    //             original:'gallery/loft/18_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 200,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №19',
    //           img: {
    //             preview: 'gallery/loft/19_loft_400x300.jpg',
    //             original:'gallery/loft/19_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 201,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №20',
    //           img: {
    //             preview: 'gallery/loft/20_loft_400x300.jpg',
    //             original:'gallery/loft/20_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150421,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №21',
    //           img: {
    //             preview: 'gallery/loft/21_loft_400x300.jpg',
    //             original:'gallery/loft/21_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150422,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №22',
    //           img: {
    //             preview: 'gallery/loft/22_loft_400x300.jpg',
    //             original:'gallery/loft/22_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150423,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №23',
    //           img: {
    //             preview: 'gallery/loft/23_loft_400x300.jpg',
    //             original:'gallery/loft/23_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150424,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №24',
    //           img: {
    //             preview: 'gallery/loft/24_loft_400x300.jpg',
    //             original:'gallery/loft/24_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150425,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №25',
    //           img: {
    //             preview: 'gallery/loft/25_loft_400x300.jpg',
    //             original:'gallery/loft/25_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150426,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №26',
    //           img: {
    //             preview: 'gallery/loft/26_loft_400x300.jpg',
    //             original:'gallery/loft/26_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150427,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №27',
    //           img: {
    //             preview: 'gallery/loft/27_loft_400x300.jpg',
    //             original:'gallery/loft/27_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150428,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №28',
    //           img: {
    //             preview: 'gallery/loft/28_loft_400x300.jpg',
    //             original:'gallery/loft/28_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150429,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №29',
    //           img: {
    //             preview: 'gallery/loft/29_loft_400x300.jpg',
    //             original:'gallery/loft/29_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150430,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №30',
    //           img: {
    //             preview: 'gallery/loft/30_loft_400x300.jpg',
    //             original:'gallery/loft/30_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150431,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №31',
    //           img: {
    //             preview: 'gallery/loft/31_loft_400x300.jpg',
    //             original:'gallery/loft/31_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150432,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №32',
    //           img: {
    //             preview: 'gallery/loft/32_loft_400x300.jpg',
    //             original:'gallery/loft/32_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150433,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №33',
    //           img: {
    //             preview: 'gallery/loft/33_loft_400x300.jpg',
    //             original:'gallery/loft/33_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150434,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №34',
    //           img: {
    //             preview: 'gallery/loft/34_loft_400x300.jpg',
    //             original:'gallery/loft/34_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150435,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №35',
    //           img: {
    //             preview: 'gallery/loft/35_loft_400x300.jpg',
    //             original:'gallery/loft/35_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150436,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №36',
    //           img: {
    //             preview: 'gallery/loft/36_loft_400x300.jpg',
    //             original:'gallery/loft/36_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150437,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №37',
    //           img: {
    //             preview: 'gallery/loft/37_loft_400x300.jpg',
    //             original:'gallery/loft/37_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150438,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №38',
    //           img: {
    //             preview: 'gallery/loft/38_loft_400x300.jpg',
    //             original:'gallery/loft/38_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150439,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №39',
    //           img: {
    //             preview: 'gallery/loft/39_loft_400x300.jpg',
    //             original:'gallery/loft/39_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150440,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №40',
    //           img: {
    //             preview: 'gallery/loft/40_loft_400x300.jpg',
    //             original:'gallery/loft/40_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150441,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №41',
    //           img: {
    //             preview: 'gallery/loft/41_loft_400x300.jpg',
    //             original:'gallery/loft/41_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150442,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №42',
    //           img: {
    //             preview: 'gallery/loft/42_loft_400x300.jpg',
    //             original:'gallery/loft/42_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150443,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №43',
    //           img: {
    //             preview: 'gallery/loft/43_loft_400x300.jpg',
    //             original:'gallery/loft/43_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150444,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №44',
    //           img: {
    //             preview: 'gallery/loft/44_loft_400x300.jpg',
    //             original:'gallery/loft/44_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150445,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №45',
    //           img: {
    //             preview: 'gallery/loft/45_loft_400x300.jpg',
    //             original:'gallery/loft/45_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150446,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №46',
    //           img: {
    //             preview: 'gallery/loft/46_loft_400x300.jpg',
    //             original:'gallery/loft/46_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150447,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №47',
    //           img: {
    //             preview: 'gallery/loft/47_loft_400x300.jpg',
    //             original:'gallery/loft/47_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150448,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №48',
    //           img: {
    //             preview: 'gallery/loft/48_loft_400x300.jpg',
    //             original:'gallery/loft/48_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150449,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №49',
    //           img: {
    //             preview: 'gallery/loft/49_loft_400x300.jpg',
    //             original:'gallery/loft/49_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150450,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №50',
    //           img: {
    //             preview: 'gallery/loft/50_loft_400x300.jpg',
    //             original:'gallery/loft/50_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150451,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №51',
    //           img: {
    //             preview: 'gallery/loft/51_loft_400x300.jpg',
    //             original:'gallery/loft/51_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150452,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №52',
    //           img: {
    //             preview: 'gallery/loft/52_loft_400x300.jpg',
    //             original:'gallery/loft/52_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150453,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №53',
    //           img: {
    //             preview: 'gallery/loft/53_loft_400x300.jpg',
    //             original:'gallery/loft/53_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150454,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №54',
    //           img: {
    //             preview: 'gallery/loft/54_loft_400x300.jpg',
    //             original:'gallery/loft/54_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150455,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №55',
    //           img: {
    //             preview: 'gallery/loft/55_loft_400x300.jpg',
    //             original:'gallery/loft/55_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150456,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №56',
    //           img: {
    //             preview: 'gallery/loft/56_loft_400x300.jpg',
    //             original:'gallery/loft/56_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150457,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №57',
    //           img: {
    //             preview: 'gallery/loft/57_loft_400x300.jpg',
    //             original:'gallery/loft/57_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150458,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №58',
    //           img: {
    //             preview: 'gallery/loft/58_loft_400x300.jpg',
    //             original:'gallery/loft/58_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150459,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №59',
    //           img: {
    //             preview: 'gallery/loft/59_loft_400x300.jpg',
    //             original:'gallery/loft/59_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150460,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №60',
    //           img: {
    //             preview: 'gallery/loft/60_loft_400x300.jpg',
    //             original:'gallery/loft/60_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150461,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №61',
    //           img: {
    //             preview: 'gallery/loft/61_loft_400x300.jpg',
    //             original:'gallery/loft/61_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150462,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №62',
    //           img: {
    //             preview: 'gallery/loft/62_loft_400x300.jpg',
    //             original:'gallery/loft/62_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150463,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №63',
    //           img: {
    //             preview: 'gallery/loft/63_loft_400x300.jpg',
    //             original:'gallery/loft/63_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150464,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №64',
    //           img: {
    //             preview: 'gallery/loft/64_loft_400x300.jpg',
    //             original:'gallery/loft/64_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150465,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №65',
    //           img: {
    //             preview: 'gallery/loft/65_loft_400x300.jpg',
    //             original:'gallery/loft/65_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150466,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №66',
    //           img: {
    //             preview: 'gallery/loft/66_loft_400x300.jpg',
    //             original:'gallery/loft/66_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150467,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №67',
    //           img: {
    //             preview: 'gallery/loft/67_loft_400x300.jpg',
    //             original:'gallery/loft/67_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150468,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №68',
    //           img: {
    //             preview: 'gallery/loft/68_loft_400x300.jpg',
    //             original:'gallery/loft/68_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150469,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №69',
    //           img: {
    //             preview: 'gallery/loft/69_loft_400x300.jpg',
    //             original:'gallery/loft/69_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150470,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №70',
    //           img: {
    //             preview: 'gallery/loft/70_loft_400x300.jpg',
    //             original:'gallery/loft/70_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150471,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №71',
    //           img: {
    //             preview: 'gallery/loft/71_loft_400x300.jpg',
    //             original:'gallery/loft/71_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150472,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №72',
    //           img: {
    //             preview: 'gallery/loft/72_loft_400x300.jpg',
    //             original:'gallery/loft/72_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150473,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №73',
    //           img: {
    //             preview: 'gallery/loft/73_loft_400x300.jpg',
    //             original:'gallery/loft/73_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150474,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №74',
    //           img: {
    //             preview: 'gallery/loft/74_loft_400x300.jpg',
    //             original:'gallery/loft/74_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150475,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №75',
    //           img: {
    //             preview: 'gallery/loft/75_loft_400x300.jpg',
    //             original:'gallery/loft/75_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150476,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №76',
    //           img: {
    //             preview: 'gallery/loft/76_loft_400x300.jpg',
    //             original:'gallery/loft/76_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150477,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №77',
    //           img: {
    //             preview: 'gallery/loft/77_loft_400x300.jpg',
    //             original:'gallery/loft/77_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150478,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №78',
    //           img: {
    //             preview: 'gallery/loft/78_loft_400x300.jpg',
    //             original:'gallery/loft/78_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150479,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №79',
    //           img: {
    //             preview: 'gallery/loft/79_loft_400x300.jpg',
    //             original:'gallery/loft/79_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150480,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №80',
    //           img: {
    //             preview: 'gallery/loft/80_loft_400x300.jpg',
    //             original:'gallery/loft/80_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150481,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №81',
    //           img: {
    //             preview: 'gallery/loft/81_loft_400x300.jpg',
    //             original:'gallery/loft/81_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150482,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №82',
    //           img: {
    //             preview: 'gallery/loft/82_loft_400x300.jpg',
    //             original:'gallery/loft/82_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150483,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №83',
    //           img: {
    //             preview: 'gallery/loft/83_loft_400x300.jpg',
    //             original:'gallery/loft/83_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150484,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №84',
    //           img: {
    //             preview: 'gallery/loft/84_loft_400x300.jpg',
    //             original:'gallery/loft/84_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150485,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №85',
    //           img: {
    //             preview: 'gallery/loft/85_loft_400x300.jpg',
    //             original:'gallery/loft/85_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150486,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №86',
    //           img: {
    //             preview: 'gallery/loft/86_loft_400x300.jpg',
    //             original:'gallery/loft/86_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150487,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №87',
    //           img: {
    //             preview: 'gallery/loft/87_loft_400x300.jpg',
    //             original:'gallery/loft/87_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150488,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №88',
    //           img: {
    //             preview: 'gallery/loft/88_loft_400x300.jpg',
    //             original:'gallery/loft/88_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150489,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №89',
    //           img: {
    //             preview: 'gallery/loft/89_loft_400x300.jpg',
    //             original:'gallery/loft/89_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150490,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №90',
    //           img: {
    //             preview: 'gallery/loft/90_loft_400x300.jpg',
    //             original:'gallery/loft/90_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150491,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №91',
    //           img: {
    //             preview: 'gallery/loft/91_loft_400x300.jpg',
    //             original:'gallery/loft/91_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150492,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №92',
    //           img: {
    //             preview: 'gallery/loft/92_loft_400x300.jpg',
    //             original:'gallery/loft/92_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150493,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №93',
    //           img: {
    //             preview: 'gallery/loft/93_loft_400x300.jpg',
    //             original:'gallery/loft/93_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150494,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №94',
    //           img: {
    //             preview: 'gallery/loft/94_loft_400x300.jpg',
    //             original:'gallery/loft/94_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150495,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №95',
    //           img: {
    //             preview: 'gallery/loft/95_loft_400x300.jpg',
    //             original:'gallery/loft/95_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150496,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №96',
    //           img: {
    //             preview: 'gallery/loft/96_loft_400x300.jpg',
    //             original:'gallery/loft/96_loft_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150497,
    //           title: 'Ковка в стиле лофт',
    //           text: 'Ковка лофт №97',
    //           img: {
    //             preview: 'gallery/loft/97_loft_400x300.jpg',
    //             original:'gallery/loft/97_loft_1000x750.jpg',
    //           },
    //         },
    //       ],
    //     },
    //
    //   ]
    // },
    // {
    //   title: 'Ковка предметов интерьера',
    //   slug: 'interer',
    //   img: {
    //     preview: 'gallery/interer/1_interer_400x300.jpg',
    //     original:'gallery/interer/1_interer_1000x750.jpg',
    //   },
    //   text: 'Сложно перечислить все кованые предметы интерьера, которые сегодня столь популярны и востребованы в любых интерьерах. ' +
    //     'Это светильники и подсвечники, торшеры и зеркала, полки и цветники, дровяные подставки и фонари, вешалки и каминные принадлежности.',
    //   metaData: {
    //     meta: [
    //       { hid:'description-contacts', name: 'description', content: 'Ковка предметов интерьера заказать в Москве и Московской области, Фотографии с ценами.'},
    //       { name: 'keywords', content: 'купить  кованные предметы интерьера не дорого, ковка, художественная, кованые, кованный интерьер, стиль интерьера, цена, стоимость, kovka-mo,кованые лофт,лофт одинцово'},
    //     ],
    //     title: 'Заказать предметы интерьера - цена и фото, изготовление на заказ в Москве и МО – ковка – от компании Феникс Стальное Решение'
    //   },
    //   price: 'от 5000 за шт.',
    //   types: [
    //     {
    //       title: 'Ковка предметов интерьера',
    //       slug: 'interer',
    //       img: {
    //         preview: 'gallery/interer/1_interer_400x300.jpg',
    //         original:'gallery/interer/1_interer_1000x750.jpg',
    //       },
    //       products: [
    //         {
    //           id: 150301,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №1',
    //           img: {
    //             preview: 'gallery/interer/1_interer_400x300.jpg',
    //             original:'gallery/interer/1_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150302,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №2',
    //           img: {
    //             preview: 'gallery/interer/2_interer_400x300.jpg',
    //             original:'gallery/interer/2_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150303,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №3',
    //           img: {
    //             preview: 'gallery/interer/3_interer_400x300.jpg',
    //             original:'gallery/interer/3_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150304,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №4',
    //           img: {
    //             preview: 'gallery/interer/4_interer_400x300.jpg',
    //             original:'gallery/interer/4_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150305,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №5',
    //           img: {
    //             preview: 'gallery/interer/5_interer_400x300.jpg',
    //             original:'gallery/interer/5_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150306,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №6',
    //           img: {
    //             preview: 'gallery/interer/6_interer_400x300.jpg',
    //             original:'gallery/interer/6_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150307,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №7',
    //           img: {
    //             preview: 'gallery/interer/7_interer_400x300.jpg',
    //             original:'gallery/interer/7_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150308,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №8',
    //           img: {
    //             preview: 'gallery/interer/8_interer_400x300.jpg',
    //             original:'gallery/interer/8_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150309,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №9',
    //           img: {
    //             preview: 'gallery/interer/9_interer_400x300.jpg',
    //             original:'gallery/interer/9_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150310,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №10',
    //           img: {
    //             preview: 'gallery/interer/10_interer_400x300.jpg',
    //             original:'gallery/interer/10_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150311,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №11',
    //           img: {
    //             preview: 'gallery/interer/11_interer_400x300.jpg',
    //             original:'gallery/interer/11_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150312,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №12',
    //           img: {
    //             preview: 'gallery/interer/12_interer_400x300.jpg',
    //             original:'gallery/interer/12_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150313,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №13',
    //           img: {
    //             preview: 'gallery/interer/13_interer_400x300.jpg',
    //             original:'gallery/interer/13_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150314,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №14',
    //           img: {
    //             preview: 'gallery/interer/14_interer_400x300.jpg',
    //             original:'gallery/interer/14_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150315,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №15',
    //           img: {
    //             preview: 'gallery/interer/15_interer_400x300.jpg',
    //             original:'gallery/interer/15_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150316,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №16',
    //           img: {
    //             preview: 'gallery/interer/16_interer_400x300.jpg',
    //             original:'gallery/interer/16_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150317,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №17',
    //           img: {
    //             preview: 'gallery/interer/17_interer_400x300.jpg',
    //             original:'gallery/interer/17_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150318,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №18',
    //           img: {
    //             preview: 'gallery/interer/18_interer_400x300.jpg',
    //             original:'gallery/interer/18_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150319,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №19',
    //           img: {
    //             preview: 'gallery/interer/19_interer_400x300.jpg',
    //             original:'gallery/interer/19_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150320,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №20',
    //           img: {
    //             preview: 'gallery/interer/20_interer_400x300.jpg',
    //             original:'gallery/interer/20_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150321,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №21',
    //           img: {
    //             preview: 'gallery/interer/21_interer_400x300.jpg',
    //             original:'gallery/interer/21_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150322,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №22',
    //           img: {
    //             preview: 'gallery/interer/22_interer_400x300.jpg',
    //             original:'gallery/interer/22_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1503023,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №23',
    //           img: {
    //             preview: 'gallery/interer/23_interer_400x300.jpg',
    //             original:'gallery/interer/23_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1503024,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №24',
    //           img: {
    //             preview: 'gallery/interer/24_interer_400x300.jpg',
    //             original:'gallery/interer/24_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1503025,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №25',
    //           img: {
    //             preview: 'gallery/interer/25_interer_400x300.jpg',
    //             original:'gallery/interer/25_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1503026,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №26',
    //           img: {
    //             preview: 'gallery/interer/26_interer_400x300.jpg',
    //             original:'gallery/interer/26_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1503027,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №27',
    //           img: {
    //             preview: 'gallery/interer/27_interer_400x300.jpg',
    //             original:'gallery/interer/27_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1503028,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №28',
    //           img: {
    //             preview: 'gallery/interer/28_interer_400x300.jpg',
    //             original:'gallery/interer/28_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1503029,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №29',
    //           img: {
    //             preview: 'gallery/interer/29_interer_400x300.jpg',
    //             original:'gallery/interer/29_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150330,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №30',
    //           img: {
    //             preview: 'gallery/interer/30_interer_400x300.jpg',
    //             original:'gallery/interer/30_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150331,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №31',
    //           img: {
    //             preview: 'gallery/interer/31_interer_400x300.jpg',
    //             original:'gallery/interer/31_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150332,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №32',
    //           img: {
    //             preview: 'gallery/interer/32_interer_400x300.jpg',
    //             original:'gallery/interer/32_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150333,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №33',
    //           img: {
    //             preview: 'gallery/interer/33_interer_400x300.jpg',
    //             original:'gallery/interer/33_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150334,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №34',
    //           img: {
    //             preview: 'gallery/interer/34_interer_400x300.jpg',
    //             original:'gallery/interer/34_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150335,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №35',
    //           img: {
    //             preview: 'gallery/interer/35_interer_400x300.jpg',
    //             original:'gallery/interer/35_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150336,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №36',
    //           img: {
    //             preview: 'gallery/interer/36_interer_400x300.jpg',
    //             original:'gallery/interer/36_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150337,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №37',
    //           img: {
    //             preview: 'gallery/interer/37_interer_400x300.jpg',
    //             original:'gallery/interer/37_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150338,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №38',
    //           img: {
    //             preview: 'gallery/interer/38_interer_400x300.jpg',
    //             original:'gallery/interer/38_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150339,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №39',
    //           img: {
    //             preview: 'gallery/interer/39_interer_400x300.jpg',
    //             original:'gallery/interer/39_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150340,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №40',
    //           img: {
    //             preview: 'gallery/interer/40_interer_400x300.jpg',
    //             original:'gallery/interer/40_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150341,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №41',
    //           img: {
    //             preview: 'gallery/interer/41_interer_400x300.jpg',
    //             original:'gallery/interer/41_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150342,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №42',
    //           img: {
    //             preview: 'gallery/interer/42_interer_400x300.jpg',
    //             original:'gallery/interer/42_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150343,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №43',
    //           img: {
    //             preview: 'gallery/interer/43_interer_400x300.jpg',
    //             original:'gallery/interer/43_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150344,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №44',
    //           img: {
    //             preview: 'gallery/interer/44_interer_400x300.jpg',
    //             original:'gallery/interer/44_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150345,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №45',
    //           img: {
    //             preview: 'gallery/interer/45_interer_400x300.jpg',
    //             original:'gallery/interer/45_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150346,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №46',
    //           img: {
    //             preview: 'gallery/interer/46_interer_400x300.jpg',
    //             original:'gallery/interer/46_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150347,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №47',
    //           img: {
    //             preview: 'gallery/interer/47_interer_400x300.jpg',
    //             original:'gallery/interer/47_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150348,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №48',
    //           img: {
    //             preview: 'gallery/interer/48_interer_400x300.jpg',
    //             original:'gallery/interer/48_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150349,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №49',
    //           img: {
    //             preview: 'gallery/interer/49_interer_400x300.jpg',
    //             original:'gallery/interer/49_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150350,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №50',
    //           img: {
    //             preview: 'gallery/interer/50_interer_400x300.jpg',
    //             original:'gallery/interer/50_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150351,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №51',
    //           img: {
    //             preview: 'gallery/interer/51_interer_400x300.jpg',
    //             original:'gallery/interer/51_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150352,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №52',
    //           img: {
    //             preview: 'gallery/interer/52_interer_400x300.jpg',
    //             original:'gallery/interer/52_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150353,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №53',
    //           img: {
    //             preview: 'gallery/interer/53_interer_400x300.jpg',
    //             original:'gallery/interer/53_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150354,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №54',
    //           img: {
    //             preview: 'gallery/interer/54_interer_400x300.jpg',
    //             original:'gallery/interer/54_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150355,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №55',
    //           img: {
    //             preview: 'gallery/interer/55_interer_400x300.jpg',
    //             original:'gallery/interer/55_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150356,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №56',
    //           img: {
    //             preview: 'gallery/interer/56_interer_400x300.jpg',
    //             original:'gallery/interer/56_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150357,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №57',
    //           img: {
    //             preview: 'gallery/interer/57_interer_400x300.jpg',
    //             original:'gallery/interer/57_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150358,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №58',
    //           img: {
    //             preview: 'gallery/interer/58_interer_400x300.jpg',
    //             original:'gallery/interer/58_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150359,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №59',
    //           img: {
    //             preview: 'gallery/interer/59_interer_400x300.jpg',
    //             original:'gallery/interer/59_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150360,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №60',
    //           img: {
    //             preview: 'gallery/interer/60_interer_400x300.jpg',
    //             original:'gallery/interer/60_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150361,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №61',
    //           img: {
    //             preview: 'gallery/interer/61_interer_400x300.jpg',
    //             original:'gallery/interer/61_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150362,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №62',
    //           img: {
    //             preview: 'gallery/interer/62_interer_400x300.jpg',
    //             original:'gallery/interer/62_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150363,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №63',
    //           img: {
    //             preview: 'gallery/interer/63_interer_400x300.jpg',
    //             original:'gallery/interer/63_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150364,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №64',
    //           img: {
    //             preview: 'gallery/interer/64_interer_400x300.jpg',
    //             original:'gallery/interer/64_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150365,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №65',
    //           img: {
    //             preview: 'gallery/interer/65_interer_400x300.jpg',
    //             original:'gallery/interer/65_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150366,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №66',
    //           img: {
    //             preview: 'gallery/interer/66_interer_400x300.jpg',
    //             original:'gallery/interer/66_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150367,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №67',
    //           img: {
    //             preview: 'gallery/interer/67_interer_400x300.jpg',
    //             original:'gallery/interer/67_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150368,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №68',
    //           img: {
    //             preview: 'gallery/interer/68_interer_400x300.jpg',
    //             original:'gallery/interer/68_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150369,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №69',
    //           img: {
    //             preview: 'gallery/interer/69_interer_400x300.jpg',
    //             original:'gallery/interer/69_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150370,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №70',
    //           img: {
    //             preview: 'gallery/interer/70_interer_400x300.jpg',
    //             original:'gallery/interer/70_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150371,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №71',
    //           img: {
    //             preview: 'gallery/interer/71_interer_400x300.jpg',
    //             original:'gallery/interer/71_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150372,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №72',
    //           img: {
    //             preview: 'gallery/interer/72_interer_400x300.jpg',
    //             original:'gallery/interer/72_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150373,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №73',
    //           img: {
    //             preview: 'gallery/interer/73_interer_400x300.jpg',
    //             original:'gallery/interer/73_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150374,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №74',
    //           img: {
    //             preview: 'gallery/interer/74_interer_400x300.jpg',
    //             original:'gallery/interer/74_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150375,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №75',
    //           img: {
    //             preview: 'gallery/interer/75_interer_400x300.jpg',
    //             original:'gallery/interer/75_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150376,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №76',
    //           img: {
    //             preview: 'gallery/interer/76_interer_400x300.jpg',
    //             original:'gallery/interer/76_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150377,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №77',
    //           img: {
    //             preview: 'gallery/interer/77_interer_400x300.jpg',
    //             original:'gallery/interer/77_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150378,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №78',
    //           img: {
    //             preview: 'gallery/interer/78_interer_400x300.jpg',
    //             original:'gallery/interer/78_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1503079,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №79',
    //           img: {
    //             preview: 'gallery/interer/79_interer_400x300.jpg',
    //             original:'gallery/interer/79_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150380,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №80',
    //           img: {
    //             preview: 'gallery/interer/80_interer_400x300.jpg',
    //             original:'gallery/interer/80_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150381,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №81',
    //           img: {
    //             preview: 'gallery/interer/81_interer_400x300.jpg',
    //             original:'gallery/interer/81_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150382,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №82',
    //           img: {
    //             preview: 'gallery/interer/82_interer_400x300.jpg',
    //             original:'gallery/interer/82_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150383,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №83',
    //           img: {
    //             preview: 'gallery/interer/83_interer_400x300.jpg',
    //             original:'gallery/interer/83_interer_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150384,
    //           title: 'Ковка предметов интерьера',
    //           text: 'Ковка интерьерная №84',
    //           img: {
    //             preview: 'gallery/interer/84_interer_400x300.jpg',
    //             original:'gallery/interer/84_interer_1000x750.jpg',
    //           },
    //         },
    //
    //       ],
    //     },
    //
    //   ]
    // },
    // {
    //   title: 'Кованые лестницы',
    //   slug: 'lestnica',
    //   img: {
    //     preview: 'gallery/lestnica/1_lestnica_400x300.jpg',
    //     original:'gallery/lestnica/1_lestnica_1000x750.jpg',
    //   },
    //   text: 'Неважно, хотите ли вы сделать комфортным подъем на второй этаж или сделать наружную' +
    //     ' лестницу — кованые изделия, которые являются элитарными, привнесут в ваш дом стиль и уют. Элементы декора,' +
    //     ' изготовленные методом художественной ковки, всегда были и будут признаком респектабельности и достатка. ' +
    //     'Но в производстве лестниц ковка используется в производстве перил, опорных стоек и других элементов. Сама же лестница по конструкции не отличается от обычной металлической',
    //   metaData: {
    //     meta: [
    //       { hid:'description-contacts', name: 'description', content: 'Купить кованые лестницы в Москве и Московской области, Фотографии с ценами.'},
    //       { name: 'keywords', content: 'купить кованые лестницы не дорого,  ковка, художественная, кованые, лестницы, цена, стоимость, kovka-mo,кованые бра,бра одинцово'},
    //     ],
    //     title: 'Купить кованые лестницы - цена и фото, изготовление на заказ в Москве и МО – ковка – от компании Феникс Стальное Решение'
    //   },
    //   price: 'от 7000р кв.м',
    //   types: [
    //     {
    //       title: 'Кованые лестницы',
    //       slug: 'lestnica',
    //       img: {
    //         preview: 'gallery/lestnica/1_lestnica_400x300.jpg',
    //         original:'gallery/lestnica/1_lestnica_1000x750.jpg',
    //       },
    //       products: [
    //         {
    //           id: 150501,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №1',
    //           img: {
    //             preview: 'gallery/lestnica/1_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/1_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150502,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №2',
    //           img: {
    //             preview: 'gallery/lestnica/2_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/2_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150503,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №3',
    //           img: {
    //             preview: 'gallery/lestnica/3_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/3_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150504,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №4',
    //           img: {
    //             preview: 'gallery/lestnica/4_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/4_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150504,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №4',
    //           img: {
    //             preview: 'gallery/lestnica/4_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/4_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150505,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №5',
    //           img: {
    //             preview: 'gallery/lestnica/5_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/5_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150506,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №6',
    //           img: {
    //             preview: 'gallery/lestnica/6_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/6_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150507,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №7',
    //           img: {
    //             preview: 'gallery/lestnica/7_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/7_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150508,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №8',
    //           img: {
    //             preview: 'gallery/lestnica/8_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/8_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150509,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №9',
    //           img: {
    //             preview: 'gallery/lestnica/9_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/9_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150510,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №10',
    //           img: {
    //             preview: 'gallery/lestnica/10_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/10_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 150511,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №11',
    //           img: {
    //             preview: 'gallery/lestnica/11_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/11_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505012,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №12',
    //           img: {
    //             preview: 'gallery/lestnica/12_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/12_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505013,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №13',
    //           img: {
    //             preview: 'gallery/lestnica/13_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/13_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505014,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №14',
    //           img: {
    //             preview: 'gallery/lestnica/14_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/14_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505015,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №15',
    //           img: {
    //             preview: 'gallery/lestnica/15_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/15_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505016,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №16',
    //           img: {
    //             preview: 'gallery/lestnica/16_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/16_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505017,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №17',
    //           img: {
    //             preview: 'gallery/lestnica/17_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/17_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505018,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №18',
    //           img: {
    //             preview: 'gallery/lestnica/18_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/18_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505019,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №19',
    //           img: {
    //             preview: 'gallery/lestnica/19_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/19_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505020,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №20',
    //           img: {
    //             preview: 'gallery/lestnica/20_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/20_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505021,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №21',
    //           img: {
    //             preview: 'gallery/lestnica/21_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/21_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505022,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №22',
    //           img: {
    //             preview: 'gallery/lestnica/22_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/22_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505023,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №23',
    //           img: {
    //             preview: 'gallery/lestnica/23_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/23_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505024,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №24',
    //           img: {
    //             preview: 'gallery/lestnica/24_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/24_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505025,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №25',
    //           img: {
    //             preview: 'gallery/lestnica/25_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/25_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505026,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №26',
    //           img: {
    //             preview: 'gallery/lestnica/26_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/26_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505027,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №27',
    //           img: {
    //             preview: 'gallery/lestnica/27_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/27_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505028,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №28',
    //           img: {
    //             preview: 'gallery/lestnica/28_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/28_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505029,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №29',
    //           img: {
    //             preview: 'gallery/lestnica/29_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/29_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505030,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №30',
    //           img: {
    //             preview: 'gallery/lestnica/30_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/30_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505031,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №31',
    //           img: {
    //             preview: 'gallery/lestnica/31_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/31_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505032,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №32',
    //           img: {
    //             preview: 'gallery/lestnica/32_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/32_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505033,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №33',
    //           img: {
    //             preview: 'gallery/lestnica/33_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/33_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505034,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №34',
    //           img: {
    //             preview: 'gallery/lestnica/34_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/34_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505035,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №35',
    //           img: {
    //             preview: 'gallery/lestnica/35_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/35_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505036,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №36',
    //           img: {
    //             preview: 'gallery/lestnica/36_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/36_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505037,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №37',
    //           img: {
    //             preview: 'gallery/lestnica/37_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/37_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505038,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №38',
    //           img: {
    //             preview: 'gallery/lestnica/38_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/38_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505039,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №39',
    //           img: {
    //             preview: 'gallery/lestnica/39_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/39_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505040,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №40',
    //           img: {
    //             preview: 'gallery/lestnica/40_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/40_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505041,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №41',
    //           img: {
    //             preview: 'gallery/lestnica/41_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/41_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505042,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №42',
    //           img: {
    //             preview: 'gallery/lestnica/42_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/42_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505043,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №43',
    //           img: {
    //             preview: 'gallery/lestnica/43_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/43_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505044,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №44',
    //           img: {
    //             preview: 'gallery/lestnica/44_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/44_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505045,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №45',
    //           img: {
    //             preview: 'gallery/lestnica/45_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/45_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505046,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №46',
    //           img: {
    //             preview: 'gallery/lestnica/46_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/46_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505047,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №47',
    //           img: {
    //             preview: 'gallery/lestnica/47_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/47_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505048,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №48',
    //           img: {
    //             preview: 'gallery/lestnica/48_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/48_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505049,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №49',
    //           img: {
    //             preview: 'gallery/lestnica/49_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/49_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505050,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №50',
    //           img: {
    //             preview: 'gallery/lestnica/50_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/50_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505051,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №51',
    //           img: {
    //             preview: 'gallery/lestnica/51_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/51_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505052,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №52',
    //           img: {
    //             preview: 'gallery/lestnica/52_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/52_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505053,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №53',
    //           img: {
    //             preview: 'gallery/lestnica/53_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/53_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505054,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №54',
    //           img: {
    //             preview: 'gallery/lestnica/54_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/54_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505055,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №55',
    //           img: {
    //             preview: 'gallery/lestnica/55_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/55_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505056,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №56',
    //           img: {
    //             preview: 'gallery/lestnica/56_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/56_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505057,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №57',
    //           img: {
    //             preview: 'gallery/lestnica/57_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/57_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505058,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №58',
    //           img: {
    //             preview: 'gallery/lestnica/58_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/58_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505059,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №59',
    //           img: {
    //             preview: 'gallery/lestnica/59_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/59_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505060,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №60',
    //           img: {
    //             preview: 'gallery/lestnica/60_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/60_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505061,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №61',
    //           img: {
    //             preview: 'gallery/lestnica/61_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/61_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505062,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №62',
    //           img: {
    //             preview: 'gallery/lestnica/62_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/62_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505063,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №63',
    //           img: {
    //             preview: 'gallery/lestnica/63_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/63_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505064,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №64',
    //           img: {
    //             preview: 'gallery/lestnica/64_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/64_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505065,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №65',
    //           img: {
    //             preview: 'gallery/lestnica/65_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/65_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505066,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №66',
    //           img: {
    //             preview: 'gallery/lestnica/66_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/66_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505067,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №67',
    //           img: {
    //             preview: 'gallery/lestnica/67_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/67_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505068,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №68',
    //           img: {
    //             preview: 'gallery/lestnica/68_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/68_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505069,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №69',
    //           img: {
    //             preview: 'gallery/lestnica/69_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/69_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505070,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №70',
    //           img: {
    //             preview: 'gallery/lestnica/70_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/70_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505071,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №71',
    //           img: {
    //             preview: 'gallery/lestnica/71_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/71_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505072,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №72',
    //           img: {
    //             preview: 'gallery/lestnica/72_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/72_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505073,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №73',
    //           img: {
    //             preview: 'gallery/lestnica/73_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/73_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505074,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №74',
    //           img: {
    //             preview: 'gallery/lestnica/74_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/74_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505075,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №75',
    //           img: {
    //             preview: 'gallery/lestnica/75_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/75_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505076,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №76',
    //           img: {
    //             preview: 'gallery/lestnica/76_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/76_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505077,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №77',
    //           img: {
    //             preview: 'gallery/lestnica/77_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/77_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505078,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №78',
    //           img: {
    //             preview: 'gallery/lestnica/78_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/78_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505079,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №79',
    //           img: {
    //             preview: 'gallery/lestnica/79_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/79_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505080,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №80',
    //           img: {
    //             preview: 'gallery/lestnica/80_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/80_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505081,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №81',
    //           img: {
    //             preview: 'gallery/lestnica/81_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/81_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505082,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №82',
    //           img: {
    //             preview: 'gallery/lestnica/82_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/82_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505083,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №83',
    //           img: {
    //             preview: 'gallery/lestnica/83_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/83_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505084,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №84',
    //           img: {
    //             preview: 'gallery/lestnica/84_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/84_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505085,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №85',
    //           img: {
    //             preview: 'gallery/lestnica/85_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/85_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505087,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №87',
    //           img: {
    //             preview: 'gallery/lestnica/87_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/87_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505088,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №88',
    //           img: {
    //             preview: 'gallery/lestnica/88_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/88_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505089,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №89',
    //           img: {
    //             preview: 'gallery/lestnica/89_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/89_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505090,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №90',
    //           img: {
    //             preview: 'gallery/lestnica/90_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/90_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505091,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №91',
    //           img: {
    //             preview: 'gallery/lestnica/91_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/91_lestnica_1000x750.jpg',
    //           },
    //         },
    //         {
    //           id: 1505092,
    //           title: 'Кованые лестницы',
    //           text: 'Кованые лестницы №92',
    //           img: {
    //             preview: 'gallery/lestnica/92_lestnica_400x300.jpg',
    //             original:'gallery/lestnica/92_lestnica_1000x750.jpg',
    //           },
    //         },
    //
    //       ],
    //     },
    //
    //   ]
    // }

  ]
}


export default products
