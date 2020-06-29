<template>
  <div class="banner">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item of banner" :key="item.id">
        <img :src="item.picUrl" alt />
      </van-swipe-item>
    </van-swipe>
    <ul class="nav">
      <li class="link">
        <img src="http://39.105.231.166:7002/static/img/cd1.7808faf.png" alt />
        <p>签到</p>
      </li>
      <li class="link">
        <img src="http://39.105.231.166:7002/static/img/cd1.7808faf.png" alt />
        <p>礼券</p>
      </li>
      <li class="link">
        <img src="http://39.105.231.166:7002/static/img/cd1.7808faf.png" alt />
        <p>砍价</p>
      </li>
      <li class="link">
        <img src="http://39.105.231.166:7002/static/img/cd1.7808faf.png" alt />
        <p>专栏</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banner: []
    };
  },
  created() {
    this.http.get("https://api.it120.cc/small4/banner/list").then(msg => {
      console.log(msg);
      this.banner = msg.data.data;
    });
  }
};
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  height: 5rem;
  .nav {
    width: 100%;
    height: 1.4rem;
    background: white;
    position: absolute;
    left: 0;
    bottom: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    text-align: center;
    border-radius: 20% 20% 0 0;
    border-bottom: 0.2rem solid #f5f5f5;
    li {
      width: 25%;
      p {
        font-size: 0.3rem;
        font-size: 0.26rem;
        margin-top: 0.1rem;
        margin-bottom: -0.1rem;
      }

      img {
        width: 0.58rem;
        height: 0.58rem;
        display: block;
        margin: 0 auto;
      }
    }
  }
}
.my-swipe {
  height: 5rem;
  overflow: hidden;
}
.my-swipe .van-swipe-item img {
  width: 100%;
  margin-top: -2.5rem;
}
</style>