<template lang="pug">
    .h1 MAIN
        ul.list-products
            li.card-item(v-for="card in cards" :key="card.id")
                card-root(
                    :title="card.title"
                    :price="card.price"
                    :img="card.pic"
                    :code="card.code"
                    @compare="compareProducts"
                    @buy="buyProducts"
                )
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
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
      ...mapActions("curProducts", ["addProductCompare"]),
      ...mapActions("cart", ["addProductCart"]),
      makeArrWithRequiredImages(data) {
      return data.map(card => {
        const requiredPic = `http://kraskisnab.ru.com/${card.imgsrc}`;
        card.pic = requiredPic;

        return card;
      });
   },
   compareProducts(title) {
           const curProduct = this.cards.filter(item=> item.title === title);
           console.log(curProduct);
            this.addProductCompare(curProduct[0]);
        },
    buyProducts(title) {
        const cartProduct = this.cards.filter(item=> item.title === title);
        this.addProductCart(cartProduct[0]);
    }
  },
created() {
    const data = require("../../data/data.json");
    this.cards = this.makeArrWithRequiredImages(data);
    }
}
</script>
<style lang="postcss">
.list-products {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
}
.card-item {
    min-width: 25%;
    max-width: 25%;
}
</style>


