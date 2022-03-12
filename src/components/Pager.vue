<template>

  <div class="pager-container" v-if="pageNumber>1">
    <a href="#" class="disable" :class="{disable:current===1}" @click="handleClick(1,$event)">|&lt;&lt;</a>
    <a href="#" class="disable" :class="{disable:current===1}" @click="handleClick(current-1,$event)">&lt;&lt;</a>
    <a href="#" :class="{active:item===current}" v-for="(item,i) in numbers" :key="i" @click="handleClick(item,$event)">
      {{ item }}</a>


    <a href="#" :class="{disable:current===pageNumber}" @click="handleClick(current+1,$event)">&gt;&gt;</a>
    <a href="#" :class="{disable:current===pageNumber}" @click="handleClick(pageNumber,$event)">&gt;&gt;|</a>

  </div>
</template>

<script>
export default {
  name: "Pager",
  props: {
    current: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 0
    },
    limit: {
      type: Number,
      default: 10
    },
    visibleNumber: {
      type: Number,
      default: 10
    },
  },
  computed: {
    pageNumber() {
      return Math.ceil(this.total / this.limit)
    },
    visibleMin() {
      let min = this.current - Math.floor(this.visibleNumber / 2)
      if (min < 1) {
        min = 1

      }
      return min
    },
    visibleMax() {
      let max = this.visibleMin + this.visibleNumber - 1
      if (max > this.pageNumber) {
        max = this.pageNumber
      }
      return max
    },
    numbers() {
      const data = []
      for (let i = this.visibleMin; i <= this.visibleMax; i++) {
        data.push(i)
      }
      return data
    }
  },
  methods: {
    handleClick(index, event) {
      event.preventDefault()
      if (index < 1) {
        index = 1
      }
      if (index > this.pageNumber) {
        index = this.pageNumber
      }
      if (index === this.current) {
        return
      }
      this.$emit("pageChange", index)
    }
  },
}
</script>

<style scoped lang="less">
@import "~@/style/var.less";

.pager-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;

  a {
    color: @primary;
    margin: 0 6px;

    &.disable {
      color: @lightWords;
      cursor: not-allowed;
    }

    &.active {
      color: @words;
      font-weight: bold;
      cursor: text;
    }
  }
}

</style>
