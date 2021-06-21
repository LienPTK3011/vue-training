<template>
  <div class="dashboard">
    <Header />
    <div class="content">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Header from '@/components/header/header.vue';
import Footer from '@/components/footer/footer.vue';
export default {
  name: "home",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
.dashboard {
  display: grid;
  grid-template-columns: 1fr 5fr;
  background-color: teal;
  height: 100%;
  width: 100vw;
}
.content {
  background-color: white;
  border-radius: 10px;
  margin: 6px 6px 6px 0px;
}
</style>
