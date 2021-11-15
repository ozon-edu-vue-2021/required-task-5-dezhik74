<template>
  <li class="card__container">
    <img :src="product.image" alt="картинка" class="card__img" />
    <div class="card__title">{{ product.dish }}</div>
    <div class="card__price_heart">
      <div class="card__price">{{ product.price }} руб.</div>
      <img
        @click="changeFavoriteStatus(product.uid)"
        :src="getHeartImage"
        alt=""
        class="card__heart"
      />
    </div>
    <div class="card__desc">{{ product.description }}</div>
    <div class="card__butt-chooser">
      <button @click="addToCart" class="card__button">В корзину</button>
      <quantity-chooser
        v-if="isProductInBasket(product.uid)"
        :productUID="product.uid"
        class="card__qtty"
      />
    </div>
  </li>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import QuantityChooser from "./QuantityChooser.vue";
import whiteHeart from "../assets/icons/white_heart.png";
import blackHeart from "../assets/icons/black_heart.png";

export default {
  name: "CardsListItem",
  components: {
    QuantityChooser,
  },
  props: {
    product: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    ...mapGetters(["isProductInBasket"]),
    getHeartImage: function () {
      return this.product.favorite ? blackHeart : whiteHeart;
    },
  },
  methods: {
    ...mapMutations(["changeFavoriteStatus"]),
    addToCart() {
      this.$store.commit("addToCart", this.product.uid);
    },
  },
};
</script>

<style scoped>
.card__container {
  max-width: 100%;
  padding: 4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

.card__img {
  max-width: 100%;
  border-radius: 4px;
}

.card__title {
  margin-top: 12px;
}

.card__price_heart {
  display: flex;
  width: 100%;
}

.card__price {
  margin-top: 12px;
  font-weight: 600;
}

.card__heart {
  width: 20px;
  height: 20px;
  transform: translateY(8px);
  margin-left: auto;
  margin-right: 20px;
}

.card__desc {
  margin-top: 12px;
  font-size: 14px;
  margin-bottom: 4px;
}

.card__butt-chooser {
  margin-top: auto;
  display: flex;
  width: 100%;
}

.card__qtty {
  margin-left: auto;
}
</style>

<style>
.card__button {
  background-color: gray;
  font-weight: 700;
  color: aliceblue;
  border-radius: 4px;
  cursor: pointer;
}
</style>
