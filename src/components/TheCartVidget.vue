<template>
  <div class="cart__container">
    <div class="cart__holder">
      <div class="card__title">Ваша Корзина</div>
      <div v-if="getCartNumberOfGoods">
        <div class="card__goods-string">
          <span>Товары ({{ getCartNumberOfGoods }})</span>
          <span>{{ getCartSumma }} руб.</span>
        </div>
        <hr />
        <div class="card__goods-string">
          <span>Итого</span>
          <span>{{ getCartSumma }} руб.</span>
        </div>
        <div class="cart__button-block">
          <div @click="clearCart" class="card__button cart__button">
            Очистить корзину
          </div>
          <router-link class="card__button cart__button" to="/basket">
            Заглянуть в корзину
          </router-link>
          <div @click="makeOrder" class="card__button cart__button">
            Оформить заказ
          </div>
        </div>
      </div>
      <div v-else>Корзина пуста</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "TheCartVidget",
  props: {
    showBasketButton: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters(["getCartNumberOfGoods", "getCartSumma"]),
  },
  methods: {
    ...mapMutations(["clearCart"]),
    makeOrder() {
      const order = this.$store.getters.getFullCart;
      alert(JSON.stringify(order));
    },
  },
};
</script>

<style scoped>
.cart__container {
  position: sticky;
  top: 0;
  max-height: 300px;
  padding-left: 12px;
  padding-right: 4px;
}

.cart__holder {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  padding: 10px;
  border: 1px solid rgb(196, 192, 192);
  border-radius: 5px;
}

.card__title {
  font-weight: 700;
  margin-bottom: 20px;
}

.card__goods-string {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
}

.cart__button-block {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cart__button {
  height: 30px;
  width: 80%;
  margin-bottom: 20px;
  text-align: center;
  padding-top: 10px;
  text-decoration: none;
}
</style>
