import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _195d1dae = () => interopDefault(import('..\\pages\\geci\\index.vue' /* webpackChunkName: "pages/geci/index" */))
const _adcd1cb6 = () => interopDefault(import('..\\pages\\gecia\\index.vue' /* webpackChunkName: "pages/gecia/index" */))
const _7fa33c7c = () => interopDefault(import('..\\pages\\gecid\\index.vue' /* webpackChunkName: "pages/gecid/index" */))
const _458d47da = () => interopDefault(import('..\\pages\\signup\\index.vue' /* webpackChunkName: "pages/signup/index" */))
const _379209f0 = () => interopDefault(import('..\\pages\\geci\\managers\\index.vue' /* webpackChunkName: "pages/geci/managers/index" */))
const _3745ee16 = () => interopDefault(import('..\\pages\\geci\\signup\\index.vue' /* webpackChunkName: "pages/geci/signup/index" */))
const _558a5512 = () => interopDefault(import('..\\pages\\gecia\\date\\index.vue' /* webpackChunkName: "pages/gecia/date/index" */))
const _01c05f24 = () => interopDefault(import('..\\pages\\gecia\\datebook\\index.vue' /* webpackChunkName: "pages/gecia/datebook/index" */))
const _30f2b18e = () => interopDefault(import('..\\pages\\gecia\\departments\\index.vue' /* webpackChunkName: "pages/gecia/departments/index" */))
const _966e3e0a = () => interopDefault(import('..\\pages\\gecia\\history\\index.vue' /* webpackChunkName: "pages/gecia/history/index" */))
const _7a38a674 = () => interopDefault(import('..\\pages\\gecia\\profile\\index.vue' /* webpackChunkName: "pages/gecia/profile/index" */))
const _da9dff6a = () => interopDefault(import('..\\pages\\gecid\\datebook\\index.vue' /* webpackChunkName: "pages/gecid/datebook/index" */))
const _4ad87d04 = () => interopDefault(import('..\\pages\\gecid\\history\\index.vue' /* webpackChunkName: "pages/gecid/history/index" */))
const _2ea2e56e = () => interopDefault(import('..\\pages\\gecid\\profile\\index.vue' /* webpackChunkName: "pages/gecid/profile/index" */))
const _7427091c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _195d1dae,
    name: "geci"
  }, {
    path: "/gecia",
    component: _adcd1cb6,
    name: "gecia"
  }, {
    path: "/gecid",
    component: _7fa33c7c,
    name: "gecid"
  }, {
    path: "/signup",
    component: _458d47da,
    name: "signup"
  }, {
    path: "/geci/managers",
    component: _379209f0,
    name: "geci-managers"
  }, {
    path: "/geci/signup",
    component: _3745ee16,
    name: "geci-signup"
  }, {
    path: "/gecia/date",
    component: _558a5512,
    name: "gecia-date"
  }, {
    path: "/gecia/datebook",
    component: _01c05f24,
    name: "gecia-datebook"
  }, {
    path: "/gecia/departments",
    component: _30f2b18e,
    name: "gecia-departments"
  }, {
    path: "/gecia/history",
    component: _966e3e0a,
    name: "gecia-history"
  }, {
    path: "/gecia/profile",
    component: _7a38a674,
    name: "gecia-profile"
  }, {
    path: "/gecid/datebook",
    component: _da9dff6a,
    name: "gecid-datebook"
  }, {
    path: "/gecid/history",
    component: _4ad87d04,
    name: "gecid-history"
  }, {
    path: "/gecid/profile",
    component: _2ea2e56e,
    name: "gecid-profile"
  }, {
    path: "/",
    component: _7427091c,
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
