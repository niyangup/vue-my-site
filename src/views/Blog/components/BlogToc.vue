<template>
  <div class="blog-toc-container">
    <h2>文字分类</h2>
    <expand-list :list="toWithSelect" @select="handleSelect"/>
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
  data() {
    return {
      activeAnchor: '',
    }
  },
  created() {
    this.$bus.$on('mainScroll', this.setSelect)
  },
  methods: {
    handleSelect(item) {
      location.hash = item.anchor
    },
    setSelect() {
      const range = 200
      for (const dom of this.dom) {
        if (dom) {
          if (dom.getBoundingClientRect().top < range) {
            this.activeAnchor = dom.id
          }
        }
      }
    }
  },
  computed: {
    toWithSelect() {
      const getToc = (toc = []) => {
        return toc.map(t => ({
          ...t,
          isSelect: t.anchor === this.activeAnchor,
          children: getToc(t.children)
        }))
      }
      return getToc(this.toc)
    },
    dom() {
      const doms = []

      function addToDoms(toc) {
        for (const t of toc) {
          doms.push(document.getElementById(t.anchor))
          if (t.children && t.children.length > 0) {
            addToDoms(t.children)
          }
        }
      }

      addToDoms(this.toc)

      return doms
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
