<template>
  <div class="app-container">
    <Layout>
      <template v-slot:left>
        <div class="aside">
          <SiteAside />
        </div>
      </template>
      <template>
        <div class="main">
          <Router-view />
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import SiteAside from "@/components/SiteAside";
import Layout from "@/components/Layout";
export default {
  components: {
    SiteAside,
    Layout,
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
.app-container{
  .self-fill(fixed);
}
.aside{
  width: 250px;
  height:100%;
}
.main {
  height: 100%;
}
</style>
