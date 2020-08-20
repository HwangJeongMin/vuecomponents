<template>
  <label class="box-radio-input">
    <input type="radio" :name="rName" :value="rValue" :checked="rChecked" />
    <span>{{ rTitle }}</span>
  </label>
</template>

<script>
export default {
  name: 'RadioButton',
  props: ['rData'],
  data() {
    return {
      rName: this.rData.name,
      rValue: this.rData.value,
      rChecked: this.rData.checked,
      rTitle: this.rData.title,
    };
  },
};
</script>

<style>
.box-radio-input input[type='radio'] {
  display: none;
}

.box-radio-input input[type='radio'] + span {
  display: inline-block;
  background: none;
  border: 1px solid #2b6cb0;
  padding: 0px 15px;
  text-align: center;
  height: 35px;
  line-height: 33px;
  font-weight: 500;
  cursor: pointer;
  color: #2b6cb0;
  border-radius: 3px;
}

.box-radio-input input[type='radio']:checked + span {
  border: 1px solid #2b6cb0;
  border-radius: 3px;
  background: #2b6cb0;
  color: #fff;
}

.box-radio-input {
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}
</style>