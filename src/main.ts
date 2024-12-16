import './assets/css/main.css';
import './assets/scss/style.scss';
import { ref } from "vue";


import { createApp } from 'vue';
import App from './App.vue';

export const isAsideVisible = ref(true);
createApp(App).mount('#app');
