<template>
  <div class="icon-container">
    <i class="iconfont" :class="fontClass"></i>
  </div>
</template>

<script>
const data = {
  empty: "icon-empty",
  up: 'icon-xiangshang',
  down: 'icon-xiangxia',
  home: 'icon-home',
}
export default {
  name: "Icon",
  props: {
    type: {
      type: String,
      default: 'icon-empty'
    },
  },
  computed: {
    fontClass() {
      return data[this.type]
    }
  },
}
</script>

<style scoped>
@import "//at.alicdn.com/t/font_3002025_bwqdx5f9wan.css";

</style>
