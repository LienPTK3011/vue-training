<template>
  <section class="section-container">
    <v-row class="signin">
      <v-col md="8" class="left">
        <h1>Welcome to my Project Vuejs Tranning</h1>
      </v-col>
      <v-col md="4" class="right">
        <h2>Sign Up</h2>
        <ValidationObserver ref="observer">
          <v-form @submit.prevent="submit">
            <ValidationProvider
              name="Name"
              rules="required"
              v-slot="{ errors }"
            >
              <v-text-field
                :error-messages="errors"
                v-model="username"
                :counter="15"
                label="UserName"
                outlined
                dense
                filled
                required
              ></v-text-field>
            </ValidationProvider>
            <ValidationProvider
              name="Email"
              rules="required"
              v-slot="{ errors }"
            >
              <v-text-field
                v-model="email"
                :error-messages="errors"
                :counter="25"
                label="Email"
                outlined
                dense
                filled
                required
              ></v-text-field>
            </ValidationProvider>
            <ValidationProvider
              name="Password"
              rules="required"
              v-slot="{ errors }"
            >
              <v-text-field
                v-model="password"
                :error-messages="errors"
                :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPass = !showPass"
                :type="showPass ? 'text' : 'password'"
                outlined
                dense
                filled
                label="Password"
                required
              ></v-text-field>
            </ValidationProvider>
            <div class="text-center">
              <v-btn class="signin-btn" type="submit" rounded color="white" style="margin-right:20px">
                Sign Up
              </v-btn>
               <v-btn class="signin-btn" rounded color="white" @click="clear">
                Clear
              </v-btn>
            </div>
            <p class="mess" style="color: red">{{ message }}</p>
          </v-form>
        </ValidationObserver>
      </v-col>
    </v-row>
  </section>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { required } from "vee-validate/dist/rules";
import { extend, ValidationObserver, ValidationProvider } from "vee-validate";
import axios from "axios";

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("email", {
  ...required,
  message: "Email must be valid",
});
@Component({
  components: {
    ValidationObserver,
    ValidationProvider,
  },
})
export default class SignUp extends Vue {
  private showPass = false;
  private username = "";
  private email = "";
  private password = "";
  private roles = 1;
  private data = {};
  private message = "";
  submit() {
    this.data = {
      username: this.username,
      password: this.password,
      email: this.email,
      roles: this.roles,
    };
    axios
      .post("http://localhost:8993/api/auth/signup", this.data)
      .then((res) => {
        this.message = res.data.message;
      })
      .catch((err) => {
        this.message = err.response.data.message;
      });
  }
  clear() {
    this.username = "";
    this.password = "";
    this.email = "";
    this.message = "";
  }
}
</script>
<style lang="sass">
.section-container
  padding: 20px
  margin: 20px
  background: #fff
  width: 100%
  box-sizing: border-box
.signin
  padding: 0
  max-width: 1200px
  margin: 0 auto
  min-height: 600px
  box-shadow: 0 0 1px 1px rgba($color: #000000, $alpha: 0.1)
.left
  padding: 30px
  justify-content: center
  align-items: center
  box-sizing: border-box
  display: flex
  color: #fed100
  background-color: #f9f9f9
.right
  padding: 30px
  box-sizing: border-box
  background: #fed100
  color: #fff
h2
  text-align: center
  margin: 30px 0

.mess
  color: red
  margin-top: 10px
    
    
</style>