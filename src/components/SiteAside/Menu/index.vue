<template>
  <nav class="menu-container">
    <router-link
      v-for="item in types"
      :key="item.link.name"
      :to="item.link"
      class="item"
      :exact="item.exact == undefined"
    >
      <Icon :type="item.icon" />
      <span>{{ item.content }}</span>
    </router-link>
  </nav>
</template>

<script>
import Icon from "@/components/Icon/index.vue";
import "@/styles/public.less";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      types: [
        { icon: "home", content: "首页", link: {name:'home'} },
        { icon: "blog", content: "文章", link: {name:'article'}, exact: false },
        { icon: "about", content: "关于我", link: {name:'about'} },
        { icon: "code", content: "项目&效果", link: {name:'project'} },
        { icon: "chat", content: "留言板", link: {name:'message'} },
      ],
    };
  },
  computed: {
    pathName() {
      console.log(location.pathname);
      return location.pathname;
    },
  },
};
</script>

<style  lang="less" scoped>
@import "~@/styles/var.less";
.menu-container {
  width: 100%;
  background-color: transparent;
  margin: 24px 0px;
  .item {
    padding: 0px 50px;
    display: block;
    cursor: pointer;
    height: 45px;
    line-height: 45px;
    color: @lightWords;

    &.router-link-active {
      background-color: rgba(255, 255, 255, 0.2);
    }

    .icon-container {
      width: 24px;
      display: inline-block;
    }
    &:hover {
      color: #fff;
    }
  }
}
</style>