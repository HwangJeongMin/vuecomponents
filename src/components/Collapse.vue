<template>
  <div>
    <div class="flex break-words bg-white">
      <div class="relative w-full">
        <strong class="font-bold float-left pt-1">{{ title }}</strong>
        <span class="float-right top-0 bottom-0 right-0">
          <button @click="show = !show">
            <upSvg v-if="show"></upSvg>
            <downSvg v-else></downSvg>
          </button>
        </span>
      </div>
    </div>
    <div class="bg-white overflow-hidden">
      <transition name="collapse">
        <div v-if="show">
          <slot name="content"></slot>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Collapse',
  props: ['postData'],
  components: {
    upSvg: () => import('./UpSvg.vue'),
    downSvg: () => import('./DownSvg.vue'),
  },
  data() {
    return {
      show: false,
      title: this.postData.title,
    };
  },
};
</script>

<style>
.collapse-enter-active,
.collapse-leave-active {
  transition: all 0.1s ease;
}
.collapse-enter,
.collapse-leave-to {
  transform: translateY(-100px);
}
</style>
