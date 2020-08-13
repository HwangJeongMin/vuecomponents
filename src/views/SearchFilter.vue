<template>
  <div class="md:w-1/6 border-2 border-blue-900 text-center">
    <div class="px-4 py-2">
      <collapse :postData="{title:'등록일'}">
        <template slot="content">
          <testTag></testTag>
        </template>
      </collapse>
    </div>

    <div class="px-4 py-2">
      <collapse :postData="{title:'상품'}">
        <template slot="content">
          <testTag2></testTag2>
        </template>
      </collapse>
    </div>
  </div>
</template>

<script>
import collapse from '../components/Collapse';
import testTag from '../components/TestTag';
import testTag2 from '../components/TestTag2';

export default {
  name: 'SearchFilter',
  components: {
    collapse,
    testTag,
    testTag2,
  },
};
</script>