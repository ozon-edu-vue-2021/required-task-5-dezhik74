<!--Компонент переделан в функциональный -->

<!--<template>-->
<!--  <div>-->
<!--    <div class="cart-title">Корзина</div>-->
<!--    <div class="cart-operations">-->
<!--      <input type="checkbox" @change="changeAllCartDeleteStatus" />-->
<!--      <span class="cart-oprations__select-all">Выбрать все</span>-->
<!--      <span class="cart-oprations__delete-selected" @click="deleteSelected">-->
<!--        Удалить выбранное-->
<!--      </span>-->
<!--      <router-link class="cart-oprations__delete-selected" to="/">-->
<!--        Закрыть корзину-->
<!--      </router-link>-->
<!--    </div>-->
<!--    <hr />-->
<!--    <div v-for="item in getFullCart" :key="item.uid" class="cart-item-list">-->
<!--      <basket-item :product="getOneCard(item.uid)" :basketItemData="item" />-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<script lang="jsx">
// import { mapGetters } from 'vuex';
import BasketItem from '../components/BasketItem.vue';
import store from '../store/index';

export default {
  components: { BasketItem },
  name: 'TheBasket',
  functional: true,
  render() {
    const deleteSelected = () => {
      store.commit('deleteSelected');
    };
    const changeAllCartDeleteStatus = (event) => {
      if (event.target.checked) {
        store.commit('selectAllbasket');
      } else {
        store.commit('deselectAllbasket');
      }
    };
    const basketItemFactory = () => {
      return store.state.cartData.map(function (item) {
        return (
          <div key={item.uid} className="cart-item-list">
            <BasketItem
              product={store.getters.getOneCard(item.uid)}
              basketItemData={item}
            />
          </div>
        );
      });
    };
    return (
      <section>
        <div class="cart-title">Корзина</div>
        <div class="cart-operations">
          <input type="checkbox" on={{ click: changeAllCartDeleteStatus }} />
          <span class="cart-oprations__select-all">Выбрать все</span>
          <span
            class="cart-oprations__delete-selected"
            on={{ click: deleteSelected }}
          >
            Удалить выбранное
          </span>
          <router-link class="cart-oprations__delete-selected" to="/">
            Закрыть корзину
          </router-link>
        </div>
        <hr />
        {...basketItemFactory()}
      </section>
    );
  },
  // computed: {
  //   ...mapGetters(['getFullCart', 'getOneCard']),
  // },
  // // methods: {
  //   deleteSelected() {
  //     this.$store.commit('deleteSelected');
  //   },
  //   changeAllCartDeleteStatus(event) {
  //     if (event.target.checked) {
  //       this.$store.commit('selectAllbasket');
  //     } else {
  //       this.$store.commit('deselectAllbasket');
  //     }
  //   },
  // },
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
