<template>
  <div class="site-aside-container">
    <div class="avatar">
      <avatar></avatar>
    </div>
    <Menu></Menu>
    <Contact></Contact>
    <p class="foot">这里是备案号</p>
  </div>

</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "@/components/SiteAside/components/Menu";
import Contact from "@/components/SiteAside/components/Contact";

export default {
  name: "SiteAside",
  components: {
    Contact,
    Menu,
    Avatar
  },
}
</script>

<style scoped lang="less">
@import "~@/style/var.less";

.site-aside-container {
  width: 100%;
  height: 100%;
  background: @dark;
  padding: 20px 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;

  .avatar {
    text-align: center;
  }

  .foot{
    text-align: center;
    font-size: 12px;
    color: @gray ;
  }
}

</style>
