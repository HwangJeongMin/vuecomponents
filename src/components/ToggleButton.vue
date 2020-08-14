<template>
  <!-- bg-gray-300 shadow-inner-->
  <button
    class="rounded-full p-2 shadow-lg inline-block cursor-pointer m-2 focus:outline-none"
    :class="checkedStyle"
    @click="handleClick"
  >
    <slot name="icon"></slot>
    <span v-if="textValue" class="pl-1">{{ textValue }}</span>
  </button>
</template>

<script>
export default {
  props: {
    defaultState: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      checked: this.defaultState || false,
      checkedStyle: '',
      textValue: this.text,
    };
  },

  created() {
    this.applyCheckedStyle();
  },

  methods: {
    handleClick() {
      this.checked = !this.checked;
      this.applyCheckedStyle();
    },
    applyCheckedStyle() {
      if (this.checked) {
        this.checkedStyle = 'shadow-inner bg-gray-300 ';
      } else {
        this.checkedStyle = '';
      }
    },
  },
};
</script>
