<template>
  <div class="home-conten">
    <div class="home-bg">
      <div class="text1"> ToCoToCo Tea</div>
      <div class="text2"> ĐẬM VỊ THIÊN NHIÊN<br>
                          TRỌN VỊ HẠNH PHÚC</div>
      <div class="text3"> Với sứ mệnh mang tới niềm vui và hạnh phúc, TocoToco hy vọng sẽ tạo nên <br>
      một nét văn hóa giải trí bên cạnh ly trà sữa Ngon - sạch - tươi.</div>
      <div class="btn-order" > <router-link to="/order">ĐẶT HÀNG NGAY</router-link></div>
      <div class="icon">
        <img src="../assets/ic_scoll.webp">
      </div>
      <div class="text4"> Cuộn xuống</div>
    </div>
  
    <div class="home2">
      <!-- <iframe  id="existing-iframe-example" width="100%" height="700px" src="https://www.youtube.com/embed/Ilui-mb3sT0" title="YouTube video player" frameborder="0" allow="autoplay">
      </iframe> -->
      <About />
    </div>

  </div>

</template>

<script lang=ts>
  import { Component, Vue } from 'vue-property-decorator';

  import About from '../components/About.vue';

  @Component({
    components: {
      About,
    },
  })
  export default class home2 extends Vue {}


</script>
<style scoped>
  .home-bg {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    font-family: "BalooExtra", Helvetica, Arial, sans-serif ;
  }
  .text1{
    color: #d3b673;
    font-size: 50px;
    letter-spacing: 1.2px;
    font-weight: 600;
  }
  .text2 {
    font-size: 54px;
    color: #ffffff;
    text-align: center;
    letter-spacing: 2.7px;
    line-height: 1;
    margin-bottom: 35px;
    text-transform: uppercase;
    font-family: "BalooExtra", Helvetica, Arial, sans-serif  !important;
  }
  .text3 {
    margin-bottom: 5px;
    text-align: center;
    letter-spacing: 0.9px;
    font-size: 18px;
    color: #ffffff;
    font-weight: 600;
    padding: 0 40px;
    padding-bottom: 42px;
  }
  .btn-order {
    height: 40px;
    color: white;
    border: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    padding: 0 15px;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    font-family: Muli;
    cursor: pointer;
  }
  .btn-order:hover {
    background: #d2a451 !important;
    border-color: #d2a451 !important;
  }
  .icon img { 
    width: 18px;
    height: 32px;
    margin-top: 32px;
    margin-bottom: 8px;
    align-self: center;
    position: relative;
    animation: slide-up-down 0.5s infinite alternate;
  }
  .text4 {
    color: #fff;
    font-size: 12px;
  }



</style>


