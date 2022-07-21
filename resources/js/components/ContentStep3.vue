<template>
    <form action="">
        <div class="title-content">{{ title }}</div>
        <div class="line-content"></div>
        <div class="box">
            <input :type="type"
            class="input"
            :placeholder="placeholder[0]"
            v-model="inputs[0]"
            @input="typed(0)"
            required/>
        </div>
        <span class="error" v-show="error1">
          Introdueix el teu email
          <br />
        </span>
        <div class="box">
            <input :type="type"
            class="input"
            :placeholder="placeholder[1]"
            v-model="inputs[1]"
            @input="typed(1)"
            required/>
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
export default {
    props: {
        title: String,
        type: String,
        placeholder: Array,
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
        emit_Backwards_step() {
            this.$emit('backwards_step')
        },
        emit_Continue_step() {
            this.$emit('continue_step')
        },
        typed(index) {
            if (index == 0) {
                this.$emit('updateEmail', this.inputs[index])
                return
            }
            this.$emit('updateTelefon', this.inputs[index])
        }
    }
}
</script>