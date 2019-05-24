<template lang="pug">
    .container
        .block__contacts
            .block__info
                .block__info-headline Контакты
                .block__info-email
                    .block__info-title-mail e-mail: 
                    .block__info-title-desc yurakuzema@yandex.ru 
                .block__info-worktime
                    .block__info-title Режим работы:
                    .block__info-title-desc Пн. — пт.: с 10:00 до 18:00
                        br
                        span Сб. — вс.: Выходной
                p.block__info-paragraph 
                  br
                  span Продажи осуществляются только по безналичному расчету
                  br
                  span Отгрузка товара производится на складе магазина 
                  br
                  span Спустя сутки после поступления 
                  br
                  span средств на наш расчетный счет!!!
                p.block__info-paragraph Адрес получения товара и документов отгрузки: 
                br
                span Экспо Дизайн Центр“MADEX»
            .block__form.contacts
                form.login__form#form(@submit.prevent="sendOffer")
                    .login__form-title Напишите нам и мы ответим на ваши вопросы
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
                        type="mail"
                        v-model="user.phone"
                        :errorText="validation.firstError('user.phone')"
                        )
                    .login__btn
                        button(
                        type="submit"
                        :disabled="disableSubmit"
                        ).send-form-button-contacts Отправить
        yandex-map(
              :coords="[55.7016538, 37.42262542]"
              zoom="16"
              style="width:  1024px; height: 25rem;"
              :behaviors="['drag']"
              :controls="['zoomControl']"
              :placemarks="placemarks"
            )
        .tab
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
        balloonTemplate: '<div>"Пункт самовывоза. Экспо Дизайн Центр“MADEX»"</div>',
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
      var fData = new FormData(); 
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
    padding: 6rem 0 3rem 0;
}
.block__info {
  flex: 1;
  &-headline {
    font-weight: 700;
    font-size: 1rem;
  }
  &-title-desc {
    font-weight: 700;
  }
  &-email, &-worktime {
    display: flex;
    flex-direction: row;

  }
}
.block__form {
  flex: .3;
}
.login__form {
  &-title {
    font-weight: 700;
    font-size: 1rem;
  }
}
.login__btn {
  width: 100%;
}
.send-form-button-contacts {
  margin-top: 1rem;
  padding: 6px 6px;
  width: 100%;
    border-radius: 5px;
    border: 2px solid#7D74F3;
    background: #7D74F3;
    margin-right: 0;
    color: #fff;
    &[disabled] {
    opacity: 0.5;
    filter: grayscale(100%);
  }
}
.tab {
  padding: 1rem;
}
</style>
