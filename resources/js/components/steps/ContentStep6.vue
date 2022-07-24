<template>
    <div class="title-content">{{ title }}</div>
    <div class="line-content"></div>
    <button class="button" @click.prevent="emit_Backwards_step">Enrere</button>
</template>

<script>
export default {
    props: {
        title: String,
    },
    methods: {
        /**
         * Emits backwards step to parent.
         * 
         */
        emit_Backwards_step() {
            this.$emit('backwards_step')
        }
    }
}
</script>