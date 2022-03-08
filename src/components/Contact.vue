<template>
  <ul class="contact-container">
    <li>
      <a href="#">
        <div class="icon">
          <icon type="github"/>
        </div>
        <span>niyangup</span>
      </a>
      <div class="pop">
        <img src="https://img0.baidu.com/it/u=4010987200,1545408762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" alt="">
      </div>
    </li>
    <li>
      <a href="#">
        <div class="icon">
          <icon type="qq"/>
        </div>
        <span>niyangup</span>
      </a>
      <div class="pop">
        <img src="https://img0.baidu.com/it/u=4010987200,1545408762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" alt="">
      </div>
    </li>
    <li>
      <a href="#">
        <div class="icon">
          <icon type="mail"/>
        </div>
        <span>niyangup</span>
      </a>
      <div class="pop">
        <img src="https://img0.baidu.com/it/u=4010987200,1545408762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" alt="">
      </div>
    </li>
    <li>
      <a href="#">
        <div class="icon">
          <icon type="weixin"/>
        </div>
        <span>niyangup</span>
      </a>
      <div class="pop">
        <img src="https://img0.baidu.com/it/u=4010987200,1545408762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" alt="">
      </div>
    </li>

  </ul>
</template>

<script>
import Icon from "@/components/Icon";

export default {
  name: "Contact",
  components: {Icon}

}
</script>

<style scoped lang="less">
@import url(~@/style/var.less);
@import url(~@/style/mixin.less);

.contact-container {
  width: 100%;
  list-style: none;
  padding: 20px;
  margin: 0;
  margin-top: 100px;

  @itemHeight: 30px;

  li {
    position: relative;
    height: @itemHeight;
    line-height: @itemHeight;
    margin: 14px 0;

    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }

    a {
      display: flex;
      align-items: center;
      font-size: 26px;
      color: @gray;
      cursor: pointer;

      .icon {
        width: 36px;
      }
    }

    .pop {
      position: absolute;
      background: white;
      border-radius: 5px;
      bottom: @itemHeight+5px;
      padding: 10px 15px;
      left: 0;
      transform: scaleY(0);
      transform-origin: center bottom;
      transition: all 500ms;

      &:after {
        content: '';
        position: absolute;
        width: 8px;
        height: 8px;
        background: #fff;
        left: 50%;
        bottom: -4px;
        transform: translateX(-50%) rotate(45deg);
      }

      img {
        width: 150px;
        height: 150px;
        object-fit: cover;
        box-sizing: border-box;
      }
    }
  }
}


</style>
