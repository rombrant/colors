<template lang="pug">
    .portfolio
        h1.comp-headline Фотогалерея
        p.comp-desc Работы нашими материалами
        ul.portfolio-list
            -
                var items = [{
                    path:"1",
                    head:"Частный дом на киевском шоссе"
                            },
                            {
                    path:"2",
                    head:"Частный дом на Новорижском шоссе"
                            },
                            {
                    path:"3",
                    head:"Частный дом в Республике Адыгея"
                            },
                            {
                    path:"4",
                    head:"Частный дом в поселке Вешки"
                            },
                            {
                    path:"5",
                    head:"Квартира ‎в Зачатьевском переулке"
                            },
                            {
                    path:"6",
                    head:"Частный дом в поселке Вешки"
                            },
                            {
                    path:"7",
                    head:"Квартира на ул. Лобачевского"
                            },
                            {
                    path:"8",
                    head:"Частный коттедж с банным комплексом"
                            },
                            {
                    path:"9",
                    head:"Частный дом в Евпатории"
                            }
                    ]
            for item in items
                        li.portfolio__item
                            .image__wrapper
                                img(src=`../../images/content/portfolio-layer-${item.path}.png`, alt="alt")
                            .portfolio__item-headline
                                h4 #{item.head}    
</template>
<style lang="postcss">
.portfolio {
    
    & .comp-headline {
        padding-top: 1rem;
        text-align: start;
        border-bottom: 1px solid #000;
        width: 25%;
    }
    & .comp-desc {
        padding-bottom: 3rem;
    }
    &-list {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        text-align: center;
        
    }
    &__item {
        min-width: 30%;
        &-headline {
            padding: 1rem 0;
        }
    }
}
</style>
