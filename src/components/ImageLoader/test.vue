<template>
  <div class="test-container">
    <Imag
      src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
      placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
      @load="handle"
    />
  </div>
</template>

<script>
import Imag from "./";
export default {
  name: "ImageLoader",
  components: {
    Imag,
  },
  methods:{
    handle(){
      console.log('load事件触发，图片加载完成')
    }
  }
};
</script>

<style scoped>
.test-container{
  width:500px;
  height:400px;
  margin:0 auto;
  border:3px solid;
}
</style>