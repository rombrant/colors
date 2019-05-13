<template lang="pug">
    .info
        span.value  {{currentCount}} 
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
