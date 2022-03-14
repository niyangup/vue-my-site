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
    }
  },
}
</script>

<style scoped>

</style>
