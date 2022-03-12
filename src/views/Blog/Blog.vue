<template>
  <div class="blog-container">
    <layout>
      <template v-slot:default>
        <bloc-list></bloc-list>
      </template>
      <template v-slot:right>
        <blog-category></blog-category>
      </template>
    </layout>
  </div>
</template>

<script>
import Layout from "@/components/Layout";
import BlogCategory from "@/views/Blog/components/BlogCategory";
import BlocList from "@/views/Blog/components/BlogList";

export default {
  name: "Blog",
  components: {
    BlocList,
    BlogCategory,
    Layout
  },
}
</script>

<style scoped lang="less">

.blog-container {
  width: 100%;
  height: 100%;
}

</style>
