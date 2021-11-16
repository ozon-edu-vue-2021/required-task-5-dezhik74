<template>
  <div class="product-container">
    Продукт {{ $route.params.uid }}
    <br>
    {{ product }}
    <img :src="product.image" alt="picture" />
    <div class="product-title">
      {{ product.dish }}
    </div>
    <div class="product-desc">
      {{ product.description }}
    </div>
    <div class="product-ingredient">
      {{ product.ingredient }}
    </div>
    <div class="product-measurement">
      {{ product.measurement }}
    </div>
    <div class="product-price">
      {{ product.price }}
    </div>
  </div>
</template>

<script>
export default {
  name: "TheProduct",
  data() {
    return{
      product: {},
    };
  },
  mounted() {
    this.product = this.$store.getters.getOneCard(this.$route.params.uid);
  },
};
</script>

<style scoped>
.product-container {
  display: flex;
  flex-direction: column;
}
</style>