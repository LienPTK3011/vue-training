<template>
  <b-container>
    <form>
      <div class="container">
        <h1>Cập nhật công việc</h1>
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
          <button @click="getEdit(workModel.id)" type="submit">Cập nhật</button>
        </form>
      </div>
    </form>
  </b-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { workService } from "@/services/WorkService";
import { Work } from "@/models/work/Work";

@Component
export default class extends Vue {
  @Prop() private id!: number;
  private workData: Work[] = [];
  private workModel: Work = new Work();
  private users = Array();

  private created() {
    this.getDetail(this.id);
  }

  private getDetail(id: number) {
    workService.getWorkById(id).then((response: any) => {
      if (response.data && response) {
        this.workModel = response.data;
      }
    });
  }

  private getEdit(id: number) {
    workService.updateWork(this.workModel, id).then((response: any) => {
      if (response.data && response) {
        this.getDetail(id);
      }
    });
    this.$router.push("/work").catch(() => {});
  }
}
</script>
