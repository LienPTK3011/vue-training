<template>
  <section class="section-container">
    <v-row class="signin">
      <v-col cols="8" class="left">
        <h1>Welcome to my Project Vuejs Tranning</h1>
      </v-col>
      <v-col cols="4" class="right">
        <h2>LOGIN</h2>
        <ValidationObserver ref="observer">
          <v-form @submit.prevent="submit">
            <ValidationProvider
              v-slot="{ errors }"
              name="Name"
              rules="required"
            >
              <v-text-field
                v-model="email"
                :error-messages="errors"
                label="Email"
                required
                outlined
                dark
                filled
                dense
              ></v-text-field>
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
              name="Password"
              rules="required"
            >
              <v-text-field
                v-model="password"
                :error-messages="errors"
                label="Password"
                :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPass = !showPass"
                required
                outlined
                dense
                dark
                filled
                :type="showPass ? 'text' : 'password'"
              ></v-text-field>
            </ValidationProvider>
            <div class="text-center">
              <v-btn
                class="signin-btn"
                type="submit"
                rounded
                color="white"
                dark
              >
                Sign In
              </v-btn>
            </div>
            <p class="mess">{{message}}</p>
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
import User from "@/service/UserInterface";

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
export default class Login extends Vue {
  private email = "";
  private password = null;
  private showPass=false;
  private User : User[]=[];
  private message='';
  params() {
    return {
      email: this.email,
      password: this.password,
    };
  }
  created(){
      this.params();
  }
 async submit(){
      if(this.email==='admin' && this.password ==='admin'){
        console.log("thanh cong");
        this.$router.push("/");
          
      }else{
          console.log("that bai");
          this.message="Tài khoản hoặc mật khẩu k đúng"

      }
  }
}
</script>
<style lang="sass">
.section-container
    padding: 20px
    margin: 20px
    background: #fff
    width: 100%
    box-shadow: 0 0 1px 1px rgba($color: #000000, $alpha: 0.1)
    box-sizing: border-box
.signin
    padding: 0
    max-width: 1000px
    margin: 0 auto
    min-height: 600px
    box-shadow: 0 0 1px 1px rgba($color: #000000, $alpha: 0.1)
    .left
        padding: 30px
        justify-content: center
        align-items: center
        box-sizing: border-box
        display: flex
        color: #30ac7c
        background-color: #f9f9f9

    .right
        padding: 30px
        box-sizing: border-box
        background: #30ac7c
        color: #fff
    h2
        text-align: center
        margin: 30px 0

    .signin-btn
        width: 100%
        color: #30ac7c
    .mess
        color: red
        margin-top :10px
</style>