import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store';

import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import DashboardView from '@/views/DashboardView.vue'
import BookingView from '@/views/BookingView.vue'
import VisitView from '@/views/VisitView.vue'
import BookingListView from '@/views/BookingListView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Login',
    name: 'LoginView',
    component: LoginView,
    alias: ['/Login/:role'],
  },
  {
    path: '/Dashboard',
    name: 'DashboardView',
    component: DashboardView,
    meta: { requiresAuth: true }
  },
  {
    path: '/Booking',
    name: 'BookingView',
    component: BookingView,
    meta: { requiresAuth: true }
  },
  {
    path: '/Visit',
    name: 'VisitView',
    component: VisitView,
    meta: { requiresAuth: true }
  },
  {
    path: '/BookingList',
    name: 'BookingListView',
    component: BookingListView,
    meta: { requiresAuth: true }
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) =>
{
  if (to.matched.some(record => record.meta.requiresAuth))
  {
    // This route requires auth, check if logged in
    if (!store.getters.loggedIn)
    {
      // Not logged in, redirect to login page
      next({ name: 'LoginView' });
    } else
    {
      // Logged in, proceed to route
      next();
    }
  } else if (to.name === 'LoginView' && store.getters.loggedIn)
  {
    // If logged in and trying to access login page, redirect to dashboard
    next({ name: 'DashboardView' });
  } else
  {
    // Route does not require auth, proceed
    next();
  }
});


export default router
