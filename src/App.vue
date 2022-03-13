<template>
  <div class="app-container">
    <Layout>

      <template v-slot:left>
        <div class="aside">
          <site-aside></site-aside>
        </div>
      </template>

      <div class="main">
        <router-view></router-view>
      </div>
    </Layout>
  </div>
</template>

<script>


import Layout from "@/components/Layout";
import SiteAside from "@/components/SiteAside/SiteAside";

export default {
  name: 'App',
  components: {SiteAside, Layout},
}
</script>

<style scoped lang="less">

.app-container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  .aside {
    width: 250px;
    height: 100%;
  }

  .main {
    width: 100%;
    height: 100%;
  }
}
</style>
