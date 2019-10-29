import Vue from 'vue';
import App from './App.vue';
import router from './router';
import i18n from './i18n';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.config.productionTip = false;

Vue.use(Buefy);

new Vue({
    router,
    i18n,
    render: (h) => h(App),
}).$mount('#app');
