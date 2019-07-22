import Vue from 'vue'
import Router from 'vue-router'
import EventCreate from './views/EventCreate.vue'
import EventList from './views/EventList.vue'
import EventShow from './views/EventShow.vue'
import Komponenta1 from './components/Komponenta1.vue'
import Komponenta2 from './components/Komponenta2.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventList
    },
    {
      path: '/event/:id',
      name: 'event-show',
      component: EventShow,
      props: true
    },
    {
      path: '/event/create',
      name: 'event-create',
      component: EventCreate
    },
    {
      path: '/komponenta1',
      name: 'komponenta1',
      component: Komponenta1,
      children: [
        {
          path: 'komponenta2',
          component: Komponenta2
        }
      ]
    }
  ]
})
