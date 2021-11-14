<template>
  <div id="app">
    <h2 class="app__title">Магазинчик всякой фигни</h2>
    <div class="container">
      <div>
        <the-basket v-if="showBasket" v-on:show-basket="showBasket = !showBasket"/>
        <the-cards-list v-if="!showBasket" />
      </div>
      <the-cart-vidget v-on:show-basket="showBasket = !showBasket" :showBasketButton="!showBasket"/>
    </div>
  </div>
</template>

<script>
import TheCardsList from "./components/TheCardsList.vue";
import TheCartVidget from "./components/TheCartVidget.vue";
import TheBasket from "./components/TheBasket.vue";

export default {
  name: "App",
  components: { TheCardsList, TheCartVidget, TheBasket },
  created() {
    this.$store.dispatch("setCardsData");
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
  max-width: 1200px;
  margin: auto;
  border: 3px solid black;
  display: grid;
  grid-template-columns: 80% 20%;
}
</style>
