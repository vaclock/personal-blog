<template>
  <div class="siteaside-container">
    <Avatar url="http://img.mp.itc.cn/upload/20161209/f752976dc0504405b2eb63e14c6e4791_th.jpg" :size="150" />
    <h1 class="title">这就是光</h1>
    <Menu />
    <Concat />
  </div>
</template>

<script>
import Avatar from "@/components/Avatar/index.vue";
import Menu from "./Menu/index.vue";
import Concat from "./Concat/index.vue";

export default {
  components: {
    Avatar,
    Menu,
    Concat,
  },
};
</script>

<style lang="less" scoped>
@import url(~@/styles/var.less);
@import "~@/styles/mixin.less";
.siteaside-container {
  .avatar-container{
    text-align:center;
  }
  .title{
    font-size:20px;
    color:#fff;
    text-align:center;
  }
  background-color: @dark;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>