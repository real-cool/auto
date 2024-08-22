import {createRouter, createWebHashHistory} from 'vue-router'
import TabView from "./pages/TabIndex.vue";
import TestView from "./pages/Test.vue";
import FloatView from "./pages/Float.vue";
import HomeView from "./pages/Home.vue";

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: HomeView },
  { path: '/tab', component: TabView },
  { path: '/test', component: TestView },
  { path: '/float', component: FloatView },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
export default router