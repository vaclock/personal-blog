<template>
  <ul class="concat-container">
    <li class="item">
      <a href="http://github.com/vaclock">
        <Icon type="github" />
        <span>@vaclock</span>
      </a>
    </li>
    <li class="item">
      <a href="mailto:lee.ownclock@gmail.com">
        <Icon type="mail" />
        <span>1994166883@qq.com</span>
      </a>
    </li>

    <li class="item">
      <a
        href="tencent://message/?Menu=yes&uin=1994166883&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45"
      >
        <Icon type="qq" />
        <span>1994166883</span>
      </a>
      <div class="pop">
        <img src="~@/assets/weixin.jpg" alt="微信二维码" />
      </div>
    </li>
    <li class="item">
      <a>
        <Icon type="weixin" />
        <span>IU-VAE</span>
      </a>

      <div class="pop">
        <img src="~@/assets/weixin.jpg" alt="微信二维码" />
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon/index.vue";
import "@/styles/public.less";
export default {
  components: {
    Icon,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.icon-container {
  font-size: 26px;
  width: 36px;
}

.concat-container {
  
  width: 100%;
  padding: 20px;
  box-sizing:border-box;
  li.item {
    a{
      font-size:14px;
    }
    color: @gray;
    height: 30px;
    line-height: 30px;
    margin: 14px 0px;
    
    position: relative;
    cursor: pointer;

    .pop {
      position: absolute;
      transition: 0.3s;
      left: 0px;
      bottom: 35px;
      padding: 10px 15px;
      background-color: #fff;
      border-radius: 4px;
      transform-origin: center bottom;
      transform: scaley(0);
      &::before {
        width: 8px;
        height: 8px;
        content: "";
        position: absolute;
        background-color: #fff;
        left: 50%;
        transform: rotate(45deg);
        bottom: -4px;
      }
    }
    .pop img {
      width: 150px;
      height: 150px;
    }
    a {
      display: flex;
      flex:0 0 auto;
      height: 30px;
      line-height: 30px;
      &:hover {
        & + .pop {
          transform: scaley(1);
        }
      }
    }
  }
}
</style>