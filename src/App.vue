<template lang="pug">
div.root-wrapper-container
  div.root-container
    template
      header.header-container
        app-header
      main.content-container
        router-view
      footer.footer-container
        app-footer
</template>
<style lang="postcss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
@import "normalize.css";
@import "./styles/mixins.pcss";
@import "./styles/layout/base.pcss";
</style>


<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  props: {
    showSlider: true
  },
  components: {
    appHeader : () => import("./components/header"),
    appFooter : () => import("./components/footer"),
  },
  methods: {
      ...mapActions("curProducts", ["addProductCompare","addNewCard"]),
      ...mapMutations("curProducts", ["ADD_BREND"]),
      ...mapActions("cart", ["addProductCart","addProductFavor"]),
      makeArrWithRequiredImages(data) {
      return data.map(card => {
        const requiredPic = `http://kraskisnab.ru.com/${card.imgsrc}`;
        card.pic = requiredPic;
        this.addNewCard(card);
        return card;
      });
   },
   makeNewBrends(brends) {
     this.ADD_BREND(brends);
   }
  },
created() {
    const brends = require("./data/brend.json")
    const data = require("./data/data.json");
    this.cards = this.makeArrWithRequiredImages(data,brends);
    this.brends = this.makeNewBrends(brends);
    }
}
</script>
<style lang="postcss">

.content-container {

  max-width: 1360px;
  margin: 0 auto;
  min-height: 90vh;
}
.root-container {
  background: #f6f6f6;
}
.footer-container {
  max-width: 100vw;
  width: 100%;
  background-image: url('./images/content/headerbg.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0 2rem;
  z-index: 1000;
}
</style>


