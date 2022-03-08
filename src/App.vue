<template>
  <div id="app">
    <div class="container">
      <Contact/>
    </div>
  </div>
</template>

<script>


import Contact from "@/components/Contact";

export default {
  name: 'App',
  components: {
    Contact
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
  background: #202020;
}
</style>
