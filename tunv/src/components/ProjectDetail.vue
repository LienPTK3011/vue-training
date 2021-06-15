<template>
<div>
    <h1 id="title">{{ project.projectName }}'s detail</h1>
    <div class="project-detail">
        <v-form>
            <v-container>
                <v-text-field
                    label="Project name"
                    v-model="project.projectName"
                >
                </v-text-field>
                <v-text-field
                    label="Customer name"
                    v-model="project.customerName"
                >
                </v-text-field>
                <v-text-field
                    label="Team size"
                    :value="project.teamSize"
                >
                </v-text-field>
            </v-container>
        </v-form>
        <!-- <b-card no-body class="overflow-hidden" style="">
            <b-row no-gutters>
                <b-col md="6">
                    <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
                </b-col>
                <b-col md="6">
                    <b-card-body>
                        <b-card-text>
                            <h1>Project name: {{ project.projectName }}</h1>
                            <h5>Customer name: {{ project.customerName }}</h5>
                            <h5>Team size: {{ project.teamSize }} members</h5>
                        </b-card-text>
                    </b-card-body>
                </b-col>
            </b-row>
        </b-card> -->
    </div>
</div>
</template>
<script lang='ts'>
    import { Component, Vue } from 'vue-property-decorator';
    @Component
    export default class ProjectDetail extends Vue {
        project = this.$route.params.items
    }
    
</script>

<style scoped>
    .project-detail {
        width: 100%;
    }
    
    .card-size {
        width: 100%;
    }

    h1#title {
        text-align: center;
    }
</style>