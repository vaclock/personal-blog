<template>
  <div class="category-container" v-loading="isLoading">
    <h1>文章分类</h1>
    <RightList :list="list" @select="handlerSelect" />
  </div>
</template>

<script>
import RightList from "@/views/Blog/components/RightList";
import { getBlogCategories } from "@/api/blog";
import fetchData from "@/mixins/fetchData";

export default {
  mixins: [fetchData([])],
  data() {
    return {
      isLoading: true,
    };
  },
  components: {
    RightList,
  },
  computed: {
    categoryId() {
      return this.$route.params?.categoryId || -1;
    },
    limit() {
      return this.$route.query.limit || 10;
    },
    list() {
      const totalList = this.data.reduce((a, b) => a + b.articleCount, 0);
      const list = [
        { id: -1, name: "全部", articleCount: totalList },
        ...this.data,
      ];
      return list.map((item) => {
        return {
          ...item,
          isSelected: item.id == this.categoryId,
          aside: item.articleCount + "篇",
        };
      });
    },
  },
  methods: {
    async remoteData() {
      return await getBlogCategories();
    },
    handlerSelect(newList) {
      if (newList.id === this.categoryId) {
        return;
      }
      const query = {
        page: 1,
        limit: this.limit,
      };
      if (newList.id === -1) {
        this.$router.push({
          name: "article",
          query,
        });
      } else {
        this.$router.push({
          name: "categoryArticle",
          query,
          params: {
            categoryId: newList.id,
          },
        });
      }
    },
  },
};
</script>

<style scoped lang='less'>
.category-container {
  h1 {
    letter-spacing: 2px;
    font-size: 1em;
    font-weight: bold;
    margin: 0px;
  }
  .right-list-container {
    margin: 1em 0px;
  }
}
</style>