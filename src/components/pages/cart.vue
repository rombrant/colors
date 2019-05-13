<template lang="pug">
    h1.comp-headline Корзина
      p.comp-desc Помощь при покупке. Пообщайтесь со специалистом в чате или позвоните по телефону 7‑800‑963‑61‑00
        ul.list-cart
            li(v-for="product in cartProducts" :key="product.title").cart-item-compare
                card-root(
                    disabled="false"
                    :title="product.title"
                    :price="product.price"
                    :img="product.pic"
                ).cart-item
            .value 
                value-root(
                    :value="value"
                )
</template>
<script>
import { mapState } from 'vuex';
export default {
    props: {
      product: Object
  },
   computed: {
        ...mapState("cart", {
      cartProducts: state => state.cartProducts
    }),
    ...mapState("cart", {
      value: state => state.value
    })
   },
     components: {
    cardRoot : () => import("components/card"),
    valueRoot : () => import("components/value"),
  }
}
</script>
<style lang="postcss" >
.list-cart {
    display: flex;
    flex-direction: column;
}
.comp-headline {
  text-align: center;
  font-weight: 700;
}
.comp-desc {
  font-size: 1.4rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
}
.cart-item {
    display: flex;
    flex-direction: row;
    width: 100%;
    
}
.cart-item-compare {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  & .card__desc {
    align-items: center;
    width: 60%;
  }
  
}

</style>