<template>
  <div>
    <div class="cart-title">Корзина</div>
    <div class="cart-operations">
      <input type="checkbox" @change="changeAllCartDeleteStatus" />
      <span class="cart-oprations__select-all">Выбрать все</span>
      <span class="cart-oprations__delete-selected" @click="deleteSelected"
        >Удалить выбранное</span
      >

      <router-link class="cart-oprations__delete-selected" to="/">
        Закрыть корзину
      </router-link>
    </div>
    <hr />
    <div v-for="item in getFullCart" :key="item.uid" class="cart-item-list">
      <basket-item :product="getOneCard(item.uid)" :basketItemData="item" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import BasketItem from '../components/BasketItem.vue';

export default {
  components: { BasketItem },
  name: 'TheBasket',
  computed: {
    ...mapGetters(['getFullCart', 'getOneCard']),
  },
  methods: {
    deleteSelected() {
      this.$store.commit('deleteSelected');
    },
    changeAllCartDeleteStatus(event) {
      if (event.target.checked) {
        this.$store.commit('selectAllbasket');
      } else {
        this.$store.commit('deselectAllbasket');
      }
    },
  },
};
</script>

<style scoped>
.cart-title {
  font-weight: 700;
  margin: 20px 0 20px 20px;
}

.cart-operations {
  font-size: 14px;
  margin-left: 20px;
}

.cart-oprations__select-all {
  margin-left: 20px;
}

.cart-oprations__delete-selected {
  margin-left: 20px;
  color: blue;
  cursor: pointer;
  text-decoration: none;
}
</style>
