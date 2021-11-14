<template>
  <div>
    <div class="cart-title">Корзина</div>
    <div class="cart-operations">
      <input type="checkbox">
      <span>Выбрать все (не работает)</span>
      <span class="cart-oprations__delete-selected" @click="deleteSelected">Удалить выбранное</span>
      <span class="cart-oprations__delete-selected" @click="$emit('show-basket')">Закрыть корзину</span>
    </div>
    <hr />
    <div class="cart-item-list" v-for="item in getFullCart" :key="item.uid">
      <basket-item :product="getOneCard(item.uid)" :basketItemData="item" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BasketItem from "./BasketItem.vue";

export default {
  components: { BasketItem },
  name: "TheBasket",
  computed: {
    ...mapGetters(["getFullCart", "getOneCard"]),
  },
  methods: {
    deleteSelected() {
      this.$store.commit("deleteSelected");
    }
  }
};
</script>

<style scoped>
.cart-title{
  font-weight: 700;
  margin: 20px 0 20px 20px;
}

.cart-operations {
  font-size: 14px;
  margin-left: 20px;
}

.cart-oprations__delete-selected {
  margin-left: 20px;
  color: blue;
  cursor: pointer;
}
</style>
