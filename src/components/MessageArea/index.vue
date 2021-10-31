<template>
  <div class="message-area-container">
    <FormContent v-on="$listeners"/>
    <h3>
      {{ title }}
      <span class="aside">({{list.length}})</span>
    </h3>
    <DataList :data="list" />
  </div>
</template>

<script>
import DataList from "./DataList.vue";
import FormContent from "./FormContent";

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    list: {
      type: Array,
      default: ()=>[]
    }
  },
  components: {
    DataList,
    FormContent,
  },
  methods: {
  }
};
</script>

<style>
</style>