<template>
  <div id="new">
    <v-container>
      <v-row>
        <v-col md="12">
          <Title :name="dataTitle"></Title>
        </v-col>
      </v-row>
      <v-row>
        <NewItem v-for="(item, i) in dataNew" :key="i" :newItem="item"></NewItem>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Title from './common/Title.vue'
import NewItem from './New/NewItem.vue'

@Component({
  components: {
    Title, NewItem
  }
})
export default class New extends Vue {
  dataTitle = "News"

  dataNew = [
    {
      id: 1,
      url: "/",
      img: "/new/ch_u_c_2_1.jpg",
      name: "NEW STORE OPENING: LOTTERIA CHAU DUC",
      time: "30/10/2020"
    },
    {
      id: 1,
      url: "/",
      img: "/new/ch_u_c_2_1.jpg",
      name: "NEW STORE OPENING: LOTTERIA CHAU DUC",
      time: "30/10/2020"
    },
    {
      id: 1,
      url: "/",
      img: "/new/ch_u_c_2_1.jpg",
      name: "NEW STORE OPENING: LOTTERIA CHAU DUC",
      time: "30/10/2020"
    },
    {
      id: 1,
      url: "/",
      img: "/new/ch_u_c_2_1.jpg",
      name: "NEW STORE OPENING: LOTTERIA CHAU DUC",
      time: "30/10/2020"
    },
  ]
}
</script>

<style lang="scss" scoped>
  #new {
    margin-bottom: 50px;
  }
</style>