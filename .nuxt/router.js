import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

<<<<<<< HEAD
const _49373f70 = () => interopDefault(import('..\\pages\\cita\\index.vue' /* webpackChunkName: "pages/cita/index" */))
const _2088c3f7 = () => interopDefault(import('..\\pages\\departamento\\index.vue' /* webpackChunkName: "pages/departamento/index" */))
const _7de5dc2c = () => interopDefault(import('..\\pages\\historial\\index.vue' /* webpackChunkName: "pages/historial/index" */))
const _fddcd588 = () => interopDefault(import('..\\pages\\home\\index.vue' /* webpackChunkName: "pages/home/index" */))
const _768a8b23 = () => interopDefault(import('..\\pages\\signup\\index.vue' /* webpackChunkName: "pages/signup/index" */))
const _be7bd08a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
=======
const _6b19072a = () => interopDefault(import('..\\pages\\gecia\\index.vue' /* webpackChunkName: "pages/gecia/index" */))
const _3cef26f0 = () => interopDefault(import('..\\pages\\gecid\\index.vue' /* webpackChunkName: "pages/gecid/index" */))
const _4f7495d4 = () => interopDefault(import('..\\pages\\signup\\index.vue' /* webpackChunkName: "pages/signup/index" */))
const _19119886 = () => interopDefault(import('..\\pages\\gecia\\date\\index.vue' /* webpackChunkName: "pages/gecia/date/index" */))
const _257a4ef0 = () => interopDefault(import('..\\pages\\gecia\\departments\\index.vue' /* webpackChunkName: "pages/gecia/departments/index" */))
const _47e794f5 = () => interopDefault(import('..\\pages\\gecia\\history\\index.vue' /* webpackChunkName: "pages/gecia/history/index" */))
const _560260c0 = () => interopDefault(import('..\\pages\\gecia\\profile\\index.vue' /* webpackChunkName: "pages/gecia/profile/index" */))
const _7bcd4143 = () => interopDefault(import('..\\pages\\gecid\\profile\\index.vue' /* webpackChunkName: "pages/gecid/profile/index" */))
const _3dd6636c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
>>>>>>> main

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
<<<<<<< HEAD
    path: "/cita",
    component: _49373f70,
    name: "cita"
  }, {
    path: "/departamento",
    component: _2088c3f7,
    name: "departamento"
  }, {
    path: "/historial",
    component: _7de5dc2c,
    name: "historial"
  }, {
    path: "/home",
    component: _fddcd588,
    name: "home"
  }, {
    path: "/signup",
    component: _768a8b23,
=======
    path: "/gecia",
    component: _6b19072a,
    name: "gecia"
  }, {
    path: "/gecid",
    component: _3cef26f0,
    name: "gecid"
  }, {
    path: "/signup",
    component: _4f7495d4,
>>>>>>> main
    name: "signup"
  }, {
    path: "/gecia/date",
    component: _19119886,
    name: "gecia-date"
  }, {
    path: "/gecia/departments",
    component: _257a4ef0,
    name: "gecia-departments"
  }, {
    path: "/gecia/history",
    component: _47e794f5,
    name: "gecia-history"
  }, {
    path: "/gecia/profile",
    component: _560260c0,
    name: "gecia-profile"
  }, {
    path: "/gecid/profile",
    component: _7bcd4143,
    name: "gecid-profile"
  }, {
    path: "/",
<<<<<<< HEAD
    component: _be7bd08a,
=======
    component: _3dd6636c,
>>>>>>> main
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
