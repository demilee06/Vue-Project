import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EducationView from '@/views/EducationView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ContactView from '@/views/ContactView.vue'

// import NavBarComp from '../components/NavbarComp.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/education',
    name:'education',
    component: EducationView 
  },
  {
    path:'/projects',
    name:'projects',
    component: ProjectsView 
  },

  {
    path:'/contact',
    name:'contact',
    component:ContactView
  },
  {
    path:'/navBar',
    name:'navBar',
    // component:NavBarComp
  },
  {
    path:'/footer',
    name:'footer',
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
