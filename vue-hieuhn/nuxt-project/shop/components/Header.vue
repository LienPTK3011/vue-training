<template>
  <div id="header" 
    :style="{backgroundColor: changeBackgroundColorWhenScrollHeader}" 
    @scroll="scrollHeader"
  >
    <v-container>
      <v-row>
        <v-col cols="12" md="12" lg="12">
          <div class="header">
            <nuxt-link to="/">
              <img src="~/static/kfc_logo.png" alt="">
            </nuxt-link>
            <div class="menu">
              <ul>
                <li v-for="(menu, i) in menus" :key="i">
                  <nuxt-link :to="menu.url">
                    {{ menu.name }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
            <ModalLogin></ModalLogin>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { mapState } from 'vuex'
import ModalLogin from './common/modal/ModalLogin.vue'

@Component({
  components: {
    ModalLogin
  },
  computed: {
    ...mapState(['menus'])
  }
})
export default class Header extends Vue {
  changeBackgroundColorWhenScrollHeader = ""

  created() {
    this.$store.dispatch("getAllMenu")
  }

  mounted() {
    window.addEventListener('scroll', this.scrollHeader) 
  }

  scrollHeader() {
    this.changeBackgroundColorWhenScrollHeader = "#DDD"
  }
}
</script>

<style lang="scss">
  #header {
    height: 100px;
    position: fixed;
    width: 100%;
    z-index: 2;
  }
  .logo img {
    height: 100%;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .menu {
      margin-right: auto;

      ul {
        display: flex;

        li {
          margin-right: 20px;

          a {
            font-weight: bold;
            text-transform: uppercase;
            color: white;
          }
        }
      }
    }

    .register {
      font-size: 18px;
      color: black;
    }
  }
</style>