<template>
  <div>
    <field v-model="user.email" class="form-element" label="Email*" />
    <field
      v-model="user.password"
      class="form-element"
      label="Password*"
      type="password"
    />
    <hr class="separator" />
    <field v-model="user.name" class="form-element" label="Nome*" />
    <field v-model="user.surname" class="form-element" label="Cognome*" />
    <combobox
      v-model="user.job"
      class="form-element"
      label="Professione*"
      stretch
      :initial-value="-1"
      :items="['Psichiatra', 'Psicologo']"
    />
    <div class="beside form-element">
      <combobox
        v-model="user.district"
        label="Regione*"
        stretch
        :initial-value="-1"
        :items="[
          'Abruzzo',
          'Basilicata',
          'Calabria',
          'Campania',
          'Emilia-Romagna',
          'Friuli-Venezia Giulia',
          'Lazio',
          'Liguria',
          'Lombardia',
          'Marche',
          'Molise',
          'Piemonte',
          'Puglia',
          'Sardegna',
          'Sicilia',
          'Toscana',
          'Trentino-Alto Adige',
          'Umbria',
          'Valle d\'Aosta',
          'Veneto'
        ]"
      />
      <field v-model="user.number" label="Numero albo*" style="height: 100%" />
    </div>
    <!-- TODO
      <labeled-field v-model="user.CV" class="form-element" label="Curriculum*" />
    -->
    <p class="mandatory">* Campi obbligatori</p>
    <colored-button
      class="signin-submit-btn"
      :disabled="!canRegister"
      @click="register"
    >
      Registrati
    </colored-button>
  </div>
</template>

<script>
import Field from '@/components/input/Field.vue';
import Combobox from '@/components/input/Combobox.vue';
import ColoredButton from '@/components/buttons/ColoredButton.vue';

export default {
  components: {
    Field,
    Combobox,
    ColoredButton
  },
  data() {
    return {
      user: {
        name: '',
        surname: '',
        email: '',
        password: '',
        district: '',
        job: '',
        number: ''
      }
    };
  },
  computed: {
    canRegister() {
      for (let v of Object.values(this.user)) if (v === '') return false;
      return true;
    }
  },
  methods: {
    register() {
      alert(
        `Richiesta di iscrizione per ${this.user.email}:${this.user.password}`
      );
    }
  }
};
</script>

<style lang="scss" scoped>
@use '@/scss/components/signin';

.separator {
  color: var(--color-separator);
  background-color: var(--color-separator);
  border-width: 0;
  height: 2px;
  margin: var(--space-m) 0;
}

.beside {
  display: flex;
  flex-flow: row nowrap;

  .labeled-combobox {
    flex: 1;
    margin-right: var(--space-s);
  }

  .labeled-field {
    flex: 0 0 8em;
  }
}

.mandatory {
  font-size: var(--text-s);
  text-align: right;
  margin-top: var(--space-xs);
}
</style>
