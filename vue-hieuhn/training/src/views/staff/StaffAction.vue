<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <v-card width="100%">
          <v-img
            height="200px"
            :src="item.avatar"
          >
          </v-img>
          <v-card-text>
            <div class="staff-title">
              {{ item.name }}
            </div>
          </v-card-text>
          <v-list dense>
            <v-subheader>INFORMATION</v-subheader>
            <v-list-item-group color="primary">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="text-left"
                    >Have worked:
                    <span class="bold"
                      >{{ item.year }} years</span
                    ></v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="text-left"
                    >Working status:
                    <span class="bold">{{
                      item.is_work
                    }}</span></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="text-left"
                    >Level: 
                    <span class="bold">{{
                      item.level
                    }}</span></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
      <v-col md="9" cols="12">
        <h1 class="detail-title">Cập nhập thông tin</h1>
          <ValidationObserver v-slot="{ handleSubmit }">
            <v-form ref="form" lazy-validation @submit.prevent="handleSubmit(onSubmit)" >
              <ValidationProvider rules="min" v-slot="{ errors }">
                <v-text-field
                  v-model="formInformation.name"
                  label="Name"
                  required
                  class="update-name"
                ></v-text-field>
                <span>{{ errors[0] }}</span>
              </ValidationProvider>
              <ValidationProvider rules="required" v-slot="{ errors }">
                <template>
                  <v-file-input
                    multiple
                    label="File input"
                    @change="onChangeAvatar"
                  ></v-file-input>
                  <span>{{ errors[0] }}</span>
                </template>
              </ValidationProvider>
                <ValidationProvider>
                  <div data-app>
                    <v-select
                      v-model="formInformation.level"
                      :items="levels"
                      label="Level"
                    ></v-select>
                  </div>
                </ValidationProvider>
              <v-btn :disabled="!formInformation.valid" class="mr-4" @click="save"
                >Save</v-btn
              >
          </v-form>
          </ValidationObserver>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Emit } from "vue-property-decorator";
import { extend } from 'vee-validate'
import Api from '../../services/Api'

extend('min', {
    validate(value: string) {
        return {
            valid: value.length >= 6
        }
    },
    message: 'toi thieu 6 ky tu',
})

interface form {
  id: number
  valid: boolean
  name: string
  url: string
  level: string
}

@Component
export default class StaffAction extends Vue {
  id = this.$attrs.id;

  private item: any = []

  formInformation: form = {
    id: parseInt(this.id),
    valid: false,
    name: "",
    url: "",
    level: ""
  };

  levels: Array<string> = [
    "Level 1",
    "Level 2",
    "Level 3",
    "Level 4",
    "Level 5",
    "Level 6",
    "Level 7",
    "Level 8",
    "Level 9",
    "Level 10",
  ]

  created() {
    this.getItem();
  }

  getItem() {
    Api.getItem(this.id).then((response: any) => {
      this.item = response.data
    })
  }

  @Watch(`formInformation.name`) onChangeInput() {
    if (this.formInformation.name.length >= 6) {
      this.formInformation.valid = true;
    }
    if (this.formInformation.name == "") {
      this.formInformation.valid = false;
    }
  }

  onChangeAvatar(e: any) {
      const fr = new FileReader();
      fr.readAsDataURL(e[0]);
      fr.addEventListener("load", () => {
        // @ts-expect-error comment
        this.formInformation.url = fr.result;
      });
  }


  save() {
    if (this.formInformation.url == '') {
      this.formInformation.url = this.item.avatar
    }
    if (this.formInformation.level == '') {
      this.formInformation.level = this.item.level
    }
    Api.update(this.formInformation).then((response: any) => {
      this.getItem();
      alert("thanh cong")
    })
  }
}
</script>

<style lang="scss">
.staff-title {
  font-weight: bold;
  font-size: 22px;
}
.text-left {
  text-align: left;
  margin-left: 20px;
  font-size: 18px !important;
  padding: 10px 0;
}
.bold {
  font-weight: bold;
}
</style>
