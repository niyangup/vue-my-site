<template>
  <div id="app">
    <Icon type="home"></Icon>
  </div>
</template>

<script>

import Icon from "@/components/Icon";

export default {
  name: 'App',
  components: {
    Icon
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
