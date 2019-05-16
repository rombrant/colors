<template lang="pug">
    .transporting
        h1.comp-headline Доставка и оплата
        p.comp-desc В данном Разделе для Вас предоставлена подробная информация о способах и условиях оплаты, а также о вариантах доставки и её стоимости.
        .transporting__block
            .transporting__block-item.first-line-block
                .transporting__block-item-content Способы оплаты для физических лиц
                .transporting__block-item-payment Безналичный расчет
                hr.line-decore.first-line
            .transporting__block-item.second-line-block
                .transporting__block-item-content Способы оплаты для юридических лиц:
                .transporting__block-item-payment Безналичный расчет
                hr.line-decore.second-line
        .transporting-img
            img(src="../../images/content/monitor-cash.png", alt="alt")
        .transporting__structure
            hr.transporting__structure-line
            .transporting__structure-point
                .point.first-point
            hr.transporting__structure-line
            .transporting__structure-point
                .point.second-point
            hr.transporting__structure-line
            .transporting__structure-point
                .point.third-point
        .decorate-section
            .decorate-section-layer
        .transporting__information
            .transporting__information__desc
                .transporting__information__desc-head Доставка
                p.transporting__information__desc-text Вопрос организации доставки приобретаемого товара является немаловажным фактором при его покупке. В нашей компании Вы можете, сохранив свое время и силы, выбрать любой из предлагаемых ниже видов доставки или забрать оплаченный Вами Заказ самостоятельно
            ul.transporting__information__list
                li.transporting__information__item
                    .transporting__information__item-condition Самовывоз
                    .transporting__information__item-consequence Бесплатно
                li.transporting__information__item
                    .transporting__information__item-condition По г. Москве в пределах МКАД автотранспортом нашей компании
                    .transporting__information__item-consequence  1 000 руб
                li.transporting__information__item
                    .transporting__information__item-condition Доставка в регионы России до транспортной компании в г. Москве
                    .transporting__information__item-consequence Бесплатно
</template>
<style lang="postcss">
.transporting {
    max-width: 920px;
    margin: 0 auto;
    text-align: center;
    &__information {
        padding: 5rem 0;
        display: flex;
        flex-direction: row;
        text-align: start;
        &__list{
            flex:1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        &__desc {
            flex: 1;
            &-head {
                font-size: 1.5rem;
                font-weight: 700;
                padding: 1rem 0;
            }
            &-text {
                padding-right: 2rem;
                font-weight: 500;
            }
        }
        &__item {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            border-bottom: 1px solid rgba(0, 0, 0, .1);
            padding: 1rem 0;
            font-weight: 700;
            &:nth-child(3) {
                border-bottom: none;
            }
            &:nth-child(2) {
                position: relative;
                & .transporting__information__item-consequence {
                    width: 7rem;
                    text-align: center;
                }
                & .transporting__information__item-consequence:before {
                    position: absolute;
                    top:2rem;
                    display: block;
                    content:'от 1 до 500 кг';
                    width: 6rem;
                    height: 3rem;
                    font-size: .7rem;
                    color: #1c1c1c;
                    opacity: .5;
                } 
            }
        }
    }
    &__structure {
        padding-top: 2rem; 
        padding-bottom: 2rem;
        display: flex;
        flex-direction: column;
        &-line {
            width: 3.125rem;
            border-bottom: 1px solid rgb(255,0,0);
            transform: rotate(90deg); 

        }
        &-point {
            margin:  0 auto;
            padding: 18px;
            & .point {
                width: .6rem;
                height: .6rem;
                border-radius: 50%;
                border: 2px solid rgb(255,0,0);
                margin: 0 auto; 
            }
        }
    }
    &-img {
        padding-top: 10rem;
    }
    &__block {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        &-item {
            position: relative;
            width: 17%;
            text-align: start;
            &-content {
                font-weight: 700;
            }
            &-payment {
                color: #1c1c1c;
                opacity: .5;
                font-weight: 700;
            }
            
        }
    }
}
.first-line-block {
    &:before {
                bottom: -3px;
                right: 1.7rem;
                display: block;
                content:'';
                position: absolute;
                width: 20px;
                border: 1px solid rgb(255, 0, 0);
            }
}
.point {
    &.first-point, &.second-point, &.third-point {
        position: relative;
        &:before {
            position: absolute;
            display: block;
            width: 20rem;
            height: 3rem;
            font-size: .8rem;
            top: 0;
            font-weight: 700;
        }
    }
    &.first-point::before {
        content: 'При отгрузке, Вам предоставляются следующие документы:';
        top: -.4rem;
        left: -21rem;
        text-align: end;
    }
    &.second-point::before {
        content: 'Документ, подтверждающих факт приобретения Вами товара';
        top: -.4rem;
        left: 1rem;
        text-align: start;
    }
    &.third-point::before {
        content: 'Сертификаты на купленный товар';
        top: -.4rem;
        left: 1rem;
        text-align: start;
    }
}
.second-line-block {
    &:before {
                bottom: -3px;
                left: 1.7rem;
                display: block;
                content:'';
                position: absolute;
                width: 20px;
                border: 1px solid rgb(255, 0, 0);
            }
}
.line-decore {
    position: absolute;
    width: 220px;
    border: 1px solid rgb(255, 0, 0);
}
.first-line {
    top: 8.125rem;
    right: -10.125rem;
    transform: rotate(45deg);
}
.second-line {
        top: 8.125rem;
        left: -10.125rem;
     transform:  rotate(-45deg);
}
</style>
