<template lang="pug">
    .categories
        ul.list-categories
            li.item-categories(v-for="brend in brends" ) 
                button(@click="$emit('category', brend)").categories-link {{brend}}
                    span.counter  ( {{cards.filter(item => item.brend === brend).length}} )
                    router-link(
                                data-text="Продукция"
                                :to="link"
                                exact-active-class="active"
                                ).tabs__link
</template>
<script>
import {mapState, mapMutations, mapActions } from "vuex"
export default {
    props: {
        link: ''
    },
    data() {
        return {
            showList: false
        }
    },
    computed: {
      ...mapState("curProducts", {
          cards: state => state.cards,
          brends: state => state.brends
      })
    }
}    
</script>
<style lang="postcss">
.item-categories {
    position: relative;
    padding: 1rem 1rem;
    &:hover {
            background-color: rgba(125, 116, 243, 0.6);
        }
    & .tabs__link {
    position: absolute;
    top: 1rem;
    left: 0;
    min-width: 7rem;
    min-height: 1.1rem;
    margin: 0 auto;
    }
}
.categories-link {
    z-index: 1000;
    background: transparent;
    
}

</style>


