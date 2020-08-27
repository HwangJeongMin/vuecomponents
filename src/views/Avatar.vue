<template>
  <div>
    <h1>Avatar Page</h1>
    <avatar
      :postsdata="{
        url:'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80',
        class: 'm-1 inline-block align-middle h-20 w-20 rounded-full text-white shadow-solid'
      }"
    ></avatar>
  </div>
</template>

<script>
import Avatar from '../components/Avatar';

export default {
  components: {
    Avatar,
  },
};
</script>
