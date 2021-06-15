<template>
      <v-row justify="center">
        <v-dialog
            :value="status"
            max-width="400"
            @input="updateDialog"
        >
        <v-card>
            <v-card-title class="text-h5">
            Ban co muon xoa khong?????
            </v-card-title>

            <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
                color="green darken-1"
                text
                @click="updateDialog(false)"
            >
                Disagree
            </v-btn>

            <v-btn
                color="green darken-1"
                text
                @click="confirm"
            >
                Agree
            </v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>
      </v-row>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";

@Component
export default class Modal extends Vue {
    @Prop() readonly status?: boolean
    private isShow?: boolean

    created() {
        this.isShow = this.status
        console.log(this.isShow)
    }

    @Emit('update-dialog')
    updateDialog(e: boolean) {
        return e
    }

    @Emit('confirm')
    confirm() {
        this.updateDialog(false)
    }
}
</script>