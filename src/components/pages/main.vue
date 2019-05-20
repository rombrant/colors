<template lang="pug">
    .mainsection
        categories-root(
            @category="admitCategory"
            :link="link"
                            )
        ul.list-products
            li.card-item(v-for="card in cardsFilter" :key="card.id")
                card-root(
                    :title="card.title"
                    :price="card.price"
                    :img="card.pic"
                    :code="card.code"
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
          link: "",
      }
  },
computed: {
    ...mapState("curProducts", {
        cards: state => state.cards,
        matching: state => state.matching,
        brends: state => state.brends,
        category: state => state.category,
    }),
    cardsFilter() {
        return this.cardsBrendFilter(this.brends, this.cards);
    }
},
  components: {
    cardRoot : () => import("components/card"),
    compareRoot : () => import("components/pages/compare"),
    categoriesRoot: () => import("components/categories")
  },
  methods: {
      ...mapActions("curProducts", ["addProductCompare","addNewCard"]),
      ...mapActions("cart", ["addProductCart","addProductFavor"]),
      ...mapMutations("curProducts",["ADD_TO_MATCHING","ADD_NEW_BREND_CATEGORY"]),
   compareProducts(title) {
           const curProduct = this.cards.filter(item=> item.title === title);
            this.addProductCompare(curProduct[0]);
        },
    buyProducts(title) {
        const cartProduct = this.cards.filter(item=> item.title === title);
        this.addProductCart(cartProduct[0]);
    },
    favorProducts(title) {
        const favorProduct = this.cards.filter(item=> item.title === title);
        this.addProductFavor(favorProduct[0]);
    },
    admitCategory(brend, crads) {
          const curCat = this.cards.filter(item => item.brend === brend);
          console.log(curCat);
          console.log(brend);
          this.ADD_NEW_BREND_CATEGORY(curCat);
          this.showSlider=false;
          this.link="/products"
      },
    cardsBrendFilter(brends,cards) {
        var arr = [];
        var inner = [];
       Array.from(brends).forEach(el => {
            
            for (var n= 0; cards.length>n; n++) {
                if (el === cards[n].brend){
                    arr.push(cards[n]);
                    break;
                }
            }
            
        })
        console.log(arr);
        console.log(inner);
        return arr;
    }
  }
}
</script>
<style lang="postcss">
.mainsection {
    padding: 2% 0;
    font-size: 3rem;
    & .counter {
        display: none;
    }
    & .list-categories {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    & .item-categories {
        flex: 1;
        text-align: center;
        & .tabs__link {
            top: 2.5rem;
            left: 2rem;
        width: 80%;
        margin: 0 auto;
        height: 2rem;
    }
    }
    & .categories-link {
        font-size: 1.8rem;
        padding: 0;
        width: 100%;
    }
    
}
.list-products {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    font-size: 1rem;
    & .brends {
        text-align: center;
        font-size: 2rem;
    }
}
.card-item {
    min-width: 25%;
    max-width: 25%;
    & .card-detail {
        display: none;
    }
    & .card__info {
        display: none;
    }
    & .card__panel {
        display: none;
    }
    & .card-price {
        display: none;
    }
}
</style>


