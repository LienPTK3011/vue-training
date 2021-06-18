<template>
  <div>
    <Header />
    <EmployeeList :employeeList="employee.employeeList"></EmployeeList>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import EmployeeList from "./EmployeeList.vue";
import Header from "../header/Header.vue";
import axios from "axios";
interface employee {
  employeeList: any[];
}
@Component({
  components: {
    EmployeeList,
    Header,
  },
})
export default class Project extends Vue {
  private employee: employee = {
    employeeList: [],
  };
  async created() {
    try {
      const res = await axios.get(`http://localhost:3000/employee`);

      this.employee.employeeList = res.data;
    } catch (e) {
      console.error(e);
    }
  }
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