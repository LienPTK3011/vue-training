<template>
    <b-button variant="success" @click="addCounter()" style="margin-right: 50px">Add</b-button>
</template>

<script lang="ts">
import store from "@/store";
import { Component, Vue } from "vue-property-decorator";
import Type from '@/store/Type'
import EventBus from "@/eventBus/EventBus";

@Component
export default class AddCounter extends Vue {
    
 created() {
    EventBus.$on("hello", this.handleEvent);
  }

  destroyed() {
    // Stop listening the event hello with handler
    EventBus.$off("hello", this.handleEvent);
  }

  public handleEvent() {
    console.log("123")
    //alert("recived");
  }
    public addCounter(){
        store.dispatch({
            type : Type.Increment,
            amount : 10
        })
    }
}
</script>
