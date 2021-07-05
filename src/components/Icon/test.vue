<template>
  <div class="wrapper">
    <div class="item" v-for="t in types" :key="t">
      <Icon :type="t"></Icon>
      <label>{{ t }}</label>
    </div>
  </div>
</template>

<script>
import Icon, { types } from "./index";
export default {
  components: {
    Icon,
  },
  data() {
    return { types };
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 30px auto;
  width: 70%;
}
.icon-container {
  color:red;
}
.wrapper .item {
  margin: 10px 10px;
  font-size: 16px;
}

.wrapper .item label {
  margin-left: 10px;
}
</style>
