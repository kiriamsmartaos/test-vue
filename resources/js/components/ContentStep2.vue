<template>
    <form action="">
        <div class="title-content">{{ title }}</div>
        <div class="line-content"></div>
        <div class="box">
            <input :type="type"
            class="input"
            v-model="input"
            @input="typed()"
            required/>
        </div>
        <span class="error" v-show="error">
          Introdueix la data de naixement
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
    data() {
        return {
            input: this.value,
        }
    },
    methods: {
        emit_Backwards_step() {
            this.$emit('backwards_step')
        },
        emit_Continue_step() {
            this.$emit('continue_step')
        },
        typed() {
            this.$emit('updateDate', this.input)
        }
    }
}
</script>