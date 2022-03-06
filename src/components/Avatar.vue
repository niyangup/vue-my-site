<template>
  <img :src="url" alt="" :style="{width:100+'px',height:100+'px'}" class="avatar">
</template>

<script>
export default {
  name: "Avatar",
  props: {
    url: {
      type: String,
      default: 'https://img0.baidu.com/it/u=4010987200,1545408762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
    },
    size: {
      type: Number,
      default: 100
    }
  },
}
</script>

<style scoped>

img.avatar {
  border-radius: 50%;
  object-fit: cover;
}

</style>
