import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      redirect: '/home-page',
    },
    {
      path: '/login',
      name: 'PageLogin',
      component: () => import('../views/login/page-login.vue'),
    },
    {
      path: '/home-page',
      name: 'HomePage',
      component: () => import('../views/home-page/home-page.vue'),
      children: [
        {
          path: 'home',
          name: 'Home',
          component: () => import('../views/vue3-syntax/parent-child/index.vue'),
        },
        {
          path: 'vue-test',
          name: 'VueTest',
          component: () => import('../views/vue3-syntax/syntax-test/index.vue'),
        },
        {
          path: 'vue-i18n',
          name: 'VueI18n',
          component: () => import('../views/plugins/i18n/index.vue'),
          children: [],
        },
        {
          path: 'rem-size',
          name: 'RemSize',
          component: () => import('../views/practices/responsive/index.vue'),
          children: [],
        },
        {
          path: 'console-info',
          name: 'ConsoleInfo',
          component: () => import('../views/practices/logging/index.vue'),
          children: [],
        },
        {
          path: 'tailwindcss-test',
          name: 'Tailwindcss-test',
          component: () => import('../views/plugins/tailwindcss/index.vue'),
        },
        {
          path: 'vue-use-test',
          name: 'Vue-use-test',
          component: () => import('../views/plugins/vueuse/index.vue'),
        },
      ],
    },
    {
      path: '/:pathMatch(.*)',
      name: 'NotFound',
      component: () => import('../views/not-found/not-found.vue'),
    },
  ],
})

export default router
