<template>
  <div class="header">
    <router-link to="dashboard" class="logo">Mixi gaming</router-link>
    <div class="header-right">
      <router-link to="/user" active-class="active" tag="button">
        <div class="link-container">Quản lý thành viên</div>
      </router-link>
      <router-link to="/project" active-class="active" tag="button">
        <div class="link-container">Quản lý dự án</div>
      </router-link>
      <router-link to="/work" active-class="active" tag="button">
        <div class="link-container">Quản lý công việc</div>
      </router-link>
    </div>
  </div>
</template>
<script lang="ts"></script>

<style scoped>
.header {
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 20px 10px;
}

.header a {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
}

.header a.logo {
  font-size: 25px;
  font-weight: bold;
}

.header a:hover {
  background-color: #ddd;
  color: black;
}

.header a.active {
  background-color: dodgerblue;
  color: white;
}

.header-right {
  float: right;
}

@media screen and (max-width: 500px) {
  .header a {
    float: none;
    display: block;
    text-align: left;
  }
  .header-right {
    float: none;
  }
}
</style>
