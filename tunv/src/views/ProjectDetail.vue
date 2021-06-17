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

