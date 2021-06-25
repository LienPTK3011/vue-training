<template>
    <div class="home-conten">
        <div class="wrap">
            <div class="box">
                <div class="box-top">
                <img class="box-image" src="https://tocotocotea.com/wp-content/uploads/2021/05/sua-chua-dau-tam-hoang-kim.png" alt="Girl Eating Pizza">
                <div class="title-flex">
                    <h3 class="box-title">Sữa Chua Dâu Tằm Hoàng Kim  </h3>
                    <p class="user-follow-info">17 Coin</p>
                </div>
                <p class="description">Whipped steamed roast cream beans macchiato skinny grinder café. Iced grinder go mocha steamed grounds cultivar panna aroma.</p>
                </div>
                <router-link :to="{name: 'order', params: { id:counter }}" class="button">Order</router-link>
            </div>
            <div class="box">
                <div class="box-top">
                <img class="box-image" src="https://tocotocotea.com/wp-content/uploads/2021/05/sua-chua-dau-tam-hat-de-.png" alt="Girl Eating Pizza">
                <div class="title-flex">
                    <h3 class="box-title">Sữa Chua Dâu Tằm Hạt Dẻ *</h3>
                    <p class="user-follow-info">33 Coin</p>
                </div>
                <p class="description">Whipped steamed roast cream beans macchiato skinny grinder café. Iced grinder go mocha steamed grounds cultivar panna aroma.</p>
                </div>
                <router-link :to="{name: 'order101', params: { id:counter }}" class="button">Order</router-link>
            </div>
            <div class="box">
                <div class="box-top">
                <img class="box-image" src="https://tocotocotea.com/wp-content/uploads/2021/01/ezgif.com-gif-maker-1.jpg" alt="Girl Eating Pizza">
                <div class="title-flex">
                    <h3 class="box-title">Sữa Chua Trắng *</h3>
                    <br>
                    <p class="user-follow-info">26 Coin</p>
                </div>
                <p class="description">Whipped steamed roast cream beans macchiato skinny grinder café. Iced grinder go mocha steamed grounds cultivar panna aroma.</p>
                </div>
                <router-link :to="{name: 'order202', params: { id:counter }}" class="button">Order</router-link>
            </div>
            <div class="box">
                <div class="box-top">
                <img class="box-image" src="https://tocotocotea.com/wp-content/uploads/2021/01/ezgif.com-gif-maker-1.jpg" alt="Girl Eating Pizza">
                <div class="title-flex">
                    <h3 class="box-title">Chanh Leo Trân Châu Sương Mai</h3>
                    <p class="user-follow-info">12 Coin</p>
                </div>
                <p class="description">Whipped steamed roast cream beans macchiato skinny grinder café. Iced grinder go mocha steamed grounds cultivar panna aroma.</p>
                </div>
                <router-link :to="{name: 'order202', params: { id:counter }}" class="button">Order</router-link>
            </div>
            <!-- <button> <router-link to="/add">ADD</router-link> </button>  -->
            
            <div id="app">
                <div v-for="(cat,index) in cats" :key="index" class="cat-infor">
                    <h2> {{cat}}</h2> <p> <button @click="removeCat(index)">Remo</button> </p>
                </div>
                
                <div v-for="(cat,n) in cats" :key="n">
                </div>

                <p>
                    <input v-model="newCat"> 
                    <button @click="addCat">Add nha</button>
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import About from '/components/About.vue';

export default {
    data () {
        return {
            cats: [],
            newCat: null, 
            counter:  '234'
        }
    },
    mounted() {
            
            if(localStorage.getItem('cats')) {
                try {
                    this.cats = JSON.parse(localStorage.getItem('cats'));
                } catch(e) {
                    localStorage.removeItem('cats');
                }
            }
        },
        methods: {
            addCat() {
                console.log(this.newCat); 
                this.cats.push(this.newCat);
            },
            removeCat(x) {
                this.cats.splice(x,1);
                this.saveCats();
            },
            saveCats() {
                let parsed = JSON.stringify(this.cats);
                localStorage.setItem('cats', parsed);
            }
        }
    }
</script>

<style>
    * {
box-sizing: border-box;
padding: 0;
margin: 0;
}

:root {
--accent: hsl(240, 80%, 89%);
}

body {
background: #f0f0f0;
font-family: system-ui;
}

h3 {
font-size: 1.5em;
}

p {
font-size: 1em;
line-height: 1.7;
font-weight: 300;
}

.description {
white-space: wrap;
}

a {
text-decoration: none;
color: inherit;
}

.wrap {
display: flex;
justify-content: space-between;
align-items: stretch;
width: 1200px;
gap: 24px;
padding: 24px;
flex-wrap: wrap;
text-align: center;
margin: 0 auto;
}

.box {
display: flex;
flex-direction: column;
flex-basis: 100%;
position: relative;
padding: 24px;
background: #fff;
}

.box-top {
display: flex;
flex-direction: column;
position: relative;
gap: 12px;
margin-bottom: 36px;
}

.box-image {
width: 100%;
height: 360px;
object-fit: cover;
object-position: 50% 20%;
}

.title-flex {
display: flex;
justify-content: space-between;
align-items: center;
}

.box-title {
border-left: 3px solid var(--accent);
padding-left: 12px;
}

.user-follow-info {
color: hsl(0, 0%, 60%);
}

.button {
display: block;
justify-content: center;
align-items: center;
text-align: center;
margin-top: auto;
padding: 16px;
color: #000;
background: transparent;
box-shadow: 0px 0px 0px 1px black inset;
}

.button:hover {
background: var(--accent);
}
.home-bg {
    background: url(../assets/ms_banner_img1.jpg);
    width: 100%;
    height: 90vh;
    background-size: cover;
}

/* MEDIA QUERIES */

@media (min-width: 320px) {
.title-flex {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
}
.user-follow-info {
    margin-top: 6px;
}
}

@media (min-width: 460px) {
.title-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
}
.user-follow-info {
    margin-top: 6px;
}
}

@media (min-width: 640px) {
.box {
    flex-basis: calc(50% - 12px);
}
.title-flex {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
}
.user-follow-info {
    margin-top: 6px;
}
}

@media (min-width: 840px) {
.title-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
}
.user-follow-info {
    margin-top: 6px;
}
}

@media (min-width: 1024px) {
.box {
    flex-basis: calc(33.3% - 16px);
}
.title-flex {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
}
.user-follow-info {
    margin-top: 6px;
}
}

@media (min-width: 1100px) {
.box {
    flex-basis: calc(25% - 18px);
}
}
.cat {
    width: 100px;
    display: inline-block;
}



</style>`