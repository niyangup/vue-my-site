<template>
  <div class="layout-container">

    <div class="left">
      <slot name="left"></slot>
    </div>

    <div class="main">
      <slot></slot>
    </div>

    <div class="right">
      <slot name="right"></slot>
    </div>

  </div>

</template>

<script>
export default {
  name: "Layout"
}
</script>

<style scoped lang="less">

.layout-container {
  width: 100%;
  height: 100%;
  display: flex;

  div.main {
    flex-grow: 1;
  }
}


</style>
