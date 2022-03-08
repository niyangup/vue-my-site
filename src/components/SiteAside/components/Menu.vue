<template>
  <nav class="menu-container">
    <a :href="item.link" :class="{selected:isSelect(item.link,item.startWith)}" v-for="item in items" :key="item.link">
      <div class="icon">
        <icon :type="item.icon"/>
      </div>
      <span>{{ item.title }}</span>
    </a>
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
          link: '/',
          title: '首页',
          icon: 'home',
        },
        {
          link: '/blog',
          title: '文章',
          icon: 'blog',
          startWith: true
        },
        {
          link: '/about',
          title: '关于',
          icon: 'about',
        },
        {
          link: '/project',
          title: '项目&效果',
          icon: 'code',
        },
        {
          link: '/message',
          title: '留言板',
          icon: 'chat',
        },

      ],
    }
  },

  methods: {
    isSelect(path, startWith = false) {
      if (startWith) {
        return location.pathname.toLowerCase().startsWith(path.toLowerCase())
      } else {
        return location.pathname.toLowerCase() === path.toLowerCase()
      }
    }
  },

}
</script>

<style scoped lang="less">
@import "~@/style/var.less";

.menu-container {
  color: @gray;
  margin: 24px 0;

  a {
    padding: 0 50px;
    display: flex;
    align-items: center;
    height: 45px;
    transition: all 500ms;

    &.selected {
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
