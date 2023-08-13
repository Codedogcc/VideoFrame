<template>
  <div class="windowvideo">
    <VideoWindow :imgurl="imgurl" :videourl="videourl" />
  </div>
</template>

<script>
import VideoWindow from '../views/VideoWindow.vue';
export default {
  name: 'HomePage',
  components: {
    VideoWindow
  },
  data() {
    return {
      imgurl:
        'https://tse2-mm.cn.bing.net/th/id/OIP-C.Ibx5SSeZTLfll68KuL7dpQAAAA?pid=ImgDet&rs=1', // 封面链接
      videourl: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' //视频链接
    };
  }
};
</script>

<style lang="less" scoped>
// 配置视频窗口大小及
.windowvideo {
  width: 500px;
  height: 500px;
}
</style>