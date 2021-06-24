<template>

         <b-button variant="danger" @click="removeCounter()">Remove</b-button>

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Type from '@/store/Type'
import store from "@/store";

@Component
export default class RemoveCounter extends Vue {
  public removeCounter(){
    store.dispatch({
            type : Type.Decrement,
            amount : 5
        })
  }

}
</script>
