<template>
    <form action="">
        <div class="title-content">{{ title }}</div>
        <div class="line-content"></div>
        <div class="box">
            <StepInput
                type="date"
                :value="value"
                :isCheckbox="false"
                @updateValue="emit_updateDate">
            </StepInput>
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
import StepInput from "../inputs/StepInput.vue"
 
export default {
    components: {
        StepInput,
    },
    props: {
        title: String,
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
        emit_updateDate(value) {
            this.$emit('updateDate', value)
        }
    }
}
</script>