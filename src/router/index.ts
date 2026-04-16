import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: () => import('@/Views/HomePage.vue') },
    { path: '/article', name: 'articlePage', component: () => import('@/Views/ArticlePage.vue') },
    { path: '/resources', name: 'resources', component: () => import('@/Views/ResourcesPage.vue') },
    { path: '/about', name: 'about', component: () => import('@/Views/AboutPage.vue') },
  ],
})

export default router
