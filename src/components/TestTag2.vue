<template>
  <div>
    <div class="py-2">
      <strong class="float-left px-4 py-1">상품군</strong>
      <div class="inline-block relative w-11/12 mx-4">
        <select
          class="block appearance-none w-full bg-white border border-gray-600 hover:border-gray-900 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
        >
          <option>선택</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
        <div
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
        >
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
    <div class="py-2">
      <strong class="float-left px-4 py-1">상품명</strong>
      <div class="inline-block relative w-11/12 mx-4">
        <input
          class="bg-white focus:outline-none focus:shadow-outline border border-gray-600 hover:border-gray-900 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
        />
      </div>
    </div>
    <div class="py-2">
      <strong class="float-left px-4 py-1">상품코드</strong>
      <div class="inline-block relative w-11/12 mx-4">
        <input
          class="bg-white focus:outline-none focus:shadow-outline border border-gray-600 hover:border-gray-900 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
        />
      </div>
    </div>
    <div class="py-2">
      <strong class="float-left px-4 py-1">브랜드</strong>
      <div class="inline-block relative w-11/12 mx-4">
        <input
          class="bg-white focus:outline-none focus:shadow-outline border border-gray-600 hover:border-gray-900 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
        />
      </div>
    </div>
    <div class="py-2">
      <strong class="float-left px-4 py-1">아이템 명</strong>
      <div class="inline-block relative w-11/12 mx-4">
        <input
          class="bg-white focus:outline-none focus:shadow-outline border border-gray-600 hover:border-gray-900 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>