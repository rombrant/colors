<template lang="pug">
    ul.about
        li.about__block
            .about__block__desc
                h1.comp-headline Мы успешная и энергично работающая компания на рынке лакокрасочных материалов с 2002 года 
                p.comp-desc Мы представляем на российском рынке продукцию таких известных и зарекомендовавших себя  ведущих зарубежных производителей, как:  Beckers (Швеция), Sherwin-Willams (США) и Tikkurila (Финляндия)  
                    br 
                    span Имеем в своем ассортименте продукцию таких компаний, как: Тиккурила (Россия), Дюфа (Россия), Dulux (Россия) и не только
            .about__block__img
                img(src="../../images/content/gym.png", alt="alt")
        li.about__block.about__block-second
            .about__block__desc
                h1.comp-headline Яркий подход!
                    br 
                    span Мы всегда расширяем ассортимент предлагаемой нами продукции и внимательно отслеживаем качество товара 
                p.comp-desc Нашей компании разработана настолько уникальная система скидок, что принимаемые нашими уже ставшими постоянными Клиентами решения о Сотрудничестве именно с нами – являются не только финансово взвешенными и выгодными, но и делают наши союзы постоянными, надежными и привлекательными.
            .about__block__img
                img(src="../../images/content/ecology-globe.png", alt="alt")
        .decorate-section
            .decorate-section-layer
        li.about__block.about__block-third
            .about__block__desc
                p.comp-headline Двери нашего интернет-магазина всегда открыты для Вас! Желаем Вам приятных покупок и красочного настроения!
            .about__block__img
                img(src="../../images/content/shop.png", alt="alt")

</template>
<style lang="postcss">
.about {
    
    max-width: 920px;
    margin: 0 auto;
    &__block {
        padding-top: 5rem;
        display: flex;
        flex-direction: row;
        &-second {
        flex-direction: row-reverse;
        }
        &-third {
            padding: 10rem 0;
        }
        &__img {
            flex: .7;
        }
        &__desc {
            color: #000;
            flex: 1;
            & .comp-headline {
                font-size: 24px;
                font-weight: 700;
            }
            & .comp-desc {
                font-size: 18px;
                font-weight: 400;
            }
        }
    }
}
.decorate-section {

    &-layer {
        position: absolute;
        top: 65rem;
        left: 0;
        min-height: 60px;
        max-height: 60px;
        min-width: 100vw;
        background-image: url('../../images/content/colors-layer-about.png');
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
    }
}
.comp-desc-modify {
    color: #000000;
    font-size: 24px;
    font-weight: 400;
}
</style>