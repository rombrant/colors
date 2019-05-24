<template lang="pug">
    .container__paginator 
        span Навигация отдела продукции
        br
        .nav-btn-block
            button(v-for="dot in pagedots" type='submit' @click="$emit('change', dot)" ).btn.btn-primary {{dot}}
</template>
<script>
import {mapState, mapMutations, mapActions} from "vuex"
export default {
    computed: {
        ...mapState("curProducts",{
            pagedots: state => state.pagedots
        })
    }
}
</script>

<style lang="postcss">
.container__paginator {
    padding-left: 1rem;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    & span {
        margin-right: 1rem;
    }
}
.btn-primary {
    background: #7D74F3;
    border: none;
    border-radius: 50%;
    color: #fff;
    margin-right: 1rem;
    &:hover {
        background: #1CAB6E;
    }
    
}
</style>
