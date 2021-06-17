<template>
    <div class="staff-overview shadow">
        <v-card
            class="mx-auto"
            max-width="344"
            outlined
            :color="!staff.isWorking ? '#385F73' : 'white'"
        >
            <v-list-item three-line>
                <v-list-item-content>
                    <div class="text-overline mb-4">
                    OVERVIEW
                    </div>
                    <v-list-item-title class="text-h5 mb-1">
                    {{ staff.name }}
                    </v-list-item-title>
                    <v-list-item-subtitle>Age: {{ staff.age }} years old</v-list-item-subtitle>
                    <v-list-item-subtitle v-if="staff.stillWorking">Still working here!</v-list-item-subtitle>
                    <v-list-item-subtitle v-else>No longer here!</v-list-item-subtitle>
                    <v-list-item-subtitle>Exprience: have {{ staff.exprience }} years experience</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar
                    tile
                    size="80"
                    color="grey"
                >
                <img
                    :src="staff.avatar"
                    alt="Avatar"
                >
                </v-list-item-avatar>
            </v-list-item>

            <v-card-actions>
            <v-btn
                depressed
                color="primary"
                id="staff-detail-btn"
            >
                <router-link
                    :to="{
                        name: 'staff-detail',
                        params: {
                            id: id,
                        }
                    }"
                >
                    Detail
                </router-link>
            </v-btn>
            <v-btn
                depressed
                color="error"
                id="staff-delete-btn"
                @click="deleteStaff(staff.id)"
            >
                Delete
            </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    @Component
    export default class StaffOverview extends Vue {
        @Prop() staff!: object;

        index!: number;
        id = this.staff.id

        deleteStaff(id: number) {
            this.$emit('deleteStaff', id)
        }
    }
</script>

<style scoped>
    #staff-detail-btn a {
        color: white;
    }

    .staff-overview {
        width: 20%;
        margin-top: 5%;
        margin-left: 1%;
        border-radius: 5%;
        background: rgb(225, 217, 217);
        position: relative;
    }
</style>

