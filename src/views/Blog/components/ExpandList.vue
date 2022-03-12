<template>

  <div class="expand-list-container">
    <ul>
      <li v-for="(item,i) in list " :key="i" @click="handleClick(item)">
        <span :class="{active:item.isSelect}">{{ item.name }}</span>
        <span :class="{active:item.isSelect}" v-if="item.aside"> {{ item.aside }} </span>
        <ExpandList :list="item.children" @select="handleClick(item)"></ExpandList>
      </li>
    </ul>

  </div>

</template>

<script>
export default {
  name: "ExpandList",
  props: {
    /**
     * {
     *   name:'显示的问题',
     *   isSelect:true //是否选中
     *   children:[{name:'子级节点'},isSelect:false,children:[]]
     * }
     */
    list: {
      type: Array,
      default: () => []
    },
  },
  methods: {
    handleClick(item) {
      if (!item.isSelect) {
        this.$emit('select', item)
      }
    }
  },
}
</script>

<style scoped lang="less">
@import "~@/style/var.less";

.expand-list-container {
  ul {
    list-style: none;
    padding: 0;
  }

  .expand-list-container {
    margin: 1em;
  }

  li {
    min-height: 40px;
    line-height: 40px;
    cursor: pointer;

    .active {
      font-weight: bold;
      color: @warn;
    }
  }
}

</style>
