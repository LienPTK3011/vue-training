<template>
  <div class="home3">
    <Order />
  </div>

</template>

<script lang="ts">
import { Component, Vue  } from 'vue-property-decorator';

import Order from '@/components/order.vue';

@Component({
  components: {
    Order,
    
  },
})
export default class order extends Vue {}


</script>


