<template>
    <form action="">
        <div class="title-content">{{ title }}</div>
        <div class="line-content"></div>
        <div class="terms-of-service">
            Lorem ipsum dolor sit amet consectetur adipiscing elit odio, dis
            eleifend nibh erat praesent fermentum. Sagittis aenean vestibulum ante
            auctor eleifend montes, hendrerit accumsan platea libero integer
            cursus, mi congue elementum suspendisse convallis. Eleifend erat
            condimentum pulvinar etiam porttitor curabitur enim penatibus tellus,
            vulputate euismod facilisi sodales massa justo mus dignissim, aptent
            montes nec ligula dis curae vel aliquet. Imperdiet commodo aptent
            torquent mi rhoncus fusce penatibus dui fringilla sociosqu porta
            suscipit condimentum vivamus fermentum, ullamcorper vulputate
            porttitor litora nullam urna et pulvinar malesuada etiam conubia
            praesent scelerisque. Dis posuere nullam parturient platea facilisis
            magnis vulputate blandit, mollis consequat aptent urna curae id augue
            ut, hendrerit curabitur imperdiet est lacinia dictum aenean. Cras nisi
            habitasse euismod eget aliquet posuere nunc, dictum nisl congue
            vulputate fusce quisque suspendisse in, laoreet dignissim netus sapien
            dapibus malesuada. Mollis fames viverra felis blandit euismod at
            nullam nulla, lacus scelerisque primis cum non tincidunt sociis,
            lacinia malesuada sollicitudin nisi dictum natoque dignissim. Risus
            cursus id iaculis nulla malesuada ultrices laoreet dictumst dapibus,
            cum in hac sollicitudin bibendum purus facilisi ligula nibh venenatis,
            vehicula placerat semper facilisis maecenas faucibus ante arcu.
            Praesent vivamus lacinia est auctor pretium morbi himenaeos proin
            facilisi, leo class dictum eleifend sem velit consequat luctus, mus
            mauris arcu hendrerit massa vulputate volutpat in. Metus suscipit
            fames integer fringilla nunc penatibus faucibus, egestas auctor porta
            bibendum ac blandit urna, aliquam aliquet himenaeos posuere convallis
            nascetur. Lectus justo hendrerit aptent cum augue molestie donec,
            quisque fusce curae tristique nunc sollicitudin cubilia suspendisse,
            nullam facilisi non ante lobortis sodales. Vitae nulla litora integer
            enim commodo imperdiet porttitor luctus dapibus accumsan, cubilia per
            sagittis ultrices eros class potenti curae libero sed, laoreet rutrum
            elementum blandit platea consequat nibh fusce nec. Duis orci inceptos
            ac molestie vestibulum velit ultricies condimentum libero habitant
            pulvinar, dapibus urna accumsan sapien primis porttitor vitae lacus
            tincidunt fusce, felis torquent placerat curabitur mollis consequat
            aliquet quam magnis taciti. Nisl pellentesque diam vestibulum viverra,
            ut posuere ridiculus laoreet, semper parturient class.
        </div>
        <div class="box-checkbox">
            <div>Accepta les condicions</div>
            <input :type="type"
            class="input-checkbox"
            v-model="input"
            @change="typed()"
            required/>
        </div>
        <span class="error" v-show="error">
          Has d'acceptar les condicions
          <br />
        </span>
        <button class="button" @click.prevent="emit_Backwards_step">Enrere</button>
        <button class="button" @click.prevent="emit_Continue_step">Continua</button>
    </form>
</template>

<script>
import { valueToNode } from '@babel/types'

export default {
    props: {
        title: String,
        type: String,
        error: Boolean,
        value: Boolean,
    },
    data() {
        return {
            input: this.value
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
            this.$emit('updateCondicions', this.input)
        }
    }
}
</script>