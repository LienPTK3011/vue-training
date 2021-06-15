<template>
  <div>
    <v-container>
      <div class="wrapProfile">
        <h1>View Profile</h1>
        <div class="wrapAvatar">
          <v-avatar size="300" class="wrapAvatarItem">
            <img 
              src="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
            >
            <input
              ref="uploader"
              class="d-none"
              type="file"
              accept="image/*"
            >
          </v-avatar>
        </div>
        <div class="wrapInfoProfile">
          <v-text-field
            label="Full Name"
            outlined
            v-model="item.name"
          ></v-text-field>
        </div>
        <v-row>
          <v-col cols="12" md="3">
            <v-text-field
              label="AGE"
              outlined 
              v-model="item.old"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="3">
             <v-select
              label="Part"
              outlined
              :items="itemPart"
              v-model="item.part"
            ></v-select>
          </v-col>
          <v-col 
            cols="12" 
            md="3">
            <v-select
              label="Status"
              outlined
              :items="itemsStatus"
              v-model="item.status"
            ></v-select>
          </v-col>
          <v-col cols="12" md="3">
            <v-select
              label="Postion"
              outlined
              :items="itemsPosition"
              v-model="item.position"
            ></v-select>
          </v-col>
          <div class="wrapButton">
            <v-btn 
              elevation="8"
              @click="addNewMember"
            > Create Proflie </v-btn>
          </div>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue,Component } from "vue-property-decorator"
import EmployeeDataService from "../../business/B_employee";
import Employee from "../../types/Employee";
interface data {
    name:string
    old: number
    position: string
    part: string
    status: string
    avatar: string
}
@Component
export default class addEmployee extends Vue {
    itemsStatus = [
      "Working",
      "Not Working",
      "New staff",

    ];
    itemsPosition = [
      "Develop",
      "PM",
      "HR",
      "BRSE",
      "Leader",
      "Chủ Tịt",
      "Giám Đốc",
    ];
    itemPart = [
      "DIVISION 1",
      "DIVISION 2",
      "BO",
      "IT",
      "Social Media",
      "Degisner",
      "Board Of Manager",
    ];

    private item = {} as Employee;

    addNewMember() {
      EmployeeDataService.addEmployee(this.item).then((response:any) => {
        this.item = response.data;
      })
      .catch((errors) => {
        console.log(errors);
      });
    }
}
</script>

<style lang="scss">
.wrapProfile {
  margin: 30px auto;
  width: 50%;
  .wrapAvatar {
    .wrapAvatarItem {
      cursor: pointer;
    }
    width: 30%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
  .wrapInfoProfile {
    margin: 20px 0 0 0;
  }
  .wrapButton {
    width: 100%;
    display: flex;
    justify-content: center;
    button {
      background: #d1ecfc !important;
    }
  }
}
</style>
