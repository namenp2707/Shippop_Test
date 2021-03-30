import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import hello from '../components/HelloWorld.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/hello',
      name: 'hello',
      component: hello,
    },
  ],
});

export default router;
