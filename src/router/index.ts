import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/article', name: 'articlePage', component: () => import('@/Views/ArticlePage.vue') },
    { path: '/', name: 'resources', component: () => import('@/Views/ResourcesPage.vue') },
    { path: '/other', name: 'other', component: () => import('@/Views/OtherPage.vue') },
  ],
})

export default router
