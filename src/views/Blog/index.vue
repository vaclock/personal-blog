<template>
  <div class="blog-category-container">
    <Layout>
      <template>
        <div class="main">
          <BlogList />
        </div>
      </template>

      <template v-slot:right>
        <div class="right">
          <BlogCategory />
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "@/components/Layout";
import BlogCategory from "./components/BlogCategory";
import BlogList from "./components/BlogList";

export default {
  components: {
    Layout,
    BlogCategory,
    BlogList,
  },
};
</script>

<style scoped lang="less">
.blog-category-container {
  .main {
    height: 100vh;
    position: relative;
  }
  .right {
    width: 300px;
    padding: 20px;
    box-sizing: border-box;
    position: relative;
    height: 100vh;
    overflow-y: auto;
  }
}
</style>