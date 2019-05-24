<template lang="pug">
    .footer-wrapper
        ul.footer-wrapper__links
            li.footer-wrapper__item
                .logo
                    img(src="../images/content/logo-comp.png", alt="alt")
                span.list-items Доставка
                span.list-items-links В пределах МКАД
                span.list-items-links автотранспортом нашей компании
                span.list-items Оплата
                .logo
                    img(src="../images/content/visa.png", alt="alt")
                    img(src="../images/content/mastercard.png", alt="alt")
                    span.list-items-links mastercard
            li.footer-wrapper__item
                ul.list-items Каталог
                    - var items = ["PPG", "Flugger","Beckers","Murexin","ACE","Bison","Paritet","Stolz"]
                            for item in items
                                li.list-items-links #{item}
            li.footer-wrapper__item
                ul.list-items Инфо
                    - var items = ["Главная", "Продукция","О компании","Доставка и оплата","Портфолио","Контакты"]
                            for item in items
                                li.list-items-links #{item}
            li.footer-wrapper__item
                ul.list-items Кабинет
                    - var items = ["Ваши заказы", "Список желаний","Ваш профиль"]
                            for item in items
                                li.list-items-links #{item}
            li.footer-wrapper__item
                ul.list-items Контакты
                    - var items = ["г. Москва", "Большая очаковская 43", "+7(905) 789 78 45","yurakuzema@yandex.ru "]
                            for item in items
                                li.list-items-links #{item}
        .footer-wrapper-copyright
            span © 2019 «kraskisnab». Все права защищены
</template>
<style lang="postcss">
.logo {
    & img {
        margin:0;
    }
}
.footer-wrapper{
    max-width: 1024px;
    margin: 0 auto;
        &__links {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 1rem 0;
    }
    &__item {
        color: #fff;
        display: flex;
        flex-direction: column;
        &span {
            color: #fff;
        }
        
    }
    &-copyright {
        color: #fff;
        padding: 1rem 0;
        text-align: center;
    }
    & .list-items {
        font-weight: 700;
        &-links {
            font-weight: 300;
        }
    }
}
.logo {
    width: 100%;
    display: flex;
    flex-direction: row;
}
</style>
