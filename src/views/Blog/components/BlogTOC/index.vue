<template>
  <div class="blog-toc-container">
    <h1>目录</h1>
    <RightList :list="handleList(list)" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "../RightList";
export default {
  props: {
    list: {
      type: Array,
      default: ()=>[],
    },
  },
  components: {
    RightList,
  },
  data() {
    return {
      anchor: this.list[0].name
    }
  },
  mounted() {
    console.log(this.list, this.anchor);
  },
  methods: {
    handleSelect(e) {
      console.log(e);
      location.hash = e.anchor;
    },
    // 将一个对象数组[{name:xxx}, children:[xxx]] => [name:xxx, isSelected: false, children:[xxx]]
    handleList(list) {
      return list.map((v, i)=>{
        // 默认是第一个选中
        if(v.children) {
          return {
            ...v,
            isSelected: v.name === this.anchor,
            children: this.handleList(v.children)
          }
        }
        return {
          ...v,
          isSelected: v.name === this.anchor
        }
      })
    }
  }
};
</script>

<style scoped lang="less">
.blog-toc-container {
  h1 {
    font-size: 16px;
  }
  width: 300px;
}
</style>