<template>
  <div >
    <Counter/><br />
    <div>
    
        <AddCounter/>
    
        <RemoveCounter/>
      
    </div>
  </div>
</template>

<script lang="ts">
import AddCounter from "@/components/AddCounter.vue";
import Counter from "@/components/Counter.vue";
import RemoveCounter from "@/components/RemoveCounter.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    AddCounter,
    Counter,
    RemoveCounter,
  },
})
export default class AppCounter extends Vue {}
</script>

<style scoped>

</style>
