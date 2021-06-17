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
                    v-for="(staff, index) in staffs" 
                    :staff="staff"
                    :index="index"
                    @deleteStaff='deleteStaff'
                />  
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
                        <v-file-input
                            @change="changeImage"
                            truncate-length="15"
                        ></v-file-input>
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
    import StaffOverview from '../components/StaffOverview.vue';
    import { Staff } from '@/interfaces/index.js'

    //interface
    @Component({
        components: {
            StaffOverview,
        }
    })
    export default class StaffList extends Vue {
        nameSearch = ''
        imgSrc = ''
        newStaff: Staff = {
            name: '',
            age: 18,
            isWorking: true,
            exprience: 0,
            avatar: '',
            todos: []
        }
        errors: Array<string> = []
        staffs: Array<Staff> = []
        initstaffs!: Array

        staffFilter(staff: Staff) {
            return staff.name.includes(this.nameSearch)
        }

        searchStaff() {
            if (this.initstaffs.length > this.staffs.length) {
                this.staffs = this.initstaffs
            }

            let staffFinded = this.staffs.filter(this.staffFilter)
            if (staffFinded.length) {
                this.staffs = staffFinded
            }
            this.nameSearch = ''
        }

        changeImage(event) {
            this.imgSrc = URL.createObjectURL(event)
            this.newStaff.avatar = this.imgSrc
        }

        async checkForm() {
            if (!this.newStaff.name.length) {
                let error = 'Please enter the name!'
                this.errors.push(error)
                return
            }
            let respone = await fetch('http://localhost:3000/staffs', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(this.newStaff)
            })
            let staff = await respone.json()
            this.staffs.push(staff)
        }

        async getStaffs() {
            let respone = await fetch('http://localhost:3000/staffs')
            let staffs = await respone.json()
            return staffs
        }

        async created() {
            this.staffs = await this.getStaffs()
            this.initstaffs = this.staffs
        }

        async deleteStaff(id: number) {
            let staff = await fetch(`http://localhost:3000/staffs/${id}`,{
                method: 'DELETE',
            })
            console.log(staff)
            if (staff.status === 200) {
                this.staffs = this.staffs.filter(staff => staff.id != id )
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