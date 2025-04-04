import { createRouter } from 'vue-router'
import { createWebHistory } from 'vue-router'

import Home from '@/pages/home/HomePage.vue'
import Menu from '@/pages/menu/Menu.vue'
import Franchise from '@/pages/franchise/Franchise.vue'
import Contact from '@/pages/contact/ContactPage.vue'
import Imprint from '@/pages/imprint/Imprint.vue'
import Privacy from '@/pages/privacy/Privacy.vue'
import Success from '@/pages/success/Success.vue'
import Error from '@/pages/error/Error.vue'
import NotFound from '@/pages/NotFound.vue'

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
      path: '/franchise',
      component: Franchise,
      meta: {
        headline: 'Franchise',
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
      component: Imprint,
      meta: {
        headline: 'Impressum'
      }
    },
    {
      path: '/privacy',
      component: Privacy,
      meta: {
        headline: 'Datenschutz'
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
      path: '/error',
      component: Error,
      meta: {
        headline: 'Fehler'
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
