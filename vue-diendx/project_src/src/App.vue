<template>
  <div id="app">
    <componentsHeader />
    <div id="nav">
      <router-link to="/">Home </router-link> |
      <router-link to="/about">About </router-link>|
      <router-link to="/QA">Q&A </router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import componentsHeader from './components/componentsHeader.vue';

export default  {
  name: 'app',
    data () {
      return{
        msg: 'hleo vussss'
      }
    },
    components: {
      componentsHeader
    }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
