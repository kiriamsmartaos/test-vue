<template>
    <form action="">
        <div class="title-content">{{ title }}</div>
        <div class="line-content"></div>
        <div class="box">
            <StepInput
                type="text"
                placeholder="Escriu el teu email"
                :value="value1"
                :isCheckbox="false"
                @updateValue="emit_updateEmail">
            </StepInput>
        </div>
        <span class="error" v-show="error1">
            Introdueix el teu email
            <br />
        </span>
        <div class="box">
            <StepInput
                type="text"
                placeholder="Escriu el teu telèfon"
                :value="value2"
                :isCheckbox="false"
                @updateValue="emit_updateTelefon">
            </StepInput>
        </div>
        <span class="error" v-show="error2">
          Introdueix el teu telèfon
          <br />
        </span>
        <button class="button" @click.prevent="emit_Backwards_step">Enrere</button>
        <button class="button" @click.prevent="emit_Continue_step">Continua</button>
    </form>
</template>

<script>
import StepInput from "../inputs/StepInput.vue"

export default {
    components: {
        StepInput,
    },
    props: {
        title: String,
        error1: Boolean,
        error2: Boolean,
        value1: String,
        value2: String,
    },
    data() {
        return {
            inputs: [this.value1,this.value2],
        }
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
         * Emits updateEmail to parent.
         * 
         * @param {string} value
         */
        emit_updateEmail(value) {
            this.$emit('updateEmail', value)
        },
        /**
         * Emits updateTelefon to parent.
         * 
         * @param {string} value
         */
        emit_updateTelefon(value) {
            this.$emit('updateTelefon', value)
        }
    }
}
</script>