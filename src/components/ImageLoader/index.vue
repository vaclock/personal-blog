<template>
  <div class="image-loader-container">
    <img
      :src="placeholder"
      alt="占位图片"
      class="placeholder"
      v-if="!everythingDone"
    />
    <img
      :src="src"
      alt="图片"
      @load="imgLoaded()"
      :style="{
        opacity: originOpacity,
        transition: `${duration}ms`,
      }"
    />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      duration: 500,
    },
  },
  data() {
    return {
      originLoaded: false,
      everythingDone: false,
    };
  },
  computed: {
    originOpacity() {
      return this.originLoaded ? 1 : 0;
    },
  },
  methods: {
    imgLoaded() {
      this.originLoaded = true;
      setTimeout(() => {
        this.$emit("load");
        this.everythingDone = true;
      }, this.duration);
    },
  },
};
</script>

<style lang="less" scoped>
.image-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    position: absolute;
    transition: all 0.5s;
    left: 0px;
    top: 0px;
    object-fit: cover;
    &.placeholder {
      filter: blur(2vw);
    }
  }
}
</style>