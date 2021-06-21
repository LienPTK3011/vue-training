<template>
  <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <span
          v-bind="attrs"
          v-on="on"
          class="form-link"
        >
          Đăng nhập
        </span>
      </template>

      <v-card class="form-login">
        <v-card-title class="text-h5 grey lighten-2">
          Đăng nhập
        </v-card-title>

        <v-cart-text>
          <v-form
            ref="form"
          >
            <v-text-field
              label="E-mail"
            ></v-text-field>

            <v-text-field
              label="Mật khẩu"
            ></v-text-field>

            <v-checkbox
              label="Nhớ tài khoản"
            ></v-checkbox>

            <v-btn
              class="btn-login"
              color="success"
            >
              Login
            </v-btn>
          </v-form>
        </v-cart-text>
      </v-card>
    </v-dialog>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class ModalLogin extends Vue {
  dialog = false
}
</script>

<style lang="scss">
  .form-login {
    padding: 20px;

    .btn-login {
      width: 100%;
    }
  }
  .form-link {
    font-weight: bold;
    text-transform: uppercase;
    color: white;
  }
</style>