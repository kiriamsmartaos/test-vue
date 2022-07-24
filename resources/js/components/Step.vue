<template>
    <div class="circle-description" @click="checkStep(number)" :class="{ hidden_responsive: isCurrent(number) }">
        <div
        id="circle-1"
        :class="{ active: isActive(number), notActive: !isActive(number) }"
        class="circle">
        <div class="number">{{ number }}</div>
        </div>
        <div class="description">{{ description}}</div>
    </div>
</template>

<script>
    export default {
        props: {
            number: Number,
            description: String,
            step: Number,
        },
        methods: {
            /**
             * Checks if step is active or not.
             *
             * @returns {boolean}
             */
            isCurrent(step) {
                return step == this.step;
            },
            /**
             * Checks if step is active or not.
             *
             * @returns {boolean}
             */
            isActive(step) {
                return step <= this.step;
            },
            /**
             * Checks if user trying to go foward or backwards in steps.
             */
            checkStep(step) {
                if (step < this.step) {
                    //this.step = step;
                    this.$emit('backwards_step', step)
                }
                if (step > this.step) {
                    if (step - this.step == 1) {
                        //this.Continue_step();
                        this.$emit('continue_step')
                    }
                }
            },
        }
    }
</script>