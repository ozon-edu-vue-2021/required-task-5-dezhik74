<template>
  <div>
    <ul class="list__container">
      <cards-list-item
        v-for="card in getfullCardsData"
        :key="card.uid"
        :product="card"
      />
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CardsListItem from "./CardsListItem.vue";

export default {
  name: "TheCardsList",
  components: {
    CardsListItem,
  },
  computed: {
    ...mapGetters(["getfullCardsData"]),
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
