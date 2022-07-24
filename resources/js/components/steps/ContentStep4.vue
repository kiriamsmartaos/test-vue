<template>
    <form action="" enctype="multipart/form-data">
        <div class="title-content">{{ title }}</div>
        <div class="line-content"></div>
        <div class="box">
            <StepInputImage
            type="file"
            @imageSelected="emit_imageSelected">
            </StepInputImage>
        </div>
        <span class="error" v-show="error">
          Introdueix una imatge vàlida (png/jpeg)
          <br />
        </span>
        <button class="button" @click.prevent="emit_Backwards_step">Enrere</button>
        <button class="button" @click.prevent="emit_Continue_step">Continua</button>
    </form>
</template>

<script>
import StepInputImage from '../inputs/StepInputImage.vue'

export default {
    components: {
        StepInputImage
    },
    props: {
        title: String,
        error: Boolean,
        value: String,
    },
    methods: {
        /**
         * Emits backwards step to parent.
         * 
         */
        emit_Backwards_step() {
            this.$emit('backwards_step')
        },
        /**
         * Emits continue step to parent.
         * 
         */
        emit_Continue_step() {
            this.$emit('continue_step')
        },
        /**
         * Emits imageSelected to parent.
         * 
         * @param {*} e
         */
        emit_imageSelected(e) {
            this.$emit('imageSelected', e)
        }
    }
}
</script>