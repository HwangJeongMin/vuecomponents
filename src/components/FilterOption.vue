<template>
  <div class="md:w-1/3">
    <div class="float-right mr-1">
      <button @click="show = !show">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          style="float:right"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 
                            2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
          />
        </svg>
      </button>
    </div>
    <div class="absolute float-left" style="margin-left:5%;">
      <transition name="fade">
        <div v-if="show" class="bg-blue-100 border border-blue-900 text-black px-4 py-2 leading-6">
          <p class="font-bold">필터 초기화</p>
          <p class="font-bold">필터 저장</p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.left-310 {
  left: 310px;
}
</style>
