<template lang="pug">
    .products
        ul.categories-list 
            h3(@click="showList = !showList" exact-active-class="active").production Производители
            category-root(v-if="showList" @category="admitCategory" :link="link")
        ul.list-category
            li.item-products(v-for="card in category") 
                card-root(
                    :title= "card.title",
                    :price= "card.price",
                    :img= "card.pic",
                    :code= "card.code",
                    @compare="compareProducts",
                    @favor="favorProducts",
                    @buy="buyProducts"
                )
</template>
<script>
import {mapState, mapMutations, mapActions} from "vuex"
export default {
    data() {
        return {
            link: '',
            showList: false
        }
    },
    components: {
        cardRoot: () => import("components/card"),
        categoryRoot: () => import("components/categories")
    },
      computed: {
      ...mapState("curProducts", {
      category: state => state.category,
      cards: state => state.cards
    })
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
          this.link="/products"
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
.products {
    display: flex;
    flex-direction: row;
}
.list-category {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.item-products {
    max-width: 25%;
    
    & .card-detail {
        display: none;
    }
}
.categories-list {
    cursor: pointer;
    min-width: 15%;
    padding-top: 3rem; 
    & .tabs__link {
    position: absolute;
    top: 1rem;
    left: 1.5rem;
    min-width: 9rem;
    min-height: 1.5rem;
    }
    & .categories {
        background: #fff;
    }
    & .production {
        position: relative;
        line-height: 2rem;
        background: #fff;
        &:hover {
            background-color: rgba(125, 116, 243, 0.6);
        }
        &::before {
            position: absolute;
            top: .5rem;
            right: 1rem;
            content: '';
            width: .5rem;
            height: .5rem;
            display: block;
            border-left: 2px solid #000;
            border-bottom: 2px solid #000;
            transform: rotate(-45deg);
        }
    }
    
}
</style>
