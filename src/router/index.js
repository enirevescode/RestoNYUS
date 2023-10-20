import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MenuPage from '../views/MenuPage.vue'
import ContactPage from '../views/ContactPage.vue'
import AproposPage from '../views/AproposPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Menu',
      name: 'MenuPage',
      component: MenuPage
    },
    {
      path: '/Contact',
      name: 'ContactPage',
      component: ContactPage
    },
    {
      path: '/Apropos',
      name: 'AproposPage',
      component: AproposPage
    },
  ]
})

export default router
