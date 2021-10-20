import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Student from '../views/Student.vue'
import Examinations from '../views/Examinations.vue'
import Papers from '../views/Papers.vue'
import Marks from '../views/Student.vue'
import Grades from '../views/Grades.vue'
import Results from '../views/Results.vue'
Vue.use(VueRouter)

const routes = 
[
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/student',
    name: 'student',
    component: Student,
  },
    {
    path: '/examinations',
    name: 'examinations',
    component: Examinations,
  },
  {
    path: '/papers',
    name: 'Papers',
    component: Papers,
  },
   {
    path: '/marks',
    name: 'marks',
    component: Marks,
  },
     {
    path: '/grades',
    name: 'grades',
    component: Grades,
  },
   {
    path: '/results',
    name: 'results',
    component: Results,
  },
]

const router = new VueRouter({
  routes
})

export default router
