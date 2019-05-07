<template lang="pug">
    .h1 MAIN
        ul.list-products
            li.card-item(v-for="card in cards" :key="card.id")
                card-root(
                    :title="card.title"
                    :price="card.price"
                    :img="card.imgsrc"
                    :code="card.code"
                    @change="compareProducts"
                )
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
    props: {
      card: Object
  },
    data() {
    return {
        cards: []
    }
},
  components: {
    cardRoot : () => import("components/card"),
    compareRoot : () => import("components/pages/compare"),
  },
  methods: {
      ...mapMutations("curProducts", ["ADD_CURPRODUCT"]),
      makeArrWithRequiredImages(data) {
      return data.map(card => {
        const requiredPic = `http://kraskisnab.ru.com/${card.imgsrc}`;
        card.imgsrc = requiredPic;

        return card;
      });
   },
   compareProducts(title) {
           const curProduct = this.cards.filter(item=> item.title === title);
            console.log(curProduct);
            this.ADD_CURPRODUCT(curProduct[0]);
        }
  },
created() {
    const data = require("../../data/data.json");
    this.cards = this.makeArrWithRequiredImages(data);
    }
}
</script>
<style lang="postcss" scoped>
.list-products {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
}
.card-item {
    min-width: 25%;
    max-width: 25%;
}
</style>


