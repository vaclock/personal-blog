<template>
  <div class="data-list-container">
    <ul>
      <li v-for="(item, i) in data" :key="i">
        <Avatar
          :url="item.avatar"
          :size="44"
        />
        <div class="data">
          <div class="nickname">
            {{ item.nickname }}
            <span class="createTime">{{formatDate(+item.createDate)}}</span>
          </div>
          <div class="content">
            {{ item.content }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Avatar from "../Avatar";
import {formatDate} from "@/utils/index.js";

export default {
  props: {
    data: {
      type: Array,
      default: ()=>[],
    },
  },
  components: {
    Avatar,
  },
  methods: {
    formatDate
  }
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.data-list-container {
  li {
    padding: 15px 0px;
    display: flex;
    border-bottom: 1px solid lighten(@gray, 20%);
    .avatar-container {
      margin-right: 15px;
    }
    .data {
      flex: 1 1 auto;
      .nickname {
        width: 100%;
        color: #65a13b;
        margin-bottom: 10px;
        position: relative;
        .createTime {
          position: absolute;
          color: lighten(@gray, 10%);
          font-size: 12px;
          right: 10px;
        }
      }
    }
  }
}
</style>