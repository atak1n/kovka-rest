<template>
  <base-section
      id="yaMap"
      class="secondary pb-0"
  >
    <base-section-heading class="white--text mt-3" :title="title"/>
    <v-responsive
        class="mx-auto"
    >
      <yandex-map
          style="height: 560px"
          :coords="coords"
          :zoom="zoom"
          :scroll-zoom="false"
          :controls="controls"
          :behaviors="behaviors"
      >
        <ymap-marker
            :coords="coords"
            marker-id="123"
            :hint-content="company.address.link"
        />
      </yandex-map>
    </v-responsive>
  </base-section>

</template>

<script>
  // import store from '~/myStore'
  import { mapState } from 'vuex'

  export default {
    name: "SectionYaMap",

    data: () => ({
      // title: store.contacts.map.title,
      // company: store.contacts,
      //
      // coords: store.contacts.map.coords,
      // zoom: store.contacts.map.zoom,

      behaviors: [
        'dblClickZoom',
        'rightMouseButtonMagnifier',
        'multiTouch'
      ],
      controls: [
        'zoomControl',
        'routeButtonControl',
        'typeSelector',
        // 'fullscreenControl',
        // 'searchControl',
      ]
    }),
    computed: {
      ...mapState({
        title: state => state.contacts.map.title,
        company: state => state.company,

        coords: state => state.contacts.map.coords,
        zoom: state => state.contacts.map.zoom,
      }),
    },

  }
</script>
