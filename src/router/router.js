import Vue from 'vue';
import Router from 'vue-router';

import TheCardsList from '../views/TheCardsList.vue';
import TheBasket from '../views/TheBasket.vue';
import TheProduct from '../views/TheProduct.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: TheCardsList },
    {
      path: '/favorite',
      component: TheCardsList,
      props: { showFavorite: true },
    },
    { path: '/basket', component: TheBasket },
    { path: '/product/:uid', component: TheProduct },
  ],
});
