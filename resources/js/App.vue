<template>
    <div class="container">
        <div class="title">Test Stepper amb Vue</div>
        <div class="justify-center-flex">
            <div class="flex-container-circles">
                <div class="circle-description">
                    <div id="circle-1" :class="{active: isActive(1), notActive: !isActive(1)}" class="circle">
                        <div class="number">1</div>
                    </div>
                    <div class="description">Nom i Cognoms</div>
                </div>
                <div :class="{active: isActive(2), notActive: !isActive(2)}" class="line"></div>
                <div class="circle-description">
                    <div id="circle-2" :class="{active: isActive(2), notActive: !isActive(2)}" class="circle">
                        <div class="number">2</div>
                    </div>
                    <div class="description">Data Naixament</div>
                </div>
                <div :class="{active: isActive(3), notActive: !isActive(3)}" class="line"></div>
                <div class="circle-description">
                    <div id="circle-3" :class="{active: isActive(3), notActive: !isActive(3)}" class="circle">
                        <div class="number">3</div>
                    </div>
                    <div class="description">Email i Telèfon</div>
                </div>
                <div :class="{active: isActive(4), notActive: !isActive(4)}" class="line"></div>
                <div class="circle-description">
                    <div id="circle-4" :class="{active: isActive(4), notActive: !isActive(4)}" class="circle">
                        <div class="number">4</div>
                    </div>
                    <div class="description">Imatge</div>
                </div>
                <div :class="{active: isActive(5), notActive: !isActive(5)}" class="line"></div>
                <div class="circle-description">
                    <div id="circle-5" :class="{active: isActive(5), notActive: !isActive(5)}" class="circle">
                        <div class="number">5</div>
                    </div>
                    <div class="description">Condicions</div>
                </div>
            </div>
        </div>
        <div class="content" v-if="this.step == 1">
            <form action="" ref="form1">
                <div class="title-content">Nom i Cognoms</div>
                <div class="line-content"></div>
                <div class="box">
                    <input class="input" v-model="formData.nom" type="text" placeholder="Nom" required>
                </div>
                <span class="error" v-show="validation?.error('nom')">Introdueix el teu nom</span>
                <div class="box">
                    <input class="input" v-model="formData.cognoms" type="text" placeholder="Cognom" required>
                </div>
                <span class="error" v-show="validation?.error('cognoms')">
                    Introdueix els teus cognoms
                    <br>
                </span>
                <button class="button" @click.prevent="Backwards_step">Enrere</button>
                <button class="button" @click.prevent="Continue_step">Continua</button>
            </form>
        </div>
        <div class="content" v-else-if="this.step == 2">
            <form action="">
                <div class="title-content">Data Naixament</div>
                <div class="line-content"></div>
                <div class="box">
                    <input class="input" v-model="formData.data_naixement" type="date" placeholder="Data Naixament" required>
                </div>
                <span class="error" v-show="validation?.error('data_naixement')">
                    Introdueix la data de naixement
                    <br>
                </span>
                <button class="button" @click.prevent="Backwards_step">Enrere</button>
                <button class="button" @click.prevent="Continue_step">Continua</button>
            </form>
        </div>
        <div class="content" v-else-if="this.step == 3">
            <form action="">
                <div class="title-content">Email i Telèfon</div>
                <div class="line-content"></div>
                <div class="box">
                    <input class="input" v-model="formData.email" type="text" placeholder="Email" required>
                </div>
                <span class="error" v-show="validation?.error('email')">
                    Introdueix el teu email
                    <br>
                </span>
                <div class="box">
                    <input class="input" v-model="formData.telefon" type="text" placeholder="Telèfon" required>
                </div>
                <span class="error" v-show="validation?.error('telefon')">
                    Introdueix el teu telèfon
                    <br>
                </span>
                <button class="button" @click.prevent="Backwards_step">Enrere</button>
                <button class="button" @click.prevent="Continue_step">Continua</button>
            </form>
        </div>
        <div class="content" v-else-if="this.step == 4">
            <form action="" enctype="multipart/form-data">
                <div class="title-content">Imatge</div>
                <div class="line-content"></div>
                <div class="box">
                    <label for="image">Selecciona una imatge (formats .png i .jpeg) </label>
                    <input id="image" class="input-image" @change="imageSelected" type="file" accept="image/png, image/jpeg" required>
                </div>
                <span class="error" v-show="validation?.error('imatge')">
                    Introdueix una imatge vàlida (png/jpeg)
                    <br>
                </span>
                <button class="button" @click.prevent="Backwards_step">Enrere</button>
                <button class="button" @click.prevent="Continue_step">Continua</button>
            </form>
        </div>
        <div class="content" v-else-if="this.step == 5">
            <form action="">
                <div class="title-content">Condicions</div>
                <div class="line-content"></div>
                <div class="terms-of-service">Lorem ipsum dolor sit amet consectetur adipiscing elit odio, dis eleifend nibh erat praesent fermentum. Sagittis aenean vestibulum ante auctor eleifend montes, hendrerit accumsan platea libero integer cursus, mi congue elementum suspendisse convallis. Eleifend erat condimentum pulvinar etiam porttitor curabitur enim penatibus tellus, vulputate euismod facilisi sodales massa justo mus dignissim, aptent montes nec ligula dis curae vel aliquet.

Imperdiet commodo aptent torquent mi rhoncus fusce penatibus dui fringilla sociosqu porta suscipit condimentum vivamus fermentum, ullamcorper vulputate porttitor litora nullam urna et pulvinar malesuada etiam conubia praesent scelerisque. Dis posuere nullam parturient platea facilisis magnis vulputate blandit, mollis consequat aptent urna curae id augue ut, hendrerit curabitur imperdiet est lacinia dictum aenean. Cras nisi habitasse euismod eget aliquet posuere nunc, dictum nisl congue vulputate fusce quisque suspendisse in, laoreet dignissim netus sapien dapibus malesuada. Mollis fames viverra felis blandit euismod at nullam nulla, lacus scelerisque primis cum non tincidunt sociis, lacinia malesuada sollicitudin nisi dictum natoque dignissim.

Risus cursus id iaculis nulla malesuada ultrices laoreet dictumst dapibus, cum in hac sollicitudin bibendum purus facilisi ligula nibh venenatis, vehicula placerat semper facilisis maecenas faucibus ante arcu. Praesent vivamus lacinia est auctor pretium morbi himenaeos proin facilisi, leo class dictum eleifend sem velit consequat luctus, mus mauris arcu hendrerit massa vulputate volutpat in. Metus suscipit fames integer fringilla nunc penatibus faucibus, egestas auctor porta bibendum ac blandit urna, aliquam aliquet himenaeos posuere convallis nascetur. Lectus justo hendrerit aptent cum augue molestie donec, quisque fusce curae tristique nunc sollicitudin cubilia suspendisse, nullam facilisi non ante lobortis sodales.

Vitae nulla litora integer enim commodo imperdiet porttitor luctus dapibus accumsan, cubilia per sagittis ultrices eros class potenti curae libero sed, laoreet rutrum elementum blandit platea consequat nibh fusce nec. Duis orci inceptos ac molestie vestibulum velit ultricies condimentum libero habitant pulvinar, dapibus urna accumsan sapien primis porttitor vitae lacus tincidunt fusce, felis torquent placerat curabitur mollis consequat aliquet quam magnis taciti. Nisl pellentesque diam vestibulum viverra, ut posuere ridiculus laoreet, semper parturient class.</div>
                <div class="box-checkbox">
                    <div>Accepta les condicions</div>
                    <input class="input-checkbox" v-model="formData.condicions" type="checkbox" placeholder="" required>
                </div>
                <span class="error" v-show="validation?.error('condicions')">
                    Has d'acceptar les condicions
                    <br>
                </span>
                <button class="button" @click.prevent="Backwards_step">Enrere</button>
                <button class="button" @click.prevent="Continue_step">Continua</button>
            </form>
        </div>
        <div class="content" v-else-if="this.step == 6">
            <div class="title-content">Tot completat!</div>
            <div class="line-content"></div>
        </div>
    </div>
</template>

<script> 

import createValidator, { required,date,email,telefon,accepted } from './lib/validator.js';

const rules = [
    {
        nom: [required],
        cognoms: [required],
    },
    {
        data_naixement: [required,date],
    },
    {
        email: [required,email],
        telefon: [required,telefon],
    },
    {
        imatge: [required]
    },
    {
        condicions: [required,accepted]
    }
];

export default {
    data() {
        return {
            step: 1,
            colors: ["#76A972","#d9d9d9","#d9d9d9","#d9d9d9","#d9d9d9"],
            validation: null,
            formData: {
                nom: "",
                cognoms: "",
                data_naixement: "",
                email: "",
                telefon: "",
                imatge: "",
                condicions: "",
            }
        }
    },
    methods: {
        /**
        * Continues with the step only if validation is correct for each attribute.
        */
        Continue_step() {
            this.validation = createValidator(rules[this.step - 1]);
            if (!this.validation.passes(this.formData)) return
            this.step++;
            this.colors[this.step - 1] = "#76A972";
        },
        /**
        * Goes a step backwards, without clearing previous inputs.
        */
        Backwards_step() {
            this.step--;
            this.colors[this.step + 1] = "#d9d9d9";
        },
        /**
        * Assigns the type of image given to the data attribute.
        */
        imageSelected(e) {
            this.formData.imatge = e.target.files[0].type;
        },
        isActive(step) {
            console.log('step: ' + step + ', this.step: ' + this.step + '::' + (step <= this.step))
            return step <= this.step;
        }
    }
}
</script>