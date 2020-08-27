<template>
  <div class="mx-auto">
    <div class="flex pt-4">
      <div class="w-1/12" style="border:1px solid yellow">
        <a href="#" class="text-lg font-bold text-white">Laravel</a>
      </div>

      <ul class="w-10/12 text-base font-bold text-white" style="border:1px solid green">
        <li
          v-for="(value, key, index) in items"
          :key="index"
          class="inline-block h-10 mx-4 border-0 border-b-4 default-main-bbt hover:border-white"
        >
          <a href="#">{{ value }}</a>
        </li>
      </ul>

      <div class="w-1/12" style="border:1px solid red">
        <div class="inline-flex relative minus-top-5 float-left" style="border:1px solid black">
          <div
            class="w-10 h-10 rounded-full mx-1"
            style="background-color:#03919D; padding-left:0.5rem; padding-top:0.4rem"
          >
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 
                            0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"
                  fill="#FFFFFF"
                />
              </svg>
            </a>
          </div>
          <a href="#">
            <avatar
              :postsdata="{
              url:'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80',
              class: 'align-middle h-10 w-10 rounded-full text-white mx-1'
            }"
            ></avatar>
          </a>
        </div>
        <!-- <a class="no-underline hover:underline text-gray-300 text-sm p-3" href="#">Login</a>
        <a class="no-underline hover:underline text-gray-300 text-sm p-3" href="#">Register</a>-->
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from '../components/Avatar';
export default {
  name: 'NavMenu',
  props: ['navmenu'],
  components: {
    Avatar,
  },
  data() {
    return {
      items: this.navmenu,
    };
  },
  mounted() {
    //console.log('dd');
  },
};
</script>
<style>
.default-main-bbt {
  border-bottom: 4px solid #00aebd;
}
.minus-top-5 {
  top: -0.5rem;
}
</style>