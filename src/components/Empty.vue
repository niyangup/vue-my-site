<template>
  <div class="empty-container">
    <Icon type="empty"></Icon>
    <p>{{ text }}</p>
  </div>
</template>

<script>
import Icon from "@/components/Icon";

export default {
  name: "Empty",
  components: {Icon},
  props: {
    text: {
      type: String,
      default: '无数据'
    },
  },
}
</script>

<style scoped lang="less">
@import url(~@/style/mixin.less);
@import url(~@/style/var.less);

.empty-container {
  .self-center();

  .icon-container {
    font-size: 72px;
    color: @gray;
  }

  p {
    color: @gray;
    text-align: center;
  }
}


</style>
