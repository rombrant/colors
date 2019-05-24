<template lang="pug">
    .products
        ul.categories-list 
            h3(@click="showList = !showList" exact-active-class="active").production Производители
            category-root(v-if="showList" @category="admitCategory" :link="link")
        .observer__module
            pagination-root(@change="changeList")
            ul.list-category 
                li.item-products(v-for="card in curListCat") 
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
        categoryRoot: () => import("components/categories"),
        paginationRoot: () => import("components/pagination")
    },
      computed: {
      ...mapState("curProducts", {
      category: state => state.category,
      cards: state => state.cards,
      pagedots: state => state.pagedots,
      curListCat: state => state.curListCat
    }), 
     paginateCategory() {
         return this.paginateCategoryMethod(this.category);
     }
    },
    methods: {
        ...mapActions("curProducts", ["addProductCompare","addNewCard"]),
        ...mapActions("cart", ["addProductCart","addProductFavor"]),
        ...mapMutations("curProducts",["ADD_TO_MATCHING", "ADD_NEW_BREND_CATEGORY","ADD_NEW_ARR_PAGEDOTS","ADD_NEW_ARR_CURLIST"]),
        admitCategory(brend, cards, category) {
            const curCat = this.cards.filter(item => item.brend === brend);
          console.log(curCat);
            this.ADD_NEW_BREND_CATEGORY(curCat);
          const pageDots = Math.ceil(curCat.length/10);
            var arr = new Array(pageDots); 
            for (var i =0; arr.length>i; i++) {
                arr[i]=i+1;
            }
            this.ADD_NEW_ARR_PAGEDOTS(arr);
            const curCatFirst = this.category.slice(0, 10);
            this.ADD_NEW_ARR_CURLIST(curCatFirst);
          this.showSlider=false;
          this.link="/products"
        },
        changeList(dot, category) {
            const EndPage = dot * 10;
            const beginPage = EndPage -10;
            const curCat = this.category.slice(beginPage, EndPage);
            this.ADD_NEW_ARR_CURLIST(curCat);
            console.log(curCat); 
        },
        paginateCategoryMethod(category) {
            const pageDots = Math.ceil(category.length/10);
            var arr = new Array(pageDots); 
            for (var i =0; arr.length>i; i++) {
                arr[i]=i+1;
            }
            const curCat = category
            console.log(arr);
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
    margin-bottom: 6rem;
}
.item-products {
    max-width: 25%;
    & .card-title {
        text-align: center;
    }
    & .card__img {
        & img {
            width: 50%;
            margin: 0 auto;
        }
    }
    & .card-detail {
        display: none;
    }
}
.categories-list {
    cursor: pointer;
    min-width: 15%;
    padding-top: 5rem; 
    & .tabs__link {
    position: absolute;
    top: 1rem;
    left: 1.5rem;
    min-width: 9rem;
    min-height: 1.5rem;
    font-size: .8rem;
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
            top: .6rem;
            right: .5rem;
            content: '';
            width: .5rem;
            height: .5rem;
            display: block;
            border-left: 1px solid #000;
            border-bottom: 1px solid #000;
            transform: rotate(-45deg);
        }
    }
    
}

</style>
