<template>
  <ul class="right-list-container">
    <li v-for="(item, i) in list" :key="i">
      <span :class="{ active: item.isSelected }" @click="handlerClick(item)">{{
        item.name
      }}</span>
      <span v-if="item.aside" class="aside" :class="{ active: item.isSelected }" @click="handlerClick(item)">{{
        item.aside
      }}</span>
      <RightList
        v-if="item.children"
        :list="item.children"
        @select="handlerClick"
      />
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
  li {
    min-height: 40px;
    line-height: 40px;
    font-size: 14px;
    span {
      cursor: pointer;
      &.aside{
        margin-left: 1em;
      }
      &.active {
        font-weight: bold;
      }
    }
  }
  .right-list-container {
    margin-left: 1em;
  }
}
</style>