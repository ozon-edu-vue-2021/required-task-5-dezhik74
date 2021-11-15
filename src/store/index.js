import Vue from "vue";
import Vuex from "vuex";

import { loadData } from "../utils/transport";
import { getListofImages } from "../utils/images";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    cardsData: [],
    cartData: [],
    images: [],
  }),
  getters: {
    // геттеры списка товаров
    getfullCardsData: (state) => {
      return state.cardsData;
    },
    getOneCard: (state) => (uid) => {
      let res = state.cardsData.find((value) => value.uid === uid);
      return res;
    },
    // геттеры корзины
    getCartNumberOfGoods: (state) => {
      return state.cartData.length;
    },
    getFullCart: (state) => {
      return state.cartData;
    },
    getCartSumma: (state) => {
      return state.cartData.reduce(
        (acc, item) => (acc = acc + item.quantity * item.price),
        0
      );
    },
    isBasketItemFlagged: (state) => (uid) => {
      let item = state.cartData.find((itm) => itm.uid === uid);
      return item.deleteFlag;
    },
    getBasketItemQuantity: (state) => (uid) => {
      let item = state.cartData.find((itm) => itm.uid === uid);
      return item?.quantity;
    },
    isProductInBasket: (state) => (uid) => {
      let item = state.cartData.find((itm) => itm.uid === uid);
      return !(item === undefined);
    },
  },
  mutations: {
    // мутации списка товаров
    setCardsData: (state, payload) => {
      state.cardsData = payload;
      // Устанавливаем случайные цены и ссылки на картинки и favorite = false
      state.images = getListofImages();
      console.log(state.images);
      state.cardsData.forEach((card) => {
        Vue.set(card, "price", Math.floor(Math.random() * 200));
        Vue.set(
          card,
          "image",
          state.images[Math.floor(Math.random() * state.images.length)]
        );
        Vue.set(card, "favorite", false);
      });
    },
    // мутации корзины
    addToCart: (state, uid) => {
      let idx = state.cartData.findIndex((item) => item.uid === uid);
      if (idx > -1) {
        state.cartData[idx].quantity++;
      } else {
        // Вызвать геттер getOneCard не удалось!!!
        let card = state.cardsData.find((value) => value.uid === uid);
        state.cartData.push({
          uid: uid,
          price: card.price,
          quantity: 1,
          deleteFlag: false,
        });
      }
    },
    clearCart: (state) => {
      state.cartData = [];
    },
    incQuantity: (state, uid) => {
      let cartItem = state.cartData.find((item) => item.uid === uid);
      cartItem.quantity++;
    },
    decQuantity: (state, uid) => {
      let cartItem = state.cartData.find((item) => item.uid === uid);
      if (cartItem.quantity == 1) {
        let idx = state.cartData.findIndex((item) => item.uid === uid);
        state.cartData.splice(idx, 1);
      } else {
        cartItem.quantity--;
      }
    },
    deleteBascketItem: (state, uid) => {
      let idx = state.cartData.findIndex((item) => item.uid === uid);
      state.cartData.splice(idx, 1);
    },
    setDeleteStatus: (state, { uid, flag }) => {
      let idx = state.cartData.findIndex((item) => item.uid === uid);
      state.cartData[idx].deleteFlag = flag;
    },
    deleteSelected: (state) => {
      let idx = 0;
      if (state.cartData.length == 0) return;
      while (idx > -1) {
        if (state.cartData[idx]?.deleteFlag) {
          state.cartData.splice(idx, 1);
        } else {
          idx++;
          if (idx > state.cartData.length - 1) {
            break;
          }
        }
      }
    },
    selectAllbasket: (state) => {
      state.cartData.map((item) => (item.deleteFlag = true));
    },
    deselectAllbasket: (state) => {
      state.cartData.map((item) => (item.deleteFlag = false));
    },
  },
  actions: {
    // акции списка товаров
    setCardsData: (context) => {
      loadData().then((value) => context.commit("setCardsData", value.data));
    },
  },
});
