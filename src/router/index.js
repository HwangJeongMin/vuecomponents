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
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
