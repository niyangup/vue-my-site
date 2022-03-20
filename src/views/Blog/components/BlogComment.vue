<template>

  <div class="blog-comment-container">
    <MessageArea
        title="评论列表"
        :sub-title="`(${this.data.total})`"
        :is-list-loading="isLoading"
        :list="data.rows"
        @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData";
import {getComments, postComment} from "@/api/blog";

export default {
  name: "BlogComment",
  mixins: [fetchData({total: 0, rows: []})],
  components: {MessageArea},
  data() {
    return {
      page: 1,
      limit: 10
    }
  },
  created() {
    this.$bus.$on('mainScroll', this.handleScroll)
  },
  destroyed() {
    this.$bus.$off('mainScroll', this.handleScroll)
  },
  methods: {
    fetchData() {
      return getComments(this.$route.params.id, this.page, this.limit)
    },
    async handleSubmit(formData, callback) {
      const resp = await postComment({
        blogId: this.$route.params.id,
        ...formData
      })
      this.data.rows.unshift(resp)
      this.data.total++
      callback('评论成功')
    },
    async fetchMore() {
      this.isLoading = true
      this.page++
      const resp = await this.fetchData()
      this.data.total = resp.total
      this.data.rows = this.data.rows.concat(resp.rows)
      this.isLoading = false
    },
    async handleScroll(dom) {
      if (this.isLoading) {
        return
      }
      const range = 100
      const dec = Math.abs(dom.clientHeight + dom.scrollTop - dom.scrollHeight)
      if (dec <= range) {
        await this.fetchMore()
      }
    }
  },
}
</script>

<style scoped>

</style>
