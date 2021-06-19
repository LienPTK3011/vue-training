<template>
    <div class="header">
        <v-container>
            <div class="wrapHeader">
                <div class="header-logo">
                    <nuxt-link to="/"
                    >
                        <img src="~/static/logo.png" alt="logo"/>
                    </nuxt-link>
                </div>
                <div class="header-ul">
                    <ul>
                        <li v-for="item of menuList" :key="item.id">
                            {{ item.name }}
                        </li>
                    </ul>
                </div>
                <div class="header-button">
                    <div class="location">
                        <div class="wraplocation">
                            <div class="wrapIcon">
                                <img src="~/static/img/location.png" alt="logo"/>
                            </div>
                            <div class="wrapSpan">
                                <p class="title">Hệ Thống</p>
                                <p class="content">Cửa Hàng</p>
                            </div>
                        </div>
                    </div>
                    <div class="location">
                        <div class="wraplocation">
                            <div class="wrapIcon">
                                <img src="~/static/img/delivery-menu.png" alt="public/images/delivery-menu"/>
                            </div>
                            <div class="wrapSpan">
                                <p class="title">Giao Hàng</p>
                                <p class="content">McDelivery</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </v-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                menuList: []
            }
        },
        methods: {
            async getListMenu() {
            this.menuList = await fetch('http://localhost:5000/menu').then(res => res.json())
            },
        },
        created() {
            this.getListMenu()
        }
    }
</script>

<style lang="scss">
  @import "~/assets/header.scss";
</style>