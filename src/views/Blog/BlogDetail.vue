<template>
  <div class="detail-container">
    <layout>
      <template v-slot:default>
        <div class="main-container" v-loading="isLoading">
          <div v-if="data">
            <blog-main :blog="data"></blog-main>
          </div>
          <blog-comment></blog-comment>
        </div>
      </template>
      <template v-slot:right>
        <div class="right-container" v-loading="isLoading">
          <blog-toc :toc="data.toc" v-if="data"></blog-toc>
        </div>
      </template>
    </layout>
  </div>
</template>

<script>
import Layout from "@/components/Layout";
import BlogMain from "@/views/Blog/components/BlogMain";
import BlogToc from "@/views/Blog/components/BlogToc";
import fetchData from "@/mixins/fetchData";
import {getBlog} from "@/api/blog";
import BlogComment from "@/views/Blog/components/BlogComment";

export default {
  name: "BlogDetail",
  components: {BlogComment, BlogToc, BlogMain, Layout},
  mixins: [fetchData(null)],
  methods: {
    fetchData() {
      return getBlog(this.$route.params.id)
    }
  },
}
</script>

<style scoped lang="less">
.detail-container {
  height: 100%;
}

.main-container {
  height: 100%;
  box-sizing: border-box;
  padding: 15px;
  position: relative;
  overflow: scroll;
}

.right-container {
  width: 300px;
  height: 100%;
  overflow-y: scroll;
  position: relative;
}

</style>
