import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import router from './router';
import store from './store';
import currencyFilter from '@/filters/currencyFilter';
import dateFilter from './filters/dateFilter';
import tooltipDirective from './directives/tooltipDirective';
import messagePlugin from '@/utils/messagePlugin';
import Loader from '@/components/Loader';
import './registerServiceWorker';
import 'materialize-css/dist/js/materialize.min';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


Vue.config.productionTip = false
Vue.filter('currency', currencyFilter);
Vue.filter('date',dateFilter);
Vue.directive('tooltip', tooltipDirective);
Vue.use(Vuelidate);
Vue.use(messagePlugin);
Vue.use('Loader',Loader);


firebase.initializeApp({
  apiKey: "AIzaSyB09jGm-uZjJ89N2hHjm6P7jt3kFu6ceKQ",
  authDomain: "crmvue2.firebaseapp.com",
  projectId: "crmvue2",
  storageBucket: "crmvue2.appspot.com",
  messagingSenderId: "722225064067",
  appId: "1:722225064067:web:df8111162b531c640a53b6",
  measurementId: "G-WP14FNP8MX"
});

let app;

firebase.auth().onAuthStateChanged(() => {
 if (!app) {

  app = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app');
}
  
});

