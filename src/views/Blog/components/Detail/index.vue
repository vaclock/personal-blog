<template>
  <div class="detail-container">
    <Layout>
      <div class="main" v-loading="isLoading">
        <BlogDetail class="markdown-body" v-if="data" :info="data" />
        <BlogComment v-if="data"/>
      </div>
      <template v-slot:right>
        <div class="right" v-loading="isLoading">
          <BlogTOC v-if="data" :list="data.toc" />
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "@/components/Layout";
import BlogDetail from "../BlogDetail";
import BlogTOC from "../BlogTOC";
import { getBlog } from "@/api/blog";
import fetchData from "@/mixins/fetchData";
import BlogComment from "../BlogComment";

export default {
  mixins: [fetchData(null)],
  components: {
    Layout,
    BlogDetail,
    BlogTOC,
    BlogComment,
  },
  async fetchData() {
    console.log(this.isLoading, this.$route.params);
    const result = await getComment();
    console.log()
    this.data = result.rows;
    console.log('这是detail组件中的数', this.commentList);
  },
  methods: {
    async remoteData() {
      return await getBlog(this.$route.params.blogId);
    },
    async mounted() {
      const result = await getComment();
      console.log('balalalala', result)
      this.commentList = result.rows();
    }
    
  },
};
</script>

<style lang="less" scoped>
.detail-container {
  height: 100%;
  .main {
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    overflow-x: auto;
    position: relative;
    box-sizing: border-box;
    padding: 20px;
    .markdown-body {
      margin: 2em 0;
    }
  }
  .right {
    position: relative;
    width: 300px;
    height: 100%;
    box-sizing: border-box;
    padding: 20px;
  }
}
</style>