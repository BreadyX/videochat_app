import { createRouter, createWebHistory } from 'vue-router';

import Signin from '@/views/Signin.vue';

const routes = [
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
