<template>
    <div>
  <div class="page-title">
    <h3>{{'ProfileTitle' | localize}}</h3>
  </div>

  <form class="form" @submit.prevent="submitHandler">
    <div class="input-field">
      <input
          id="description"
          type="text"
          v-model="name"
           :class="{invalid: $v.name.$dirty && !$v.name.required}"
      >
      <label for="description">{{'Name' | localize}}</label>
      <span 
        v-if="$v.name.$dirty && !$v.name.required"
        class="helper-text invalid"
        >
        {{'Message_EnterName' | localize}}
        </span>
    </div>

     <div class="switch">
    <label>
      English
      <input type="checkbox" v-model="isRuLocale">
      <span class="lever"></span>
      Русский
    </label>
  </div>

    <button class="btn waves-effect waves-light" type="submit">
      {{'Update' | localize}}
      <i class="material-icons right">send</i>
    </button>
  </form>
</div>
</template>
<script>
import {required} from 'vuelidate/lib/validators';
import M from 'materialize-css/dist/js/materialize.min';
import {mapGetters, mapActions} from 'vuex';
export default {
  data() {
    return {
      name: '',
      isRuLocale: true,
    }
  },
  validations: {
    name: {required}
  },
  computed: {
    ...mapGetters(['info'])
  },
  mounted() {
    this.name = this.info.name;
    this.isRuLocale = this.info.locale === 'ru-RU';
    setTimeout(() => {
       M.updateTextFields();
    }, 0);
  },
  methods: {
    ...mapActions(['updateInfo']),
   async submitHandler() {
       if (this.$v.$invalid) {
          this.$v.$touch();
          return;
        }
        try {
         await this.updateInfo({
            name: this.name,
            locale: this.isRuLocale ? 'ru-RU' : 'en-US'
            });
        } catch (e) {throw e}
    }
  }

}
</script>


<style scoped>
  .switch {
      margin-bottom: 2em;
  }
</style>