<template>
  <form>
    <div class="container">
      <h1>Đăng nhập</h1>
      <p>Nếu chưa có tài khoản , bạn hãy đăng ký nhé :3 phí 50k.</p>
      <hr />
      <label for="email"><b>Tên đăng nhập</b></label>
      <input type="text" placeholder="Tên đăng nhập" name="email" required />
      <label for="pass"><b>Password</b></label>
      <input type="password" placeholder="Mật khẩu" name="pass" required />
      <label>
        <input
          type="checkbox"
          checked="checked"
          name="remember"
          style="margin-bottom:15px"
        />
        Nhớ mật khẩu !
      </label>

      <div class="clearfix">
        <button type="button" class="cancelbtn">Làm lại</button>
        <button class="signupbtn" @click="login()">Đăng nhập</button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { User } from "@/models/user/User";

@Component
export default class extends Vue {
  private userData: User[] = [];
  private userModel: User = new User();
  private email = "";
  private pass = "";

  private created() {}

  //login
  // private login() {
  //   userService.getAllUser().then((response) => {
  //     if (response.data && response) {
  //       this.userModel = response.data;
  //       if (this.userModel.email= ''){
  //           alert('Tài khoản không tồn tại');
  //       }
  //       if (this.userModel.pass= ''){
  //           alert('Mật khẩu không tồn tại');
  //       }
  //     }
  //   });
  // }

  private login() {
    this.$router.push("/dashboard");
  }
}
</script>

<style lscoped>
* {
  box-sizing: border-box;
}

/* Full-width input fields */
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type="text"]:focus,
input[type="password"]:focus {
  background-color: #ddd;
  outline: none;
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for all buttons */
button {
  background-color: #04aa6d;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

button:hover {
  opacity: 1;
}

/* Extra styles for the cancel button */
.cancelbtn {
  padding: 14px 20px;
  background-color: #f44336;
}

/* Float cancel and signup buttons and add an equal width */
.cancelbtn,
.signupbtn {
  float: left;
  width: 50%;
}

/* Add padding to container elements */

/* Clear floats */
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

/* Change styles for cancel button and signup button on extra small screens */
@media screen and (max-width: 300px) {
  .cancelbtn,
  .signupbtn {
    width: 100%;
  }
}
</style>
