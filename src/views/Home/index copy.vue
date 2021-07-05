<template>
  <div class="home-container">
    <ul
      class="carousel-container"
      ref="container"
      :style="{
        marginTop,
      }"
      @wheel="slideWheel"
      @transitionend="transitionend"
    >
      <li v-for="item in banners" :key="item.id">
        <CarouselItem :banner="item" />
      </li>
    </ul>

    <div class="icon arrow-up" v-show="index !== 0" @click="jumpTo(index - 1)">
      <Icon type="arrowUp" />
    </div>
    <div
      class="icon arrow-down"
      v-show="index !== banners.length - 1"
      @click="jumpTo(index + 1)"
    >
      <Icon type="arrowDown" />
    </div>

    <ul class="indicator">
      <li
        v-for="(item, i) in banners"
        :key="item.id"
        :class="{
          active: index === i,
        }"
        @click="jumpTo(i)"
      ></li>
    </ul>
    <Loading v-show="isLoading"/>
  </div>
</template>

<script>
import getBanners from "@/api/banner.js";
import CarouselItem from "./Carouselitem.vue";
import Icon from "@/components/Icon";
import Loading from "@/components/Loading";

export default {
  components: {
    CarouselItem,
    Icon,
    Loading,
  },
  data() {
    return {
      banners: [],
      index: 0, //当前显示的banner索引，默认为0
      containerHeight: 0,
      sliding: false,
      indexchanging: false,
      isLoading:true
    };
  },
  async created() {
    this.banners = await getBanners();
    this.isLoading = false;
  },
  mounted() {
    this.CalcHeight();
    window.addEventListener("resize", this.CalcHeight);
  },
  destroyed() {
    window.removeEventListener("resize", this.CalcHeight);
  },
  methods: {
    transitionend() {
      this.sliding = false;
      this.indexchanging = false;
    },
    CalcHeight() {
      this.containerHeight = this.$refs.container.clientHeight;
    },
    jumpTo(index) {
      this.indexchanging = true;
      return (this.index = index);
    },
    slideWheel(e) {
      if (this.sliding) {
        return;
      }
      this.indexchanging = true;
      if (e.deltaY >= 8 && this.index < this.banners.length - 1) {
        this.sliding = true;
        this.index++;
      }
      if (e.deltaY <= -8 && this.index > 0) {
        this.sliding = true;
        this.index--;
      }
    },
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHeight + "px";
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.fill {
  width: 100%;
  height: 100%;
}
.home-container {
  .fill();
  position: relative;
  overflow: hidden;
  .carousel-container {
    transition: 1000ms ease-out;
    .fill();
    li {
      .fill();
      .carousel-item-container {
        .fill();
      }
    }
  }

  .indicator {
    width: 12px;
    .self-center();
    right: 10px;
    left: auto;
    li {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      margin-bottom: 10px;
      border: 2px solid #fff;
      background-color: rgba(255, 255, 255, 0.3);
      cursor: pointer;
      &.active {
        background-color: #fff;
      }
    }
  }

  .icon {
    font-size: 30px;
    color: @gray;
    cursor: pointer;
    .self-center();
    &.arrow-up {
      top: 20px;
      transform: translatex(-50%);
      animation: jump-up 2000ms ease infinite;
    }

    &.arrow-down {
      bottom: 20px;
      top: auto;
      transform: translatex(-50%);
      animation: jump-down 2000ms ease infinite;
    }

    @keyframes jump-up {
      0% {
        transform: translate(-50%, 0px);
      }
      50% {
        transform: translate(-50%, 10px);
      }
      100% {
        transform: translate(-50%, 0px);
      }
    }

    @keyframes jump-down {
      0% {
        transform: translate(-50%, 0px);
      }
      50% {
        transform: translate(-50%, -10px);
      }
      100% {
        transform: translate(-50%, 0px);
      }
    }
  }
}
</style>