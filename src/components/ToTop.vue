<template>
  <div class="to-top-container" v-if="isShow" @click="handleToTop">Top</div>
</template>

<script>
export default {
  name: "ToTop",
  data() {
    return {
      isShow: false,
      dom: null,
    }
  },
  methods: {
    handleScroll(dom) {
      this.dom = dom
      if (dom.scrollTop > 1000) {
        this.isShow = true
      } else {
        this.isShow = false
      }
    },
    handleToTop() {
      if (this.dom) {
        this.dom.scrollTop = 0
      }
    }
  },
  created() {
    this.$bus.$on('mainScroll', this.handleScroll)
  },
  destroyed() {
    this.$bus.$off('mainScroll', this.handleScroll)
  }
}
</script>

<style scoped lang="less">

@import "~@/style/var.less";

.to-top-container {
  position: absolute;
  display: flex;
  background: @primary;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  bottom: 50px;
  right: 50px;
  color: white;
  cursor: pointer;
}

</style>
