<template>
    <form action="">
        <div class="title-content">{{ title }}</div>
        <div class="line-content"></div>
        <div class="box">
            <StepInput
                type="text"
                placeholder="Escriu el teu nom"
                :value="value1"
                @updateValue="emit_updateNom">
            </StepInput>
        </div>
        <span class="error" v-show="error1">
          Introdueix el teu nom
        </span>
        <div class="box">
            <StepInput
                type="text"
                placeholder="Escriu els teus cognoms"
                :event_input="true"
                :class_image="false"
                :value="value2"
                :isCheckbox="false"
                @updateValue="emit_updateCognoms">
            </StepInput>
        </div>
        <span class="error" v-show="error2">
            Introdueix els teus cognoms
            <br />
        </span>
        <button class="button" @click.prevent="emit_Continue_step">Continua</button>
    </form>
</template>

<script>
import StepInput from "../inputs/StepInput.vue"

export default {
    emits: ['updateCognoms', 'continue_step', 'backwards_step', 'updateNom'],
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
            inputs: [this.value1, this.value2],
        }
    },
    methods: {
        /**
         * Emits continue step to parent.
         * 
         */
        emit_Continue_step() {
            this.$emit('continue_step')
        },
        /**
         * Emits updateNom to parent.
         * 
         * @param {string} value
         */
        emit_updateNom(value) {
            this.$emit('updateNom', value)
        },
        /**
         * Emits updateCognoms to parent.
         * 
         * @param {string} value
         */
        emit_updateCognoms(value) {
            this.$emit('updateCognoms', value)
        }
    }
}
</script>