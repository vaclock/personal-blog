<template>
  <ul class="right-list-container">
    <li v-for="(item, i) in list" :key="i">
      <span :class="{ active: item.isSelected }" @click="handlerClick(item)">{{
        item.name
      }}</span>
      <RightList :list="item.children" @select="handlerClick" />
    </li>
  </ul>
</template>

<script>
export default {
  // [ {name:'a', isSelected:false}, children:[...] ]
  name: "RightList",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handlerClick(item) {
      this.$emit("select", item);
    },
  },
};
</script>

<style lang="less" scoped>
@import url(~@/styles/var.less);
.right-list-container {
  list-style: none;
  padding: 0px;
  .active {
    cursor: pointer;
    color: @warn;
  }
  .right-list-container {
    margin-left: 1em;
  }
}
</style>