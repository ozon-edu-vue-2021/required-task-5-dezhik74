<template>
  <div>
    <ul class="list__container">
      <cards-list-item
        v-for="card in getCardsData"
        :key="card.uid"
        :product="card"
      />
    </ul>
  </div>
</template>

<script>
import CardsListItem from "../components/CardsListItem.vue";

export default {
  name: "TheCardsList",
  components: {
    CardsListItem,
  },
  props: {
    showFavorite: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    getCardsData: function () {
      return this.showFavorite
        ? this.$store.getters.getFilteredCardsData
        : this.$store.getters.getfullCardsData;
    },
  },
};
</script>
<style scoped>
.list__container {
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 8px;
  row-gap: 8px;
}
</style>
