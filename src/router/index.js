import Vue from 'vue'
import VueRouter from 'vue-router'
import WeatherView from '../views/WeatherView.vue'
import AreaView from '@/views/AreaView.vue'
import HomeView from '@/views/HomeView.vue';
import PurchaseView from '@/views/PurchaseView.vue';
import NewproductView from '@/views/NewproductView.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // 購入ページのルートを追加
  {
    path: '/purchase',
    name: 'purchase',
    component: PurchaseView
  },
  {
    path: '/newproduct',
    name: 'newproduct',
    component: NewproductView
  },
   {
    path: '/Area',
    name: 'Area',
    component: AreaView
  },
{
    path: '/Weather',
    name: 'Weather',
    component: WeatherView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router