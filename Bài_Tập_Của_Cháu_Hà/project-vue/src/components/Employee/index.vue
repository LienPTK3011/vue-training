<template>
  <div>
    <v-container>
      <div class="wrapHeaderEmployee">
        <div class="title">
          <h1>The list of Employee</h1>
        </div>
        <div class="wrapButtonAdd">
          <v-btn
            elevation="8"
            class="detail"
            @click="$router.push({ name: 'Employee_Add' })"
          >
            New member
          </v-btn>
        </div>
      </div>
      <v-row>
        <v-col cols="12" md="3" v-for="(item, key) in employees" :key="key">
          <v-card elevation="13" :class="item.id">
            <v-progress-linear color="white" indeterminate></v-progress-linear>

            <div
              :class="{
                wrapInforUser: item.status == 'Working',
                wrapInforUserNotWorking: item.status == 'not_woking',
              }"
            >
              <v-avatar>
                <img v-if="item.avatar != ''" :src="item.avatar" />
                <img
                  v-else
                  src="https://previews.123rf.com/images/metelsky/metelsky1904/metelsky190400020/121859822-male-avatar-icon-or-portrait-handsome-young-man-face-businessman-in-suit-and-necktie-vector-illustra.jpg"
                />
              </v-avatar>
              <div class="nameUser">
                <h1>
                  {{ item.name }}
                </h1>
              </div>
            </div>
            <div class="wrapInforRole">
              <div class="namePart">
                <div>Part:</div>
                <h3>{{ item.part }}</h3>
              </div>
            </div>
            <div class="wrapInforRole">
              <div class="namePart">
                <div>Position:</div>
                <h3>{{ item.position }}</h3>
              </div>
            </div>
            <div class="wrapInforRole">
              <div class="namePart">
                <div>Status:</div>
                <h3>{{ item.status }}</h3>
              </div>
            </div>
            <div class="wrapButton">
              <v-card-actions class="button-item">
                <router-link
                  :to="{
                    name: 'user_information',
                    params: { id: item.id, items: item },
                  }"
                >
                  <v-btn text class="detail"> Detail </v-btn>
                </router-link>
                <v-btn class="buttonRemove" @click="prepareDelete(item.id)">
                  Delete
                </v-btn>
              </v-card-actions>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <ButtonRemove
        :dialog="dialog"
        @update-dialog="dialog = $event"
        @confirm="onConfirm"
      />
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Employee from "../../types/Employee";
import ButtonRemove from "../Employee/Alert.vue";
import EmployeeDataService from "../../business/B_employee";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
Vue.use(VueToast);

@Component({
  components: {
    ButtonRemove,
  },
})
export default class App extends Vue {
  private employees: Employee[] = [];
  private response: any;
  private errors: any;
  dialog = false;
  tempId = 0;

  retrieveEmployee() {
    EmployeeDataService.getAll()
      .then((response) => {
        this.employees = response.data;
        console.log(response.data);
      })
      .catch(console.log);
  }

  created() {
    this.retrieveEmployee();
  }

  prepareDelete(id: number) {
    this.tempId = id;
    this.dialog = true;
  }

  deleteItem(id: number) {
    EmployeeDataService.delete(id)
      .then((response) => {
        this.retrieveEmployee();
        this.$toast.open({
          message: "Delete successfully",
          type: "success",
          duration: 5000,
          dismissible: true,
          position: "top-right",
        });
      })
      .catch((errors) => {
        console.log(errors);
      });
  }

  onConfirm() {
    this.deleteItem(this.tempId);
  }
}
</script>

<style lang="scss">
@import "../../assets/scss/listEmployee.scss";
</style>
