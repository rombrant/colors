<template lang="pug">
    .container
        flickity.list-slider-cards(ref="flickity" :options="flickityOptions" )
            li.card-item(v-for="card in cards" :key="card.id").carousel-cell.item-slider-card
                card-root(
                    :title="card.title"
                    :img="card.pic"
                    :desc="card.text"
                    
                    @detail="newDetailCard"
                )
</template>
<script>
import flickity from "vue-flickity"
import { mapState, mapActions, mapMutations } from "vuex"
export default {
    props: {
        card: Object
    },
    components: {
        flickity,
        cardRoot: () => import ("components/card") 
    },
    data() {
        
    return {
      flickityOptions: {
      autoPlay: 2000,
      initialIndex: 3,
        pageDots: false,
        prevNextButtons: false,
        groupCells: true,
        setGallerySize: false
      }
    }
  },
  computed: {
      ...mapState("curProducts", {
          cards: state => state.cards
      }),
      showSliderComp(showSlider) {
             return this.showSliderCounter(showSlider)
         }
  },
  methods: {
      ...mapActions("curProducts", ["addNewDetail"]),
      newDetailCard(title) {
          
          const detailProduct = this.cards.filter(item=> item.title === title);
            this.addNewDetail(detailProduct[0]);
      }
  }
}
</script>
<style lang="postcss">
.flickity-viewport {
        height: 16rem;
    }
.item-slider-card {
    min-width: 100%;
    max-width: 100%;
    & .card-item {
        min-width: 100%;
        max-width: 100%;
    }
    & .card {
        margin: 0;
        padding:0;
        flex-direction: row;
        height: 100%;
        background: transparent;
    }
    & .card__desc {
        justify-content: center;
        padding-left: 2rem;
    }
    & .card__img {
        margin: 1rem;
        min-width: 35%;
        height: 15rem;
        background: transparent;
        & img {
            object-fit: fill;
        }
    }
    & .card__info {
        display: none;
        
    }
    
    & .card-detail {
        position: relative;
        display: block;
        width: 8rem;
        border-radius: 3rem;
        background: #7D74F3; 
        border-style: none;
        color: #fff;
        & .tabs__link {
            position: absolute;
            top: 0;
            left: 0;
            min-width: 8rem;
            min-height: 2.5rem;
        }
    }
    & .card-buy, & .card-fav, & .card-compare {
        display: none;
    }
    &  .card-text {
        font-size: .8rem;
        max-height: 8rem;
        overflow: hidden;
        color: #fff;
    }
}
</style>
