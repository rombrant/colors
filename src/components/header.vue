<template lang="pug">
    .container 
        ul.header__list
            li.header__list__item
                .header__list__item__contacts
                    a(href="+78009636160").header__list__item-tel 7(800) 963 61 00
                    a(href="+78009636160").li.header__list__item-callback Перезвоните мне!
                ul.header__list__icons
                    li.header__list__item__icons-pic Избранное
                    li.header__list__item__icons-pic 
                            router-link(
                                data-text="Сравнение"
                                to="/compare"
                                exact-active-class="active"
                                "showSlider"="false"
                            ).tabs__link Сравнение
                    li.header__list__item__icons-pic
                            router-link(
                                data-text="Корзина"
                                to="/cart"
                                exact-active-class="active"
                                "showSlider"="false"
                            ).tabs__link Корзина
                    li.header__list__item__icons__desc
                        span.header__list__item__icons__desc-count 0 товара
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
            .slider(v-if="showSlider")
                ul.slider__list
                    li.slider__item slider
</template>
<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
        showSlider: true,
      tabs: [
        { title: "Главная", href: "/", mode:true},
        { title: "Продукция", href: "/products" },
        { title: "О компании", href: "/about" },
        { title: "Доставка и оплата", href: "/transport" },
        { title: "Портфолио", href: "/portfolio" },
        { title: "Контакты", href: "/contacts" }
      ]
    };
  },
  components: {
      valueRoot : () => import("components/value")
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
padding: .5rem 1rem;
cursor: pointer;
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
        padding-top: 3rem;
        padding-bottom: 2rem;
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
                &__desc {
                    display: flex;
                    flex-direction: column;
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
.tabs__link {
    text-decoration-line: none;
}
.searching {
    &-label {
        display: block;
        position: relative;
    }
    &-input {
        padding: .5rem 1rem;
        border-radius: 3rem;
        border: 1px solid rgba(48, 48, 48, .4);
    }
}
</style>
