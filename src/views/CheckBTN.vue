<template>
  <div>
    <ul>
      <li class="float-left">
        <checkBtn
          :cData="{
            name:'optionTest',
            value:'1',
            checked:'checked',
            title:'checkbox 1',
        }"
        ></checkBtn>
      </li>
      <li class="float-left">
        <checkBtn
          :cData="{
            name:'optionTest',
            value:'2',
            checked:'',
            title:'checkbox 2',
        }"
        ></checkBtn>
      </li>
      <li class="float-left">
        <checkBtn
          :cData="{
            name:'optionTest',
            value:'3',
            checked:'',
            title:'checkbox 3',
        }"
        ></checkBtn>
      </li>
    </ul>
  </div>
</template>

<script>
import checkBtn from '../components/CheckButton';

export default {
  name: 'CheckBTN',
  components: {
    checkBtn,
  },
};
</script>