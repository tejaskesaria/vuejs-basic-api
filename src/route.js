import SignUp from './components/SignUp.vue';
import HomePage from './components/HomePage.vue';
import LoginUser from './components/LoginUser.vue';
import { createRouter, createWebHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/login',
    name: 'LoginUser',
    component: LoginUser
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;