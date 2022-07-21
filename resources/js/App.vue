<template>
  <div class="container">
    <div class="title">Test Stepper amb Vue</div>
    <div class="justify-center-flex">
      <div class="flex-container-circles">
        <Step v-for="description,index in descriptions"
          :key="index" 
          :number="index+1" 
          :description="description" 
          :step="step" 
          @continue_step="Continue_step" 
          @backwards_step="Change_step"
          >
        </Step>
      </div>
    </div>
    <!-- <div class="content" v-if="this.step == 1">
      <form action="" ref="form1">
        <div class="title-content">Nom i Cognoms</div>
        <div class="line-content"></div>
        <div class="box">
          <input
            class="input"
            v-model="formData.nom"
            type="text"
            placeholder="Nom"
            required
          />
        </div>
        <span class="error" v-show="validation?.error('nom')">
          Introdueix el teu nom
        </span>
        <div class="box">
          <input
            class="input"
            v-model="formData.cognoms"
            type="text"
            placeholder="Cognom"
            required
          />
        </div>
        <span class="error" v-show="validation?.error('cognoms')">
          Introdueix els teus cognoms
          <br />
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
          <input
            class="input"
            v-model="formData.data_naixement"
            type="date"
            placeholder="Data Naixament"
            required
          />
        </div>
        <span class="error" v-show="validation?.error('data_naixement')">
          Introdueix la data de naixement
          <br />
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
          <input
            class="input"
            v-model="formData.email"
            type="text"
            placeholder="Email"
            required
          />
        </div>
        <span class="error" v-show="validation?.error('email')">
          Introdueix el teu email
          <br />
        </span>
        <div class="box">
          <input
            class="input"
            v-model="formData.telefon"
            type="text"
            placeholder="Telèfon"
            required
          />
        </div>
        <span class="error" v-show="validation?.error('telefon')">
          Introdueix el teu telèfon
          <br />
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
          <label for="image"
            >Selecciona una imatge (formats .png i .jpeg)
          </label>
          <input
            id="image"
            class="input-image"
            @change="imageSelected"
            type="file"
            accept="image/png, image/jpeg"
            required
          />
        </div>
        <span class="error" v-show="validation?.error('imatge')">
          Introdueix una imatge vàlida (png/jpeg)
          <br />
        </span>
        <button class="button" @click.prevent="Backwards_step">Enrere</button>
        <button class="button" @click.prevent="Continue_step">Continua</button>
      </form>
    </div>
    <div class="content" v-else-if="this.step == 5">
      <form action="">
        <div class="title-content">Condicions</div>
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
          <input
            class="input-checkbox"
            v-model="formData.condicions"
            type="checkbox"
            placeholder=""
            required
          />
        </div>
        <span class="error" v-show="validation?.error('condicions')">
          Has d'acceptar les condicions
          <br />
        </span>
        <button class="button" @click.prevent="Backwards_step">Enrere</button>
        <button class="button" @click.prevent="Continue_step">Continua</button>
      </form>
    </div>
    <div class="content" v-else-if="this.step == 6">
      <div class="title-content">Tot completat!</div>
      <div class="line-content"></div>
      <button class="button" @click.prevent="Backwards_step">Enrere</button>
    </div> -->
    <Content>
      <ContentStep1
        v-if="step == 1"
        type="text"
        title="Nom i Cognoms"
        :placeholder="placeholders['step1']"
        :error1="validation?.error('nom')"
        :error2="validation?.error('cognoms')"
        :value1="formData.nom"
        :value2="formData.cognoms"
        @Continue_step="Continue_step"
        @Backwards_step="Backwards_step"
        @updateNom="updateNom"
        @updateCognoms="updateCognoms">
      </ContentStep1>
      <ContentStep2
        v-if="step == 2"
        type="date"
        title="Data Naixement"
        :error="validation?.error('data_naixement')"
        :value="formData.data_naixement"
        @Continue_step="Continue_step"
        @Backwards_step="Backwards_step"
        @updateDate="updateDate">
      </ContentStep2>
      <ContentStep3
        v-if="step == 3"
        type="text"
        title="Email i Telèfon"
        :placeholder="placeholders['step3']"
        :error1="validation?.error('email')"
        :error2="validation?.error('telefon')"
        :value1="formData.email"
        :value2="formData.telefon"
        @Continue_step="Continue_step"
        @Backwards_step="Backwards_step"
        @updateEmail="updateEmail"
        @updateTelefon="updateTelefon">
      </ContentStep3>
      <ContentStep4
        v-if="step == 4"
        type="file"
        title="Imatge"
        :error="validation?.error('imatge')"
        :value="formData.imatge"
        @Continue_step="Continue_step"
        @Backwards_step="Backwards_step"
        @imageSelected="updateImage">
      </ContentStep4>
      <ContentStep5
        v-if="step == 5"
        type="checkbox"
        title="Condicions"
        :error="validation?.error('condicions')"
        :value="formData.condicions"
        @Continue_step="Continue_step"
        @Backwards_step="Backwards_step"
        @updateCondicions="updateCondicions">
      </ContentStep5>
      <ContentStep6
        v-if="step == 6"
        title="Tot Completat!"
        @Backwards_step="Backwards_step">
      </ContentStep6>
    </Content>
  </div>
</template>

<script>
import Step from "./components/Step.vue"
import Content from "./components/Content.vue"
import ContentStep1 from "./components/ContentStep1.vue"
import ContentStep2 from "./components/ContentStep2.vue"
import ContentStep3 from "./components/ContentStep3.vue"
import ContentStep4 from "./components/ContentStep4.vue"
import ContentStep5 from "./components/ContentStep5.vue"
import ContentStep6 from "./components/ContentStep6.vue"
import createValidator, {
  required,
  date,
  email,
  telefon,
  accepted,
  imatge,
} from "./lib/validator.js";

const rules = [
  {
    nom: [required],
    cognoms: [required],
  },
  {
    data_naixement: [required, date],
  },
  {
    email: [required, email],
    telefon: [required, telefon],
  },
  {
    imatge: [required, imatge],
  },
  {
    condicions: [required, accepted],
  },
];

export default {
  components: {
    Step,
    Content,
    ContentStep1,
    ContentStep2,
    ContentStep3,
    ContentStep4,
    ContentStep5,
    ContentStep6
  },
  data() {
    return {
      descriptions: ['Nom i Cognoms', 'Data Naixement', 'Email i Telèfon', 'Imatge', 'Condicions'],
      placeholders: {
        'step1': ['Nom','Cognoms'],
        'step3': ['Email', 'Telefon']
      },
      step: 1,
      validation: null,
      formData: {
        nom: "",
        cognoms: "",
        data_naixement: "",
        email: "",
        telefon: "",
        imatge: "",
        condicions: "",
      },
    };
  },
  methods: {
    /**
     * Continues with the step only if validation is correct for each attribute.
     */
    Continue_step() {
      this.validation = createValidator(rules[this.step - 1]);
      if (!this.validation.passes(this.formData)) return;
      this.step++;
    },
    /**
     * Goes a step backwards, without clearing previous inputs.
     */
    Backwards_step() {
      if (this.step == 1) return;
      this.step--;
    },
    /**
     * Changes step if clicked from circles and going backwards.
     * 
     * @param {*} step 
     */
    Change_step(step) {
      this.step = step;
    },
    /**
     * Assigns the name given to the data attribute.
     * 
     * @param {*} e
     */
    updateNom(value) {
      this.formData.nom = value
    },
    /**
     * Assigns the surname given to the data attribute.
     * 
     * @param {*} value
     */
    updateCognoms(value) {
      this.formData.cognoms = value
    },
    /**
     * Assigns the date given to the data attribute.
     * 
     * @param {*} value
     */
    updateDate(value) {
      this.formData.data_naixement = value
    },
    /**
     * Assigns the email given to the data attribute.
     * 
     * @param {*} value
     */
    updateEmail(value) {
      this.formData.email = value
    },
    /**
     * Assigns the telephone given to the data attribute.
     * 
     * @param {*} value
     */
    updateTelefon(value) {
      this.formData.telefon = value
    },
    /**
     * Assigns the type of image given to the data attribute.
     * 
     * @param {*} e
     */
    updateImage(e) {
      this.formData.imatge = e.target.files[0].type;
    },
    /**
     * Assigns the conditions given to the data attribute.
     * 
     * @param {*} value
     */
    updateCondicions(value) {
      this.formData.condicions = value
    }
  },
};
</script>