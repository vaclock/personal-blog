<template>
  <div class="carousel-item-container">
    <div
      class="img-container"
      @mousemove="mousemove"
      @mouseleave="mouseleave"
      ref="container"
    >
      <ImageLoader
        :src="banner.bigImg"
        :placeholder="banner.midImg"
        @load="textTransition"
        :style="calcPosition()"
      />
    </div>
    <div class="title" ref="title">
      {{ banner.title }}
    </div>
    <div class="desc" ref="desc">
      {{ banner.description }}
    </div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";

export default {
  components: {
    ImageLoader,
  },
  props: {
    banner: {
      type: Object,
      required: true,
    },
    indexchange: {
      type: Boolean,
    },
  },
  data() {
    return {
      titleWidth: 0,
      descWidth: 0,
      containerWidth: 0,
      containerHeight: 0,
      disX: 0,
      disY: 0,
      mousePerX: 0.1,
      mousePerY: 0.5,
    };
  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.desc.clientWidth;

    this.containerWidth = this.$refs.container.clientWidth;
    this.containerHeight = this.$refs.container.clientHeight;

    this.disX = Math.floor(this.containerWidth * 0.08);
    this.disY = Math.floor(this.containerHeight * 0.08);

    this.mousePerX = 0.5;
    this.mousePerY = 0.5;
  },
  methods: {
    mousemove(e) {
      this.mousePerX = e.offsetX / this.containerWidth;
      this.mousePerY = e.offsetY / this.containerHeight;
      this.calcPosition();
    },
    mouseleave(e) {
      this.mousePerX = 0.5;
      this.mousePerY = 0.5;
    },
    textTransition() {
      this.$refs.title.style.width = 0;
      this.$refs.title.clientWidth;
      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.width = this.titleWidth + "px";

      this.$refs.desc.style.width = 0;
      this.$refs.desc.clientWidth;
      this.$refs.desc.style.opacity = 1;
      this.$refs.desc.style.width = this.descWidth + "px";
    },
    calcPosition() {
      return {
        left: -this.mousePerX * this.disX + "px",
        top: -this.mousePerY * this.disY + "px",
      };
    },
  },
  computed: {},
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.carousel-item-container {
  position: relative;
  .img-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .image-loader-container {
      width: 110%;
      height: 110%;
      transition: 0.5s;
      position: absolute;
    }
  }
}

.title,
.desc {
  position: absolute;
  left: 2vw;
  color: #fff;
  text-shadow: 1px 0px 0px rgba(0, 0, 0, 0.3), -1px 0px 0px rgba(0, 0, 0, 0.3),
    0px 1px 0px rgba(0, 0, 0, 0.3), 0px -1px 0px rgba(0, 0, 0, 0.3);
  letter-spacing: 5px;
  opacity: 0;
  transition: 1.2s;
  overflow: hidden;
  white-space: nowrap;
}

.title {
  font-size: 30px;
  top: calc(50% - 40px);
}
.desc {
  font-size: 18px;
  top: calc(50% + 20px);
  transition: 3s 1s ease-in-out;
}
</style>