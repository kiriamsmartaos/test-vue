<template>
    <input 
    :type="type"  
    class="input-image" 
    @change="emit_imageSelected"
    accept="image/png, image/jpeg"
    required>
</template>

<script>
export default {
    props: {
        type: String,
        value: String,
    },
    methods: {
        emit_imageSelected(e) {
            this.$emit('imageSelected', e)
        },
    },
}
</script>