<template>
  <div class="staffs">
        <h1 id="title">Staffs list</h1>
        <div class="search-staff">
            <v-text-field
            v-model="nameSearch"
            @keyup.enter="searchStaff()"
            label="Search"
            required
            ></v-text-field>
        </div>

        <div class="overview">
            <div class="staffs-list">
                <StaffOverview 
                    :key="index"
                    v-for="(staff, index) in staffsList" 
                    :staff="staff"
                    :index="index"/>  
            </div>
            <div class="add-staff-form shadow">
                <v-form
                    @submit.prevent="checkForm()"
                    action="" method="POST" 
                    novalidate="true"
                >
                    <p v-if="errors.length">
                        <b class="errors-message">Please correct the following error(s):</b>
                        <ul>
                        <li :key="index" v-for="(error,index) in errors">{{ error }}</li>
                        </ul>
                    </p>
                    <v-container>
                        <v-text-field
                            label="Name"
                            v-model="newStaff.name"
                        >
                        </v-text-field>
                        <v-text-field
                            label="Age"
                            v-model="newStaff.age"
                        >
                        </v-text-field>
                        <v-text-field
                            label="Exprience"
                            v-model="newStaff.exprience"
                        >
                        </v-text-field>
                        <v-btn
                        depressed
                        color="primary"
                        id="staff-add-btn"
                        type="submit"
                        >
                        Add
                        </v-btn>
                    </v-container>
                </v-form>
            </div>
        </div>
  </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import StaffOverview from './StaffOverview.vue'
    @Component({
        components: {
            StaffOverview,
        }
    })
    export default class StaffList extends Vue {
        nameSearch = ''
        newStaff = {
            name: '',
            age: 18,
            stillWorking: true,
            exprience: 0,
            avatar: './avatar-2.jpg',
            todos: []
        }
        errors = []

        staffsList = [
            {
                name: 'Harry Osborn',
                age: '19',
                stillWorking: true,
                exprience: 2,
                avatar: './avatar-2.jpg',
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

        initStaffsList = this.staffsList

        deleteStaff(index: number) {
            this.staffsList.splice(index, 1)
        }

        staffFilter(staff: object) {
            return staff.name.includes(this.nameSearch)
        }

        searchStaff() {
            if (this.initStaffsList.length > this.staffsList.length) {
                this.staffsList = this.initStaffsList
            }

            let staffFinded = this.staffsList.filter(this.staffFilter)
            if (staffFinded.length) {
                this.staffsList = staffFinded
            }
            this.nameSearch = ''
        }
        checkForm() {
            if (!this.newStaff.name.length) {
                let error = 'Please enter the name!'
                this.errors.push(error)
            }

            if (!this.errors.length) {
                this.staffsList.push(this.newStaff)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .staffs-list {
        margin-top: 4%;
        width: 70%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
    }

    .staff-overview {
        width: 20%;
        margin-top: 5%;
        margin-left: 1%;
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

    .search-staff {
        width: 50%;
        margin: auto;
    }

    .add-staff-form {
        width: 20%;
    }

    .errors-message {
        text-align: center;
    }

    .overview {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>