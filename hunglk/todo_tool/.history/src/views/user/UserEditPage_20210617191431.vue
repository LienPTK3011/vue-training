<template>
  <div>
    <h1>{{isEdit? 'This is user edit page' : 'This is user add page'}}</h1>
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
            <label>User name</label>
          </div>
          <div class="col-75">
            <input type="text" v-model="data.userName" placeholder="Your user name..">
          </div>
        </div>

        <div class="row">
          <div class="col-25">
            <label>Full name</label>
          </div>
          <div class="col-75">
            <input type="text" v-model="data.fullName" placeholder="Your full name..">
          </div>
        </div>
        
        <div class="row">
          <div class="col-25">
            <label>Age</label>
          </div>
          <div class="col-75">
            <input type="number" v-model="data.age" placeholder="Your age..">
          </div>
        </div>

         <div class="row">
          <div class="col-25">
            <label>Gender</label>
          </div>
          <div class="col-75">
            <input type="text" v-model="data.gender" placeholder="Your gender..">
          </div>
        </div>

        <div class="row">
          <div class="col-25">
            <label>Address</label>
          </div>
          <div class="col-75">
            <input type="text" v-model="data.address" placeholder="Your address..">
          </div>
        </div>

         <div class="row">
          <div class="col-25">
            <label>email</label>
          </div>
          <div class="col-75">
            <input type="text" v-model="data.email" placeholder="Your email..">
          </div>
        </div>

         <div class="row">
          <div class="col-25">
            <label>Phone number</label>
          </div>
          <div class="col-75">
            <input type="number" v-model="data.phoneNumber" placeholder="Your phone number..">
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
import { userService } from '@/service';
import { UserRequest } from '@/models';

@Component
export default class UserEditPage extends Vue {
  private data: UserRequest = new UserRequest();
  private isEdit = false;
  private created() {
    if (this.$router.currentRoute.params.id) {
      const id = Number(this.$router.currentRoute.params.id);
      this.isEdit = true;
      userService.getUserById(id).then((res) => {
        this.data = res.data;
      });
    }
  }
  private save() {
   if (this.isEdit) {
      userService.updateUser(this.data).then((res) => {
        this.goListUser();
    });
   } else {
     userService.saveUser(this.data).then((res) => {
        this.goListUser();
     });
   }
  }
  private cancel() {
    this.goListUser();
  }
  private goListUser() {
    this.$router.push(
          {
            name: 'user',
          },
    );
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