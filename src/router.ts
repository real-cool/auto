import {createRouter, createWebHashHistory} from 'vue-router'
import TabView from "./pages/TabIndex.vue";
import TestView from "./pages/Test.vue";
import LogView from "./pages/Logs.vue";
import HomeView from "./pages/Home.vue";

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: HomeView },
  { path: '/tab', component: TabView },
  { path: '/test', component: TestView },
  { path: '/log', component: LogView },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
export default router