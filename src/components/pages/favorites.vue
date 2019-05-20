<template lang="pug">
    h1.comp-headline Избранные
      p.comp-desc Помощь при покупке. Пообщайтесь со специалистом в чате или позвоните по телефону 7‑800‑963‑61‑00
        ul.list-products-fav
            li(v-for="product in favorProducts" :key="product.title").card-item-fav
                card-root(
                    :title="product.title"
                    :price="product.price"
                    :img="product.pic"
                    :code="product.code"
                    :desc="product.text"
                    @compare="compareProducts",
                    @buy="buyProducts"
                )
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
    props: {
      product: Object
  },
   computed: {
        ...mapState("cart", {
      favorProducts: state => state.favorProducts
    }),
    ...mapState("curProducts", {
      cards: state => state.cards
    })
   },
     components: {
    cardRoot : () => import("components/card"),
    favorRoot : () => import("components/pages/favorites"),
  },
  methods: {
        ...mapActions("curProducts", ["addProductCompare","addNewCard"]),
        ...mapActions("cart", ["addProductCart","addProductFavor"]),
        ...mapMutations("curProducts",["ADD_TO_MATCHING", "ADD_NEW_BREND_CATEGORY"]),
        admitCategory(brend, cards) {
            const curCat = this.cards.filter(item => item.brend === brend);
          console.log(curCat);
          this.ADD_NEW_BREND_CATEGORY(curCat);
          this.showSlider=false;
        },
         compareProducts(title) {
           const curProduct = this.cards.filter(item=> item.title === title);
           console.log(curProduct);
            this.addProductCompare(curProduct[0]);
            this.showResult = false;
        },
    buyProducts(title) {
        const cartProduct = this.cards.filter(item=> item.title === title);
        this.addProductCart(cartProduct[0]);
        this.showResult = false;
    }
    }
}
</script>
<style lang="postcss">
.comp-headline {
  text-align: center;
  font-weight: 700;
}
.comp-desc {
  font-size: 1.4rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
}
.list-products-fav {
    display: flex;
    flex-direction: column;
}
.card-item-fav {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  & .card {
      flex-direction: row;
      align-items: center;
      flex:1;
  }
  & .card-fav {
    display: none;
  }
  & .card-buy {
        font-size: 1rem;
    }
  & .card__img {
      min-width: 50%;;
  }
  & .card-detail {
    display: none;
  }
  & .card__info {
      display: none;
  }
}
</style>