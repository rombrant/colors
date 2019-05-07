<template lang="pug">
    .card
        .card__info
            span.card-status есть в наличии
            span.card-code Код {{code}}
        .card__img
            img(:src="img") 
        .card__desc
            .card-title {{title}}
            ul.card-raiting 
                - var stars = ['1','2','3','4','5']
                        for star in stars
                            li(data-id=`${star}`).card-raiting-item
            .card-price {{price}}
        .card-desc {{desc}}
        .card__panel
            button(@click="$emit('change', title)").card-compare сранвить
            button.card-fav избранное
            button.card-buy купить
</template>
<script>
import { reject } from 'q';
export default {
    props: {
        
            title: '',
            price: '',
            img: '',
            code: '',
            id: '',
            desc:''
    },
}
</script>
<style lang="postcss">
.card {
    margin: 1rem 1rem;
}
.card__info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.card-status {
    color:rgb(9, 255, 0);
    position: relative;
    padding-left: 1rem; 
    &:before {
        position: absolute;
        top: 30%;
        left: 0;
        display: block;
        content:'';
        width: .5rem;
        height: .5rem;
        background: rgb(9, 255, 0);
        border-radius: 50%;
    }
}
</style>


