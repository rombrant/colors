<template lang="pug">
    .card
        .card__info(v-if="disabled")
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
        .card-text {{desc}}
        .card__panel
            button(@click="$emit('compare', title)").card-compare сранвить
            button.card-fav избранное
            button.card-buy(@click="$emit('buy', title)") купить
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
    data()  {
        return {
            disabled:true
        }
    }
}
</script>
<style lang="postcss">
.card {
    margin: 1rem 1rem;
    display: flex;
    flex-direction: column;
    &-code {
        font-size: 1rem;
    }
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
    font-size: 1.2rem;
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
.card-text {
    font-size: 1rem;
    color: #000;
}
.card-item-compare {
    
}
.cart-item-compare {
    & .card {
        align-items: center;
    }
    & .card__info {
        display: none;
    }
    & .card__panel {
        display: none;
    }
    & .card__desc {
        display: flex;
        flex-direction: row;
        width: 30%;
        justify-content: space-between;
    }
    & .card__img {
        width: 10%;
    }
}
</style>


