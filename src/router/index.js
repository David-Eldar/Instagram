import { createRouter, createWebHistory } from 'vue-router';
import postApp from '../views/post-app.vue';
import postDetails from '../views/post-details.vue';
import postEdit from '../views/post-edit.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: postApp,
    },
    {
      path: '/post/edit/:postId?',
      component: postEdit,
    },
    // {
    //   path: '/post/:postId?',
    //   component: postDetails,
    // },
    {
      path: '/post',
      component: postDetails,
    },
  ],
});

export default router;
