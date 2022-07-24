<template>
    <input 
    :type="type" 
    :placeholder="placeholder" 
    class="input-checkbox"
    @change="typed"
    v-model="input"
    required>
</template>

<script>
export default {
    props: {
        type: String,
        placeholder: String,
        value: String,
    },
    data() {
        return {
            input: this.value
        }
    },
    methods: {
        /**
         * Emits updateValue to parent.
         * 
         */
        typed() {
            this.$emit('updateValue', this.input)
        },
    },
}
</script>