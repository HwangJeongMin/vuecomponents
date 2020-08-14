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
    component: () => import('../views/Button.vue'),
  },
  {
    path: '/date',
    name: 'DatePicker',
    component: () => import('../views/DatePicker.vue'),
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
