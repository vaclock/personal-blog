<template>
  <div class="blog-comment-container" v-loading="isLoading">
    <MessageArea :title="'评论列表'" id="blog-comment" :list="data.rows" @submit="handleSubmit" />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import { getComment, submitComment } from "@/api/blog";
import fetchData from "@/mixins/fetchData";

export default {
  mixins: [fetchData({})],
  components: {
    MessageArea,
  },
  data() {
    return {};
  },
  mounted() {
    console.log("这是blogComment组件中的List数据", this.data);
    console.log(this.$route, "blogList", this.data);
  },
  methods: {
    async remoteData() {
      const result = await getComment();
      console.log("abcdefs", result.rows);
      return result;
    },
    async handleSubmit(info, callback) {
      const resp = await submitComment({...info, blogId:this.$route.params.blogId});
      this.data.rows.unshift(resp);
      callback('提交成功');
    }
  },
};
</script>

<style scoped>
.blog-comment-container {
  position: relative;
}
</style>