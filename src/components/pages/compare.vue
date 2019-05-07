<template lang="pug">
    h1 compare
        ul.lis-products
            li.products-item(v-for="product in curProducts" :key="product.title")
                card-root(
                    :title="product.title"
                    :price="product.price"
                    :img="product.imgsrc"
                    :code="product.code"
                    :desc="product.text"
                )
</template>
<script>
import { mapState } from 'vuex';
export default {
    props: {
      product: Array
  },
   computed: {
        ...mapState("curProducts", {
      curProducts: state => state.curProducts
    }),
   },
     components: {
    cardRoot : () => import("components/card"),
    compareRoot : () => import("components/pages/compare"),
  },
}
</script>
