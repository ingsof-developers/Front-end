import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _49373f70 = () => interopDefault(import('..\\pages\\cita\\index.vue' /* webpackChunkName: "pages/cita/index" */))
const _2088c3f7 = () => interopDefault(import('..\\pages\\departamento\\index.vue' /* webpackChunkName: "pages/departamento/index" */))
const _fddcd588 = () => interopDefault(import('..\\pages\\home\\index.vue' /* webpackChunkName: "pages/home/index" */))
const _768a8b23 = () => interopDefault(import('..\\pages\\signup\\index.vue' /* webpackChunkName: "pages/signup/index" */))
const _be7bd08a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/cita",
    component: _49373f70,
    name: "cita"
  }, {
    path: "/departamento",
    component: _2088c3f7,
    name: "departamento"
  }, {
    path: "/home",
    component: _fddcd588,
    name: "home"
  }, {
    path: "/signup",
    component: _768a8b23,
    name: "signup"
  }, {
    path: "/",
    component: _be7bd08a,
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
