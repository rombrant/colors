<template lang="pug">
    .info
        span.value Итого {{currentValue}} рублей
</template>
<script>
import {  mapState, mapActions, mapMutations  } from "vuex"
export default {
    props: {
        value: ''
    },
    data() {
        return {
            data : [],
            trueValue : ''
        }
    },
    computed: {
         currentValue() {
             return this.trueValueCounter(this.value)
         }
    },
    methods: {
        trueValueCounter(data) {
            var realPrice = 0;
            Array.from(data).forEach(element => {
                realPrice += element;
            });
            return realPrice;
        }
    }
}
</script>

