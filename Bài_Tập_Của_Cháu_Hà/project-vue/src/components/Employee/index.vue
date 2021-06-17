<template>
  <div>
    <v-container>
      <h1>The list of Employee</h1>
      <v-row>
        <v-col
          cols="12"
          md="3"
          v-for="(item, key) in employees"
          :key="key"
        >
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
                <h3>{{ item.postion }}</h3>
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
                  <v-btn text 
                    class="detail"
                  > Detail 
                  </v-btn>
                </router-link>
                <v-btn text @click="deleteEvent(key)" class="delete"> Delete </v-btn>
              </v-card-actions>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style lang="scss">
.wrapInforRole {
  display: flex;
  padding: 5px 25px 5px 25px;
  justify-content: space-around;

  .namePart {
    display: flex;
    width: 100%;
    align-items: center;
    h3 {
      padding: 0 0 0 15px;
    }
  }
}
.wrapInforUserNotWorking {
  display: flex;
  padding: 25px;
  justify-content: space-around;
  background: #b3b3b3;
  color: #fff;
  img {
    object-fit: cover;
  }
}
.wrapInforUser {
  display: flex;
  padding: 25px;
  justify-content: space-around;
  background: #00bcd4;
  color: #fff;
  img {
    object-fit: cover;
  }
}
.wrapButton {
  display: flex;
  padding: 40px 10px 10px 10px;
  .button-item {
    .detail {
      color: #fff;
      background: #00bcd4;
    }
    .delete {
      background: red;
      color: #fff;
      margin: 0 0 0 10px;
    }
  }
}
</style>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Employee from "../../types/Employee";
import EmployeeDataService from "../../business/B_employee"

@Component({
  components: {},
})
export default class App extends Vue {
    private employees: Employee[] = [];
    private response: any;
    private errors: any;
    retrieveEmployee() {
    EmployeeDataService.getAll()
      .then((response) => {
        this.employees = response.data;
        console.log(response.data);
      })
      .catch((errors) => {
        console.log(errors);
      });
  }
  
  created() {
    this.retrieveEmployee();
  }
}
</script>
