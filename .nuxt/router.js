import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0367956a = () => interopDefault(import('..\\pages\\gecia\\index.vue' /* webpackChunkName: "pages/gecia/index" */))
const _1a7c8587 = () => interopDefault(import('..\\pages\\gecid\\index.vue' /* webpackChunkName: "pages/gecid/index" */))
const _35039cb5 = () => interopDefault(import('..\\pages\\signup\\index.vue' /* webpackChunkName: "pages/signup/index" */))
const _27635d08 = () => interopDefault(import('..\\pages\\gecia\\date\\index.vue' /* webpackChunkName: "pages/gecia/date/index" */))
const _b0bcd42e = () => interopDefault(import('..\\pages\\gecia\\departments\\index.vue' /* webpackChunkName: "pages/gecia/departments/index" */))
const _19362ad6 = () => interopDefault(import('..\\pages\\gecia\\history\\index.vue' /* webpackChunkName: "pages/gecia/history/index" */))
const _2750f6a1 = () => interopDefault(import('..\\pages\\gecia\\profile\\index.vue' /* webpackChunkName: "pages/gecia/profile/index" */))
const _4d1bd724 = () => interopDefault(import('..\\pages\\gecid\\profile\\index.vue' /* webpackChunkName: "pages/gecid/profile/index" */))
const _58b24966 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/gecia",
    component: _0367956a,
    name: "gecia"
  }, {
    path: "/gecid",
    component: _1a7c8587,
    name: "gecid"
  }, {
    path: "/signup",
    component: _35039cb5,
    name: "signup"
  }, {
    path: "/gecia/date",
    component: _27635d08,
    name: "gecia-date"
  }, {
    path: "/gecia/departments",
    component: _b0bcd42e,
    name: "gecia-departments"
  }, {
    path: "/gecia/history",
    component: _19362ad6,
    name: "gecia-history"
  }, {
    path: "/gecia/profile",
    component: _2750f6a1,
    name: "gecia-profile"
  }, {
    path: "/gecid/profile",
    component: _4d1bd724,
    name: "gecid-profile"
  }, {
    path: "/",
    component: _58b24966,
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
