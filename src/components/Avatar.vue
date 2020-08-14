<template>
  <div>
    <img
      :src="url"
      alt
      class="m-1 inline-block align-middle h-10 w-10 rounded-full text-white shadow-solid"
    />
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  props: ['url'],
  components: {},
};
</script>