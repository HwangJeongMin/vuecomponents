<template>
  <div class="flex w-full">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      class="text-main-textColor w-8 h-8 mt-4 mx-4"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path
        d="M3 18c0 .55.45 1 1 1h5v-2H4c-.55 0-1 .45-1 1zM3 6c0 .55.45 1 1 1h9V5H4c-.55 0-1 
                        .45-1 1zm10 14v-1h7c.55 0 1-.45 1-1s-.45-1-1-1h-7v-1c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 
                        1-1zM7 10v1H4c-.55 0-1 .45-1 1s.45 1 1 1h3v1c0 .55.45 1 1 1s1-.45 1-1v-4c0-.55-.45-1-1-1s-1 .45-1 1zm14 2c0-.55-.45-1-1-1h-9v2h9c.55 
                        0 1-.45 1-1zm-5-3c.55 0 1-.45 1-1V7h3c.55 0 1-.45 1-1s-.45-1-1-1h-3V4c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1z"
      />
    </svg>
    <div
      class="inline relative border border-t-0 border-r-0 border-b-2 border-l-0 border-main-textColor w-4/12"
    >
      <input
        class="text-center bg-white focus:outline-none focus:shadow-outline border-0 px-4 py-3 w-full"
        type="text"
        placeholder="검색어를 입력하세요."
      />
      <div class="absolute inset-y-0 right-0 flex items-center pl-2 text-gray-700">
        <button class="focus:outline-none">
          <svg viewBox="0 0 20 20" fill="currentColor" class="search w-10 h-10">
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="inline-block text-left px-4 mx-4 mt-3">
      <div class="text-sm font-semibold mx-1">인기검색어</div>
      <div class="inline-flex">
        <div>
          <a
            href="#"
            class="text-sm text-gray-200 font-semibold bg-searchColor hover:bg-searchChecked px-3 py-1 rounded-lg mx-1"
          >쇼미</a>
          <a
            href="#"
            class="text-sm text-gray-200 font-semibold bg-searchColor hover:bg-searchChecked px-3 py-1 rounded-lg mx-1"
          >김성일컬렉션</a>
          <a
            href="#"
            class="text-sm text-gray-200 font-semibold bg-searchColor hover:bg-searchChecked px-3 py-1 rounded-lg mx-1"
          >더콜렉션</a>
          <a
            href="#"
            class="text-sm text-gray-200 font-semibold bg-searchColor hover:bg-searchChecked px-3 py-1 rounded-lg mx-1"
          >김성일</a>
        </div>
        <div class="mx-4">
          <button>
            <p class="text-xs text-searchColor">더보기</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
};
</script>