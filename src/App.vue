<template lang="pug">
div.root-wrapper-container
  div.root-container
    template
      header.header-container
        app-header
      main.content-container
        router-view
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
    //tabs : () => import("./components/tabs")
  }
};
</script>

