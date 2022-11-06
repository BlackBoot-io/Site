export const BaseFAQ = () => import('../..\\components\\base\\FAQ.vue' /* webpackChunkName: "components/base-f-a-q" */).then(c => wrapFunctional(c.default || c))
export const BaseFooter = () => import('../..\\components\\base\\Footer.vue' /* webpackChunkName: "components/base-footer" */).then(c => wrapFunctional(c.default || c))
export const BaseHeader = () => import('../..\\components\\base\\Header.vue' /* webpackChunkName: "components/base-header" */).then(c => wrapFunctional(c.default || c))
export const BaseLogo = () => import('../..\\components\\base\\Logo.vue' /* webpackChunkName: "components/base-logo" */).then(c => wrapFunctional(c.default || c))
export const SwiperCrowdsale = () => import('../..\\components\\swiper\\Crowdsale.vue' /* webpackChunkName: "components/swiper-crowdsale" */).then(c => wrapFunctional(c.default || c))
export const SwiperSlideshow = () => import('../..\\components\\swiper\\Slideshow.vue' /* webpackChunkName: "components/swiper-slideshow" */).then(c => wrapFunctional(c.default || c))
export const SwiperTeam = () => import('../..\\components\\swiper\\Team.vue' /* webpackChunkName: "components/swiper-team" */).then(c => wrapFunctional(c.default || c))
export const SectionAdvantages = () => import('../..\\components\\section\\Advantages.vue' /* webpackChunkName: "components/section-advantages" */).then(c => wrapFunctional(c.default || c))
export const SectionBenefits = () => import('../..\\components\\section\\Benefits.vue' /* webpackChunkName: "components/section-benefits" */).then(c => wrapFunctional(c.default || c))
export const SectionBlog = () => import('../..\\components\\section\\Blog.vue' /* webpackChunkName: "components/section-blog" */).then(c => wrapFunctional(c.default || c))
export const SectionCrowdsale = () => import('../..\\components\\section\\Crowdsale.vue' /* webpackChunkName: "components/section-crowdsale" */).then(c => wrapFunctional(c.default || c))
export const SectionDetails = () => import('../..\\components\\section\\Details.vue' /* webpackChunkName: "components/section-details" */).then(c => wrapFunctional(c.default || c))
export const SectionFeatures = () => import('../..\\components\\section\\Features.vue' /* webpackChunkName: "components/section-features" */).then(c => wrapFunctional(c.default || c))
export const SectionPublicSale = () => import('../..\\components\\section\\PublicSale.vue' /* webpackChunkName: "components/section-public-sale" */).then(c => wrapFunctional(c.default || c))
export const SectionRoadmap = () => import('../..\\components\\section\\Roadmap.vue' /* webpackChunkName: "components/section-roadmap" */).then(c => wrapFunctional(c.default || c))
export const SectionServices = () => import('../..\\components\\section\\Services.vue' /* webpackChunkName: "components/section-services" */).then(c => wrapFunctional(c.default || c))
export const SectionSpotlight = () => import('../..\\components\\section\\Spotlight.vue' /* webpackChunkName: "components/section-spotlight" */).then(c => wrapFunctional(c.default || c))
export const SectionSteps = () => import('../..\\components\\section\\Steps.vue' /* webpackChunkName: "components/section-steps" */).then(c => wrapFunctional(c.default || c))
export const SectionSupport = () => import('../..\\components\\section\\Support.vue' /* webpackChunkName: "components/section-support" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
