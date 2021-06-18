<template>
    <v-col cols="auto">
        <v-dialog transition="dialog-top-transition" max-width="1100">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" v-bind="attrs" v-on="on">Detail</v-btn>
          </template>
          <template v-slot:default="dialog">
            <v-card>
              <v-toolbar color="primary" dark>User Detail</v-toolbar>
                    <div style="display:flex" class="detail">
                        <v-col md="4"> 
                        <v-img
                        :src="User.url"
                        height="350"
                        ></v-img>
                    </v-col>
                    <v-col md="8">
                        <v-card-text style="font-size:18px">
                            <div><span>Name: {{User.name}}</span></div>
                            <div><span>Age: {{User.age}}</span></div>
                            <div><span>Phone: {{User.phone}}</span></div>
                            <div><span>Address: {{User.address}}</span></div>
                            <div><span>Detail: {{User.detail}}</span></div>
                        </v-card-text>
                    </v-col>
                    </div>
              <v-card-actions class="justify-end">
                <v-btn text @click="dialog.value = false">Close</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-col>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import UserInterface from "@/service/UserInterface";
import axios from "axios";
@Component
export default class UserDetail extends Vue{
    @Prop() private id?:any;

     private User: UserInterface[] = [];
     async created() {
    try {
      const res = await axios.get(`http://localhost:3000/user/${this.id}`);

      this.User = res.data;
    } catch (e) {
      console.error(e);
    }
  }

}
</script>
<style lang="sass" scoped>
.v-card__text
    div 
        padding: 10px
</style>