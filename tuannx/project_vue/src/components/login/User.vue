<template>
  <div>
    <Header />
    <v-row>
      <v-col v-for="(item, i) in User" :key="i" cols="12" md="3">
        <v-hover v-slot="{ hover }" open-delay="200">
          <v-card
            class="mx-auto my-12"
            max-width="360"
            :class="{ 'on-hover': hover }"
            :elevation="hover ? 16 : 2"
          >
            <v-img :src="item.url" height="200"></v-img>
            <v-card-title>Name: {{ item.name }}</v-card-title>
            <v-card-title>Age: {{ item.age }}</v-card-title>
            <v-card-title>Email: {{ item.email }}</v-card-title>
            <v-card-title>Phone: {{ item.phone }}</v-card-title>
            <v-card-title>Adress: {{ item.address }}</v-card-title>
            <v-card-actions>
              <UserDetail :id="item.id" />
              <v-btn color="red" dark @click="remove(item.id)">
                <v-icon left> mdi-delete </v-icon>
                Remove
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Header from "../header/Header.vue";
//import UserInterface from "@/service/UserInterface";
import UserDetail from "./UserDetail.vue";
import axios from "axios";

@Component({
  components: {
    Header,
    UserDetail,
  },
})
export default class User extends Vue {
  private User = {};
  created() {
    this.getAll();
  }
   getAll() {
  
      axios.get(`http://localhost:3000/user`).then((res)=>{
          this.User = res.data;
          console.log(res.data);
          
      }).catch((error)=>{
          console.log(error);
          
      })
  }
  refesh() {
    this.getAll();
  }
  remove(id: number) {
      axios.delete(`http://localhost:3000/user/${id}`).then(()=>{
          console.log("xóa thành công");
          this.refesh()
      }).catch((err)=>{
          console.log(err);
          
      })

    } 
   
    
  
}
</script>
<style lang="sass" scoped>
.v-card.on-hover.theme--dark
    background-color: rgba(#FFF, 0.8)
>.v-card__text
    color: #000
</style>