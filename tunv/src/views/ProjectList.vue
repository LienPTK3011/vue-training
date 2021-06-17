<template>
    <div class="project-infor">
        <ProjectList />
    </div>
</template>
<script>
// @ is an alias to /src
import ProjectList from '@/components/ProjectList.vue'

export default {
  name: 'information',
  components: {
    ProjectList,
  }
}
</script>