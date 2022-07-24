<template>
  <div class="container">
    <div class="title">Test Stepper amb Vue</div>
    <div class="justify-center-flex">
      <div class="flex-container-circles">
        <template v-for="description,index in descriptions" :key="index">
          <Step
          :number="index+1" 
          :description="description" 
          :step="step" 
          @continue_step="Continue_step" 
          @backwards_step="Change_step">
          </Step>
          <div class="line" :class="{active: isActive(index+1), notActive: !isActive(index+1)}" v-if="index+1 < 5"></div>
        </template>
      </div>
    </div>
    <Content>
      <ContentStep1
        v-if="step == 1"
        title="Nom i Cognoms"
        :error1="validation?.error('nom')"
        :error2="validation?.error('cognoms')"
        :value1="formData.nom"
        :value2="formData.cognoms"
        @Continue_step="Continue_step"
        @updateNom="updateNom"
        @updateCognoms="updateCognoms">
      </ContentStep1>
      <ContentStep2
        v-if="step == 2"
        title="Data Naixement"
        :error="validation?.error('data_naixement')"
        :value="formData.data_naixement"
        @Continue_step="Continue_step"
        @Backwards_step="Backwards_step"
        @updateDate="updateDate">
      </ContentStep2>
      <ContentStep3
        v-if="step == 3"
        title="Email i Telèfon"
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
import ContentStep1 from "./components/steps/ContentStep1.vue"
import ContentStep2 from "./components/steps/ContentStep2.vue"
import ContentStep3 from "./components/steps/ContentStep3.vue"
import ContentStep4 from "./components/steps/ContentStep4.vue"
import ContentStep5 from "./components/steps/ContentStep5.vue"
import ContentStep6 from "./components/steps/ContentStep6.vue"
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
     * @param {integer} step 
     */
    Change_step(step) {
      this.step = step;
    },
    /**
     * Checks if step is active or not.
     *
     * @param {integer} step
     * 
     * @returns {boolean}
     */
    isActive(step) {
        return step < this.step;
    },
    /**
     * Assigns the name given to the data attribute.
     * 
     * @param {string} value
     */
    updateNom(value) {
      this.formData.nom = value
    },
    /**
     * Assigns the surname given to the data attribute.
     * 
     * @param {string} value
     */
    updateCognoms(value) {
      this.formData.cognoms = value
    },
    /**
     * Assigns the date given to the data attribute.
     * 
     * @param {string} value
     */
    updateDate(value) {
      this.formData.data_naixement = value
    },
    /**
     * Assigns the email given to the data attribute.
     * 
     * @param {string} value
     */
    updateEmail(value) {
      this.formData.email = value
    },
    /**
     * Assigns the telephone given to the data attribute.
     * 
     * @param {string} value
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
     * @param {string} value
     */
    updateCondicions(value) {
      this.formData.condicions = value
    }
  },
};
</script>