import { createRouter, createWebHistory } from 'vue-router';

import NotFound from '@/views/NotFound.vue';
import Home from '@/views/Home.vue';
import App from '@/views/App.vue';
import Signin from '@/views/Signin.vue';

const routes = [
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: NotFound,
    meta: {
      title: '404'
    }
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/app',
    name: 'app',
    component: App
  },
  {
    path: '/signin',
    name: 'signin',
    component: Signin,
    meta: {
      title: 'Accesso'
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
