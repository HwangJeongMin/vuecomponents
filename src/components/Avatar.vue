<template>
  <div>
    <img :src="postsdata.url" alt :class="postsdata.class" />
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  props: ['postsdata'],
  components: {},
};
</script>