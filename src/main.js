import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './assets/styles.css'; // Optional: for custom styles
import store from './store';

// For npm Font Awesome setup (optional)
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// import { faUser, faEnvelope, faLock, faUserPlus, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

// For npm Font Awesome setup (optional)
// library.add(faUser, faEnvelope, faLock, faUserPlus, faSignInAlt);
// createApp(App).component('font-awesome-icon', FontAwesomeIcon)

createApp(App).use(store).use(router).mount('#app');
