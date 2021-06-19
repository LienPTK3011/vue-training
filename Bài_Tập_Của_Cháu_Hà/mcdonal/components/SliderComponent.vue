<template>
  <v-carousel
    cycle
    height="600"
    hide-delimiter-background
    show-arrows-on-hover
    class="wrap-slider"
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
      :src="slide.base64"
    >
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [],
      }
    },
    methods: {
        async getListBanner() {
            this.slides = await fetch('http://localhost:5000/banner').then(res => res.json())
        },
    },
    created() {
        this.getListBanner()
    }
  }
</script>

<style lang="scss">
    @import "~/assets/Slider.scss";
</style>