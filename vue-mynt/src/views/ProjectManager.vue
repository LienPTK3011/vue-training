<template>
  <div class="project">
    <ListProject :listProject="listProject" @toParent="onChange"></ListProject>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ListProject from "@/components/ListProject.vue";

@Component({
  components: {
    ListProject,
  },
})
export default class ProjectManager extends Vue {
  public postFontSize: any = 1;
  public listProject: Array<any> = [
    {
      id: 1,
      projectName: "Phát triển dự án Health care",
      pm: " Phạm Thị Kim Liên",
      teamSize: 10,
      client: "Japan",
    },
    {
      id: 2,
      projectName: "Phát triển web bán hàng",
      pm: " Nguyễn Mạnh Tiến",
      teamSize: 20,
      client: "Japan",
    },
    {
      id: 3,
      projectName: "Phát triển Web Đất Xanh Miền Bắc",
      pm: " Lê Tuấn Anh",
      teamSize: 10,
      client: "Việt Nam",
    },
    {
      id: 4,
      projectName: "Phát triển ứng dụng mobile",
      pm: " Nguyễn Mạnh Tiến",
      teamSize: 14,
      client: "Anh",
    },
  ];

  public onChange(data: any) {
    console.log(data);

    // alert("Cha đã thấy con!")
  }
}
</script>
