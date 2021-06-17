<template>
    <div class="staff-list">
        <StaffList />
    </div>
</template>
<script>
// @ is an alias to /src
import StaffList from '@/components/StaffList.vue'

export default {
  name: 'staff-list',
  components: {
    StaffList,
  }
}
</script>