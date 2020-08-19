<template>
  <div>
    <ul>
      <li class="float-left">
        <checkBtn
          :cData="{
            name:'optionTest',
            value:'1',
            checked:'checked',
            title:'심의전',
        }"
        ></checkBtn>
      </li>
      <li class="float-left">
        <checkBtn
          :cData="{
            name:'optionTest',
            value:'2',
            checked:'',
            title:'의뢰',
        }"
        ></checkBtn>
      </li>
      <li class="float-left">
        <checkBtn
          :cData="{
            name:'optionTest',
            value:'3',
            checked:'',
            title:'접수',
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