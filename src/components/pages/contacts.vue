<template lang="pug">
    .container
        .block__contacts
            .block__info
                .block__info-email
                    .block__info-titlee-mail e-mail: 
                    .block__info-title-desc yurakuzema@yandex.ru 
                .block__info-worktime
                    .block__info-title Режим работы:
                    .block__info-title-desc Пн. — пт.: с 10:00 до 18:00
                        br
                        span Сб. — вс.: Выходной
                p.block__info-paragraph Продажи осуществляются только по безналичному расчету Отгрузка товара производится на складе магазина Спустя сутки после поступления средств на наш расчетный счет!!!
                p.block__info-paragraph Адрес получения товара и документов отгрузки: Экспо Дизайн Центр“MADEX»
            .block__form
                form.login__form#form(@submit.prevent="sendOffer")
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
                        ).send-form-button Отправить
        yandex-map(
              :coords="[55.7016538, 37.42262542]"
              zoom="15"
              style="width:  1360px; height: 25rem;"
              :behaviors="['drag']"
              :controls="['trafficControl']"
              :placemarks="placemarks"
              map-type="hybrid"
            )
</template>
<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
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
      placemarks: [
      {
        coords: [55.7016538, 37.42262542],
        properties: {}, // define properties here
        options: {}, // define options here
        clusterName: "1",
        balloonTemplate: '<div>"Your custom template"</div>',
        callbacks: { click: function() {} }
      }
    ],
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
    inputApp : () => import("components/input"),
    yandexMap, 
    ymapMarker 
  },
  methods: {
     async sendOffer(user, cartProducts, value) {
      if ((await this.$validate()) === false ) return;
      this.disableSubmit = true;
      fData.append('name', this.user.name);
      fData.append('phone', this.user.phone);
      fData.append('email', this.user.email);
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
<style lang="postcss">
.block__contacts {
    display: flex;
    flex-direction: row;
}
</style>
