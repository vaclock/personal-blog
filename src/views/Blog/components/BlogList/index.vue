<template>
  <ul class="blog-list-container" v-loading="isLoading" ref="container">
    <li v-for="item in data.rows" :key="item.id">
      <div v-if="item.thumb" class="thumb">
        <RouterLink
          :to="{
            name: 'blogDetail',
            params: {
              blogId: item.id,
            },
          }"
        >
          <img :src="item.thumb" :alt="item.title" :title="item.title" />
        </RouterLink>
      </div>
      <div class="main">
        <RouterLink
          :to="{
            name: 'blogDetail',
            params: {
              blogId: item.id,
            },
          }"
        >
          <h2>{{ item.title }}</h2>
        </RouterLink>
        <div class="aside">
          <span>日期：{{ formatDate(+item.createDate) }}</span>
          <span>浏览：{{ item.scanNumber }}</span>
          <span>评论：{{ item.commentNumber }}</span>
          <RouterLink
            :to="{
              name: 'categoryArticle',
              params: {
                categoryId: item.category.id,
              },
            }"
            >{{ item.category.name }}</RouterLink
          >
        </div>
        <div class="desc">
          {{ item.description }}
        </div>
      </div>
    </li>
    <Pager
      v-if="data.total"
      :currentPage="routeInfo.page"
      :limit="routeInfo.limit"
      :total="data.total"
      @pagechange="handlePageChange"
    />
  </ul>
</template>

<script>
import { getBlogs } from "@/api/blog";
import fetchData from "@/mixins/fetchData";
import Pager from "@/components/Pager";
import { formatDate } from "@/utils";

export default {
  mixins: [fetchData({})],
  components: {
    Pager,
  },
  methods: {
    async remoteData() {
      return await getBlogs();
    },
    formatDate,
    handlePageChange(newPage) {
      if (this.routeInfo.page === newPage) {
        return;
      }
      const query = {
        page: newPage,
        limit: this.routeInfo.limit,
      };
      if (this.routeInfo.cate && this.routeInfo.cate !== -1) {
        this.$router.push({
          name: "categoryArticle",
          query,
          params: {
            categoryId: this.routeInfo.cate,
          },
        });
      } else {
        this.$router.push({
          name: "article",
          query,
        });
      }
    },
  },
  computed: {
    routeInfo() {
      return {
        cate: +this.$route.params?.categoryId || -1,
        page: +this.$route.query?.page || 1,
        limit: +this.$route.query?.limit || 10,
      };
    },
  },
  watch: {
    async $route() {
      this.isLoading = true;
      this.$refs.container.scrollTop = 0;
      const page = this.$route.query.page;
      const limit = this.$route.query.limit;
      const cate = this.$route.params?.categoryId;
      this.data = await getBlogs(page, limit, cate);
      this.isLoading = false;
    },
  },
};
</script>

<style scoped lang="less">
@import url(~@/styles/var.less);
.blog-list-container {
  padding: 20px;
  line-height: 1.7;
  box-sizing: border-box;
  overflow-y: scroll;
  height: 100vh;
  scroll-behavior: smooth;
  a {
    display: inline-block;
    h2 {
      margin: 0px;
    }
  }
  li {
    padding: 15px 0px;
    display: flex;
    .thumb {
      margin-right: 15px;
      flex: 0 0 auto;
      img {
        max-width: 200px;
        border-radius: 5px;
      }
    }
    .main {
      flex: 1 1 auto;
      .aside {
        font-size: 12px;
        color: @gray;
        span {
          margin-right: 15px;
        }
      }
      .desc {
        margin: 15px 0px;
        font-size: 14px;
      }
    }
  }
}
</style>