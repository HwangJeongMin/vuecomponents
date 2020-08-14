<template>
  <div class="inline-block rounded-full" :class="`bg-${color}`">
    <div class="flex items-center align-middle">
      <slot name="icon"></slot>
      <span v-if="text !== ''">{{ text }}</span>
      <div
        v-if="close"
        class="rounded-full bg-white bg-opacity-25 ml-2 p-1 cursor-pointer"
        @click="$emit('close')"
      >
        <svg viewBox="0 0 20 20" fill="currentColor" class="x w-4 h-4" :class="`text-${color}`">
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
    close: {
      type: Boolean,
      default: null,
    },
  },
};
</script>
