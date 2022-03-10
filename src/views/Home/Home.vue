<template>
  <div class="home-container" @wheel="handleWheel" v-loading="loading">

    <ul class="carousel" ref="carousel" :style="{marginTop}" @transitionend="handleEnd">
      <li v-for="item in banners" :key="item.id">
        <carousel-item :carousel="item"></carousel-item>
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
      loading: true,
      banners: [],
      index: 0,
      carouselHeight: null,
      switching: false,
    }
  },
  async created() {
    this.banners = await getBanner()
    this.loading = false
  },
  mounted() {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },
  computed: {
    marginTop() {
      return -this.index * this.carouselHeight + 'px'
    }
  },
  methods: {
    handleResize() {
      this.carouselHeight = this.$refs.carousel.clientHeight
    },
    switchIndex(i) {
      if (this.index === i) {
        return;
      }
      this.index = i
    },
    handleWheel(e) {
      if (this.switching) {
        return
      }
      if (e.deltaY > 5) {
        if (this.index >= this.banners.length - 1) {
          this.index = this.banners.length - 1
        } else {
          this.index++
          this.switching = true
        }
      } else if (e.deltaY < -5) {
        console.log('翻动 上')
        if (this.index > 0) {
          this.index--
          this.switching = true
        } else {
          this.index = 0
        }
      }
    },
    handleEnd() {
      this.switching = false
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
    transition: 500ms;

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
