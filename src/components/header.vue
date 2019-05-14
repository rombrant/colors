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
                        input(placeholder="Что вы хотите найти?").searching-input
            .container.slider(v-if="showSlider" @click="showSlider=false")
                slider-app
</template>
<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
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
      valueRoot : () => import("components/value"),
      countRoot : () => import("components/counter"),
      sliderApp : () => import("components/slider"),
  },
  computed: {
      ...mapState("cart", {
      value: state => state.value
    })
  },
  methods: {
      updateHeader() {
          this.showSlider = true;
          console.log("this.showSlider");
      }
  }
};
</script>
<style lang="postcss" scoped>
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
            top: .6rem;
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
            top: -.05rem;
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
</style>
