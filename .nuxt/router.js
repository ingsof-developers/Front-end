import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _49551db8 = () => interopDefault(import('..\\pages\\geci\\index.vue' /* webpackChunkName: "pages/geci/index" */))
const _262b8cef = () => interopDefault(import('..\\pages\\gecia\\index.vue' /* webpackChunkName: "pages/gecia/index" */))
const _3d407d0c = () => interopDefault(import('..\\pages\\gecid\\index.vue' /* webpackChunkName: "pages/gecid/index" */))
const _159927c6 = () => interopDefault(import('..\\pages\\historial\\index.vue' /* webpackChunkName: "pages/historial/index" */))
const _6abe95d0 = () => interopDefault(import('..\\pages\\signup\\index.vue' /* webpackChunkName: "pages/signup/index" */))
const _578df2fe = () => interopDefault(import('..\\pages\\geci\\managers\\index.vue' /* webpackChunkName: "pages/geci/managers/index" */))
const _08c66b8c = () => interopDefault(import('..\\pages\\geci\\signup\\index.vue' /* webpackChunkName: "pages/geci/signup/index" */))
const _4f99d141 = () => interopDefault(import('..\\pages\\gecia\\date\\index.vue' /* webpackChunkName: "pages/gecia/date/index" */))
const _12b05190 = () => interopDefault(import('..\\pages\\gecia\\datebook\\index.vue' /* webpackChunkName: "pages/gecia/datebook/index" */))
const _a0fe82f8 = () => interopDefault(import('..\\pages\\gecia\\departments\\index.vue' /* webpackChunkName: "pages/gecia/departments/index" */))
const _281fd8f1 = () => interopDefault(import('..\\pages\\gecia\\history\\index.vue' /* webpackChunkName: "pages/gecia/history/index" */))
const _363aa4bc = () => interopDefault(import('..\\pages\\gecia\\profile\\index.vue' /* webpackChunkName: "pages/gecia/profile/index" */))
const _eb8df1d6 = () => interopDefault(import('..\\pages\\gecid\\datebook\\index.vue' /* webpackChunkName: "pages/gecid/datebook/index" */))
const _4deab974 = () => interopDefault(import('..\\pages\\gecid\\history\\index.vue' /* webpackChunkName: "pages/gecid/history/index" */))
const _5c05853f = () => interopDefault(import('..\\pages\\gecid\\profile\\index.vue' /* webpackChunkName: "pages/gecid/profile/index" */))
const _7f53c97a = () => interopDefault(import('..\\pages\\gecid\\table\\index.vue' /* webpackChunkName: "pages/gecid/table/index" */))
const _2fae1f68 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _49551db8,
    name: "geci"
  }, {
    path: "/gecia",
    component: _262b8cef,
    name: "gecia"
  }, {
    path: "/gecid",
    component: _3d407d0c,
    name: "gecid"
  }, {
    path: "/historial",
    component: _159927c6,
    name: "historial"
  }, {
    path: "/signup",
    component: _6abe95d0,
    name: "signup"
  }, {
    path: "/geci/managers",
    component: _578df2fe,
    name: "geci-managers"
  }, {
    path: "/geci/signup",
    component: _08c66b8c,
    name: "geci-signup"
  }, {
    path: "/gecia/date",
    component: _4f99d141,
    name: "gecia-date"
  }, {
    path: "/gecia/datebook",
    component: _12b05190,
    name: "gecia-datebook"
  }, {
    path: "/gecia/departments",
    component: _a0fe82f8,
    name: "gecia-departments"
  }, {
    path: "/gecia/history",
    component: _281fd8f1,
    name: "gecia-history"
  }, {
    path: "/gecia/profile",
    component: _363aa4bc,
    name: "gecia-profile"
  }, {
    path: "/gecid/datebook",
    component: _eb8df1d6,
    name: "gecid-datebook"
  }, {
    path: "/gecid/history",
    component: _4deab974,
    name: "gecid-history"
  }, {
    path: "/gecid/profile",
    component: _5c05853f,
    name: "gecid-profile"
  }, {
    path: "/gecid/table",
    component: _7f53c97a,
    name: "gecid-table"
  }, {
    path: "/",
    component: _2fae1f68,
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
