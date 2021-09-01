//lodash
window._ = require('lodash');

//Axios
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

//Vue
//import createapp from 'vue'
//import app from '../vue/app.vue'

//window.app = createapp({app});
//window.vm = app.mount('#app');

import { createApp } from 'vue';
import App from '../vue/app.vue'
createApp(App).mount('#app')