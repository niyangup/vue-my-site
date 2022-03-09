<template>
  <div class="carousel-container">
    <div class="img">
      <image-loader :src="carousel.bigImg" :placeholder="carousel.midImg" @loaded="handleLoaded"/>
    </div>

    <div class="title" ref="title">
      {{ carousel.title }}
    </div>

    <div class="desc" ref="desc">
      {{ carousel.description }}
    </div>

  </div>

</template>

<script>
import ImageLoader from "@/components/ImageLoader";

export default {
  name: "CarouselItem",
  components: {ImageLoader},
  props: ['carousel'],
  methods: {
    handleLoaded() {
      this.$refs.title.style.opacity = "1"
      this.$refs.desc.style.opacity = "1"
    }
  },
}
</script>

<style scoped lang="less">

@import "~@/style/var.less";

.carousel-container {
  width: 100%;
  height: 100%;
  background: @dark;
  position: relative;

  .img {
    width: 110%;
    height: 110%;
  }

  .title, .desc {
    color: white;
    position: absolute;
  }

  .title {
    top: calc(50% - 30px);
    left: 0;
    letter-spacing: 3px;
    font-size: 2em;
    text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: 1000ms;
  }

  .desc {
    left: 0;
    top: calc(50% + 30px);
    font-size: 1.2em;
    opacity: 0;
    transition: 6000ms;
  }
}

</style>
