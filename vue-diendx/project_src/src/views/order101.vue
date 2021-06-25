<template>
  <div class="home4">
    <Order />
  </div>

</template>

<script lang="ts">
import { Component, Vue  } from 'vue-property-decorator';

import Order from '@/components/order101.vue';

@Component({
  components: {
    Order, 
  },
})
export default class order extends Vue {}


</script>


