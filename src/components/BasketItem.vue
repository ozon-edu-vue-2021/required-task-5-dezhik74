<template>
  <div>
    <div class="basket-item__container">
      <input
        type="checkbox"
        :value="product.uid"
        @change="changeDeleteState"
        :checked="isBasketItemFlagged(product.uid)"
      />
      <router-link :to="`/product/${product.uid}`">
        <img
          :src="product.image"
          alt="product image"
          class="basket-item__img"
        />
      </router-link>
      <div class="basket-item__second-block">
        <div class="basket-item__name">
          {{ product.dish }}
        </div>
        <div class="basket-item_measurement">
          {{ product.measurement }}
        </div>
        <div class="basket-item__fav-delete">
          <span
            @click="putItemToFavorite(product.uid)"
            class="basket-item__favorite"
            >в избранное</span
          >
          <span
            @click="deleteBascketItem(product.uid)"
            class="basket-item__delete"
            >удалить</span
          >
        </div>
      </div>
      <div class="basket-item__price">{{ product.price }} руб.</div>
      <quantity-chooser :productUID="product.uid" />
    </div>
    <hr />
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import QuantityChooser from './QuantityChooser.vue';

export default {
  name: 'BasketItem',
  components: {
    QuantityChooser,
  },
  props: {
    product: {
      type: Object,
      default: () => {},
    },
    basketItemData: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    ...mapGetters(['isBasketItemFlagged']),
  },
  methods: {
    ...mapMutations(['deleteBascketItem', 'putItemToFavorite']),
    changeDeleteState(event) {
      this.$store.commit('setDeleteStatus', {
        uid: this.product.uid,
        flag: event.target.checked,
      });
    },
  },
};
</script>

<style scoped>
.basket-item__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 20px;
  margin-right: 20px;
  font-size: 14px;
}

.basket-item__img {
  height: 80px;
  margin-left: 12px;
  border-radius: 5px;
}

.basket-item__second-block {
  margin: 0 0 0 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80px;
}

.basket-item__name {
  font-weight: 700;
  margin-top: 8px;
}

.basket-item_measurement {
  color: grey;
}

.basket-item__price {
  margin: auto;
}

.basket-item__favorite {
  color: blue;
  margin-right: 8px;
  cursor: pointer;
}

.basket-item__delete {
  color: blue;
  cursor: pointer;
}

.basket-item__price {
  font-weight: 700;
}
</style>
