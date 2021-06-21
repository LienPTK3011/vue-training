<template>
  <div class="count">
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <p>Kết quả là {{ result }}</p>
  </div>
</template>

<script>

export default {
  computed: {
    result() {
      // return this.$store.state.result;
      return this.$store.getters.RESULT;
    }
  },
  methods: {
    increment() {
      this.$store.state.result++;
    },
    decrement() {
      this.$store.state.result--;
    }
  }
}
</script>

<style scoped>
.count {
  padding-top: 50px;
}
</style>