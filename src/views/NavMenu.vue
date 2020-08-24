<template>
  <nav class="bg-main-color nav-menu">
    <navMenu
      :navmenu="{
        menu1: '메뉴-1',
        menu2: '메뉴-2',
        menu3: '메뉴-3',
        menu4: '메뉴-4',
        menu5: '메뉴-5',
        menu6: '메뉴-6',
        menu7: '메뉴-7',
        menu8: '메뉴-8',
        menu9: '메뉴-9',
        menu10: '메뉴-10',
    }"
    ></navMenu>
  </nav>
</template>

<script>
import navMenu from '../components/NavMenu';

export default {
  name: 'NavMenu',
  components: {
    navMenu,
  },
};
</script>