<template>
  <div class="blog-detail-container">
    <h2>{{ info.title }}</h2>
    <aside>
      <span>日期：{{ formatDate(+info.createDate) }}</span>
      <span>浏览: {{ info.scanNumber }}</span>
      <a href="#blog-comment">评论: {{ info.commentNumber }}</a>
      <router-link
        :to="{
          name: 'categoryArticle',
          params: {
            categoryId: info.category ? info.category.id : ' -1',
          },
        }"
        >{{ info.category ? info.category.name : '全部' }}</router-link
      >
    </aside>
    <main v-html="info.htmlContent" class="markdown-body"></main>
  </div>
</template>

<script>
import { formatDate } from "@/utils";
import "@/styles/markdown.less";
import 'highlight.js/styles/xcode.css';

export default {
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    console.log(this.info);
  },
  methods: {
    formatDate,
  },
};
</script>

<style lang="less" scoped>
@import url(~@/styles/var.less);
.blog-detail-container {
  aside {
    * {
      font-size: 12px;
      color: @gray;
      margin-right: 1em;
    }
    a:hover {
      color: @primary;
      text-decoration: none;
    }
  }
  .markdown-body {
    margin: 2em 0;
  }
}
</style>