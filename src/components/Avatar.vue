<template>
  <div class>
    <img
      :src="url"
      alt
      class="m-1 inline-block align-middle h-10 w-10 rounded-full text-white shadow-solid"
      :class="imgClass"
    />
    <button @click="handleClick">Click</button>
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  components: {},
  props: ['url'],
  data() {
    return {
      imgSrc: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1',
      style: 'border:1px solid red;',
      imgClass: '',
    };
  },
  mounted() {
    console.log(this.url);
  },
  methods: {
    handleClick() {
      if (this.imgClass === '') {
        this.imgClass = 'w-48 h-48 bg-blue-500';
      } else {
        this.imgClass = '';
      }
    },
  },
};
</script>
