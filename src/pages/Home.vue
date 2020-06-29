<template>
  <div class="home">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item of banner" :key="item.id">
          <img :src="item.picUrl" alt="">
      </van-swipe-item>
      
    </van-swipe>
  </div>
</template>

<script>
import axios from "axios"
export default {
     data(){
        return{
            banner:[]
        }
    },
    created() {
        axios.get("https://api.it120.cc/small4/banner/list").then((msg)=>{
            console.log(msg)
            this.banner=msg.data.data
        })
    },
};
</script>
   
<style>
.my-swipe{
    height: 200px;
    overflow: hidden;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
}
 .my-swipe .van-swipe-item img{
      width:100%
  }
</style>