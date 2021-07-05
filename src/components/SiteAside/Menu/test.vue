<template>
    <div class="wrap">
        <Menu />
    </div>
</template>

<script>
import Menu from "./";
export default {
    components:{
        Menu
    }
}
</script>

<style scoped>
.wrap{
    width:500px;
    height:500px;
    margin:0 auto;
    background-color:#000;
}
</style>