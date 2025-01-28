import { createRouter, createWebHistory } from 'vue-router'
import {HomeView,RegisterView,LoginView,DocumentView,NewsView,NewsDetailsView} from '@/views'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Home Page'}
   },
   {
    path: '/register',
    name: 'register',
    component: RegisterView,
    meta : { title: 'Register Page'}
   },
   {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta : { title: 'Login Page'}
   },
   {
    path: '/documents',
    name: 'documents',
    component: DocumentView, 
    meta: { title: 'Document Page'}
   },
   {
    path: '/news',
    name: 'news',
    component: NewsView,
    meta: { title: 'News Page'}
   },
   {
    path: '/news/:shortname/:data',
    name: 'newsDetails',
    component: NewsDetailsView,
    meta: { title: 'News Details Page'}
   }
  ],
})

export default router
