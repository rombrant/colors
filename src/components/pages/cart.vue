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
        form.login__form#form(@submit.prevent="sendOffer" v-if="cartProducts.length>0")
          .login__form-text Оформить заказ
          .login__row
            input-app(
              placeholder="Введите имя"
              title="Имя"
              icon="user"
              v-model="user.name"
              :errorText="validation.firstError('user.name')"
            )
          .login__row
            input-app(
              placeholder="example@mail.ru"
              title="Электронная почта"
              icon="key"
              type="mail"
              v-model="user.email"
              :errorText="validation.firstError('user.email')"
            )
          .login__row
            input-app(
               placeholder="+7 (_ _ _) _ _ _ - _ _ - _ _ "
              title="Телефон"
              icon="key"
              type="text"
              v-model="user.phone"
              :errorText="validation.firstError('user.phone')"
            )
          .login__btn
            button(
              type="submit"
              :disabled="disableSubmit"
            ).send-form-button Отправить
      .value(v-if="value.length>0") 
                  value-root(
                      :value="value"
                  )
</template>
<script>
import $ from "jquery"
import axios from "axios"
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
     async sendOffer(user, cartProducts, value) {
      if ((await this.$validate()) === false ) return;
      this.disableSubmit = true;
      var products = [];
      var code = [];
      var price = [];
      for (var i=0 ; this.cartProducts.length>i; i++) {
        products[i] = this.cartProducts[i].title;
        code[i] = this.cartProducts[i].code;
        price[i] = this.cartProducts[i].price;
      }
       var realPrice = 0;
            Array.from(this.value).forEach(element => {
                realPrice += element;
            });
      var fData = new FormData();

      fData.append('name', this.user.name);
      fData.append('phone', this.user.phone);
      fData.append('email', this.user.email);
      fData.append('totalprice', realPrice);
      fData.append('products', products);
      fData.append('code', code);
      fData.append('price', price);
      console.log(products, code, price,realPrice);
      console.log(fData.getAll('products'));
        $.ajax({
      url: 'post.php',
      type: 'POST',
      contentType: false,
      processData: false,
      data: fData,
      success: function(msg) {
        console.log(msg);
        if (msg == 'ok') {
          alert('Заказ отправлен, Менеджер магазина свяжется с вами через несколько минут');
          this.disableSubmit = false;
          $('#form').trigger('reset'); // очистка формы
        } else {
          this.disableSubmit = false;
          alert('Ошибка');
        }
      }
    });
      
     }
  }
}
</script>
<style lang="postcss" >
.value {
  padding-top: 3rem;
  & .info{
    color: rgb(243, 116, 116);
  }
  
}
.send-form-button {
  margin-top: 1rem;
    border-radius: 3rem;
    border: 2px solid#7D74F3;
    background: #7D74F3;
    margin-right: 0;
    color: #fff;
    &[disabled] {
    opacity: 0.5;
    filter: grayscale(100%);
  }
}
.cart__block {
  display: flex;
  flex-direction: row;
}
.list-cart {
    display: flex;
    flex-direction: column;
    flex: 1;
    max-height: 25rem;
    overflow-y: scroll
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
    width: 70%;
  }
  & .card__img {
    width: 20%;
  }
  & .card-title {
    font-size: .8rem;
    font-weight: 700;
  }
}

.cart-item-compare {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  min-height: 25%;
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
  align-items: center;
  display: flex;
  flex-direction: column;
  max-height: 25rem;
  & .login__form-text {
  margin-bottom: 1rem;
  flex:1;
  font-size: 1.5rem;
  }
  & .login__row {
    flex: 1;
    width: 100%;
  }  
}

</style>