<template>
  <div id="app">
    <div class="container">
      <ImageLoader
          src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
          placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
          @loaded="handleLoaded"
      />
    </div>
  </div>
</template>

<script>

import ImageLoader from "@/components/ImageLoader";

export default {
  name: 'App',
  components: {
    ImageLoader
  },
  methods: {
    handleLoaded() {
      console.log(123)
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
