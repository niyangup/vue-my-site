<template>
  <div class="image-loader-container">
    <img v-if="!enableRemove" class="placeholder" :src="placeholder" alt="">
    <img class="origin"
         :src="src"
         alt=""
         @load="handleLoaded"
         :class="{loaded:isLoaded}" :style="{transition: `${duration}ms`}"
    >
  </div>
</template>

<script>
export default {
  name: "ImageLoader",
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
    },
    duration: {
      type: Number,
      default: 1000,
    }
  },
  data() {
    return {
      isLoaded: false,
      enableRemove: false,
    }
  },
  methods: {
    handleLoaded() {
      this.isLoaded = true
      setTimeout(() => {
        this.enableRemove = true
        this.$emit('loaded')
      }, this.duration)
    }
  },
}
</script>

<style scoped lang="less">

.image-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    left: 0;
    top: 0;

    &.placeholder {
      filter: blur(2vw);
      opacity: 1;
    }

    &.origin {
      opacity: 0;
    }

    &.loaded {
      opacity: 1;
    }
  }
}

</style>
