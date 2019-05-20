<template lang="pug">
    h1.comp-headline Сравнение товаров
      p.comp-desc Помощь при покупке. Пообщайтесь со специалистом в чате или позвоните по телефону 7‑800‑963‑61‑00
        ul.list-products
            li(v-for="product in newCurProducts" :key="product.title").card-item-compare
                card-root(
                    :title="product.title"
                    :price="product.price"
                    :img="product.pic"
                    :code="product.code"
                    :desc="product.text"
                    @favor="favorProducts",
                    @buy="buyProducts"
                )
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
    props: {
      product: Array
  },
   computed: {
        ...mapState("curProducts", {
      curProducts: state => state.curProducts
    }),
    ...mapState("curProducts", {
      cards: state => state.cards
    }),
     newCurProducts() {
       return this.formatCurProducts(this.curProducts);
     }
   },
     components: {
    cardRoot : () => import("components/card"),
    compareRoot : () => import("components/pages/compare"),
  }, 
  methods : {
    formatCurProducts(data) {
      if (data.length > 2) {
        const length = data.length -2;
        data.splice(0,length);
        return data;
      } else {
        console.log(data.length);
        return data;
      }
    },
        ...mapActions("curProducts", ["addProductCompare","addNewCard"]),
        ...mapActions("cart", ["addProductCart","addProductFavor"]),
        ...mapMutations("curProducts",["ADD_TO_MATCHING", "ADD_NEW_BREND_CATEGORY"]),
        admitCategory(brend, cards) {
            const curCat = this.cards.filter(item => item.brend === brend);
          console.log(curCat);
          this.ADD_NEW_BREND_CATEGORY(curCat);
          this.showSlider=false;
        },
    buyProducts(title) {
        const cartProduct = this.cards.filter(item=> item.title === title);
        this.addProductCart(cartProduct[0]);
        this.showResult = false;
    },
    favorProducts(title) {
        const favorProduct = this.cards.filter(item=> item.title === title);
        this.addProductFavor(favorProduct[0]);
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
.card-item-compare {
  display: flex;
  flex-direction: column;
  
  align-items: center;
  max-width: 45%;
  & .card {
    min-height: 98%;
    justify-content: flex-start;
  }
  & .card-buy {
        font-size: 1rem;
    }
  & .card-compare {
    display: none;
  }
  & .card-detail {
    display: none;
  }
}
</style>
