<template lang="pug">
    h1.comp-headline Корзина
      p.comp-desc Помощь при покупке. Пообщайтесь со специалистом в чате или позвоните по телефону 7‑800‑963‑61‑00
      .cart__block
        ul.list-cart
            li(v-for="product in cartProducts" :key="product.title").cart-item-compare
                card-root(
                    disabled="false"
                    :title="product.title"
                    :price="product.price"
                    :img="product.pic"
                ).cart-item
            .value 
                value-root(
                    :value="value"
                )
        form.login__form(@submit.prevent="sendOffer")
          .login__form-title Оформить заказ
          .login__row
            input-app(
              title="Имя"
              icon="user"
              v-model="user.name"
              :errorText="validation.firstError('user.name')"
            )
          .login__row
            input-app(
              title="Электронная почта"
              icon="key"
              type="mail"
              v-model="user.email"
              :errorText="validation.firstError('user.email')"
            )
          .login__row
            input-app(
              title="Телефон"
              icon="key"
              type="mail"
              v-model="user.phone"
              :errorText="validation.firstError('user.phone')"
            )
          .login__btn
            button(
              type="submit"
              :disabled="disableSubmit"
            ).login__send-data Отправить
</template>
<script>
import { Validator } from "simple-vue-validator";
import { mapState } from 'vuex';
export default {
   mixins: [require("simple-vue-validator").mixin],
  validators: {
    "user.name": value => {
      return Validator.value(value).required("Введите свое Имя");
    },
    "user.email": value => {
      return Validator.value(value).required("Введите Адрес электронной почты");
    },
    "user.phone": value => {
      return Validator.value(value).required("Введите Телефон");
    }
  },
    props: {
      product: Object
  },
  data() {
    return {
      disableSubmit: false,
        user: {
        name: "",
        email: "",
        phone: ""
        }
    }
  },
   computed: {
        ...mapState("cart", {
      cartProducts: state => state.cartProducts
    }),
    ...mapState("cart", {
      value: state => state.value
    }),
   },
     components: {
    cardRoot : () => import("components/card"),
    valueRoot : () => import("components/value"),
    inputApp : () => import("components/input")
  },
  methods: {
     async sendOffer() {
      if ((await this.$validate()) === false) return;
      this.disableSubmit = true;
     }
  }
}
</script>
<style lang="postcss" >
.cart__block {
  display: flex;
  flex-direction: row;
}
.list-cart {
    display: flex;
    flex-direction: column;
    flex: 1;
}
.comp-headline {
  text-align: center;
  font-weight: 700;
}
.comp-desc {
  font-size: 1.4rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
}
.cart-item {
    display: flex;
    flex-direction: row;
    width: 100%;
    & .card__desc {
    align-items: center;
    width: 60%;
  }
}

.cart-item-compare {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  & .card__desc {
    width: 100%;
  }
  & .card-title, & .card-raiting, & .card-price {
  flex:1;
  }
  & .card {
    flex-direction: row;
    justify-content: space-between;
    font-size: 1rem;
  }
  
  
}
.login__form {
  flex: 1;
}

</style>