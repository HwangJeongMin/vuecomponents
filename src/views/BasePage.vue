<template>
  <div class="md:w-1/6 border-2 border-blue-900 text-center">
    <div class="px-4 py-2">
      <collapse :postData="{title:'등록일'}">
        <template slot="content">
          <div>
            <ul class>
              <li class="float-left w-1/3 p-1 pl-0">
                <button
                  class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 w-full border border-blue-500 hover:border-transparent rounded"
                >오늘</button>
              </li>
              <li class="float-left w-1/3 p-1">
                <button
                  class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 w-full border border-blue-500 hover:border-transparent rounded"
                >이번 주</button>
              </li>
              <li class="float-left w-1/3 p-1 pr-0">
                <button
                  class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 w-full border border-blue-500 hover:border-transparent rounded"
                >이번 달</button>
              </li>
              <li class="float-left w-1/3 p-1 pl-0">
                <button
                  class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 w-full border border-blue-500 hover:border-transparent rounded"
                >6개월 이내</button>
              </li>
              <li class="float-left w-1/3 p-1">
                <button
                  class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 w-full border border-blue-500 hover:border-transparent rounded"
                >올해</button>
              </li>
            </ul>
          </div>
        </template>
      </collapse>
    </div>
  </div>
</template>

<script>
import collapse from '../components/Collapse';

export default {
  components: {
    collapse,
  },
};
</script>
