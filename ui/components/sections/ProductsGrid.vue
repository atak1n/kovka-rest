<template>

  <base-section id="projects">
    <base-section-heading :title="title">{{ annotate }}</base-section-heading>
    <v-responsive
      class="mx-auto"
      max-width="1350"
    >
      <v-container >
        <v-row justify="center">

<!--          <v-col cols="4">-->
<!--            <base-card-->
<!--              max-width="160"-->
<!--              title="Кованые ворота"-->
<!--              subtitle="Кованые ворота"-->
<!--              color="green"-->
<!--            >-->
<!--              <v-img height="50" class="text-center">-->
<!--                <v-icon class="ma-auto " size="50" v-text="products[0].icon"></v-icon>-->
<!--              </v-img>-->
<!--            </base-card>-->
<!--          </v-col>-->

          <v-col
            md="3"
            sm="6"
            v-for="(product, i) in products" :key="i"
          >
            <BaseProductCard
              v-bind="product"
              dark
            />
          </v-col>

        </v-row>
      </v-container>
    </v-responsive>
  </base-section>

</template>

<script>
import BaseCard from '~/components/base/Card'
import BaseProductCard from '~/components/base/ProductCard'

export default {
  name: "Products",
  components: {
    BaseCard,
    BaseProductCard
  },
  data: () => ({
    title: 'Каталог',
    annotate: '',
    products: [
      {
        title: 'Кованые Ворота',
        icon: 'mdi-pirate',
      },
      {
        title: 'Кованые Калитки',
        icon: 'mdi-pirate',
      },
      {
        title: 'Кованые Перила',
        icon: 'mdi-pirate',
      },
      {
        title: 'Кованые Балконы',
        icon: 'mdi-pirate',
      },
      {
        title: 'Кованые Козырьки',
        icon: 'mdi-pirate',
      },
      {
        title: 'Кованые Заборы',
        icon: 'mdi-pirate',
      },
      {
        title: 'Кованые Навесы',
        icon: 'mdi-pirate',
      },
      {
        title: 'Кованые Беседки',
        icon: 'mdi-pirate',
      },
      {
        title: 'Кованые Ограды',
        icon: 'mdi-pirate',
      },
      {
        title: 'Кованые Решетки',
        icon: 'mdi-pirate',
      },
      {
        title: 'Кованые Вывески',
        icon: 'mdi-pirate',
      },
      {
        title: 'Ворота Из Профнастила',
        icon: 'mdi-pirate',
      },
      {
        title: 'Ограждения',
        icon: 'mdi-pirate',
      },
      {
        title: 'Лестничные Марши И Косоуры',
        icon: 'mdi-pirate',
      },
      {
        title: 'Лофт',
        icon: 'mdi-pirate',
      },
      {
        title: 'Предметы Интерьера',
        icon: 'mdi-pirate',
      },
      {
        title: 'Металлоизделия',
        icon: 'mdi-pirate',
      },
      {
        title: 'Вольеры',
        icon: 'mdi-pirate',
      },

    ],
  }),
}
</script>

<style scoped>

</style>
