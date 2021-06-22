<template>
    <div class="component">
        <h3>Edit User</h3>
        <p>Tuoi cua toi:{{userAge}} </p>
        <button>Thay doi</button>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  components: {
  }
})
export default class UserEdit extends Vue {
    @Prop() private userAge?: number;
}
</script>