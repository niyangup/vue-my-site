<template>
  <div ref="home">Home
    <button @click="handleClick"> 123</button>

  </div>

</template>

<script>
export default {
  name: "Home",
  methods: {
    handleClick() {
      this.$showMessage({
        content: 'hello',
        type: 'success',
        duration: 2000,
        container: this.$refs.home,
        callback: () => {
          console.log('完成了')
        }
      })
    }
  },
}
</script>

<style scoped>

</style>
