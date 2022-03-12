<template>
  <div class="blog-category-container" v-loading="isLoading">
    <h2>文字分类</h2>
    <expand-list :list="list" @select="handleSelect"/>
  </div>

</template>

<script>
import ExpandList from "@/views/Blog/components/ExpandList";
import fetchData from "@/mixins/fetchData";
import {getBlogTypes} from "@/api/blog";

export default {
  name: "BlogCategory",
  components: {ExpandList},
  mixins: [fetchData([])],
  methods: {
    fetchData() {
      return getBlogTypes()
    },
    handleSelect(item) {
      if (item.id === -1) {
        this.$router.push({
          name: 'Blog',
          query: {
            page: 1,
            limit: this.limit,
          }
        })
      } else {
        this.$router.push({
          name: 'CategoryBlog',
          params: {
            id: item.id
          },
          query: {
            page: 1,
            limit: this.limit,
          }
        })
      }
    },
  },
  computed: {
    id() {
      return +this.$route.params.id || -1
    },
    limit() {
      return +this.$route.query.limit || 10
    },
    list() {
      const total = this.data.reduce((a, b) => a + b.articleCount, 0)
      const result = [{name: '全部', id: -1, articleCount: total}, ...this.data]

      result.forEach(item => {
        item.isSelect = item.id === this.id
        item.aside = `${item.articleCount}篇`
      })

      return result
    },
  },
}
</script>

<style scoped lang="less">
.blog-category-container {
  width: 300px;
  padding: 20px;
  box-sizing: border-box;
  height: 100%;
  position: relative;
  overflow-y: auto;

  h2 {
    font-weight: bold;
    padding: 0;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}

</style>
