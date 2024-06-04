import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4fc85b68 = () => interopDefault(import('..\\pages\\geci\\index.vue' /* webpackChunkName: "pages/geci/index" */))
const _4015eb2b = () => interopDefault(import('..\\pages\\gecia\\index.vue' /* webpackChunkName: "pages/gecia/index" */))
const _572adb48 = () => interopDefault(import('..\\pages\\gecid\\index.vue' /* webpackChunkName: "pages/gecid/index" */))
const _3a0c4c59 = () => interopDefault(import('..\\pages\\historial\\index.vue' /* webpackChunkName: "pages/historial/index" */))
const _e3c001d8 = () => interopDefault(import('..\\pages\\signup\\index.vue' /* webpackChunkName: "pages/signup/index" */))
const _04b84f7c = () => interopDefault(import('..\\pages\\geci\\managers\\index.vue' /* webpackChunkName: "pages/geci/managers/index" */))
const _4a465c60 = () => interopDefault(import('..\\pages\\geci\\signup\\index.vue' /* webpackChunkName: "pages/geci/signup/index" */))
const _7c88db06 = () => interopDefault(import('..\\pages\\gecia\\date\\index.vue' /* webpackChunkName: "pages/gecia/date/index" */))
const _134e9a74 = () => interopDefault(import('..\\pages\\gecia\\datebook\\index.vue' /* webpackChunkName: "pages/gecia/datebook/index" */))
const _3c4b3c70 = () => interopDefault(import('..\\pages\\gecia\\departments\\index.vue' /* webpackChunkName: "pages/gecia/departments/index" */))
const _63948396 = () => interopDefault(import('..\\pages\\gecia\\history\\index.vue' /* webpackChunkName: "pages/gecia/history/index" */))
const _475eec00 = () => interopDefault(import('..\\pages\\gecia\\profile\\index.vue' /* webpackChunkName: "pages/gecia/profile/index" */))
const _b2406b5e = () => interopDefault(import('..\\pages\\gecid\\datebook\\index.vue' /* webpackChunkName: "pages/gecid/datebook/index" */))
const _17fec290 = () => interopDefault(import('..\\pages\\gecid\\history\\index.vue' /* webpackChunkName: "pages/gecid/history/index" */))
const _021b6a83 = () => interopDefault(import('..\\pages\\gecid\\profile\\index.vue' /* webpackChunkName: "pages/gecid/profile/index" */))
const _516a2fbe = () => interopDefault(import('..\\pages\\gecid\\table\\index.vue' /* webpackChunkName: "pages/gecid/table/index" */))
const _3c7c43db = () => interopDefault(import('..\\pages\\gecid\\table\\StudentAppointments.vue' /* webpackChunkName: "pages/gecid/table/StudentAppointments" */))
const _061f0cac = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/geci",
    component: _4fc85b68,
    name: "geci"
  }, {
    path: "/gecia",
    component: _4015eb2b,
    name: "gecia"
  }, {
    path: "/gecid",
    component: _572adb48,
    name: "gecid"
  }, {
    path: "/historial",
    component: _3a0c4c59,
    name: "historial"
  }, {
    path: "/signup",
    component: _e3c001d8,
    name: "signup"
  }, {
    path: "/geci/managers",
    component: _04b84f7c,
    name: "geci-managers"
  }, {
    path: "/geci/signup",
    component: _4a465c60,
    name: "geci-signup"
  }, {
    path: "/gecia/date",
    component: _7c88db06,
    name: "gecia-date"
  }, {
    path: "/gecia/datebook",
    component: _134e9a74,
    name: "gecia-datebook"
  }, {
    path: "/gecia/departments",
    component: _3c4b3c70,
    name: "gecia-departments"
  }, {
    path: "/gecia/history",
    component: _63948396,
    name: "gecia-history"
  }, {
    path: "/gecia/profile",
    component: _475eec00,
    name: "gecia-profile"
  }, {
    path: "/gecid/datebook",
    component: _b2406b5e,
    name: "gecid-datebook"
  }, {
    path: "/gecid/history",
    component: _17fec290,
    name: "gecid-history"
  }, {
    path: "/gecid/profile",
    component: _021b6a83,
    name: "gecid-profile"
  }, {
    path: "/gecid/table",
    component: _516a2fbe,
    name: "gecid-table"
  }, {
    path: "/gecid/table/StudentAppointments",
    component: _3c7c43db,
    name: "student-appointments"
  }, {
    path: "/",
    component: _061f0cac,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
