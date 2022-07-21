<template>
    <form action="" enctype="multipart/form-data">
        <div class="title-content">{{ title }}</div>
        <div class="line-content"></div>
        <div class="box">
            <input :type="type"
            class="input-image"
            accept="image/png, image/jpeg"
            @change="emit_imageSelected"
            required/>
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
export default {
    props: {
        title: String,
        type: String,
        error: Boolean,
        value: String,
    },
    methods: {
        emit_Backwards_step() {
            this.$emit('backwards_step')
        },
        emit_Continue_step() {
            this.$emit('continue_step')
        },
        emit_imageSelected(e) {
            this.$emit('imageSelected', e)
        }
    }
}
</script>