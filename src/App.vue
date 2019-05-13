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
export default {
  components: {
    appHeader : () => import("./components/header"),
    appFooter : () => import("./components/footer")
  }
};
</script>
<style lang="postcss">
.header-container {
  position: fixed;
  top: 0;
}
.content-container {
  padding-top: 13rem; 
  max-width: 1490px;
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


