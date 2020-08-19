<template>
  <div>
    <ul class>
      <li class="float-left w-1/3 p-1 pl-0">
        <radioBtn
          :rData="{
            name:'optionTest',
            value:'1',
            checked:'checked',
            title:'오늘',
        }"
        ></radioBtn>
      </li>
      <li class="float-left w-1/3 p-1 pl-0">
        <radioBtn
          :rData="{
            name:'optionTest',
            value:'2',
            checked:'',
            title:'이번주',
        }"
        ></radioBtn>
      </li>
      <li class="float-left w-1/3 p-1 pl-0">
        <radioBtn
          :rData="{
            name:'optionTest',
            value:'3',
            checked:'',
            title:'이번달',
        }"
        ></radioBtn>
      </li>
      <li class="float-left w-1/3 p-1 pl-0">
        <radioBtn
          :rData="{
            name:'optionTest',
            value:'4',
            checked:'',
            title:'6개월 이내',
        }"
        ></radioBtn>
      </li>
      <li class="float-left w-1/3 p-1 pl-0">
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
  </div>
</template>

<script>
import radioBtn from '../components/RadioButton';

export default {
  name: 'RadioBTN',
  components: {
    radioBtn,
  },
};
</script>

<style>
</style>