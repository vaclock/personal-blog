<template>
  <div class="test-container">
    <RightList :list="list" @select="handlerSelect($event)" />
  </div>
</template>

<script>
import RightList from "./";
export default {
  components: {
    RightList,
  },
  data() {
    return {
      list: [
        {
          name: "a",
          isSelected: true,
          children: [
            { name: "a-1", isSelected: false },
            { name: "a-2", isSelected: false },
            { name: "a-3", isSelected: false },
            { name: "a-4", isSelected: false },
          ],
        },
        { name: "b", isSelected: false },
        { name: "c", isSelected: false },
        { name: "d", isSelected: false },
        { name: "e", isSelected: false },
      ],
    };
  },
  methods: {
    handlerSelect(item) {
      console.log(item);
    },
  },
};
</script>

<style>
</style>