<template>
  <div class="blog-toc-container">
    <h2>文字分类</h2>
    <expand-list :list="toc" @select="handleSelect"/>
  </div>
</template>

<script>
import ExpandList from "@/views/Blog/components/ExpandList";

export default {
  name: "BlogToc",
  components: {ExpandList}, props: {
    toc: {
      type: Array,
      required: true
    },
  },
  methods: {
    handleSelect(item) {
      location.hash = item.anchor
    }
  },
}
</script>

<style scoped lang="less">

.blog-toc-container {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  height: 100%;

  h2 {
    font-weight: bold;
    padding: 0;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}

</style>
