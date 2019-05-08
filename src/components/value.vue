<template lang="pug">
    .info
        span.value Итого {{trueValue}}00 рублей
</template>
<script>
export default {
    props: {
        value: Array
    },
    methods: {
        trueValueCounter(data) {
            var realPrice = 0;
            Array.from(data).forEach(element => {
                realPrice += element;
            });
            return realPrice;
        }
    },
    created() {
        const data = this.value;
        this.trueValue = this.trueValueCounter(data);
    }
}
</script>

