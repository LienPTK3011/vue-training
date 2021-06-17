<template>
  <EmployeeList :employeeList="employee.employeeList"></EmployeeList>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import EmployeeList from "./EmployeeList.vue";
interface employee {
  employeeList: any[];
}
@Component({
  components: {
    EmployeeList,
  },
})
export default class Project extends Vue {
  employee: employee = {
    employeeList: [
      {
        id: 1,
        name: "Nguyen Xuan Tuan",
        age: 22,
        seniority: 6,
        isWork: true,
      },
      {
        id: 2,
        name: "Lê Văn A",
        age: 22,
        seniority: 2,
        isWork: true,
      },
      {
        id: 3,
        name: "Nguyen Thanh Long",
        age: 22,
        seniority: 1,
        isWork: true,
      },
      {
        id: 4,
        name: "Hoang Van Cuong",
        age: 22,
        seniority: 8,
        isWork: false,
      },
      {
        id: 5,
        name: "Le Xuan Quang",
        age: 19,
        seniority: 4,
        isWork: false,
      },
      {
        id: 6,
        name: "Le Xuan Quang",
        age: 19,
        seniority: 7,
        isWork: true,
      },
    ],
  };
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.center {
  text-align: center;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>