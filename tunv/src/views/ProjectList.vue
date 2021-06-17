<template>
  <div class="projects">
    <h1 id="title">Projects List</h1>
    <div class="projects-list">
      <div class="project" :key="index" v-for="(project, index) in projectsList">
        <b-card bg-variant="dark" text-variant="white" :title="project.projectName">
          <b-card-text>
            With supporting text below as a natural lead-in to additional content.
          </b-card-text>
          <b-button id="detail-btn" variant="primary"><router-link :to="{ name: 'project-detail', params: {name: project.projectName, items:project}}">Detail</router-link></b-button>
        </b-card>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  @Component
  export default class ProjectList extends Vue {
    @Prop()
    projectsList = []
    new = {
        "id": 5,
        "projectName": "Avengers",
        "teamSize" : 17,
        "customerName": "Nick Fury"
      }
    async fetchApi() {
      let res = await fetch('http://localhost:3000/projects')
      let data = await res.json()
      return data
    }

    async created() {
      let data = await this.fetchApi()
      this.projectsList = data
      this.projectsList.push(this.new)
      console.log(data)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.projects-list {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  height: 600px;
  margin: auto;
  
}

.project {
  width: 20%;
}

h1#title {
  width: 100%;
  text-align: center;
}

button#detail-btn a{
  color: white;
}

</style>

