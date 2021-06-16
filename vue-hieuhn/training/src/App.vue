<template>
  <div id="app">
    <div id="nav">
      <Header 
        :lists="menus.lists"
        @emitName="emitFunc"
        >
      </Header>
    </div>
    <v-main>
      <v-app>
        <v-container>
            <router-view />
        </v-container>
      </v-app>
    </v-main>
    <notifications group="noti" :style="{top: '20px'}" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from './components/header/Header.vue'

interface menu {
  lists: any[]
}

@Component({
  components: {
    Header,
  }
})
export default class App extends Vue {
  menus: menu = {
    lists: [
      { name: 'Project', url: '/project' },
      { name: 'Staff', url: '/staff' },
    ]
  }

  emitFunc = () => {
    console.log(true)
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
