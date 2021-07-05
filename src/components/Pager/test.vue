<template>
    <Pager :currentPage="current" :total="total" @pagechange="handlePageChange($event)"/>
</template>

<script>

import Pager from "./"
export default {
  name: 'pager',
  data() {
    return {
      current:1,
      total:500
    }
  },
  components: {
    Pager
  },
  methods: {
    handlePageChange(newPage) {
      this.current = newPage;
    }
  }
}

</script>

<style scoped>
</style>
