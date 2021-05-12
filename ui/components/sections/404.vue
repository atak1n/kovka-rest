<template>
  <base-section id="404" class="fill-height">
    <base-heading title="404" />

    <base-subheading
      class="primary--text"
      title="Ой!"
    />

    <base-subheading
      space="8"
      title="Похоже данной страницы не существует"
    />

    <base-img
      :src="require('@/assets/egg-logo-192.png')"
      class="mx-auto mb-12"
      contain
      height="192"
      width="192"
    />

    <div class="text-center">
      <base-btn :to="{ name: 'Home' }">
        Уйти с этой страницы
      </base-btn>
    </div>
  </base-section>
</template>

<script>
  export default {
    name: 'FourOhFour',

    provide: {
      heading: { align: 'center' },
    },
  }
</script>
