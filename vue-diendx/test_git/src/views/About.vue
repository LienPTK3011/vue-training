<template>
  <div class="home2">
      <!-- <iframe  id="existing-iframe-example" width="100%" height="700px" src="https://www.youtube.com/embed/Ilui-mb3sT0" title="YouTube video player" frameborder="0" allow="autoplay">
      </iframe> -->

    <About />
  </div>

</template>

<script lang=ts>
  import { Component, Vue } from 'vue-property-decorator';

  import About from '../components/About.vue';

  @Component({
    components: {
      About,
    },
  })
  export default class home2 extends Vue {}


</script>


