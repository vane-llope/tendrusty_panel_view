import { createRouter, createWebHistory } from 'vue-router'
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
    path: '/Login/:role',
    name: 'LoginView',
    component: LoginView,
    alias: ['/Login']
  },
  {
    path: '/Dashboard',
    name: 'DashboardView',
    component: DashboardView
  },
  {
    path: '/Booking',
    name: 'BookingView',
    component: BookingView
  },
  {
    path: '/Visit',
    name: 'VisitView',
    component: VisitView
  },
  {
    path: '/BookingList',
    name: 'BookingListView',
    component: BookingListView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
