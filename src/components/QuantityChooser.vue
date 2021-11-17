<template>
  <div class="chooser-container">
    <button @click="decQuantity(productUID)" class="chooser-button">-</button>
    {{ getBasketItemQuantity(productUID) }}
    <button @click="incQuantity(productUID)" class="chooser-button">+</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  name: 'QuantityChooser',
  props: {
    productUID: {
      type: String,
      default: '',
    },
  },
  computed: {
    ...mapGetters(['getBasketItemQuantity']),
  },
  methods: {
    ...mapMutations(['incQuantity', 'decQuantity']),
  },
};
</script>

<style scoped>
.chooser-button {
  background-color: white;
  border-radius: 50%;
  border: 1px solid darkgray;
  cursor: pointer;
}
</style>
