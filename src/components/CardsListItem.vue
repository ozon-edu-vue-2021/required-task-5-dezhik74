<template>
  <li class="card__container">
    <img :src="product.image" alt="картинка" class="card__img" />
    <div class="card__title">{{ product.dish }}</div>
    <div class="card__price">{{ product.price }} руб.</div>
    <div class="card__desc">{{ product.description }}</div>
    <button @click="onClick" class="card__button">В корзину</button>
  </li>
</template>

<script>
export default {
  name: "CardsListItem",
  props: {
    product: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    onClick() {
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

.card__price {
  margin-top: 12px;
  font-weight: 600;
}

.card__desc {
  margin-top: 12px;
  font-size: 14px;
  margin-bottom: 4px;
}
</style>

<style>
.card__button {
  margin-top: auto;
  background-color: gray;
  font-weight: 700;
  color: aliceblue;
  border-radius: 4px;
  cursor: pointer;
}

</style>