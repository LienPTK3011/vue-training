<template>
 <div>
    <Header/>
  <HelloWorld />
 </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import HelloWorld from '../components/HelloWorld.vue'
  import Header from '../components/header/Header.vue'

  export default Vue.extend({
    name: 'Home',

    components: {
      HelloWorld,
      Header
    },
  })
</script>
