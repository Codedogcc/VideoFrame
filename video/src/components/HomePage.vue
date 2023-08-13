<template>
  <div class="windowvideo">
    <VideoWindow :imgurl="imgurl" :videourl="videourl" />
  </div>
</template>

<script>
import VideoWindow from '../views/VideoWindow.vue'; // 封装好的视频组件
export default {
  name: 'HomePage',
  components: {
    VideoWindow
  },
  data() {
    return {
      imgurl:
        'https://p4.qhimg.com/bdr/__85/t01ac9fe85269fd8f50.jpg', // 封面链接
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