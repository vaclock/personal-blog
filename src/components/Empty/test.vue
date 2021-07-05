<template>
  <div class="wrap">
    <Empty />
  </div>
</template>

<script>
import Empty from "./";
export default {
  components: {
    Empty,
  },
};
</script>

<style>
.wrap {
  position:relative;
  width:500px;
  height:500px;
  margin:0 auto;
  border:2px solid;
}
</style>