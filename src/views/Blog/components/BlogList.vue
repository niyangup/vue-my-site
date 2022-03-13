<template>
  <div class="blog-list-container" ref="container" v-loading="isLoading">
    <ul>
      <li v-for="item in data.rows" :key="item.id">
        <div class="thumb" v-if="item.thumb">
          <a href="#">
            <img
                :src="item.thumb"
                :alt="item.title"
                :title="item.title"
            />
          </a>
        </div>
        <div class="main">
          <router-link :to="{name:'BlogDetail',params:{id:item.id}}">
            <h2>{{ item.title }}</h2>
          </router-link>
          <div class="aside">
            <span>日期：{{ formatDate(item.createDate) }}</span>
            <span>浏览：{{ item.scanNumber }}</span>
            <span>评论{{ item.commentNumber }}</span>
            <router-link :to="{
              name:'CategoryBlog',
              params:{
                id:item.category.id
              }
            }" class="">{{ item.category.name }}
            </router-link>
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
      </li>
    </ul>
    <pager
        v-if="data.total"
        :total="data.total"
        :limit="routeInfo.limit"
        :current="routeInfo.page"
        :visible-number="10"
        @pageChange="handlePageChange"
    />

  </div>
</template>

<script>
import Pager from "@/components/Pager";
import fetchData from "@/mixins/fetchData";
import {getBlogs} from "@/api/blog";
import formatDate from "@/utils/formatDate";

export default {
  name: 'BlogList',
  mixins: [fetchData({})],
  components: {Pager},
  data() {
    return {}
  },
  methods: {
    fetchData() {
      return getBlogs(this.routeInfo.page, this.routeInfo.limit, this.routeInfo.id)
    },
    formatDate,
    handlePageChange(index) {
      if (this.routeInfo.id === -1) {
        this.$router.push({
          name: 'Blog',
          query: {
            page: index,
            limit: this.routeInfo.limit,
          }
        })

      } else {
        this.$router.push({
          name: 'CategoryBlog',
          params: {
            id: this.routeInfo.id
          },
          query: {
            page: index,
            limit: this.routeInfo.limit,
          }
        })
      }

    },
  },
  computed: {
    routeInfo() {
      const id = +this.$route.params.id || -1
      const page = +this.$route.query.page || 1
      const limit = +this.$route.query.limit || 10

      return {
        id,
        page,
        limit
      }
    }
  },
  watch: {
    async $route() {
      this.isLoading = true
      this.data = await this.fetchData()
      this.isLoading = false
      this.$refs.container.scrollTo({top: 0})

    }
  },
}
</script>

<style scoped lang="less">
@import "~@/style/var.less";

.blog-list-container {
  line-height: 1.7;
  padding: 20px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow-y: scroll;
  scroll-behavior: smooth;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}

li {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid @gray;

  .thumb {
    flex: 0 0 auto;
    margin-right: 15px;

    img {
      display: block;
      max-width: 200px;
      border-radius: 5px;
    }
  }

  .main {
    flex: 1 1 auto;

    h2 {
      margin: 0;
    }
  }

  .aside {
    font-size: 12px;
    color: @gray;

    span {
      margin-right: 15px;
    }
  }

  .desc {
    margin: 15px 0;
    font-size: 14px;
  }
}
</style>
