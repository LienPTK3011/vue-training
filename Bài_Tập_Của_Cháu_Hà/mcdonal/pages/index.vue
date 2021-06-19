<template>
  <div>
    <div class="wrapSlider">
      <Slider />
    </div>
    <v-container>
      <v-col
      cols="12"
      sm="12"
      md="12"
      class="session_index"
      >
        <v-row>
            <div class="img-content-first">
                <img src="~/static/img/home/smartphone.jpg" alt="logo"/>
                <div class="text-content-first">
                  <p>Ưu đãi độc quyền &amp; hơn thế nữa</p>
                  <h2 style="color: #fff;">ỨNG DỤNG McDONALD'S</h2>
                  <a href="/" class="download">TẢI ỨNG DỤNG</a>
                </div>
            </div>
            <div class="lst-news-index">
              <v-col
                cols="6"
                md="6"
                sm="12"
                class="clear-padd-left"
              >
                <nuxt-link to="/" >
                  <img src="~/static/img/home/mccafe_desktop.jpg" alt="">
                </nuxt-link>
              </v-col>
              <v-col
                cols="6"
                md="6"
                sm="12"
                class="clear-padd-right"
              >
                <div class="clear-padd">
                  <v-col
                  cols="6"
                  md="6"
                  sm="6"
                  class="clear-padd-left"
                  >
                     <img src="~/static/img/home/history.jpg" alt="">
                  </v-col>
                </div>
              </v-col>
            </div>
        </v-row>
      </v-col>
    </v-container>
  </div>
</template>

<script>
import Slider from '~/components/SliderComponent.vue'
export default {
  components: {
    Slider
  }
}
</script>

<style lang="scss">
  .session_index {
    margin: 50px auto;
    .img-content-first {
      margin-top: 30px;
      margin-bottom: 15px;
      float: left;
      position: relative;
      .text-content-first {
        top: 40%;
        bottom: 50px;
        position: absolute;
        left: 50px;
        color: #FFF;
        .download {
          width: 240px;
          height: 48px;
          line-height: 48px;
          background: #BD0017;
          float: left;
          border-radius: 30px;
          color: #fff !important;
          text-align: center;
          text-decoration: none !important;
          &:hover {
            background: #951522;
          }
        }
      }
    }
    .lst-news-index {
      .clear-padd-left {
        padding: 0;
      }
    }
  }
</style>