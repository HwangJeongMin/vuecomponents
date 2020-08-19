<template>
  <label class="box-check-input">
    <input type="checkbox" :name="cName" :value="cValue" :checked="cChecked" />
    <span>{{ cTitle }}</span>
  </label>
</template>

<script>
export default {
  name: 'CheckButton',
  props: ['cData'],
  data() {
    return {
      cName: this.cData.name,
      cValue: this.cData.value,
      cChecked: this.cData.checked,
      cTitle: this.cData.title,
    };
  },
};
</script>

<style>
.box-check-input input[type='checkbox'] {
  display: none;
}

.box-check-input input[type='checkbox'] + span {
  display: inline-block;
  background: none;
  border: 1px solid #2b6cb0;
  padding: 0px 8px;
  text-align: center;
  height: 24px;
  line-height: 24px;
  font-weight: 600;
  cursor: pointer;
  color: #2b6cb0;
}

.box-check-input input[type='checkbox']:checked + span {
  border: 1px solid #2b6cb0;
  background: #2b6cb0;
  color: #fff;
}

.box-check-input {
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}
</style>