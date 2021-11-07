import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DataBinding from '../views/DataBinding.vue'
import DataBindingHtml from '../views/DataBindingHtml.vue'
import DataBindingInputText from '../views/DataBindingInputText.vue'
import DataBindingSelect from '../views/DataBindingSelect'
import DataBindingCheckbox2 from '../views/DataBindingCheckbox2'
import DbindingButton from '../views/DbindingButton'
import DbindingClass from '../views/DbindingClass'
import DbindingList from '../views/DbindingList'
import EventClick from '../views/EventClick'
import DataBindingList2 from '../views/DataBindingList2'
import NestedComponent from '../views/NestedComponent'
import ParentComponent from '../views/ParentComponent'
import ParentComponent4 from '../views/ParentComponent4'
import Docs from '../views/docs'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/databindingHtml',
    name: 'DataBindingHtml',
    component: DataBindingHtml
  },
  {
    path: '/databindinginputtext',
    name: 'DataBindingInputText',
    component: DataBindingInputText
  },{
    path: '/dbselect',
    name: 'DataBindingSelect',
    component: DataBindingSelect
  },
  {
    path: '/dbcheckbox2',
    name: 'DataBindingCheckbox2',
    component: DataBindingCheckbox2
  },
  {
    path: '/dbButton',
    name: 'dbindingBUtton',
    component: DbindingButton
  },
  {
    path: '/dbclass',
    name: 'dbclass',
    component: DbindingClass
  },
  {
    path: '/dbList',
    name: 'dbList',
    component: DbindingList
  },
  {
    path: '/event',
    name: 'event',
    component: EventClick
  },
  {
    path: '/dbList2',
    name: 'dbList2',
    component: DataBindingList2
  },
  {
    path: '/nested',
    name: 'nested',
    component: NestedComponent
  },
  {
    path: '/parent',
    name: 'ParentComponent',
    component: ParentComponent
  },
  {
    path: '/parent4',
    name: 'ParentComponent4',
    component: ParentComponent4
  },{
    path: '/slot',
    name: 'SlotUseModalLayout',
    component: () => import( /* webpackChunkName: "slot" */ '../views/SlotUseModalLayout.vue')
  },
  {
    path: '/docs',
    name: 'Docs',
    component: Docs
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
