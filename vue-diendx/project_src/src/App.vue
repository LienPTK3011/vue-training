<template>
  <div id="app">
    <componentsHeader />
    <div id="nav">
      <img alt="" src="https://tocotocotea.com/wp-content/uploads/2021/04/Logo-ngang-01.png" width="50%">
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
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 25%;
  margin: 0 auto;

  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 0 10px;
    text-align: center;

    &.router-link-exact-active {
      color: #42b983;
      border-bottom: 2px solid #42b983;
    }
  }
  
}

</style>
