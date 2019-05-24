<template lang="pug">
    h2 Страница Продукта:  {{detailProduct.title}}
        .product-card-item
            card-root(
                :title="detailProduct.title"
                :price="detailProduct.price"
                :img="detailProduct.pic"
                :code="detailProduct.code"
                :desc="detailProduct.text"
                @compare="compareProducts",
                @favor="favorProducts",
                @buy="buyProducts"
            )
        
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex"
export default {
    components: {
        cardRoot: () => import ("components/card") 
    },
    computed: {
        ...mapState("curProducts", {
          detailProduct: state => state.detailProduct,
          cards: state => state.cards
      }),
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
.product-card-item {
    & .card-code {
        font-size: 1rem;
        letter-spacing: 0;
    }
    & .card-status {
        font-size: 1rem;
        letter-spacing: 0;
    }
    & .card-detail {
        display: none;
    }
    & .card {
        flex-direction: row;
        &:hover {
            box-shadow: none;
        }
    }
    & .card-buy {
        font-size: 1rem;
    }
    & .card__img {
        min-width: 45%;
        
    }
}
</style>
