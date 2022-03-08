<template>
  <nav class="menu-container">
    <router-link
        class="link"
        :to="{name:item.name}"
        :exact="item.exact"
        v-for="item in items" :key="item.name">
      <div class="icon">
        <icon :type="item.icon"/>
      </div>
      <span>{{ item.title }}</span>
    </router-link>
  </nav>

</template>

<script>
import Icon from "@/components/Icon";

export default {
  name: "Menu",
  components: {Icon},
  data() {
    return {
      items: [
        {
          name: 'Home',
          title: '首页',
          icon: 'home',
          exact: true,
        },
        {
          name: 'Blog',
          title: '文章',
          icon: 'blog',
          exact: false,
        },
        {
          name: 'About',
          title: '关于',
          icon: 'about',
          exact: true,
        },
        {
          name: 'Project',
          title: '项目&效果',
          icon: 'code',
          exact: true,
        },
        {
          name: 'Message',
          title: '留言板',
          icon: 'chat',
          exact: true,
        },

      ],
    }
  },
}
</script>

<style scoped lang="less">
@import "~@/style/var.less";

.menu-container {
  color: @gray;
  margin: 24px 0;

  .link {
    padding: 0 50px;
    display: flex;
    align-items: center;
    height: 45px;
    transition: all 500ms;

    &.router-link-active {
      background: darken(@words, 1%);
    }

    .icon {
      width: 24px;
    }

    &:hover {
      color: white;
    }

  }
}

</style>
