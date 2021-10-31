<template>
  <div class="pager-container">
    <a
      :class="{
        disabled: currentPage === 1,
      }"
      class="firstArrow"
      @click="handlePage(1)"
      >|&lt;&lt;</a
    >
    <a
      :class="{
        disabled: currentPage === 1,
      }"
      @click="handlePage(currentPage - 1)"
      >&lt;</a
    >
    <a
      v-for="i in nums"
      :key="i"
      :class="{
        active: i === currentPage,
      }"
      @click="handlePage(i)"
      >{{ i }}</a
    >
    <a
      :class="{
        disabled: currentPage === totalPage,
      }"
      @click="handlePage(currentPage + 1)"
      >&gt;</a
    >
    <a
      :class="{
        disabled: currentPage === totalPage,
      }"
      @click="handlePage(totalPage)"
      >&gt;&gt;|</a
    >
  </div>
</template>


<script>
export default {
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 100,
    },
    limit: {
      type: Number,
      default: 20,
    },
    visiblePage: {
      type: Number,
      default: 10,
    },
  },

  computed: {
    totalPage() {
      return Math.ceil(this.total / this.limit);
    },

    minPage() {
      let min = this.currentPage - Math.floor(this.visiblePage / 2);
      if (min >= this.totalPage - this.visiblePage) {
        min = this.totalPage - this.visiblePage + 1;  //加1的含义是自身，因为总页数 - 可视页 = 第一页前面的一页
      }
      if (min <= 0) {
        min = 1;
      }

      return min;
    },

    maxPage() {
      let max = this.minPage + this.visiblePage - 1;
      if (max >= this.totalPage) {
        max = this.totalPage;
      }
      return max;
    },

    nums() {
      let arr = [];
      for (let i = this.minPage; i <= this.maxPage; ++i) {
        arr.push(i);
      }
      return arr;
    },
  },

  methods: {
    handlePage(newPage) {
      if(newPage <= 0 || newPage > this.totalPage) {
        return;
      }
      if(newPage === this.currentPage) {
        return;
      }
      this.$emit("pagechange", newPage);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";

.pager-container {
  display: flex;
  justify-content: center;
  margin: 20px auto;
  padding: 0px 40px;
  flex: 0 0 auto;
  a {
    &.firstArrow{
      min-width: 30px;
    }
    margin: 0px 6px;
    color: @primary;
    cursor: pointer;
    &.disabled {
      color: @lightWords;
      cursor: not-allowed;
    }
    &.active {
      cursor: text;
      color: @words;
    }
  }
}
</style>
