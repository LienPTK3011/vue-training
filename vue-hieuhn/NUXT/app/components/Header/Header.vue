<template>
    <div id="header">
        <h1>Hello NuxtJS</h1>
    </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Header extends Vue {

}
</script>

<style lang="scss">
    #header {
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: chocolate;
        width: 100%;

        h1 {
            font-size: 90px;
            color: white;
        }
    }
</style>