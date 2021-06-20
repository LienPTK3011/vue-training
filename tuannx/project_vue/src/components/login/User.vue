<template>
  <div>
    <Header />
    <v-row style="padding: 40px 0 0 36px">
      <v-dialog max-width="1000px" v-model="dialog">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
            Add User
          </v-btn>
        </template>
        <v-card ref="form">
          <v-card-title>
            <span class="text-h5">Add New User</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="8">
                  <v-col class="file" cols="12">
                    <v-text-field
                      label="Name*"
                     
                      v-model="item.name"
                    ></v-text-field>
                  </v-col>
                  <v-col class="file" cols="12">
                    <v-text-field
                      label="Age*"
                      
                      v-model="item.age"
                    ></v-text-field>
                  </v-col>
                  <v-col class="file" cols="12">
                    <v-text-field
                      label="Email*"
                      
                      v-model="item.email"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col class="file" cols="12">
                    <v-text-field
                      label="Username*"
                      
                      v-model="item.username"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col class="file" cols="12">
                    <ValidationProvider
                      v-slot="{ errors }"
                      name="Password"
                      rules="required"
                    >
                      <v-text-field
                        label="Password*"
                        v-model="item.password"
                        :error-messages="errors"
                        :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="showPass = !showPass"
                        required
                        :type="showPass ? 'text' : 'password'"
                      ></v-text-field>
                    </ValidationProvider>
                  </v-col>
                  <v-col class="file" cols="12">
                    <v-text-field
                      label="Detail*"
                      
                      v-model="item.detail"
                      required
                    ></v-text-field>
                  </v-col>
                  <small>*indicates required field</small>
                </v-col>
                <v-col cols="4">
                  <v-file-input
                    label="File input"
                    filled
                    prepend-icon="mdi-camera"
                  ></v-file-input>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">
              Close
            </v-btn>
            <v-btn color="blue darken-1" text @click="addUser"> Save </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
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
              <v-btn color="primary" dark>
                <v-icon left> mdi-pen</v-icon>
                Update
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
import { required } from "vee-validate/dist/rules";
import { extend, ValidationObserver, ValidationProvider } from "vee-validate";
extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});
@Component({
  components: {
    Header,
    UserDetail,
    ValidationObserver,
    ValidationProvider,
  },
})
export default class User extends Vue {
  private item = {};
  private dialog = false;
  private User = {};
  private showPass = false;
  created() {
    this.getAll();
  }
  getAll() {
    axios
      .get(`http://localhost:3000/user`)
      .then((res) => {
        this.User = res.data;
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  refesh() {
    this.getAll();
  }
  remove(id: number) {
    axios
      .delete(`http://localhost:3000/user/${id}`)
      .then(() => {
        console.log("xóa thành công");
        this.refesh();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  addUser() {
      axios.post(`http://localhost:3000/user/`,this.item).then((res)=>{
          this.item = res.data;
          this.refesh();
          this.dialog=false;
          this.item={}
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
.file
    padding: 0
</style>