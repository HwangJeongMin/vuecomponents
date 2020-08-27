<template>
  <div class="w-full py-6">
    <div class="mx-auto inline-flex">
      <a
        href="#"
        class="mx-2"
        @mouseover="arrowOn('fastRewind')"
        @mouseout="arrowOff('fastRewind')"
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z" :fill="arrows['fastRewind']" />
        </svg>
      </a>
      <a href="#" class="mx-2" @mouseover="arrowOn('rewind')" @mouseout="arrowOff('rewind')">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" :fill="arrows['rewind']" />
        </svg>
      </a>
      <div class="mx-2">
        <a
          href="#"
          v-for="(value, key, index) in items"
          :key="index"
          class="hover:text-main-textColor py-2 px-2 rounded-full"
          :class="value == 2 ? 'text-main-textColor' : 'text-pagination'"
        >{{ value }}</a>
      </div>
      <a href="#" class="mx-2" @mouseover="arrowOn('forward')" @mouseout="arrowOff('forward')">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" :fill="arrows['forward']" />
        </svg>
      </a>
      <a
        href="#"
        class="mx-2"
        @mouseover="arrowOn('fastForward')"
        @mouseout="arrowOff('fastForward')"
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z" :fill="arrows['fastForward']" />
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      arrows: {
        fastRewind: this.defaultArrowsColor(),
        fastForward: this.defaultArrowsColor(),
        rewind: this.defaultArrowsColor(),
        forward: this.defaultArrowsColor(),
      },
    };
  },
  methods: {
    defaultArrowsColor() {
      return '#CED0DA';
    },
    arrowOn(name) {
      if (name == undefined || name == '') {
        return false;
      }
      this.arrows[name] = '#1E1E1E';
    },
    arrowOff(name) {
      if (name == undefined || name == '') {
        return false;
      }
      this.arrows[name] = this.defaultArrowsColor();
    },
  },
};
</script>