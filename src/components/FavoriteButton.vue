<template>
  <img
    @click="changeFavoriteStatus(product.uid)"
    :src="getHeartImage"
    alt="heart"
    class="card__heart"
  />
</template>

<script>
import whiteHeart from '../assets/icons/white_heart.png';
import blackHeart from '../assets/icons/black_heart.png';
import { mapMutations } from 'vuex';

export default {
  name: 'FavoriteButton.vue',
  props: {
    product: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    getHeartImage: function () {
      return this.product.favorite ? blackHeart : whiteHeart;
    },
  },
  methods: {
    ...mapMutations(['changeFavoriteStatus']),
  },
};
</script>

<style scoped>
.card__heart {
  width: 20px;
  height: 20px;
  transform: translateY(8px);
  margin-left: auto;
  margin-right: 20px;
}
</style>
