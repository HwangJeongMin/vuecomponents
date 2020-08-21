<template>
  <div class="w-11/12">
    <ul class="flex">
      <li
        v-for="(value, key, index) in items"
        :key="index"
        class="mr-1"
        :class="key == tMode ? '-mb-px' : ''"
      >
        <a
          class="bg-white inline-block py-2 px-4 font-semibold"
          :class="key == tMode ? 'text-black border-l border-t border-r border-blue-600 rounded-t' : 'text-gray-500'"
          :href="makeTabMenuUrl(key)"
        >{{ value }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TabMenu',
  methods: {
    getUrlParams(search) {
      const hashes = search.slice(search.indexOf('?') + 1).split('&');
      const params = {};
      hashes.map(hash => {
        const [key, val] = hash.split('=');
        params[key] = decodeURIComponent(val);
      });
      return params;
    },
    makeTabMenuUrl(key) {
      var ctMode = this.getUrlParams(window.location.search)['tMode'];
      if (ctMode !== undefined && ctMode !== '') {
        this.tMode = ctMode;
      }
      var fMode = this.getUrlParams(window.location.search)['fMode'];
      fMode = fMode == undefined ? '' : fMode;
      return '?fMode=' + fMode + '&tMode=' + key;
    },
  },
  data() {
    return {
      items: {
        tab1: '탭메뉴1',
        tab2: '탭메뉴2',
        tab3: '탭메뉴3',
        tab4: '탭메뉴4',
        tab5: '탭메뉴5',
        tab6: '탭메뉴6',
        tab7: '탭메뉴7',
        tab8: '탭메뉴8',
        tab9: '탭메뉴9',
        tab10: '탭메뉴10',
      },
      tMode: '',
    };
  },
  mounted() {
    if (this.tMode == undefined || this.tMode == '') {
      this.tMode = Object.keys(this.items)[0];
    }
  },
};
</script>