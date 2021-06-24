<template>
  <div style="border: 1px">
    <b style="color: red">List danh sách nhân viên</b>
    <br /><br />

    <b-row>
      <b-col></b-col>
      <b-col cols="8">

        <b-table hover :items="items"></b-table>
         <router-link to="/workList">Click here to view list work</router-link> 
         <!-- <practice/>
         <add-counter/> -->
         
      </b-col>
      <b-col></b-col>
    </b-row>

    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Practice from '@/views/Practice.vue'
import AddCounter from '@/views/AppCounter.vue'

@Component({
  components: {
    // Practice,
    // AddCounter
  },
})
export default class ListEmployee extends Vue {

   

  public items: Array<any> = [
    {
      id: 1,
      first_name: "Dickerson",
      last_name: "Macdonald",
      age: 40,
      position: "Dev Java",
    },
    {
      id: 2,
      first_name: "Larsen",
      last_name: "Shaw",
      age: 21,
      position: "Dev PHP",
      _rowVariant: "secondary",
    },
    {
      id: 3,
      first_name: "Geneva",
      last_name: "Wilson",
      age: 29,
      position: "Tester",
    },
    {
      id: 4,
      first_name: "Thor",
      last_name: "MacDonald",
      age: 40,
      position: "Tester",
      _rowVariant: "warning ",
    },
    {
      id: 5,
      first_name: "Dick",
      last_name: "Dunlap",
      age: 30,
      position: "Reception",
    },

    {
      id: 6,
      first_name: "Tom",
      last_name: "Shav",
      age: 20,
      position: "Dev mobile",
    },

    {
      id: 7,
      first_name: "John",
      last_name: "Wack",
      age: 25,
      position: "Accounting",
      _rowVariant: "warning ",
    },
  ];
}
</script>
