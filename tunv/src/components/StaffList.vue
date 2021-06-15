<template>
  <div class="staffs">
        <h1 id="title">Staffs list</h1>
        <div class="staffs-list">
            <div class="staff-overview" :key="index" v-for="(staff, index) in staffsList">
                <v-card
                    class="mx-auto"
                    max-width="344"
                    outlined
                    :color="!staff.stillWorking ? '#385F73' : staff.experience >= 5 ? 'yellow' : 'white'"
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
                <router-link :to="{name: 'staff-detail', params: {name: staff.name, items: staff}}">Detail</router-link>
                </v-btn>
                <v-btn
                depressed
                color="error"
                id="staff-delete-btn"
                @click="deleteStaff(index)"
                >
                Delete
                </v-btn>
                    </v-card-actions>
                </v-card>
            </div>
        </div>
        <v-main>
      <router-view/>
    </v-main>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  @Component
  export default class StaffList extends Vue {
    @Prop()
    staffsList = [
        {
            name: 'Harry Osborn',
            age: '19',
            stillWorking: true,
            exprience: 2,
            avatar: './avatar.jpg',
            todos: [
                {
                    name: 'eat',
                    completed: false,
                    edit: false
                },
                {
                    name: 'sleep',
                    completed: false,
                    edit: false
                },
                {
                    name: 'game',
                    completed: false,
                    edit: false
                },
            ]
        },
        {
            name: 'Oscar',
            age: '25',
            stillWorking: true,
            exprience: 5,
            avatar: './avatar-2.jpg',
            todos: []
        },
        {
            name: 'John Wane',
            age: '30',
            stillWorking: false,
            exprience: 4,
            avatar: './avatar-3.jpg',
            todos: []
        },
    ]

    deleteStaff(index: number) {
        this.staffsList.splice(index, 1)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .staffs-list {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 4%;
    }

    .staff-overview {
        width: 20%;
        border-radius: 5%;
        background: rgb(225, 217, 217);
        position: relative;
    }

    .staff-overview > button {
        border-radius: 10%;
        position: absolute;
    }

    .staff-overview > button > a {
        color: white;
    }

    .staff-img {
        width: 30%;
        border-radius: 50%;
    }

    .staff-img > img#staff-avatar {
        width: 100%;
        border-radius: 50%;
    }

    .header {
        width: 100%;
        border-radius: 5%;
        background: rgb(121, 214, 121);
        text-align: center;
    }

    .staff-content {
        width: 100%;
        height: 270px;
        display: flex;
        justify-content: space-around;
    }

    .staff-information {
        width: 58%;
        height: 70%;
        border: 2px solid;
    }

    .background {
        background: lightblue;
    }

    .out {
        background: gray;
    }

    .exprience {
        background: yellow;
    }

    h1#title {
        text-align: center;
    }

    #staff-detail-btn a {
        color: white;
    }

    .avatar-bg {
        background-size: contain;
    }

    .staff-list {
        margin-top: 10%;
    }
</style>