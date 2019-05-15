<template lang="pug">
    .container 
        ul.header__list
            li.header__list__item
                .header__list__item__contacts
                    a(href="+78009636160").header__list__item-tel 7(800) 963 61 00
                    a(href="+78009636160").li.header__list__item-callback Перезвоните мне!
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
                .searching
                    label.searching-label
                        input-app(  v-model="searching",
                                    placeholder="Что вы хотите найти?"
                                    v-bind="$attrs"
                                    @input="preventInput").searching-input
                        .result-searching(v-if="showResult")
                            card-root(
                                :title= "matching.title",
                                :price= "matching.price",
                                :img= "matching.pic",
                                :code= "matching.code",
                                :desc= "matching.desc",
                                @compare="compareProducts",
                                @favor="favorProducts",
                                @buy="buyProducts"
                            )
            .container.slider(v-if="showSlider" @click="showSlider=false")
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
        searching:'',
        showResult:false,
        showSlider: true,
      tabs: [
        { title: "Главная", href: "/"},
        { title: "Продукция", href: "/products" },
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
  },
  computed: {
      ...mapState("cart", {
      value: state => state.value
    }),
    ...mapState("curProducts", {
        cards: state => state.cards,
        searcher: state => state.searcher,
        matching: state => state.matching
    })
  },
  methods: {
      ...mapActions("curProducts", ["addProductCompare","addNewCard"]),
      ...mapActions("cart", ["addProductCart","addProductFavor"]),
      ...mapMutations("curProducts",["ADD_TO_SEARCHER","ADD_TO_MATCHING"]),
      updateHeader() {
          this.showSlider = true;
      },
      preventInput(searcher, cards) {
          console.log(event.data);
          this.ADD_TO_SEARCHER(event.data);
          console.log(searcher);
          const curProduct = this.cards.filter(item=>  item.title.toLowerCase().indexOf(this.searching.toLowerCase()) !== -1);
          console.log(curProduct[0]);
          this.ADD_TO_MATCHING(curProduct[0]);
          this.showResult = true;
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
        color: #5CD444;
    }
}
.header {
    &__list {
        padding-top: 1rem;
        padding-bottom: 1rem;
        &__icons {
            padding-right: 3rem; 
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
                padding: 1rem;
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
                        background: svg-load('phone-call.svg', fill=#1CAB6E, width=100%, height=100%);
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
                                 background: svg-load('heart.svg', fill=#1CAB6E, width=100%, height=100%);
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
                                 background: svg-load('comparison.svg', fill=#1CAB6E, width=100%, height=100%);
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
                                 background: svg-load('shopping-cart.svg', fill=#1CAB6E, width=100%, height=100%);
                            }
                        }  
                    }
                }
                &__desc {
                    display: flex;
                    flex-direction: column;
                    width: 40%;
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
    &-label {
        display: block;
        position: relative;
        &::before {
            display: block;
            position: absolute;
            top: .15rem;
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
            top: -.55rem;
            right: -.7rem;
            content:'';
            width: 2.3rem;
            height: 2.3rem;
            border-radius: 50%;
            background: #7D74F3
        }
    }
    &-input {
        padding: .5rem 1rem;
        border-radius: 3rem;
        border: 1px solid rgba(48, 48, 48, .4);
    }
}
.result-searching {
    position: absolute;
    z-index: 10000;
    & .card {
        border-radius: 1.5rem;
        box-shadow: 0 5px 10px 10px;
    }
    & .card-detail {
        display: none;
    }
}
.active {
    color: #1CAB6E;
    &.header__list__item__icons-pic::before {
        ackground: svg-load('searcher.svg', fill=#1CAB6E, width=100%, height=100%);
    }
}
</style>
