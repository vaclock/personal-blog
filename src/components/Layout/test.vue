<template>
  <div class="test-container">
    <Layout>
      <template v-slot:left>
        <div class="left">左边栏内容</div>
      </template>
      <div class="main">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        molestiae aliquid voluptatum iusto quos aliquam nostrum tempora, nisi
        tenetur eveniet consectetur commodi assumenda deserunt laborum quae unde
        quam amet et vel dolorem eius? Explicabo amet iure eius, pariatur sed
        dolorem corporis soluta et ad. Animi vel tempora in eius numquam amet
        magnam, veniam dolorem? Blanditiis fugiat quis perspiciatis quae
        voluptate dolorem placeat? Omnis nostrum sunt dolores, qui delectus odio
        dolor commodi exercitationem dicta ullam molestias minima saepe tenetur,
        veniam, ratione reprehenderit eaque eius adipisci suscipit ab magni unde
        quisquam doloremque vel. Saepe vel quas debitis aspernatur dolorum
        aperiam nam facilis.
      </div>
      <template v-slot:right>
        <div class="right">右边区域</div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./";
export default {
  components: {
    Layout,
  },
};
</script>

<style scoped lang="less">
.test-container{
    width:80%;
}
.left {
  width: 200px;
  background-color: #008c8c;
}
.main {
  width: 100%;
  height:100%;
  background-color: #abcdef;
  white-space: nowrap;
}
.right {
  width: 300px;
  background-color: #123456;
}
</style>