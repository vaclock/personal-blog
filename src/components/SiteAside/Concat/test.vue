<template>
    <div class="wrap">
        <Concat />
    </div>
</template>

<script>
import Concat from "./";

export default {
    components:{
        Concat
    }
}
</script>

<style lang="less" scoped>
@import url(~@/styles/var.less);
.wrap{
    color:@dark;
    background-color:#000;
    padding-top:200px;
    width:500px;
    height:500px;
}
</style>