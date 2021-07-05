<template>
<div class="aside">
    <SiteAside />
</div>
</template>

<script>
import SiteAside from "./";
export default {
  components: {
    SiteAside,
  },
};
</script>

<style lang='less' scoped>
@import "~@/styles/public.less";
.aside{
  width:300px;
  height:200px;
}
</style>