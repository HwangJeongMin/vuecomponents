<template>
  <div class="container mx-auto">
    <div class="flex pt-4">
      <div class="w-1/12">
        <a href="#" class="text-lg font-bold text-white">Laravel</a>
      </div>

      <ul class="w-10/12 text-base font-bold text-white">
        <li
          v-for="(value, key, index) in items"
          :key="index"
          class="inline-block h-10 mx-4"
          :class="hoverClass"
          @mouseover="mouseOver()"
          @mouseout="mouseLeave()"
        >
          <a href="#">{{ value }}</a>
        </li>
      </ul>

      <div class="w-1/12 flex-1 text-right">
        <a class="no-underline hover:underline text-gray-300 text-sm p-3" href="#">Login</a>
        <a class="no-underline hover:underline text-gray-300 text-sm p-3" href="#">Register</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavMenu',
  props: ['navmenu'],
  data() {
    return {
      items: this.navmenu,
      hoverClass: '',
    };
  },
  methods: {
    mouseOver() {
      this.hoverClass = 'border-0 border-b-4 border-white';
    },
    mouseLeave() {
      this.hoverClass = '';
    },
  },
  mounted() {
    console.log(this.items);
  },
};
</script>