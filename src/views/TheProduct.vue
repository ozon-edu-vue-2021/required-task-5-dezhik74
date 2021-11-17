<template>
  <div class="product-container">
    <img :src="product.image" class="product-image" alt="picture" />
    <div class="product-dataholder">
      <div class="product-title">
        {{ product.dish }}
      </div>
      <div class="product-desc">
        <b>Descriprtion: </b>
        <br />
        {{ product.description }}
      </div>
      <div class="product-ingredient">
        <b>Ingredient: </b>
        {{ product.ingredient }}
      </div>
      <div class="product-measurement">
        <b>Measurement: </b>
        {{ product.measurement }}
      </div>
      <div class="product-price">
        <b>Цена: </b>
        {{ product.price }}
      </div>
      <div class="product-opers">
        <button @click="addToCart" class="card__button">В корзину</button>
        <quantity-chooser
          v-if="isProductInBasket(product.uid)"
          :productUID="product.uid"
          class="card__qtty"
        />
        <favorite-button :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import QuantityChooser from '../components/QuantityChooser.vue';
import FavoriteButton from '../components/FavoriteButton.vue';

export default {
  name: 'TheProduct',
  components: { QuantityChooser, FavoriteButton },
  data() {
    return {
      product: {},
    };
  },
  mounted() {
    this.product = this.$store.getters.getOneCard(this.$route.params.uid);
  },
  computed: {
    ...mapGetters(['isProductInBasket']),
  },
  methods: {
    addToCart() {
      this.$store.commit('addToCart', this.product.uid);
    },
  },
};
</script>

<style scoped>
.product-container {
  display: flex;
  padding-top: 12px;
}

.product-image {
  height: 200px;
  border-radius: 5px;
}

.product-dataholder {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
}

.product-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 12px;
}

.product-opers {
  display: flex;
}

.card__qtty {
  margin-left: 20px;
}
/* .product-desc {
  margin-bottom: 12px;
}

.product-desc .product-measurement {
  margin-bottom: 12px;
}

.product-ingredient {
  margin-bottom: 12px;
}

.product-measurement {
  margin-bottom: 12px;
} */
</style>
