<template>
  <div class="flex mt-2 border-b border-blue-600 px-4">
    <tabMenu></tabMenu>
  </div>
</template>

<script>
import tabMenu from '../components/TabMenu';

export default {
  name: 'TabMenu',
  components: {
    tabMenu,
  },
};
</script>