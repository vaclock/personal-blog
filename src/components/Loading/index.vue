<template>
  <div class="loading-container">
    <img src="~@/assets/loading.svg" alt="内容正在加载中" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import url(~@/styles/mixin.less);
.loading-container {
  .self-center();
}
</style>