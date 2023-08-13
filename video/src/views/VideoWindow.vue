<template>
  <div class="video">
    <video-player
      class="video-player vjs-custom-skin"
      ref="videoPlayer"
      :playsinline="true"
      :options="playerOptions"
      @timeupdate="onPlayerTimeupdate($event)"
      @ready="playerReadied"
    ></video-player>

    <button
      style="margin-left: 40%; margin-top: 5px"
      variant="outline-primary"
      @click="goBack"
    >
      后退
    </button>

    <button
      style="margin-left: 20px; margin-top: 5px"
      variant="outline-primary"
      @click="goFast"
    >
      快进
    </button>
  </div>
</template>

<script>
export default {
  name: 'VideoWindow',

  props: ['url', 'videourl'],

  data() {
    return {
      playerOptions: {
        playbackRates: [0.5, 1.0, 1.5, 2.0], //播放速度

        currentTime: '00:00',

        autoplay: false, //如果true,浏览器准备好时开始回放。

        muted: false, // 默认情况下将会消除任何音频。

        loop: false, // 导致视频一结束就重新开始。

        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）

        language: 'zh-CN',

        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）

        fluid: false, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。

        sources: [
          {
            type: 'video/mp4', //这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目

            // src: require('C:/Users/codecc/Desktop/food.mp4') //本地视频使用方式，本地图片引入亦如此

            src: this.videourl //父组件传的视频地址
          }
        ],

        poster: this.url, //父组件传的封面地址

        width: document.documentElement.clientWidth, //播放器宽度

        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。

        controlBar: {
          timeDivider: true,

          durationDisplay: true,

          remainingTimeDisplay: false,

          fullscreenToggle: true //全屏按钮
        }
      },

      //一开始视频观看时长，可用于记录视频播放的时间，下一次直接从这个时间开始播放

      gklog: ''
    };
  },

  methods: {
    //视频快进

    goFast() {
      this.gklog += 5;

      // console.log(" 快进", this.gklog,this.$refs.videoPlayer);

      this.$refs.videoPlayer.player.currentTime(this.gklog);
    },

    //视频后退

    goBack() {
      this.gklog -= 5;

      // console.log(" 后退", this.gklog,this.$refs.videoPlayer);

      this.$refs.videoPlayer.player.currentTime(this.gklog);
    },

    /* 设置视频进度 */

    playerReadied(player) {
      player.currentTime(this.gklog);

      // console.log("视频初始时长",this.gklog)
    },

    onPlayerTimeupdate(player) {
      this.gklog = player.cache_.currentTime; //获取当前播放时间

      // console.log(" onPlayerTimeupdate!", this.gklog);
    }
  },

  watch: {
    gklog: function () {}
  },
  mounted() {
    console.log(this.url, 'thisurl', this.videourl, 'thisvideourl');
  }
};
</script>

<style scoped>
.video-js .vjs-icon-placeholder {
  width: auto;

  height: auto;

  display: block;
}

.video-player {
  width: auto;

  height: auto;
}
</style>
