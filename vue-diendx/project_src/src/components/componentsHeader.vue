<template>
    <header>
        <h1>{{text}}</h1>
    </header>
    
    
</template>

<script>
export default {
    name: 'comp-header',
    data() {
        return {
            text: ''
        }
    }
}
</script>

<style>
    header h1{ 
        background-color: aquamarine;
    }

</style>