<template>
  <div>
    <Header />
    <v-data-table
      style="margin-top: 50px"
      :headers="headers"
      :items="posts"
      :search="search"
      sort-by="age"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar style="margin-bottom: 50px" flat>
          <v-toolbar-title>Danh sách Customer</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-row style="margin-top: 25px">
            <v-col cols="12" style="text-align: right">
              <v-dialog max-width="700px" v-model="dialog">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="primary" dark v-bind="attrs" v-on="on">
                    Add Staff
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="text-h5">Add New Staff</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12">
                          <v-text-field
                            label="Name*"
                            v-model="item.name"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field
                            label="Age*"
                            v-model="item.age"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field
                            label="Experience*"
                            v-model="item.experience"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field
                            label="Role*"
                            v-model="item.role"
                            required
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                    <small>*indicates required field</small>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialog = false">
                      Close
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="addNewStaff">
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-col>
            <v-col cols="6" style="margin-left: 50%">
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field
            ></v-col>
          </v-row>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editStaff(item.id)">
          mdi-pencil
        </v-icon>
        <v-icon small @click="deleteStaff(item.id)"> mdi-delete </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="red" @click="getAll"> Reset </v-btn>
      </template>
    </v-data-table>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CustomerService from "@/service/CustomerService";
import CustomerInterface from "@/service/CustomerInterface";
import Header from "../header/Header.vue";

@Component({
  components: {
    Header,
  },
})
export default class Customer extends Vue {
  private posts: CustomerInterface[] = [];
  dialog = false;
  private response: any;
  private errors: any;
  item = {};
  search = "";
  headers = [
    {
      text: "Id",
      align: "start",
      sortable: false,
      value: "id",
    },
    { text: "Name", value: "name" },
    { text: "Age", value: "age" },
    { text: "Experience", value: "experience" },
    { text: "Role", value: "role" },
    { text: "Actions", value: "actions", sortable: false },
  ];
  getAll() {
    CustomerService.getAll()
      .then((response) => {
        this.posts = response.data;
        console.log(response.data);
      })
      .catch((errors) => {
        console.log(errors);
      });
  }
  deleteStaff(id: number) {
    CustomerService.delete(id).then(() => {
      console.log("remove");
      this.refersh();
    });
    alert("Xóa thành công");
    console.log("xóa");
  }
  refersh() {
    this.getAll();
  }
  created() {
    this.getAll();
  }
  addNewStaff() {
    CustomerService.create(this.item)
      .then((response) => {
        this.item = response.data;
        this.refersh();
        this.item = {};
      })
      .catch((errors) => {
        console.log(errors);
      });
    alert("Thêm thành công");
    this.dialog = false;
  }
}
</script>