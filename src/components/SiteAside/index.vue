<template>
  <div class="site-aside-container">
    <Avatar url="http://img.mp.itc.cn/upload/20161209/f752976dc0504405b2eb63e14c6e4791_th.jpg" :size="150" />
    <h1 class="title">这就是光</h1>
    <Menu />
    <Concat />
    <p class="web-id">津xxx备xxxxx号</p>
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
.site-aside-container {
  .avatar-container{
    text-align:center;
  }
  .web-id{
    text-align: center;
    font-size:14px;
  }
  .title{
    font-size:20px;
    color:#fff;
    text-align:center;
  }
  background-color: @dark;
  padding:20px 0px;
  box-sizing: border-box;     //如果不设置该属性的话会导致高度增加，滚动条的出现是因为高度不够，如果这里高度稍微多一些，滚动条出现的便会稍微少一些
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>