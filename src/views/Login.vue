<template>
    <form @submit.prevent="submitHandler" class="card auth-card">
        <div class="card-content">
            <span class="card-title">Домашняя бухгалтерия</span>
            <div class="input-field">
            <input
                id="email"
                v-model.trim="email"
                type="text"
                :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
            >
            <label for="email">Email</label>
            <small v-if="$v.email.$dirty && !$v.email.required" class="helper-text invalid">Поле Email не должно быть пустым</small>
            <small v-else-if="$v.email.$dirty && !$v.email.email" class="helper-text invalid">Введите коррективный email</small>
            </div>
            <div class="input-field">
            <input
                id="password"
                v-model.trim="password"
                type="password"
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
        </div>
        <div class="card-action">
            <div>
            <button
                class="btn waves-effect waves-light auth-submit"
                type="submit"
            >
                Войти
                <i class="material-icons right">send</i>
            </button>
            </div>

            <p class="center">
            Нет аккаунта?
            <router-link to="/register">Зарегистрироваться</router-link>
            </p>
        </div>
</form>
</template>

<script>
import messages from '../utils/messages'
import {email, required, minLength} from 'vuelidate/lib/validators'
export default {
    name: 'login',
    methods: {
       async submitHandler() {
            if (this.$v.$invalid) {
                this.$v.$touch();
                return;
            }
            const formData = {
                email: this.email,
                password: this.password
            };
            try {
                 await this.$store.dispatch('login', formData);
                  this.$router.push('/');
                 }
             catch (e) {
                //console.log(e);
            }
           
        }
    },
    data() {
        return {
            email: '',
            password: ''
        }
    },
    validations: {
        email: {
            email,
            required
        },
        password: {
            required,
            minLength: minLength(7)
        }
    },
    mounted() {
        //this.$message('Test');
        if (messages[this.$route.query.message]) {
            this.$message(messages[this.$route.query.message]);
        }
    }
}
</script>
