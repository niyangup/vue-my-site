<template>
  <div id="app">
    <pager :total="total" :current="current" @pageChange="handlePageChange"></pager>
  </div>
</template>

<script>

import Pager from "@/components/Pager";

export default {
  name: 'App',
  components: {
    Pager,
  },
  data() {
    return {
      current: 2,
      total: 200,
    }
  },
  methods: {
    handlePageChange(index) {
      this.current = index
    }
  },
}
</script>

<style>
#app {
}
</style>
