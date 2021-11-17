<template>
  <div id="app">
    <h2 class="app__title">Магазинчик всякой фигни</h2>
    <div class="container">
      <div>
        <the-nav-bar />
        <router-view />
      </div>
      <the-cart-vidget
        v-on:show-basket="showBasket = !showBasket"
        :showBasketButton="!showBasket"
      />
    </div>
  </div>
</template>

<script>
import TheCartVidget from './components/TheCartVidget.vue';
import TheNavBar from './components/TheNavBar.vue';

export default {
  name: 'App',
  components: { TheCartVidget, TheNavBar },
  created() {
    this.$store.dispatch('setCardsData');
  },
  data() {
    return {
      showBasket: false,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background-color: #fafafa;
  padding: 24px;
  box-sizing: border-box;
}
.app__title {
  text-align: center;
}

.container {
  max-width: 1300px;
  margin: auto;
  display: grid;
  grid-template-columns: 80% 20%;
}
</style>
