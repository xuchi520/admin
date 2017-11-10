import Vue from 'vue'
import Router from 'vue-router'
import Index from '../containers/index.vue'
import Detail from '../containers/detail.vue'
import OrderList from '../containers/orderList.vue'
import Analysis from '../containers/details/analysis.vue'
import Count from '../containers/details/count.vue'
import Forecast from '../containers/details/forecast.vue'
import Publish from '../containers/details/publish.vue'

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      component: Index,
    },
    {
      path:'/orderList',
      component:OrderList
    },
    {
      path: '/detail',
      component: Detail,
      redirect:'/detail/analysis',
      children: [
       {
          path: 'analysis',
          component: Analysis
        },
        {
          path: 'count',
          component: Count
        },
        {
          path: 'forecast',
          component: Forecast
        },
        {
          path: 'publish',
          component: Publish
        },
      ]
    },
  ]
})
