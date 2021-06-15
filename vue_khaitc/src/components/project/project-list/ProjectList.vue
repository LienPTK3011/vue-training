<template src="./projectList.html">

</template>

<script lang="ts">
export default {
  name: "project",
  data() {
    return {
      projectList: [
        {
          id: 1,
          name: "Tuyên ngôn độc lập",
          pm: "Hồ Chí Minh",
          teamsize: 100,
          img: 'https://meta.vn/Data/image/2021/04/16/hinh-anh-bac-ho-4.jpg',
          customer: "Việt Nam",
          important: true
        },
        {
          id: 2,
          name: "Chiến dịch Điện Biên Phủ",
          pm: "Võ Nguyên Giáp",
          teamsize: 99,
          img: 'http://redsvn.net/wp-content/uploads/2018/12/vo-giap-large-56a61b553df78cf7728b5f1d.jpg',
          customer: "Việt Nam",
          important: true
        },
        {
          id: 3,
          name: "Chủ nghĩa Cộng Sản",
          pm: "Karl Heinrich Marx",
          teamsize: 98,
          img: 'https://phantichkinhte123.files.wordpress.com/2015/05/karl-marx-1818-1883.jpg',
          customer: "Quốc tế",
          important: false
        },
        {
          id: 4,
          name: "Chủ nghĩa Lenin",
          pm: "Vladimir Ilyich Lenin",
          teamsize: 97,
          img: 'data:image/jpeg;base64,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',
          customer: 'Liên Xô',
          important: false
        }
      ]
    }
  }
}
</script>

<style src="./projectList.scss" lang="scss" scoped>
</style>