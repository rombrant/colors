<template lang="pug">
    .container 
        ul.header__list
            li.header__list__item
                .header__list__item__contacts
                    a(href="+78009636160").header__list__item-tel 7(800) 963 61 00
                    a(href="+78009636160").header__list__item-callback Перезвоните мне!
                ul.header__list__icons
                    li.header__list__item__icons-pic(@click="showSlider=false")
                            router-link(
                                data-text="Избранное"
                                to="/favorites"
                                exact-active-class="active"
                                showSlider="false"
                            ).tabs__link-pic 
                    li.header__list__item__icons-pic(@click="showSlider=false")
                            router-link(
                                data-text="Сравнение"
                                to="/compare"
                                exact-active-class="active"
                                "showSlider"="false"
                            ).tabs__link-pic 
                    li.header__list__item__icons-pic(@click="showSlider=false")
                            router-link(
                                data-text="Корзина"
                                to="/cart"
                                exact-active-class="active"
                                showSlider=false
                            ).tabs__link-pic
                            count-root(
                                v-if="value.length"
                                :value="value"
                            ).stylezed
                    li.header__list__item__icons__desc
                        span.header__list__item__icons__desc-count
                            count-root(
                                :value="value"
                                text="товаров"
                            ) 
                        span.header__list__item__icons__desc-count 
                            value-root(
                                :value="value"
                            )
            li.header__list__item
                nav.header__list__item__nav
                    ul.header__list__item__nav__list
                        li.header__list__item__nav__item(v-for="tab in tabs" @click="tab.title === 'Главная' ? updateHeader() : showSlider=false")
                            router-link(
                                :data-text="tab.title" 
                                :to="tab.href"
                                exact-active-class="active"
                            ).tabs__link {{tab.title}}
                        li( @click="showList=!showList").header__list__item__nav__item
                            .tabs__link.categories-list-links Продукция
                                categories-root(
                                    v-if="showList"
                                    @category="admitCategory"
                                    :link="link"
                                    )
                .searching
                    label.searching-label
                        input-app(  v-model="searching",
                                    placeholder="Что вы хотите найти?"
                                    v-bind="$attrs"
                                    @input="preventInput").searching-input
                        ul.result-searching(v-if="matching.length>0 && showResult")
                            li.result-searching__item(v-for="match in matching" :key="match.id")
                                card-root(
                                    :title= "match.title",
                                    :price= "match.price",
                                    :img= "match.pic",
                                    :code= "match.code",
                                    :desc= "match.desc",
                                    @compare="compareProducts",
                                    @favor="favorProducts",
                                    @buy="buyProducts"
                                )
            .container.slider(v-if="showSlider" @click="showSlider=false" )
                slider-app
</template>
<script>
//const t = 'testtext dummy'
//const serach = /test|dummy/gmi
//a = []
//for (let i = 0; i < test.length; i++) {
  //  const e = test[i]
    //const r = e.title.match(serach)
     //   if(r.length > 0){
       //     a.push(i)
        //}    
//}

import { mapState, mapMutations, mapActions } from 'vuex';
export default {
  data() {
    return {
        link:'/products',
        searching:'',
        showResult:false,
        showSlider: true,
        showList: false,
      tabs: [
        { title: "Главная", href: "/"},
        { title: "О компании", href: "/about" },
        { title: "Доставка и оплата", href: "/transport" },
        { title: "Портфолио", href: "/portfolio" },
        { title: "Контакты", href: "/contacts" }
      ]
    };
  },
  components: {
      inputApp: () => import("components/input"),
      valueRoot : () => import("components/value"),
      countRoot : () => import("components/counter"),
      sliderApp : () => import("components/slider"),
      cardRoot : () => import("components/card"),
      categoriesRoot: () => import("components/categories")
  },
  computed: {
      ...mapState("cart", {
      value: state => state.value
    }),
    ...mapState("curProducts", {
        cards: state => state.cards,
        matching: state => state.matching
    })
  },
  methods: {
      ...mapActions("curProducts", ["addProductCompare","addNewCard"]),
      ...mapActions("cart", ["addProductCart","addProductFavor"]),
      ...mapMutations("curProducts",["ADD_TO_MATCHING","ADD_NEW_BREND_CATEGORY","ADD_NEW_ARR_CURLIST","ADD_NEW_ARR_PAGEDOTS"]),
      updateHeader() {
          this.showSlider = true;
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
      preventInput(searcher, cards) {
          if (this.searching.length>0) {
            const curProduct = this.cards.filter(item=>  item.title.toLowerCase().indexOf(this.searching.toLowerCase()) !== -1);
            this.ADD_TO_MATCHING(curProduct);
            this.showResult = true;
          }
          else {
              this.showResult = false;
          }
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
};
</script>
<style lang="postcss" >
.header__list__item__nav {
    padding-left: 50px;
}
.categories-list-links {
    position: relative;
    &:hover {
        &.categories-list-links:before {
             border-left: 1px solid #7D74F3;
            border-bottom: 1px solid #7D74F3;
        }
           
            }
     &::before {
            position: absolute;
            top: 4px;
            right: -1rem;
            content: '';
            width: .5rem;
            height: .5rem;
            display: block;
            border-left: 1px solid #000;
            border-bottom: 1px solid #000;
            transform: rotate(-45deg);
            
        }
    & .counter {
        display: none;
    }
    & .categories {
        position: absolute;
        top: 2rem;
        left: 0;
        background: #fff;
        z-index: 10000;
    }
}
.header__list__icons {
    display: flex;
    flex-direction: row;
    align-items: center;
}
.header__list__item__icons-pic {
border-radius: 3rem;
border: 2px solid rgb(255, 255, 255);
color: #fff;
cursor: pointer;
margin-right: 1.8rem;
    &:hover {
        background: #fff;
    }
}
.tabs__link {
    &:hover {
        color: #7D74F3;
    }
}
.header {
    &__list {
        padding-top: 1rem;
        padding-bottom: 1rem;
        &__icons {
            flex: 1;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            
        }
        &__item {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            &:nth-child(1) {
                align-items: center;
                padding-bottom: 1rem;
            }
            
            &:nth-child(2) {
                padding: 10px;
                border-radius: 3rem;
                background-color: #fff;
                align-items: center;
            }
            &__contacts {
                flex: 1;
            }
            
            &-tel {
                position: relative;
                padding: .6rem 0 0 3rem; 
                color: #fff;
                text-decoration-line: none;
                &:before {
                    display: block;
                    content: '';
                    top: .6rem;
                    left: .6rem;
                    position: absolute;
                    width: 1.5rem;
                    height: 1.5rem;
                    cursor: pointer;
                    background: svg-load('phone-call.svg', fill=#fff, width=100%, height=100%);
                    background-position: center center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    transition: .6s;
                }
                &:after {
                    display: block;
                    content: '';
                    width: 2.5rem;
                    height: 2.5rem;
                    position: absolute;
                    border: 2px solid #fff;
                    border-radius: 50%;
                    top: 0;
                    transition: .6s;
                }
                &:hover {
                    &.header__list__item-tel:after {
                        background: #fff;
                    }
                    &.header__list__item-tel:before {
                        background: svg-load('phone-call.svg', fill=#7D74F3, width=100%, height=100%);
                        transform: rotate(35deg);
                        transition: .6s;
                        z-index: 10000;
                    }
                }
            }
            &-callback {
                color: #fff;
                margin-left: 10%;
                padding: .5rem .8rem;
                border-radius: 3rem;
                border: 2px solid #fff;  
                text-decoration-line: none;
                &:hover {
                    background: #fff;
                    color: #7D74F3;
                }
            }
            &__icons {
                &-pic {
                    position: relative;
                    display: block;
                    width: 2.5rem;
                    height: 2.5rem;
                    border: 2px solid #fff;
                    border-radius: 50%;
                    &:nth-child(1) {
                        &:before {
                            display: block;
                            content: '';
                            top: .4rem;
                            left: .4rem;
                            position: absolute;
                            width: 1.5rem;
                            height: 1.5rem;
                            cursor: pointer;
                            background: svg-load('heart.svg', fill=#fff, width=100%, height=100%);
                            background-position: center center;
                            background-repeat: no-repeat;
                            background-size: cover;
                        }
                        &:hover {
                            &.header__list__item__icons-pic::before {
                                 background: svg-load('heart.svg', fill=#7D74F3, width=100%, height=100%);
                            }
                        } 
                    }
                    
                    &:nth-child(2) {
                        &:before {
                            display: block;
                            content: '';
                            top: .4rem;
                            left: .4rem;
                            position: absolute;
                            width: 1.5rem;
                            height: 1.5rem;
                            cursor: pointer;
                            background: svg-load('comparison.svg', fill=#fff, width=100%, height=100%);
                            background-position: center center;
                            background-repeat: no-repeat;
                            background-size: cover;
                        } 
                        &:hover {
                            &.header__list__item__icons-pic::before {
                                 background: svg-load('comparison.svg', fill=#7D74F3, width=100%, height=100%);
                            }
                        }
                    }
                    &:nth-child(3) {
                        &:before {
                            display: block;
                            content: '';
                            top: .4rem;
                            left: .4rem;
                            position: absolute;
                            width: 1.5rem;
                            height: 1.5rem;
                            cursor: pointer;
                            background: svg-load('shopping-cart.svg', fill=#fff, width=100%, height=100%);
                            background-position: center center;
                            background-repeat: no-repeat;
                            background-size: cover;
                        }
                        &:hover {
                            &.header__list__item__icons-pic::before {
                                 background: svg-load('shopping-cart.svg', fill=#7D74F3, width=100%, height=100%);
                            }
                        }  
                    }
                }
                &__desc {
                    display: flex;
                    flex-direction: column;
                    max-width: 30%;
                    text-align: end;
                    &-count {
                        & .info {
                            color: #fff;
                        }
                    }
                }
            }
            &__nav {
                &__list{
                    display: flex;
                    flex-direction: row;
                }
                &__item {
                    cursor: pointer;
                    padding-right: 1rem;
                    border-right: 1px solid rgba(48, 48, 48, .4);
                    margin-right: 1rem;
                    text-decoration-line: none;
                    &:last-child {
                        border: none;
                        margin-right: 0;
                        padding-right: 0;
                    }
                }
            }
        }
    }
}
.tabs__link-pic {
    display: block;
    position: absolute;
    top: -25%;
    left: -25%;
    text-decoration-line: none;
    min-width: 3rem;
    min-height: 3rem;
}
.tabs__link {
    text-decoration-line: none;
}
.stylezed {
    position: absolute;
    top: -.5rem;
    right: -.5rem;
    width: 1.2rem;
    text-align: center;
    background: #7D74F3;
    border-radius: 50%;
}
.searching {
    padding-right: 20px;
    &-label {
        display: block;
        position: relative;
        &::before {
            display: block;
            position: absolute;
            top: 10px;
            right: -.1rem;
            content:'';
            width: 1rem;
            height: 1rem;
            cursor: pointer;
            background: svg-load('searcher.svg', fill=#fff, width=100%, height=100%);
            background-position: center center;
            background-repeat: no-repeat;
            background-size: contain;
            z-index: 10000;
            
        }
        &::after {
            display: block;
            position: absolute;
            top: 0;
            right: -.7rem;
            content:'';
            width: 2.3rem;
            height: 2.3rem;
            border-radius: 50%;
            background: #7D74F3
        }
    }
    &-input {
        padding: .5rem 1rem ;
        border-radius: 3rem;
        border: 1px solid rgba(48, 48, 48, .4);
        & .input__error-tooltip {
            display: none;
        }
        & input {
            border: none;
            padding: 0;
        }
    }
}
.result-searching {
   overflow-x: hidden;
   overflow-y: scroll;
    max-height: 31rem;
    position: absolute;
    z-index: 100000;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 50vw;
    left: -30rem;
    background-color: rgba(125, 116, 243, 0.6);
    border-radius: 3rem; 
    transition: .7s;
    &__item {
        width: 33%;
    }
    & .card {
        border-radius: 1.5rem;
        box-shadow: 0 5px 10px 10px;
    }
    & .card-detail {
        display: none;
    }
}
.active {
    color: #7D74F3;
    & .header__list__item__icons-pic::before {
        ackground: svg-load('searcher.svg', fill=#1CAB6E, width=100%, height=100%);
    }
}
</style>
