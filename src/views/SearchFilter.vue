<template>
  <div class="md:w-1/6 border-2 border-blue-900 border-r-0 text-center">
    <div
      class="px-2 pt-4 pb-3 w-full inline-flex border border-blue-600 border-l-0 border-t-0 border-r-0"
    >
      <div class="md:w-1/3 inline-flex">
        <a href="SearchFilter?mode=filter" class="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            class="mt-1"
          >
            <path d="M0,0h24 M24,24H0" fill="none" />
            <path
              :fill="seachOption.filterS"
              d="M4.25,5.61C6.27,8.2,10,13,10,13v6c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-6c0,0,3.72-4.8,5.74-7.39 
                                C20.25,4.95,19.78,4,18.95,4H5.04C4.21,4,3.74,4.95,4.25,5.61z"
            />
            <path d="M0,0h24v24H0V0z" fill="none" />
          </svg>
          <span
            class="inline-block bg-gray-200 pr-3 pt-1 pb-2 text-lg font-semibold"
            :class="seachOption.filterC"
          >필터</span>
        </a>
      </div>
      <div class="md:w-1/3">
        <a href="SearchFilter?mode=tag">
          <span
            class="inline-block bg-gray-200 px-3 py-1 text-lg font-semibold mr-2"
            :class="seachOption.tagC"
          >#태그</span>
        </a>
      </div>

      <!-- {{-- 필터 옵션 --}} -->
      <filterOption v-if="mode !== 'tag'"></filterOption>
    </div>
    <div v-if="mode === 'tag'">
      <div class="flex">
        <div v-for="(tab, index) in tabs" :key="index" class="h-full w-1/2 text-left text-lg m-2">
          <div
            class="cursor-pointer"
            :class="{'font-bold': currentTab === index}"
            @click="currentTab = index"
          >{{ tab }}</div>
        </div>
      </div>
      <div class="text-left" v-if="currentTab === 0">
        <p class="mx-2 my-1">#LG 휘센</p>
        <p class="mx-2 my-1">#에어컨</p>
        <button class="m-2">더보기</button>
      </div>
      <div class="text-left" v-else>
        <p class="mx-2 my-1">
          A
          <br />AIG 생명
        </p>
        <p class="mx-2 my-1">
          L
          <br />LG 휘센
        </p>
        <p class="mx-2 my-1">
          O
          <br />산지예
        </p>
      </div>
    </div>
    <div v-else>
      <div class="px-2 py-2">
        <collapse :postData="{title:'등록일'}">
          <template slot="content">
            <ul class="text-left">
              <li class="float-left mx-2 my-1">
                <radioBtn
                  :rData="{
                    name:'optionTest',
                    value:'1',
                    checked:'checked',
                    title:'오늘',
                  }"
                ></radioBtn>
              </li>
              <li class="float-left mx-2 my-1">
                <radioBtn
                  :rData="{
                    name:'optionTest',
                    value:'2',
                    checked:'',
                    title:'이번 주',
                  }"
                ></radioBtn>
              </li>
              <li class="float-left mx-2 my-1">
                <radioBtn
                  :rData="{
                    name:'optionTest',
                    value:'3',
                    checked:'',
                    title:'이번 달',
                  }"
                ></radioBtn>
              </li>
              <li class="float-left mx-2 my-1">
                <radioBtn
                  :rData="{
                    name:'optionTest',
                    value:'4',
                    checked:'',
                    title:'6개월이내',
                  }"
                ></radioBtn>
              </li>
              <li class="float-left mx-2 my-1">
                <radioBtn
                  :rData="{
                    name:'optionTest',
                    value:'5',
                    checked:'',
                    title:'올해',
                  }"
                ></radioBtn>
              </li>
            </ul>
          </template>
        </collapse>
      </div>
      <div class="px-4 py-2">
        <collapse :postData="{title:'MY'}">
          <template slot="content">
            <div>
              <div class="flex">
                <svg
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="#FF1212"
                  class="w-8"
                >
                  <path
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <span class="mt-2 ml-2 text-lg font-bold">좋아요 한 컨텐츠</span>
              </div>
              <div class="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  class="w-8"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path
                    d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 
                    7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"
                  />
                </svg>
                <span class="ml-2 font-bold">좋아요 그룹 1</span>
              </div>
              <div class="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  class="w-8"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path
                    d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 
                    7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"
                  />
                </svg>
                <span class="ml-2 font-bold">좋아요 그룹 2</span>
              </div>
            </div>
          </template>
        </collapse>
      </div>
      <div class="px-4 py-2">
        <collapse :postData="{title:'상품'}">
          <template slot="content">
            <testTag2></testTag2>
          </template>
        </collapse>
      </div>
    </div>
  </div>
</template>

<script>
import collapse from '../components/Collapse';
//import testTag from '../components/TestTag';
import testTag2 from '../components/TestTag2';
import filterOption from '../components/FilterOption';
import radioBtn from '../components/RadioButton';

export default {
  name: 'SearchFilter',
  components: {
    collapse,
    //testTag,
    testTag2,
    filterOption,
    radioBtn,
  },
  data() {
    return {
      seachOption: this.filterStyle(),
      popTag: false,
      nameTag: false,
      currentTab: 0,
      tabs: ['인기순', '이름순'],
    };
  },
  methods: {
    filterStyle() {
      this.mode = this.$route.query.mode;
      //this.mode = this.mode == undefined || this.mode == '' ? 'filter' : this.mode;
      var filterC = '';
      var filterS = '';
      var tagC = '';
      if (this.mode == 'tag') {
        filterC = 'text-gray-600';
        filterS = '#718096';
        tagC = 'text-gray-900';
      } else {
        filterC = 'text-gray-900';
        filterS = '';
        tagC = 'text-gray-600';
      }
      return {
        filterC,
        filterS,
        tagC,
      };
    },
  },
  mounted() {
    //this.mode = this.$route.query.mode;
    //console.log(this.mode, this.filter.filterC, this.filter.filterS);
  },
};
</script>