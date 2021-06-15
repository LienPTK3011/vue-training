<template>
  <div>
    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="text-h5">
          Are you sure you want to delete?
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Stop
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="buttonRemove"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { Component, Vue, Prop } from "vue-property-decorator";
import Employee from "../../types/Employee";
import EmployeeDataService from "../../business/B_employee"
@Component({
  components: {},
})
  export default class Alert extends Vue{
    dialog = false
    buttonRemove() {
        this.dialog = false
    }
  }
</script>

<style lang="scss">
    .buttonRemove {
        background: red !important;
        color: white !important;
        margin: 0 30px;
    }
</style>