<template lang="pug">
    h1.comp-headline Избранные
      p.comp-desc Помощь при покупке. Пообщайтесь со специалистом в чате или позвоните по телефону 7‑800‑963‑61‑00
        ul.list-products-fav
            li(v-for="product in favorProducts" :key="product.title").card-item-fav
                card-root(
                    :title="product.title"
                    :price="product.price"
                    :img="product.pic"
                    :code="product.code"
                    :desc="product.text"
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
      favorProducts: state => state.favorProducts
    }),
   },
     components: {
    cardRoot : () => import("components/card"),
    favorRoot : () => import("components/pages/favorites"),
  }
}
</script>
<style lang="postcss">
.comp-headline {
  text-align: center;
  font-weight: 700;
}
.comp-desc {
  font-size: 1.4rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
}
.list-products-fav {
    display: flex;
    flex-direction: column;
}
.card-item-fav {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  & .card {
      flex-direction: row;
      align-items: center;
      flex:1;
  }
  & .card__img {
      min-width: 50%;;
  }
  & .card__info {
      display: none;
  }
}
</style>