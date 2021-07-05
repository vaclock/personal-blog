<template>
  <div class="layout-container">
    <div class="left">
      <slot name="left" />
    </div>
    <div class="main">
      <slot />
    </div>
    <div class="right">
      <slot name="right" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scope lang="less">
.layout-container {
  display: flex;
  width: 100%;
  height: 100%;
  .left,
  .right {
    overflow: hidden;
    flex: 0 0 auto;
  }
  .main {
    flex: 1 1 auto;
    overflow: hidden;
  }
}
</style>