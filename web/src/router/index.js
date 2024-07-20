import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/HomeView.vue'
import CalendarView from '@/views/calendar/CalendarView.vue'
import StatisticsView from '@/views/statistics/StatisticsView.vue'
import UserView from '@/views/user/UserView.vue'
import NewBookkeepingView from '@/views/bookkeeping/NewBookkeepingView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: CalendarView,
  },
  {
    path: '/statistics',
    name: 'statistics',
    component: StatisticsView,
  },
  {
    path: '/user',
    name: 'user',
    component: UserView,
  },
  {
    path: '/newbookkeeping',
    name: 'newbookkeeping',
    component: NewBookkeepingView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
