<template>
  <div>
    <b-row>
      <b-col></b-col>

      <b-col cols="8">
        <b-col lg="4" class="pb-2">
          <b-input-group size="sm" class="mb-2">
            <b-input-group-prepend is-text>
              <!-- Search -->
              <b-icon icon="search"></b-icon>
            </b-input-group-prepend>
            <b-form-input
              type="search"
              v-model="keyword"
              placeholder="Search...."
            ></b-form-input>

            <!-- @click="search()"-->

            <b-button style="margin" v-b-modal.modal-1 variant="success"
              >Create</b-button
            >
          </b-input-group>

          <!-- Modal Create -->
          <b-modal id="modal-1" title="Create New Task">
            <!-- Work name -->
            <ValidationObserver ref="observer">
              <div class="form-group">
                <label for="workNameC">Work Name</label>
                <ValidationProvider
                  :rules="{ required: true, min: 3, max: 20 }"
                  name="workName"
                  v-slot="{ errors }"
                >
                  <b-input
                    type="text"
                    name="workName"
                    class="form-control"
                    :class="errors[0] ? 'border-ranger' : ''"
                    placeholder="Input Work Name"
                    v-model="workNameC"
                  />
                  <span>{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
              <br />

              <!-- Leader -->
              <div class="form-group">
                <label for="leaderC">Leader</label>
                <ValidationProvider
                  :rules="{ required: true, min: 3, max: 20 }"
                  name="leader"
                  v-slot="{ errors }"
                >
                  <input
                    type="text"
                    class="form-control"
                    :class="errors[0] ? 'border-ranger' : ''"
                    id="leaderC"
                    name="leader"
                    placeholder="Input Leader Name"
                    v-model="leaderC"
                  />
                  <span>{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
              <br />
              <!-- Start date -->
              <div class="form-group">
                <label for="startDateC">Start Date</label>
                <input
                  type="date"
                  class="form-control"
                  id="startDateC"
                  v-model="startDateC"
                />
              </div>
              <br />

              <!-- End date -->
              <div class="form-group">
                <label for="endDateC">End Date</label>
                <input
                  type="date"
                  class="form-control"
                  id="endDateC"
                  v-model="endDateC"
                />
              </div>

              <br />

              <button class="btn btn-primary" @click="createWork()">
                Submit
              </button>
            </ValidationObserver>
          </b-modal>
        </b-col>

        <b-table striped hover :fields="fields" :items="items">
          <template #cell(actions)="data">
            <b-icon
              icon="pencil"
              scale="1"
              variant="danger"
              @click="editItem(data.item.ID)"
            ></b-icon>

            <!-- Modal update -->
            <b-modal title="Update New Task" :id="`modal-edit` + data.item.ID">
              <!-- Work name -->
              <div class="form-group">
                <label for="workName">Work Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="workName"
                  v-model="valueInLine.WorkName"
                />
              </div>
              <br />

              <!-- Leader -->
              <div class="form-group">
                <label for="leader">Leader</label>
                <input
                  type="text"
                  class="form-control"
                  id="leader"
                  placeholder="Input Leader Name"
                  v-model="valueInLine.Leader"
                />
              </div>
              <br />
              <!-- Start date -->
              <div class="form-group">
                <label for="startDate">Start Date</label>
                <input
                  type="date"
                  class="form-control"
                  id="startDate"
                  v-model="valueInLine.StartDate"
                />
              </div>
              <br />

              <!-- End date -->
              <div class="form-group">
                <label for="endDate">End Date</label>
                <input
                  type="date"
                  class="form-control"
                  id="endDate"
                  v-model="valueInLine.EndDate"
                />
              </div>

              <br />

              <!-- Button edit and delete -->
              <button
                type="submit"
                class="btn btn-primary"
                @click="updateWork(data.item.ID)"
              >
                Submit
              </button>
            </b-modal>

            <b-icon
              style="margin-left : 10"
              icon="trash"
              @click="deleteItem(data.item.ID)"
              scale="1"
              variant="danger"
            ></b-icon>
          </template>
        </b-table>
      </b-col>

      <b-col></b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import WorkServirce from "@/services/WorkServices";
//import { required, minLength, between } from 'vuelidate/lib/validators'

@Component({
  components: {},
})
export default class ListWork extends Vue {
  public items: Array<any> = [];
  private workNameC: string = "";
  private leaderC: string = "";
  private startDateC: Date = new Date();
  private endDateC: Date = new Date();

  private newWorkName: string = "";
  private newLeader: string = "";
  private newStartDate: Date = new Date();
  private newEndDate: Date = new Date();
  private valueInLine: any = "";
  private keyword: string = "";
  private originalRows: Array<any> = [];
  private resultSearch: Array<any> = [];

  public fields: Array<any> = [
    { key: "ID", label: "ID work" },
    { key: "WorkName", label: "Work Name" },
    { key: "Leader", label: "Leader Name" },
    { key: "StartDate", label: "Start Date" },
    { key: "EndDate", label: "End Date" },
    { key: "actions", label: "Actions" },
  ];

  //Copy all data to originalRows
  beforeMount() {
    this.originalRows = this.items;
  }

  created() {
    this.getWorkList();
  }

  public getWorkList() {
    WorkServirce.getWorkList().then((res: any) => {
      this.items = res.data;
    });
  }

  public async createWork() {
    const isValid = await (this.$refs.observer as any).validate();

    //Nếu qua vòng validate
    if (isValid) {
      let dataToAdd = {
        WorkName: this.workNameC,
        Leader: this.leaderC,
        StartDate: this.startDateC,
        EndDate: this.endDateC,
      };

      WorkServirce.createWorkList(dataToAdd).then((res: any) => {
        if (res) {
          // console.log(res);
          this.getWorkList();
        }
      });
      alert("Chúc mừng bạn đã tạo thành công!");
    }
  }

  public editItem(item: any) {
    // TO open modal
    debugger;
    this.$bvModal.show("modal-edit" + item);

    WorkServirce.getWorkListById(item).then((res: any) => {
      this.valueInLine = res.data;

      console.log("value here");
      console.log(this.valueInLine);
    });
  }

  public updateWork(item: any) {
    let dataToEdit = {
      WorkName: this.newWorkName ? this.newWorkName : this.valueInLine.WorkName,
      Leader: this.newLeader ? this.newLeader : this.valueInLine.Leader,
      StartDate: this.newStartDate
        ? this.newStartDate
        : this.valueInLine.StartDate,
      EndDate: this.newEndDate ? this.newEndDate : this.valueInLine.EndDate,
    };

    WorkServirce.updateWorkList(item, dataToEdit).then((res: any) => {
      if (res) {
        this.valueInLine = res.data;
        this.getWorkList();
      }
    });
  }

  public deleteItem(item: any) {
    alert("Are you sure to delete?");
    WorkServirce.deleteWorkList(item).then((res: any) => {
      if (res) {
        this.getWorkList();
      }
    });
  }

  public search() {
    debugger;
    // this.items = this.keyword
    //   ? this.items.filter((item) => item.WorkName.include(this.keyword)) ||
    //     this.items.filter((item) => item.Leader.include(this.keyword))
    //   : this.items;

    let searchData = this.originalRows;
    if (this.keyword === "") {
      this.items = this.originalRows;
    } else {
      for (let i = 0; i < searchData.length; i++) {
        let sparam = this.keyword.toLowerCase();

        for (const key in searchData[i]) {
          if (searchData[i].hasOwnProperty(key)) {
            let value = searchData[i][key];
            if (
              typeof value === "string" &&
              value.toLowerCase().indexOf(sparam) >= 0
            ) {
              this.resultSearch.push(searchData[i]);
            }
          }
        }
      }
    }
    this.items = this.resultSearch;
  }

  watch() {
    Query: {
      this.search();
    }
  }
}
</script>

<style scoped>
.border-ranger {
  border-color: red;
}
</style>
