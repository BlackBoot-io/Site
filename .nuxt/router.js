import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _933dbf08 = () => interopDefault(import('..\\pages\\faq.vue' /* webpackChunkName: "pages/faq" */))
const _893c2b48 = () => interopDefault(import('..\\pages\\invest-us.vue' /* webpackChunkName: "pages/invest-us" */))
const _d50273a8 = () => interopDefault(import('..\\pages\\pricing.vue' /* webpackChunkName: "pages/pricing" */))
const _7fb5da67 = () => interopDefault(import('..\\pages\\team.vue' /* webpackChunkName: "pages/team" */))
const _512a02f7 = () => interopDefault(import('..\\pages\\use-cases\\_slug.vue' /* webpackChunkName: "pages/use-cases/_slug" */))
const _53fd44b8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/faq",
    component: _933dbf08,
    name: "faq"
  }, {
    path: "/invest-us",
    component: _893c2b48,
    name: "invest-us"
  }, {
    path: "/pricing",
    component: _d50273a8,
    name: "pricing"
  }, {
    path: "/team",
    component: _7fb5da67,
    name: "team"
  }, {
    path: "/use-cases/:slug?",
    component: _512a02f7,
    name: "use-cases-slug"
  }, {
    path: "/",
    component: _53fd44b8,
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
