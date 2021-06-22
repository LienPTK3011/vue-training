<template>
    <div class="component">
        <h3>User Details</h3>
        <p>Tuoi toi: {{customAge}}</p>
        <v-btn @click="restAge">rest</v-btn>
        <v-btn @click="testChangeAgefn()">Thử thay nào</v-btn>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  components: {
  }
})
export default class UserDetail extends Vue {
    @Prop() private customAge?:number;
    @Prop() private testChangeAgefn?:Function;
    @Prop() private userAge?:number;

    restAge(){
        this.customAge = 30;
        this.$emit('changeAge',this.customAge)
    }
}
</script>