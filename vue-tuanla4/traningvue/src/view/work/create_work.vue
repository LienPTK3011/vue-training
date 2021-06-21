<template>
  <b-container>
    <form>
      <div class="container">
        <h1>Thêm mới công việc</h1>
        <form novalidate>
          <div class="form-group">
            <label>Tên công việc</label>
            <input
              class="form-control"
              v-model="workModel.name_work"
              type="text"
              required
            />
          </div>
          <div class="form-group">
            <label>Ghi chú</label>
            <input
              type="text"
              required
              class="form-control"
              v-model="workModel.description"
            />
          </div>
          <button @click="getCreate()" type="submit">Thêm mới</button>
        </form>
      </div>
    </form>
  </b-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { workService } from "@/services/WorkService";
import { Work } from "@/models/work/Work";

@Component
export default class extends Vue {
  private workModel: Work = new Work();
  private works = Array();

  private created() {}

  private getCreate() {
    workService.createWork(this.workModel).then((response) => {
      if (response.data === response) {
        this.workModel = new Work();
      }
    });
    this.$router.push("/work").catch(() => {});
  }
}
</script>
