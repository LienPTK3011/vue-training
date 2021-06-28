<template>
    <div>
        <Header/>
        <ProductList/>
        <p>{{user}}</p>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Header from '../homepage/Header.vue';
import ProductList from '../homepage/ProductList.vue'
@Component({
    components:{
        Header,
        ProductList
    }
})
export default class Home extends Vue{
    get user(){
        return this.$store.state.user;
    }

}
</script>
