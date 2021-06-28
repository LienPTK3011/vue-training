<template>
    <div class="component">
        <h3>Edit User</h3>
        <p>Tên cua toi:{{userName}} </p>
        <v-btn @click="changeName()">Thay doi</v-btn>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  components: {
  }
})
export default class UserEdit extends Vue {
    @Prop() private userName?: string;
    @Prop() private changeName?:Function;
    editName(){
        this.userName = "Dep trai qua";
    }
}
</script>