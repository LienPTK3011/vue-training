<template>
  <div id="example">
    <!-- Computed -->
    <p><b>Thông điệp ban đầu:</b> "{{ message }}"</p>
    <p>
      Thông điệp được viết hoa <b style="color: red">(computed):</b> "{{
        messagesComputed
      }}"
    </p>

    <!-- Watcher -->
    <hr />
    <div id="watch-example">
      <p>
        Hãy hỏi một câu hỏi yes/no:
        <input v-model="question" />
      </p>
      <p>{{ answer }}</p>
    </div>
    <hr />

    <!-- Directives -->
    <div>
      <p v-rainbow><b>Reload to change color</b></p>
      <p v-rainbow><b>The color will change went you reload page</b></p>
    </div>

    <hr />
    <p><b>EventBus</b></p>

    <!-- eventbus -->
    <b-button
      variant="success"
      @click="emitGlobalClickEvent()"
      style="margin-right: 50px"
      >Click me</b-button
    >
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import WorkServirce from "@/services/WorkServices";
import EventBus from "@/eventBus/EventBus";

@Component({
  components: {},
})
//Để tái sử dụng được reverse message và không phải tính toán lại. Mỗi lần cần dùng chỉ cần gọi vào hàm reversedMessage()
export default class Practice extends Vue {
  private message: string =
    "                           Học Vuejs từ cơ bản đến nâng cao          ";
  private question: string = "";
  private answer: string = "Không thể trả lời khi chưa có câu hỏi?";



  get messagesComputed() {

    return this.message.trim().toUpperCase();
  }
  // set reversedMessage(message: string) {
  //   this.message = this.message.trim()
  // }
  //  computed: any = {
  // reversedMessage(): any {
  //   console.log('1');

  //   debugger;
  //   return this.message.split("").reverse.join("");
  // },
  // };

  private reversedMessage() {
    console.log("1");

    debugger;
    // return this.message.split("").reverse.join("");
  }

  @Watch("question")
  private checkQuestion() {

    this.answer = "Đang chờ bạn đặt câu hỏi.....";
    this.getAnswer();
  }

  public async getAnswer() {
    if (this.question.indexOf("?") === -1) {
      this.answer = "Câu hỏi phải bao gồm dấu ? ";
    } else {
      this.answer = "Đang suy nghĩ....";
      await WorkServirce.yesNoQuestion().then((res: any) => {
        this.answer = res.data.answer;
      });
    }
  }

    private emitGlobalClickEvent() {
      debugger
     EventBus.$emit("hello", "I hear you");
  }

}
</script>
