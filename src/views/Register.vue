<template>
    <form @submit.prevent="submitHandler" class="card auth-card">
  <div class="card-content">
    <span class="card-title">Домашняя бухгалтерия</span>
    <div class="input-field">
      <input
          id="email"
          type="text"
          v-model.trim="email"
          :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
      >
      <label for="email">Email</label>
     <small v-if="$v.email.$dirty && !$v.email.required" class="helper-text invalid">Поле Email не должно быть пустым</small>
     <small v-else-if="$v.email.$dirty && !$v.email.email" class="helper-text invalid">Введите коррективный email</small>
    </div>
    <div class="input-field">
      <input
          id="password"
          type="password"
          class="validate"
          v-model="password"
          :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
      >
      <label for="password">Пароль</label>
        <small 
          class="helper-text invalid"
          v-if="$v.password.$dirty && !$v.password.required"
          >
              Введите пароль
        </small>
        <small 
          class="helper-text invalid"
          v-else-if="$v.password.$dirty && !$v.password.minLength"
          >
             Пароль должен быть {{ $v.password.$params.minLength.min }} символов.Сейчас он {{ password.length }}
        </small>
    </div>
    <div class="input-field">
      <input
          id="name"
          type="text"
          :class="{invalid: $v.name.$dirty && !$v.name.required}"
          v-model.trim="name"
      >
      <label for="name">Имя</label>
      <small v-if="$v.name.$dirty && !$v.name.required" class="helper-text invalid">
        Введите ваше имя
      </small>
    </div>
    <p>
      <label>
        <input 
        type="checkbox"
        v-model="agree"
        />
        <span>С правилами согласен</span>
      </label>
    </p>
  </div>
  <div class="card-action">
    <div>
      <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
      >
        Зарегистрироваться
        <i class="material-icons right">send</i>
      </button>
    </div>

    <p class="center">
      Уже есть аккаунт?
      <router-link to="/login">Войти!</router-link>
    </p>
  </div>
</form>
</template>

<script>
import {email, required, minLength} from 'vuelidate/lib/validators'
export default {
  name: 'register',
  data() {
    return {
        email: '',
        password: '',
        name: '',
        agree: false
    }
  },
  methods: {
   async submitHandler() {
        
        if (this.$v.$invalid) {
            this.$v.$touch();
            return;
        }

        const formData = {
            email: this.email,
            password: this.password,
            name: this.name
        };
       try {
           await this.$store.dispatch('register', formData);
           this.$router.push('/');
       } catch (e) {
         //console.log(e);
       }
    }
  },
  validations: {
    email: {email, required},
    password: {required, minLength: minLength(6)},
    name: {required},
    agree: {checked: v => v}
  }
}
</script>