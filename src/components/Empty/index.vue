<template>
  <div class="empty-container"> 
    <Icon type="empty" />
    <p>{{ text }}</p>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components:{
    Icon
  },
  props: {
    text: {
      type: String,
      default: "无数据",
    },
  },
};
</script>

<style lang="less" scoped>
@import url(~@/styles/var.less);
@import "~@/styles/mixin.less";
.icon-container{
  font-size:72px;
}
.empty-container {
  color: @lightWords;  
  .self-center();
  text-align:center;
  p{
      font-weight:bold;
  }
}
</style>