<template lang="pug">
    .info
        span.value {{text}}  {{currentCount}} 
</template>
<script>
import {  mapState, mapActions, mapMutations  } from "vuex"
export default {
    props: {
        text:'',
        value: ''
    },
    data() {
        return {
            data : [],
            trueValue : ''
        }
    },
    computed: {
         currentCount() {
             return this.trueCounter(this.value)
         }
    },
    methods: {
        trueCounter(data) {
            var count = data.length;
            return count;
        }
    }
}
</script>
