import { createRouter, createWebHashHistory} from 'vue-router'

import A from './components/a.vue'
import B from './components/b.vue'
import C from './components/c.vue'
import D from './components/d.vue'


const routes = [
  { path: '/a', component: A },
  { path: '/b', component: B },
  { path: '/c', component: C },
  { path: '/d', component: D },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
