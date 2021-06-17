<template>
  <div class="topbar">
    <ul class="itemMenu">
      <li
        v-for="(item, key) in getDataTopBar"
        :key="key"
        @click="$router.push({ name: item.routeName })"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Header from "./Header.vue";
@Component({
  components: {
    Header,
  },
})
export default class TopBar extends Vue {
  @Prop() private getDataTopBar?: string[];
}
</script>

<style lang="scss">
.topbar {
  width: 100%;
  display: flex;
  .itemMenu {
    width: 100%;
    font-size: 25px;
    display: flex;
    list-style: none;
    a {
      color: black;
      text-decoration: none;
    }
    li {
      padding: 0 25px;
    }
  }
}
</style>

