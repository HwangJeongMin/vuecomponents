<template>
  <div class="player">
    <video-player
      class="vjs-custom-skin"
      ref="videoPlayer"
      :options="playerOptions"
      :playsinline="true"
    >
    </video-player>
  </div>
</template>

<script>
import 'video.js/dist/video-js.css';

import { videoPlayer } from 'vue-video-player';

export default {
  components: { videoPlayer },
  data() {
    return {
      // videojs options
      playerOptions: {
        height: '360',
        autoplay: true,
        muted: true,
        language: 'ko',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [
          {
            type: 'video/mp4',
            // mp4
            src: 'http://vjs.zencdn.net/v/oceans.mp4',
            // webm
            // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
          },
        ],
        poster: 'https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg',
      },
    };
  },
  mounted() {
    // console.log('this is current player instance object', this.player)
    setTimeout(() => {
      console.log('dynamic change options', this.player);
      // change src
      // this.playerOptions.sources[0].src = 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm';
      // change item
      // this.$set(this.playerOptions.sources, 0, {
      //   type: "video/mp4",
      //   src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
      // })
      // change array
      // this.playerOptions.sources = [{
      //   type: "video/mp4",
      //   src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
      // }]
      this.player.muted(false);
    }, 5000);
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    },
  },
  methods: {},
};
</script>

<style></style>
