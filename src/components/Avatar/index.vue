<template>
  <div class="avatar-container">
    <img
      class="avatar"
      :src="url"
      :style="{
        width: size + 'px',
        height: size + 'px',
      }"
      alt="头像Avatar"
    />
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      requied: true,
    },
    size: {
      type: Number,
      required: false,
      default: 150,
    },
  },
};
</script>

<style scoped>
.avatar {
  border-radius: 50%;
  background-color: #000;
}
</style>