<template>
  <div class="blog-main-container">
    <h1>{{ blog.title }}</h1>
    <div class="aside">
      <span>日期：{{ formatDate(blog.createDate) }}</span>
      <span>浏览：{{ blog.scanNumber }}</span>
      <span> <a href="#data-form-container">评论{{ blog.commentNumber }}</a></span>
      <span>
          <router-link :to="{
              name:'CategoryBlog',
              params:{
                id:blog.category.id
              }
            }" class="">{{ blog.category.name }}
        </router-link>
        </span>
    </div>

    <div class="main" v-html="blog.htmlContent">
    </div>
  </div>
</template>

<script>

import formatDate from "@/utils/formatDate";

export default {
  name: "BlogMain",
  props: {
    blog: {
      type: Object,
      required: true
    },
  },
  methods: {
    formatDate,
  },
}
</script>

<style scoped lang="less">
@import "~@/style/var.less";
@import "~@/style/markdown.css";

.blog-main-container {
  .aside {
    font-size: 12px;
    color: @gray;

    span, a {
      margin-left: 8px;
    }

  }
}

</style>
