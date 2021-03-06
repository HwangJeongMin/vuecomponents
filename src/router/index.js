import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/button',
    name: 'Button',

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Button.vue'),
  },
  {
    path: '/date',
    name: 'DatePicker',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/DatePicker.vue'),
  },
  {
    path: '/SearchFilter',
    name: 'SearchFilter',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SearchFilter.vue'),
  },
  {
    path: '/Avatar',
    name: 'Avatar',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Avatar.vue'),
  },
  {
    path: '/BasePage',
    name: 'BasePage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BasePage.vue'),
  },
  {
    path: '/Card',
    name: 'Card',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Card.vue'),
  },
  {
    path: '/togglebutton',
    name: 'ToggleButton',
    component: () => import('../views/ToggleButton.vue'),
  },
  {
    path: '/videoplayer',
    name: 'VideoPlayer',
    component: () => import('../views/VideoPlayer.vue'),
  },
  {
    path: '/date',
    name: 'DatePicker',
    component: () => import('../views/DatePicker.vue'),
  },
  {
    path: '/chip',
    name: 'Chip',
    component: () => import('../views/ChipPage.vue'),
  },
  {
    path: '/chart',
    name: 'Chart',
    component: () => import('../views/ChartPage.vue'),
  },
  {
    path: '/RadioBTN',
    name: 'RadioBTN',
    component: () => import('../views/RadioBTN.vue'),
  },
  {
    path: '/CheckBTN',
    name: 'CheckBTN',
    component: () => import('../views/CheckBTN.vue'),
  },
  {
    path: '/TabMenu',
    name: 'TabMenu',
    component: () => import('../views/TabMenu.vue'),
  },
  {
    path: '/NavMenu',
    name: 'NavMenu',
    component: () => import('../views/NavMenu.vue'),
  },
  {
    path: '/SearchBar',
    name: 'SearchBar',
    component: () => import('../views/SearchBar.vue'),
  },
  {
    path: '/Pagination',
    name: 'Pagination',
    component: () => import('../views/Pagination.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
