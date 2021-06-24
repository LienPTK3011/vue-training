<template>
  <div>
    <h1 class="title" align="center">
      {{ count }}
    </h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapState } from "vuex";

//Component nào muốn sử dụng state chỉ cần ...mapState là sẽ nhận được state mới. Viết vào hàm computed để render lại
@Component({
  computed: {
    ...mapState({
      // count: (state:any) => state.count
      count: function(state: any) {
        if (state.count < 0) {
          state.count = 0;
          return state.count;
        }
        return state.count;
      },
    }),
  },
})
export default class Counter extends Vue {}
</script>
