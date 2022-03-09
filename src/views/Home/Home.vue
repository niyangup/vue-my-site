<template>
  <div class="home-container">

    <ul class="carousel" ref="carousel" :style="{marginTop}">
      <li v-for="item in banners" :key="item.id">
        <carousel-item></carousel-item>
        <div>{{ item.id }}</div>
      </li>
    </ul>

    <div class="icon icon-up" v-show="index>0" @click="switchIndex(index-1)">
      <icon type="arrowUp"></icon>
    </div>
    <div class="icon icon-down" v-show="index<banners.length-1" @click="switchIndex(index+1)">
      <icon type="arrowDown"></icon>
    </div>

    <ul class="indicator">
      <li :class="{active: index===i}" v-for="(item,i) in banners" :key="item.id" @click="switchIndex(i)">
      </li>
    </ul>

  </div>

</template>

<script>
import {getBanner} from "@/api/banner";
import CarouselItem from "@/views/Home/CarouselItem";
import Icon from "@/components/Icon";

export default {
  name: "Home",
  components: {Icon, CarouselItem},
  data() {
    return {
      banners: [],
      index: 0,
      carouselHeight: null,
    }
  },
  async created() {
    this.banners = await getBanner()
  },
  mounted() {
    this.carouselHeight = this.$refs.carousel.clientHeight
    console.log(this.carouselHeight)
  },
  computed: {
    marginTop() {
      return -this.index * this.carouselHeight + 'px'
    }
  },
  methods: {
    switchIndex(i) {
      if (this.index === i) {
        return;
      }
      this.index = i
    }
  },
}
</script>

<style scoped lang="less">
@import "~@/style/var.less";

.home-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .carousel {
    width: 100%;
    height: 100%;

    li {
      width: 100%;
      height: 100%;
    }
  }

  ul {
    margin: 0;
    list-style: none;
    padding: 0;
  }

  .icon {
    font-size: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
    @space: 25px;
    color: @gray;
    cursor: pointer;

    &.icon-up {
      top: @space;
      animation: jump-up 2s infinite;
    }

    &.icon-down {
      top: auto;
      bottom: @space;
      animation: jump-down 2s infinite;
    }
  }

  .indicator {
    position: absolute;
    left: auto;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);

    li {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: @words;
      margin-bottom: 10px;
      cursor: pointer;
      box-sizing: border-box;
      border: 1px solid #ffffff;
      transition: 500ms;

      &.active {
        background: white;
      }
    }
  }
}

@jump: 5px;
@keyframes jump-up {
  0% {
    transform: translate(-50%, @jump);
  }
  50% {
    transform: translate(-50%, -@jump);
  }
  100% {
    transform: translate(-50%, @jump);
  }
}

@keyframes jump-down {
  0% {
    transform: translate(-50%, -@jump);
  }
  50% {
    transform: translate(-50%, @jump);
  }
  100% {
    transform: translate(-50%, -@jump);
  }
}

</style>
