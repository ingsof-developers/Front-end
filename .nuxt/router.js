import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7b94c6c2 = () => interopDefault(import('../pages/geci/index.vue' /* webpackChunkName: "pages/geci/index" */))
const _e9be9116 = () => interopDefault(import('../pages/gecia/index.vue' /* webpackChunkName: "pages/gecia/index" */))
const _49cecfb8 = () => interopDefault(import('../pages/gecid/index.vue' /* webpackChunkName: "pages/gecid/index" */))
const _2ab6cf54 = () => interopDefault(import('../pages/signup/index.vue' /* webpackChunkName: "pages/signup/index" */))
const _4fad76ae = () => interopDefault(import('../pages/geci/managers/index.vue' /* webpackChunkName: "pages/geci/managers/index" */))
const _abd5ba4a = () => interopDefault(import('../pages/geci/signup/index.vue' /* webpackChunkName: "pages/geci/signup/index" */))
const _33b16f1e = () => interopDefault(import('../pages/gecia/date/index.vue' /* webpackChunkName: "pages/gecia/date/index" */))
const _a0a7bd72 = () => interopDefault(import('../pages/gecia/datebook/index.vue' /* webpackChunkName: "pages/gecia/datebook/index" */))
const _b9b93472 = () => interopDefault(import('../pages/gecia/departments/index.vue' /* webpackChunkName: "pages/gecia/departments/index" */))
const _65db068c = () => interopDefault(import('../pages/gecia/history/index.vue' /* webpackChunkName: "pages/gecia/history/index" */))
const _17d98b8f = () => interopDefault(import('../pages/gecia/profile/index.vue' /* webpackChunkName: "pages/gecia/profile/index" */))
const _6691a464 = () => interopDefault(import('../pages/gecid/datebook/index.vue' /* webpackChunkName: "pages/gecid/datebook/index" */))
const _3611a1fd = () => interopDefault(import('../pages/gecid/history/index.vue' /* webpackChunkName: "pages/gecid/history/index" */))
const _fe4e9e5c = () => interopDefault(import('../pages/gecid/profile/index.vue' /* webpackChunkName: "pages/gecid/profile/index" */))
const _5cea94b2 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _7b94c6c2,
    name: "geci"
  }, {
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
    name: "signup"
  }, {
    path: "/geci/managers",
    component: _4fad76ae,
    name: "geci-managers"
  }, {
    path: "/geci/signup",
    component: _abd5ba4a,
    name: "geci-signup"
  }, {
    path: "/gecia/date",
    component: _19119886,
    name: "gecia-date"
  }, {
    path: "/gecia/datebook",
    component: _6050c898,
    name: "gecia-datebook"
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
    path: "/gecid/datebook",
    component: _6368cb91,
    name: "gecid-datebook"
  }, {
    path: "/gecid/history",
    component: _6db27578,
    name: "gecid-history"
  }, {
    path: "/gecid/profile",
    component: _7bcd4143,
    name: "gecid-profile"
  }, {
    path: "/",
    component: _3dd6636c,
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
