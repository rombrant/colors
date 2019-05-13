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
                button(@click="$emit('compare', title)").card-compare.card-button
                button(@click="$emit('favor', title)").card-fav.card-button 
                button.card-buy(@click="$emit('buy', title)").card-buy.card-button Купить
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
.card__panel {
    display: flex;
    flex-direction: row;
}
.card {
    margin: 1rem 1rem;
    padding: .5rem .5rem;
    display: flex;
    flex-direction: column;
    background: #fff;
    justify-content: space-between;
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
.card__desc {
    align-items: center;
    display: flex;
    flex-direction: column;
}
.card-raiting {
    display: flex;
    flex-direction: row;
    justify-content: center;
    &-item {
    margin-right: .3rem;
    display: block;
    width: 1rem;
    height: 1rem;
    background: svg-load('star-pic.svg', fill=rgb(255, 0, 0), width=100%, height=100%);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    }
}
    
.card-button {
    position: relative;
    display: block;
    width: 2.5rem;
    height: 2.5rem;
    border: 2px solid rgb(122, 122, 122);
    border-radius: 50%;
    background: #fff;
    margin-right: 1rem;
}
.card-compare {
    &:before {
        display: block;
        content: '';
        top: .4rem;
        left: .4rem;
        position: absolute;
        width: 1.5rem;
        height: 1.5rem;
        cursor: pointer;
        background: svg-load('comparison.svg', fill=rgb(122, 122, 122), width=100%, height=100%);
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    &:hover {
        color:#1CAB6E;
        border: 2px solid #1CAB6E;
        &.card-compare::before {
                background: svg-load('comparison.svg', fill=#1CAB6E, width=100%, height=100%);
        }
    }
}
.card-fav {
    &:before {
        display: block;
        content: '';
        top: .4rem;
        left: .4rem;
        position: absolute;
        width: 1.5rem;
        height: 1.5rem;
        cursor: pointer;
        background: svg-load('heart.svg', fill=rgb(122, 122, 122), width=100%, height=100%);
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    &:hover {
        border: 2px solid #1CAB6E;
        color:#1CAB6E;
        &.card-fav::before {
                background: svg-load('heart.svg', fill=#1CAB6E, width=100%, height=100%);
        }
    }
}
.card-buy {
    padding-left: 2.5rem;
    width: 8rem;
    border-radius: 3rem;
    border: 2px solid#7D74F3;
    color: #7D74F3;
    margin-right: 0;
    &:before {
        display: block;
        content: '';
        top: .4rem;
        left: .4rem;
        position: absolute;
        width: 1.5rem;
        height: 1.5rem;
        cursor: pointer;
        background: svg-load('shopping-cart.svg', fill=rgb(125, 116, 243), width=100%, height=100%);
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    &:hover {
        color:#1CAB6E;
        border: 2px solid #1CAB6E;
        &.card-buy::before {
                background: svg-load('shopping-cart.svg', fill=#1CAB6E, width=100%, height=100%);
        }
    }
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


