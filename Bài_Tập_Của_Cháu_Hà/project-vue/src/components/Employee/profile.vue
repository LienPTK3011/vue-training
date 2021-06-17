<template>
  <div>
    <v-container>
      <div class="wrapProfile">
        <h1>View Profile</h1>
        <div class="wrapAvatar">
          <v-avatar size="300" class="wrapAvatarItem">
            <img :src="getAvatar(item.avatar)"
              @click="onButtonClick()"

            >
            <input
              ref="uploader"
              class="d-none"
              type="file"
              accept="image/*"
              @change="onFileChanged"
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
            <v-text-field
              label="Part"
              outlined
              v-model="item.part"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="3">
            <v-select
              :items="itemsStatus"
              label="Status"
              outlined
              v-model="item.status"
            ></v-select>
          </v-col>
          <v-col cols="12" md="3">
            <v-select
              :items="itemsPosition"
              label="Postion"
              outlined
              v-model="item.postion"
            ></v-select>
          </v-col>
          <div class="wrapButton">
            <v-btn elevation="8" @click="saveData"> Update Profile </v-btn>
          </div>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

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

<script lang="ts">
import { Component, Vue, Prop} from "vue-property-decorator";
import EmployeeDataService from "../../business/B_employee";
import Employee from "../../types/Employee";

@Component
export default class profile extends Vue {
  id = this.$attrs.id
  private response: any
  private errors: any
  private item = {} as Employee;
  selectedFile= null;
  itemsStatus = ["Working", "not_working"];
  itemsPosition = [
    "Develop",
    "PM",
    "HR",
    "BRSE",
    "Leader",
    "Chủ Tịt",
    "Giám Đốc",
  ];

  mount() {
    this.onButtonClick()
  }

  created() {
      let data = {
          id: this.item.id,
          name: this.item.name,
          old: this.item.old,
          position: this.item.position,
          part: this.item.part,
          status: this.item.status,
          avatar: this.item.avatar,
      }
      EmployeeDataService.profile(this.id).then((response) => {
        this.item = response.data;
      })
      .catch((errors) => {
        console.log(errors);
      });
  }
    
  getAvatar(avatar:string) {
    return (avatar != null && avatar  !== '') ? avatar : ('../public/img/logo.jpg')
  } 

  saveData() {
    EmployeeDataService.edit(this.item.id, this.item).then((response) => {
        console.log(response.data);
    })
    .catch((errors) => {
        console.log(errors);
    });
  }

  onButtonClick() {
    this.$refs.uploader.click();
  }
  
  onFileChanged(e:any) {
        this.selectedFile = e.target.files[0]
  }
}
</script>
