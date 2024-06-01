import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6ea90d6f = () => interopDefault(import('..\\pages\\gecia\\index.vue' /* webpackChunkName: "pages/gecia/index" */))
const _f48404e8 = () => interopDefault(import('..\\pages\\gecid\\index.vue' /* webpackChunkName: "pages/gecid/index" */))
const _31f12550 = () => interopDefault(import('..\\pages\\signup\\index.vue' /* webpackChunkName: "pages/signup/index" */))
const _1714f1c1 = () => interopDefault(import('..\\pages\\gecia\\date\\index.vue' /* webpackChunkName: "pages/gecia/date/index" */))
const _529eb7b8 = () => interopDefault(import('..\\pages\\gecia\\datebook\\index.vue' /* webpackChunkName: "pages/gecia/datebook/index" */))
const _a44fe3f8 = () => interopDefault(import('..\\pages\\gecia\\departments\\index.vue' /* webpackChunkName: "pages/gecia/departments/index" */))
const _0cea2f1e = () => interopDefault(import('..\\pages\\gecia\\history\\index.vue' /* webpackChunkName: "pages/gecia/history/index" */))
const _07a5b43c = () => interopDefault(import('..\\pages\\gecia\\profile\\index.vue' /* webpackChunkName: "pages/gecia/profile/index" */))
const _33a030d6 = () => interopDefault(import('..\\pages\\gecid\\datebook\\index.vue' /* webpackChunkName: "pages/gecid/datebook/index" */))
const _1f55c8f4 = () => interopDefault(import('..\\pages\\gecid\\history\\index.vue' /* webpackChunkName: "pages/gecid/history/index" */))
const _2d7094bf = () => interopDefault(import('..\\pages\\gecid\\profile\\index.vue' /* webpackChunkName: "pages/gecid/profile/index" */))
const _27afa230 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _6ea90d6f,
    name: "gecia"
  }, {
    path: "/gecid",
    component: _f48404e8,
    name: "gecid"
  }, {
    path: "/signup",
    component: _31f12550,
    name: "signup"
  }, {
    path: "/gecia/date",
    component: _1714f1c1,
    name: "gecia-date"
  }, {
    path: "/gecia/datebook",
    component: _529eb7b8,
    name: "gecia-datebook"
  }, {
    path: "/gecia/departments",
    component: _a44fe3f8,
    name: "gecia-departments"
  }, {
    path: "/gecia/history",
    component: _0cea2f1e,
    name: "gecia-history"
  }, {
    path: "/gecia/profile",
    component: _07a5b43c,
    name: "gecia-profile"
  }, {
    path: "/gecid/datebook",
    component: _33a030d6,
    name: "gecid-datebook"
  }, {
    path: "/gecid/history",
    component: _1f55c8f4,
    name: "gecid-history"
  }, {
    path: "/gecid/profile",
    component: _2d7094bf,
    name: "gecid-profile"
  }, {
    path: "/",
    component: _27afa230,
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
