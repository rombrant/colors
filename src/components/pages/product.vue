<template lang="pug">
    .h1 Product
        .product-card-item
            card-root(
                :title="detailProduct.title"
                :price="detailProduct.price"
                :img="detailProduct.pic"
                :code="detailProduct.code"
                :desc="detailProduct.text"
            )
        
</template>
<script>
import { mapState } from "vuex"
export default {
    components: {
        cardRoot: () => import ("components/card") 
    },
    computed: {
        ...mapState("curProducts", {
          detailProduct: state => state.detailProduct
      }),
    }
}
</script>
<style lang="postcss">
.product-card-item {
    & .card-detail {
        display: none;
    }
}
</style>
