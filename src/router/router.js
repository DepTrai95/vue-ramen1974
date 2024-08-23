import { createRouter } from 'vue-router'
import { createWebHistory } from 'vue-router'

import Home from '../pages/home/HomePage.vue'
import Menu from '../pages/menu/Menu.vue'
import Contact from '../pages/contact/ContactPage.vue'
import Impress from '../pages/impress/Impress.vue'
import Success from '../pages/success/Success.vue'
import NotFound from '../pages/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
      meta: {
        headerHeightMax: true,
        headline: 'Ramen1974',
        showSubHeader: true,
        showBackground: true
      }
    },
    {
      path: '/menu',
      component: Menu,
      meta: {
        headline: 'Unser Menu',
        showBackground: true
      }
    },
    {
      path: '/contact',
      component: Contact,
      meta: {
        headline: 'Kontakt',
        showBackground: true
      }
    },
    {
      path: '/impressum',
      component: Impress,
      meta: {
        headline: 'Impressum'
      }
    },
    {
      path: '/success',
      component: Success,
      meta: {
        headline: 'Formular abgeschickt'
      }
    },
    {
      path: '/:notFound(.*)',
      component: NotFound,
      meta: {
        headline: '404 - Page not found',
        showBackground: false
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router
