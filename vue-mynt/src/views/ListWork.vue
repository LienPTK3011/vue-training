<template>
  <div>
    <b-row>
      <b-col></b-col>

      <b-col cols="8">
        <b-col lg="4" class="pb-2">
          <b-input-group size="sm" class="mb-2">
            <b-input-group-prepend is-text>
              <b-icon icon="search" ></b-icon>
            </b-input-group-prepend>
            <b-form-input
              type="search"
              @click="search()"
              placeholder="Search...."
            ></b-form-input>

            <b-button style="margin" v-b-modal.modal-1 variant="success"
              >Create</b-button
            >
          </b-input-group>

          <!-- Modal Create -->
          <b-modal id="modal-1" title="Create New Task">
            <!-- Work name -->
            <div class="form-group">
              <label for="workNameC">Work Name</label>
              <input
                type="text"
                class="form-control"
                id="workNameC"
                placeholder="Input Work Name"
                v-model="workNameC"
              />
            </div>
            <br />

            <!-- Leader -->
            <div class="form-group">
              <label for="leaderC">Leader</label>
              <input
                type="text"
                class="form-control"
                id="leaderC"
                placeholder="Input Leader Name"
                v-model="leaderC"
              />
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

            <button type="submit" class="btn btn-primary" @click="createWork()">
              Submit
            </button>
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

@Component({
  components: {},
})
export default class ListWork extends Vue {
  @Provide()
  term = "";
  search() {
    this.$emit("search", this.term);
  }
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

  public fields: Array<any> = [
    { key: "ID", label: "ID work" },
    { key: "WorkName", label: "Work Name" },
    { key: "Leader", label: "Leader Name" },
    { key: "StartDate", label: "Start Date" },
    { key: "EndDate", label: "End Date" },
    { key: "actions", label: "Actions" },
  ];

  created() {
    this.getWorkList();
  }

  public getWorkList() {
   
    WorkServirce.getWorkList().then((res: any) => {
      this.items = res.data;
       
    });
  
    
  }

  public createWork() {
    debugger;
    let dataToAdd = {
      WorkName: this.workNameC,
      Leader: this.leaderC,
      StartDate: this.startDateC,
      EndDate: this.endDateC,
    };

    WorkServirce.createWorkList(dataToAdd).then((res: any) => {
      if(res) {
        // console.log(res);
        this.getWorkList()
      }
    });
    alert("Chúc mừng bạn đã tạo thành công!");
  }

  public editItem(item: any) {
    // TO open modal
    debugger
    this.$bvModal.show("modal-edit" + item);

    WorkServirce.getWorkListById(item).then((res: any) => {
      this.valueInLine = res.data;

      // console.log("value here");
      // console.log(this.valueInLine);
    });
  }

  public updateWork(item: any) {
    debugger;

    // let dataToEdit = {
    //   WorkName: this.newWorkName ? this.newWorkName :  this.valueInLine.workName,
    //   Leader: this.newLeader ?  this.newLeader : this.valueInLine.leader,
    //   StartDate: this.newStartDate ? this.newStartDate : this.valueInLine.startDate,
    //   EndDate: this.newEndDate ? this.newEndDate : this.valueInLine.endDate,
    // };

    WorkServirce.updateWorkList(item).then((res: any) => {
      this.valueInLine = res.data;
      console.log(res.data);
      this.getWorkList()
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
}
</script>
