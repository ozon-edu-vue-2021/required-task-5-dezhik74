<template>
  <div id="app">
    <h2 class="app__title">Магазинчик всякой фигни</h2>
    <div class="container">
      <div>
        <div class="show-favorite-btn" v-if="!showBasket">
          <input type="checkbox" v-model="showFavorite" />
          Показывать избранные
        </div>
        <the-basket
          v-if="showBasket"
          v-on:show-basket="showBasket = !showBasket"
        />
        <the-cards-list v-if="!showBasket" :showFavorite="showFavorite" />
      </div>
      <the-cart-vidget
        v-on:show-basket="showBasket = !showBasket"
        :showBasketButton="!showBasket"
      />
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
      showFavorite: false,
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
  border: 1px solid gray;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 80% 20%;
}
</style>
