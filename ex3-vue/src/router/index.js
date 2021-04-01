import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import product_list from '../components/ProductList.vue';
import product from '../components/Product.vue';
import cart from '../components/Cart.vue';
import payment from '../components/Payment.vue';

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
      path: '/product-list',
      name: 'product-list',
      component: product_list,
    },
    {
      path: '/product',
      name: 'product',
      component: product,
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart,
    },
    {
      path: '/payment',
      name: 'payment',
      component: payment,
    },
  ],
});

export default router;
