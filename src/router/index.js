// In your router configuration file (e.g., router/index.js or router.js)
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Products from '../views/ProductsPage.vue';
import Admin from '../views/Admin.vue';
import Contact from '../views/ContactPage.vue';
import SignUp from '../views/SignUp.vue';
import Login from '../views/LoginPage.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/products', name: 'Products', component: Products },
  { path: '/admin', name: 'Admin', component: Admin },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/signup', name: 'SignUp', component: SignUp },
  { path: '/login', name: 'Login', component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
