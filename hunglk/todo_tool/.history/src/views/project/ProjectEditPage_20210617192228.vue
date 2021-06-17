<template>
  <div>
    <h1>{{isEdit? 'This is project edit page' : 'This is project add page'}}</h1>
    <div class="form-input">
      <form>
        <div v-show="isEdit" class="row">
          <div class="col-25">
            <label for="id">Id</label>
          </div>
          <div class="col-25">
            <input type="number" :disabled="isEdit" v-model="data.id" placeholder="Id ...">
          </div>
        </div>
        
        <div class="row">
          <div class="col-25">
            <label>Project name</label>
          </div>
          <div class="col-75">
            <input type="text" v-model="data.name" placeholder="Project name..">
          </div>
        </div>

        <div class="row">
          <div class="col-25">
            <label>Project namager</label>
          </div>
          <div class="col-75">
            <input type="text" v-model="data.pm" placeholder="Project manager name..">
          </div>
        </div>
        
        <div class="row">
          <div class="col-25">
            <label>Team size</label>
          </div>
          <div class="col-75">
            <input type="number" v-model="data.teamSize" placeholder="Team size...">
          </div>
        </div>

         <div class="row">
          <div class="col-25">
            <label>Customer</label>
          </div>
          <div class="col-75">
            <input type="text" v-model="data.customer" placeholder="Customer name..">
          </div>
        </div>

      </form>
      <div class="row">
        <button @click="cancel">Cancel</button>
        <button @click="save">Save</button>
      </div>
    </div>
      
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { projectService } from '@/service';
import { ProjectRequest } from '@/models';

@Component
export default class UserEditPage extends Vue {
  private data: ProjectRequest = new ProjectRequest();
  private isEdit = false;
  private created() {
    if (this.$router.currentRoute.params.id) {
      const id = Number(this.$router.currentRoute.params.id);
      this.isEdit = true;
      projectService.getProjectById(id).then((res) => {
        this.data = res.data;
      });
    }
  }
  private save() {
   if (this.isEdit) {
      projectService.updateProject(this.data).then((res) => {
        this.goListProject();
    });
   } else {
     projectService.saveProject(this.data).then((res) => {
        this.goListProject();
     });
   }
  }
  private cancel() {
    this.goListProject();
  }
  private goListProject() {
    this.$router.push(
          {
            name: 'project',
          },
    );
  }
  private dele(){
    const id = Number(this.data.id);
    projectService.deleteById(id).then((res) => {
      alert('Đã xóa: ' + this.data.name)
      this.goListProject();
    })
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.form-input{
  margin: auto;
  width: 650px;
  height: auto;
}
input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}
input[type=number], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  float: none;
  margin: 30px;
}

input[type=submit]:hover {
  background-color: #45a049;
}

.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

.col-25 {
  text-align: left;
  float: left;
  width: 25%;
  margin-top: 6px;
}

.col-75 {
  float: left;
  width: 50%;
  margin-top: 6px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .col-25, .col-75, input[type=submit] {
    width: 100%;
    margin-top: 0;
  }
}
</style>