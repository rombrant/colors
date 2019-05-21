<template lang="pug">
    .mainsection
        categories-root(
            @category="admitCategory"
            :link="link"
                            )
        ul.list-products
            -
                var firms = [
                    {
                        path:'flugger',
                        text:'Flügger - датская группа, которая производит краски, обои и малярные инструменты '
                    },
                    {
                        path:'murexin',
                        text:'Murexin – новые решения и продукты, которые вам понравятся '
                    },
                    {
                        path:'bison',
                        text:'bison - сфера производства лакокрасочной продукции с 1885 года'
                    },
                    {
                        path:'tikkurila',
                        text:'Flügger - датская группа,  которая производит краски, обои и малярные инструменты '
                    },
                ]
            for firm in firms
                li.card-item
                    img(src=`../../images/content/${firm.path}-logo.jpg`)
                    p.text #{firm.text}
        .block__offer
            h3.headline Акции и скидки  
            img(src="../../images/content/presentation.png").block__offer__img
        .new__offers
            h3.headline Новинки     
            ul.list-products 
                li.item-products(v-for="card in cardsFilter" :key="card.id")
                    card-root(
                        :title="card.title"
                        :price="card.price"
                        :img="card.pic"
                        :code="card.code"
                        @compare="compareProducts",
                        @favor="favorProducts",
                        @buy="buyProducts"
                )
        .new__offers
            h3.headline Популярные товары    
            ul.list-products 
                li.item-products(v-for="card in cardsPopular" :key="card.id")
                    card-root(
                        :title="card.title"
                        :price="card.price"
                        :img="card.pic"
                        :code="card.code"
                        @compare="compareProducts",
                        @favor="favorProducts",
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
          link: "",
      }
  },
computed: {
    ...mapState("curProducts", {
        cards: state => state.cards,
        matching: state => state.matching,
        brends: state => state.brends,
        category: state => state.category,
        pagedots: state => state.pagedots,
        newProduct: state => state.newProduct
    }),
    cardsFilter() {
        return this.cardsBrendFilter(this.brends, this.cards);
    },
    cardsPopular() {
        return this.cardsPopulaGenerator(this.brends, this.cards);
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
      ...mapMutations("curProducts",["ADD_TO_MATCHING","ADD_NEW_BREND_CATEGORY","ADD_NEW_ARR_PAGEDOTS","ADD_NEW_ARR_CURLIST","ADD_NEW_ARR_PRODUCT"]),
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
            const curCatFirst = curCat.slice(0, 10);
            this.ADD_NEW_ARR_CURLIST(curCatFirst);
          this.showSlider=false;
          this.link="/products"
        },
    cardsBrendFilter(brends,cards) {
        var arr = new Array(4);
        for (var i=0; arr.length>i; i++) {
            const min = 1;
            const max = 170;
            var random = Math.floor(Math.random() * (max - min)) + min;
            console.log(random);
            console.log(this.cards[random])
            arr[i]= (this.cards[random]);
        }
        console.log(arr);
        return arr;    

    },
    cardsPopulaGenerator(brends,cards) {
        var arr = new Array(8);
        for (var i=0; arr.length>i; i++) {
            const min = 1;
            const max = 170;
            var random = Math.floor(Math.random() * (max - min)) + min;
            console.log(random);
            console.log(this.cards[random])
            arr[i]= (this.cards[random]);
        }
        console.log(arr);
        return arr;    

    }
  }
}
</script>
<style lang="postcss">
.block__offer {
    min-width: 100%;
    min-height: 400px;
    background-image: url('../../images/content/layers-sale.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    &__img {
        transform: translateY(10%);
    }
}
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
    & .item-products {
        width: 25%;
        & .card-detail {
            display: none;
        }
    }
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
    & .card__desc {
        display: none;
    }
}
</style>


