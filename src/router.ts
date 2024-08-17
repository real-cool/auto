import { createMemoryHistory, createRouter } from 'vue-router'

import Action from './pages/Action.vue'
import Task from "./pages/Task.vue";
import ActionTpl from "./pages/ActionTpl.vue";


const routes = [
  { path: '/', redirect: '/action' },
  { path: '/action', component: Action },
  { path: '/task', component: Task },
  { path: '/taskTpl', component: ActionTpl },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router