<template>
  <div class="home3">
    <img alt="Vue logo" src="../assets/imgQA.jpg" width="10%">
    <h2> Chỉ có trang About mới có gì thôi !!</h2>
    <QA />
  </div>
 
</template>

<script lang="ts">

import Vue from 'vue'
import {Component} from 'vue-property-decorator';
import QA from '@/components/QA.vue';

@Component({
  components: {
    QA,
  },
})
export default class order extends Vue {}


</script>


