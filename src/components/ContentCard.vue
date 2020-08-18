<template>
  <div class="m-auto border border-blue-600 max-w-xs h-auto rounded shadow-lg">
    <!-- 콘텐츠 이미지 시작 -->
    <div class="w-56 m-auto overflow-hidden">
      <img src="../assets/logo.png" alt="Sunset in the mountains" class="w-56 min-w-0" />
    </div>
    <!-- 콘텐츠 이미지 끝 -->

    <!-- 콘텐츠 내용 3행 시작 -->
    <div class="flex px-2 py-1 w-full overflow-hidden">
      <div class="w-full">
        <div class="float-left text-left">
          <div class="inline-block bg-green-600 text-white text-xs px-3 py-1 m-2">
            <div class="flex items-center align-middle">
              <span>합격</span>
            </div>
          </div>
        </div>
        <div class="flex float-right text-right">
          <div class="inline-block rounded-full bg-blue-300 text-white text-xs px-3 py-1 m-2">
            <div class="flex items-center align-middle">
              <span>VR-ID JE00430381</span>
            </div>
          </div>
          <button @click="show = !show" class="align-middle">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 
                2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
              />
            </svg>
          </button>
          <div class="absolute w-40" style="margin-left:170px;">
            <transition name="fade">
              <div
                v-if="show"
                class="bg-blue-100 border border-blue-900 text-black px-4 py-2 leading-6 text-left"
              >
                <p class="font-bold">다운로드</p>
                <p class="font-bold">사용자 폐기</p>
                <p class="font-bold">다운로드</p>
                <p class="font-bold">원본 업데이트</p>
                <p class="font-bold">전송</p>
                <p class="font-bold">등록 요청</p>
                <p class="font-bold">XSAN으로 전송</p>
                <p class="font-bold">작업흐름 보기</p>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>

    <div class="h-14 p-2 overflow-hidden break-words">
      <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</div>
    </div>

    <div class="mx-2 px-2 py-2 border-t border-blue-900 h-full overflow-hidden">
      <div class="w-full">
        <div class="float-left text-left">
          <slot name="avatar"></slot>
        </div>
        <div class="float-right text-right pt-3">
          <slot name="very-good"></slot>
        </div>
      </div>
    </div>
    <!-- 콘텐츠 내용 3행 끝 -->
  </div>
</template>

<script>
export default {
  name: 'ContentCard',
  components: {},
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