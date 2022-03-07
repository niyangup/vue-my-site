<template>
  <div id="app">
    <pager :total="total" :current="current" @pageChange="handlePageChange"></pager>
    <div class="container">
      <empty/>
    </div>
  </div>
</template>

<script>

import Pager from "@/components/Pager";
import Empty from "@/components/Empty";

export default {
  name: 'App',
  components: {
    Empty,
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

.container {
  position: relative;
  width: 300px;
  height: 300px;
  border: 3px solid #dedede;
}
</style>
